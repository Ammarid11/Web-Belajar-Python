/* Validasi skema kurikulum (curriculum.js) tanpa browser: node tools/check-curriculum.js */
const fs = require("fs"), vm = require("vm"), path = require("path");
const src = fs.readFileSync(path.join(__dirname, "..", "curriculum.js"), "utf8") + "\n;globalThis.__L = levelsData;";
const ctx = { console, window: {} }; ctx.globalThis = ctx;
vm.createContext(ctx); vm.runInContext(src, ctx);
const L = ctx.__L, err = [], info = [];
const bad = (m) => err.push(m);

const ids = new Set();
L.forEach((l, i) => {
  const w = "Level id " + l.id + " (no " + l.no + ")";
  if (ids.has(l.id)) bad(w + ": id dobel"); ids.add(l.id);
  if (l.no !== i + 1) bad(w + ": nomor tampil tidak berurutan (harus " + (i + 1) + ")");
  ["category", "title", "desc", "example"].forEach(k => { if (typeof l[k] !== "string" || !l[k].trim()) bad(w + ": '" + k + "' kosong"); });
  if (!Array.isArray(l.tasks) || l.tasks.length < 4 || l.tasks.length > 10) bad(w + ": jumlah soal " + (l.tasks && l.tasks.length) + " (harus 4-10)");
  const seen = new Set();
  (l.tasks || []).forEach((t, j) => {
    const tw = w + " soal " + (j + 1);
    if (typeof t.task !== "string" || t.task.length < 10) bad(tw + ": teks soal kosong/terlalu pendek");
    if (typeof t.hint !== "string" || !t.hint.trim()) bad(tw + ": petunjuk kosong");
    if (typeof t.validate !== "function") bad(tw + ": validate bukan fungsi");
    if (seen.has(t.task)) bad(tw + ": teks soal dobel di level yang sama"); seen.add(t.task);
    if (t.check && typeof t.check !== "string") bad(tw + ": check harus string Python");
    if (t.expect && typeof t.expect.test !== "function") bad(tw + ": expect harus punya .test()");
  });
});
const all = L.flatMap(l => l.tasks);
const lengthOnly = all.filter(t => /^\s*c\s*=>\s*c\.length\s*>\s*\d+\s*$/.test(String(t.validate))).length;
const withCheck = all.filter(t => t.check).length, withExpect = all.filter(t => t.expect).length;
info.push("Level: " + L.length + ", soal: " + all.length);
info.push("Soal dengan tes perilaku (check): " + withCheck + ", dengan pola output (expect): " + withExpect);
info.push("Soal yang hanya dicek panjang teks (c.length > N): " + lengthOnly);
console.log(info.join("\n"));
if (err.length) { console.log("\n" + err.length + " MASALAH:\n- " + err.join("\n- ")); process.exit(1); }
console.log("\nSkema kurikulum OK.");
