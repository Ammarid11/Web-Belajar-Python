// Menguji solusi referensi (harus LULUS) dan contoh salah (harus GAGAL) memakai logika penilaian ASLI app.js.
// Pakai: node tests/beginner-run.js [--strict]   (ODYSSEY_DIR=/path/ke/repo bila tidak dijalankan dari tests/)
const fs = require('fs'), vm = require('vm'), path = require('path'), cp = require('child_process');
const ROOT = process.env.ODYSSEY_DIR || path.join(__dirname, '..');
const app = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
const cur = fs.readFileSync(path.join(ROOT, 'curriculum.js'), 'utf8');
const STRICT = process.argv.includes('--strict');
const EXPLAIN = process.argv.includes('--explain');

function between(s, a, b) { const i = s.indexOf(a); if (i < 0) throw new Error('penanda tidak ditemukan: ' + a); const j = s.indexOf(b, i); if (j < 0) throw new Error('penanda akhir tidak ditemukan: ' + b); return s.slice(i, j); }
const endPre = 'e.shortTitle=e.title.replace(/^Level\\s+\\d+\\s*:\\s*/i,"")});';
const pre = app.slice(app.indexOf('const ae="pythonOdyssey.v2"'), app.indexOf(endPre) + endPre.length);
const xe = between(app, 'function xe(e,t){', 'function xt(e)');
const gr = between(app, 'class tt extends String', 'function jt(e,t,n,a)');   // class tt, nt, Tt
const jt = between(app, 'function jt(e,t,n,a){', 'function Pt(e,t)');
const setupSrc = new Function(between(app, 'const t=["import sys, ast', ';let n=null;') + ';return t')();

const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(cur + ';this.levelsData=levelsData;', ctx);
vm.runInContext('(function(){"use strict";' + pre + xe + gr + jt + ';this.__X={jt,levelsData}}).call(this)', ctx);
const { jt: grade, levelsData } = ctx.__X;

function runPy(code, task) {
  const r = cp.spawnSync('python3', [path.join(__dirname, 'py_runner.py')], {
    input: JSON.stringify({ setup: setupSrc, code, check: task.check || null, stdin: task.stdin || [] }), encoding: 'utf8', timeout: 30000 });
  if (r.status !== 0) throw new Error('py_runner gagal: ' + r.stderr);
  return JSON.parse(r.stdout);
}
function verdict(code, task, level) {
  if (task.mode === 'text') { // soal teks: tanpa menjalankan Python (sama seperti app.js)
    return grade(code, task, level, { status: 'text', chunks: [], figures: 0 }).pass;
  }
  const o = runPy(code, task);
  const a = { status: o.status, message: o.message, info: o.info, errType: o.errType,
    chunks: o.stdout ? [{ stream: 'stdout', text: o.stdout }] : [], hasOutput: o.stdout.trim() !== '', figures: 0 };
  return grade(code, task, level, a);
}

const data = require('./beginner-data.js');
let nOk = 0, nBad = 0, nGap = 0, fails = [], closed = [], gaps = [];
for (const id of Object.keys(data).map(Number)) {
  const level = levelsData.find(l => l.id === id);
  if (!level) { fails.push(`Level id ${id}: tidak ada di curriculum.js`); continue; }
  if (data[id].length !== level.tasks.length) fails.push(`Level id ${id}: ${data[id].length} entri data, tetapi ${level.tasks.length} soal`);
  data[id].forEach((d, i) => {
    const task = level.tasks[i]; if (!task || !d) return;
    const tag = `[id ${id} / no.${level.no} / soal ${i + 1}]`;
    const v = verdict(d.ok, task, level); nOk++;
    if (!v.pass) fails.push(`${tag} solusi referensi DITOLAK: ${v.reason}`);
    (d.bad || []).forEach((b, k) => { nBad++; const r = verdict(b, task, level);
      if (r.pass) fails.push(`${tag} contoh salah #${k + 1} LOLOS (seharusnya gagal)`);
      else if (EXPLAIN) console.log(`${tag} bad #${k + 1} ditolak karena: ${String(r.reason).split('\n')[0].slice(0, 110)}`); });
    (d.gap || []).forEach((b, k) => { nGap++; const r = verdict(b, task, level);
      if (r.pass) gaps.push(`${tag} gap #${k + 1}: ${d.why || 'jawaban salah ini masih lolos'}`);
      else closed.push(`${tag} gap #${k + 1} sudah tertutup: pindahkan ke "bad"`); });
  });
}
console.log(`Solusi referensi: ${nOk} | contoh salah: ${nBad} | gap terdokumentasi: ${nGap}`);
if (gaps.length) console.log(`\nCelah penilaian yang diketahui (${gaps.length}):\n  ` + gaps.join('\n  '));
if (closed.length) console.log(`\nGap yang sudah tertutup (${closed.length}):\n  ` + closed.join('\n  '));
if (fails.length) { console.log(`\nGAGAL (${fails.length}):\n  ` + fails.join('\n  ')); process.exit(1); }
if (STRICT && (gaps.length || closed.length)) process.exit(1);
console.log('\nSemua pemeriksaan lulus.');
