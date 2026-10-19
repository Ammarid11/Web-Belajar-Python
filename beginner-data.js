// Solusi referensi (ok: harus lulus), contoh salah (bad: harus gagal), dan gap (gap: salah tetapi MASIH lolos
// penilai saat ini = celah yang perlu diperkuat). Kunci = id level (bukan nomor tampilan).
const L = (...a) => a.join('\n');

// Level 4: if-else. cond = [variabel, nilai, kondisi benar, kondisi terbalik, teks if, teks else, nilai yang membalik hasil]
function ifElse(v, val, cond, flipped, yes, no) {
  const mk = (c, x) => L(`${v} = ${x}`, `if ${c}:`, `    print("${yes}")`, 'else:', `    print("${no}")`);
  return { ok: mk(cond, val), bad: [mk(flipped, val)] };
}
const lvl4 = [
  ifElse('umur', 18, 'umur >= 17', 'umur < 17', 'Sudah punya KTP', 'Belum cukup umur'),
  ifElse('nilai_ujian', 65, 'nilai_ujian >= 70', 'nilai_ujian < 70', 'Lulus', 'Tidak Lulus'),
  ifElse('uang', 40000, 'uang > 50000', 'uang < 50000', 'Bisa beli makan enak', 'Hemat dulu'),
  ifElse('angka', 10, 'angka % 2 == 0', 'angka % 2 == 1', 'Genap', 'Ganjil'),
  ifElse('suhu', 38, 'suhu > 37', 'suhu < 37', 'Demam', 'Normal'),
  ifElse('stok', 0, 'stok > 0', 'stok == 0', 'Tersedia', 'Habis'),
  ifElse('kecepatan', 90, 'kecepatan > 80', 'kecepatan < 80', 'Terlalu ngebut', 'Aman'),
  ifElse('tinggi', 155, 'tinggi >= 160', 'tinggi < 160', 'Memenuhi syarat', 'Belum memenuhi'),
  ifElse('jam', 21, 'jam > 18', 'jam < 18', 'Malam hari', 'Siang hari'),
  ifElse('poin', 120, 'poin >= 100', 'poin < 100', 'Hadiah Utama', 'Coba lagi'),
];
// Level 4: jawaban "curang" yang memakai nilai konstan sebagai kondisi sudah ditolak oleh pemeriksa trivialIf
lvl4[0].bad.push(L('umur = 18', 'if umur:', '    print("Sudah punya KTP")', 'else:', '    print("Belum cukup umur")'));
lvl4[0].gap = [L('umur = 18', 'if 1 == 1:', '    print("Sudah punya KTP")', 'else:', '    print("Belum cukup umur")')];
lvl4[0].why = 'kondisi konstan berbentuk perbandingan (1 == 1) lolos; hasil tercetak benar tanpa memakai variabel umur';

// Level 5: if-elif-else. Tiga cabang; bad memakai nilai yang menghasilkan cabang lain.
function elif3(v, val, c1, c2, t1, t2, t3, badVal, ow) {
  const mk = x => L(`${v} = ${x}`, `if ${c1}:`, `    print("${t1}")`, `elif ${c2}:`, `    print("${t2}")`, `else:`, `    print("${t3}")`);
  return { ok: mk(val), bad: [mk(badVal)] };
}
const lvl5 = [
  elif3('suhu', 32, 'suhu > 35', 'suhu > 25', 'Panas', 'Sejuk', 'Dingin', 40),
  { ok: L('nilai = 82', 'if nilai >= 90:', '    print("A")', 'elif nilai >= 75:', '    print("B")', 'else:', '    print("C")'),
    bad: [L('nilai = 82', 'if nilai >= 90:', '    print("A")', 'else:', '    print("B")')],
    gap: [L('nilai = 82', 'if nilai >= 90:', '    print("A")', 'elif nilai >= 75:', '    print("C")', 'else:', '    print("B")')],
    why: 'soal tanpa expect/check: hasil cetak tidak diperiksa, sehingga ambang yang salah pun lolos' },
  { ok: L('lampu = "merah"', 'if lampu == "merah":', '    print("Berhenti")', 'elif lampu == "kuning":', '    print("Bersiap")', 'elif lampu == "hijau":', '    print("Jalan")'),
    bad: [L('lampu = "hijau"', 'if lampu == "merah":', '    print("Berhenti")', 'elif lampu == "kuning":', '    print("Bersiap")', 'elif lampu == "hijau":', '    print("Jalan")')] },
  elif3('waktu', 14, 'waktu < 12', 'waktu < 15', 'Pagi', 'Siang', 'Sore', 16),
  elif3('skala_richter', 6.5, 'skala_richter >= 7', 'skala_richter >= 5', 'Tsunami', 'Kerusakan berat', 'Ringan', 4),
  { ok: L('hari_ke = 3', 'if hari_ke == 1:', '    print("Senin")', 'elif hari_ke == 2:', '    print("Selasa")', 'elif hari_ke == 3:', '    print("Rabu")', 'else:', '    print("Hari lain")'),
    bad: [L('hari_ke = 1', 'if hari_ke == 1:', '    print("Senin")', 'elif hari_ke == 2:', '    print("Selasa")', 'elif hari_ke == 3:', '    print("Rabu")', 'else:', '    print("Hari lain")')] },
  elif3('diskon_poin', 500, 'diskon_poin >= 1000', 'diskon_poin >= 500', 'Diskon 50%', 'Diskon 20%', 'Tanpa diskon', 1500),
  elif3('berat_paket', 4.5, 'berat_paket > 5', 'berat_paket > 2', 'Biaya Mahal', 'Biaya Sedang', 'Biaya Murah', 1),
  { ok: L('level_user = "admin"', 'if level_user == "admin":', '    print("Full Akses")', 'elif level_user == "editor":', '    print("Edit Saja")', 'else:', '    print("Guest")'),
    bad: [L('level_user = "editor"', 'if level_user == "admin":', '    print("Full Akses")', 'elif level_user == "editor":', '    print("Edit Saja")', 'else:', '    print("Guest")')] },
  elif3('umur_kategori', 12, 'umur_kategori < 5', 'umur_kategori < 13', 'Balita', 'Anak-anak', 'Remaja/Dewasa', 3),
];

