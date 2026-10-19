// Solusi referensi (ok) dan contoh salah (bad) untuk soal yang diperketat. Bentuk: { id: { indeksSoal: {ok, bad[]} } }
const L = (...a) => a.join('\n');
const f27 = [['pangkat_dua', 'x', 'x ** 2', 4, 16], ['tambah', 'a, b', 'a + b', '5, 5', 10], ['luas_persegi', 's', 's * s', 3, 9], ['panjang_kata', 's', 'len(s)', "'Test'", 4],
  ['cek_positif', 'x', 'x > 0', 10, 'True'], ['kurang', 'a, b', 'a - b', '10, 4', 6], ['ubah_kapital', 't', 't.upper()', "'abc'", "'ABC'"], ['keliling_persegi', 's', '4 * s', 5, 20],
  ['kali_dua', 'x', 'x * 2', 7, 14], ['sisa_bagi', 'a, b', 'a % b', '10, 3', 1]];
const l27 = {};
f27.forEach((p, i) => {
  l27[i] = { ok: L(`def ${p[0]}(${p[1]}):`, `    return ${p[2]}`, `assert ${p[0]}(${p[3]}) == ${p[4]}`, 'print("lolos")'),
    bad: [L(`def ${p[0]}(${p[1]}):`, `    return ${p[2]}`, `assert ${p[4]} == ${p[4]}`, 'print("lolos")'),
          L(`def ${p[0]}(${p[1]}):`, `    return 12345`, `assert ${p[0]}(${p[3]}) == ${p[4]}`, 'print("lolos")')] };
});
module.exports = {
  4: { 0: { ok: L('umur = 18', 'if umur >= 17:', '    print("Sudah punya KTP")', 'else:', '    print("Belum cukup umur")'),
            bad: [L('umur = 18', 'if 1 == 1:', '    print("Sudah punya KTP")', 'else:', '    print("Belum cukup umur")')] } },
  5: { 1: { ok: L('nilai = 82', 'if nilai >= 90:', '    print("A")', 'elif nilai >= 75:', '    print("B")', 'else:', '    print("C")'),
            bad: [L('nilai = 82', 'if nilai >= 90:', '    print("A")', 'elif nilai >= 75:', '    print("C")', 'else:', '    print("B")')] } },
  7: { 5: { ok: L('e = 3', 'while e > 0:', '    print(e)', '    e -= 1'), bad: [L('e = 3', 'while e > 0:', '    break')] } },
  9: { 0: { ok: L('hewan = ["kucing", "anjing", "ikan"]', 'hewan.append("burung")', 'print(hewan[1])'), bad: [L('x = []', 'x.append(1)', 'print("halo")')] },
       1: { ok: L('angka = [1, 2, 3, 4]', 'angka[0] = 99', 'print(angka)'), bad: [L('angka = [1, 2, 3, 4]', 'print(angka)')] },
       2: { ok: L('buah = ["apel", "jeruk", "mangga"]', 'print(len(buah))'), bad: [L('buah = ["apel", "jeruk", "mangga"]', 'len(buah)')] },
       3: { ok: L('kota = ["Bandung", "Medan", "Solo"]', 'kota.insert(0, "Jakarta")', 'print(kota)'), bad: [L('kota = ["Bandung", "Medan", "Solo"]', 'kota.insert(2, "Jakarta")', 'print(kota)')] },
       4: { ok: L('angka = [10, 20, 30, 40]', 'angka.remove(20)', 'print(angka)'), bad: [L('angka = [10, 20, 30, 40]', 'angka.remove(40)', 'print(angka)')] },
       9: { ok: L('hobi = []', 'hobi.append("membaca")', 'hobi.append("renang")', 'hobi.append("catur")', 'print(hobi)'), bad: [L('hobi = []', 'hobi.append("membaca")', 'print(hobi)')] } },
  10: { 0: { ok: L('x = {5, 2, 5, 1, 3}', 'print(x)'), bad: [L('x = {1, 2}', 'print(x)')] },
        7: { ok: L('s = {10, 20, 30, 40}', 's.remove(20)', 'print(s)'), bad: [L('s = {10, 20, 30, 40}', 's.remove(40)', 'print(s)')] } },
  12: { 0: { ok: 'print(f"{3.14159:.2f}")', bad: ['print(f"{2.71828:.2f}")'] } },
  24: { 9: { ok: L('def fibonacci():', '    a, b = 1, 1', '    for _ in range(6):', '        yield a', '        a, b = b, a + b', 'print(list(fibonacci()))'),
             bad: [L('def fibonacci():', '    a, b = 1, 1', '    for _ in range(5):', '        yield a', '        a, b = b, a + b', 'print(list(fibonacci()))'), L('def fibonacci():', '    return [1, 1, 2, 3, 5, 8]', 'print(fibonacci())')] } },
  27: l27,
  33: { 5: { ok: L('def titik(x: float, y: float) -> tuple:', '    return (x, y)', 'print(titik(1.0, 2.0))'), bad: [L('def titik(x: float, y: float) -> tuple:', '    return [x, y]', 'print(titik(1.0, 2.0))')] } },
  72: { 4: { ok: L("results = {'documents': [['teks A', 'teks B']]}", "print(results['documents'][0][0])"), bad: [L("results = {'documents': [['teks A', 'teks B']]}", "print(results['documents'][0])")] } },
  101: { 3: { ok: L('class Counter:', '    def __init__(self):', '        self.nilai = 0', '    def tambah(self):', '        self.nilai += 1', 'c = Counter()', 'c.tambah()', 'c.tambah()', 'c.tambah()', 'print(c.nilai)'),
              bad: [L('class Counter:', '    def __init__(self):', '        self.nilai = 0', '    def tambah(self):', '        pass', 'c = Counter()', 'c.tambah()', 'print(c.nilai)')] } },
  128: { 0: { ok: L('harga1 = 12000', 'harga2 = 8500', 'harga3 = 4500', 'total = harga1 + harga2 + harga3', 'print(f"Total: {total}")'),
              bad: [L('harga1 = 12000', 'harga2 = 8500', 'harga3 = 4500', 'total = 25000', 'print(f"Total: {total}")')] } },
  23: { 3: { ok: L('with open("a.txt", "w") as f:', '    f.write("x")', 'with open("a.txt", "r") as f:', '    print(f.read())'), bad: [L('open("a.txt")', 'read')] } },
  34: { 4: { ok: L('import json, os, tempfile', 'data = {"a": 1}', 'path = os.path.join(tempfile.gettempdir(), "d.json")', 'with open(path, "w") as f:', '    json.dump(data, f)'), bad: [L('import json', 'json.dump')] } }
};
