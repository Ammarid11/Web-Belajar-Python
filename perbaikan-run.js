// Menguji solusi referensi (harus LULUS) dan contoh salah (harus GAGAL) memakai logika penilaian ASLI app.js (sumber terbaca).
// Pakai: node perbaikan-run.js   (ODYSSEY_DIR=/path bila dijalankan dari folder lain)
const fs = require('fs'), vm = require('vm'), path = require('path'), cp = require('child_process');
const ROOT = process.env.ODYSSEY_DIR || __dirname;
const app = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
const cur = fs.readFileSync(path.join(ROOT, 'curriculum.js'), 'utf8') + '\n' + fs.readFileSync(path.join(ROOT, 'curriculum-perbaikan.js'), 'utf8');
function between(s, a, b) { const i = s.indexOf(a); if (i < 0) throw new Error('penanda tidak ditemukan: ' + a); const j = s.indexOf(b, i); if (j < 0) throw new Error('penanda akhir tidak ditemukan: ' + b); return s.slice(i, j); }
const pre = between(app, 'const STORAGE_KEY', 'const levelById');
const strip = between(app, 'function stripPyComments', '/* ------------------------------------------------------------------\n       3.');
const gr = between(app, 'class Src extends String', 'function markDone');
const setupSrc = new Function('return [' + between(app, 'const SETUP = [', '].join("\\n");').slice('const SETUP = ['.length) + '].join("\\n")')();
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(cur + ';this.levelsData=levelsData;', ctx);
vm.runInContext('(function(){"use strict";' + pre + strip + gr + ';this.__X={judge,levelsData}}).call(this)', ctx);
const { judge, levelsData } = ctx.__X;
function runPy(code, task) {
  const r = cp.spawnSync('python3', [path.join(ROOT, 'py_runner.py')], { input: JSON.stringify({ setup: setupSrc, code, check: task.check || null, stdin: task.stdin || [] }), encoding: 'utf8', timeout: 30000 });
  if (r.status !== 0) throw new Error('py_runner gagal: ' + r.stderr);
  return JSON.parse(r.stdout);
}
function verdict(code, task, level) {
  if (task.mode === 'text') return judge(code, task, level, { status: 'text', chunks: [], figures: 0 });
  const o = runPy(code, task);
  return judge(code, task, level, { status: o.status, message: o.message, info: o.info, errType: o.errType,
    chunks: o.stdout ? [{ stream: 'stdout', text: o.stdout }] : [], hasOutput: o.stdout.trim() !== '', figures: 0 });
}
let nOk = 0, nBad = 0; const fails = [];
function runData(data, sparse) {
  for (const id of Object.keys(data).map(Number)) {
    const level = levelsData.find(l => l.id === id);
    if (!level) { fails.push('Level id ' + id + ' tidak ada'); continue; }
    const entries = sparse ? Object.entries(data[id]).map(([i, d]) => [Number(i), d]) : data[id].map((d, i) => [i, d]);
    for (const [i, d] of entries) {
      const task = level.tasks[i]; if (!task || !d) continue;
      const tag = `[id ${id} / soal ${i + 1}]`;
      nOk++; const v = verdict(d.ok, task, level);
      if (!v.pass) fails.push(`${tag} solusi referensi DITOLAK: ${String(v.reason).split('\n')[0]}`);
      (d.bad || []).forEach((b, k) => { nBad++; const r = verdict(b, task, level); if (r.pass) fails.push(`${tag} contoh salah #${k + 1} LOLOS (seharusnya gagal)`); });
    }
  }
}
runData(require('./perbaikan-data.js'), true);
const bd = require('./beginner-data.js'); // regresi: data lama (gap dianggap harus gagal bila sudah ditutup)
for (const id of Object.keys(bd)) { const l = levelsData.find(x => x.id === Number(id)); if (l) bd[id].forEach((d, i) => { if (d && d.gap) d.bad = (d.bad || []).concat(d.gap); }); }
runData(bd, false);
console.log(`Solusi referensi: ${nOk} | contoh salah: ${nBad}`);
if (fails.length) { console.log(`\nGAGAL (${fails.length}):\n  ` + fails.join('\n  ')); process.exit(1); }
console.log('Semua pemeriksaan lulus.');