// Level 7: while
const w = (init, cond, body, step, after) => L(...init, `while ${cond}:`, ...body.map(b => '    ' + b), `    ${step}`, ...(after || []));
const lvl7 = [
  { ok: w(['i = 3'], 'i > 0', ['print(i)'], 'i -= 1', ['print("Mulai!")']),
    bad: [w(['i = 1'], 'i <= 3', ['print(i)'], 'i += 1', ['print("Mulai!")'])] },
  { ok: w(['i = 1'], 'i <= 4', ['print(i)'], 'i += 1'),
    bad: [w(['n = 1'], 'n <= 3', ['print(n)'], 'n += 1')] },
  { ok: w(['i = 1'], 'i < 10', ['print(i)'], 'i *= 2'),
    bad: [w(['i = 1'], 'i < 10', ['print(i)'], 'i += 1')] },
  { ok: w(['i = 2'], 'i <= 6', ['print(i)'], 'i += 2'),
    bad: [w(['i = 1'], 'i <= 6', ['print(i)'], 'i += 2')] },
  { ok: w(['n = 1'], 'n <= 3', ['print("Ulangi")'], 'n += 1'),
    bad: [w(['n = 1'], 'n <= 2', ['print("Ulangi")'], 'n += 1')] },
  { ok: w(['e = 3'], 'e > 0', ['print(e)'], 'e -= 1'),
    gap: ['e = 3\nwhile e > 0:\n    break'],
    why: 'tanpa expect/check dan tanpa kata "cetak" di soal: perulangan yang tidak mengurangi energi pun lolos' },
  { ok: L('total = 0', 'i = 1', 'while i <= 4:', '    total += i', '    i += 1', 'print(total)'),
    bad: [L('total = 0', 'i = 1', 'while i <= 3:', '    total += i', '    i += 1', 'print(total)')] },
  { ok: w(['i = 5'], 'i >= 1', ['print(i)'], 'i -= 2'),
    bad: [w(['i = 1'], 'i <= 5', ['print(i)'], 'i += 2')] },
  { ok: w(['i = 10'], 'i <= 30', ['print(i)'], 'i += 10'),
    bad: [w(['i = 10'], 'i <= 20', ['print(i)'], 'i += 10')] },
  { ok: w(['i = 1'], 'i <= 3', ['print(i * i)'], 'i += 1'),
    bad: [w(['n = 1'], 'n <= 3', ['print(n)'], 'n += 1')] },
];

// Level 9: list (tanpa expect/check: yang terukur hanya kata kunci + ada output)
const lvl9 = [
  { ok: L('hewan = ["kucing", "anjing", "ikan"]', 'hewan.append("burung")', 'print(hewan[1])'),
    bad: [L('hewan = ["kucing", "anjing", "ikan"]', 'hewan = hewan + ["burung"]', 'print(hewan[1])')],
    gap: [L('x = []', 'x.append(1)', 'print("halo")')], why: 'tidak memeriksa isi list maupun indeks yang dicetak' },
  { ok: L('angka = [1, 2, 3, 4]', 'angka[0] = 99', 'print(angka)'),
    bad: [L('angka = 1', 'print(angka)')],
    gap: [L('angka = [1, 2, 3, 4]', 'print(angka)')], why: 'penugasan angka[0] = 99 tidak diperiksa; list tanpa perubahan lolos' },
  { ok: L('buah = ["apel", "jeruk", "mangga"]', 'print(len(buah))'),
    bad: [L('buah = ["apel", "jeruk", "mangga"]', 'print(3)')],
    gap: [L('buah = ["apel", "jeruk", "mangga"]', 'len(buah)')], why: 'kata "mencetak" tidak dikenali sebagai tuntutan output, sehingga len() tanpa print lolos' },
  { ok: L('kota = ["Bandung", "Medan", "Solo"]', 'kota.insert(0, "Jakarta")', 'print(kota)'),
    bad: [L('kota = ["Bandung", "Medan", "Solo"]', 'kota.append("Jakarta")', 'print(kota)')],
    gap: [L('kota = ["Bandung", "Medan", "Solo"]', 'kota.insert(2, "Jakarta")', 'print(kota)')], why: 'posisi insert (0) tidak diperiksa' },
  { ok: L('angka = [10, 20, 30, 40]', 'angka.remove(20)', 'print(angka)'),
    bad: [L('angka = [10, 20, 30, 40]', 'del angka[1]', 'print(angka)')],
    gap: [L('angka = [10, 20, 30, 40]', 'angka.remove(40)', 'print(angka)')], why: 'elemen yang dihapus (20) tidak diperiksa' },
  { ok: L('teman = ["Dewi", "Andi", "Citra"]', 'teman.sort()', 'print(teman)'),
    bad: [L('teman = ["Dewi", "Andi", "Citra"]', 'print(sorted(teman))')] },
  { ok: L('a = [1, 2]', 'b = [3, 4]', 'print(a + b)'),
    bad: [L('a = [1, 2]', 'b = [3, 4]', 'print(a, b)')] },
  { ok: L('mapel = ["IPA", "IPS", "Seni"]', 'print(mapel[-1])'),
    bad: [L('mapel = ["IPA", "IPS", "Seni"]', 'print(mapel[len(mapel) - 1])')] },
  { ok: L('angka = [4, 17, 9, 2]', 'print(max(angka))'),
    bad: [L('angka = [4, 17, 9, 2]', 'print(min(angka))')] },
  { ok: L('hobi = []', 'hobi.append("membaca")', 'hobi.append("renang")', 'hobi.append("catur")', 'print(hobi)'),
    bad: [L('hobi = ["membaca", "renang", "catur"]', 'print(hobi)')],
    gap: [L('hobi = []', 'hobi.append("membaca")', 'print(hobi)')], why: 'jumlah append (3) tidak diperiksa' },
];

// Level 12: format string (hanya mencari pola format di teks kode)
const lvl12 = [
  { ok: 'print(f"{3.14159:.2f}")', bad: ['print(round(3.14159, 2))'],
    gap: ['print(f"{2.71828:.2f}")'], why: 'nilai yang diformat (3.14159) tidak diperiksa' },
  { ok: 'print(f"{1500000:,}")', bad: ['print(1500000)'] },
  { ok: 'print(f"{0.758:.1%}")', bad: ['print(f"{0.758:.1f}")'] },
  { ok: 'print(f"{\'Python\':>10}")', bad: ['print(f"{\'Python\':<10}")'] },
  { ok: 'print(f"{\'Data\':^12}")', bad: ['print(f"{\'Data\':>12}")'] },
  { ok: 'print(f"{5:04d}")', bad: ['print(f"{5:4d}")'] },
  { ok: 'print(f"{45.678:.2f}")', bad: ['print(round(45.678, 2))'] },
  { ok: 'print(f"{\'Kopi\':<10}{15000:>8}")', bad: ['print(f"{\'Kopi\':<10}{15000}")'] },
  { ok: 'print(f"{255:x}")', bad: ['print(hex(255))'] },
  { ok: 'print(f"{10:b}")', bad: ['print(bin(10))'] },
];

// Level 120: nested loop (output dibandingkan baris per baris)
const star = (n) => L(`for i in range(${n}):`, `    for j in range(${n}):`, '        print("*", end="")', '    print()');
const lvl120 = [
  { ok: star(3), bad: [L('for i in range(3):', '    for j in range(3):', '        print("*", end="\\n")')] },
  { ok: L('for i in range(4):', '    for j in range(4):', '        print("#", end="")', '    print()'), bad: [star(3)] },
  { ok: L('for i in range(1, 5):', '    for j in range(i):', '        print("*", end="")', '    print()'),
    bad: [L('for i in range(4, 0, -1):', '    for j in range(i):', '        print("*", end="")', '    print()')] },
  { ok: L('for i in range(1, 5):', '    for j in range(1, i + 1):', '        print(j, end=" ")', '    print()'),
    bad: [L('for i in range(1, 5):', '    for j in range(1, i + 1):', '        print(j, end="")', '    print()')] },
  { ok: L('for i in range(1, 4):', '    print(" " * (3 - i) + "*" * (2 * i - 1))'),
    bad: [L('for i in range(1, 4):', '    print("*" * (2 * i - 1))')] },
  { ok: L('for i in range(1, 6):', '    for j in range(1, 6):', '        print(i * j, end=" ")', '    print()'),
    bad: [L('for i in range(1, 5):', '    for j in range(1, 6):', '        print(i * j, end=" ")', '    print()')] },
  { ok: L('for i in range(4):', '    for j in range(4):', '        if (i + j) % 2 == 0:', '            print("#", end="")', '        else:', '            print(".", end="")', '    print()'),
    bad: [L('for i in range(4):', '    for j in range(4):', '        if (i + j) % 2 == 0:', '            print(".", end="")', '        else:', '            print("#", end="")', '    print()')] },
  { ok: L('for i in range(1, 4):', '    for j in range(i + 1, 4):', '        print(i, j)'),
    bad: [L('for i in range(1, 4):', '    for j in range(1, 4):', '        print(i, j)')] },
];

// Level 128: mini-proyek Beginner (memakai input otomatis dari soal)
const lvl128 = [
  { ok: L('harga1 = 12000', 'harga2 = 8500', 'harga3 = 4500', 'total = harga1 + harga2 + harga3', 'print(f"Total: {total}")'),
    bad: [L('harga1 = 12000', 'harga2 = 8500', 'harga3 = 4000', 'total = harga1 + harga2 + harga3', 'print(f"Total: {total}")')],
    gap: [L('harga1 = 12000', 'harga2 = 8500', 'harga3 = 4500', 'total = 25000', 'print(f"Total: {total}")')], why: 'total yang ditulis langsung (25000) lolos karena hanya hasil akhir diperiksa' },
  { ok: L('total = 25000', 'if total >= 20000:', '    bayar = total * 0.9', 'else:', '    bayar = total', 'print(f"Bayar: {bayar}")'),
    bad: [L('total = 25000', 'if total >= 30000:', '    bayar = total * 0.9', 'else:', '    bayar = total', 'print(f"Bayar: {bayar}")')] },
  { ok: L('bayar = 22500.0', 'uang = int(input())', 'print(f"Kembalian: {uang - bayar}")'),
    bad: [L('bayar = 22500.0', 'uang = int(input())', 'print(f"Kembalian: {uang}")')] },
  { ok: L('rahasia = 7', 'tebakan = int(input())', 'if tebakan < rahasia:', '    print("Terlalu kecil")', 'elif tebakan > rahasia:', '    print("Terlalu besar")', 'else:', '    print("Benar!")'),
    bad: [L('rahasia = 7', 'tebakan = int(input())', 'if tebakan < rahasia:', '    print("Terlalu besar")', 'elif tebakan > rahasia:', '    print("Terlalu kecil")', 'else:', '    print("Benar!")')] },
  { ok: L('rahasia = 7', 'percobaan = 0', 'while True:', '    tebakan = int(input())', '    percobaan += 1', '    if tebakan < rahasia:', '        print("Terlalu kecil")', '    elif tebakan > rahasia:', '        print("Terlalu besar")', '    else:', '        print(f"Benar dalam {percobaan} percobaan")', '        break'),
    bad: [L('rahasia = 7', 'percobaan = 0', 'while True:', '    tebakan = int(input())', '    if tebakan < rahasia:', '        print("Terlalu kecil")', '    elif tebakan > rahasia:', '        print("Terlalu besar")', '    else:', '        print(f"Benar dalam {percobaan} percobaan")', '        break')] },
];

module.exports = { 4: lvl4, 5: lvl5, 7: lvl7, 9: lvl9, 12: lvl12, 120: lvl120, 128: lvl128 };

// Celah penilaian yang dulu terdokumentasi kini ditutup (lihat curriculum-perbaikan.js bagian F3): jadikan contoh salah biasa.
Object.values(module.exports).forEach(arr => arr.forEach(d => { if (d && d.gap) { d.bad = (d.bad || []).concat(d.gap); delete d.gap; delete d.why; } }));
