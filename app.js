/* =====================================================================
   PYTHON ODYSSEY - app.js
   Bagian 1: Kurikulum (levelsData, 100 level x 10 soal)
   Bagian 2: Logika aplikasi (lihat komentar "LOGIKA APLIKASI" di bawah)
   ===================================================================== */

const levelsData = [
    {
        id: 1, category: "Beginner", title: "Level 1: Variabel & Tipe Data",
        desc: "<b>Definisi Konsep Mendalam:</b> Variabel adalah simbol penamaan atau wadah yang dialokasikan di dalam memori komputer untuk menyimpan nilai data tertentu. Dalam Python, kita tidak perlu mendeklarasikan tipe data secara eksplisit berkat sistem <i>dynamic typing</i> yang otomatis mengenali nilai.<br><br><b>Analisis Rinci Tipe Data Fundamental:</b><br>• <b>Integer (<code>int</code>):</b> Bilangan bulat tanpa komponen desimal, baik positif, negatif, maupun nol (contoh: <code>25</code>, <code>-5</code>).<br>• <b>Float (<code>float</code>):</b> Bilangan desimal atau pecahan yang menggunakan tanda titik <code>.</code> sebagai pemisah (contoh: <code>3.14</code>, <code>175.5</code>).<br>• <b>String (<code>str</code>):</b> Teks atau karakter alfanumerik yang wajib diapit dengan tanda kutip tunggal atau ganda (contoh: <code>\"Ammar\"</code>).<br>• <b>Boolean (<code>bool</code>):</b> Nilai logika biner yang bernilai benar (<code>True</code>) atau salah (<code>False</code>) dengan huruf kapital di awal.",
        example: `nama = "Budi"\numur = 20\npi = 3.14\nis_active = True\nprint(nama, umur, pi, is_active)`,
        tasks: [
            { task: "Buat variabel 'nama_depan' (string) dan 'tinggi_badan' (float, misal 175.5), lalu cetak keduanya.", hint: "Gunakan tanda kutip untuk string dan titik untuk float.", validate: c => c.includes("nama_depan") && c.includes("tinggi_badan") && c.includes("print") },
            { task: "Buat variabel 'tahun_lahir' (integer) dan 'kota_asal' (string), lalu cetak keduanya.", hint: "Integer ditulis tanpa tanda kutip.", validate: c => c.includes("tahun_lahir") && c.includes("kota_asal") && c.includes("print") },
            { task: "Buat variabel boolean 'sudah_menikah' dengan nilai False, lalu cetak nilainya.", hint: "Boolean diawali huruf kapital (True/False).", validate: c => c.includes("sudah_menikah") && c.includes("False") && c.includes("print") },
            { task: "Buat variabel 'berat_badan' bertipe float dan 'nama_panggilan' bertipe string, lalu cetak.", hint: "Gunakan koma di dalam fungsi print() untuk memisahkan variabel.", validate: c => c.includes("berat_badan") && c.includes("nama_panggilan") && c.includes("print") },
            { task: "Buat variabel 'jumlah_saudara' (integer) dan 'hobi' (string), lalu cetak menggunakan print.", hint: "Contoh: jumlah = 2 lalu print(jumlah)", validate: c => c.includes("jumlah_saudara") && c.includes("hobi") && c.includes("print") },
            { task: "Buat variabel 'suhu_badan' bertipe float (misal 36.5) dan cetak bersama teks keterangannya.", hint: "Gunakan print(\"Suhu:\", suhu_badan)", validate: c => c.includes("suhu_badan") && c.includes("print") },
            { task: "Buat variabel 'nomor_sepatu' (integer) dan 'status_siswa' (boolean True), lalu cetak.", hint: "Gabungkan integer dan boolean dalam satu print.", validate: c => c.includes("nomor_sepatu") && c.includes("status_siswa") && c.includes("True") && c.includes("print") },
            { task: "Buat variabel 'email_pengguna' bertipe string dan 'skor_ujian' bertipe float, lalu cetak.", hint: "String wajib diapit tanda kutip ganda atau tunggal.", validate: c => c.includes("email_pengguna") && c.includes("skor_ujian") && c.includes("print") },
            { task: "Buat variabel 'kode_akses' (integer) dan 'akses_admin' (boolean False), lalu cetak.", hint: "Tuliskan nama variabel dengan benar tanpa spasi.", validate: c => c.includes("kode_akses") && c.includes("akses_admin") && c.includes("False") && c.includes("print") },
            { task: "Buat variabel 'nama_hewan' (string) dan 'jumlah_kaki' (integer), lalu cetak keduanya.", hint: "Contoh: hewan = \"Kucing\", kaki = 4", validate: c => c.includes("nama_hewan") && c.includes("jumlah_kaki") && c.includes("print") }
        ]
    },
    {
        id: 2, category: "Beginner", title: "Level 2: Operator Aritmatika",
        desc: "<b>Definisi Konsep Mendalam:</b> Operator aritmatika adalah simbol khusus untuk mengeksekusi perhitungan matematika pada variabel atau nilai data di dalam program.<br><br><b>Analisis Rinci Operator:</b><br>• <code>+</code> & <code>-</code>: Operasi dasar penambahan dan pengurangan.<br>• <code>*</code>: Perkalian nilai.<br>• <code>/</code>: Pembagian riil yang menghasilkan tipe data desimal (float).<br>• <code>//</code> (Floor Division): Pembagian bulat yang otomatis membulatkan hasil ke bawah.<br>• <code>%</code> (Modulo): Sisa hasil pembagian suatu bilangan.<br>• <code>**</code> (Pangkat): Perpangkatan basis dengan nilai eksponen.",
        example: `panjang = 10\nlebar = 5\nluas = panjang * lebar\nprint("Luas:", luas)`,
        tasks: [
            { task: "Hitung luas segitiga dengan rumus 0.5 * alas * tinggi (alas=8, tinggi=6), lalu cetak hasilnya.", hint: "Gunakan operator perkalian (*).", validate: c => c.includes("*") && c.includes("print") },
            { task: "Hitung keliling persegi dengan rumus 4 * sisi (sisi=12), lalu cetak hasilnya.", hint: "Simpan ke variabel keliling lalu print.", validate: c => c.includes("*") && c.includes("print") },
            { task: "Hitung hasil perpangkatan 3 pangkat 4 (3 ** 4), lalu cetak hasilnya.", hint: "Gunakan operator pangkat ganda (**).", validate: c => c.includes("**") && c.includes("print") },
            { task: "Hitung sisa pembagian (modulo) dari 25 dibagi 4 (25 % 4), lalu cetak hasilnya.", hint: "Gunakan operator persen (%) untuk modulo.", validate: c => c.includes("%") && c.includes("print") },
            { task: "Hitung total harga belanjaan: 3 buku seharga 15000 dan 2 pensil seharga 4000.", hint: "Gunakan (3 * 15000) + (2 * 4000).", validate: c => c.includes("*") && c.includes("+") && c.includes("print") },
            { task: "Hitung pembagian bulat (floor division) dari 17 dibagi 3 (17 // 3), lalu cetak.", hint: "Gunakan tanda slash ganda (//).", validate: c => c.includes("//") && c.includes("print") },
            { task: "Hitung rata-rata dari tiga buah angka: 80, 85, dan 90 ((80 + 85 + 90) / 3).", hint: "Gunakan tanda kurung untuk mendahulukan penjumlahan.", validate: c => c.includes("/") && c.includes("+") && c.includes("print") },
            { task: "Hitung volume balok dengan rumus panjang * lebar * tinggi (p=5, l=4, t=3).", hint: "Kalikan ketiga variabel tersebut.", validate: c => c.includes("*") && c.includes("print") },
            { task: "Hitung total detik dalam 2 jam (2 * 60 * 60), lalu cetak hasilnya.", hint: "Gunakan operator perkalian (*).", validate: c => c.includes("*") && c.includes("print") },
            { task: "Kurangi angka 100 dengan 45, lalu kalikan hasilnya dengan 2, cetak nilainya.", hint: "Gunakan tanda kurung untuk operasi pengurangan terlebih dahulu.", validate: c => c.includes("-") && c.includes("*") && c.includes("print") }
        ]
    },
    {
        id: 3, category: "Beginner", title: "Level 3: String Manipulation & F-String",
        desc: "<b>Definisi Konsep Mendalam:</b> Manipulasi string adalah teknik pengolahan teks. <b>Formatted String (f-string)</b> adalah fitur modern Python untuk menyisipkan variabel atau ekspresi secara langsung dan dinamis ke dalam teks.<br><br><b>Poin Penting Sintaks:</b><br>• Diawali dengan huruf <code>f</code> sebelum tanda kutip pembuka.<br>• Variabel diselipkan langsung di dalam kurung kurawal <code>{nama_variabel}</code>.",
        example: `hobi = "Membaca"\nprint(f"Hobi saya adalah {hobi}")`,
        tasks: [
            { task: "Buat variabel 'buah' ('Apel') dan 'jumlah' (5). Cetak: 'Saya membeli 5 buah Apel'.", hint: "Gunakan f\"... {variabel} ...\"", validate: c => c.includes("f\"") || c.includes("f'") },
            { task: "Buat variabel 'nama' ('Rian') dan 'pekerjaan' ('Programmer'). Cetak: 'Halo Rian, profesi Anda Programmer'.", hint: "Sisipkan variabel di dalam kurung kurawal string.", validate: c => c.includes("f\"") || c.includes("f'") },
            { task: "Buat variabel 'kota' ('Bandung') dan 'suhu' (22). Cetak: 'Suhu di Bandung saat ini 22 derajat'.", hint: "F-string otomatis mengonversi angka menjadi teks.", validate: c => c.includes("f\"") || c.includes("f'") },
            { task: "Buat variabel 'hari' ('Senin') dan 'tanggal' (15). Cetak: 'Hari ini adalah hari Senin tanggal 15'.", hint: "Gabungkan dua variabel dalam satu f-string.", validate: c => c.includes("f\"") || c.includes("f'") },
            { task: "Buat variabel 'mata_uang' ('Rupiah') dan 'nominal' (50000). Cetak: 'Total uang anda 50000 Rupiah'.", hint: "Pastikan menggunakan huruf f di depan tanda kutip string.", validate: c => c.includes("f\"") || c.includes("f'") },
            { task: "Buat variabel 'bahasa' ('Python'). Cetak kalimat: 'Saya sedang belajar bahasa pemograman Python'.", hint: "Gunakan f\"... {bahasa} ...\"", validate: c => c.includes("f\"") || c.includes("f'") },
            { task: "Buat variabel 'hewan' ('Kucing') dan 'suara' ('Meow'). Cetak: 'Suara Kucing adalah Meow'.", hint: "Panggil kedua variabel di dalam string.", validate: c => c.includes("f\"") || c.includes("f'") },
            { task: "Buat variabel 'merek_hp' ('Samsung') dan 'harga' (3000000). Cetak spesifikasinya.", hint: "Gunakan f-string untuk menggabungkan teks dan angka.", validate: c => c.includes("f\"") || c.includes("f'") },
            { task: "Buat variabel 'nama_depan' dan 'nama_belakang'. Cetak nama lengkap menggunakan f-string.", hint: "Contoh: f\"{depan} {belakang}\"", validate: c => c.includes("f\"") || c.includes("f'") },
            { task: "Buat variabel 'judul_buku' ('Belajar Coding'). Cetak: 'Buku rekomendasi: Belajar Coding'.", hint: "Gunakan f\"Buku rekomendasi: {judul_buku}\"", validate: c => c.includes("f\"") || c.includes("f'") }
        ]
    },
    {
        id: 4, category: "Beginner", title: "Level 4: Percabangan If-Else",
        desc: "<b>Definisi Konsep Mendalam:</b> Struktur alur logika percabangan membuat program dapat mengambil keputusan otonom berdasarkan evaluasi kondisi boolean.<br><br><b>Poin Penting:</b><br>• <code>if kondisi:</code> Blok kode dieksekusi jika kondisi benar (<code>True</code>).<br>• <code>else:</code> Jalur alternatif pengaman jika kondisi salah (<code>False</code>).<br>• <b>Indentasi:</b> Aturan spasi menjorok ke dalam wajib diperhatikan.",
        example: `nilai = 75\nif nilai >= 70:\n    print("Lulus")\nelse:\n    print("Remidi")`,
        tasks: [
            { task: "Buat variabel 'umur' = 18. Jika umur >= 17 cetak 'Sudah punya KTP', jika tidak cetak 'Belum cukup umur'.", hint: "Gunakan operator perbandingan >=.", validate: c => c.includes("if") && c.includes("else") },
            { task: "Buat variabel 'nilai_ujian' = 65. Jika nilai_ujian >= 70 cetak 'Lulus', jika tidak cetak 'Tidak Lulus'.", hint: "Struktur: if kondisi: ... else: ...", validate: c => c.includes("if") && c.includes("else") },
            { task: "Buat variabel 'uang' = 40000. Jika uang > 50000 cetak 'Bisa beli makan enak', jika tidak cetak 'Hemat dulu'.", hint: "Gunakan if uang > 50000:", validate: c => c.includes("if") && c.includes("else") },
            { task: "Buat variabel 'angka' = 10. Jika angka % 2 == 0 cetak 'Genap', jika tidak cetak 'Ganjil'.", hint: "Gunakan operator modulo (%) untuk memeriksa kelipatan dua.", validate: c => c.includes("if") && c.includes("else") && c.includes("%") },
            { task: "Buat variabel 'suhu' = 38. Jika suhu > 37 cetak 'Demam', jika tidak cetak 'Normal'.", hint: "Perhatikan indentasi di bawah baris if dan else.", validate: c => c.includes("if") && c.includes("else") },
            { task: "Buat variabel 'stok' = 0. Jika stok > 0 cetak 'Tersedia', jika tidak cetak 'Habis'.", hint: "Gunakan operator >.", validate: c => c.includes("if") && c.includes("else") },
            { task: "Buat variabel 'kecepatan' = 90. Jika kecepatan > 80 cetak 'Terlalu ngebut', jika tidak cetak 'Aman'.", hint: "Gunakan if kecepatan > 80:", validate: c => c.includes("if") && c.includes("else") },
            { task: "Buat variabel 'tinggi' = 155. Jika tinggi >= 160 cetak 'Memenuhi syarat', jika tidak cetak 'Belum memenuhi'.", hint: "Gunakan operator perbandingan >=", validate: c => c.includes("if") && c.includes("else") },
            { task: "Buat variabel 'jam' = 21. Jika jam > 18 cetak 'Malam hari', jika tidak cetak 'Siang hari'.", hint: "Gunakan if jam > 18:", validate: c => c.includes("if") && c.includes("else") },
            { task: "Buat variabel 'poin' = 120. Jika poin >= 100 cetak 'Hadiah Utama', jika tidak cetak 'Coba lagi'.", hint: "Gunakan struktur if-else sederhana.", validate: c => c.includes("if") && c.includes("else") }
        ]
    },
    {
        id: 5, category: "Beginner", title: "Level 5: Percabangan Bertingkat (Elif)",
        desc: "<b>Definisi Konsep Mendalam:</b> Digunakan untuk menguji banyak jalur kondisi percabangan secara berurutan dan sistematis.<br><br><b>Poin Penting:</b><br>• Kata kunci <code>elif</code> ditempatkan di antara <code>if</code> dan <code>else</code>.<br>• Program memeriksa dari atas ke bawah dan langsung mengeksekusi blok kode pertama yang bernilai benar.",
        example: `skor = 85\nif skor >= 90:\n    print("A")\nelif skor >= 80:\n    print("B")\nelse:\n    print("C")`,
        tasks: [
            { task: "Buat variabel 'suhu' = 32. Jika > 35 cetak 'Panas', jika > 25 cetak 'Sejuk', selain itu cetak 'Dingin'.", hint: "Gunakan if ... elif ... else", validate: c => c.includes("if") && c.includes("elif") && c.includes("else") },
            { task: "Buat variabel 'nilai' = 82. Buat predikat A (>=90), B (>=75), atau C (<75), lalu cetak.", hint: "Gunakan elif nilai >= 75:", validate: c => c.includes("if") && c.includes("elif") && c.includes("else") },
            { task: "Buat variabel 'lampu' = 'merah'. Jika 'merah' cetak 'Berhenti', jika 'kuning' cetak 'Bersiap', jika 'hijau' cetak 'Jalan'.", hint: "Bandingkan string dengan tanda kutip.", validate: c => c.includes("if") && c.includes("elif") },
            { task: "Buat variabel 'waktu' = 14. Jika < 12 cetak 'Pagi', jika < 15 cetak 'Siang', selain itu cetak 'Sore'.", hint: "Gunakan struktur berurutan dengan elif.", validate: c => c.includes("if") && c.includes("elif") && c.includes("else") },
            { task: "Buat variabel 'skala_richter' = 6.5. Jika >= 7 cetak 'Tsunami', jika >= 5 cetak 'Kerusakan berat', selain itu cetak 'Ringan'.", hint: "Gunakan operator perbandingan desimal.", validate: c => c.includes("if") && c.includes("elif") && c.includes("else") },
            { task: "Buat variabel 'hari_ke' = 3. Jika 1 'Senin', jika 2 'Selasa', jika 3 'Rabu', selain itu 'Hari lain'.", hint: "Gunakan beberapa kondisi elif.", validate: c => c.includes("if") && c.includes("elif") },
            { task: "Buat variabel 'diskon_poin' = 500. Jika >= 1000 cetak 'Diskon 50%', jika >= 500 cetak 'Diskon 20%', selain itu 'Tanpa diskon'.", hint: "Urutkan dari kondisi terbesar.", validate: c => c.includes("if") && c.includes("elif") && c.includes("else") },
            { task: "Buat variabel 'berat_paket' = 4.5. Jika > 5 cetak 'Biaya Mahal', jika > 2 cetak 'Biaya Sedang', selain itu 'Biaya Murah'.", hint: "Gunakan tipe data float untuk perbandingan.", validate: c => c.includes("if") && c.includes("elif") && c.includes("else") },
            { task: "Buat variabel 'level_user' = 'admin'. Jika 'admin' cetak 'Full Akses', jika 'editor' cetak 'Edit Saja', selain itu 'Guest'.", hint: "Gunakan perbandingan string pada elif.", validate: c => c.includes("if") && c.includes("elif") },
            { task: "Buat variabel 'umur_kategori' = 12. Jika < 5 cetak 'Balita', jika < 13 cetak 'Anak-anak', selain itu 'Remaja/Dewasa'.", hint: "Gunakan percabangan bertingkat dengan rentang umur.", validate: c => c.includes("if") && c.includes("elif") && c.includes("else") }
        ]
    },
    {
        id: 6, category: "Beginner", title: "Level 6: Perulangan For Loop",
        desc: "<b>Definisi Konsep Mendalam:</b> Perulangan terstruktur untuk mengulang blok kode sejumlah kali tertentu secara deterministik.<br><br><b>Poin Penting:</b><br>• Menggunakan fungsi <code>range(start, stop, step)</code> untuk menghasilkan deretan angka iterasi.<br>• Dapat langsung mengiterasi elemen karakter dari sebuah string.",
        example: `for i in range(1, 4):\n    print("Hitungan ke:", i)`,
        tasks: [
            { task: "Buat perulangan for untuk mencetak angka genap dari 2 sampai 8 menggunakan range(2, 9, 2).", hint: "Gunakan range(start, stop, step).", validate: c => c.includes("for") && c.includes("range") },
            { task: "Buat perulangan for untuk mencetak angka 1 sampai 5.", hint: "Gunakan range(1, 6).", validate: c => c.includes("for") && c.includes("range") },
            { task: "Buat perulangan for untuk mencetak hitung mundur 5 ke 1 menggunakan range(5, 0, -1).", hint: "Gunakan step bernilai negatif (-1).", validate: c => c.includes("for") && c.includes("range") },
            { task: "Buat perulangan for untuk mencetak perkalian 5 (5, 10, 15, 20) menggunakan range(5, 21, 5).", hint: "Atur parameter step menjadi 5.", validate: c => c.includes("for") && c.includes("range") },
            { task: "Buat perulangan for yang mengulang sebanyak 4 kali dengan teks 'Halo Python'.", hint: "Gunakan range(4).", validate: c => c.includes("for") && c.includes("range") },
            { task: "Buat perulangan for untuk mencetak angka ganjil dari 1 sampai 9 menggunakan range(1, 10, 2).", hint: "Mulai dari 1 dengan kelipatan 2.", validate: c => c.includes("for") && c.includes("range") },
            { task: "Buat perulangan for untuk mencetak karakter dari string 'PYTHON' satu per satu.", hint: "Lakukan perulangan langsung pada string: for huruf in 'PYTHON':", validate: c => c.includes("for") },
            { task: "Buat perulangan for untuk mencetak kuadrat angka dari 1 sampai 4 (i ** 2).", hint: "Gunakan i ** 2 di dalam perulangan for.", validate: c => c.includes("for") && c.includes("**") },
            { task: "Buat perulangan for dari 10 sampai 15, lalu cetak nilai i ditambah 2.", hint: "Gunakan range(10, 16) lalu print(i + 2).", validate: c => c.includes("for") && c.includes("range") },
            { task: "Buat perulangan for sebanyak 3 kali untuk mencetak teks 'Loading...'.", hint: "Gunakan range(3).", validate: c => c.includes("for") && c.includes("range") }
        ]
    },
    {
        id: 7, category: "Beginner", title: "Level 7: Perulangan While Loop",
        desc: "<b>Definisi Konsep Mendalam:</b> Perulangan dinamis yang berjalan terus-menerus selama kondisi evaluasinya bernilai <code>True</code>.<br><br><b>Poin Penting:</b><br>• Wajib menyertakan variabel pengubah nilai di dalam loop agar kondisi pada suatu saat bernilai <code>False</code>.<br>• Kelalaian ini menyebabkan <b>infinite loop</b> (program tergantung abadi).",
        example: `i = 1\nwhile i <= 3:\n    print(i)\n    i += 1`,
        tasks: [
            { task: "Buat perulangan while yang menghitung mundur dari 3 sampai 1, lalu cetak 'Mulai!'.", hint: "Gunakan i -= 1 di dalam while.", validate: c => c.includes("while") },
            { task: "Buat perulangan while untuk mencetak angka 1 sampai 4.", hint: "Gunakan i += 1 di setiap iterasi.", validate: c => c.includes("while") },
            { task: "Buat perulangan while yang melipatgandakan angka 1 hingga kurang dari 10 (i *= 2).", hint: "Inisialisasi i = 1 lalu i *= 2.", validate: c => c.includes("while") },
            { task: "Buat perulangan while untuk mencetak bilangan genap 2, 4, 6.", hint: "Mulai i = 2 dan tambahkan i += 2.", validate: c => c.includes("while") },
            { task: "Buat perulangan while untuk mencetak teks 'Ulangi' sebanyak 3 kali menggunakan counter.", hint: "Gunakan counter mulai dari 1 sampai 3.", validate: c => c.includes("while") },
            { task: "Buat perulangan while selama energi (misal e = 3) masih > 0, kurangi 1 setiap iterasi.", hint: "Gunakan e -= 1 di dalam loop.", validate: c => c.includes("while") },
            { task: "Buat perulangan while yang menjumlahkan angka dari 1 sampai 4, lalu cetak totalnya.", hint: "Gunakan variabel penampung total.", validate: c => c.includes("while") },
            { task: "Buat perulangan while untuk mencetak mundur angka ganjil 5, 3, 1.", hint: "Mulai dari 5 dan kurangi dengan 2 (i -= 2).", validate: c => c.includes("while") },
            { task: "Buat perulangan while yang mencetak kelipatan 10 hingga 30.", hint: "Mulai i = 10, tambahkan 10 setiap iterasi.", validate: c => c.includes("while") },
            { task: "Buat perulangan while sederhana untuk mencetak angka kuadrat kecil (1, 4, 9).", hint: "Gunakan counter i yang dikuadratkan.", validate: c => c.includes("while") }
        ]
    },
    {
        id: 8, category: "Intermediate", title: "Level 8: Fungsi Dasar (Def & Return)",
        desc: "<b>Definisi Konsep Mendalam:</b> Fungsi adalah blok kode modular yang dirancang untuk membungkus tugas spesifik agar dapat digunakan kembali secara efisien.<br><br><b>Poin Penting:</b><br>• Didefinisikan dengan kata kunci <code>def nama_fungsi(parameter):</code>.<br>• Menggunakan kata kunci <code>return</code> untuk mengeluarkan hasil akhir pemrosesan.",
        example: `def sapa(nama):\n    return f"Halo {nama}"\n\nprint(sapa("Rian"))`,
        tasks: [
            { task: "Buat fungsi 'luas_persegi_panjang(p, l)' yang mengembalikan p * l, lalu cetak hasil untuk (5, 4).", hint: "Gunakan return p * l", validate: c => c.includes("def") && c.includes("return") },
            { task: "Buat fungsi 'tambah_dua_angka(a, b)' yang mengembalikan a + b, lalu cetak hasilnya.", hint: "Gunakan kata kunci return.", validate: c => c.includes("def") && c.includes("return") },
            { task: "Buat fungsi 'keliling_persegi(sisi)' yang mengembalikan 4 * sisi, lalu uji dengan sisi 6.", hint: "Sintaks: def keliling_persegi(sisi):", validate: c => c.includes("def") && c.includes("return") },
            { task: "Buat fungsi 'kuadrat(x)' yang mengembalikan x pangkat dua (x ** 2), uji dengan angka 7.", hint: "Gunakan return x ** 2", validate: c => c.includes("def") && c.includes("return") },
            { task: "Buat fungsi 'sapa_pengguna(nama)' yang mengembalikan string sapaan, uji dengan nama 'Ammar'.", hint: "Gunakan f-string di dalam return.", validate: c => c.includes("def") && c.includes("return") },
            { task: "Buat fungsi 'kurangi(a, b)' yang mengembalikan a - b, uji dengan angka 20 dan 8.", hint: "Gunakan operator pengurangan (-).", validate: c => c.includes("def") && c.includes("return") },
            { task: "Buat fungsi 'konversi_jam_ke_menit(jam)' yang mengembalikan jam * 60, uji dengan 3 jam.", hint: "Kalikan jam dengan 60.", validate: c => c.includes("def") && c.includes("return") },
            { task: "Buat fungsi 'luas_lingkaran(r)' dengan rumus 3.14 * r * r, uji dengan r = 7.", hint: "Gunakan 3.14 * r ** 2", validate: c => c.includes("def") && c.includes("return") },
            { task: "Buat fungsi 'cek_genap(angka)' yang mengembalikan True jika angka % 2 == 0.", hint: "Kembalikan hasil perbandingan boolean.", validate: c => c.includes("def") && c.includes("return") },
            { task: "Buat fungsi 'hitung_total(harga, jumlah)' yang mengembalikan harga * jumlah.", hint: "Gunakan return harga * jumlah.", validate: c => c.includes("def") && c.includes("return") }
        ]
    },
    {
        id: 9, category: "Intermediate", title: "Level 9: List (Daftar Data)",
        desc: "<b>Definisi Konsep Mendalam:</b> Struktur data majemuk untuk menampung banyak data terurut dalam satu variabel tunggal.<br><br><b>Poin Penting:</b><br>• Bersifat <b>mutable</b> (isinya dapat dimodifikasi).<br>• Posisi indeks elemen dimulai dari angka <code>0</code>.<br>• Method penting: <code>.append()</code>, <code>.insert()</code>, <code>.remove()</code>, <code>.sort()</code>.",
        example: `warna = ["merah", "hijau", "biru"]\nwarna.append("kuning")\nprint(warna[0])`,
        tasks: [
            { task: "Buat list 3 hewan peliharaan, tambahkan satu hewan baru dengan .append(), lalu cetak indeks ke-1.", hint: "Gunakan method .append()", validate: c => c.includes("append") },
            { task: "Buat list berisi 4 angka, ubah nilai pada indeks ke-0 menjadi angka 99, lalu cetak listnya.", hint: "Akses indeks list lalu assign nilai baru: list[0] = 99", validate: c => c.includes("[") && c.includes("]") },
            { task: "Buat list berisi 3 nama buah, gunakan fungsi len() untuk mencetak jumlah total buah.", hint: "Gunakan print(len(nama_list))", validate: c => c.includes("len(") },
            { task: "Buat list 3 kota, tambahkan kota baru dengan method .insert(0, 'Jakarta'), lalu cetak.", hint: "Method .insert() menyisipkan data pada posisi tertentu.", validate: c => c.includes("insert") },
            { task: "Buat list angka [10, 20, 30, 40], hapus elemen 20 menggunakan .remove(20), lalu cetak.", hint: "Gunakan method .remove()", validate: c => c.includes("remove") },
            { task: "Buat list nama teman, urutkan menggunakan method .sort(), lalu cetak hasilnya.", hint: "Gunakan list.sort()", validate: c => c.includes("sort") },
            { task: "Buat dua buah list berbeda, gabungkan keduanya menggunakan operator tambah (+), lalu cetak.", hint: "List 1 + List 2 menggabungkan elemen.", validate: c => c.includes("+") },
            { task: "Buat list mata pelajaran, ambil dan cetak elemen terakhir menggunakan indeks negatif [-1].", hint: "Indeks [-1] mengakses elemen paling akhir.", validate: c => c.includes("[-1]") },
            { task: "Buat list angka acak, cari nilai maksimumnya menggunakan fungsi max(), lalu cetak.", hint: "Gunakan fungsi bawaan max(list).", validate: c => c.includes("max(") },
            { task: "Buat list kosong, masukkan 3 hobi menggunakan .append() satu per satu, lalu cetak list.", hint: "Gunakan .append() berulang kali.", validate: c => c.includes("append") }
        ]
    },
    {
        id: 10, category: "Intermediate", title: "Level 10: Tuple & Set",
        desc: "<b>Definisi Konsep Mendalam:</b> Koleksi data pendukung selain list.<br><br><b>Poin Penting:</b><br>• <b>Tuple:</b> Bersifat <i>immutable</i> (tidak bisa diubah setelah dibuat), ditulis dengan tanda <code>()</code>.<br>• <b>Set:</b> Kumpulan data unik tanpa urutan yang otomatis menyaring elemen duplikat, ditulis dengan tanda <code>{}</code>.",
        example: `koordinat = (10, 20)\nangka_unik = {1, 2, 2, 3}\nprint(angka_unik)`,
        tasks: [
            { task: "Buat set berisi angka 5, 2, 5, 1, 3 (ada duplikat), lalu cetak set untuk melihat keunikan datanya.", hint: "Set otomatis menghapus elemen duplikat.", validate: c => c.includes("{") && c.includes("}") },
            { task: "Buat tuple berisi koordinat (x=100, y=200), lalu cetak elemen x (indeks 0).", hint: "Akses tuple menggunakan kurung siku tuple[0].", validate: c => /=\s*\([^)]*,[^)]*\)/.test(c) },
            { task: "Buat set warna {'merah', 'hijau'}, tambahkan warna baru dengan .add('biru'), lalu cetak.", hint: "Gunakan method .add() pada set.", validate: c => c.includes("add") },
            { task: "Buat tuple berisi nama-nama hari dalam seminggu, lalu cetak panjang tuple dengan len().", hint: "Gunakan fungsi len(tuple).", validate: c => c.includes("len(") },
            { task: "Buat set angka {1, 2, 3} dan {3, 4, 5}, lakukan operasi union (|) atau gabungkan, lalu cetak.", hint: "Gunakan operator union set (|).", validate: c => c.includes("|") },
            { task: "Buat tuple berisi data diri (nama, umur, kota), lalu akses elemen umur (indeks 1).", hint: "Gunakan indeks tuple [1].", validate: c => /=\s*\([^)]*,[^)]*\)/.test(c) },
            { task: "Buat set berisi huruf-huruf dari kata 'PROGRAM', lalu cetak set tersebut.", hint: "Set akan memecah kata menjadi huruf unik.", validate: c => c.includes("{") && c.includes("}") },
            { task: "Buat set angka {10, 20, 30, 40}, hapus angka 20 menggunakan .remove(20), lalu cetak.", hint: "Gunakan .remove() pada set.", validate: c => c.includes("remove") },
            { task: "Buat tuple berisi nilai pecahan (0.5, 1.5, 2.5), lalu cetak elemen terakhir.", hint: "Gunakan indeks [-1].", validate: c => c.includes("[-1]") },
            { task: "Buat set hewan {'kucing', 'anjing'}, periksa apakah 'kucing' ada di dalam set menggunakan 'in'.", hint: "Gunakan 'kucing' in nama_set", validate: c => /\bin\b/.test(c) }
        ]
    },
    {
        id: 11, category: "Intermediate", title: "Level 11: Dictionary (Key-Value)",
        desc: "<b>Definisi Konsep Mendalam:</b> Struktur data asosiatif yang menyimpan data berpasangan antara Kunci (<i>key</i>) dan Nilai (<i>value</i>).<br><br><b>Poin Penting:</b><br>• Ditulis dengan format <code>{\"kunci\": nilai}</code>.<br>• Kunci bersifat unik sebagai identifikasi data.<br>• Method pendukung: <code>.keys()</code>, <code>.values()</code>, <code>.get()</code>.",
        example: `siswa = {"nama": "Siti", "nilai": 90}\nprint(siswa["nama"])`,
        tasks: [
            { task: "Buat dictionary mobil dengan kunci 'merk', 'tipe', dan 'tahun'. Cetak nilai 'merk'.", hint: "Akses dengan dictionary[\"merk\"].", validate: c => c.includes(":") },
            { task: "Buat dictionary profil (nama, umur, hobi), tambahkan kunci baru 'pekerjaan', lalu cetak.", hint: "profil[\"pekerjaan\"] = \"Engineer\"", validate: c => c.includes(":") },
            { task: "Buat dictionary produk (nama, harga, stok), ubah nilai stok menjadi 50, lalu cetak.", hint: "Ubah nilai key yang sudah ada.", validate: c => c.includes(":") },
            { task: "Buat dictionary nilai siswa, hapus salah satu kunci menggunakan del, lalu cetak.", hint: "Gunakan del dictionary[\"kunci\"]", validate: c => c.includes("del") },
            { task: "Buat dictionary menu makanan, tampilkan semua kunci menggunakan method .keys().", hint: "Gunakan method .keys()", validate: c => c.includes("keys") },
            { task: "Buat dictionary menu minuman, tampilkan semua nilai menggunakan method .values().", hint: "Gunakan method .values()", validate: c => c.includes("values") },
            { task: "Buat dictionary biodata, periksa apakah kunci 'email' ada di dalam dictionary menggunakan 'in'.", hint: "Gunakan 'email' in biodata", validate: c => /\bin\b/.test(c) },
            { task: "Buat dictionary toko, ambil nilai dengan method .get('nama_toko') untuk keamanan akses.", hint: "Gunakan dictionary.get('kunci')", validate: c => c.includes("get") },
            { task: "Buat dictionary nilai mata pelajaran, hitung jumlah item menggunakan fungsi len().", hint: "Gunakan len(dictionary)", validate: c => c.includes("len(") },
            { task: "Buat dictionary karyawan, cetak string f-string berisi nama dan jabatan karyawan tersebut.", hint: "Gabungkan kunci dictionary dalam f-string.", validate: c => c.includes("f\"") || c.includes("f'") }
        ]
    },
    {
        id: 12, category: "Intermediate", title: "Level 12: Advanced String Formatting & Alignment",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengatur presisi angka desimal, format pemisah ribuan, dan perataan tata letak teks string secara profesional.<br><br><b>Poin Penting:</b><br>• Presisi desimal: <code>{pi:.2f}</code><br>• Format ribuan: <code>{angka:,}</code><br>• Perataan teks: <code>&lt;</code> (kiri), <code>&gt;</code> (kanan), <code>^</code> (tengah).",
        example: `pi = 3.14159\nprint(f"Pi: {pi:.2f}")\nprint(f"{'Teks':<10} - Kiri")`,
        tasks: [
            { task: "Cetak nilai pi 3.14159 dengan format presisi 2 angka di belakang koma menggunakan f-string.", hint: "Gunakan format {nilai:.2f}", validate: c => c.includes(":.2f") },
            { task: "Format angka 1500000 menjadi format ribuan menggunakan pemisah koma: {1500000:,}.", hint: "Gunakan koma di dalam kurung kurawal f-string {1500000:,}.", validate: c => c.includes(":,") },
            { task: "Cetak persentase 0.758 dengan format persen satu desimal {0.758:.1%}.", hint: "Gunakan akhiran % pada format f-string.", validate: c => /:\.?\d*%/.test(c) },
            { task: "Ratakan teks 'Python' ke kanan dengan lebar total 10 karakter menggunakan '{'Python':>10}'.", hint: "Gunakan operator perataan >.", validate: c => c.includes(">") },
            { task: "Ratakan teks 'Data' ke tengah dengan lebar total 12 karakter menggunakan '{'Data':^12}'.", hint: "Gunakan operator perataan ^.", validate: c => c.includes("^") },
            { task: "Cetak angka 5 dengan padding angka nol di depan menjadi 4 digit '{5:04d}'.", hint: "Gunakan format 04d.", validate: c => c.includes("04d") },
            { task: "Format angka desimal 45.678 menjadi format mata uang dengan presisi 2 desimal.", hint: "Gabungkan format f\"{angka:.2f}\".", validate: c => c.includes(":.2f") },
            { task: "Ratakan nama produk ke kiri dan harganya ke kanan dalam satu baris menggunakan padding string.", hint: "Gunakan kombinasi perataan < dan >.", validate: c => c.includes("<") && c.includes(">") },
            { task: "Cetak bilangan 255 dalam format heksadesimal menggunakan format '{255:x}'.", hint: "Gunakan format x atau X untuk heksadesimal.", validate: c => c.includes(":x") || c.includes(":X") },
            { task: "Cetak representasi biner dari angka 10 menggunakan format '{10:b}'.", hint: "Gunakan format b untuk biner.", validate: c => c.includes(":b") }
        ]
    },
    {
        id: 13, category: "Intermediate", title: "Level 13: Flexible Arguments (*args & **kwargs)",
        desc: "<b>Definisi Konsep Mendalam:</b> Membangun fungsi yang dapat menerima jumlah argumen masukan secara fleksibel dan dinamis.<br><br><b>Poin Penting:</b><br>• <code>*args</code>: Menampung kumpulan argumen posisi ke dalam bentuk tuple.<br>• <code>**kwargs</code>: Menampung argumen kata kunci berpasangan ke dalam bentuk dictionary.",
        example: `def total_semua(*args):\n    return sum(args)\n\nprint(total_semua(1, 2, 3, 4))`,
        tasks: [
            { task: "Buat fungsi 'jumlahkan_semua(*args)' yang mengembalikan total penjumlahan seluruh angka menggunakan sum(args). Uji dengan (5, 10, 15).", hint: "Gunakan *args untuk menampung banyak argumen angka.", validate: c => c.includes("*args") },
            { task: "Buat fungsi 'cetak_hobi(*args)' yang melakukan perulangan for untuk mencetak setiap hobi yang dimasukkan.", hint: "Iterasi langsung pada argumen *args.", validate: c => c.includes("*args") },
            { task: "Buat fungsi 'tampilkan_info(**kwargs)' yang mencetak setiap pasangan kunci dan nilai dari kwargs.", hint: "Gunakan perulangan for k, v in kwargs.items():", validate: c => c.includes("**kwargs") },
            { task: "Buat fungsi yang menerima *args angka, lalu mengembalikan nilai maksimumnya menggunakan max(args).", hint: "Gunakan fungsi max() pada args.", validate: c => c.includes("*args") && c.includes("max(") },
            { task: "Buat fungsi 'gabung_kata(*args)' yang menggabungkan beberapa kata string menjadi satu kalimat.", hint: "Gunakan ' '.join(args).", validate: c => c.includes("*args") && c.includes("join") },
            { task: "Buat fungsi yang menerima **kwargs biodata (nama, umur, kota) dan mencetak profil.", hint: "Akses nilai kwargs seperti dictionary.", validate: c => c.includes("**kwargs") },
            { task: "Buat fungsi yang menghitung jumlah total argumen (*args) yang dikirimkan menggunakan len(args).", hint: "Gunakan len(args).", validate: c => c.includes("*args") && c.includes("len(") },
            { task: "Buat fungsi yang menerima argumen wajib dan ditambah *args untuk angka tambahan.", hint: "Sintaks: def fungsi(wajib, *args):", validate: c => c.includes("*args") },
            { task: "Buat fungsi yang menerima **kwargs konfigurasi dan mencetak status setiap setting.", hint: "Iterasi item dari kwargs.", validate: c => c.includes("**kwargs") },
            { task: "Buat fungsi kalkulator fleksibel yang menerima *args dan mengalikan seluruh angkanya.", hint: "Gunakan perulangan untuk mengalikan elemen args.", validate: c => c.includes("*args") }
        ]
    },
    {
        id: 14, category: "Intermediate", title: "Level 14: Functional Programming (Map & Filter)",
        desc: "<b>Definisi Konsep Mendalam:</b> Paradigma pemrograman fungsional untuk memproses koleksi data secara bersih.<br><br><b>Poin Penting:</b><br>• <code>map()</code>: Mentransformasi setiap elemen data dalam koleksi.<br>• <code>filter()</code>: Menyaring elemen berdasarkan uji logika kondisi.<br>• Sering dipadukan dengan fungsi anonim berbaris tunggal <code>lambda</code>.",
        example: `angka = [1, 2, 3, 4]\nkuadrat = list(map(lambda x: x**2, angka))\nprint(kuadrat)`,
        tasks: [
            { task: "Gunakan map() dan lambda untuk mengalikan setiap angka dalam list [1, 2, 3, 4] dengan 2. Cetak hasilnya.", hint: "Gunakan list(map(lambda x: x * 2, [1, 2, 3, 4]))", validate: c => c.includes("map") && c.includes("lambda") },
            { task: "Gunakan filter() dan lambda untuk menyaring angka genap dari list [1, 2, 3, 4, 5, 6]. Cetak hasilnya.", hint: "Gunakan list(filter(lambda x: x % 2 == 0, ...))", validate: c => c.includes("filter") && c.includes("lambda") },
            { task: "Gunakan map() untuk mengubah list string kata menjadi huruf kapital dengan .upper().", hint: "Gunakan map(lambda s: s.upper(), list_kata)", validate: c => c.includes("map") && c.includes("upper") },
            { task: "Gunakan filter() untuk menyaring kata yang panjangnya lebih dari 4 huruf dari list kata.", hint: "Gunakan filter(lambda s: len(s) > 4, ...)", validate: c => c.includes("filter") && c.includes("len") },
            { task: "Gunakan map() untuk mengubah daftar suhu Celsius ke Fahrenheit menggunakan rumus matematika.", hint: "Terapkan rumus lambda c: (c * 9/5) + 32", validate: c => c.includes("map") && c.includes("lambda") },
            { task: "Gunakan filter() untuk menyaring nilai ujian yang lulus (>= 75) dari list nilai.", hint: "Kondisi lambda x: x >= 75", validate: c => c.includes("filter") && c.includes("lambda") },
            { task: "Gunakan map() untuk menambahkan string 'Mr. ' di depan daftar nama.", hint: "Gunakan f\"Mr. {n}\" dalam lambda map.", validate: c => c.includes("map") && c.includes("lambda") },
            { task: "Gunakan filter() untuk menyaring angka positif dari list angka acak (positif dan negatif).", hint: "Kondisi lambda x: x > 0", validate: c => c.includes("filter") && c.includes("lambda") },
            { task: "Gunakan map() untuk menghitung panjang karakter dari setiap kata dalam list.", hint: "Gunakan map(len, list_kata)", validate: c => c.includes("map") },
            { task: "Gunakan filter() untuk menyaring string kosong dari sebuah list teks.", hint: "Kondisi lambda s: bool(s)", validate: c => c.includes("filter") }
        ]
    },
    {
        id: 15, category: "Intermediate", title: "Level 15: Exception Handling (Try-Except)",
        desc: "<b>Definisi Konsep Mendalam:</b> Mekanisme pengamanan program untuk menangani error runtime secara elegan tanpa membuat aplikasi crash.<br><br><b>Poin Penting:</b><br>• <code>try</code>: Blok kode yang dipantau dari error.<br>• <code>except</code>: Menangkap jenis eksepsi error tertentu.<br>• <code>finally</code>: Blok kode yang dijamin selalu dieksekusi di akhir.",
        example: `try:\n    hasil = 10 / 0\nexcept ZeroDivisionError:\n    print("Tidak bisa dibagi nol!")`,
        tasks: [
            { task: "Buat blok try-except untuk menangani error konversi huruf 'abc' ke integer dengan ValueError.", hint: "Tangkap error dengan except ValueError:", validate: c => c.includes("try") && c.includes("except") },
            { task: "Buat blok try-except untuk menangani pembagian dengan angka nol (10 / 0) dengan ZeroDivisionError.", hint: "Tangkap error ZeroDivisionError.", validate: c => c.includes("try") && c.includes("except") },
            { task: "Buat blok try-except untuk mengakses indeks list yang di luar batas (IndexError).", hint: "Contoh: list[10] di dalam blok try.", validate: c => c.includes("try") && c.includes("except") },
            { task: "Buat blok try-except yang menangani error akses kunci dictionary yang tidak ada (KeyError).", hint: "Akses kunci fiktif di dalam try.", validate: c => c.includes("try") && c.includes("except") },
            { task: "Buat blok try-except dengan tambahan blok else yang berjalan jika tidak ada error.", hint: "Gunakan try ... except ... else:", validate: c => c.includes("try") && c.includes("except") && c.includes("else") },
            { task: "Buat blok try-except dengan tambahan blok finally yang selalu dieksekusi apapun kondisinya.", hint: "Gunakan blok finally:", validate: c => c.includes("try") && c.includes("except") && c.includes("finally") },
            { task: "Buat try-except untuk menangani kesalahan penambahan tipe data string dan integer (TypeError).", hint: "Contoh: \"teks\" + 5 di dalam try.", validate: c => c.includes("try") && c.includes("except") },
            { task: "Buat try-except untuk membuka file fiktif yang tidak ada (FileNotFoundError).", hint: "Gunakan open(\"tidak_ada.txt\") di dalam try.", validate: c => c.includes("try") && c.includes("except") },
            { task: "Buat try-except umum (Exception as e) untuk mencetak pesan error apa saja.", hint: "Gunakan except Exception as e:", validate: c => c.includes("try") && c.includes("except") },
            { task: "Buat try-except untuk konversi input string kosong menjadi float.", hint: "Konversi float(\"\") di dalam try.", validate: c => c.includes("try") && c.includes("except") }
        ]
    },
    {
        id: 16, category: "Advanced", title: "Level 16: List & Dictionary Comprehension",
        desc: "<b>Definisi Konsep Mendalam:</b> Cara elegan dan ringkas untuk membangun koleksi data baru dari iterable yang sudah ada dalam satu baris kode.<br><br><b>Poin Penting:</b><br>• Format List: <code>[ekspresi for item in iterable]</code>.<br>• Format Dictionary: <code>{key: val for item in iterable}</code>.<br>• Dapat disaring menggunakan kondisi logika tambahan <code>if</code>.",
        example: `kuadrat = {x: x**2 for x in range(1, 4)}\nprint(kuadrat)`,
        tasks: [
            { task: "Buat list comprehension untuk menghasilkan angka kuadrat dari 1 sampai 5.", hint: "Sintaks: [x**2 for x in range(1, 6)]", validate: c => c.includes("for") && c.includes("[") && c.includes("]") },
            { task: "Buat dictionary comprehension untuk memetakan angka 1 sampai 3 dengan kuadratnya {x: x**2}.", hint: "Sintaks: {x: x**2 for x in range(1, 4)}", validate: c => c.includes("for") && c.includes("{") && c.includes("}") },
            { task: "Buat list comprehension untuk menyaring angka genap dari 1 sampai 10.", hint: "Tambahkan kondisi if di akhir comprehension.", validate: c => c.includes("for") && c.includes("if") },
            { task: "Buat dictionary comprehension untuk mengubah list nama buah menjadi panjang karakternya {buah: len(buah)}.", hint: "Format {k: len(k) for k in list_buah}", validate: c => c.includes("for") && c.includes("len") },
            { task: "Buat set comprehension untuk menghasilkan angka unik sisa bagi 3 dari range(1, 10).", hint: "Gunakan kurung kurawal set comprehension.", validate: c => c.includes("for") && c.includes("{") },
            { task: "Buat list comprehension untuk mengubah string huruf kecil menjadi huruf kapital.", hint: "Gunakan [s.upper() for s in list_s]", validate: c => c.includes("for") && c.includes("upper") },
            { task: "Buat dictionary comprehension untuk membalik pasangan key-value dari dictionary yang ada.", hint: "Format {v: k for k, v in dict.items()}", validate: c => c.includes("for") && c.includes("items") },
            { task: "Buat list comprehension untuk menggabungkan dua list huruf dan angka menggunakan perulangan ganda.", hint: "Gunakan for a in list1 for b in list2.", validate: c => c.includes("for") },
            { task: "Buat list comprehension untuk menyaring kata yang diawali huruf 'A'.", hint: "Gunakan kondisi if kata.startswith('A').", validate: c => c.includes("for") && c.includes("if") },
            { task: "Buat dictionary comprehension dengan kondisi if untuk menyaring angka genap saja.", hint: "Format {x: x*2 for x in range(1, 6) if x % 2 == 0}", validate: c => c.includes("for") && c.includes("if") }
        ]
    },
    {
        id: 17, category: "Advanced", title: "Level 17: Custom Context Managers",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengelola alokasi dan pembersihan sumber daya sistem secara terstruktur menggunakan keyword <code>with</code>.<br><br><b>Poin Penting:</b><br>• Dibangun melalui class dengan mengimplementasikan metode spesial <code>__enter__</code> dan <code>__exit__</code>.",
        example: `class Timer:\n    def __enter__(self):\n        print("Mulai")\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("Selesai")\n\nwith Timer():\n    pass`,
        tasks: [
            { task: "Buat class context manager 'PesanKecil' yang mencetak 'Mulai Proses' saat __enter__ dan 'Selesai Proses' saat __exit__.", hint: "Definisikan method __enter__ dan __exit__.", validate: c => c.includes("__enter__") && c.includes("__exit__") },
            { task: "Gunakan context manager buatan class Timer dengan keyword 'with' untuk membungkus blok kode kosong.", hint: "Sintaks: with NamaClass():", validate: c => c.includes("with") },
            { task: "Buat context manager yang mengembalikan objek dirinya sendiri (return self) pada method __enter__.", hint: "Gunakan return self di method __enter__.", validate: c => c.includes("__enter__") && c.includes("return self") },
            { task: "Buat context manager penanganan error aman yang menangkap exception di method __exit__ dan mengembalikan True.", hint: "Kembalikan True di __exit__ untuk meredam error.", validate: c => c.includes("__exit__") },
            { task: "Buat class context manager untuk simulasi koneksi database buka dan tutup otomatis.", hint: "Cetak 'Koneksi dibuka' dan 'Koneksi ditutup'.", validate: c => c.includes("__enter__") && c.includes("__exit__") },
            { task: "Buat context manager pengukur waktu eksekusi kode sederhana dengan method enter dan exit.", hint: "Catat waktu di enter dan hitung selisih di exit.", validate: c => c.includes("__enter__") && c.includes("__exit__") },
            { task: "Buat class context manager pencatat log transaksi file sederhana.", hint: "Cetak log masuk dan keluar blok with.", validate: c => c.includes("__enter__") && c.includes("__exit__") },
            { task: "Buat context manager pengunci (lock) sumber daya fiktif.", hint: "Simulasi status terkunci dan terbuka.", validate: c => c.includes("__enter__") && c.includes("__exit__") },
            { task: "Buat context manager pengubah direktori kerja fiktif.", hint: "Simulasi navigasi path dengan with.", validate: c => c.includes("__enter__") && c.includes("__exit__") },
            { task: "Buat class context manager untuk transaksi keuangan aman.", hint: "Simulasi rollback atau commit fiktif.", validate: c => c.includes("__enter__") && c.includes("__exit__") }
        ]
    },
    {
        id: 18, category: "Advanced", title: "Level 18: Dunder / Magic Methods (Object Customization)",
        desc: "<b>Definisi Konsep Mendalam:</b> Metode spesial (<i>double underscore</i>) untuk menyesuaikan perilaku objek class agar kompatibel dengan fungsi bawaan Python.<br><br><b>Poin Penting:</b><br>• <code>__str__</code>: Representasi string objek.<br>• <code>__len__</code>: Menghitung panjang ukuran objek.<br>• <code>__add__</code>: Melakukan overloading operator aritmatika (+).",
        example: `class Buku:\n    def __init__(self, judul):\n        self.judul = judul\n    def __str__(self):\n        return f"Buku: {self.judul}"\n\nb = Buku("Python")\nprint(b)`,
        tasks: [
            { task: "Buat class 'Buku' dengan constructor dan method __str__ yang mengembalikan string 'Judul: ...'. Buat objek dan cetak.", hint: "Method __str__ menentukan representasi string objek.", validate: c => c.includes("__str__") },
            { task: "Buat class 'Titik' dengan koordinat (x, y) dan method __repr__ untuk representasi formal objek.", hint: "Gunakan def __repr__(self):", validate: c => c.includes("__repr__") },
            { task: "Buat class 'Koleksi' dengan method __len__ yang mengembalikan jumlah item di dalam list internal.", hint: "Gunakan return len(self.items) di dalam __len__.", validate: c => c.includes("__len__") },
            { task: "Buat class 'Angka' yang mengimplementasikan operator penjumlahan __add__ untuk menjumlahkan nilai objek.", hint: "Gunakan def __add__(self, other):", validate: c => c.includes("__add__") },
            { task: "Buat class 'Siswa' dengan method __eq__ untuk membandingkan kesamaan dua objek siswa berdasarkan nama.", hint: "Gunakan def __eq__(self, other):", validate: c => c.includes("__eq__") },
            { task: "Buat class 'Kotak' dengan method __str__ yang mencetak dimensi ukuran kotak.", hint: "Kembalikan f-string dimensi kotak.", validate: c => c.includes("__str__") },
            { task: "Buat class 'Dompet' dengan method __add__ untuk menggabungkan saldo dua dompet.", hint: "Jumlahkan saldo internal pada __add__.", validate: c => c.includes("__add__") },
            { task: "Buat class 'DaftarTugas' dengan method __len__ untuk mengembalikan jumlah tugas.", hint: "Implementasikan __len__.", validate: c => c.includes("__len__") },
            { task: "Buat class 'Produk' dengan method __str__ untuk mencetak nama dan harga produk.", hint: "Format string nama dan harga.", validate: c => c.includes("__str__") },
            { task: "Buat class 'Garis' dengan method __len__ untuk menghitung panjang garis fiktif.", hint: "Kembalikan panjang garis di __len__.", validate: c => c.includes("__len__") }
        ]
    },
    {
        id: 19, category: "Advanced", title: "Level 19: Dataclasses & Typed Data Structures",
        desc: "<b>Definisi Konsep Mendalam:</b> Dekorator <code>@dataclass</code> untuk membuat class penyimpanan data murni secara instan tanpa menulis kode konstruktor manual.<br><br><b>Poin Penting:</b><br>• Otomatis meng-generate metode <code>__init__</code>, <code>__repr__</code>, dan <code>__eq__</code>.",
        example: `from dataclasses import dataclass\n\n@dataclass\nclass Produk:\n    nama: str\n    harga: int\n\np = Produk("Laptop", 5000000)\nprint(p)`,
        tasks: [
            { task: "Impor dataclass, buat @dataclass class 'Siswa' dengan atribut 'nama' (str) dan 'nilai' (int). Buat objek dan cetak.", hint: "Gunakan from dataclasses import dataclass dan dekoratornya.", validate: c => c.includes("dataclass") },
            { task: "Buat @dataclass class 'Titik' dengan atribut koordinat x dan y bertipe float.", hint: "Definisikan atribut dengan tipe datanya secara langsung.", validate: c => c.includes("dataclass") },
            { task: "Buat @dataclass class 'Karyawan' dengan atribut nama dan gaji, lalu buat objek dan akses atributnya.", hint: "Dataclass otomatis membuat constructor __init__.", validate: c => c.includes("dataclass") },
            { task: "Buat @dataclass class 'Buku' dengan atribut judul, penulis, dan tahun terbit.", hint: "Tentukan tipe data string dan int pada atribut.", validate: c => c.includes("dataclass") },
            { task: "Buat dua objek dataclass 'Siswa' yang identik, lalu bandingkan kesamaannya menggunakan operator '==' (fitur otomatis dataclass).", hint: "Dataclass otomatis menghasilkan method __eq__.", validate: c => c.includes("dataclass") },
            { task: "Buat @dataclass class 'Mobil' dengan atribut merk, warna, dan harga.", hint: "Gunakan dekorator @dataclass di atas definisi class.", validate: c => c.includes("dataclass") },
            { task: "Buat @dataclass class 'Film' dengan atribut judul dan durasi (int).", hint: "Definisikan atribut dengan anotasi tipe data.", validate: c => c.includes("dataclass") },
            { task: "Buat @dataclass class 'Alamat' dengan atribut kota dan kode_pos.", hint: "Sintaks dataclass standar dengan dua atribut.", validate: c => c.includes("dataclass") },
            { task: "Buat @dataclass class 'ItemBelanja' dengan atribut nama_barang dan jumlah.", hint: "Tipe data str dan int.", validate: c => c.includes("dataclass") },
            { task: "Buat @dataclass class 'Pengguna' dengan atribut username dan email.", hint: "Gunakan anotasi tipe data str.", validate: c => c.includes("dataclass") }
        ]
    },
    {
        id: 20, category: "Advanced", title: "Level 20: Property Getters, Setters, & Encapsulation",
        desc: "<b>Definisi Konsep Mendalam:</b> Enkapsulasi data privat objek dengan kontrol validasi akses baca dan ubah melalui dekorator.<br><br><b>Poin Penting:</b><br>• <code>@property</code>: Berfungsi sebagai getter pembaca nilai.<br>• <code>@nama.setter</code>: Berfungsi sebagai pengontrol validasi saat atribut diubah.",
        example: `class Akun:\n    def __init__(self, saldo):\n        self._saldo = saldo\n    @property\n    def saldo(self):\n        return self._saldo\n\na = Akun(1000)\nprint(a.saldo)`,
        tasks: [
            { task: "Buat class 'Suhu' dengan atribut privat _celsius dan property 'celsius' untuk mengaksesnya.", hint: "Gunakan @property di atas method pembaca.", validate: c => c.includes("@property") },
            { task: "Buat class 'Persegi' dengan property 'luas' yang menghitung sisi * sisi secara otomatis.", hint: "Property menghitung nilai tanpa parameter tambahan.", validate: c => c.includes("@property") },
            { task: "Buat class 'Produk' dengan property 'harga' dan setter untuk mencegah harga diset bernilai negatif.", hint: "Gunakan @harga.setter untuk validasi perubahan.", validate: c => c.includes("@property") && c.includes("setter") },
            { task: "Buat class 'Lingkaran' dengan property 'diameter' yang mengembalikan 2 * r.", hint: "Definisikan @property diameter(self):", validate: c => c.includes("@property") },
            { task: "Buat class 'Karyawan' dengan property 'nama_lengkap' yang menggabungkan depan dan belakang.", hint: "Gabungkan dua atribut internal pada property.", validate: c => c.includes("@property") },
            { task: "Buat class 'Uang' dengan property 'rupiah' dan setter untuk memastikan nilai tidak kurang dari 0.", hint: "Validasi setter dengan kondisi if.", validate: c => c.includes("@property") && c.includes("setter") },
            { task: "Buat class 'Mobil' dengan property 'kecepatan' dan setter pembatas kecepatan maksimum.", hint: "Validasi angka maksimum pada setter.", validate: c => c.includes("@property") && c.includes("setter") },
            { task: "Buat class 'Segitiga' dengan property keliling.", hint: "Properti kalkulasi keliling otomatis.", validate: c => c.includes("@property") },
            { task: "Buat class 'Profil' dengan property 'email' terenkripsi fiktif.", hint: "Properti getter string khusus.", validate: c => c.includes("@property") },
            { task: "Buat class 'Baterai' dengan property 'persentase' yang dibatasi antara 0 dan 100.", hint: "Setter dengan clamping nilai 0-100.", validate: c => c.includes("@property") && c.includes("setter") }
        ]
    },
    {
        id: 21, category: "Expert", title: "Level 21: Descriptors Protocol",
        desc: "<b>Definisi Konsep Mendalam:</b> Mekanisme internal OOP Python untuk mengontrol manajemen akses atribut objek secara terpusat.<br><br><b>Poin Penting:</b><br>• Diimplementasikan melalui metode spesial <code>__get__</code> dan <code>__set__</code>.",
        example: `class ValidasiAngka:\n    def __get__(self, instance, owner):\n        return self._val\n    def __set__(self, instance, value):\n        if value < 0: raise ValueError("Harus positif")\n        self._val = value`,
        tasks: [
            { task: "Buat class descriptor 'DeskriptorPositif' yang memvalidasi agar nilai atribut tidak boleh negatif.", hint: "Implementasikan method __get__ dan __set__.", validate: c => c.includes("__get__") && c.includes("__set__") },
            { task: "Buat class descriptor 'DeskriptorString' yang memastikan nilai yang diset wajib bertipe string.", hint: "Gunakan isinstance(value, str) di dalam __set__.", validate: c => c.includes("__get__") && c.includes("__set__") },
            { task: "Buat class descriptor sederhana yang mencetak pesan log setiap kali atribut dibaca (__get__).", hint: "Cetak pesan log di method __get__.", validate: c => c.includes("__get__") },
            { task: "Buat class descriptor pencatat riwayat perubahan nilai atribut.", hint: "Simpan riwayat perubahan di dalam __set__.", validate: c => c.includes("__set__") },
            { task: "Buat descriptor pembatas panjang karakter string maksimum.", hint: "Validasi len(value) di dalam __set__.", validate: c => c.includes("__set__") },
            { task: "Buat descriptor otomatis mengubah string masukan menjadi huruf kapital.", hint: "Modifikasi value.upper() pada __set__.", validate: c => c.includes("__set__") },
            { task: "Buat descriptor penghitung jumlah akses baca atribut.", hint: "Tambah counter pada method __get__.", validate: c => c.includes("__get__") },
            { task: "Buat descriptor validasi rentang angka (min dan max).", hint: "Periksa batas bawah dan atas pada __set__.", validate: c => c.includes("__set__") },
            { task: "Buat descriptor keamanan read-only (tidak bisa diubah setelah diset pertama kali).", hint: "Cek apakah atribut sudah pernah diisi.", validate: c => c.includes("__set__") },
            { task: "Buat descriptor konversi satuan otomatis (misal cm ke meter).", hint: "Lakukan kalkulasi konversi di __set__.", validate: c => c.includes("__set__") }
        ]
    },
    {
        id: 22, category: "Expert", title: "Level 22: Closures & Nested Scopes",
        desc: "<b>Definisi Konsep Mendalam:</b> Fungsi bagian dalam (<i>nested function</i>) yang mempertahankan dan mengingat state variabel dari fungsi luar meskipun fungsi luar telah selesai dieksekusi.<br><br><b>Poin Penting:</b><br>• Menggunakan kata kunci <code>nonlocal</code> untuk memodifikasi variabel di cakupan luar.",
        example: `def pengali(faktor):\n    def kali(x):\n        return x * faktor\n    return kali\n\ndua_kali = pengali(2)\nprint(dua_kali(5))`,
        tasks: [
            { task: "Buat fungsi luar 'buat_penambah(n)' yang mengembalikan fungsi dalam untuk menambahkan x dengan n.", hint: "Fungsi dalam mengakses variabel n dari fungsi luar.", validate: c => c.includes("def") },
            { task: "Buat fungsi closure 'buat_penghitung()' yang menyimpan state counter internal yang bertambah setiap dipanggil.", hint: "Gunakan keyword nonlocal untuk mengubah variabel luar.", validate: c => c.includes("nonlocal") },
            { task: "Buat fungsi closure 'buat_pengonversi(kurs)' untuk menghitung nilai tukar mata uang.", hint: "Fungsi dalam mengalikan input dengan kurs.", validate: c => c.includes("def") },
            { task: "Buat fungsi closure penyimpan pesan rahasia yang hanya bisa diakses via fungsi dalam.", hint: "Simpan variabel pesan di fungsi luar.", validate: c => c.includes("def") },
            { task: "Buat fungsi closure pembuat pangkat (pangkat_dua, pangkat_tiga).", hint: "Fungsi luar menerima eksponen n.", validate: c => c.includes("def") },
            { task: "Buat fungsi closure pencatat riwayat eksekusi fungsi.", hint: "Simpan list riwayat di fungsi luar.", validate: c => c.includes("def") },
            { task: "Buat fungsi closure pembatas eksekusi (rate limiter sederhana).", hint: "Simpan hitungan akses.", validate: c => c.includes("def") },
            { task: "Buat fungsi closure pengatur volume suara (min 0 max 100).", hint: "Validasi nilai dengan closure.", validate: c => c.includes("def") },
            { task: "Buat fungsi closure pembuat sapaan kustom.", hint: "Fungsi luar menerima sapaan dasar.", validate: c => c.includes("def") },
            { task: "Buat fungsi closure penghitung total belanja kumulatif.", hint: "Simpan akumulasi total di variabel luar.", validate: c => c.includes("def") }
        ]
    },
    {
        id: 23, category: "Expert", title: "Level 23: File I/O (Membaca & Menulis Teks)",
        desc: "<b>Definisi Konsep Mendalam:</b> Operasi membaca dan menulis berkas teks ke media penyimpanan eksternal komputer.<br><br><b>Poin Penting:</b><br>• Mode tulis: <code>'w'</code> (overwrite) atau <code>'a'</code> (append).<br>• Mode baca: <code>'r'</code>.<br>• Menggunakan context manager <code>with</code> agar file dijamin tertutup otomatis.",
        example: `with open("test.txt", "w") as f:\n    f.write("Belajar File I/O")`,
        tasks: [
            { task: "Simulasikan penulisan string ke file 'catatan.txt' dengan mode 'w' dan isi 'Python Sangat Seru!'. Cetak sukses.", hint: "Gunakan with open(\"catatan.txt\", \"w\") as f:", validate: c => /open\([^)]*['"]w['"]/.test(c) },
            { task: "Simulasikan pembuatan file 'data.txt' dengan mode tulis ('w') dan isi 'Halo Dunia'.", hint: "Gunakan f.write(\"...\") di dalam blok with.", validate: c => /open\([^)]*['"]w['"]/.test(c) },
            { task: "Tulis kode untuk membuka file 'info.txt' dengan mode tambah ('a') untuk menyisipkan baris baru.", hint: "Gunakan mode 'a' (append) untuk menambah teks.", validate: c => /open\([^)]*['"]a['"]/.test(c) },
            { task: "Simulasikan pembacaan file teks menggunakan method f.read() di dalam context manager.", hint: "Gunakan mode 'r' dan f.read().", validate: c => c.includes("open") && c.includes("read") },
            { task: "Simulasikan pembacaan file baris per baris menggunakan method f.readlines().", hint: "Gunakan f.readlines() untuk mendapatkan list baris.", validate: c => c.includes("open") && c.includes("readlines") },
            { task: "Buat struktur pengecekan keberadaan file teks sebelum dibaca menggunakan blok try-except.", hint: "Gabungkan FileNotFoundError dengan open().", validate: c => c.includes("try") && c.includes("open") },
            { task: "Simulasikan penulisan beberapa baris data ke file 'laporan.txt' menggunakan writelines().", hint: "Metode writelines menerima list string.", validate: c => c.includes("open") && c.includes("writelines") },
            { task: "Buat script untuk menulis data angka ke dalam file teks 'skor.txt'.", hint: "Konversi angka ke string sebelum ditulis dengan f.write().", validate: c => c.includes("open") && c.includes("write") },
            { task: "Simulasikan penutupan file secara otomatis menggunakan struktur keyword 'with'.", hint: "Keyword with menjamin file tertutup otomatis.", validate: c => c.includes("with") && c.includes("open") },
            { task: "Simulasikan pembacaan baris pertama file menggunakan method f.readline().", hint: "Gunakan f.readline() untuk satu baris awal.", validate: c => c.includes("open") && c.includes("readline") }
        ]
    },
    {
        id: 24, category: "Expert", title: "Level 24: Generator & Yield",
        desc: "<b>Definisi Konsep Mendalam:</b> Fungsi khusus yang menghasilkan deretan data secara efisien satu per satu tanpa memenuhi kapasitas memori RAM.<br><br><b>Poin Penting:</b><br>• Menggunakan kata kunci <code>yield</code> alih-alih <code>return</code>.<br>• Menerapkan evaluasi malas (<i>lazy evaluation</i>).",
        example: `py_gen = (x for x in range(3))\nfor val in py_gen: print(val)`,
        tasks: [
            { task: "Buat fungsi generator 'angka_ganjil()' yang menggunakan yield 1, yield 3, dan yield 5. Cetak dengan for.", hint: "Gunakan def angka_ganjil(): lalu yield.", validate: c => c.includes("yield") },
            { task: "Buat generator sederhana menggunakan ekspresi kurung biasa (x for x in range(3)), lalu cetak nilainya.", hint: "Gunakan generator expression.", validate: c => c.includes("for") && c.includes("(") && c.includes(")") },
            { task: "Buat fungsi generator 'hitung_mundur()' yang menghasilkan angka 3, 2, 1 secara berurutan.", hint: "Gunakan yield berurutan dalam fungsi.", validate: c => c.includes("yield") },
            { task: "Buat fungsi generator 'deret_kelipatan_dua()' yang menghasilkan 2, 4, 6 menggunakan yield.", hint: "Gunakan yield di dalam perulangan atau baris terpisah.", validate: c => c.includes("yield") },
            { task: "Buat fungsi generator yang mengembalikan tiga nama buah pilihan menggunakan yield.", hint: "Yield menghasilkan string satu per satu.", validate: c => c.includes("yield") },
            { task: "Buat fungsi generator 'warna_lampu()' yang menghasilkan 'Merah', 'Kuning', 'Hijau'.", hint: "Gunakan yield untuk setiap status lampu.", validate: c => c.includes("yield") },
            { task: "Buat generator ekspresi untuk menghasilkan angka kuadrat dari 1 sampai 3.", hint: "Gunakan format (x**2 for x in range(1, 4))", validate: c => c.includes("for") && c.includes("(") && c.includes(")") },
            { task: "Buat fungsi generator yang menghasilkan nilai boolean True dan False bergantian.", hint: "Gunakan yield True lalu yield False.", validate: c => c.includes("yield") },
            { task: "Buat fungsi generator untuk menghasilkan huruf 'A', 'B', 'C' secara bertahap.", hint: "Gunakan yield untuk setiap huruf.", validate: c => c.includes("yield") },
            { task: "Buat fungsi generator angka fibonacci sederhana (1, 1, 2, 3) menggunakan yield.", hint: "Gunakan yield untuk mengembalikan nilai berseri.", validate: c => c.includes("yield") }
        ]
    },
    {
        id: 25, category: "Expert", title: "Level 25: Asynchronous Programming (Asyncio)",
        desc: "<b>Definisi Konsep Mendalam:</b> Model eksekusi tugas konkuren secara <i>non-blocking</i> untuk operasi I/O jaringan yang lambat.<br><br><b>Poin Penting:</b><br>• Gunakan <code>async def</code> mendefinisikan coroutine.<br>• Gunakan <code>await</code> untuk menunda eksekusi tanpa memblokir thread utama.",
        example: `import asyncio\nasync def main():\n    await asyncio.sleep(0.1)\n    print("Async Selesai")`,
        tasks: [
            { task: "Buat coroutine async 'cek_koneksi()' yang mencetak 'Menghubungkan...', await asyncio.sleep(0.1), lalu 'Terhubung!'. Jalankan dengan asyncio.run().", hint: "Impor asyncio dan gunakan async def.", validate: c => c.includes("async def") && c.includes("await") },
            { task: "Buat async function 'unduh_file()' yang mensimulasikan jeda await asyncio.sleep(0.1) dan mencetak 'Selesai'.", hint: "Gunakan await asyncio.sleep()", validate: c => c.includes("async def") && c.includes("await") },
            { task: "Buat async function 'proses_data()' yang mencetak status awal dan akhir dengan jeda async.", hint: "Struktur async def dan asyncio.run()", validate: c => c.includes("async def") && c.includes("await") },
            { task: "Buat async function 'kirim_email()' dengan jeda async singkat, lalu jalankan dengan asyncio.run().", hint: "Gunakan async def kirim_email():", validate: c => c.includes("async def") && c.includes("await") },
            { task: "Buat dua async function berurutan dan panggil keduanya di dalam fungsi main async.", hint: "Gunakan await untuk memanggil async function lain.", validate: c => c.includes("async def") && c.includes("await") },
            { task: "Buat async function 'hitung_mundur_async()' dengan jeda async antar cetak angka.", hint: "Kombinasikan perulangan dengan await asyncio.sleep().", validate: c => c.includes("async def") && c.includes("await") },
            { task: "Buat async function 'autentikasi_user()' yang mencetak 'Memverifikasi...' dan mencetak sukses.", hint: "Gunakan async def autentikasi_user():", validate: c => c.includes("async def") && c.includes("await") },
            { task: "Buat async function 'baca_database_async()' yang mensimulasikan delay query dengan sleep.", hint: "Gunakan await asyncio.sleep(0.1)", validate: c => c.includes("async def") && c.includes("await") },
            { task: "Buat async function 'render_halaman()' yang mensimulasikan proses rendering web async.", hint: "Gunakan async def render_halaman():", validate: c => c.includes("async def") && c.includes("await") },
            { task: "Buat async function 'tugas_latar_belakang()' dan jalankan via asyncio.run().", hint: "Eksekusi utama dengan asyncio.run(tugas_latar_belakang())", validate: c => c.includes("async def") && c.includes("await") }
        ]
    },
    {
        id: 26, category: "Master", title: "Level 26: Regular Expressions (Modul re)",
        desc: "<b>Definisi Konsep Mendalam:</b> Notasi pola karakter tingkat lanjut menggunakan modul <code>re</code> untuk pencarian, validasi, dan ekstraksi string.<br><br><b>Poin Penting:</b><br>• <code>re.findall()</code>: Mencari seluruh kecocokan pola teks.<br>• <code>re.sub()</code>: Menyensor atau mengganti teks berbasis pola.<br>• Pola digit angka: <code>\\d+</code>.",
        example: `import re\nhasil = re.findall(r'\\d+', 'Umur saya 25 tahun')\nprint(hasil)`,
        tasks: [
            { task: "Gunakan modul re untuk mencari semua angka dari teks 'Kode pos 12345 dan 67890' menggunakan pola r'\\d+'.", hint: "Gunakan re.findall(r'\\d+', teks)", validate: c => /\bre\b/.test(c) && c.includes("findall") },
            { task: "Gunakan modul re untuk mencari kata yang diawali huruf 'P' dari teks 'Python dan PHP sangat populer'.", hint: "Gunakan pola r'P\\w*'", validate: c => /\bre\b/.test(c) },
            { task: "Gunakan modul re.search() untuk mencari keberadaan kata 'admin' dalam sebuah teks.", hint: "Gunakan re.search(r'admin', teks)", validate: c => /\bre\b/.test(c) && c.includes("search") },
            { task: "Gunakan modul re.sub() untuk menyensor kata kasar 'bad' menjadi '***' dalam sebuah kalimat.", hint: "Gunakan re.sub(r'bad', '***', teks)", validate: c => /\bre\b/.test(c) && c.includes("sub") },
            { task: "Gunakan modul re untuk memvalidasi atau mencocokkan format ekstensi file '.jpg' dari string nama file.", hint: "Gunakan re.findall(r'\\.jpg', nama_file)", validate: c => /\bre\b/.test(c) },
            { task: "Gunakan modul re untuk mengekstrak alamat email sederhana dari teks kontak menggunakan pola khusus.", hint: "Gunakan pola r'[\\w.-]+@[\\w.-]+'", validate: c => /\bre\b/.test(c) },
            { task: "Gunakan modul re.split() untuk memisahkan teks berdasarkan tanda baca koma atau spasi.", hint: "Gunakan re.split(r'[, ]+', teks)", validate: c => /\bre\b/.test(c) && c.includes("split") },
            { task: "Gunakan modul re untuk mencari seluruh kata yang memiliki tepat 4 huruf (r'\\b\\w{4}\\b').", hint: "Gunakan boundary \\b dan kuantifikator {4}.", validate: c => /\bre\b/.test(c) },
            { task: "Gunakan modul re untuk mendeteksi apakah suatu string berisikan nomor telepon dengan pola digit.", hint: "Gunakan re.findall(r'\\d{3}-\\d{4}', teks)", validate: c => /\bre\b/.test(c) },
            { task: "Gunakan modul re untuk mencari seluruh huruf kapital di dalam string.", hint: "Gunakan pola regex [A-Z]+", validate: c => /\bre\b/.test(c) }
        ]
    },
    {
        id: 27, category: "Master", title: "Level 27: Unit Testing & Assert",
        desc: "<b>Definisi Konsep Mendalam:</b> Validasi kebenaran logika kode secara otomatis menggunakan perintah pengujian.<br><br><b>Poin Penting:</b><br>• Menggunakan kata kunci <code>assert kondisi</code>.<br>• Memicu error <code>AssertionError</code> jika asumsi program meleset dari ekspektasi.",
        example: `def kali(a, b): return a * b\nassert kali(2, 3) == 6\nprint("Test Lolos!")`,
        tasks: [
            { task: "Buat fungsi 'pangkat_dua(x)' yang mengembalikan x ** 2. Buat assert untuk menguji pangkat_dua(4) == 16.", hint: "Gunakan assert fungsi(input) == output", validate: c => c.includes("assert") },
            { task: "Buat fungsi 'tambah(a, b)' dan uji kebenarannya menggunakan assert tambah(5, 5) == 10.", hint: "assert tambah(5, 5) == 10", validate: c => c.includes("assert") },
            { task: "Buat fungsi 'luas_persegi(s)' dan uji menggunakan assert bahwa luas_persegi(3) bernilai 9.", hint: "assert s * s == 9", validate: c => c.includes("assert") },
            { task: "Buat fungsi 'panjang_kata(s)' yang mengembalikan len(s), lalu uji dengan assert panjang_kata('Test') == 4.", hint: "Gunakan assert len('Test') == 4", validate: c => c.includes("assert") },
            { task: "Buat fungsi 'cek_positif(x)' yang mengembalikan True jika x > 0, lalu uji dengan assert.", hint: "assert cek_positif(10) == True", validate: c => c.includes("assert") },
            { task: "Buat fungsi 'kurang(a, b)' dan buat perintah assert untuk menguji hasil pengurangan 10 - 4.", hint: "assert kurang(10, 4) == 6", validate: c => c.includes("assert") },
            { task: "Buat fungsi 'ubah_kapital(t)' yang mengembalikan t.upper(), lalu uji dengan assert.", hint: "assert ubah_kapital('abc') == 'ABC'", validate: c => c.includes("assert") },
            { task: "Buat fungsi 'keliling_persegi(s)' dan buat assert untuk menguji sisi 5 bernilai 20.", hint: "assert 4 * 5 == 20", validate: c => c.includes("assert") },
            { task: "Buat fungsi 'kali_dua(x)' dan buat assert untuk menguji nilai 7 dikali dua.", hint: "assert kali_dua(7) == 14", validate: c => c.includes("assert") },
            { task: "Buat fungsi 'sisa_bagi(a, b)' dan uji operasi modulo menggunakan assert.", hint: "assert a % b == target", validate: c => c.includes("assert") }
        ]
    },
    {
        id: 28, category: "Master", title: "Level 28: OOP Lanjutan: Pewarisan (Inheritance)",
        desc: "<b>Definisi Konsep Mendalam:</b> Konsep OOP di mana class anak mewarisi seluruh atribut dan metode dari class induk.<br><br><b>Poin Penting:</b><br>• Sintaks: <code>class Anak(Induk):</code>.<br>• Gunakan <code>super().__init__()</code> untuk memanggil konstruktor induk.",
        example: `class Induk:\n    sifat = "Ramah"\nclass Anak(Induk): pass\nprint(Anak.sifat)`,
        tasks: [
            { task: "Buat class induk 'Kendaraan' dengan method 'klakson(self)' ('Beep'). Buat class anak 'Mobil(Kendaraan)', buat objek dan cetak klaksonnya.", hint: "Definisikan class Anak(Induk):", validate: c => c.includes("class") },
            { task: "Buat class induk 'Hewan' dengan atribut 'nama'. Buat class anak 'Kucing(Hewan)' yang mewarisi atribut tersebut.", hint: "Gunakan super().__init__(nama)", validate: c => c.includes("class") && c.includes("super") },
            { task: "Buat class induk 'Karyawan' dengan method 'bekerja(self)'. Buat class anak 'Manager(Karyawan)' dan uji methodnya.", hint: "Class anak otomatis mewarisi method induk.", validate: c => c.includes("class") },
            { task: "Buat class induk 'Akun' dan class anak 'AkunPremium' yang menambahkan method 'fitur_vip()'.", hint: "Tambahkan method baru di class anak.", validate: c => c.includes("class") },
            { task: "Buat class induk 'Bangunan' dengan atribut 'lantai'. Buat class anak 'Rumah' yang mewarisi atribut lantai.", hint: "Gunakan pewarisan class dasar.", validate: c => c.includes("class") },
            { task: "Buat class induk 'Pakaian' dengan atribut 'warna'. Buat class anak 'Jaket' dan cetak warnanya.", hint: "Inisialisasi atribut melalui constructor induk.", validate: c => c.includes("class") },
            { task: "Buat class induk 'PemainGame' dengan method 'gerak(self)'. Buat class anak 'Pemanah' yang mewarisinya.", hint: "Panggil method warisan induk dari objek anak.", validate: c => c.includes("class") },
            { task: "Buat class induk 'Perangkat' dengan atribut 'merk'. Buat class anak 'Smartphone' dan uji atributnya.", hint: "Pewarisan atribut dasar OOP.", validate: c => c.includes("class") },
            { task: "Buat class induk 'AlatMusik' dengan method 'bunyi(self)'. Buat class anak 'Gitar' yang mewarisinya.", hint: "Definisikan class Gitar(AlatMusik): pass", validate: c => c.includes("class") },
            { task: "Buat class induk 'Bentuk' dan class anak 'PersegiPanjang' yang mewarisi sifat dasarnya.", hint: "Struktur inheritance Python standar.", validate: c => c.includes("class") }
        ]
    },
    {
        id: 29, category: "Master", title: "Level 29: Memory Management & Garbage Collection",
        desc: "<b>Definisi Konsep Mendalam:</b> Sistem pengelolaan alokasi memori RAM dan pembersihan objek mati secara otomatis.<br><br><b>Poin Penting:</b><br>• Python melacak referensi objek (<i>reference counting</i>).<br>• Modul <code>gc</code> mengelola pembersihan siklus referensi melingkar.",
        example: `import sys\nx = [1, 2, 3]\nprint(sys.getrefcount(x))`,
        tasks: [
            { task: "Impor modul sys, buat variabel list, lalu periksa jumlah reference count objek tersebut menggunakan sys.getrefcount().", hint: "Gunakan sys.getrefcount(objek).", validate: c => c.includes("sys") && c.includes("getrefcount") },
            { task: "Impor modul gc (garbage collector), aktifkan secara manual dengan gc.enable(), lalu cetak statusnya.", hint: "Gunakan gc.enable() dan gc.isenabled().", validate: c => c.includes("gc") && c.includes("enable") },
            { task: "Buat referensi melingkar (circular reference) sederhana antara dua objek dan pelajari cara pembersihannya.", hint: "Simulasi objek mereferensikan satu sama lain.", validate: c => c.includes("gc") || c.includes("del") },
            { task: "Gunakan fungsi id() untuk memeriksa alamat memori unik dari sebuah variabel objek.", hint: "Gunakan fungsi bawaan id(variabel).", validate: c => c.includes("id(") },
            { task: "Hapus referensi objek secara eksplisit menggunakan keyword 'del' lalu verifikasi penghapusannya.", hint: "Gunakan del nama_variabel.", validate: c => c.includes("del") },
            { task: "Periksa ambang batas (threshold) pengumpulan sampah garbage collector menggunakan gc.get_threshold().", hint: "Gunakan gc.get_threshold().", validate: c => c.includes("gc") && c.includes("threshold") },
            { task: "Jalankan pengumpulan sampah memori secara paksa menggunakan fungsi gc.collect().", hint: "Gunakan gc.collect().", validate: c => c.includes("gc") && c.includes("collect") },
            { task: "Simulasikan penghapusan variabel besar dari memori untuk mengoptimalkan penggunaan RAM.", hint: "Gunakan del untuk membersihkan memori.", validate: c => c.includes("del") },
            { task: "Periksa alokasi memori string kecil vs besar menggunakan id() atau modul sys.", hint: "Bandingkan alamat atau ukuran objek.", validate: c => c.includes("sys") || c.includes("id") },
            { task: "Buat program pemantauan pembersihan objek menggunakan destructor __del__ pada class.", hint: "Definisikan method __del__(self) untuk memantau kehancuran objek.", validate: c => c.includes("__del__") }
        ]
    },
    {
        id: 30, category: "Master", title: "Level 30: Advanced Decorators with Arguments",
        desc: "<b>Definisi Konsep Mendalam:</b> Dekorator fungsi tingkat lanjut yang mampu menerima argumen kustom eksternal.<br><br><b>Poin Penting:</b><br>• Mengharuskan struktur 3 fungsi bersarang (<i>three-nested functions</i>).",
        example: `def ulang(n):\n    def dekorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                func(*args, **kwargs)\n        return wrapper\n    return dekorator`,
        tasks: [
            { task: "Buat dekorator berargumen 'ulang(n)' yang mengeksekusi fungsi target sebanyak n kali.", hint: "Gunakan tiga fungsi bersarang (nested functions).", validate: c => c.includes("def") },
            { task: "Buat dekorator 'cek_tipe(tipe_data)' yang memvalidasi tipe argumen fungsi sebelum dieksekusi.", hint: "Periksa isinstance(arg, tipe_data) di dalam wrapper.", validate: c => c.includes("def") && c.includes("isinstance") },
            { task: "Buat dekorator 'batasi_akses(role)' untuk memeriksa apakah pengguna memiliki izin peran tertentu.", hint: "Validasi role sebelum memanggil fungsi asli.", validate: c => c.includes("def") },
            { task: "Buat dekorator 'ukur_waktu(pesan)' dengan argumen kustom string untuk mencetak durasi eksekusi.", hint: "Kombinasikan waktu eksekusi dengan pesan kustom.", validate: c => c.includes("def") },
            { task: "Buat dekorator 'coba_lagi(maks_coba)' yang mengulang eksekusi fungsi jika terjadi error.", hint: "Gunakan blok try-except di dalam wrapper.", validate: c => c.includes("def") && c.includes("try") },
            { task: "Buat dekorator 'catat_log(file_name)' yang menuliskan catatan setiap kali fungsi dipanggil.", hint: "Simulasikan penulisan log dengan argumen nama file.", validate: c => c.includes("def") },
            { task: "Buat dekorator 'tambah_prefix(prefiks)' yang memodifikasi hasil string kembalian fungsi.", hint: "Modifikasi output string dari pemanggilan func(*args).", validate: c => c.includes("def") },
            { task: "Buat dekorator 'cegah_null(default_val)' yang mengganti argumen None dengan nilai default.", hint: "Filter argumen sebelum dikirim ke func.", validate: c => c.includes("def") },
            { task: "Buat dekorator pembatas nilai minimum (clamp) untuk argumen angka numerik.", hint: "Batasi nilai argumen angka agar tidak melebihi batas.", validate: c => c.includes("def") },
            { task: "Buat dekorator pengubah hasil keluaran fungsi menjadi huruf kapital seluruhnya.", hint: "Gunakan .upper() pada hasil kembalian fungsi target.", validate: c => c.includes("def") && c.includes("upper") }
        ]
    },
    {
        id: 31, category: "Professional", title: "Level 31: Concurrent Execution: ThreadPoolExecutor",
        desc: "<b>Definisi Konsep Mendalam:</b> Eksekusi tugas konkuren secara paralel berbasis thread untuk optimalisasi proses I/O.<br><br><b>Poin Penting:</b><br>• Menggunakan pustaka standar <code>concurrent.futures</code>.<br>• Sangat optimal untuk proses yang sering menunggu respon jaringan atau file.",
        example: `from concurrent.futures import ThreadPoolExecutor\n\ndef tugas(n):\n    return n * 2\n\nwith ThreadPoolExecutor(max_workers=3) as executor:\n    hasil = list(executor.map(tugas, [1, 2, 3]))\nprint(hasil)`,
        tasks: [
            { task: "Impor ThreadPoolExecutor, buat fungsi kuadrat, dan jalankan secara paralel menggunakan executor.map() untuk list [1, 2, 3, 4].", hint: "Gunakan with ThreadPoolExecutor(max_workers=2) as ex:", validate: c => c.includes("ThreadPoolExecutor") },
            { task: "Gunakan executor.submit() untuk mengirimkan satu tugas fungsi tunggal ke dalam ThreadPoolExecutor.", hint: "Simpan hasil ke future object dan panggil .result().", validate: c => c.includes("ThreadPoolExecutor") && c.includes("submit") },
            { task: "Buat program paralel sederhana untuk memproses beberapa tugas unduh fiktif secara bersamaan.", hint: "Gunakan perulangan map dengan thread pool.", validate: c => c.includes("ThreadPoolExecutor") },
            { task: "Gunakan as_completed() untuk menangani hasil thread mana yang selesai lebih dulu.", hint: "Impor as_completed dari concurrent.futures.", validate: c => c.includes("as_completed") },
            { task: "Atur jumlah maksimum pekerja (max_workers=4) pada inisialisasi ThreadPoolExecutor.", hint: "Tentukan parameter max_workers.", validate: c => c.includes("ThreadPoolExecutor") && c.includes("max_workers") },
            { task: "Gunakan ThreadPoolExecutor untuk menjalankan beberapa operasi I/O fiktif bersamaan.", hint: "Manfaatkan eksekusi non-blocking thread.", validate: c => c.includes("ThreadPoolExecutor") },
            { task: "Kumpulkan hasil beberapa future object ke dalam list menggunakan list comprehension.", hint: "Panggil .result() pada setiap future.", validate: c => c.includes("ThreadPoolExecutor") && c.includes("result") },
            { task: "Buat fungsi kalkulasi sederhana yang dipetakan secara paralel menggunakan executor.", hint: "Gunakan executor.map().", validate: c => c.includes("ThreadPoolExecutor") && c.includes("map") },
            { task: "Uji performa eksekusi fungsi dengan dan tanpa ThreadPoolExecutor.", hint: "Bandingkan kecepatan eksekusi paralel.", validate: c => c.includes("ThreadPoolExecutor") },
            { task: "Tulis struktur lengkap penggunaan ThreadPoolExecutor dalam blok context manager 'with'.", hint: "Context manager with otomatis menutup executor.", validate: c => c.includes("with") && c.includes("ThreadPoolExecutor") }
        ]
    },
    {
        id: 32, category: "Professional", title: "Level 32: Concurrent Execution: ProcessPoolExecutor",
        desc: "<b>Definisi Konsep Mendalam:</b> Pemanfaatan multi-core CPU secara maksimal untuk komputasi berat (CPU-bound) melalui proses terpisah.<br><br><b>Poin Penting:</b><br>• Melewati batasan GIL (Global Interpreter Lock) Python.",
        example: `from concurrent.futures import ProcessPoolExecutor\n\ndef hitung_berat(n):\n    return n ** 5\n\nwith ProcessPoolExecutor() as ex:\n    print(list(ex.map(hitung_berat, [2, 3, 4])))`,
        tasks: [
            { task: "Impor ProcessPoolExecutor, buat fungsi perpangkatan berat, dan jalankan secara paralel untuk list [2, 3, 4].", hint: "Gunakan with ProcessPoolExecutor() as ex:", validate: c => c.includes("ProcessPoolExecutor") },
            { task: "Kirim tugas komputasi CPU-bound menggunakan method ex.submit() pada ProcessPoolExecutor.", hint: "Kirim fungsi dan argumen ke submit().", validate: c => c.includes("ProcessPoolExecutor") && c.includes("submit") },
            { task: "Gunakan ProcessPoolExecutor untuk memproses list angka besar secara paralel antar proses CPU.", hint: "Gunakan ex.map() untuk pemetaan data.", validate: c => c.includes("ProcessPoolExecutor") },
            { task: "Bandingkan penggunaan ThreadPoolExecutor (untuk I/O) vs ProcessPoolExecutor (untuk CPU).", hint: "Process menggunakan proses terpisah di RAM.", validate: c => c.includes("ProcessPoolExecutor") },
            { task: "Tangkap hasil eksekusi proses paralel menggunakan .result() pada objek future.", hint: "Panggil future.result().", validate: c => c.includes("ProcessPoolExecutor") && c.includes("result") },
            { task: "Tentukan jumlah max_workers proses sesuai core CPU yang diinginkan.", hint: "Atur parameter max_workers.", validate: c => c.includes("ProcessPoolExecutor") && c.includes("max_workers") },
            { task: "Gunakan ProcessPoolExecutor dalam blok context manager with agar aman.", hint: "Context manager otomatis mengelola shutdown proses.", validate: c => c.includes("with") && c.includes("ProcessPoolExecutor") },
            { task: "Buat fungsi faktorial rekursif berat dan jalankan via ProcessPoolExecutor.", hint: "Petakan fungsi rekursif.", validate: c => c.includes("ProcessPoolExecutor") },
            { task: "Iterasi hasil proses paralel menggunakan perulangan for standar.", hint: "Iterasi langsung pada hasil map executor.", validate: c => c.includes("ProcessPoolExecutor") },
            { task: "Pastikan fungsi yang diproses ProcessPoolExecutor dapat diserialisasi (picklable).", hint: "Fungsi harus didefinisikan di level modul utama.", validate: c => c.includes("ProcessPoolExecutor") }
        ]
    },
    {
        id: 33, category: "Professional", title: "Level 33: Type Hinting & Static Analysis (typing)",
        desc: "<b>Definisi Konsep Mendalam:</b> Anotasi tipe data eksplisit pada parameter fungsi dan variabel untuk standar kode enterprise.<br><br><b>Poin Penting:</b><br>• Membantu analisis statis kode.<br>• Modul bawaan: <code>List</code>, <code>Dict</code>, <code>Optional</code>, <code>Union</code>.",
        example: `from typing import List, Dict\n\ndef proses_data(skor: List[int]) -> float:\n    return sum(skor) / len(skor)`,
        tasks: [
            { task: "Buat fungsi 'sapa' dengan parameter nama bertipe str dan kembalian bertipe str (-> str).", hint: "Sintaks: def sapa(nama: str) -> str:", validate: c => c.includes("->") && c.includes("str") },
            { task: "Impor List dari typing, buat fungsi yang menerima parameter List[int] dan mengembalikan nilai int.", hint: "Gunakan anotasi parameter list angka.", validate: c => c.includes("List") },
            { task: "Impor Optional dari typing untuk parameter fungsi yang boleh bernilai string atau None.", hint: "Gunakan Optional[str].", validate: c => c.includes("Optional") },
            { task: "Impor Union dari typing untuk fungsi yang menerima parameter bertipe int atau float.", hint: "Gunakan Union[int, float].", validate: c => c.includes("Union") },
            { task: "Impor Dict dari typing untuk fungsi yang menerima parameter berformat Dict[str, int].", hint: "Anotasikan dictionary dengan key str dan value int.", validate: c => c.includes("Dict") },
            { task: "Buat fungsi dengan anotasi tipe data untuk koordinat (x: float, y: float) -> tuple.", hint: "Berikan anotasi pada setiap parameter fungsi.", validate: c => c.includes("float") },
            { task: "Impor Callable dari typing untuk fungsi yang menerima fungsi lain sebagai parameter.", hint: "Gunakan Callable[[int], int].", validate: c => c.includes("Callable") },
            { task: "Buat class dengan atribut yang diberikan tipe data eksplisit (Type Hinting pada class).", hint: "Contoh: umur: int di dalam class.", validate: c => c.includes("class") },
            { task: "Impor Any dari typing untuk parameter fungsi yang dapat menerima tipe data apa saja.", hint: "Gunakan parameter bertipe Any.", validate: c => c.includes("Any") },
            { task: "Buat fungsi dengan type hinting lengkap beserta nilai default parameternya.", hint: "Gabungkan type hint dengan nilai default = 0.", validate: c => c.includes("->") }
        ]
    },
    {
        id: 34, category: "Professional", title: "Level 34: Data Serialization (Pickle vs JSON)",
        desc: "<b>Definisi Konsep Mendalam:</b> Proses mengonversi struktur objek data menjadi format biner atau teks standar untuk penyimpanan dan transmisi.<br><br><b>Poin Penting:</b><br>• <code>json</code>: Format universal web yang ramah dibaca manusia.<br>• <code>pickle</code>: Serialisasi biner murni khusus objek Python.",
        example: `import json\n\ndata = {"nama": "Ammar", "level": 34}\njs_str = json.dumps(data)\nprint(js_str)`,
        tasks: [
            { task: "Impor modul json, konversi dictionary Python menjadi string JSON menggunakan json.dumps().", hint: "Gunakan json.dumps(dict_data).", validate: c => c.includes("json") && c.includes("dumps") },
            { task: "Konversi balik (deserialize) string JSON menjadi dictionary Python menggunakan json.loads().", hint: "Gunakan json.loads(string_json).", validate: c => c.includes("json") && c.includes("loads") },
            { task: "Impor modul pickle, serialisasi objek list kompleks ke dalam format byte biner menggunakan pickle.dumps().", hint: "Gunakan pickle.dumps(objek).", validate: c => c.includes("pickle") && c.includes("dumps") },
            { task: "Kembalikan byte biner pickle menjadi objek aslinya menggunakan pickle.loads().", hint: "Gunakan pickle.loads(byte_data).", validate: c => c.includes("pickle") && c.includes("loads") },
            { task: "Simulasikan penyimpanan dictionary ke file teks berformat JSON.", hint: "Gunakan json.dump() dengan file open.", validate: c => c.includes("json") && c.includes("dump") },
            { task: "Simulasikan pembacaan file JSON kembali ke dictionary Python.", hint: "Gunakan json.load() dengan file open.", validate: c => c.includes("json") && c.includes("load") },
            { task: "Bandingkan keunggulan JSON (human-readable) vs Pickle (mendukung semua objek Python termasuk class kustom).", hint: "Pickle mampu menyimpan objek class buatan sendiri.", validate: c => c.includes("json") || c.includes("pickle") },
            { task: "Tulis objek class kustom ke dalam bentuk biner menggunakan pickle.", hint: "Serialisasi instance class dengan pickle.", validate: c => c.includes("pickle") },
            { task: "Simulasikan penanganan error saat parsing string JSON yang tidak valid.", hint: "Gunakan try-except JSONDecodeError.", validate: c => c.includes("json") && c.includes("try") },
            { task: "Simulasikan penyimpanan data konfigurasi aplikasi menggunakan format JSON.", hint: "Buat struktur data config dictionary.", validate: c => c.includes("json") }
        ]
    },
    {
        id: 35, category: "Professional", title: "Level 35: Network Sockets & TCP/IP Communication",
        desc: "<b>Definisi Konsep Mendalam:</b> Membangun aplikasi jaringan komputer tingkat rendah berbasis protokol TCP/IP.<br><br><b>Poin Penting:</b><br>• Menggunakan modul bawaan <code>socket</code>.<br>• Melibatkan alur koneksi <i>bind</i>, <i>listen</i>, dan <i>connect</i>.",
        example: `import socket\n\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)\nprint("Socket TCP berhasil dibuat!")`,
        tasks: [
            { task: "Impor modul socket, buat objek socket TCP menggunakan socket.AF_INET dan socket.SOCK_STREAM.", hint: "Sintaks: socket.socket(socket.AF_INET, socket.SOCK_STREAM)", validate: c => c.includes("socket") },
            { task: "Simulasikan pengikatan alamat IP localhost dan port (bind) pada socket server.", hint: "Gunakan socket.bind(('127.0.0.1', 8080)).", validate: c => c.includes("socket") && c.includes("bind") },
            { task: "Aktifkan mode mendengarkan koneksi (listen) pada socket server.", hint: "Gunakan socket.listen(1).", validate: c => c.includes("socket") && c.includes("listen") },
            { task: "Simulasikan pembuatan socket klien untuk menghubungkan ke alamat server.", hint: "Gunakan socket.connect(('127.0.0.1', 8080)).", validate: c => c.includes("socket") && c.includes("connect") },
            { task: "Kirim data teks melalui socket menggunakan method .send() setelah di-encode ke utf-8.", hint: "Gunakan text.encode('utf-8').", validate: c => c.includes("socket") && c.includes("encode") },
            { task: "Terima data masuk dari socket menggunakan method .recv() dan lakukan .decode() utf-8.", hint: "Gunakan data.decode('utf-8').", validate: c => c.includes("socket") && c.includes("decode") },
            { task: "Tutup koneksi socket secara bersih menggunakan method .close().", hint: "Panggil socket.close().", validate: c => c.includes("socket") && c.includes("close") },
            { task: "Gunakan context manager 'with' untuk mengelola penutupan socket otomatis.", hint: "Bungkus pembuatan socket dengan with.", validate: c => c.includes("with") && c.includes("socket") },
            { task: "Atur timeout pada objek socket untuk mencegah koneksi menggantung.", hint: "Gunakan socket.settimeout(5.0).", validate: c => c.includes("socket") && c.includes("settimeout") },
            { task: "Dapatkan nama hostname komputer lokal menggunakan socket.gethostname().", hint: "Gunakan socket.gethostname().", validate: c => c.includes("socket") && c.includes("gethostname") }
        ]
    },
    {
        id: 36, category: "Grandmaster", title: "Level 36: Metaclasses & Class Factories",
        desc: "<b>Definisi Konsep Mendalam:</b> Metaclass adalah 'class dari sebuah class' yang mengontrol aturan penciptaan dan validasi struktur class saat didefinisikan.<br><br><b>Poin Penting:</b><br>• Mengatur struktur atribut sebelum objek diinstansiasi.",
        example: `class MetaKetat(type):\n    def __new__(cls, name, bases, attrs):\n        if 'id' not in attrs:\n            raise TypeError("Class wajib punya atribut id")\n        return super().__new__(cls, name, bases, attrs)`,
        tasks: [
            { task: "Buat metaclass turunan 'type' yang memeriksa apakah setiap class baru memiliki atribut wajib 'versinya'.", hint: "Gunakan def __new__(cls, name, bases, attrs):", validate: c => c.includes("__new__") },
            { task: "Buat class menggunakan metaclass kustom dengan menyertakan parameter metaclass=MetaKetat.", hint: "Sintaks: class Contoh(metaclass=MetaKetat):", validate: c => c.includes("metaclass") },
            { task: "Buat fungsi factory class sederhana yang mengembalikan class baru secara dinamis berdasarkan parameter.", hint: "Gunakan type('NamaClass', (object,), {'Atribut': nilai})", validate: c => c.includes("type(") },
            { task: "Buat metaclass yang otomatis mengubah nama seluruh method di dalam class menjadi huruf kapital.", hint: "Iterasi attrs dan ubah nama kunci dictionary.", validate: c => c.includes("__new__") },
            { task: "Buat metaclass yang mencetak log setiap kali sebuah class baru didefinisikan di program.", hint: "Cetak log di dalam method __new__ metaclass.", validate: c => c.includes("__new__") },
            { task: "Buat factory class untuk menghasilkan berbagai jenis objek produk toko secara dinamis.", hint: "Fungsi mengembalikan instance class.", validate: c => c.includes("class") },
            { task: "Buat metaclass pembatas jumlah maksimum pembuatan subclass.", hint: "Hitung jumlah subclass pada basis class.", validate: c => c.includes("__new__") },
            { task: "Buat metaclass validasi tipe data atribut class tingkat lanjut.", hint: "Periksa tipe data di attrs.", validate: c => c.includes("__new__") },
            { task: "Gunakan fungsi bawaan type() untuk membuat class secara instan saat runtime.", hint: "type('Dinamis', (), {'x': 10})", validate: c => c.includes("type(") },
            { task: "Buat metaclass pencegah instansiasi class jika kondisi tertentu tidak terpenuhi.", hint: "Validasi pada __init__ metaclass.", validate: c => c.includes("__init__") }
        ]
    },
    {
        id: 37, category: "Grandmaster", title: "Level 37: Performance Profiling & Benchmarking",
        desc: "<b>Definisi Konsep Mendalam:</b> Menganalisis bagian kode program yang paling lambat (bottleneck) untuk keperluan optimasi performa.<br><br><b>Poin Penting:</b><br>• <code>timeit</code>: Mengukur kecepatan waktu eksekusi kode.<br>• <code>cProfile</code>: Melacak fungsi yang memakan waktu CPU terbanyak.",
        example: `import timeit\n\nwaktu = timeit.timeit("sum(range(100))", number=1000)\nprint(f"Waktu eksekusi: {waktu}")`,
        tasks: [
            { task: "Impor modul timeit, ukur kecepatan eksekusi perintah 'sum(range(1000))' sebanyak 1000 kali pengulangan.", hint: "Gunakan timeit.timeit('...', number=1000)", validate: c => c.includes("timeit") },
            { task: "Impor modul cProfile, buat objek profil untuk menganalisis performa fungsi penjumlahan list.", hint: "Gunakan cProfile.run('fungsi()').", validate: c => c.includes("cProfile") },
            { task: "Gunakan statement with timeit.timeit() atau pengukuran manual waktu awal dan akhir dengan time.time().", hint: "Kurangi waktu akhir dengan waktu awal.", validate: c => c.includes("time") },
            { task: "Ukur perbandingan kecepatan list comprehension vs perulangan for biasa menggunakan timeit.", hint: "Bandingkan dua string ekspresi di timeit.", validate: c => c.includes("timeit") },
            { task: "Gunakan modul cProfile untuk melacak fungsi mana yang paling banyak memakan waktu CPU.", hint: "Jalankan cProfile pada fungsi rekursif.", validate: c => c.includes("cProfile") },
            { task: "Ukur kecepatan penggabungan string menggunakan operator '+' vs method ''.join().", hint: "Benchmark dua metode string.", validate: c => c.includes("join") },
            { task: "Buat fungsi benchmarking sederhana pengukur waktu eksekusi fungsi.", hint: "Catat start dan end time.", validate: c => c.includes("time") },
            { task: "Ukur performa pencarian elemen di dalam set vs list menggunakan timeit.", hint: "Bandingkan kecepatan lookup 'in'.", validate: c => c.includes("timeit") },
            { task: "Gunakan timeit dengan parameter setup untuk inisialisasi variabel awal.", hint: "Gunakan parameter setup='...' di timeit.", validate: c => c.includes("timeit") },
            { task: "Analisis profil memori dasar bersamaan dengan profiling waktu eksekusi.", hint: "Gabungkan pengukuran waktu dan operasi.", validate: c => c.includes("time") }
        ]
    },
    {
        id: 38, category: "Grandmaster", title: "Level 38: Custom Iterators & Iterables Protocols",
        desc: "<b>Definisi Konsep Mendalam:</b> Memahami mekanisme protokol perulangan di balik layar Python.<br><br><b>Poin Penting:</b><br>• Implementasi manual metode <code>__iter__()</code> dan <code>__next__()</code>.<br>• Menghentikan perulangan iterasi menggunakan exception <code>StopIteration</code>.",
        example: `class HitungMaju:\n    def __init__(self, batas):\n        self.batas = batas\n        self.sekarang = 0\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.sekarang >= self.batas: raise StopIteration\n        val = self.sekarang\n        self.sekarang += 1\n        return val`,
        tasks: [
            { task: "Buat class iterator kustom 'HitungMaju' yang menghasilkan angka dari 0 hingga batas menggunakan __iter__ dan __next__.", hint: "Raise StopIteration saat mencapai batas.", validate: c => c.includes("__iter__") && c.includes("__next__") },
            { task: "Uji class iterator kustom buatan Anda menggunakan perulangan for loop standar.", hint: "For i in HitungMaju(3): print(i)", validate: c => c.includes("__iter__") && c.includes("__next__") },
            { task: "Buat class iterable rentang kata kustom yang mengembalikan kata satu per satu.", hint: "Implementasikan method __iter__ dan __next__.", validate: c => c.includes("__iter__") && c.includes("__next__") },
            { task: "Buat iterator kustom untuk deret kelipatan angka.", hint: "Kalikan nilai saat ini di __next__.", validate: c => c.includes("__iter__") && c.includes("__next__") },
            { task: "Buat iterator kustom pembaca baris data fiktif.", hint: "Kembalikan elemen list internal satu per satu.", validate: c => c.includes("__iter__") && c.includes("__next__") },
            { task: "Buat iterator kustom pembalik string (mundur).", hint: "Kurangi indeks setiap __next__ dipanggil.", validate: c => c.includes("__iter__") && c.includes("__next__") },
            { task: "Buat iterator kustom bilangan genap.", hint: "Tambah 2 setiap kali __next__ dijalankan.", validate: c => c.includes("__iter__") && c.includes("__next__") },
            { task: "Buat iterable class yang dapat diulang berkali-kali dengan mengembalikan iterator baru.", hint: "Method __iter__ mengembalikan objek iterator baru.", validate: c => c.includes("__iter__") },
            { task: "Buat iterator kustom siklus warna lampu (Merah, Kuning, Hijau berulang).", hint: "Gunakan modulo indeks pada __next__.", validate: c => c.includes("__iter__") && c.includes("__next__") },
            { task: "Buat iterator kustom deret kuadrat angka.", hint: "Kembalikan kuadrat nilai saat ini di __next__.", validate: c => c.includes("__iter__") && c.includes("__next__") }
        ]
    },
    {
        id: 39, category: "Grandmaster", title: "Level 39: Advanced Logging & Debugging (pdb)",
        desc: "<b>Definisi Konsep Mendalam:</b> Sistem pencatatan log enterprise bertingkat serta investigasi error interaktif.<br><br><b>Poin Penting:</b><br>• Modul <code>logging</code> dengan level bertingkat (INFO, WARNING, ERROR).<br>• Python Debugger (<code>pdb</code>) untuk memasang breakpoint saat runtime.",
        example: `import logging\n\nlogging.basicConfig(level=logging.INFO)\nlogging.info("Aplikasi berjalan normal")`,
        tasks: [
            { task: "Impor modul logging, atur level dasar ke INFO, dan cetak pesan info 'Sistem Aktif'.", hint: "Gunakan logging.basicConfig(level=logging.INFO) lalu logging.info(...)", validate: c => c.includes("logging") },
            { task: "Gunakan level logging berbeda: logging.debug(), logging.warning(), dan logging.error().", hint: "Panggil fungsi level log tersebut.", validate: c => c.includes("logging") },
            { task: "Impor modul pdb dan gunakan pdb.set_trace() untuk simulasi breakpoint debugging.", hint: "Sisipkan pdb.set_trace() di baris kode.", validate: c => c.includes("pdb") },
            { task: "Atur format output logging agar menampilkan waktu, nama level, dan pesan log.", hint: "Gunakan parameter format di basicConfig.", validate: c => c.includes("logging") },
            { task: "Simulasikan penulisan log error ke dalam file eksternal 'app.log'.", hint: "Gunakan parameter filename='app.log'.", validate: c => c.includes("logging") },
            { task: "Buat fungsi dengan penanganan error try-except yang mencatat exception ke log menggunakan logging.exception().", hint: "Gunakan logging.exception(\"Terjadi error\") di blok except.", validate: c => c.includes("logging") && c.includes("try") },
            { task: "Buat logger kustom menggunakan logging.getLogger('nama_modul').", hint: "Gunakan logger = logging.getLogger('custom').", validate: c => c.includes("logging") && c.includes("getLogger") },
            { task: "Uji breakpoint debugging interaktif untuk memeriksa nilai variabel saat runtime.", hint: "Gunakan perintah pdb standar.", validate: c => c.includes("pdb") },
            { task: "Atur penanganan log peringatan kritis (CRITICAL).", hint: "Gunakan logging.critical().", validate: c => c.includes("logging") },
            { task: "Buat sistem logging bertingkat untuk modul aplikasi besar.", hint: "Konfigurasi handler dan formatter log.", validate: c => c.includes("logging") }
        ]
    },
    {
        id: 40, category: "Grandmaster", title: "Level 40: Ultimate Architecture & Clean Code Patterns",
        desc: "<b>Definisi Konsep Mendalam:</b> Puncak masterclass penggabungan seluruh prinsip arsitektur perangkat lunak skala enterprise.<br><br><b>Poin Penting:</b><br>• Menerapkan Dependency Injection.<br>• Menggunakan Abstract Base Classes (ABC).<br>• Standar kode bersih (Clean Code) berstandar industri.",
        example: `class EngineInterface:\n    def start(self) -> str: pass\n\nclass Car:\n    def __init__(self, engine: EngineInterface):\n        self.engine = engine\n    def drive(self) -> str:\n        return self.engine.start()`,
        tasks: [
            { task: "Terapkan prinsip Dependency Injection dengan membuat class 'Mobil' yang menerima objek 'Mesin' melalui constructor __init__.", hint: "Kirim objek mesin ke parameter constructor Mobil.", validate: c => c.includes("class") && c.includes("__init__") },
            { task: "Buat class Interface abstrak menggunakan modul abc (Abstract Base Class) dengan method abstrak.", hint: "Gunakan from abc import ABC, abstractmethod.", validate: c => c.includes("abc") || c.includes("abstractmethod") },
            { task: "Implementasikan pola Singleton sederhana untuk memastikan sebuah class hanya memiliki satu instance tunggal di memori.", hint: "Simpan instance di variabel class _instance.", validate: c => c.includes("class") },
            { task: "Buat Factory Pattern sederhana untuk memproduksi berbagai jenis objek koneksi database.", hint: "Fungsi pembuat instance berdasarkan tipe.", validate: c => c.includes("class") },
            { task: "Terapkan prinsip Single Responsibility Principle (SRP) dengan memisahkan class logika bisnis dan logika penyimpanan data.", hint: "Pecah class besar menjadi class-class kecil berfokus tunggal.", validate: c => c.includes("class") },
            { task: "Buat class Repository pattern fiktif untuk mengelola pengambilan data objek secara terpusat.", hint: "Class pengelola data terstruktur.", validate: c => c.includes("class") },
            { task: "Terapkan prinsip Open/Closed Principle (OCP) menggunakan pewarisan class abstrak.", hint: "Class terbuka untuk extension tapi tertutup modifikasi.", validate: c => c.includes("class") },
            { task: "Buat struktur arsitektur paket modular bersih dengan pemisahan tanggung jawab yang jelas.", hint: "Terapkan desain modular standar industri.", validate: c => c.includes("class") },
            { task: "Tulis kode bersih berstandar PEP 8 lengkap dengan docstring dan type hinting menyeluruh.", hint: "Berikan dokumentasi triple-quote dan anotasi tipe.", validate: c => c.includes("def") },
            { task: "Selesaikan proyek akhir arsitektur sistem modular gabungan OOP, Decorator, dan Exception Handling.", hint: "Rangkum seluruh keahlian arsitektur tingkat lanjut Anda!", validate: c => c.includes("class") }
        ]
    },
    {
        id: 41, category: "Architecture", title: "Level 41: Creational Design Patterns (Singleton, Factory, Builder)",
        desc: "<b>Definisi Konsep Mendalam:</b> Pola perancangan objek creational tingkat lanjut untuk mengelola instansiasi yang kompleks.<br><br><b>Poin Penting:</b><br>• <b>Singleton:</b> Membatasi instansiasi class hanya 1 objek tunggal di memori.<br>• <b>Factory:</b> Memproduksi objek berdasarkan parameter.<br>• <b>Builder:</b> Merakit objek kompleks secara bertahap.",
        example: `class Singleton:\n    _instance = None\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance`,
        tasks: [
            { task: "Buat class Singleton yang memastikan hanya ada satu instance tunggal di memori menggunakan method __new__.", hint: "Gunakan pengecekan _instance is None.", validate: c => c.includes("__new__") },
            { task: "Buat Factory pattern untuk memproduksi objek class berbeda (misal: Mobil atau Motor) berdasarkan parameter string.", hint: "Fungsi mengembalikan instance class yang sesuai.", validate: c => c.includes("class") },
            { task: "Buat Builder pattern untuk menyusun objek kompleks secara bertahap (set bagian satu per satu).", hint: "Kembalikan self di setiap method builder agar bisa method chaining.", validate: c => c.includes("class") },
            { task: "Uji Singleton pattern dengan membuat dua variabel objek lalu bandingkan apakah alamat memorinya sama.", hint: "Gunakan operator is atau id() untuk membandingkan.", validate: c => c.includes("__new__") },
            { task: "Buat Factory method untuk instansiasi berbagai jenis file logger (FileLogger vs ConsoleLogger).", hint: "Gunakan fungsi pembuat berdasarkan tipe log.", validate: c => c.includes("class") },
            { task: "Buat class Builder untuk merakit profil pengguna dengan berbagai konfigurasi opsional.", hint: "Bangun objek secara bertahap lalu panggil method .build().", validate: c => c.includes("class") },
            { task: "Implementasikan Singleton untuk konfigurasi koneksi database global aplikasi.", hint: "Batasi pembuatan objek koneksi berulang kali.", validate: c => c.includes("__new__") },
            { task: "Buat Abstract Factory pattern sederhana untuk membuat keluarga komponen UI.", hint: "Sediakan interface pembuatan objek terkait.", validate: c => c.includes("class") },
            { task: "Buat Builder pattern untuk membuat query SQL secara dinamis (SELECT, WHERE, ORDER BY).", hint: "Rangkai perintah query dengan method chaining.", validate: c => c.includes("class") },
            { task: "Uji seluruh implementasi Creational Patterns menggunakan unit testing assert.", hint: "Pastikan objek terbangun sesuai ekspektasi.", validate: c => c.includes("assert") }
        ]
    },
    {
        id: 42, category: "Architecture", title: "Level 42: Structural Design Patterns (Adapter, Decorator, Facade)",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengatur struktur relasi dan antarmuka antar class agar sistem mudah diintegrasikan.<br><br><b>Poin Penting:</b><br>• <b>Adapter:</b> Menjembatani interface lama agar kompatibel.<br>• <b>Facade:</b> Menyederhanakan kompleksitas subsistem di balik satu pintu.",
        example: `class Facade:\n    def __init__(self): self.sub1 = Sub1(); self.sub2 = Sub2()\n    def operation(self): return self.sub1.action() + " & " + self.sub2.action()`,
        tasks: [
            { task: "Buat Adapter pattern untuk menyesuaikan interface class lama agar kompatibel dengan sistem baru.", hint: "Buat class adapter yang membungkus objek lama.", validate: c => c.includes("class") },
            { task: "Buat Decorator pattern berbasis class untuk menambahkan fitur tambahan pada objek komponen.", hint: "Bungkus objek komponen di dalam constructor decorator.", validate: c => c.includes("class") },
            { task: "Buat Facade pattern untuk menyederhanakan kompleksitas pemanggilan banyak subsystem di belakang satu interface.", hint: "Satukan berbagai fungsi subsystem ke dalam satu class Facade.", validate: c => c.includes("class") },
            { task: "Buat Adapter untuk mengubah format output data XML menjadi dictionary yang kompatibel.", hint: "Transformasikan data di dalam method adapter.", validate: c => c.includes("class") },
            { task: "Buat Decorator class untuk menambahkan fungsionalitas logging otomatis pada objek layanan.", hint: "Cetak log sebelum dan sesudah memanggil method asli.", validate: c => c.includes("class") },
            { task: "Buat Facade pattern untuk sistem pemesanan e-commerce (pembayaran, stok, dan pengiriman).", hint: "Sediakan satu method proses_pesanan() yang merangkum semuanya.", validate: c => c.includes("class") },
            { task: "Buat Adapter untuk menghubungkan pembayaran pihak ketiga yang berbeda API.", hint: "Sesuaikan nama parameter method pembayaran.", validate: c => c.includes("class") },
            { task: "Buat Decorator untuk memvalidasi otorisasi sebelum method dijalankan.", hint: "Periksa izin akses di dalam method decorator.", validate: c => c.includes("class") },
            { task: "Buat Facade untuk inisialisasi framework game engine besar (audio, grafis, fisika).", hint: "Panggil setup subsystem secara terpusat.", validate: c => c.includes("class") },
            { task: "Uji pola desain Structural dengan assert untuk memastikan integrasi berjalan mulus.", hint: "Verifikasi hasil output dari adapter/facade.", validate: c => c.includes("assert") }
        ]
    },
    {
        id: 43, category: "Architecture", title: "Level 43: Behavioral Design Patterns (Observer, Strategy, Command)",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengatur pola komunikasi dan pembagian tugas perilaku antar objek.<br><br><b>Poin Penting:</b><br>• <b>Observer:</b> Sistem notifikasi event otomatis ke pelanggan.<br>• <b>Strategy:</b> Memilih algoritma secara dinamis saat runtime.<br>• <b>Command:</b> Enkapsulasi permintaan aksi.",
        example: `class StrategyContext:\n    def __init__(self, strategy): self.strategy = strategy\n    def execute(self, val): return self.strategy(val)`,
        tasks: [
            { task: "Buat Observer pattern lengkap dengan Subject (Publisher) dan Subscriber untuk sistem event.", hint: "Simpan list subscriber dan panggil .update() saat ada event.", validate: c => c.includes("class") },
            { task: "Buat Strategy pattern untuk memilih algoritma enkripsi data (AES vs RSA) saat runtime.", hint: "Kirim fungsi strategi sebagai objek perilaku.", validate: c => c.includes("class") },
            { task: "Buat Command pattern untuk membungkus permintaan aksi ke dalam objek dengan method execute().", hint: "Enkapsulasi aksi tombol ke dalam class command.", validate: c => c.includes("class") },
            { task: "Buat Observer pattern untuk memantau perubahan harga saham dan memberi notifikasi ke investor.", hint: "Notifikasi otomatis saat harga berubah.", validate: c => c.includes("class") },
            { task: "Buat Strategy pattern untuk menghitung pajak berdasarkan wilayah negara.", hint: "Tukar algoritma perhitungan pajak secara dinamis.", validate: c => c.includes("class") },
            { task: "Buat Command pattern dengan fitur Undo/Redo untuk membatalkan perintah sebelumnya.", hint: "Simpan riwayat command yang sudah dieksekusi.", validate: c => c.includes("class") },
            { task: "Buat Observer pattern untuk sistem log aktivitas pengguna aplikasi enterprise.", hint: "Kirim log ke berbagai observer (file, console, cloud).", validate: c => c.includes("class") },
            { task: "Buat Strategy pattern untuk strategi pengiriman logistik (Ekonomi, Express, SameDay).", hint: "Hitung ongkir berdasarkan strategi terpilih.", validate: c => c.includes("class") },
            { task: "Buat Command pattern untuk antrean tugas background (job queue).", hint: "Eksekusi list command secara berurutan.", validate: c => c.includes("class") },
            { task: "Uji pola perilaku Behavioral dengan skenario interaksi antar objek.", hint: "Gunakan assert untuk menguji hasil akhir sistem.", validate: c => c.includes("assert") }
        ]
    },
    {
        id: 44, category: "Architecture", title: "Level 44: Dependency Injection & Inversion of Control (IoC)",
        desc: "<b>Definisi Konsep Mendalam:</b> Melepaskan ketergantungan kaku antar komponen kode (<i>loosely coupled</i>).<br><br><b>Poin Penting:</b><br>• Menyuntikkan objek dependensi melalui parameter konstruktor (<code>__init__</code>).<br>• Meningkatkan kemudahan unit testing dan fleksibilitas arsitektur.",
        example: `class Service:\n    def run(self): return "OK"\nclass Client:\n    def __init__(self, service): self.service = service`,
        tasks: [
            { task: "Buat class Client yang menerima objek Service melalui konstruktor (__init__) secara Dependency Injection.", hint: "Jangan buat instance service di dalam class client secara langsung.", validate: c => c.includes("class") && c.includes("__init__") },
            { task: "Buat container IoC (Inversion of Control) sederhana untuk mendaftarkan dan menyelesaikan dependensi.", hint: "Gunakan dictionary mapping untuk menyimpan dependensi terdaftar.", validate: c => c.includes("class") },
            { task: "Buat interface/abstrak untuk Database Service lalu suntikkan implementasi MySQL ke dalam Repository.", hint: "Gunakan Abstract Base Class (ABC) sebagai kontrak.", validate: c => c.includes("class") },
            { task: "Simulasikan penggantian dependensi asli dengan Mock Service untuk keperluan unit testing.", hint: "Suntikkan mock object ke dalam constructor.", validate: c => c.includes("class") },
            { task: "Buat container DI yang mendukung otomatisasi resolusi parameter constructor berbasis Type Hinting.", hint: "Inspeksi anotasi tipe parameter fungsi/konstruktor.", validate: c => c.includes("class") },
            { task: "Suntikkan Email Notifier service ke dalam modul registrasi pengguna.", hint: "Kirim notifier via parameter injeksi.", validate: c => c.includes("class") },
            { task: "Buat sistem konfigurasi plugin modular menggunakan prinsip IoC.", hint: "Muat modul eksternal melalui kontainer terpusat.", validate: c => c.includes("class") },
            { task: "Uji arsitektur loosely coupled dengan mengganti implementasi service tanpa mengubah kode utama.", hint: "Pastikan aplikasi tetap berjalan dengan service baru.", validate: c => c.includes("class") },
            { task: "Buat fungsi decorator penyedia Dependency Injection otomatis pada fungsi.", hint: "Suntikkan argumen secara otomatis berdasarkan tipe.", validate: c => c.includes("def") },
            { task: "Tulis ringkasan arsitektur Dependency Injection dalam dokumentasi kode.", hint: "Jelaskan manfaat pemisahan ketergantungan.", validate: c => c.includes("class") || c.includes("def") }
        ]
    },
    {
        id: 45, category: "Architecture", title: "Level 45: SOLID Principles in Python (Praktik Nyata)",
        desc: "<b>Definisi Konsep Mendalam:</b> Lima prinsip dasar perancangan perangkat lunak berorientasi objek yang bersih dan maintainable.<br><br><b>Poin Penting:</b><br>• <b>S</b>RP: Single Responsibility | <b>O</b>CP: Open/Closed | <b>L</b>SP: Liskov Substitution | <b>I</b>SP: Interface Segregation | <b>D</b>IP: Dependency Inversion.",
        example: `# Single Responsibility Principle\nclass UserReport:\n    def generate(self, user): return f"Laporan {user}"`,
        tasks: [
            { task: "Terapkan Single Responsibility Principle (SRP) dengan memisahkan class User (data) dan UserPrinter (cetak laporan).", hint: "Satu class hanya memiliki satu alasan untuk berubah.", validate: c => c.includes("class") },
            { task: "Terapkan Open/Closed Principle (OCP) menggunakan class abstrak agar sistem terbuka untuk ekstensi tapi tertutup modifikasi.", hint: "Gunakan pewarisan dan method abstrak.", validate: c => c.includes("class") },
            { task: "Terapkan Liskov Substitution Principle (LSP) di mana objek class anak dapat menggantikan class induk tanpa merusak program.", hint: "Pastikan kontrak method class anak konsisten dengan induk.", validate: c => c.includes("class") },
            { task: "Terapkan Interface Segregation Principle (ISP) dengan memecah interface besar menjadi interface kecil spesifik.", hint: "Jangan paksa class mengimplementasikan method yang tidak digunakan.", validate: c => c.includes("class") },
            { task: "Terapkan Dependency Inversion Principle (DIP) dengan bergantung pada abstraksi, bukan implementasi konkrit.", hint: "Gunakan interface/ABC sebagai tipe parameter.", validate: c => c.includes("class") },
            { task: "Refactor class monolitik yang melanggar SRP menjadi beberapa class berfokus tunggal.", hint: "Pecah fungsi database dan logika bisnis.", validate: c => c.includes("class") },
            { task: "Buat sistem plugin pembayaran baru tanpa mengubah kode inti berkat OCP.", hint: "Tambahkan class turunan baru dari interface pembayaran.", validate: c => c.includes("class") },
            { task: "Uji kepatuhan LSP pada hierarki class burung (pastikan subclass tidak memicu error logika).", hint: "Pastikan perilaku subclass sesuai ekspektasi induk.", validate: c => c.includes("class") },
            { task: "Pecah interface multi-fungsi menjadi interface-interface kecil (ISP).", hint: "Buat interface terpisah untuk cetak dan scan pada printer.", validate: c => c.includes("class") },
            { task: "Verifikasi kepatuhan prinsip SOLID pada arsitektur program menggunakan unit test.", hint: "Gunakan assert untuk menguji struktur class.", validate: c => c.includes("assert") }
        ]
    },
    {
        id: 46, category: "Architecture", title: "Level 46: Domain-Driven Design (DDD) & Clean Architecture Basics",
        desc: "<b>Definisi Konsep Mendalam:</b> Memisahkan domain bisnis inti secara ketat dari ketergantungan framework eksternal maupun infrastruktur teknis.<br><br><b>Poin Penting:</b><br>• Menerapkan Entity dan Value Object murni.<br>• Arah dependensi selalu mengarah ke dalam (domain).",
        example: `class OrderEntity:\n    def __init__(self, items): self.items = items\n    def calculate_total(self): return sum(i.price for i in self.items)`,
        tasks: [
            { task: "Buat Domain Entity 'Order' yang berisi aturan bisnis murni tanpa ketergantungan database.", hint: "Fokuskan class pada logika domain murni.", validate: c => c.includes("class") },
            { task: "Buat Value Object 'Money' yang bersifat immutable (tidak bisa diubah) dan merepresentasikan nilai uang.", hint: "Gunakan frozen dataclass atau tuple untuk immutability.", validate: c => c.includes("class") },
            { task: "Buat Application Use Case (Interactor) yang mengatur alur bisnis pendaftaran pengguna.", hint: "Gunakan use case untuk menghubungkan interface dan domain.", validate: c => c.includes("class") },
            { task: "Buat Interface Repository di layer domain untuk mendefinisikan kontrak penyimpanan data.", hint: "Definisikan method simpan() tanpa implementasi SQL.", validate: c => c.includes("class") },
            { task: "Simulasikan pemisahan layer Clean Architecture (Domain, Application, Infrastructure, Presentation).", hint: "Atur arah dependensi selalu mengarah ke dalam (domain).", validate: c => c.includes("class") },
            { task: "Buat Domain Event untuk mencatat kejadian penting seperti 'OrderPlaced'.", hint: "Representasikan peristiwa bisnis dalam bentuk class.", validate: c => c.includes("class") },
            { task: "Buat Aggregate Root untuk mengelola konsistensi data di dalam boundary domain.", hint: "Kelompokkan entity terkait di bawah satu root.", validate: c => c.includes("class") },
            { task: "Uji logika bisnis Domain Entity secara independen tanpa koneksi database eksternal.", hint: "Lakukan unit testing murni pada entity.", validate: c => c.includes("class") },
            { task: "Buat DTO (Data Transfer Object) untuk komunikasi data antar layer Clean Architecture.", hint: "Gunakan dataclass untuk transfer data.", validate: c => c.includes("dataclass") },
            { task: "Rangkum prinsip dasar Clean Architecture dalam perancangan aplikasi skala besar.", hint: "Pastikan domain bisnis terisolasi dari framework.", validate: c => c.includes("class") }
        ]
    },
    {
        id: 47, category: "Architecture", title: "Level 47: Repository & Unit of Work Patterns",
        desc: "<b>Definisi Konsep Mendalam:</b> Pola enterprise untuk mengelola persistensi data dan manajemen transaksi secara terpusat.<br><br><b>Poin Penting:</b><br>• <b>Repository:</b> Abstraksi akses koleksi data CRUD.<br>• <b>Unit of Work:</b> Mengelola transaksi commit/rollback secara atomik.",
        example: `class UnitOfWork:\n    def __enter__(self): self.repo = REPO(); return self\n    def __exit__(self, *args): pass`,
        tasks: [
            { task: "Buat Repository Pattern untuk abstraksi operasi CRUD entity User (InMemoryRepository).", hint: "Simpan data dalam list/dictionary internal sebagai simulasi.", validate: c => c.includes("class") },
            { task: "Buat Unit of Work pattern menggunakan context manager untuk mengelola transaksi commit/rollback.", hint: "Implementasikan method __enter__ dan __exit__.", validate: c => c.includes("__enter__") && c.includes("__exit__") },
            { task: "Buat interface UserRepository agar Repository bisa diganti antara Memory atau SQL.", hint: "Gunakan Abstract Base Class untuk kontrak repository.", validate: c => c.includes("class") },
            { task: "Simulasikan penyimpanan transaksi multi-repository di dalam satu Unit of Work.", hint: "Commit perubahan secara bersamaan di akhir blok with.", validate: c => c.includes("with") },
            { task: "Buat method find_by_id dan save pada Repository pattern.", hint: "Kembalikan entity domain dari repository.", validate: c => c.includes("class") },
            { task: "Simulasikan rollback otomatis pada Unit of Work jika terjadi exception di tengah proses.", hint: "Tangkap error di __exit__ lalu panggil rollback.", validate: c => c.includes("__exit__") },
            { task: "Hubungkan Use Case Application dengan Repository pattern untuk operasi data.", hint: "Suntikkan repository ke dalam use case.", validate: c => c.includes("class") },
            { task: "Uji Repository pattern menggunakan data tiruan (mock data).", hint: "Validasi hasil pencarian data via assert.", validate: c => c.includes("assert") },
            { task: "Buat Unit of Work untuk manajemen sesi database transaksional.", hint: "Pastikan koneksi tertutup rapi setelah transaksi selesai.", validate: c => c.includes("class") },
            { task: "Rangkum keuntungan penggunaan Repository & Unit of Work dalam enterprise app.", hint: "Pemisahan urusan database dari logika bisnis.", validate: c => c.includes("class") }
        ]
    },
    {
        id: 48, category: "Architecture", title: "Level 48: Metaprogramming Lanjutan & AST (Abstract Syntax Trees)",
        desc: "<b>Definisi Konsep Mendalam:</b> Puncak arsitektur enterprise untuk memanipulasi struktur kode program Python saat runtime.<br><br><b>Poin Penting:</b><br>• Menggunakan modul <code>ast</code> untuk mem-parse string kode menjadi pohon sintaks (Abstract Syntax Trees) serta melakukan transformasi node.",
        example: `import ast\n\ntree = ast.parse("x = 1 + 2")\nprint(ast.dump(tree))`,
        tasks: [
            { task: "Impor modul ast, parse string kode Python sederhana menjadi pohon AST menggunakan ast.parse().", hint: "Gunakan ast.parse('kode_python').", validate: c => c.includes("ast") && c.includes("parse") },
            { task: "Gunakan fungsi ast.dump() untuk mencetak struktur node AST dari sebuah ekspresi matematika.", hint: "Cetak hasil dump AST untuk melihat hierarki node.", validate: c => c.includes("ast") && c.includes("dump") },
            { task: "Buat class turunan ast.NodeTransformer untuk memodifikasi node AST (misal mengubah operasi tambah jadi kali).", hint: "Override method visit_BinOp pada NodeTransformer.", validate: c => c.includes("ast") && c.includes("NodeTransformer") },
            { task: "Gunakan fungsi exec() atau eval() untuk menjalankan kembali kode Python yang telah dimodifikasi via AST.", hint: "Compile AST menjadi code object lalu eksekusi.", validate: c => c.includes("exec") || c.includes("eval") },
            { task: "Buat decorator metaprogramming yang otomatis mencetak nama fungsi dan argumen saat dipanggil.", hint: "Modifikasi fungsi target secara dinamis saat didefinisikan.", validate: c => c.includes("def") },
            { task: "Buat inspeksi kode menggunakan modul inspect untuk membaca source code fungsi saat runtime.", hint: "Gunakan inspect.getsource(fungsi).", validate: c => c.includes("inspect") },
            { task: "Buat AST visitor sederhana untuk menghitung jumlah percabangan if di dalam kode Python.", hint: "Turunkan class dari ast.NodeVisitor.", validate: c => c.includes("ast") && c.includes("NodeVisitor") },
            { task: "Simulasikan pembuatan DSL (Domain Specific Language) ringan menggunakan parsing AST.", hint: "Terjemahkan sintaks kustom menjadi kode Python.", validate: c => c.includes("ast") },
            { task: "Uji manipulasi AST untuk validasi keamanan kode otomatis (linter kustom).", hint: "Periksa keberadaan fungsi terlarang di dalam AST.", validate: c => c.includes("ast") },
            { task: "Selesaikan level puncak Enterprise Architecture! Selamat atas penguasaan level masterclass tertinggi!", hint: "Rangkum seluruh keahlian arsitektur tingkat lanjut Anda!", validate: c => c.length > 0 }
        ]
    },
    {
        id: 49, category: "Web API", title: "Level 49: FastAPI: Routing, Path & Query Parameters",
        desc: "<b>Definisi Konsep Mendalam:</b> FastAPI adalah kerangka kerja web modern berkinerja tinggi untuk membangun API dengan Python berdasarkan standar tipe data type hints.<br><br><b>Poin Penting:</b><br>• <code>Path Parameters</code>: Variabel bagian dari URL endpoint.<br>• <code>Query Parameters</code>: Parameter tambahan setelah tanda tanya (<code>?</code>) di URL.",
        example: `from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/items/{item_id}")\nasync def read_item(item_id: int, q: str = None):\n    return {"item_id": item_id, "q": q}`,
        tasks: [
            { task: "Impor FastAPI, buat instance app = FastAPI(), dan buat endpoint get '@app.get(\"/\")' yang mengembalikan pesan selamat datang.", hint: "Gunakan dekorator @app.get(\"/\").", validate: c => c.includes("FastAPI") },
            { task: "Buat path parameter endpoint '/users/{user_id}' yang menerima tipe data integer dan mengembalikan id pengguna.", hint: "Definisikan parameter fungsi user_id: int.", validate: c => c.includes("FastAPI") },
            { task: "Buat query parameter opsional pada endpoint untuk menerima string filter pencarian 'q'.", hint: "Berikan nilai default None pada parameter query.", validate: c => c.includes("FastAPI") },
            { task: "Buat validasi path parameter menggunakan Path(gt=0) agar id bernilai lebih besar dari 0.", hint: "Impor Path dari fastapi.", validate: c => c.includes("Path") },
            { task: "Buat validasi query parameter menggunakan Query(max_length=50) untuk membatasi panjang string.", hint: "Impor Query dari fastapi.", validate: c => c.includes("Query") },
            { task: "Buat endpoint dengan beberapa path parameters sekaligus (misal: kategori dan item_id).", hint: "Sertakan kedua parameter di dalam URL path.", validate: c => c.includes("FastAPI") },
            { task: "Buat endpoint POST sederhana yang menerima data body JSON mentah.", hint: "Gunakan async def dengan return dictionary.", validate: c => c.includes("post") },
            { task: "Atur status code respons kustom pada dekorator endpoint (misal status_code=201).", hint: "Tambahkan parameter status_code di dekorator @app.post().", validate: c => c.includes("status_code") },
            { task: "Jalankan aplikasi FastAPI menggunakan perintah uvicorn di lingkungan lokal.", hint: "Gunakan uvicorn.run(app).", validate: c => c.includes("uvicorn") },
            { task: "Uji dokumentasi otomatis interaktif Swagger UI bawaan FastAPI pada rute /docs.", hint: "Akses endpoint dokumentasi setelah server berjalan.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 50, category: "Web API", title: "Level 50: Pydantic v2: Advanced Data Validation & Settings",
        desc: "<b>Definisi Konsep Mendalam:</b> Pydantic v2 adalah pustaka validasi data secepat kilat di Python menggunakan type hinting standar untuk memastikan integritas struktur data.<br><br><b>Poin Penting:</b><br>• Menggunakan turunan class <code>BaseModel</code>.<br>• Fitur validasi kustom via dekorator <code>@field_validator</code>.",
        example: `from pydantic import BaseModel, field_validator\n\nclass User(BaseModel):\n    username: str\n    age: int\n\n    @field_validator('age')\n    def validate_age(cls, v):\n        if v < 18: raise ValueError("Harus dewasa")\n        return v`,
        tasks: [
            { task: "Impor BaseModel dari pydantic, buat class 'Item' dengan atribut nama (str) dan harga (float).", hint: "Turunkan class dari BaseModel.", validate: c => c.includes("BaseModel") },
            { task: "Buat validasi kustom @field_validator untuk memastikan harga tidak boleh bernilai negatif.", hint: "Raise ValueError jika nilai kurang dari 0.", validate: c => c.includes("field_validator") },
            { task: "Gunakan model Pydantic untuk memvalidasi data masukan kamus dictionary menggunakan Model.model_validate().", hint: "Gunakan model_validate atau instansiasi langsung.", validate: c => c.includes("BaseModel") },
            { task: "Konversi model Pydantic kembali menjadi dictionary Python menggunakan method .model_dump().", hint: "Panggil objek.model_dump().", validate: c => c.includes("model_dump") },
            { task: "Konversi model Pydantic menjadi format string JSON menggunakan method .model_dump_json().", hint: "Panggil objek.model_dump_json().", validate: c => c.includes("model_dump_json") },
            { task: "Buat atribut opsional dengan nilai default menggunakan Field dari pydantic.", hint: "Impor Field dan berikan nilai default.", validate: c => c.includes("Field") },
            { task: "Buat Nested Model (model bersarang) di mana satu model Pydantic berisi atribut bertipe model Pydantic lainnya.", hint: "Sertakan model lain sebagai tipe data atribut.", validate: c => c.includes("BaseModel") },
            { task: "Gunakan Pydantic Settings (BaseSettings) untuk memuat konfigurasi lingkungan aplikasi.", hint: "Impor dari pydantic_settings.", validate: c => c.includes("BaseSettings") },
            { task: "Tangkap error validasi Pydantic menggunakan ValidationError try-except.", hint: "Tangkap ValidationError saat parsing data gagal.", validate: c => c.includes("ValidationError") },
            { task: "Uji validasi tipe data otomatis Pydantic pada string angka yang dikonversi ke integer.", hint: "Pydantic otomatis melakukan type coercion.", validate: c => c.includes("BaseModel") }
        ]
    },
    {
        id: 51, category: "Web API", title: "Level 51: SQLAlchemy ORM: Models & Sessions",
        desc: "<b>Definisi Konsep Mendalam:</b> SQLAlchemy adalah pemetaan objek relasional (ORM) tangguh untuk menghubungkan class Python dengan tabel database relasional secara elegan.<br><br><b>Poin Penting:</b><br>• Menggunakan <code>Mapped</code> dan <code>mapped_column</code> (gaya SQLAlchemy 2.0).",
        example: `from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column\n\nclass Base(DeclarativeBase): pass\n\nclass User(Base):\n    __tablename__ = "users"\n    id: Mapped[int] = mapped_column(primary_key=True)\n    name: Mapped[str]`,
        tasks: [
            { task: "Buat class Base turunan DeclarativeBase untuk mendefinisikan model basis SQLAlchemy 2.0.", hint: "Gunakan class Base(DeclarativeBase): pass", validate: c => c.includes("DeclarativeBase") },
            { task: "Buat model tabel 'User' dengan atribut kolom id (integer primary key) dan username (string).", hint: "Gunakan Mapped[int] dan mapped_column(primary_key=True).", validate: c => c.includes("Mapped") },
            { task: "Buat koneksi engine database SQLite lokal menggunakan create_engine('sqlite:///test.db').", hint: "Impor create_engine dari sqlalchemy.", validate: c => c.includes("create_engine") },
            { task: "Buat sessionmaker untuk mengelola sesi transaksi database aktif.", hint: "Impor sessionmaker dari sqlalchemy.orm.", validate: c => c.includes("sessionmaker") },
            { task: "Buat tabel database secara otomatis menggunakan Base.metadata.create_all(engine).", hint: "Panggil create_all dengan engine aktif.", validate: c => c.includes("create_all") },
            { task: "Simulasikan penambahan record data user baru ke database melalui session.add() dan session.commit().", hint: "Tambahkan objek user lalu commit.", validate: c => c.includes("add") && c.includes("commit") },
            { task: "Lakukan query pencarian data user dari database dengan gaya SQLAlchemy 2.0: session.scalars(select(User)).all().", hint: "Impor select dari sqlalchemy, lalu gunakan session.scalars(select(User)).all().", validate: c => c.includes("select") || c.includes("query") },
            { task: "Lakukan filter pencarian data berdasarkan kriteria username tertentu.", hint: "Gunakan .filter_by(username='...').first().", validate: c => c.includes("filter_by") },
            { task: "Simulasikan pembaruan (update) data record yang sudah ada di database.", hint: "Ubah atribut objek lalu lakukan session.commit().", validate: c => c.includes("commit") },
            { task: "Simulasikan penghapusan (delete) record data user dari database.", hint: "Gunakan session.delete(user) lalu commit.", validate: c => c.includes("delete") }
        ]
    },
    {
        id: 52, category: "Web API", title: "Level 52: Database Migrations dengan Alembic",
        desc: "<b>Definisi Konsep Mendalam:</b> Alembic adalah alat migrasi skema database resmi untuk SQLAlchemy guna mengelola perubahan versi struktur tabel secara aman.<br><br><b>Poin Penting:</b><br>• Inisialisasi proyek migrasi dengan <code>alembic init</code>.<br>• Membuat revisi skema dengan <code>alembic revision --autogenerate</code>.",
        example: `# Contoh perintah terminal Alembic\n# alembic init alembic\n# alembic revision --autogenerate -m "Add user table"\n# alembic upgrade head`,
        tasks: [
            { task: "Simulasikan inisialisasi lingkungan konfigurasi Alembic pada proyek Python.", hint: "Gunakan perintah terminal alembic init alembic.", validate: c => c.length > 0 },
            { task: "Konfigurasikan target_metadata di dalam file alembic/env.py agar terhubung ke Base.metadata SQLAlchemy.", hint: "Impor Base dari modul model aplikasi Anda.", validate: c => c.length > 0 },
            { task: "Buat skrip migrasi revisi basis otomatis berdasarkan perubahan model menggunakan autogenerate.", hint: "Gunakan alembic revision --autogenerate -m 'init'.", validate: c => c.length > 0 },
            { task: "Tulis perintah migrasi naik (upgrade) skema database ke versi terbaru.", hint: "Gunakan alembic upgrade head.", validate: c => c.length > 0 },
            { task: "Tulis perintah migrasi turun (downgrade) untuk membatalkan perubahan skema terakhir.", hint: "Gunakan alembic downgrade -1.", validate: c => c.length > 0 },
            { task: "Periksa riwayat status revisi migrasi database yang aktif saat ini.", hint: "Gunakan alembic history atau alembic current.", validate: c => c.length > 0 },
            { task: "Tambahkan kolom baru pada model SQLAlchemy lalu buat revisi migrasi Alembic baru.", hint: "Ubah model Mapped lalu jalankan autogenerate.", validate: c => c.length > 0 },
            { task: "Simulasikan penanganan migrasi skema kustom di dalam fungsi upgrade() Alembic.", hint: "Gunakan op.add_column() dari alembic.", validate: c => c.length > 0 },
            { task: "Verifikasi sinkronisasi antara metadata SQLAlchemy dan tabel fisik database.", hint: "Jalankan upgrade head pada database uji.", validate: c => c.length > 0 },
            { task: "Terapkan praktik terbaik pengelolaan migrasi database dalam tim pengembang.", hint: "Selalu lacak file revisi Alembic di Git.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 53, category: "Web API", title: "Level 53: Authentication & Authorization (JWT, OAuth2, Password Hashing)",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengamankan aplikasi web menggunakan token JWT (JSON Web Tokens), hashing password (passlib/bcrypt), dan skema OAuth2.<br><br><b>Poin Penting:</b><br>• Hashing sandi dengan <code>Passlib</code>.<br>• Enkode dan dekode token dengan pustaka <code>PyJWT</code>.",
        example: `from passlib.context import CryptContext\n\npwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")\nhashed = pwd_context.hash("rahasia123")`,
        tasks: [
            { task: "Impor CryptContext dari passlib, buat konfigurasi hashing sandi berbasis bcrypt.", hint: "CryptContext(schemes=['bcrypt'])", validate: c => c.includes("CryptContext") },
            { task: "Buat fungsi hashing password teks biasa menjadi hash aman.", hint: "Gunakan pwd_context.hash(password).", validate: c => c.includes("hash") },
            { task: "Buat fungsi verifikasi pencocokan password dengan hash tersimpan.", hint: "Gunakan pwd_context.verify(plain, hashed).", validate: c => c.includes("verify") },
            { task: "Impor jwt, buat fungsi pembuat token akses JWT berenkripsi masa kedaluwarsa.", hint: "Gunakan jwt.encode(payload, secret_key, algorithm='HS256').", validate: c => c.includes("jwt") && c.includes("encode") },
            { task: "Buat fungsi dekode dan verifikasi validitas token JWT masuk.", hint: "Gunakan jwt.decode(token, secret_key, algorithms=['HS256']).", validate: c => c.includes("jwt") && c.includes("decode") },
            { task: "Gunakan OAuth2PasswordBearer dari FastAPI untuk mengambil token dari header rute.", hint: "Impor dari fastapi.security.", validate: c => c.includes("OAuth2PasswordBearer") },
            { task: "Buat dependensi FastAPI 'get_current_user' untuk memvalidasi token JWT pengguna aktif.", hint: "Dekode token dan ambil data user dari database.", validate: c => c.includes("def") },
            { task: "Lindungi endpoint API dengan menyematkan dependensi keamanan OAuth2.", hint: "Gunakan parameter dependencies=[Depends(get_current_user)] pada dekorator rute.", validate: c => c.includes("Depends") },
            { task: "Buat endpoint autentikasi login '/token' yang mengeluarkan token akses JWT.", hint: "Validasi user dan password lalu return token.", validate: c => c.includes("FastAPI") || c.includes("token") },
            { task: "Uji otorisasi token pada Swagger UI FastAPI menggunakan tombol Authorize.", hint: "Masukkan token bearer pada form otorisasi FastAPI.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 54, category: "Web API", title: "Level 54: WebSockets & Real-time Communication di FastAPI",
        desc: "<b>Definisi Konsep Mendalam:</b> WebSockets memungkinkan komunikasi dupleks dua arah secara real-time antara klien dan server secara persistik.<br><br><b>Poin Penting:</b><br>• Menggunakan class <code>WebSocket</code> di FastAPI.<br>• Pengelolaan koneksi aktif via Connection Manager.",
        example: `from fastapi import FastAPI, WebSocket\n\napp = FastAPI()\n\n@app.websocket("/ws")\nasync def websocket_endpoint(websocket: WebSocket):\n    await websocket.accept()\n    while True:\n        data = await websocket.receive_text()\n        await websocket.send_text(f"Pesan diterima: {data}")`,
        tasks: [
            { task: "Impor WebSocket dari fastapi dan buat endpoint router @app.websocket(\"/ws\").", hint: "Definisikan fungsi async dengan parameter websocket: WebSocket.", validate: c => c.includes("WebSocket") },
            { task: "Terima koneksi WebSocket yang masuk menggunakan await websocket.accept().", hint: "Panggil method accept() pada objek websocket.", validate: c => c.includes("accept") },
            { task: "Buat perulangan async untuk menerima pesan teks masuk dari klien via await websocket.receive_text().", hint: "Gunakan perulangan while True.", validate: c => c.includes("receive_text") },
            { task: "Kirim balik balasan pesan secara real-time ke klien menggunakan await websocket.send_text().", hint: "Kirim data teks respons.", validate: c => c.includes("send_text") },
            { task: "Buat class Connection Manager untuk mengelola daftar banyak koneksi WebSocket aktif (Room chat).", hint: "Simpan daftar koneksi dalam list internal.", validate: c => c.includes("class") },
            { task: "Buat fitur broadcast pesan dari satu klien ke seluruh klien lain yang terhubung.", hint: "Iterasi list koneksi dan kirim pesan satu per satu.", validate: c => c.includes("class") || c.includes("def") },
            { task: "Tangkap exception WebSocketDisconnect saat klien memutus sambungan secara tiba-tiba.", hint: "Gunakan blok try-except WebSocketDisconnect.", validate: c => c.includes("WebSocketDisconnect") },
            { task: "Hapus koneksi yang terputus dari daftar manajer aktif.", hint: "Panggil list.remove(websocket).", validate: c => c.includes("remove") },
            { task: "Kirim data berformat JSON melalui WebSocket menggunakan await websocket.send_json().", hint: "Kirim dictionary langsung sebagai JSON.", validate: c => c.includes("send_json") },
            { task: "Uji endpoint WebSocket menggunakan klien uji asinkron atau script HTML sederhana.", hint: "Hubungkan via new WebSocket('ws://...').", validate: c => c.length > 0 }
        ]
    },
    {
        id: 55, category: "Web API", title: "Level 55: API Testing dengan Pytest, TestClient, & Fixtures",
        desc: "<b>Definisi Konsep Mendalam:</b> Pengujian otomatis endpoint API menggunakan pustaka <code>pytest</code> dan <code>TestClient</code> FastAPI.<br><br><b>Poin Penting:</b><br>• Memanfaatkan pytest <code>fixtures</code> untuk setup state pengujian database/klien.",
        example: `from fastapi.testclient import TestClient\nfrom my_app import app\n\nclient = TestClient(app)\n\ndef test_read_main():\n    response = client.get("/")\n    assert response.status_code == 200`,
        tasks: [
            { task: "Impor TestClient dari fastapi.testclient dan buat klien uji untuk aplikasi FastAPI Anda.", hint: "client = TestClient(app)", validate: c => c.includes("TestClient") },
            { task: "Buat fungsi pengujian pytest 'test_read_root' yang melakukan pemanggilan client.get('/') dan assert status 200.", hint: "Gunakan awalan nama fungsi test_.", validate: c => c.includes("def test_") && c.includes("assert") },
            { task: "Buat pengujian endpoint POST yang mengirimkan data JSON body dan memvalidasi respons sukses.", hint: "Gunakan client.post('/path', json={...})", validate: c => c.includes("post") },
            { task: "Gunakan dekorator pytest @pytest.fixture untuk membuat objek database uji atau klien tiruan.", hint: "Definisikan fungsi fixture pengembalian objek.", validate: c => c.includes("fixture") },
            { task: "Sertakan fixture ke dalam parameter fungsi pengujian pytest Anda.", hint: "Panggil nama fixture sebagai parameter fungsi test.", validate: c => c.includes("def test_") },
            { task: "Uji penanganan error status kode 404 Not Found pada endpoint fiktif.", hint: "Assert response.status_code == 404.", validate: c => c.includes("assert") },
            { task: "Uji token autentikasi header pada endpoint terproteksi dengan mengirimkan parameter headers={'Authorization': 'Bearer ...'}.", hint: "Sertakan parameter headers pada client.get().", validate: c => c.includes("headers") },
            { task: "Jalankan seluruh suite pengujian melalui perintah terminal pytest.", hint: "Jalankan pytest di direktori proyek.", validate: c => c.length > 0 },
            { task: "Aktifkan laporan cakupan kode (code coverage) menggunakan pytest-cov.", hint: "Jalankan pytest --cov=app.", validate: c => c.length > 0 },
            { task: "Tulis pengujian parameter validasi Pydantic untuk memastikan respons error 422 Unprocessable Entity.", hint: "Kirim data tidak valid dan cek status 422.", validate: c => c.includes("assert") }
        ]
    },
    {
        id: 56, category: "Web API", title: "Level 56: Celery & Redis: Background Tasks & Message Queues",
        desc: "<b>Definisi Konsep Mendalam:</b> Celery adalah sistem antrean tugas (task queue) terdistribusi asinkron berbasis pengiriman pesan broker seperti Redis.<br><br><b>Poin Penting:</b><br>• Mendeklarasikan background task dengan dekorator <code>@celery.task</code>.",
        example: `from celery import Celery\n\napp = Celery('tasks', broker='redis://localhost:6379/0')\n\n@app.task\ndef add(x, y):\n    return x + y`,
        tasks: [
            { task: "Impor Celery, buat instance broker antrean dengan URL Redis 'redis://localhost:6379/0'.", hint: "Celery('app', broker='redis://...') ", validate: c => c.includes("Celery") },
            { task: "Buat fungsi tugas latar belakang menggunakan dekorator @app.task.", hint: "Definisikan fungsi dengan dekorator task.", validate: c => c.includes("task") },
            { task: "Kirim tugas ke antrean background tanpa memblokir thread utama menggunakan fungsi .delay().", hint: "Panggil fungsi_tugas.delay(argumen).", validate: c => c.includes("delay") },
            { task: "Jalankan worker Celery di terminal untuk memproses antrean tugas masuk.", hint: "Jalankan perintah celery -A module worker --loglevel=info.", validate: c => c.length > 0 },
            { task: "Ambil hasil kembalian eksekusi tugas background menggunakan objek AsyncResult dan method .get().", hint: "Panggil result.get(timeout=10).", validate: c => c.includes("get") },
            { task: "Konfigurasikan jadwal tugas berkala (Celery Beat) untuk eksekusi otomatis periodik.", hint: "Atur beat_schedule di konfigurasi app.", validate: c => c.includes("Celery") },
            { task: "Tangkap exception kegagalan tugas background menggunakan callback on_failure.", hint: "Override method on_failure di class task kustom.", validate: c => c.includes("on_failure") },
            { task: "Integrasikan Celery task ke dalam endpoint FastAPI untuk mengirim email atau laporan berat.", hint: "Panggil .delay() di dalam fungsi rute FastAPI.", validate: c => c.includes("delay") },
            { task: "Pantau status antrean tugas menggunakan panel monitoring Flower.", hint: "Jalankan perintah celery -A app flower.", validate: c => c.length > 0 },
            { task: "Atur retry otomatis pada tugas Celery jika terjadi gangguan koneksi jaringan.", hint: "Gunakan self.retry(exc=e, countdown=5).", validate: c => c.includes("retry") }
        ]
    },
    {
        id: 57, category: "Web API", title: "Level 57: Caching Strategies dengan Redis & Python",
        desc: "<b>Definisi Konsep Mendalam:</b> Strategi caching menggunakan Redis untuk menyimpan hasil kueri berat di memori kilat demi skalabilitas aplikasi.<br><br><b>Poin Penting:</b><br>• Menggunakan klien Python <code>redis-py</code>.<br>• Menerapkan TTL (Time-To-Live) kedaluwarsa data.",
        example: `import redis\n\nclient = redis.Redis(host='localhost', port=6379, db=0)\nclient.set('kunci', 'nilai', ex=60)`,
        tasks: [
            { task: "Impor modul redis, buat koneksi klien Redis lokal dengan host dan port standar.", hint: "redis.Redis(host='localhost', port=6379)", validate: c => c.includes("redis") },
            { task: "Simpan data string ke Redis menggunakan client.set() dengan parameter kedaluwarsa TTL (ex=60 detik).", hint: "client.set('key', 'value', ex=60)", validate: c => c.includes("set") },
            { task: "Ambil kembali data dari Redis menggunakan client.get() dan lakukan decode utf-8.", hint: "client.get('key').decode('utf-8')", validate: c => c.includes("get") },
            { task: "Simpan struktur data dictionary ke Redis dengan melakukan serialisasi JSON terlebih dahulu.", hint: "Gunakan json.dumps() sebelum disimpan.", validate: c => c.includes("json") },
            { task: "Buat fungsi decorator cache FastAPI untuk memeriksa Redis sebelum mengeksekusi kueri database berat.", hint: "Cek key di Redis, jika ada return, jika tidak query DB lalu cache.", validate: c => c.includes("def") },
            { task: "Hapus data cache di Redis secara manual menggunakan client.delete() saat data database diperbarui.", hint: "Panggil client.delete('key').", validate: c => c.includes("delete") },
            { task: "Atur pola caching Cache-Aside pattern pada aplikasi backend Anda.", hint: "Cek cache -> jika miss ambil dari DB lalu set cache.", validate: c => c.includes("redis") },
            { task: "Gunakan Redis hash (hset / hget) untuk menyimpan struktur objek data terperinci.", hint: "Gunakan client.hset('user:1', mapping={...})", validate: c => c.includes("hset") },
            { task: "Atur kebijakan penggusuran memori cache (maxmemory-policy) di server Redis.", hint: "Konfigurasi file redis.conf.", validate: c => c.length > 0 },
            { task: "Uji peningkatan performa respons endpoint API sebelum dan sesudah menggunakan Redis cache.", hint: "Bandingkan waktu respons menggunakan benchmark.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 58, category: "Web API", title: "Level 58: API Gateway, Rate Limiting, & CORS Security",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengamankan dan mengatur lalu lintas layanan mikro backend menggunakan pembatasan rate limiting, CORS, dan middleware API Gateway.<br><br><b>Poin Penting:</b><br>• Mengonfigurasi <code>CORSMiddleware</code> di FastAPI.<br>• Menerapkan rate limiting berbasis IP.",
        example: `from fastapi.middleware.cors import CORSMiddleware\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=["https://app.contoh.com"],  # jangan pakai "*" bersama credentials\n    allow_credentials=True,\n    allow_methods=["*"],\n    allow_headers=["*"],\n)`,
        tasks: [
            { task: "Impor CORSMiddleware dari fastapi.middleware.cors dan tambahkan ke aplikasi FastAPI Anda.", hint: "app.add_middleware(CORSMiddleware, ...)", validate: c => c.includes("CORSMiddleware") },
            { task: "Atur daftar asal domain yang diizinkan (allow_origins) pada konfigurasi CORS.", hint: "Berikan list domain web frontend yang valid.", validate: c => c.includes("allow_origins") },
            { task: "Buat middleware kustom pencatat waktu eksekusi permintaan (request timing middleware).", hint: "Gunakan @app.middleware('http') untuk intercept request.", validate: c => c.includes("middleware") },
            { task: "Implementasikan pembatasan laju akses (Rate Limiting) berbasis Redis untuk membatasi penyalahgunaan API (bukan pengganti proteksi DDoS di level jaringan).", hint: "Hitung jumlah request per IP dalam rentang waktu tertentu.", validate: c => c.length > 0 },
            { task: "Buat API Gateway sederhana yang merutekan permintaan masuk ke layanan mikro backend yang sesuai.", hint: "Gunakan pustaka HTTP client seperti httpx untuk meneruskan request.", validate: c => c.includes("httpx") || c.includes("class") },
            { task: "Validasi header API Key kustom pada middleware gateway sebelum meneruskan permintaan.", hint: "Periksa keberadaan header X-API-Key.", validate: c => c.length > 0 },
            { task: "Konfigurasikan penanganan respons header keamanan HTTP standar (X-Content-Type-Options, HSTS).", hint: "Tambahkan header pengaman pada response middleware.", validate: c => c.length > 0 },
            { task: "Batasi ukuran payload body permintaan masuk untuk mencegah serangan overflow memori.", hint: "Validasi ukuran content-length request.", validate: c => c.length > 0 },
            { task: "Uji kebijakan CORS dari aplikasi frontend berbeda domain menggunakan browser.", hint: "Pastikan browser tidak memblokir preflight request OPTIONS.", validate: c => c.length > 0 },
            { task: "Rangkum arsitektur pengamanan API Gateway dalam dokumentasi keamanan enterprise.", hint: "Terapkan standar proteksi OWASP API Security.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 59, category: "Data Engineering", title: "Level 59: Pandas Lanjutan: Groupby, Aggregations, & Window Functions",
        desc: "<b>Definisi Konsep Mendalam:</b> Teknik pengolahan dan analisis data tingkat lanjut menggunakan pustaka Pandas untuk agregasi kelompok dan fungsi jendela (window functions).<br><br><b>Poin Penting:</b><br>• <code>groupby()</code>: Mengelompokkan data berdasarkan kriteria tertentu.<br>• <code>agg()</code>: Menerapkan fungsi agregasi majemuk.",
        example: `import pandas as pd\n\ndf = pd.DataFrame({'kategori': ['A', 'A', 'B'], 'nilai': [10, 20, 30]})\nprint(df.groupby('kategori')['nilai'].sum())`,
        tasks: [
            { task: "Buat DataFrame Pandas, kelompokkan data menggunakan groupby() berdasarkan kolom kategori, lalu hitung rata-rata nilainya.", hint: "Gunakan df.groupby('kolom')['target'].mean()", validate: c => c.includes("groupby") },
            { task: "Gunakan method .agg() untuk menerapkan fungsi agregasi majemuk (sum, mean, max) secara bersamaan pada kolom.", hint: "Gunakan df.groupby('col').agg(['sum', 'mean'])", validate: c => c.includes("agg") },
            { task: "Buat fungsi agregasi kustom kustomisasi menggunakan .agg() dengan fungsi lambda.", hint: "Gunakan lambda x: x.max() - x.min()", validate: c => c.includes("agg") && c.includes("lambda") },
            { task: "Gunakan method .transform() untuk mengembalikan nilai agregasi dengan ukuran DataFrame yang sama.", hint: "Gunakan df.groupby('col')['val'].transform('mean')", validate: c => c.includes("transform") },
            { task: "Gunakan fungsi ranking data .rank() untuk mengurutkan posisi nilai dalam kelompok.", hint: "Gunakan df['rank'] = df.groupby('group')['val'].rank()", validate: c => c.includes("rank") },
            { task: "Gunakan fungsi pergeseran baris .shift() untuk analisis data time-series selisih periode.", hint: "Gunakan df['val'].shift(1)", validate: c => c.includes("shift") },
            { task: "Gunakan fungsi kumulatif .cumsum() untuk menghitung total berjalan (running total).", hint: "Gunakan df['val'].cumsum()", validate: c => c.includes("cumsum") },
            { task: "Buat fungsi rolling window .rolling(window=3).mean() untuk menghitung rata-rata bergerak (moving average).", hint: "Gunakan rolling(3).mean()", validate: c => c.includes("rolling") },
            { task: "Gunakan fungsi penggabungan .merge() untuk menggabungkan dua DataFrame berdasarkan kunci relasi.", hint: "Gunakan pd.merge(df1, df2, on='key')", validate: c => c.includes("merge") },
            { task: "Uji performa pengelompokan data besar menggunakan metode pemetaan vectorized Pandas.", hint: "Hindari iterasi for loop Pandas, gunakan operasi vektor.", validate: c => c.includes("pandas") || c.includes("pd") }
        ]
    },
    {
        id: 60, category: "Data Engineering", title: "Level 60: Pandas Performance Optimization (Vectorization & Cython)",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengoptimalkan kecepatan pemrosesan Pandas dengan teknik vektorisasi NumPy dan kompilasi Cython agar performa setara bahasa C.<br><br><b>Poin Penting:</b><br>• Menghindari perulangan baris <code>iterrows()</code>.<br>• Menggunakan operasi berbasis array NumPy.",
        example: `import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({'a': range(1000), 'b': range(1000)})\ndf['c'] = df['a'] + df['b']  # Operasi vektor`,
        tasks: [
            { task: "Bandingkan kecepatan eksekusi perulangan baris iterrows() vs operasi vektorisasi langsung pada kolom DataFrame.", hint: "Operasi vektor jauh lebih cepat daripada iterasi baris.", validate: c => c.length > 0 },
            { task: "Gunakan fungsi .eval() Pandas untuk mengevaluasi ekspresi string matematika secara optimal di memori.", hint: "Gunakan df.eval('c = a + b')", validate: c => c.includes("eval") },
            { task: "Gunakan method .query() Pandas untuk menyaring baris DataFrame berdasarkan kondisi string logika.", hint: "Gunakan df.query('a > 500')", validate: c => c.includes("query") },
            { task: "Konversikan tipe data kolom string objek ke kategori Pandas menggunakan .astype('category') untuk menghemat RAM.", hint: "Gunakan df['col'].astype('category')", validate: c => c.includes("astype") },
            { task: "Optimalkan penggunaan memori tipe data integer dan float (misal ubah int64 ke int32).", hint: "Gunakan pd.to_numeric(df['col'], downcast='integer')", validate: c => c.includes("to_numeric") },
            { task: "Gunakan fungsi apply dengan pustaka eksternal numba atau cython untuk kompilasi fungsi cepat.", hint: "Gunakan dekorator @jit numba jika tersedia.", validate: c => c.length > 0 },
            { task: "Hindari fragmentasi DataFrame dengan melakukan operasi penambahan kolom sekaligus.", hint: "Gunakan pd.concat([df, new_cols], axis=1) alih-alih di dalam loop.", validate: c => c.includes("concat") },
            { task: "Gunakan chunking pembacaan file CSV besar menggunakan pd.read_csv(..., chunksize=10000).", hint: "Baca file secara bertahap per chunk.", validate: c => c.includes("read_csv") && c.includes("chunksize") },
            { task: "Ukur penggunaan memori DataFrame menggunakan method memory_usage(deep=True).", hint: "Gunakan df.memory_usage(deep=True).sum()", validate: c => c.includes("memory_usage") },
            { task: "Terapkan praktik terbaik pembersihan memori dengan perintah del dan gc.collect().", hint: "Hapus referensi DataFrame besar yang tidak terpakai.", validate: c => c.includes("del") || c.includes("gc") }
        ]
    },
    {
        id: 61, category: "Data Engineering", title: "Level 61: PySpark Basics: RDDs & DataFrames (Big Data)",
        desc: "<b>Definisi Konsep Mendalam:</b> PySpark adalah antarmuka Python untuk Apache Spark, mesin komputasi klaster terdistribusi untuk pengolahan Big Data skala masif.<br><br><b>Poin Penting:</b><br>• Inisialisasi <code>SparkSession</code>.<br>• Operasi transformasi dan aksi pada DataFrame terdistribusi.",
        example: `from pyspark.sql import SparkSession\n\nspark = SparkSession.builder.appName("App").getOrCreate()\ndf = spark.createDataFrame([(1, "A"), (2, "B")], ["id", "val"])\ndf.show()`,
        tasks: [
            { task: "Impor SparkSession dari pyspark.sql, lalu buat instance builder SparkSession lokal.", hint: "SparkSession.builder.appName('Test').getOrCreate()", validate: c => c.includes("SparkSession") },
            { task: "Buat Spark DataFrame dari list data Python lokal menggunakan spark.createDataFrame().", hint: "Sertakan data dan skema kolom.", validate: c => c.includes("createDataFrame") },
            { task: "Lakukan operasi transformasi filter pada Spark DataFrame untuk menyaring nilai baris tertentu.", hint: "Gunakan df.filter(df['id'] > 1)", validate: c => c.includes("filter") },
            { task: "Lakukan operasi select dan penambahan kolom baru menggunakan .withColumn().", hint: "Gunakan df.withColumn('new_col', df['val'] * 2)", validate: c => c.includes("withColumn") },
            { task: "Lakukan agregasi kelompok dengan .groupBy() dan .count() pada Spark DataFrame.", hint: "Gunakan df.groupBy('col').count().show()", validate: c => c.includes("groupBy") },
            { task: "Baca file data eksternal CSV ke dalam Spark DataFrame menggunakan spark.read.csv().", hint: "Gunakan spark.read.option('header', True).csv('file.csv')", validate: c => c.includes("read") && c.includes("csv") },
            { task: "Lakukan operasi aksi .collect() atau .show() untuk mengeksekusi komputasi lazy evaluation Spark.", hint: "Spark bersifat lazy evaluation sebelum dipanggil aksi.", validate: c => c.includes("show") || c.includes("collect") },
            { task: "Daftarkan Spark DataFrame sebagai tabel temporary SQL dan jalankan kueri spark.sql().", hint: "Gunakan df.createOrReplaceTempView('tabel')", validate: c => c.includes("sql") || c.includes("TempView") },
            { task: "Tulis Spark DataFrame kembali ke file format Parquet menggunakan .write.parquet().", hint: "Gunakan df.write.parquet('path/output')", validate: c => c.includes("parquet") },
            { task: "Hentikan sesi Spark secara bersih menggunakan spark.stop().", hint: "Panggil spark.stop()", validate: c => c.includes("stop") }
        ]
    },
    {
        id: 62, category: "Data Engineering", title: "Level 62: ETL Pipeline Development dengan Python",
        desc: "<b>Definisi Konsep Mendalam:</b> Membangun alur kerja pipeline ETL (Extract, Transform, Load) tingkat enterprise menggunakan skrip Python murni.<br><br><b>Poin Penting:</b><br>• <code>Extract</code>: Mengambil data sumber.<br>• <code>Transform</code>: Membersihkan dan memproses data.<br>• <code>Load</code>: Menyimpan ke target penyimpanan.",
        example: `def extract(): return [{"id": 1, "val": " a "}]\ndef transform(data): return [{"id": d["id"], "val": d["val"].strip().upper()} for d in data]\ndef load(data): print("Loaded:", data)`,
        tasks: [
            { task: "Buat fungsi Extract (ekstraksi) yang membaca data mentah dari sumber file atau API fiktif.", hint: "Kembalikan struktur data mentah.", validate: c => c.includes("def") },
            { task: "Buat fungsi Transform (transformasi) yang membersihkan spasi teks dan mengubah huruf jadi kapital.", hint: "Iterasi data dan lakukan string cleaning.", validate: c => c.includes("def") },
            { task: "Buat fungsi Load (pemuatan) yang menyimpan hasil bersih ke database atau file target.", hint: "Simpan data akhir.", validate: c => c.includes("def") },
            { task: "Gabungkan ketiga fungsi ETL ke dalam satu fungsi utama orchestrator run_etl().", hint: "Panggil extract -> transform -> load secara berurutan.", validate: c => c.includes("def") },
            { task: "Tambahkan blok penanganan error try-except pada setiap tahapan ETL untuk mencatat log kegagalan.", hint: "Catat log jika proses ekstrak atau load gagal.", validate: c => c.includes("try") },
            { task: "Validasi integritas jumlah baris data masuk dan keluar pada pipeline.", hint: "Pastikan tidak ada data korup di tengah jalan.", validate: c => c.includes("len") },
            { task: "Simulasikan penambahan mekanisme incremental load (pemuatan bertambah) berdasarkan timestamp.", hint: "Hanya ambil data baru setelah tanggal terakhir.", validate: c => c.length > 0 },
            { task: "Tulis log pemantauan eksekusi ETL menggunakan modul logging Python.", hint: "Gunakan logging.info() di setiap tahap.", validate: c => c.includes("logging") },
            { task: "Uji seluruh pipeline ETL menggunakan unit test pytest.", hint: "Uji fungsi transform dengan data tiruan.", validate: c => c.includes("def") },
            { task: "Rangkum dokumentasi arsitektur pipeline ETL perusahaan.", hint: "Jelaskan sumber dan tujuan aliran data.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 63, category: "Data Engineering", title: "Level 63: Data Validation Great Expectations",
        desc: "<b>Definisi Konsep Mendalam:</b> Memvalidasi kualitas dan integritas data otomatis menggunakan pustaka <code>Great Expectations</code> standar industri.<br><br><b>Poin Penting:</b><br>• Membuat ekspektasi aturan kolom (tidak boleh null, rentang nilai).",
        example: `import great_expectations as gx\n\ncontext = gx.get_context()\n# Validasi kualitas data berbasis ekspektasi`,
        tasks: [
            { task: "Inisialisasi konteks Great Expectations menggunakan gx.get_context().", hint: "context = gx.get_context()", validate: c => c.includes("get_context") },
            { task: "Muat data Pandas DataFrame ke dalam objek Validator Great Expectations.", hint: "Gunakan validator data source.", validate: c => c.length > 0 },
            { task: "Buat aturan ekspektasi untuk memastikan suatu kolom tidak boleh bernilai null (expect_column_values_to_not_be_null).", hint: "Panggil validator.expect_column_values_to_not_be_null('kolom')", validate: c => c.includes("expect_column_values_to_not_be_null") },
            { task: "Buat ekspektasi rentang nilai minimum dan maksimum suatu kolom numerik.", hint: "Gunakan expect_column_values_to_be_between.", validate: c => c.includes("expect_column_values_to_be_between") },
            { task: "Buat ekspektasi keunikan nilai data pada kolom primary key.", hint: "Gunakan expect_column_values_to_be_unique.", validate: c => c.includes("expect_column_values_to_be_unique") },
            { task: "Jalankan validasi checkpoint Great Expectations untuk memeriksa kualitas DataFrame.", hint: "Panggil validator.validate().", validate: c => c.includes("validate") },
            { task: "Periksa hasil laporan validasi sukses atau gagal dari objek hasil.", hint: "Cek atribut success dari hasil validasi.", validate: c => c.length > 0 },
            { task: "Ekspor laporan hasil validasi kualitas data ke dalam format HTML interaktif.", hint: "Build Data Docs Great Expectations.", validate: c => c.length > 0 },
            { task: "Integrasikan langkah validasi Great Expectations ke dalam akhir tahapan ETL.", hint: "Validasi data sebelum dimuat ke database target.", validate: c => c.length > 0 },
            { task: "Uji skenario data kotor yang memicu kegagalan ekspektasi validasi.", hint: "Pastikan sistem mendeteksi anomali data.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 64, category: "Data Engineering", title: "Level 64: Parquet, Delta Lake, & Efficient File Formats",
        desc: "<b>Definisi Konsep Mendalam:</b> Menggunakan format penyimpanan data kolom terkompresi efisien seperti Apache Parquet dan Delta Lake untuk analitik Big Data.<br><br><b>Poin Penting:</b><br>• Penyimpanan kolom berorientasi kompresi tinggi.<br>• Dukungan ACID transactions di Delta Lake.",
        example: `import pandas as pd\n\ndf = pd.DataFrame({'a': [1, 2], 'b': ['x', 'y']})\ndf.to_parquet('data.parquet', engine='pyarrow')`,
        tasks: [
            { task: "Buat Pandas DataFrame, simpan langsung ke file berformat Parquet menggunakan engine pyarrow.", hint: "Gunakan df.to_parquet('file.parquet')", validate: c => c.includes("to_parquet") },
            { task: "Baca kembali file data Parquet ke dalam Pandas DataFrame menggunakan pd.read_parquet().", hint: "Gunakan pd.read_parquet('file.parquet')", validate: c => c.includes("read_parquet") },
            { task: "Bandingkan ukuran file dan kecepatan baca antara format CSV tradisional vs Parquet.", hint: "Parquet jauh lebih cepat dan hemat ukuran file.", validate: c => c.length > 0 },
            { task: "Gunakan penyaringan kolom (column pruning) saat membaca file Parquet untuk menghemat RAM.", hint: "Gunakan parameter columns=['kolom_tertentu'] di read_parquet.", validate: c => c.includes("read_parquet") && c.includes("columns") },
            { task: "Impor delta-spark atau delta table untuk mengelola tabel berformat Delta Lake.", hint: "Gunakan format delta pada write Spark.", validate: c => c.includes("delta") },
            { task: "Simulasikan transaksi ACID (Atomicity, Consistency, Isolation, Durability) pada Delta Lake.", hint: "Delta Lake mendukung operasi time travel dan merge.", validate: c => c.length > 0 },
            { task: "Lakukan operasi Time Travel untuk membaca versi data masa lalu pada tabel Delta Lake.", hint: "Gunakan option versionAsOf atau timestampAsOf.", validate: c => c.length > 0 },
            { task: "Lakukan operasi pembaruan data (update / merge) langsung pada file penyimpanan data.", hint: "Gunakan DeltaTable.forPath().merge().", validate: c => c.includes("merge") },
            { task: "Optimalkan file kecil di Delta Lake menggunakan perintah optimize vacuum.", hint: "Jalankan perintah optimize tabel.", validate: c => c.length > 0 },
            { task: "Tulis ringkasan keuntungan format Parquet & Delta Lake dalam arsitektur Data Lakehouse.", hint: "Kombinasi keunggulan Data Lake dan Data Warehouse.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 65, category: "Data Engineering", title: "Level 65: Apache Airflow Basics: DAGs & Workflow Orchestration",
        desc: "<b>Definisi Konsep Mendalam:</b> Apache Airflow adalah platform orkestrasi alur kerja open-source untuk merancang, menjadwalkan, dan memantau pipeline data kompleks.<br><br><b>Poin Penting:</b><br>• Mendefinisikan DAG (Directed Acyclic Graph).<br>• Menggunakan PythonOperator.",
        example: `from airflow import DAG\nfrom airflow.operators.python import PythonOperator\nfrom datetime import datetime\n\nwith DAG('my_dag', start_date=datetime(2026, 1, 1), schedule='@daily') as dag:\n    task = PythonOperator(task_id='t1', python_callable=print)`,
        tasks: [
            { task: "Impor DAG dan datetime dari airflow, lalu buat konteks DAG dasar dengan jadwal harian.", hint: "with DAG('dag_id', start_date=..., schedule='@daily') as dag:", validate: c => c.includes("DAG") },
            { task: "Impor PythonOperator dan buat task operator Python yang menjalankan fungsi kustom.", hint: "PythonOperator(task_id='...', python_callable=fungsi)", validate: c => c.includes("PythonOperator") },
            { task: "Atur urutan ketergantungan antar task menggunakan operator bitwise shift (>>).", hint: "task1 >> task2 >> task3", validate: c => c.includes(">>") },
            { task: "Tambahkan argumen default_args pada DAG untuk konfigurasi email pemberitahuan dan retry error.", hint: "default_args={'retries': 1, 'retry_delay': timedelta(minutes=5)}", validate: c => c.includes("default_args") },
            { task: "Simulasikan pengujian eksekusi task Airflow secara lokal via perintah CLI airflow tasks test.", hint: "airflow tasks test dag_id task_id 2026-01-01", validate: c => c.length > 0 },
            { task: "Gunakan XComs (Cross-Communications) untuk mengirim data kecil antar task Airflow.", hint: "Gunakan ti.xcom_push dan ti.xcom_pull.", validate: c => c.includes("xcom") },
            { task: "Buat Sensor Airflow untuk menunggu keberadaan file eksternal sebelum task utama berjalan.", hint: "Gunakan FileSensor.", validate: c => c.includes("Sensor") || c.includes("FileSensor") },
            { task: "Jalankan webserver dan scheduler Airflow di lingkungan lokal Anda.", hint: "airflow standalone", validate: c => c.length > 0 },
            { task: "Pantau status visual jalannya DAG melalui panel antarmuka UI Airflow.", hint: "Akses http://localhost:8080", validate: c => c.length > 0 },
            { task: "Tulis dokumentasi operasional pemeliharaan DAG production.", hint: "Terapkan praktik terbaik penamaan task.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 66, category: "Data Engineering", title: "Level 66: Time Series Analysis dengan Pandas & NumPy",
        desc: "<b>Definisi Konsep Mendalam:</b> Analisis data deret waktu (time series) tingkat lanjut menggunakan indeks tanggal Pandas dan resampling frekuensi waktu.<br><br><b>Poin Penting:</b><br>• Konversi indeks ke DatetimeIndex.<br>• Resampling data harian ke bulanan.",
        example: `import pandas as pd\n\ndates = pd.date_range('2026-01-01', periods=5, freq='D')\ns = pd.Series([10, 20, 15, 30, 25], index=dates)\nprint(s.resample('W').mean())`,
        tasks: [
            { task: "Buat rentang tanggal menggunakan pd.date_range() dengan frekuensi harian.", hint: "pd.date_range('2026-01-01', periods=10, freq='D')", validate: c => c.includes("date_range") },
            { task: "Buat Pandas Series berindeks tanggal, lalu ubah frekuensi data harian ke mingguan menggunakan .resample('W').mean().", hint: "Gunakan .resample('W').mean()", validate: c => c.includes("resample") },
            { task: "Lakukan interpolasi data waktu yang hilang menggunakan method .interpolate().", hint: "Gunakan df['col'].interpolate() untuk mengisi NaN.", validate: c => c.includes("interpolate") },
            { task: "Ekstrak komponen tanggal spesifik (tahun, bulan, hari, nama hari) dari DatetimeIndex.", hint: "Gunakan dt.year, dt.month, dt.day_name()", validate: c => c.includes("dt.") },
            { task: "Lakukan penggeseran data waktu masa lalu (lag) menggunakan .shift().", hint: "Gunakan s.shift(1) untuk data kemarin.", validate: c => c.includes("shift") },
            { task: "Hitung persentase perubahan periodik menggunakan method .pct_change().", hint: "Gunakan s.pct_change() untuk return finansial.", validate: c => c.includes("pct_change") },
            { task: "Hitung rata-rata bergerak terbobot (exponential moving average) menggunakan .ewm().", hint: "Gunakan s.ewm(span=5).mean()", validate: c => c.includes("ewm") },
            { task: "Visualisasikan tren data time-series menggunakan plot Pandas sederhana.", hint: "Gunakan s.plot() jika matplotlib tersedia.", validate: c => c.includes("plot") },
            { task: "Tangkap irisan rentang tanggal spesifik (date slicing) pada DataFrame time-series.", hint: "Gunakan df['2026-01-01':'2026-01-05']", validate: c => c.includes(":") },
            { task: "Uji stasioneritas data time-series dasar untuk keperluan forecasting.", hint: "Pahami konsep uji Augmented Dickey-Fuller.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 67, category: "Data Engineering", title: "Level 67: Web Scraping Skala Besar (Scrapy Framework)",
        desc: "<b>Definisi Konsep Mendalam:</b> Membangun kerangka kerja web scraping asinkron berskala besar menggunakan pustaka <code>Scrapy</code> untuk mengekstrak data web secara paralel.<br><br><b>Poin Penting:</b><br>• Membuat Scrapy Spider.<br>• Mengekstrak data via XPath / CSS selectors.",
        example: `import scrapy\n\nclass QuotesSpider(scrapy.Spider):\n    name = "quotes"\n    start_urls = ['http://quotes.toscrape.com/']\n    def parse(self, response):\n        for quote in response.css('div.quote'):\n            yield {'text': quote.css('span.text::text').get()}`,
        tasks: [
            { task: "Buat class Spider turunan scrapy.Spider dengan atribut nama dan start_urls.", hint: "class MySpider(scrapy.Spider): name = 'bot'", validate: c => c.includes("scrapy.Spider") },
            { task: "Tulis method parse(self, response) untuk mengekstrak elemen teks menggunakan CSS selector.", hint: "Gunakan response.css('tag::text').getall()", validate: c => c.includes("response.css") },
            { task: "Gunakan XPath selector untuk mengekstrak atribut link tautan URL dari halaman web.", hint: "Gunakan response.xpath('//a/@href').getall()", validate: c => c.includes("response.xpath") },
            { task: "Gunakan scrapy.Request untuk mengikuti tautan halaman berikutnya secara rekursif (pagination).", hint: "Yield scrapy.Request(url=next_url, callback=self.parse)", validate: c => c.includes("scrapy.Request") },
            { task: "Simpan hasil ekstraksi data dictionary ke dalam file JSON atau CSV melalui argumen terminal Scrapy.", hint: "Gunakan perintah scrapy crawl bot -o output.json", validate: c => c.length > 0 },
            { task: "Konfigurasikan penundaan unduhan (download delay) dan pembatasan konkurensi di settings.py Scrapy.", hint: "Atur DOWNLOAD_DELAY = 2 di settings.", validate: c => c.length > 0 },
            { task: "Aktifkan middleware User-Agent acak untuk mencegah pemblokiran bot.", hint: "Konfigurasi custom download middleware.", validate: c => c.length > 0 },
            { task: "Simulasikan penanganan item pipeline untuk membersihkan dan menyimpan data ke database.", hint: "Implementasikan class ItemPipeline.", validate: c => c.includes("class") },
            { task: "Jalankan spider Scrapy secara terprogram dari dalam skrip Python menggunakan CrawlerRunner.", hint: "Impor CrawlerRunner dari scrapy.crawler.", validate: c => c.includes("CrawlerRunner") },
            { task: "Tulis praktik etika web scraping (mematuhi robots.txt dan tidak membebani server target).", hint: "Selalu hormati robots.txt situs web.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 68, category: "Data Engineering", title: "Level 68: Advanced Data Visualization (Matplotlib, Seaborn, Plotly)",
        desc: "<b>Definisi Konsep Mendalam:</b> Visualisasi data tingkat lanjut untuk menyajikan wawasan analitik secara estetis dan interaktif menggunakan Matplotlib, Seaborn, dan Plotly.<br><br><b>Poin Penting:</b><br>• Grafik statistik Seaborn.<br>• Visualisasi interaktif Plotly.",
        example: `import matplotlib.pyplot as plt\nimport seaborn as sns\n\nsns.set_theme()\nfig, ax = plt.subplots()\nsns.lineplot(x=[1, 2, 3], y=[4, 5, 6], ax=ax)`,
        tasks: [
            { task: "Impor matplotlib.pyplot dan buat grafik garis sederhana dari dua list data.", hint: "plt.plot(x, y); plt.show()", validate: c => c.includes("matplotlib") || c.includes("plt") },
            { task: "Buat subplot berisi beberapa panel grafik dalam satu gambar menggunakan plt.subplots().", hint: "fig, (ax1, ax2) = plt.subplots(1, 2)", validate: c => c.includes("subplots") },
            { task: "Impor seaborn, buat grafik sebaran statistik (scatterplot) dengan pemisahan warna kategori.", hint: "sns.scatterplot(data=df, x='a', y='b', hue='kategori')", validate: c => c.includes("seaborn") || c.includes("sns") },
            { task: "Buat grafik heatmap korelasi matriks antar variabel menggunakan Seaborn.", hint: "sns.heatmap(df.corr(), annot=True)", validate: c => c.includes("heatmap") },
            { task: "Buat grafik distribusi data menggunakan histogram KDE plot Seaborn.", hint: "sns.histplot(data=df, x='col', kde=True)", validate: c => c.includes("histplot") },
            { task: "Impor plotly.express untuk membuat grafik interaktif berbasis web.", hint: "import plotly.express as px", validate: c => c.includes("plotly") || c.includes("px") },
            { task: "Buat grafik scatter plot interaktif Plotly dengan tooltip hover data detail.", hint: "px.scatter(df, x='a', y='b', hover_data=['c'])", validate: c => c.includes("scatter") },
            { task: "Sesuaikan tata letak judul, label sumbu, dan tema warna visualisasi.", hint: "Gunakan ax.set_title() atau fig.update_layout()", validate: c => c.length > 0 },
            { task: "Ekspor grafik visualisasi ke dalam file gambar resolusi tinggi (PNG / SVG).", hint: "Gunakan plt.savefig('plot.png', dpi=300)", validate: c => c.includes("savefig") },
            { task: "Rangkum laporan analitik data visual lengkap dalam satu dashboard ringkas.", hint: "Gabungkan berbagai plot tematik.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 69, category: "AI Engineering", title: "Level 69: Scikit-Learn: Machine Learning Pipeline Dasar",
        desc: "<b>Definisi Konsep Mendalam:</b> Membangun alur kerja machine learning terstruktur menggunakan pustaka <code>scikit-learn</code> untuk pra-pemrosesan data, pelatihan model, dan evaluasi.<br><br><b>Poin Penting:</b><br>• Pembagian data train-test.<br>• Pembuatan objek Pipeline.",
        example: `from sklearn.model_selection import train_test_split\nfrom sklearn.ensemble import RandomForestClassifier\n\n# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)`,
        tasks: [
            { task: "Impor train_test_split dari sklearn.model_selection, lalu bagi dataset fitur X dan target y menjadi data latih dan uji.", hint: "X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)", validate: c => c.includes("train_test_split") },
            { task: "Impor StandardScaler dari sklearn.preprocessing untuk melakukan standarisasi fitur numerik.", hint: "scaler = StandardScaler(); X_scaled = scaler.fit_transform(X)", validate: c => c.includes("StandardScaler") },
            { task: "Impor RandomForestClassifier, buat instance model klasifikasi, dan latih menggunakan method .fit().", hint: "model = RandomForestClassifier(); model.fit(X_train, y_train)", validate: c => c.includes("RandomForestClassifier") },
            { task: "Lakukan prediksi target menggunakan model terlatih pada data uji dengan method .predict().", hint: "y_pred = model.predict(X_test)", validate: c => c.includes("predict") },
            { task: "Evaluasi akurasi model menggunakan fungsi accuracy_score dari sklearn.metrics.", hint: "score = accuracy_score(y_test, y_pred)", validate: c => c.includes("accuracy_score") },
            { task: "Buat objek Pipeline scikit-learn untuk menggabungkan langkah scaling dan estimator model secara otomatis.", hint: "from sklearn.pipeline import Pipeline; pipe = Pipeline([('scaler', StandardScaler()), ('model', Model())])", validate: c => c.includes("Pipeline") },
            { task: "Gunakan GridSearchCV untuk melakukan pencarian hiperparameter optimal secara sistematis.", hint: "from sklearn.model_selection import GridSearchCV", validate: c => c.includes("GridSearchCV") },
            { task: "Hitung matriks kebingungan (confusion matrix) untuk evaluasi performa klasifikasi detail.", hint: "from sklearn.metrics import confusion_matrix", validate: c => c.includes("confusion_matrix") },
            { task: "Simpan model machine learning terlatih ke dalam file biner menggunakan pustaka joblib.", hint: "import joblib; joblib.dump(model, 'model.pkl')", validate: c => c.includes("joblib") },
            { task: "Muat kembali model tersimpan dari file biner joblib untuk melakukan inferensi data baru.", hint: "model = joblib.load('model.pkl')", validate: c => c.includes("joblib") }
        ]
    },
    {
        id: 70, category: "AI Engineering", title: "Level 70: OpenAI API & Anthropic Claude SDK Integration",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengintegrasikan model bahasa besar (LLM) komersial mutakhir seperti OpenAI GPT dan Anthropic Claude ke dalam aplikasi backend Python menggunakan SDK resmi.<br><br><b>Poin Penting:</b><br>• Penggunaan klien <code>OpenAI()</code>.<br>• Pengiriman parameter chat completions.",
        example: `from openai import OpenAI\n\nclient = OpenAI(api_key="api-key-anda")\nresponse = client.chat.completions.create(\n    model="gpt-4o-mini",\n    messages=[{"role": "user", "content": "Halo AI!"}]\n)`,
        tasks: [
            { task: "Impor kelas OpenAI dari pustaka openai dan inisialisasi klien API dengan kunci akses.", hint: "client = OpenAI(api_key='your_key')", validate: c => c.includes("OpenAI") },
            { task: "Buat permintaan chat completions sederhana menggunakan model 'gpt-4o-mini'.", hint: "client.chat.completions.create(model='gpt-4o-mini', messages=[...])", validate: c => c.includes("chat.completions.create") },
            { task: "Ekstrak teks respons jawaban dari objek hasil balasan API OpenAI.", hint: "response.choices[0].message.content", validate: c => c.includes("choices") },
            { task: "Tambahkan riwayat pesan percakapan (system, user, assistant) ke dalam parameter messages.", hint: "Sertakan role system untuk mengatur persona AI.", validate: c => c.includes("messages") },
            { task: "Aktifkan mode streaming respons token secara real-time menggunakan parameter stream=True.", hint: "Iterasi tiap chunk dan baca chunk.choices[0].delta.content.", validate: c => c.includes("stream=True") },
            { task: "Impor Anthropic dari pustaka anthropic untuk menginisialisasi klien Claude.", hint: "from anthropic import Anthropic; client = Anthropic()", validate: c => c.includes("Anthropic") },
            { task: "Kirim permintaan pesan teks menggunakan method messages.create() milik SDK Anthropic Claude.", hint: "client.messages.create(model='claude-sonnet-5-5', max_tokens=100, messages=[...])", validate: c => c.includes("messages.create") },
            { task: "Atur parameter suhu (temperature) kreativitas respons model antara 0.0 hingga 1.0.", hint: "Tambahkan parameter temperature=0.7 pada pemanggilan.", validate: c => c.includes("temperature") },
            { task: "Gunakan fitur Structured Outputs (JSON Mode) OpenAI untuk memaksa model merespons berformat JSON terstruktur.", hint: "Gunakan response_format={ 'type': 'json_object' }", validate: c => c.includes("response_format") },
            { task: "Tangkap penanganan error pembatasan rate limit API menggunakan blok try-except RateLimitError.", hint: "Tangkap error API dengan try-except.", validate: c => c.includes("try") }
        ]
    },
    {
        id: 71, category: "AI Engineering", title: "Level 71: LangChain & LlamaIndex: Framework LLM",
        desc: "<b>Definisi Konsep Mendalam:</b> Memanfaatkan kerangka kerja aplikasi LLM tingkat lanjut seperti LangChain dan LlamaIndex untuk menyusun rantai eksekusi agen cerdas.<br><br><b>Poin Penting:</b><br>• Menggunakan prompt templates.<br>• Pembuatan rantai (Chains) pemrosesan.",
        example: `from langchain_core.prompts import ChatPromptTemplate\n\nprompt = ChatPromptTemplate.from_template("Jelaskan tentang {topik}")\nprint(prompt.format(topik="Python"))`,
        tasks: [
            { task: "Impor ChatPromptTemplate dari langchain_core.prompts dan buat template prompt dinamis.", hint: "ChatPromptTemplate.from_template('Ceritakan tentang {subjek}')", validate: c => c.includes("ChatPromptTemplate") },
            { task: "Format template prompt dengan memasukkan variabel masukan nilai string.", hint: "prompt.format(subjek='Kecerdasan Buatan')", validate: c => c.includes("format") },
            { task: "Impor ChatOpenAI dari langchain_openai untuk mengintegrasikan model bahasa ke dalam rantai.", hint: "from langchain_openai import ChatOpenAI; llm = ChatOpenAI(model='gpt-4o-mini')", validate: c => c.includes("ChatOpenAI") },
            { task: "Hubungkan prompt template dan model LLM menggunakan operator pipe (|) Expression LangChain.", hint: "chain = prompt | llm", validate: c => c.includes("|") },
            { task: "Jalankan eksekusi rantai menggunakan method .invoke({'subjek': '...'})", hint: "response = chain.invoke({'subjek': 'Python'})", validate: c => c.includes("invoke") },
            { task: "Impor StringOutputParser untuk membersihkan hasil keluaran rantai menjadi teks murni string.", hint: "from langchain_core.output_parsers import StrOutputParser; chain = prompt | llm | StrOutputParser()", validate: c => c.includes("StrOutputParser") },
            { task: "Impor LlamaIndex VectorStoreIndex untuk melakukan pengindeksan dokumen teks lokal.", hint: "from llama_index.core import VectorStoreIndex, SimpleDirectoryReader", validate: c => c.includes("VectorStoreIndex") },
            { task: "Muat dokumen lokal menggunakan SimpleDirectoryReader untuk persiapan basis pengetahuan.", hint: "documents = SimpleDirectoryReader('data').load_data()", validate: c => c.includes("SimpleDirectoryReader") },
            { task: "Buat indeks vektor pencarian dokumen menggunakan LlamaIndex.", hint: "index = VectorStoreIndex.from_documents(documents)", validate: c => c.includes("VectorStoreIndex") },
            { task: "Buat query engine dari indeks untuk melakukan tanya jawab berbasis dokumen teks (RAG lokal).", hint: "query_engine = index.as_query_engine(); response = query_engine.query('Pertanyaan?')", validate: c => c.includes("as_query_engine") }
        ]
    },
    {
        id: 72, category: "AI Engineering", title: "Level 72: Vector Databases (Chroma, Qdrant, Pinecone)",
        desc: "<b>Definisi Konsep Mendalam:</b> Menyimpan dan melakukan pencarian kemiripan semantik (vector similarity search) berkecepatan tinggi menggunakan basis data vektor.<br><br><b>Poin Penting:</b><br>• Menggunakan penyimpanan lokal ChromaDB.<br>• Menyimpan embedding teks.",
        example: `import chromadb\n\nclient = chromadb.Client()\ncollection = client.create_collection("dokumen")\ncollection.add(documents=["Teks 1"], ids=["id1"])`,
        tasks: [
            { task: "Impor chromadb, buat instance klien basis data vektor lokal.", hint: "client = chromadb.PersistentClient(path='./chroma_db')", validate: c => c.includes("chromadb") },
            { task: "Buat koleksi penyimpanan data vektor baru bernama 'pengetahuan_ai'.", hint: "collection = client.get_or_create_collection('pengetahuan_ai')", validate: c => c.includes("collection") },
            { task: "Tambahkan dokumen teks lengkap beserta ID unik ke dalam koleksi ChromaDB.", hint: "collection.add(documents=['...'], ids=['doc1'])", validate: c => c.includes("add") },
            { task: "Lakukan pencarian kemiripan semantik (similarity search) berdasarkan kueri teks.", hint: "results = collection.query(query_texts=['pencarian'], n_results=2)", validate: c => c.includes("query") },
            { task: "Ekstrak hasil dokumen terdekat yang paling relevan dari respons kueri basis data vektor.", hint: "results['documents'][0]", validate: c => c.length > 0 },
            { task: "Hubungkan ChromaDB sebagai vector store backend di dalam framework LangChain.", hint: "from langchain_community.vectorstores import Chroma", validate: c => c.includes("Chroma") },
            { task: "Konfigurasikan koneksi klien Qdrant lokal untuk penyimpanan data vektor skala besar.", hint: "from qdrant_client import QdrantClient; client = QdrantClient(':memory:')", validate: c => c.includes("QdrantClient") },
            { task: "Tambahkan titik vektor embedding kustom secara manual ke dalam koleksi Qdrant.", hint: "client.upsert(collection_name='...', points=[...])", validate: c => c.includes("upsert") },
            { task: "Lakukan pencarian vektor berbasis skor jarak kosinus (cosine similarity) di Qdrant.", hint: "client.search(collection_name='...', query_vector=[...], limit=3)", validate: c => c.includes("search") },
            { task: "Hapus koleksi basis data vektor yang tidak terpakai untuk pembersihan memori penyimpanan.", hint: "client.delete_collection('nama_koleksi')", validate: c => c.includes("delete_collection") }
        ]
    },
    {
        id: 73, category: "AI Engineering", title: "Level 73: Retrieval-Augmented Generation (RAG) Architecture",
        desc: "<b>Definisi Konsep Mendalam:</b> Membangun arsitektur RAG (Retrieval-Augmented Generation) untuk menyuplai konteks dokumen eksternal secara akurat ke dalam prompt LLM.<br><br><b>Poin Penting:</b><br>• Proses chunking dokumen.<br>• Retrieval konteks + Generasi jawaban.",
        example: `from langchain_text_splitters import RecursiveCharacterTextSplitter\n\nsplitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)\nchunks = splitter.split_text("Teks panjang...")`,
        tasks: [
            { task: "Impor RecursiveCharacterTextSplitter untuk memecah dokumen teks panjang menjadi potongan kecil (chunks).", hint: "splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)", validate: c => c.includes("RecursiveCharacterTextSplitter") },
            { task: "Pecah teks dokumen mentah menjadi list potongan teks siap embedding.", hint: "chunks = splitter.create_documents([teks_panjang])", validate: c => c.includes("splitter") },
            { task: "Ubah potongan teks dokumen menjadi embedding vektor dan simpan ke dalam vector store (Chroma).", hint: "vectorstore = Chroma.from_documents(chunks, embeddings)", validate: c => c.includes("Chroma") },
            { task: "Buat objek retriever dari vector store untuk mencari dokumen berdasarkan kueri pengguna.", hint: "retriever = vectorstore.as_retriever(search_kwargs={'k': 3})", validate: c => c.includes("as_retriever") },
            { task: "Tulis fungsi kustom gabungan RAG yang mengambil dokumen relevan dari retriever.", hint: "docs = retriever.invoke(query)", validate: c => c.includes("invoke") },
            { task: "Gabungkan isi teks dokumen hasil retrieval ke dalam string konteks prompt LLM.", hint: "context = '\\n'.join([d.page_content for d in docs])", validate: c => c.includes("join") },
            { task: "Buat prompt sistem RAG yang menginstruksikan LLM hanya menjawab berdasarkan konteks yang diberikan.", hint: "prompt = f'Jawab berdasarkan konteks berikut: {context}'", validate: c => c.length > 0 },
            { task: "Kirim prompt gabungan konteks dan pertanyaan ke model LLM untuk menghasilkan jawaban final.", hint: "response = llm.invoke(prompt)", validate: c => c.includes("invoke") },
            { task: "Bungkus seluruh alur RAG menjadi retrieval chain LangChain siap pakai (create_retrieval_chain).", hint: "from langchain.chains import create_retrieval_chain", validate: c => c.includes("create_retrieval_chain") },
            { task: "Uji performa akurasi sistem RAG dengan memberikan pertanyaan spesifik dari dokumen internal.", hint: "Verifikasi apakah jawaban LLM sesuai dengan dokumen acuan.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 74, category: "AI Engineering", title: "Level 74: Building AI Agents & Multi-Agent Systems (CrewAI / AutoGen)",
        desc: "<b>Definisi Konsep Mendalam:</b> Membangun agen kecerdasan buatan otonom dan sistem kolaborasi multi-agen (CrewAI / AutoGen) untuk menyelesaikan tugas kompleks secara mandiri.<br><br><b>Poin Penting:</b><br>• Mendefinisikan peran Agen (Role, Goal, Backstory).<br>• Menyusun Crew tugas berurutan.",
        example: `from crewai import Agent, Task, Crew\n\npeneliti = Agent(role='Peneliti', goal='Cari data akurat', backstory='Ahli riset data')\ntugas = Task(description='Riset topik AI', expected_output='Laporan ringkas', agent=peneliti)\ncrew = Crew(agents=[peneliti], tasks=[tugas])`,
        tasks: [
            { task: "Impor Agent dari crewai, buat agen AI dengan atribut role, goal, dan backstory khusus.", hint: "Agent(role='Penulis', goal='Buat artikel bagus', backstory='Jurnalis berpengalaman')", validate: c => c.includes("Agent") },
            { task: "Impor Task dari crewai, buat tugas kerja spesifik dengan deskripsi dan agen penanggung jawab.", hint: "Task(description='Tulis artikel AI', expected_output='Draft teks', agent=penulis)", validate: c => c.includes("Task") },
            { task: "Gabungkan agen dan tugas ke dalam satu objek Crew orkestrasi.", hint: "crew = Crew(agents=[peneliti, penulis], tasks=[tugas1, tugas2])", validate: c => c.includes("Crew") },
            { task: "Jalankan eksekusi kolaborasi multi-agen menggunakan method .kickoff().", hint: "result = crew.kickoff()", validate: c => c.includes("kickoff") },
            { task: "Tambahkan alat (Tools) kustom pencarian web atau pembaca file ke dalam kemampuan agen CrewAI.", hint: "from crewai_tools import SerperDevTool", validate: c => c.length > 0 },
            { task: "Atur mode eksekusi proses multi-agen menjadi hierarkis atau sekuensial.", hint: "Atur process=Process.hierarchical di konfigurasi Crew.", validate: c => c.length > 0 },
            { task: "Impor AutoGen (ConversableAgent) untuk membangun sistem percakapan dua agen otonom.", hint: "from autogen import ConversableAgent", validate: c => c.includes("ConversableAgent") },
            { task: "Inisialisasi agen asisten AI dan agen penguji kode (Coder & Executor) di AutoGen.", hint: "assistant = ConversableAgent(name='assistant')", validate: c => c.includes("ConversableAgent") },
            { task: "Mulai percakapan otomatis antar agen AutoGen untuk menyelesaikan tugas pemrograman.", hint: "assistant.initiate_chat(coder, message='Buat script Python')", validate: c => c.includes("initiate_chat") },
            { task: "Pantau log jalannya komunikasi dan keputusan otonom agen AI.", hint: "Analisis output langkah demi langkah agen.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 75, category: "AI Engineering", title: "Level 75: Fine-Tuning & Prompt Engineering Strategies",
        desc: "<b>Definisi Konsep Mendalam:</b> Menguasai teknik rekayasa prompt tingkat lanjut (Chain-of-Thought, Few-Shot) dan persiapan dataset kustom untuk proses fine-tuning model LLM.<br><br><b>Poin Penting:</b><br>• Format dataset JSONL untuk fine-tuning OpenAI.<br>• Teknik Chain-of-Thought (CoT).",
        example: `# Contoh struktur dataset JSONL fine-tuning\n# {"messages": [{"role": "system", "content": "Bot"}, {"role": "user", "content": "Hai"}, {"role": "assistant", "content": "Halo!"}]}`,
        tasks: [
            { task: "Buat dataset pelatihan fine-tuning berformat JSONL yang berisi contoh percakapan pesan sistem, pengguna, dan asisten.", hint: "Simpan data baris demi baris berformat JSON objek messages.", validate: c => c.length > 0 },
            { task: "Unggah file dataset pelatihan ke server OpenAI menggunakan Files API.", hint: "client.files.create(file=open('data.jsonl', 'rb'), purpose='fine-tune')", validate: c => c.includes("files.create") },
            { task: "Luncurkan pekerjaan pelatihan fine-tuning model baru menggunakan client.fine_tuning.jobs.create().", hint: "client.fine_tuning.jobs.create(training_file='file_id', model='gpt-4o-mini')", validate: c => c.includes("fine_tuning") },
            { task: "Pantau status kemajuan pelatihan model fine-tuning melalui client.fine_tuning.jobs.retrieve().", hint: "Periksa status job fine-tuning secara berkala.", validate: c => c.includes("fine_tuning") },
            { task: "Gunakan nama model hasil fine-tuning kustom yang telah jadi untuk inferensi permintaan chat completions.", hint: "client.chat.completions.create(model='ft:gpt-4o-mini:...', messages=[...])", validate: c => c.includes("chat.completions.create") },
            { task: "Terapkan strategi prompt engineering Few-Shot dengan menyertakan contoh kasus nyata (contoh input-output) pada prompt.", hint: "Sertakan beberapa contoh demonstrasi sebelum pertanyaan utama.", validate: c => c.length > 0 },
            { task: "Terapkan teknik Chain-of-Thought (CoT) dengan meminta LLM menuliskan tahapan penalaran logis sebelum memberikan kesimpulan.", hint: "Tambahkan instruksi: 'Pikirkan langkah demi langkah sebelum menjawab'.", validate: c => c.length > 0 },
            { task: "Gunakan teknik Role Prompting untuk mendefinisikan keahlian spesifik persona model AI.", hint: "Gunakan kalimat pembuka: 'Anda adalah seorang arsitek software senior'.", validate: c => c.length > 0 },
            { task: "Terapkan pembatasan format keluaran dengan instruksi batasan ketat negatif (Negative Prompting).", hint: "Tambahkan instruksi hal apa saja yang tidak boleh dilakukan model.", validate: c => c.length > 0 },
            { task: "Uji dan evaluasi performa peningkatan akurasi model sebelum dan sesudah fine-tuning.", hint: "Bandingkan kualitas jawaban model dasar vs model kustom.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 76, category: "AI Engineering", title: "Level 76: PyTorch Basics: Tensors & Autograd (Deep Learning)",
        desc: "<b>Definisi Konsep Mendalam:</b> Dasar deep learning menggunakan PyTorch untuk mengelola operasi tensor berkecepatan tinggi dan diferensiasi otomatis (Autograd).<br><br><b>Poin Penting:</b><br>• Pembuatan PyTorch Tensors.<br>• Pelacakan gradien otomatis via <code>requires_grad=True</code>.",
        example: `import torch\n\nx = torch.tensor([2.0], requires_grad=True)\ny = x ** 3\ny.backward()\nprint(x.grad)  # Gradien dy/dx = 3*x^2 = 12`,
        tasks: [
            { task: "Impor torch, buat tensor PyTorch 1D dari list data angka Python.", hint: "t = torch.tensor([1.0, 2.0, 3.0])", validate: c => c.includes("torch") && c.includes("tensor") },
            { task: "Periksa bentuk dimensi (shape) dan tipe data perangkat (device) tensor.", hint: "print(t.shape, t.device)", validate: c => c.includes("shape") },
            { task: "Buat tensor dengan atribut requires_grad=True untuk mengaktifkan pelacakan kalkulasi gradien otomatis.", hint: "x = torch.tensor([4.0], requires_grad=True)", validate: c => c.includes("requires_grad") },
            { task: "Lakukan operasi matematika pada tensor (misal kuadrat) dan hitung turunan gradien menggunakan method .backward().", hint: "y = x * x; y.backward()", validate: c => c.includes("backward") },
            { task: "Ambil nilai hasil turunan gradien tensor menggunakan atribut .grad.", hint: "print(x.grad)", validate: c => c.includes("grad") },
            { task: "Pindahkan tensor dari CPU ke perangkat GPU (CUDA) menggunakan .to('cuda') jika tersedia.", hint: "device = torch.device('cuda' if torch.cuda.is_available() else 'cpu'); t = t.to(device)", validate: c => c.includes("to(") },
            { task: "Lakukan operasi perkalian matriks (matrix multiplication) antar tensor menggunakan operator @ atau torch.matmul().", hint: "matmul = tensor1 @ tensor2", validate: c => c.includes("@") || c.includes("matmul") },
            { task: "Gunakan torch.zeros() dan torch.ones() untuk menginisialisasi tensor dengan nilai nol atau satu.", hint: "zeros = torch.zeros((2, 3))", validate: c => c.includes("zeros") || c.includes("ones") },
            { task: "Ubah struktur bentuk dimensi tensor menggunakan method .reshape() atau .view().", hint: "reshaped = t.reshape((3, 1))", validate: c => c.includes("reshape") || c.includes("view") },
            { task: "Gunakan konteks torch.no_grad() untuk menonaktifkan pelacakan gradien saat fase evaluasi model.", hint: "with torch.no_grad(): # kode evaluasi", validate: c => c.includes("no_grad") }
        ]
    },
    {
        id: 77, category: "AI Engineering", title: "Level 77: Building Neural Networks Sederhana dengan PyTorch",
        desc: "<b>Definisi Konsep Mendalam:</b> Membangun arsitektur jaringan saraf tiruan (Neural Network) dasar menggunakan class turunan <code>torch.nn.Module</code>.<br><br><b>Poin Penting:</b><br>• Mendefinisikan lapisan Linear.<br>• Pemilihan fungsiLoss dan Optimizer.",
        example: `import torch\nimport torch.nn as nn\n\nclass SimpleNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.linear = nn.Linear(10, 1)\n    def forward(self, x):\n        return self.linear(x)`,
        tasks: [
            { task: "Impor torch.nn sebagai nn, buat class Neural Network turunan nn.Module.", hint: "class Model(nn.Module): def __init__(self): super().__init__()", validate: c => c.includes("nn.Module") },
            { task: "Tambahkan lapisan linear fully-connected nn.Linear(in_features, out_features) pada konstruktor __init__.", hint: "self.fc1 = nn.Linear(5, 2)", validate: c => c.includes("nn.Linear") },
            { task: "Definisikan method forward(self, x) untuk mengalirkan data melalui lapisan jaringan saraf.", hint: "def forward(self, x): return torch.relu(self.fc1(x))", validate: c => c.includes("forward") },
            { task: "Buat instance model jaringan saraf tiruan dan cetak struktur arsitekturnya.", hint: "model = Model(); print(model)", validate: c => c.includes("class") },
            { task: "Impor fungsi kerugian (Loss Function) Mean Squared Error dari nn.MSELoss().", hint: "criterion = nn.MSELoss()", validate: c => c.includes("MSELoss") },
            { task: "Impor optimizer SGD atau Adam dari torch.optim untuk memperbarui bobot model.", hint: "optimizer = torch.optim.Adam(model.parameters(), lr=0.01)", validate: c => c.includes("optim") },
            { task: "Tulis loop pelatihan (training loop) dasar: zero_grad, forward pass, loss calculation, backward pass, optimizer step.", hint: "optimizer.zero_grad(); loss.backward(); optimizer.step()", validate: c => c.includes("zero_grad") && c.includes("backward") },
            { task: "Kirim data masukan tensor batch ke dalam model untuk mendapatkan hasil prediksi.", hint: "outputs = model(inputs)", validate: c => c.length > 0 },
            { task: "Hitung nilai loss kesalahan antara prediksi model dan target label asli.", hint: "loss = criterion(outputs, targets)", validate: c => c.length > 0 },
            { task: "Pantau penurunan nilai loss secara bertahap di setiap epoch pelatihan.", hint: "Cetak nilai loss per iterasi epoch.", validate: c => c.length > 0 }
        ]
    },
    {
        id: 78, category: "AI Engineering", title: "Level 78: Hugging Face Transformers & Local LLMs (Ollama / HuggingFaceHub)",
        desc: "<b>Definisi Konsep Mendalam:</b> Menggunakan model open-source mutakhir dari pustaka <code>transformers</code> Hugging Face serta menjalankan LLM lokal via <code>Ollama</code>.<br><br><b>Poin Penting:</b><br>• Memuat pipeline Hugging Face.<br>• Menghubungkan model lokal Ollama ke Python.",
        example: `from transformers import pipeline\n\ngenerator = pipeline('text-generation', model='gpt2')\nprint(generator("Python adalah", max_length=20))`,
        tasks: [
            { task: "Impor pipeline dari pustaka transformers, buat pipa generator teks menggunakan model pra-latih ringan 'gpt2'.", hint: "generator = pipeline('text-generation', model='gpt2')", validate: c => c.includes("pipeline") && c.includes("gpt2") },
            { task: "Jalankan inferensi teks menggunakan pipeline untuk menghasilkan kelanjutan kalimat.", hint: "output = generator('Artificial Intelligence adalah', max_length=30)", validate: c => c.includes("generator(") },
            { task: "Impor AutoTokenizer dan AutoModelForCausalLM untuk memuat model transformer secara manual.", hint: "from transformers import AutoTokenizer, AutoModelForCausalLM", validate: c => c.includes("autotokenizer") && c.includes("automodelforcausallm") },
            { task: "Muat tokenizer dan model bahasa open-source dari repositori Hugging Face Hub.", hint: "tokenizer = AutoTokenizer.from_pretrained('model_name')", validate: c => c.includes("from_pretrained") },
            { task: "Tokenisasi teks masukan menggunakan tokenizer dengan argumen return_tensors='pt'.", hint: "inputs = tokenizer('Halo dunia', return_tensors='pt')", validate: c => c.includes("return_tensors") },
            { task: "Hasilkan token teks baru menggunakan model.generate() dari PyTorch tensor.", hint: "outputs = model.generate(**inputs, max_new_tokens=50)", validate: c => c.includes("model.generate") },
            { task: "Dekode kembali token hasil keluaran model menjadi string teks keterbacaan manusia.", hint: "tokenizer.decode(outputs[0], skip_special_tokens=True)", validate: c => c.includes("tokenizer.decode") },
            { task: "Hubungkan model bahasa lokal yang berjalan di server Ollama menggunakan modul langchain_community.llms Ollama.", hint: "from langchain_community.llms import Ollama; llm = Ollama(model='qwen2.5')", validate: c => c.includes("ollama") },
            { task: "Kirim permintaan kueri teks ke model lokal Ollama melalui pemanggilan .invoke().", hint: "response = llm.invoke('Halo dari Python lokal!')", validate: c => c.includes(".invoke(") },
            { task: "Tulis ringkasan integrasi model open-source lokal vs model komersial cloud.", hint: "Bandingkan keunggulan privasi lokal vs performa cloud.", validate: c => c.length > 5 }
        ]
    },
    {
        id: 79, category: "DevOps", title: "Level 79: Environment Management & Configuration (python-dotenv, Pydantic Settings)",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengelola konfigurasi lingkungan aplikasi secara aman dan terstruktur menggunakan variabel lingkungan (environment variables) serta pustaka Pydantic Settings.<br><br><b>Poin Penting:</b><br>• Memuat file `.env` via <code>python-dotenv</code>.<br>• Validasi tipe data konfigurasi otomatis dengan <code>BaseSettings</code>.",
        example: `from pydantic_settings import BaseSettings\n\nclass Settings(BaseSettings):\n    app_name: str\n    database_url: str\n    class Config:\n        env_file = ".env"`,
        tasks: [
            { task: "Impor load_dotenv dari pustaka python-dotenv, lalu muat konfigurasi dari file .env ke dalam sistem.", hint: "from dotenv import load_dotenv; load_dotenv()", validate: c => c.includes("load_dotenv") },
            { task: "Ambil nilai variabel lingkungan menggunakan fungsi os.getenv('NAMA_VARIABEL', default).", hint: "import os; api_key = os.getenv('API_KEY', 'default_val')", validate: c => c.includes("os.getenv") },
            { task: "Impor BaseSettings dari pydantic_settings untuk membuat class konfigurasi terstruktur.", hint: "class Settings(BaseSettings): port: int = 8000", validate: c => c.includes("basesettings") },
            { task: "Atur konfigurasi kelas dalam BaseSettings untuk membaca file '.env' secara otomatis.", hint: "class Config: env_file = '.env'", validate: c => c.includes("env_file") },
            { task: "Inisialisasi objek pengaturan konfigurasi aplikasi utama.", hint: "settings = Settings()", validate: c => c.includes("settings") },
            { task: "Berikan validasi tipe data port (int) dan debug mode (bool) pada Pydantic Settings.", hint: "Pydantic otomatis memvalidasi tipe data dari environment string.", validate: c => c.includes("int") || c.includes("bool") },
            { task: "Sembunyikan kredensial sensitif agar tidak tercetak saat debugging objek pengaturan.", hint: "Gunakan Field(..., exclude=True) jika diperlukan.", validate: c => c.includes("field") },
            { task: "Atur nilai default cadangan untuk variabel lingkungan opsional.", hint: "Sertakan nilai default pada atribut class Settings.", validate: c => c.includes("=") },
            { task: "Simulasikan penimpaan variabel lingkungan (override) via environment sistem operasi.", hint: "Variabel sistem operasi memiliki prioritas di atas file .env.", validate: c => c.length > 5 },
            { task: "Uji integritas konfigurasi aplikasi saat startup untuk mencegah kegagalan runtime.", hint: "Validasi settings saat aplikasi pertama kali dijalankan.", validate: c => c.length > 5 }
        ]
    },
    {
        id: 80, category: "DevOps", title: "Level 80: Dockerization: Menulis Dockerfile Optimal untuk Python",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengemas aplikasi Python dan seluruh dependensinya ke dalam kontainer Docker mandiri menggunakan Dockerfile yang optimal dan aman.<br><br><b>Poin Penting:</b><br>• Menggunakan base image resmi <code>python:3.11-slim</code>.<br>• Menerapkan tahapan multi-stage build untuk memperkecil ukuran image.",
        example: `# Contoh Dockerfile dasar\nFROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY . .\nCMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`,
        tasks: [
            { task: "Tulis baris instruksi FROM menggunakan image resmi Python slim untuk ukuran yang lebih ringkas.", hint: "FROM python:3.11-slim", validate: c => c.includes("from") },
            { task: "Atur direktori kerja utama di dalam kontainer menggunakan instruksi WORKDIR /app.", hint: "WORKDIR /app", validate: c => c.includes("workdir") },
            { task: "Salin file daftar dependensi requirements.txt terlebih dahulu sebelum menyalin seluruh kode sumber.", hint: "requirements.txt", validate: c => c.includes("copy") && c.includes("requirements") },
            { task: "Jalankan instalasi paket pip dengan opsi --no-cache-dir untuk menghindari penumpukan ukuran cache image.", hint: "RUN pip install --no-cache-dir -r requirements.txt", validate: c => c.includes("run") && c.includes("pip") },
            { task: "Salin seluruh sisa file kode proyek Python ke direktori kerja kontainer.", hint: "COPY . .", validate: c => c.includes("copy") },
            { task: "Buat user non-root di dalam Dockerfile untuk meningkatkan aspek keamanan sistem kontainer.", hint: "RUN useradd -u 1000 appuser && chown -R appuser /app", validate: c => c.includes("useradd") || c.includes("chown") },
            { task: "Tetapkan perintah eksekusi default kontainer menggunakan instruksi CMD.", hint: "CMD [\"python\", \"main.py\"]", validate: c => c.includes("cmd") },
            { task: "Buat file .dockerignore untuk mengecualikan direktori seperti venv, __pycache__, dan file git.", hint: "Tuliskan venv/ dan __pycache__/ di dalam .dockerignore.", validate: c => c.length > 3 },
            { task: "Bangun image Docker lokal melalui perintah terminal docker build.", hint: "docker build -t my-python-app .", validate: c => c.includes("docker build") },
            { task: "Jalankan kontainer Docker secara lokal dengan melakukan port forwarding ke port host.", hint: "docker run -p 8000:8000 my-python-app", validate: c => c.includes("docker run") }
        ]
    },
    {
        id: 81, category: "DevOps", title: "Level 81: Docker Compose untuk Layanan Multi-Container (Web + DB + Redis)",
        desc: "<b>Definisi Konsep Mendalam:</b> Menjalankan dan mengelola arsitektur aplikasi multi-kontainer (Aplikasi Web FastAPI + PostgreSQL + Redis) secara terpadu via <code>docker-compose.yml</code>.<br><br><b>Poin Penting:</b><br>• Definisi layanan (services), jaringan (networks), dan volume.",
        example: `services:\n  web:\n    build: .\n    ports:\n      - "8000:8000"\n    depends_on:\n      - redis\n  redis:\n    image: redis:alpine`,
        tasks: [
            { task: "Tulis struktur file konfigurasi dasar docker-compose.yml dengan blok services.", hint: "Mulai dengan services: (properti version sudah usang di Compose v2).", validate: c => c.includes("services") },
            { task: "Tambahkan layanan kontainer 'redis' menggunakan image resmi redis:alpine.", hint: "redis: image: redis:alpine", validate: c => c.includes("redis") },
            { task: "Tambahkan layanan kontainer basis data 'db' (PostgreSQL) lengkap dengan variabel lingkungan kredensial.", hint: "db: image: postgres:15-alpine dengan environment POSTGRES_USER/PASSWORD.", validate: c => c.includes("postgres") },
            { task: "Tambahkan layanan kontainer aplikasi web 'web' yang dibangun dari Dockerfile lokal.", hint: "web: build: . dan pemetaan port 8000:8000", validate: c => c.includes("build") },
            { task: "Gunakan instruksi depends_on pada layanan web agar menunggu layanan database dan Redis aktif terlebih dahulu.", hint: "depends_on: - db - redis", validate: c => c.includes("depends_on") },
            { task: "Konfigurasikan Docker volumes persisten untuk menyimpan data basis data agar tidak hilang saat kontainer mati.", hint: "volumes: - postgres_data:/var/lib/postgresql/data", validate: c => c.includes("volumes") },
            { task: "Jalankan seluruh kumpulan layanan multi-kontainer di latar belakang menggunakan docker compose up -d.", hint: "docker compose up -d", validate: c => c.includes("docker compose up") },
            { task: "Periksa status kesehatan dan log keluaran seluruh kontainer aktif.", hint: "docker compose logs -f", validate: c => c.includes("docker compose logs") },
            { task: "Hentikan dan bersihkan seluruh kontainer serta jaringan terkait menggunakan docker compose down.", hint: "docker compose down", validate: c => c.includes("docker compose down") },
            { task: "Hubungkan aplikasi Python Anda ke layanan database menggunakan hostname layanan Docker compose ('db' atau 'redis').", hint: "Gunakan URL seperti postgresql://user:pass@db:5432/nama dengan host 'db'.", validate: c => c.includes("db") || c.includes("redis") }
        ]
    },
    {
        id: 82, category: "DevOps", title: "Level 82: CI/CD Pipelines dengan GitHub Actions untuk Python",
        desc: "<b>Definisi Konsep Mendalam:</b> Otomatisasi pengujian kode dan penerapan berkelanjutan (CI/CD) menggunakan alur kerja GitHub Actions untuk proyek Python.<br><br><b>Poin Penting:</b><br>• Berkas konfigurasi YAML di dalam direktori `.github/workflows/`.",
        example: `name: CI\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: '3.11'`,
        tasks: [
            { task: "Buat direktori `.github/workflows/` dan file konfigurasi YAML pipeline CI.", hint: "Buat file .github/workflows/ci.yml", validate: c => c.includes("name:") || c.includes("on:") },
            { task: "Tentukan pemicu pengerjaan alur kerja (on push / pull_request ke branch utama).", hint: "on: [push]", validate: c => c.includes("on:") },
            { task: "Tentukan lingkungan runner mesin virtual eksekusi menggunakan runs-on: ubuntu-latest.", hint: "runs-on: ubuntu-latest", validate: c => c.includes("runs-on") },
            { task: "Gunakan action resmi actions/checkout@v4 untuk mengunduh salinan repositori kode ke runner.", hint: "- uses: actions/checkout@v4", validate: c => c.includes("actions/checkout") },
            { task: "Gunakan action actions/setup-python@v5 untuk menyiapkan versi runtime Python di lingkungan runner.", hint: "- uses: actions/setup-python@v5 dengan parameter python-version.", validate: c => c.includes("actions/setup-python") },
            { task: "Tambahkan langkah instalasi dependensi pip dari file requirements.txt.", hint: "run: pip install -r requirements.txt", validate: c => c.includes("pip install") },
            { task: "Tambahkan langkah eksekusi rangkaian pengujian unit test menggunakan pytest.", hint: "run: pytest", validate: c => c.includes("pytest") },
            { task: "Tambahkan langkah pemindaian kualitas gaya kode menggunakan ruff atau flake8.", hint: "run: ruff check .", validate: c => c.includes("ruff") || c.includes("flake8") },
            { task: "Simulasikan langkah proses build dan push image Docker ke container registry otomatis di dalam pipeline.", hint: "Gunakan action login dan build-push-action.", validate: c => c.includes("docker") || c.includes("build") },
            { task: "Verifikasi status centang hijau laporan keberhasilan jalankan workflow pada tab Actions repositori GitHub.", hint: "Periksa hasil eksekusi pipeline di GitHub.", validate: c => c.length > 3 }
        ]
    },
    {
        id: 83, category: "DevOps", title: "Level 83: Logging Lanjutan, Structured Logging (structlog), & Sentry Error Tracking",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengimplementasikan pencatatan log terstruktur berbasis JSON (<code>structlog</code>) serta pelacakan error produksi secara real-time via <code>Sentry</code>.<br><br><b>Poin Penting:</b><br>• Output log format JSON untuk sistem agregasi log (ELK / Datadog).<br>• Integrasi SDK Sentry untuk penangkapan exception otomatis.",
        example: `import structlog\n\nlogger = structlog.get_logger()\nlogger.info("pengguna_login", user_id=123, status="sukses")`,
        tasks: [
            { task: "Impor structlog, lalu inisialisasi logger terstruktur standar aplikasi.", hint: "import structlog; logger = structlog.get_logger()", validate: c => c.includes("structlog") },
            { task: "Catat log informasi dengan menyertakan argumen kata kunci kontekstual (contextual key-values).", hint: "logger.info('event_terjadi', user_id=45, action='click')", validate: c => c.includes("logger.info") },
            { task: "Konfigurasikan renderer structlog agar mencetak format output log berupa JSON string.", hint: "Atur konfigurasi structlog dengan JSONRenderer.", validate: c => c.includes("json") || c.includes("structlog") },
            { task: "Impor sentry_sdk, lalu inisialisasi pelacakan error Sentry menggunakan DSN proyek Anda.", hint: "import sentry_sdk; sentry_sdk.init(dsn='https://...') ", validate: c => c.includes("sentry_sdk") },
            { task: "Simulasikan penangkapan exception error manual menggunakan sentry_sdk.capture_exception().", hint: "try: 1/0 except Exception as e: sentry_sdk.capture_exception(e)", validate: c => c.includes("capture_exception") },
            { task: "Integrasikan Sentry Middleware ke dalam framework FastAPI untuk menangkap seluruh unhandled exception otomatis.", hint: "from sentry_sdk.integrations.asgi import SentryAsgiMiddleware", validate: c => c.includes("sentry") },
            { task: "Tambahkan informasi konteks pengguna (user scope) ke dalam pelacakan Sentry saat terjadi error.", hint: "sentry_sdk.set_user({'id': 123, 'email': 'user@test.com'})", validate: c => c.includes("set_user") },
            { task: "Kirim pesan kustom peringatan tingkat tinggi (warning/error) ke Sentry.", hint: "sentry_sdk.capture_message('Peringatan sistem hampir penuh!')", validate: c => c.includes("capture_message") },
            { task: "Uji tangkapan error pada endpoint API uji coba dan verifikasi laporan masuk ke dashboard Sentry.", hint: "Akses endpoint pemicu error.", validate: c => c.length > 3 },
            { task: "Tulis praktik terbaik manajemen tingkat keparahan log (log levels) dalam lingkungan produksi.", hint: "Gunakan level INFO untuk audit dan ERROR untuk pengecualian.", validate: c => c.length > 3 }
        ]
    },
    {
        id: 84, category: "DevOps", title: "Level 84: Monitoring & Metrics dengan Prometheus & Python",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengekspos metrik kinerja performa aplikasi Python (waktu respons, jumlah permintaan HTTP) agar dapat dipantau oleh sistem Prometheus.<br><br><b>Poin Penting:</b><br>• Menggunakan pustaka <code>prometheus_client</code>.<br>• Menyediakan endpoint metrik <code>/metrics</code>.",
        example: `from prometheus_client import Counter, generate_latest, CONTENT_TYPE_LATEST\nfrom fastapi import Response\n\nREQUEST_COUNT = Counter('request_total', 'Total HTTP Requests')`,
        tasks: [
            { task: "Impor Counter dari prometheus_client, buat metrik penghitung total permintaan HTTP.", hint: "REQUEST_COUNT = Counter('app_requests_total', 'Total Request')", validate: c => c.includes("counter") },
            { task: "Tambahkan penambahan nilai counter .inc() setiap kali endpoint API backend dipanggil.", hint: "REQUEST_COUNT.inc()", validate: c => c.includes(".inc()") },
            { task: "Impor Histogram untuk mengukur distribusi durasi waktu latensi eksekusi permintaan.", hint: "REQUEST_LATENCY = Histogram('request_latency_seconds', 'Durasi waktu')", validate: c => c.includes("histogram") },
            { task: "Ukur waktu eksekusi menggunakan dekorator pengukur histogram atau konteks waktu.", hint: "with REQUEST_LATENCY.time(): # proses", validate: c => c.includes("time()") },
            { task: "Buat endpoint FastAPI `/metrics` yang menghasilkan keluaran format metrik Prometheus.", hint: "@app.get('/metrics') def metrics(): return Response(generate_latest(), media_type=CONTENT_TYPE_LATEST)", validate: c => c.includes("metrics") },
            { task: "Konfigurasikan server Prometheus eksternal untuk melakukan scraping data metrik dari aplikasi Anda.", hint: "Atur file prometheus.yml dengan target endpoint aplikasi.", validate: c => c.length > 3 },
            { task: "Buat metrik Gauge untuk memantau penggunaan memori atau jumlah koneksi aktif saat ini.", hint: "ACTIVE_USERS = Gauge('active_users', 'Jumlah user aktif')", validate: c => c.includes("gauge") },
            { task: "Uji endpoint metrik menggunakan klien HTTP atau browser.", hint: "Akses http://localhost:8000/metrics", validate: c => c.length > 3 },
            { task: "Hubungkan metrik Prometheus ke dashboard visualisasi Grafana.", hint: "Tambahkan data source Prometheus di Grafana.", validate: c => c.length > 3 },
            { task: "Tulis peringatan (alerting rules) dasar untuk pemantauan kesehatan layanan backend.", hint: "Buat aturan alert saat error rate tinggi.", validate: c => c.length > 3 }
        ]
    },
    {
        id: 85, category: "DevOps", title: "Level 85: Infrastructure as Code (IaC) Dasar dengan Pulumi / AWS CDK Python",
        desc: "<b>Definisi Konsep Mendalam:</b> Mendefinisikan dan menyediakan infrastruktur cloud (server, storage, jaringan) menggunakan bahasa pemrograman Python murni via Pulumi atau AWS CDK.<br><br><b>Poin Penting:</b><br>• Mengelola sumber daya cloud sebagai kode (Infrastructure as Code).",
        example: `import pulumi\nimport pulumi_aws as aws\n\nbucket = aws.s3.Bucket("my-bucket", bucket="my-unique-bucket-name-2026")\npulumi.export("bucket_name", bucket.id)`,
        tasks: [
            { task: "Impor pulumi dan pulumi_aws untuk memulai penulisan skrip IaC Python.", hint: "import pulumi; import pulumi_aws as aws", validate: c => c.includes("pulumi") },
            { task: "Definisikan sumber daya penyimpanan Cloud S3 Bucket baru menggunakan class aws.s3.Bucket.", hint: "bucket = aws.s3.Bucket('my-bucket')", validate: c => c.includes("bucket") },
            { task: "Ekspor nama ID sumber daya S3 menggunakan pulumi.export() agar dapat dilihat di CLI.", hint: "pulumi.export('bucket_id', bucket.id)", validate: c => c.includes("pulumi.export") },
            { task: "Buat definisi grup keamanan jaringan (Security Group) AWS dengan aturan port masuk 80 dan 443.", hint: "sg = aws.ec2.SecurityGroup('web-sg', ingress=[...])", validate: c => c.includes("securitygroup") },
            { task: "Simulasikan pembuatan instans server virtual EC2 berbasis Python Pulumi.", hint: "server = aws.ec2.Instance('web-server', instance_type='t2.micro')", validate: c => c.includes("instance") },
            { task: "Inisialisasi tumpukan (stack) proyek Pulumi baru melalui terminal.", hint: "pulumi stack init dev", validate: c => c.includes("pulumi stack") },
            { task: "Jalankan pratinjau perubahan infrastruktur menggunakan perintah pulumi preview.", hint: "pulumi preview", validate: c => c.includes("pulumi preview") },
            { task: "Terapkan pembuatan infrastruktur cloud sungguhan menggunakan pulumi up.", hint: "pulumi up", validate: c => c.includes("pulumi up") },
            { task: "Hancurkan sumber daya infrastruktur cloud jika sudah tidak digunakan dengan pulumi destroy.", hint: "pulumi destroy", validate: c => c.includes("pulumi destroy") },
            { task: "Tulis praktik terbaik manajemen state file infrastruktur cloud secara aman.", hint: "Simpan state Pulumi di backend terenkripsi cloud (S3/Pulumi Service).", validate: c => c.length > 3 }
        ]
    },
    {
        id: 86, category: "DevOps", title: "Level 86: Serverless Functions (AWS Lambda / Google Cloud Functions)",
        desc: "<b>Definisi Konsep Mendalam:</b> Membangun fungsi komputasi nir-server (serverless) berbasis event menggunakan AWS Lambda atau Google Cloud Functions dengan Python.<br><br><b>Poin Penting:</b><br>• Menulis fungsi penanganan handler (<code>event, context</code>).",
        example: `def lambda_handler(event, context):\n    return {\n        'statusCode': 200,\n        'body': 'Halo dari AWS Lambda!'\n    }`,
        tasks: [
            { task: "Buat fungsi handler AWS Lambda standar dengan parameter event dan context.", hint: "def handler(event, context): return {'statusCode': 200}", validate: c => c.includes("event") && c.includes("context") },
            { task: "Ekstrak parameter query string atau body JSON yang dikirimkan melalui event API Gateway AWS.", hint: "body = event.get('body', {})", validate: c => c.includes("get('body'") || c.includes("event") },
            { task: "Kembalikan struktur respons HTTP standar berformat dictionary (statusCode, headers, body).", hint: "return {'statusCode': 200, 'body': json.dumps({'msg': 'sukses'})}", validate: c => c.includes("statuscode") },
            { task: "Gunakan pustaka Mangum untuk membungkus aplikasi FastAPI agar dapat berjalan di atas AWS Lambda.", hint: "from mangum import Mangum; handler = Mangum(app)", validate: c => c.includes("mangum") },
            { task: "Simulasikan pemanggilan fungsi serverless secara lokal menggunakan kerangka kerja Serverless atau AWS SAM.", hint: "sam local invoke", validate: c => c.includes("sam") || c.includes("serverless") },
            { task: "Konfigurasikan izin peran IAM (Identity and Access Management) fungsi untuk mengakses DynamoDB atau S3.", hint: "Atur role execution policy pada file template serverless.", validate: c => c.length > 3 },
            { task: "Tangkap event pemicu dari layanan cloud lain (misal: file baru diunggah ke S3 bucket).", hint: "Periksa struktur event['Records'] dari S3.", validate: c => c.includes("records") || c.includes("event") },
            { task: "Optimalkan ukuran paket deployment fungsi serverless dengan hanya menyertakan dependensi esensial.", hint: "Gunakan layer Lambda atau hapus file cache yang tidak perlu.", validate: c => c.length > 3 },
            { task: "Terapkan pemantauan fungsi serverless menggunakan CloudWatch Logs.", hint: "Cetak log dengan print() atau logging untuk pemantauan CloudWatch.", validate: c => c.length > 3 },
            { task: "Tulis ringkasan arsitektur serverless vs server tradisional.", hint: "Model bayar sesuai penggunaan (pay-as-you-go) tanpa manajemen OS.", validate: c => c.length > 3 }
        ]
    },
    {
        id: 87, category: "DevOps", title: "Level 87: Cloud Storage Integration (AWS S3 / Google Cloud Storage via Boto3)",
        desc: "<b>Definisi Konsep Mendalam:</b> Berinteraksi secara programatik dengan layanan penyimpanan objek cloud (AWS S3) menggunakan pustaka resmi SDK Python <code>boto3</code>.<br><br><b>Poin Penting:</b><br>• Inisialisasi klien S3 via <code>boto3.client('s3')</code>.<br>• Mengunggah dan mengunduh berkas.",
        example: `import boto3\n\ns3 = boto3.client('s3')\ns3.upload_file('lokal.txt', 'nama-bucket', 'remote.txt')`,
        tasks: [
            { task: "Impor boto3, buat klien layanan AWS S3 menggunakan boto3.client('s3').", hint: "s3_client = boto3.client('s3')", validate: c => c.includes("boto3") },
            { task: "Unggah file lokal ke S3 bucket menggunakan method upload_file().", hint: "s3_client.upload_file('file.txt', 'bucket-name', 'path/file.txt')", validate: c => c.includes("upload_file") },
            { task: "Unduh file dari S3 bucket ke penyimpanan lokal menggunakan method download_file().", hint: "s3_client.download_file('bucket-name', 'remote.txt', 'lokal.txt')", validate: c => c.includes("download_file") },
            { task: "Buat daftar (list) seluruh objek file yang ada di dalam bucket S3 tertentu.", hint: "response = s3_client.list_objects_v2(Bucket='bucket-name')", validate: c => c.includes("list_objects") },
            { task: "Hapus objek file dari S3 bucket menggunakan method delete_object().", hint: "s3_client.delete_object(Bucket='...', Key='...')", validate: c => c.includes("delete_object") },
            { task: "Hasilkan URL pra-tanda tangan (Pre-signed URL) temporer untuk akses unduh file privat yang aman.", hint: "url = s3_client.generate_presigned_url('get_object', Params={...}, ExpiresIn=3600)", validate: c => c.includes("presigned") },
            { task: "Buat bucket S3 baru secara programatik melalui boto3.", hint: "s3_client.create_bucket(Bucket='nama-baru', ...)", validate: c => c.includes("create_bucket") },
            { task: "Tangkap penanganan error ClientError saat operasi S3 gagal.", hint: "from botocore.exceptions import ClientError; try: ... except ClientError as e:", validate: c => c.includes("clienterror") },
            { task: "Gunakan resource boto3 tingkat tinggi (High-level S3 Resource) untuk orientasi objek yang lebih mudah.", hint: "s3_resource = boto3.resource('s3'); bucket = s3_resource.Bucket('name')", validate: c => c.includes("resource") },
            { task: "Tulis praktik terbaik manajemen hak akses keamanan bucket S3 (mencegah public exposure).", hint: "Aktifkan S3 Block Public Access.", validate: c => c.length > 3 }
        ]
    },
    {
        id: 88, category: "DevOps", title: "Level 88: Kubernetes Basics untuk Aplikasi Python (Deployments & Services)",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengorkestrasi penyebaran kontainer aplikasi Python di klaster Kubernetes menggunakan objek manifes <code>Deployment</code> dan <code>Service</code>.<br><br><b>Poin Penting:</b><br>• Menulis file manifes YAML Kubernetes.<br>• Mengelola replika pod dan load balancing.",
        example: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: python-app\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: python\n  template:\n    metadata:\n      labels:\n        app: python\n    spec:\n      containers:\n        - name: app\n          image: python-app:1.0\n          ports:\n            - containerPort: 8000`,
        tasks: [
            { task: "Tulis file manifes Kubernetes kind: Deployment dengan konfigurasi nama dan jumlah replika pod (replicas: 3).", hint: "Definisikan apiVersion: apps/v1 dan kind: Deployment.", validate: c => c.includes("deployment") },
            { task: "Tentukan spesifikasi kontainer aplikasi image Docker dan port layanan pada manifes Deployment.", hint: "Atur kontainer image dan port containerPort: 8000.", validate: c => c.includes("image") || c.includes("containerport") },
            { task: "Tulis file manifes Kubernetes kind: Service tipe ClusterIP atau LoadBalancer untuk mengekspos aplikasi.", hint: "Definisikan kind: Service dengan targetPort.", validate: c => c.includes("service") },
            { task: "Terapkan pembuatan objek ke klaster Kubernetes menggunakan perintah kubectl apply -f.", hint: "kubectl apply -f deployment.yaml", validate: c => c.includes("kubectl apply") },
            { task: "Periksa status daftar pod yang berjalan menggunakan kubectl get pods.", hint: "kubectl get pods", validate: c => c.includes("kubectl get pods") },
            { task: "Periksa status layanan service yang aktif menggunakan kubectl get services.", hint: "kubectl get svc", validate: c => c.includes("kubectl get svc") },
            { task: "Lakukan pembaruan citra image kontainer (rolling update) secara langsung di Kubernetes.", hint: "kubectl set image deployment/python-app python=new-image:v2", validate: c => c.includes("kubectl set image") },
            { task: "Periksa log dari pod aplikasi yang sedang berjalan menggunakan kubectl logs.", hint: "kubectl logs pod-name", validate: c => c.includes("kubectl logs") },
            { task: "Simulasikan penghapusan penyebaran aplikasi dari klaster menggunakan kubectl delete.", hint: "kubectl delete -f deployment.yaml", validate: c => c.includes("kubectl delete") },
            { task: "Tulis ringkasan arsitektur Kubernetes dalam penskalaan otomatis (Horizontal Pod Autoscaler).", hint: "Pahami cara kerja penskalaan berbasis penggunaan CPU/Memory.", validate: c => c.length > 3 }
        ]
    },
    {
        id: 89, category: "Security & Performance", title: "Level 89: Cryptography di Python: Hashing (Bcrypt) & Enkripsi Simetris/Asimetris",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengamankan data sensitif menggunakan fungsi hashing aman (Bcrypt), enkripsi simetris (Fernet), serta kriptografi asimetris.<br><br><b>Poin Penting:</b><br>• Enkripsi simetris dengan pustaka <code>cryptography</code>.<br>• Hashing sandi tahan serangan brute-force.",
        example: `from cryptography.fernet import Fernet\n\nkey = Fernet.generate_key()\ncipher = Fernet(key)\ntoken = cipher.encrypt(b"Data rahasia")\nprint(cipher.decrypt(token))`,
        tasks: [
            { task: "Impor Fernet dari cryptography.fernet, lalu buat kunci enkripsi simetris baru.", hint: "key = Fernet.generate_key()", validate: c => c.includes("fernet") },
            { task: "Inisialisasi objek cipher menggunakan kunci simetris yang telah dibuat.", hint: "cipher = Fernet(key)", validate: c => c.includes("fernet(") },
            { task: "Enkripsi data byte rahasia menggunakan method .encrypt().", hint: "encrypted = cipher.encrypt(b'Pesan rahasia')", validate: c => c.includes("encrypt") },
            { task: "Dekripsi kembali data terenkripsi menjadi teks aslinya menggunakan method .decrypt().", hint: "decrypted = cipher.decrypt(encrypted)", validate: c => c.includes("decrypt") },
            { task: "Gunakan pustaka bcrypt untuk menghasilkan hash sandi dengan salt otomatis.", hint: "import bcrypt; hashed = bcrypt.hashpw(b'password', bcrypt.gensalt())", validate: c => c.includes("bcrypt") },
            { task: "Verifikasi pencocokan sandi teks biasa dengan hash bcrypt menggunakan bcrypt.checkpw().", hint: "bcrypt.checkpw(b'password', hashed)", validate: c => c.includes("checkpw") },
            { task: "Hasilkan hash kriptografi standar SHA-256 menggunakan modul bawaan hashlib.", hint: "import hashlib; hash_val = hashlib.sha256(b'teks').hexdigest(). Catatan: SHA-256 cocok untuk checksum, bukan untuk menyimpan password (pakai bcrypt).", validate: c => c.includes("hashlib") },
            { task: "Simulasikan penandatanganan data (Digital Signature) menggunakan kunci privat asimetris.", hint: "Gunakan modul RSA cryptography untuk tanda tangan.", validate: c => c.length > 3 },
            { task: "Simulasikan verifikasi tanda tangan digital menggunakan kunci publik asimetris.", hint: "Verifikasi keaslian pesan tanda tangan.", validate: c => c.length > 3 },
            { task: "Tulis praktik terbaik manajemen penyimpanan kunci rahasia (secret keys) aplikasi.", hint: "Jangan menulis kunci rahasia langsung di kode sumber; simpan di environment variable atau secret manager.", validate: c => c.length > 3 }
        ]
    },
    {
        id: 90, category: "Security & Performance", title: "Level 90: Secure Coding Practices & OWASP Top 10 Mitigation",
        desc: "<b>Definisi Konsep Mendalam:</b> Mencegah celah kerentanan keamanan web kritis berdasarkan standar OWASP Top 10 (SQL Injection, XSS, CSRF, Broken Authentication).<br><br><b>Poin Penting:</b><br>• Menggunakan kueri berparameter ORM untuk mencegah SQL Injection.<br>• Sanitasi input pengguna.",
        example: `# Mencegah SQL Injection dengan ORM SQLAlchemy\nuser = session.query(User).filter(User.username == username).first()`,
        tasks: [
            { task: "Gunakan kueri berparameter ORM SQLAlchemy untuk mencegah kerentanan SQL Injection (hindari string formatting mentah).", hint: "Gunakan filter dengan operator perbandingan ORM.", validate: c => c.includes("filter") || c.includes("query") },
            { task: "Lakukan sanitasi dan escape input string HTML pengguna untuk mencegah serangan Cross-Site Scripting (XSS).", hint: "Gunakan pustaka escape HTML standar.", validate: c => c.includes("escape") || c.includes("html") },
            { task: "Terapkan token pencegahan Cross-Site Request Forgery (CSRF) pada formulir web POST.", hint: "Sertakan token unik pada setiap sesi formulir.", validate: c => c.length > 3 },
            { task: "Validasi ketat tipe data masukan menggunakan Pydantic untuk mencegah celah Mass Assignment.", hint: "Gunakan model Pydantic terstruktur.", validate: c => c.includes("basemodel") },
            { task: "Pastikan cookies sesi web ditandai dengan atribut HttpOnly, Secure, dan SameSite.", hint: "Atur parameter keamanan cookies respons HTTP.", validate: c => c.includes("httponly") || c.includes("cookie") },
            { task: "Nonaktifkan fitur pemrosesan XML External Entity (XXE) yang rentan pada parser XML Python.", hint: "Gunakan parser XML aman defusedxml.", validate: c => c.includes("defusedxml") || c.includes("xml") },
            { task: "Hindari penggunaan fungsi berbahaya eval() atau exec() untuk memproses data masukan pengguna tak tepercaya.", hint: "Gunakan alternatif parsing aman (misal ast.literal_eval).", validate: c => !c.includes("eval(") },
            { task: "Terapkan manajemen kontrol akses ketat (Broken Authentication mitigation) pada endpoint admin.", hint: "Validasi peran role user secara server-side.", validate: c => c.length > 3 },
            { task: "Gunakan header keamanan HTTP (Content Security Policy - CSP) untuk membatasi eksekusi skrip eksternal.", hint: "Atur header CSP pada middleware respons.", validate: c => c.includes("csp") || c.includes("header") },
            { task: "Lakukan audit kode keamanan secara rutin menggunakan alat pemindaian otomatis.", hint: "Gunakan pemindai kerentanan kode Python.", validate: c => c.length > 3 }
        ]
    },
    {
        id: 91, category: "Security & Performance", title: "Level 91: Memory Profiling & Leak Detection (tracemalloc, memory_profiler)",
        desc: "<b>Definisi Konsep Mendalam:</b> Menganalisis alokasi penggunaan memori RAM serta melacak kebocoran memori (memory leak) di aplikasi Python menggunakan modul bawaan <code>tracemalloc</code>.<br><br><b>Poin Penting:</b><br>• Memulai pelacakan alokasi dengan <code>tracemalloc.start()</code>.<br>• Mengambil snapshot pembanding memori.",
        example: `import tracemalloc\n\ntracemalloc.start()\n# Blok kode yang dianalisis\nsnapshot = tracemalloc.take_snapshot()\ntop_stats = snapshot.statistics('lineno')\nfor stat in top_stats[:3]: print(stat)`,
        tasks: [
            { task: "Impor tracemalloc, lalu aktifkan pelacakan alokasi memori menggunakan tracemalloc.start().", hint: "import tracemalloc; tracemalloc.start()", validate: c => c.includes("tracemalloc") },
            { task: "Ambil snapshot status memori saat ini menggunakan tracemalloc.take_snapshot().", hint: "snapshot = tracemalloc.take_snapshot()", validate: c => c.includes("take_snapshot") },
            { task: "Ambil statistik alokasi memori berdasarkan nomor baris kode (lineno) menggunakan snapshot.statistics().", hint: "stats = snapshot.statistics('lineno')", validate: c => c.includes("statistics") },
            { task: "Cetak 5 baris kode teratas yang paling banyak mengonsumsi alokasi memori RAM.", hint: "Iterasi dan cetak statistik teratas.", validate: c => c.includes("print") },
            { task: "Bandingkan dua snapshot memori berbeda untuk mendeteksi potensi kebocoran memori (memory leak).", hint: "diff = snapshot2.compare_to(snapshot1, 'lineno')", validate: c => c.includes("compare_to") },
            { task: "Gunakan dekorator @profile dari pustaka memory_profiler untuk analisis baris per baris.", hint: "from memory_profiler import profile; @profile def fungsi(): ...", validate: c => c.includes("profile") },
            { task: "Jalankan skrip pemprofilan memori melalui perintah terminal mprof run.", hint: "mprof run script.py", validate: c => c.includes("mprof") },
            { task: "Bersihkan objek besar yang tidak terpakai secara manual dan jalankan garbage collection.", hint: "import gc; gc.collect()", validate: c => c.includes("gc.collect") },
            { task: "Ukur penggunaan memori puncak (peak memory) aplikasi selama proses komputasi berat.", hint: "Gunakan tracemalloc.get_traced_memory()", validate: c => c.includes("get_traced_memory") },
            { task: "Hentikan pelacakan tracemalloc setelah analisis selesai.", hint: "tracemalloc.stop()", validate: c => c.includes("tracemalloc.stop") }
        ]
    },
    {
        id: 92, category: "Security & Performance", title: "Level 92: Cython & PyPy: Mempercepat Python Mendekati Bahasa C",
        desc: "<b>Definisi Konsep Mendalam:</b> Mempercepat eksekusi program Python komputasi intensif menggunakan kompiler <code>Cython</code> dan interpreter JIT <code>PyPy</code>.<br><br><b>Poin Penting:</b><br>• Penulisan file ekstensi <code>.pyx</code> dengan anotasi tipe data statis C.",
        example: `# Contoh file kustom Cython .pyx\n# cpdef int jumlah(int a, int b): return a + b`,
        tasks: [
            { task: "Pahami konsep dasar Cython sebagai jembatan antara bahasa Python dan kode C termuat.", hint: "Cython mengompilasi kode Python menjadi modul C biner.", validate: c => c.length > 3 },
            { task: "Buat file skrip Cython beresolusi ekstensi '.pyx' dengan mendefinisikan fungsi bertipe data statis (cdef / cpdef).", hint: "cpdef int hitung(int x): return x * 2", validate: c => c.includes("cpdef") || c.includes("cdef") },
            { task: "Buat file konfigurasi setup.py menggunakan setuptools dan Cython.Build.cythonize.", hint: "from setuptools import setup; from Cython.Build import cythonize; setup(ext_modules=cythonize('file.pyx'))", validate: c => c.includes("cythonize") },
            { task: "Kompilasi file Cython menjadi modul ekstensi biner C menggunakan perintah terminal python setup.py build_ext --inplace.", hint: "python setup.py build_ext --inplace", validate: c => c.includes("build_ext") },
            { task: "Impor modul hasil kompilasi Cython ke dalam skrip Python standar Anda.", hint: "import file_pyx", validate: c => c.includes("import") },
            { task: "Bandingkan kecepatan eksekusi fungsi murni Python vs fungsi terkompilasi Cython.", hint: "Cython memberikan peningkatan kecepatan berkali-kali lipat.", validate: c => c.length > 3 },
            { task: "Pahami keunggulan interpreter JIT (Just-In-Time) PyPy dalam mempercepat eksekusi perulangan tanpa kompilasi manual.", hint: "PyPy menjalankan bytecode Python dengan eksekusi JIT dinamis.", validate: c => c.length > 3 },
            { task: "Hindari penggunaan objek dinamis Python (seperti list umum) di dalam fungsi kritis Cython untuk performa maksimal.", hint: "Gunakan tipe array C atau memoryview numpy.", validate: c => c.length > 3 },
            { task: "Uji benchmark kecepatan eksekusi menggunakan timeit pada modul Cython.", hint: "Gunakan timeit untuk mengukur modul.", validate: c => c.includes("timeit") },
            { task: "Tulis ringkasan kapan waktu yang tepat menggunakan Cython (hanya pada fungsi bottleneck CPU).", hint: "Fokuskan optimasi pada fungsi yang paling sering dipanggil.", validate: c => c.length > 3 }
        ]
    },
    {
        id: 93, category: "Security & Performance", title: "Level 93: Advanced Concurrency: Asyncio & Task Groups (Python 3.11+)",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengelola konkurensi asinkron terstruktur modern menggunakan fitur <code>asyncio.TaskGroup</code> (Python 3.11+) untuk penanganan error yang aman.<br><br><b>Poin Penting:</b><br>• Pengelolaan banyak coroutine terstruktur dalam konteks <code>async with</code>.",
        example: `import asyncio\n\nasync def main():\n    async with asyncio.TaskGroup() as tg:\n        task1 = tg.create_task(tugas_satu())\n        task2 = tg.create_task(tugas_dua())\n    print("Semua tugas selesai dengan aman!")`,
        tasks: [
            { task: "Buat beberapa fungsi async coroutine sederhana yang mensimulasikan jeda jaringan (asyncio.sleep).", hint: "async def fetch(id): await asyncio.sleep(0.1); return id", validate: c => c.includes("async def") },
            { task: "Impor asyncio, buat fungsi utama async main().", hint: "async def main():", validate: c => c.includes("asyncio") },
            { task: "Gunakan context manager async with asyncio.TaskGroup() as tg untuk mengelompokkan tugas.", hint: "async with asyncio.TaskGroup() as tg:", validate: c => c.includes("taskgroup") },
            { task: "Gunakan tg.create_task() di dalam TaskGroup untuk mendaftarkan coroutine konkuren.", hint: "t1 = tg.create_task(fetch(1))", validate: c => c.includes("create_task") },
            { task: "Amati bagaimana TaskGroup secara otomatis menunggu (await) seluruh tugas selesai saat keluar dari blok with.", hint: "TaskGroup otomatis melakukan join pada semua task anak.", validate: c => c.length > 3 },
            { task: "Simulasikan penanganan exception error di dalam TaskGroup (jika satu tugas gagal, tugas lain dibatalkan otomatis).", hint: "TaskGroup membatalkan task lain saat terjadi ExceptionGroup.", validate: c => c.length > 3 },
            { task: "Tangkap ExceptionGroup menggunakan blok try-except untuk menangani kegagalan multi-tugas.", hint: "except* Exception as e: print(e)", validate: c => c.includes("except") },
            { task: "Jalankan fungsi utama async menggunakan asyncio.run(main()).", hint: "asyncio.run(main())", validate: c => c.includes("asyncio.run") },
            { task: "Bandingkan penggunaan lama asyncio.gather() vs asyncio.TaskGroup modern.", hint: "TaskGroup menawarkan pengelolaan siklus hidup dan pembatalan yang jauh lebih aman.", validate: c => c.length > 3 },
            { task: "Uji performa konkurensi asinkron untuk pemanggilan banyak permintaan HTTP bersamaan.", hint: "Gunakan httpx async client bersama TaskGroup.", validate: c => c.length > 3 }
        ]
    },
    {
        id: 94, category: "Security & Performance", title: "Level 94: Custom C Extensions untuk Python",
        desc: "<b>Definisi Konsep Mendalam:</b> Menulis ekstensi bahasa C murni secara manual yang dapat dimuat dan dieksekusi langsung di dalam program interpreter Python.<br><br><b>Poin Penting:</b><br>• Menggunakan header pustaka C resmi <code>Python.h</code>.<br>• Mendefinisikan struktur metode modul C.",
        example: `# Contoh kerangka ekstensi C (module.c)\n# include <Python.h>\n// static PyObject* custom_func(PyObject* self, PyObject* args) { ... }`,
        tasks: [
            { task: "Pahami konsep integrasi CPython API untuk memperluas fungsionalitas Python dengan bahasa C.", hint: "Python menyediakan header C standar untuk interaksi interpreter.", validate: c => c.length > 3 },
            { task: "Tulis file sumber C dengan menyertakan header pustaka utama #include <Python.h>.", hint: "#include <Python.h>", validate: c => c.includes("python.h") },
            { task: "Definisikan fungsi C dengan tipe pengembalian PyObject* untuk menerima argumen dari Python.", hint: "PyObject* my_func(PyObject* self, PyObject* args)", validate: c => c.includes("pyobject") },
            { task: "Gunakan fungsi PyArg_ParseTuple() untuk mengurai argumen Python ke dalam variabel tipe data C.", hint: "PyArg_ParseTuple(args, 'i', &val)", validate: c => c.includes("pyarg_parsetuple") },
            { task: "Konversikan hasil perhitungan C kembali menjadi objek Python menggunakan Py_BuildValue().", hint: "return Py_BuildValue('i', result)", validate: c => c.includes("py_buildvalue") },
            { task: "Daftarkan daftar metode fungsi modul C ke dalam struktur PyMethodDef.", hint: "static PyMethodDef MyMethods[] = { ... }", validate: c => c.includes("pymethoddef") },
            { task: "Definisikan fungsi inisialisasi modul C PyInit_namamodul.", hint: "PyMODINIT_FUNC PyInit_mymodule(void)", validate: c => c.includes("pymodinit_func") || c.includes("pyinit_") },
            { task: "Buat file setup.py untuk mengompilasi ekstensi C secara otomatis.", hint: "from setuptools import setup, Extension; setup(ext_modules=[Extension('mymodule', sources=['module.c'])])", validate: c => c.includes("extension") },
            { task: "Kompilasi dan instal ekstensi C lokal via perintah terminal python setup.py build_ext --inplace.", hint: "Jalankan perintah build setup.py.", validate: c => c.includes("build_ext") },
            { task: "Impor dan uji fungsi ekstensi C kustom Anda di dalam skrip Python.", hint: "import mymodule; mymodule.custom_func()", validate: c => c.includes("import") }
        ]
    },
    {
        id: 95, category: "Security & Performance", title: "Level 95: Network Security & SSL/TLS Handshake dengan Python",
        desc: "<b>Definisi Konsep Mendalam:</b> Mengamankan komunikasi jaringan komputer melalui implementasi protokol SSL/TLS, sertifikat digital, dan enkripsi socket.<br><br><b>Poin Penting:</b><br>• Menggunakan modul <code>ssl</code> Python.<br>• Membungkus socket TCP biasa menjadi secure socket.",
        example: `import socket\nimport ssl\n\ncontext = ssl.create_default_context()\nwith socket.create_connection(('www.python.org', 443)) as sock:\n    with context.wrap_socket(sock, server_hostname='www.python.org') as ssock:\n        print(ssock.version())`,
        tasks: [
            { task: "Impor modul ssl dan socket untuk menginisialisasi keamanan jaringan.", hint: "import socket; import ssl", validate: c => c.includes("ssl") && c.includes("socket") },
            { task: "Buat konteks SSL aman default menggunakan ssl.create_default_context().", hint: "context = ssl.create_default_context()", validate: c => c.includes("create_default_context") },
            { task: "Buat koneksi socket TCP klien ke server target pada port HTTPS standar (443).", hint: "sock = socket.create_connection(('domain.com', 443))", validate: c => c.includes("create_connection") },
            { task: "Bungkus socket TCP biasa dengan konteks SSL menggunakan context.wrap_socket().", hint: "secure_sock = context.wrap_socket(sock, server_hostname='domain.com')", validate: c => c.includes("wrap_socket") },
            { task: "Periksa versi protokol SSL/TLS aktif dari sambungan aman yang terbentuk.", hint: "secure_sock.version()", validate: c => c.includes("version") },
            { task: "Ambil detail informasi sertifikat digital server menggunakan secure_sock.getpeercert().", hint: "cert = secure_sock.getpeercert()", validate: c => c.includes("getpeercert") },
            { task: "Konfigurasikan server socket Python untuk menerima koneksi masuk terenkripsi SSL.", hint: "context.wrap_socket(server_sock, server_side=True)", validate: c => c.includes("server_side") },
            { task: "Muat file sertifikat publik (.crt) dan kunci privat (.key) kustom ke dalam konteks SSL.", hint: "context.load_cert_chain(certfile='server.crt', keyfile='server.key')", validate: c => c.includes("load_cert_chain") },
            { task: "Atur penegakan validasi sertifikat ketat untuk mencegah serangan Man-in-the-Middle (MitM).", hint: "Atur verify_mode ke CERT_REQUIRED.", validate: c => c.includes("verify_mode") || c.includes("cert_required") },
            { task: "Uji penanganan error sertifikat kedaluwarsa atau tidak valid pada klien.", hint: "Tangkap exception ssl.SSLError saat handshake gagal.", validate: c => c.includes("sslerror") || c.includes("try") }
        ]
    },
    {
        id: 96, category: "Security & Performance", title: "Level 96: Static Security Analysis (Bandit, Flake8, Black, Ruff)",
        desc: "<b>Definisi Konsep Mendalam:</b> Melakukan analisis keamanan statis otomatis serta pemindaian kerentanan kode menggunakan alat industri <code>Bandit</code>, <code>Ruff</code>, dan <code>Black</code>.<br><br><b>Poin Penting:</b><br>• Pemindaian celah keamanan kode dengan <code>Bandit</code>.<br>• Pemeriksaan gaya dan format kode otomatis.",
        example: `# Contoh perintah terminal pemindaian keamanan\n# bandit -r .\n# ruff check .`,
        tasks: [
            { task: "Instal dan jalankan pemindai keamanan statis Bandit pada proyek Python Anda untuk mendeteksi celah kerentanan.", hint: "bandit -r .", validate: c => c.includes("bandit") },
            { task: "Pahami bagaimana Bandit mendeteksi penggunaan fungsi berbahaya seperti eval(), hardcoded passwords, atau konfigurasi debug.", hint: "Bandit menandai pola kode berisiko tinggi.", validate: c => c.length > 3 },
            { task: "Instal dan jalankan alat linter kilat Ruff untuk memeriksa kesalahan sintaks dan gaya penulisan kode.", hint: "ruff check .", validate: c => c.includes("ruff") },
            { task: "Perbaiki masalah gaya kode otomatis menggunakan fitur perbaikan otomatis Ruff.", hint: "ruff check --fix .", validate: c => c.includes("--fix") },
            { task: "Gunakan pemformat kode otomatis Black untuk memastikan seluruh baris kode mematuhi standar PEP 8.", hint: "black .", validate: c => c.includes("black") },
            { task: "Konfigurasikan file pyproject.toml untuk mengatur aturan pengecualian linter dan formatter.", hint: "Atur konfigurasi tool.black dan tool.ruff di pyproject.toml.", validate: c => c.includes("pyproject.toml") || c.includes("tool") },
            { task: "Integrasikan pemeriksaan Bandit dan Ruff ke dalam tahapan pipeline CI/CD GitHub Actions.", hint: "Tambahkan langkah linter di file workflow YAML.", validate: c => c.length > 3 },
            { task: "Atur ambang batas tingkat keparahan (severity level) pelaporan error Bandit.", hint: "Gunakan parameter -ll atau -iii pada perintah bandit.", validate: c => c.includes("-l") || c.includes("bandit") },
            { task: "Tinjau laporan hasil pemindaian statis untuk membersihkan kode dari potensi eksploitasi.", hint: "Pastikan skor pemindaian keamanan bersih tanpa peringatan merah.", validate: c => c.length > 3 },
            { task: "Tulis ringkasan kebijakan standar keamanan penulisan kode tim pengembang perusahaan.", hint: "Wajibkan lolos linter dan pemindai Bandit sebelum melakukan merge kode.", validate: c => c.length > 3 }
        ]
    },
    {
        id: 97, category: "Enterprise Mastery", title: "Level 97: Enterprise Microservices Architecture dengan Python",
        desc: "<b>Definisi Konsep Mendalam:</b> Merancang arsitektur sistem layanan terdistribusi (microservices) menggunakan Python untuk memecah aplikasi monolitik menjadi layanan independen.<br><br><b>Poin Penting:</b><br>• Komunikasi antar layanan via HTTP/gRPC.<br>• Service discovery dan API Gateway.",
        example: `from fastapi import FastAPI\n\napp = FastAPI(title=\"UserService\")\n\n@app.get(\"/users/{id}\")\ndef get_user(id: int):\n    return {\"user_id\": id, \"service\": \"user-microservice\"}`,
        tasks: [
            { task: "Rancang struktur proyek FastAPI terpisah untuk layanan microservice pengguna (User Service) dan layanan pesanan (Order Service).", hint: "Buat direktori terpisah untuk setiap layanan microservice.", validate: c => c.includes("fastapi") },
            { task: "Gunakan pustaka HTTP client seperti httpx di layanan order untuk melakukan komunikasi sinkron (REST call) ke User Service.", hint: "import httpx; response = httpx.get('http://user-service/users/1')", validate: c => c.includes("httpx") },
            { task: "Terapkan pola Circuit Breaker untuk mencegah kegagalan beruntun (cascading failures) antar layanan microservice.", hint: "Gunakan pustaka seperti pybreaker untuk mengisolasi kegagalan.", validate: c => c.includes("breaker") || c.includes("pybreaker") },
            { task: "Konfigurasikan Service Discovery sederhana agar layanan dapat saling mengenali alamat jaringan secara dinamis.", hint: "Gunakan registri layanan terpusat.", validate: c => c.length > 3 },
            { task: "Terapkan pengelolaan Distributed Tracing untuk melacak jalur permintaan request yang melintasi banyak microservice.", hint: "Sertakan header trace ID pada setiap HTTP request antar layanan.", validate: c => c.length > 3 },
            { task: "Simulasikan komunikasi asinkron antar microservice menggunakan message broker (RabbitMQ / Kafka).", hint: "Kirim event pesan alih-alih pemanggilan HTTP langsung.", validate: c => c.length > 3 },
            { task: "Buat API Gateway terpusat yang meneruskan rute permintaan ke microservice backend yang tepat.", hint: "Gateway bertindak sebagai pintu gerbang tunggal klien.", validate: c => c.length > 3 },
            { task: "Terapkan manajemen database terdistribusi di mana setiap microservice memiliki database mandiri (Database-per-service).", hint: "Jangan berbagi database fisik yang sama antar layanan.", validate: c => c.length > 3 },
            { task: "Uji ketahanan sistem microservice dengan melakukan simulasi pemutusan salah satu layanan backend.", hint: "Pastikan fallback response berfungsi dengan baik.", validate: c => c.length > 3 },
            { task: "Tulis dokumentasi arsitektur enterprise microservices lengkap dengan diagram komunikasi layanan.", hint: "Dokumentasikan peta ketergantungan antar layanan.", validate: c => c.length > 3 }
        ]
    },
    {
        id: 98, category: "Enterprise Mastery", title: "Level 98: Event-Driven Architecture (RabbitMQ / Kafka dengan Python)",
        desc: "<b>Definisi Konsep Mendalam:</b> Membangun arsitektur berbasis event (Event-Driven Architecture) menggunakan RabbitMQ atau Apache Kafka untuk komunikasi data asinkron berskala masif.<br><br><b>Poin Penting:</b><br>• Menggunakan pustaka <code>pika</code> (RabbitMQ) atau <code>kafka-python</code>.<br>• Pola Publisher-Subscriber dan Message Queues.",
        example: `import pika\n\nconnection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))\nchannel = connection.channel()\nchannel.queue_declare(queue='task_queue')\nchannel.basic_publish(exchange='', routing_key='task_queue', body='Hello Event!')`,
        tasks: [
            { task: "Impor pika, buat koneksi blocking connection ke server RabbitMQ lokal.", hint: "pika.BlockingConnection(pika.ConnectionParameters('localhost'))", validate: c => c.includes("pika") },
            { task: "Deklarasikan antrean pesan (queue) baru menggunakan channel.queue_declare().", hint: "channel.queue_declare(queue='notifikasi')", validate: c => c.includes("queue_declare") },
            { task: "Kirim pesan event (publish) ke dalam antrean menggunakan channel.basic_publish().", hint: "channel.basic_publish(exchange='', routing_key='notifikasi', body='Data event')", validate: c => c.includes("basic_publish") },
            { task: "Buat fungsi konsumen (consumer) yang mendengarkan dan menerima pesan masuk dari antrean RabbitMQ.", hint: "channel.basic_consume(queue='notifikasi', on_message_callback=callback)", validate: c => c.includes("basic_consume") },
            { task: "Mulai proses konsumsi pesan secara kontinu menggunakan channel.start_consuming().", hint: "Jalankan loop konsumsi pesan.", validate: c => c.includes("start_consuming") },
            { task: "Impor KafkaProducer dari kafka-python untuk mengirim pesan event ke topik Apache Kafka.", hint: "from kafka import KafkaProducer; producer = KafkaProducer(bootstrap_servers=['localhost:9092'])", validate: c => c.includes("kafkaproducer") },
            { task: "Kirim pesan byte ke topik Kafka menggunakan producer.send('topik', b'pesan').", hint: "producer.send('topik_event', b'data')", validate: c => c.includes("producer.send") },
            { task: "Impor KafkaConsumer untuk membaca stream data event dari topik Kafka.", hint: "from kafka import KafkaConsumer; consumer = KafkaConsumer('topik', ...)", validate: c => c.includes("kafkaconsumer") },
            { task: "Terapkan penanganan pengakuan pesan (acknowledgment / ack) untuk menjamin keandalan pengiriman event.", hint: "Kirim sinyal ack setelah pesan berhasil diproses.", validate: c => c.length > 3 },
            { task: "Uji alur sistem Event-Driven secara end-to-end dari publisher hingga consumer.", hint: "Pastikan event diterima dengan sukses oleh layanan penerima.", validate: c => c.length > 3 }
        ]
    },
    {
        id: 99, category: "Enterprise Mastery", title: "Level 99: Full-Stack Enterprise System Integration Test",
        desc: "<b>Definisi Konsep Mendalam:</b> Melakukan pengujian integrasi sistem skala penuh (End-to-End & Integration Testing) yang menggabungkan API, Database, Redis, dan Message Queue.<br><br><b>Poin Penting:</b><br>• Menggunakan pytest dengan kontainer uji Testcontainers atau Docker Compose.<br>• Pengujian skenario bisnis nyata secara otomatis.",
        example: `import pytest\n\ndef test_enterprise_workflow(test_client, db_session):\n    response = test_client.post(\"/api/v1/orders\", json={\"item\": \"SaaS\"})\n    assert response.status_code == 201`,
        tasks: [
            { task: "Buat file pengujian integrasi pytest yang menghubungkan FastAPI TestClient dengan database uji aktif.", hint: "Gunakan fixture database test terisolasi.", validate: c => c.includes("testclient") || c.includes("pytest") },
            { task: "Buat fixture pytest untuk menyiapkan state awal data database sebelum pengujian dimulai.", hint: "Masukkan data dummy ke tabel sebelum test dijalankan.", validate: c => c.includes("fixture") },
            { task: "Uji skenario integrasi alur pemesanan penuh (buat order -> simpan ke DB -> kirim event ke queue -> respons sukses).", hint: "Panggil endpoint API lalu verifikasi efek samping sistem.", validate: c => c.includes("client.post") || c.includes("assert") },
            { task: "Gunakan Mock atau Testcontainers untuk mensimulasikan layanan eksternal Redis dan RabbitMQ saat pengujian.", hint: "Pastikan test berjalan independen tanpa mengganggu environment production.", validate: c => c.includes("mock") || c.includes("testcontainers") },
            { task: "Uji penanganan transaksi rollback database jika terjadi kegagalan di tengah alur proses bisnis.", hint: "Verifikasi tidak ada data korup yang tersimpan.", validate: c => c.length > 3 },
            { task: "Lakukan pengujian performa beban dasar (Load Testing) menggunakan Locust atau pytest-benchmark.", hint: "Simulasikan banyak pengguna mengakses endpoint secara bersamaan.", validate: c => c.includes("locust") || c.includes("benchmark") },
            { task: "Validasi laporan cakupan pengujian kode (Code Coverage) agar mencapai standar tinggi (>90%).", hint: "Jalankan pytest --cov-report=term-missing.", validate: c => c.includes("cov") },
            { task: "Uji autentikasi token JWT secara terintegrasi pada alur pengujian endpoint terlindung.", hint: "Sertakan header authorization token yang valid di test client.", validate: c => c.includes("headers") || c.includes("authorization") },
            { task: "Bersihkan data uji (teardown) secara otomatis setelah seluruh rangkaian tes selesai.", hint: "Gunakan yield pada pytest fixture untuk proses teardown.", validate: c => c.includes("yield") },
            { task: "Verifikasi seluruh rangkaian suite pengujian integrasi berhasil tanpa error.", hint: "Jalankan perintah pytest dan pastikan semua status hijau (passed).", validate: c => c.includes("pytest") }
        ]
    },
    {
        id: 100, category: "Enterprise Mastery", title: "Level 100: Capstone Grandmaster Project: Membangun SaaS AI Berbasis Cloud Skala Penuh",
        desc: "<b>Definisi Konsep Mendalam:</b> Proyek puncak ujian akhir masterclass (Capstone Grandmaster) yang menggabungkan seluruh teknologi enterprise stack dunia (FastAPI, SQLAlchemy, Celery, Redis, LLM AI, Docker, Kubernetes, CI/CD, Security).<br><br><b>Poin Penting:</b><br>• Arsitektur SaaS AI skala penuh.<br>• Penggabungan seluruh stack teknologi modern.",
        example: `# Arsitektur SaaS AI Capstone Project\n# FastAPI Backend + PostgreSQL + Redis Cache + Celery Workers + RAG LLM + Docker Kubernetes Deployment`,
        tasks: [
            { task: "Rancang arsitektur sistem backend SaaS AI lengkap yang mencakup autentikasi, manajemen database, dan pemrosesan AI asinkron.", hint: "Gabungkan FastAPI, SQLAlchemy, dan Celery dalam satu skema.", validate: c => c.includes("fastapi") || c.includes("sqlalchemy") },
            { task: "Implementasikan endpoint API FastAPI yang terintegrasi dengan arsitektur RAG dan model LLM (OpenAI / Ollama).", hint: "Buat rute khusus untuk pemrosesan kueri kecerdasan buatan.", validate: c => c.includes("app.get") || c.includes("app.post") },
            { task: "Konfigurasikan sistem antrean background Celery & Redis untuk menangani tugas pemrosesan dokumen besar secara asinkron.", hint: "Pindahkan tugas berat LLM ke background worker.", validate: c => c.includes("celery") || c.includes("redis") },
            { task: "Terapkan strategi caching Redis untuk mengoptimalkan waktu respons kueri data yang sering diakses.", hint: "Terapkan cache-aside pattern pada endpoint populer.", validate: c => c.includes("redis") },
            { task: "Tulis konfigurasi Dockerfile optimal dan docker-compose.yml untuk menjalankan seluruh stack SaaS secara lokal.", hint: "Sertakan layanan web, db, redis, dan celery worker.", validate: c => c.includes("from") || c.includes("services") },
            { task: "Tulis manifes Kubernetes (Deployment & Service) untuk kesiapan penerapan aplikasi SaaS ke klaster cloud.", hint: "Definisikan konfigurasi pod dan replika.", validate: c => c.includes("deployment") || c.includes("service") },
            { task: "Buat pipeline CI/CD GitHub Actions otomatis untuk pengujian pytest, pemindaian Bandit, dan build image Docker.", hint: "Otomatisasi proses build dan test pada setiap push.", validate: c => c.includes("jobs") || c.includes("runs-on") },
            { task: "Terapkan praktik keamanan tingkat lanjut (hash bcrypt, sanitasi input Pydantic, mitigasi OWASP Top 10).", hint: "Pastikan kode aman dari celah kerentanan.", validate: c => c.length > 3 },
            { task: "Lakukan dokumentasi teknis lengkap mengenai arsitektur, panduan instalasi, dan spesifikasi endpoint API.", hint: "Tulis README.md yang komprehensif dan profesional.", validate: c => c.length > 3 },
            { task: "Rayakan pencapaian Anda! Selamat, Anda telah menamatkan seluruh 100 Level Python Odyssey Enterprise Grandmaster Edition!", hint: "Anda resmi menjadi seorang Master Software & AI Engineer kelas dunia!", validate: c => c.length > 0 }
        ]
    }
];

/* =====================================================================
   LOGIKA APLIKASI
   ---------------------------------------------------------------------
   Bagian di atas (levelsData) adalah kurikulum. Bagian ini berisi:
   1. Normalisasi data (kategori & kurva XP)
   2. Mesin Python asli (Pyodide di Web Worker, ada batas waktu)
   3. Penyimpanan progress (localStorage)
   4. Validasi jawaban (jalankan kode + cek struktur)
   5. UI: sidebar, editor, terminal, toast
   ===================================================================== */
(function () {
    "use strict";

    /* ------------------------------------------------------------------
       1. KONFIGURASI & NORMALISASI DATA
       ------------------------------------------------------------------ */
    const STORAGE_KEY = "pythonOdyssey.v2";
    const PYODIDE_VERSION = "0.26.4";
    const PYODIDE_BASE = "https://cdn.jsdelivr.net/pyodide/v" + PYODIDE_VERSION + "/full/";
    const EXEC_LIMIT_MS = 8000;      // batas waktu eksekusi kode murid
    const LOAD_LIMIT_MS = 90000;     // batas memuat mesin / paket Python
    const OUTPUT_LIMIT = 60000;      // batas jumlah karakter output
    const LEVEL_BONUS_RATE = 0.25;   // bonus XP saat 10/10 soal selesai
    const INDENT = "    ";

    // Level yang soalnya berupa konfigurasi/perintah/teks (bukan kode Python valid): tidak dijalankan.
    // Soal dengan validator "c.length > N" (soal uraian) otomatis ikut mode teks.
    const TEXT_LEVELS = new Set([52, 80, 81, 82, 88, 92, 94, 96]);
    // Level 1-48 memakai kata kunci Python murni: isi string diabaikan saat cek struktur
    // (kecuali L12 format-spec dan L23 mode file yang memang berada di dalam string).
    const STRING_BLIND_LEVELS = new Set(Array.from({ length: 48 }, function (_, i) { return i + 1; })
        .filter(function (n) { return n !== 12 && n !== 23; }));
    // Library yang memang tidak tersedia di browser. ImportError lain = salah ketik, bukan keterbatasan.
    const UNAVAILABLE_LIBS = new RegExp("^(torch|tensorflow|transformers|fastapi|uvicorn|starlette|alembic|passlib|jwt|celery|redis|pyspark|airflow|great_expectations|gx|deltalake|delta|scrapy|openai|anthropic|langchain\\w*|llama_index|chromadb|qdrant_client|crewai\\w*|autogen|sentry_sdk|structlog|prometheus_client|pulumi\\w*|boto3|botocore|bcrypt|defusedxml|pika|kafka|pytest|mangum|dotenv|pydantic_settings|Cython|memory_profiler|locust|testcontainers|pybreaker|numba|seaborn|plotly|pyarrow|psycopg2|pymysql)$");
    // Hasil cetak yang wajib muncul (kunci: "level-indeksSoal")
    const EXPECT = {
        "2-0": /\b24(\.0)?\b/, "2-1": /\b48\b/, "2-2": /\b81\b/, "2-3": /\b1\b/, "2-4": /\b53000\b/,
        "2-5": /\b5\b/, "2-6": /\b85(\.0)?\b/, "2-7": /\b60\b/, "2-8": /\b7200\b/, "2-9": /\b110\b/,
        "4-0": /sudah punya ktp/i, "4-1": /tidak lulus/i, "4-2": /hemat dulu/i, "4-3": /genap/i, "4-4": /demam/i,
        "4-5": /habis/i, "4-6": /terlalu ngebut/i, "4-7": /belum memenuhi/i, "4-8": /malam hari/i, "4-9": /hadiah utama/i,
        "5-0": /sejuk/i, "5-2": /berhenti/i, "5-3": /siang/i, "5-4": /kerusakan berat/i, "5-5": /rabu/i,
        "5-6": /diskon 20%/i, "5-7": /biaya sedang/i, "5-8": /full akses/i, "5-9": /anak-anak/i
    };

    // Kurva XP yang naik rata: Level 1 = 100 XP, Level 100 = 2.080 XP.
    // Ubah fungsi ini jika ingin kurva lain.
    function xpForLevel(id) {
        return 100 + (id - 1) * 20;
    }

    levelsData.forEach(function (lvl) {
        lvl.tasks.forEach(function (t, i) {
            const vsrc = String(t.validate);
            t.needsStdout = /\bprint\b/.test(vsrc);                 // validator meminta print
            t.needsAnyOutput = /\b(cetak|print|tampilkan)\b/i.test(t.task); // soal meminta mencetak
            t.expect = EXPECT[lvl.id + "-" + i] || null;
            t.noStrings = STRING_BLIND_LEVELS.has(lvl.id);
            const lengthOnly = /^\s*c\s*=>\s*c\.length\s*>\s*\d+\s*$/.test(vsrc);
            t.minChars = (lengthOnly && !TEXT_LEVELS.has(lvl.id)) ? 25 : 6; // soal uraian wajib dijawab dengan beberapa kalimat/baris
            if (TEXT_LEVELS.has(lvl.id) || lengthOnly || (lvl.id === 85 && i >= 5 && i <= 8)) t.mode = "text";
        });
        lvl.xp = xpForLevel(lvl.id);
        lvl.shortTitle = lvl.title.replace(/^Level\s+\d+\s*:\s*/i, "");
    });

    const levelById = new Map(levelsData.map(function (l) { return [l.id, l]; }));
    const TOTAL_TASKS = levelsData.reduce(function (n, l) { return n + l.tasks.length; }, 0);

    // Kelompokkan level berurutan berdasarkan kategori (untuk header sidebar)
    const categoryGroups = [];
    levelsData.forEach(function (lvl) {
        const last = categoryGroups[categoryGroups.length - 1];
        if (last && last.category === lvl.category) last.levels.push(lvl);
        else categoryGroups.push({ category: lvl.category, levels: [lvl] });
    });

    const RANKS = [
        { pct: 0, name: "Pemula" },
        { pct: 3, name: "Pelajar" },
        { pct: 10, name: "Coder" },
        { pct: 25, name: "Developer" },
        { pct: 45, name: "Engineer" },
        { pct: 70, name: "Architect" },
        { pct: 90, name: "Grandmaster" },
        { pct: 100, name: "Legenda" }
    ];

    /* ------------------------------------------------------------------
       2. UTILITAS
       ------------------------------------------------------------------ */
    function $(id) { return document.getElementById(id); }

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    }

    function debounce(fn, ms) {
        let t = null;
        return function () {
            clearTimeout(t);
            t = setTimeout(fn, ms);
        };
    }

    // Hapus komentar Python (#...) tanpa merusak tanda # di dalam string.
    // Dipakai agar murid tidak bisa lolos dengan menaruh kata kunci di komentar.
    function stripPyComments(src, blank) {
        let out = "";
        let i = 0;
        let q = null; // pembuka string yang sedang aktif
        const n = src.length;
        while (i < n) {
            const ch = src[i];
            if (q) {
                if (ch === "\\") {
                    out += blank ? "  " : ch + (i + 1 < n ? src[i + 1] : "");
                    i += 2;
                    continue;
                }
                if (src.startsWith(q, i)) {
                    out += q;
                    i += q.length;
                    q = null;
                    continue;
                }
                if (q.length === 1 && ch === "\n") q = null; // string satu-baris tak tertutup
                out += (blank && ch !== "\n") ? " " : ch; // blank=true: isi string dikosongkan
                i++;
                continue;
            }
            if (ch === "#") {
                while (i < n && src[i] !== "\n") i++;
                continue;
            }
            if (ch === '"' || ch === "'") {
                q = src.startsWith(ch.repeat(3), i) ? ch.repeat(3) : ch;
                out += q;
                i += q.length;
                continue;
            }
            out += ch;
            i++;
        }
        return out;
    }

    /* ------------------------------------------------------------------
       3. MESIN PYTHON (Pyodide di dalam Web Worker)
       ------------------------------------------------------------------ */

    // Fungsi ini di-stringify lalu dijalankan DI DALAM worker.
    // Jangan merujuk variabel di luar fungsi ini.
    function workerMain(BASE) {
        const SETUP = [
            "import sys, ast, builtins, inspect, os",
            "os.environ['MPLBACKEND'] = 'Agg'",
            "_stdin_lines = []",
            "def _fake_input(prompt=''):",
            "    sys.stdout.write(str(prompt))",
            "    if not _stdin_lines:",
            "        sys.stdout.write(chr(10))",
            "        raise EOFError('EOF when reading a line (isi kolom Input di bawah editor jika program memakai input())')",
            "    v = str(_stdin_lines.pop(0))",
            "    sys.stdout.write(v + chr(10))",
            "    return v",
            "builtins.input = _fake_input",
            "def _grab_figs():",
            "    mp = sys.modules.get('matplotlib.pyplot')",
            "    if mp is None:",
            "        return []",
            "    import io, base64",
            "    out = []",
            "    for n in mp.get_fignums():",
            "        buf = io.BytesIO()",
            "        mp.figure(n).savefig(buf, format='png', dpi=80, bbox_inches='tight')",
            "        out.append(base64.b64encode(buf.getvalue()).decode())",
            "    mp.close('all')",
            "    return out",
            "def _syntax_check(code):",
            "    try:",
            "        compile(code, '<exec>', 'exec')",
            "        return None",
            "    except SyntaxError as e:",
            "        msg = type(e).__name__ + ': ' + str(e.msg)",
            "        if e.lineno:",
            "            msg += ' (baris ' + str(e.lineno) + ')'",
            "        if e.text:",
            "            msg += chr(10) + '  ' + e.text.rstrip()",
            "            if e.offset:",
            "                msg += chr(10) + '  ' + ' ' * max(e.offset - 1, 0) + '^'",
            "        return msg",
            "    except Exception as e:",
            "        return type(e).__name__ + ': ' + str(e)",
            "class _AsyncRunFix(ast.NodeTransformer):",
            "    def _skip(self, node):",
            "        return node",
            "    visit_FunctionDef = _skip",
            "    visit_AsyncFunctionDef = _skip",
            "    visit_Lambda = _skip",
            "    visit_ClassDef = _skip",
            "    def visit_Call(self, node):",
            "        self.generic_visit(node)",
            "        f = node.func",
            "        if isinstance(f, ast.Attribute) and node.args:",
            "            owner_is_asyncio = isinstance(f.value, ast.Name) and f.value.id == 'asyncio'",
            "            if (f.attr == 'run' and owner_is_asyncio) or f.attr == 'run_until_complete':",
            "                return ast.copy_location(ast.Await(value=node.args[0]), node)",
            "        return node",
            "async def _run_user(code, g):",
            "    import logging",
            "    for _h in logging.root.handlers[:]:",
            "        logging.root.removeHandler(_h)",
            "    logging.root.setLevel(logging.WARNING)",
            "    tree = ast.parse(code, '<exec>')",
            "    tree = ast.fix_missing_locations(_AsyncRunFix().visit(tree))",
            "    co = compile(tree, '<exec>', 'exec', flags=ast.PyCF_ALLOW_TOP_LEVEL_AWAIT)",
            "    r = eval(co, g)",
            "    if inspect.iscoroutine(r):",
            "        await r"
        ].join("\n");

        let pyodide = null;
        const post = function (type, text) { postMessage({ type: type, text: text }); };

        const ready = (async function () {
            importScripts(BASE + "pyodide.js");
            pyodide = await loadPyodide({ indexURL: BASE });
            pyodide.setStdout({ batched: function (s) { post("stdout", s + "\n"); } });
            pyodide.setStderr({ batched: function (s) { post("stderr", s + "\n"); } });
            pyodide.globals.set("_setup_src", SETUP);
            pyodide.runPython("exec(compile(_setup_src, '<setup>', 'exec'), globals())");
            postMessage({ type: "ready" });
        })().catch(function (e) {
            postMessage({ type: "fatal", text: String((e && e.message) || e) });
        });

        function flush() {
            try { pyodide.runPython("import sys\nsys.stdout.flush()\nsys.stderr.flush()"); } catch (e) { /* abaikan */ }
        }

        self.onmessage = async function (ev) {
            const id = ev.data.id;
            const code = ev.data.code;
            const stdin = ev.data.stdin || [];
            await ready;
            if (!pyodide) {
                postMessage({ type: "result", id: id, status: "engine-failed" });
                return;
            }
            let g = null;
            try {
                const syn = pyodide.globals.get("_syntax_check")(code);
                if (syn) {
                    postMessage({ type: "result", id: id, status: "syntax", message: String(syn) });
                    return;
                }
                postMessage({ type: "loading", id: id });
                try { await pyodide.loadPackagesFromImports(code); } catch (e) { /* paket tak tersedia: biarkan ImportError muncul */ }
                postMessage({ type: "started", id: id });

                pyodide.globals.set("_stdin_lines", pyodide.toPy(stdin));
                g = pyodide.globals.get("dict")();
                g.set("__name__", "__main__");
                await pyodide.globals.get("_run_user")(code, g);
                flush();
                try {
                    const proxy = pyodide.globals.get("_grab_figs")();
                    const figs = proxy.toJs();
                    proxy.destroy();
                    figs.forEach(function (d) { postMessage({ type: "figure", data: d }); });
                } catch (e) { /* abaikan */ }
                postMessage({ type: "result", id: id, status: "ok" });
            } catch (e) {
                flush();
                const msg = String((e && e.message) || e);
                const lastLine = msg.trim().split("\n").pop();
                const m = lastLine.match(/^([A-Za-z_][\w.]*)(?::|$)/);
                const errType = (e && e.type) || (m && m[1]) || "Error";
                if (errType === "SystemExit") {
                    postMessage({ type: "result", id: id, status: "ok" });
                } else {
                    const idx = msg.indexOf('File "<exec>"');
                    const tb = idx >= 0
                        ? "Traceback (most recent call last):\n  " + msg.slice(idx).trim()
                        : msg.trim();
                    postMessage({ type: "result", id: id, status: "error", errType: errType, message: tb });
                }
            } finally {
                if (g) { try { g.destroy(); } catch (e) { /* abaikan */ } }
            }
        };
    }

    const PyEngine = (function () {
        let worker = null;
        let state = "idle"; // idle | loading | ready | failed
        let waiters = [];
        let current = null;
        let seq = 0;
        let loadTimer = null;
        const stateListeners = [];

        function setState(s) {
            state = s;
            stateListeners.forEach(function (fn) { fn(s); });
        }

        function resolveWaiters(ok) {
            const list = waiters;
            waiters = [];
            list.forEach(function (fn) { fn(ok); });
        }

        function killWorker() {
            if (worker) {
                worker.onmessage = null;
                worker.onerror = null;
                worker.terminate();
                worker = null;
            }
        }

        function fail() {
            clearTimeout(loadTimer);
            killWorker();
            setState("failed");
            resolveWaiters(false);
            if (current) finishJob({ status: "engine-failed" });
        }

        function start() {
            if (state === "loading" || state === "ready") return;
            setState("loading");
            try {
                const src = "(" + workerMain.toString() + ")(" + JSON.stringify(PYODIDE_BASE) + ");";
                const blob = new Blob([src], { type: "text/javascript" });
                worker = new Worker(URL.createObjectURL(blob));
            } catch (e) {
                fail();
                return;
            }
            worker.onmessage = onMessage;
            worker.onerror = function () {
                if (state === "loading") {
                    fail();
                } else if (current) {
                    // worker mati mendadak (mis. kehabisan memori)
                    finishJob({ status: "error", errType: "EngineCrash", message: "Mesin Python berhenti mendadak (kemungkinan kehabisan memori). Mesin dimulai ulang." });
                    killWorker();
                    setState("idle");
                    start();
                }
            };
            clearTimeout(loadTimer);
            loadTimer = setTimeout(fail, LOAD_LIMIT_MS);
        }

        function whenReady() {
            if (state === "ready") return Promise.resolve(true);
            if (state === "failed") return Promise.resolve(false);
            return new Promise(function (resolve) { waiters.push(resolve); });
        }

        function pushChunk(stream, text) {
            const job = current;
            if (!job || job.truncated) return;
            job.size += text.length;
            if (job.size > OUTPUT_LIMIT) {
                job.truncated = true;
                abort("outlimit");
                return;
            }
            job.chunks.push({ stream: stream, text: text });
            if (job.onChunk) job.onChunk(stream, text);
        }

        function envLimited(errType, message) {
            if (errType === "ModuleNotFoundError" || errType === "ImportError") {
                const mm = /No module named '([^']+)'/.exec(message);
                return !!mm && UNAVAILABLE_LIBS.test(mm[1].split(".")[0]);
            }
            if (/^(RuntimeError|OSError|NotImplementedError|PermissionError|BlockingIOError|ConnectionError|TimeoutError)$/.test(errType)) {
                return /thread|process|socket|fork|subprocess|not supported|not implemented|operation not permitted|network|connection|Errno (38|97|99|101|111|138)\b/i.test(message);
            }
            return false;
        }

        function finishJob(m) {
            const job = current;
            if (!job) return;
            current = null;
            clearTimeout(job.timer);
            const res = {
                status: m.status,
                message: m.message || "",
                errType: m.errType || "",
                chunks: job.chunks,
                ms: Math.round(performance.now() - job.t0),
                hasOutput: job.chunks.some(function (c) { return c.stream === "stdout" && c.text.trim() !== ""; })
            };
            if (res.status === "error" && envLimited(res.errType, res.message)) {
                const mod = /No module named '([^']+)'/.exec(res.message);
                res.status = "limited";
                res.detail = mod ? "library '" + mod[1] + "' tidak tersedia di browser" : "fitur sistem ini (thread/proses/jaringan) tidak didukung di browser";
            }
            job.resolve(res);
        }

        function abort(reason) {
            const job = current;
            if (!job) return;
            const chunks = job.chunks;
            killWorker();
            setState("idle");
            current = null;
            clearTimeout(job.timer);
            job.resolve({
                status: "timeout",
                reason: reason,
                message: "",
                errType: "",
                chunks: chunks,
                ms: Math.round(performance.now() - job.t0),
                hasOutput: chunks.some(function (c) { return c.stream === "stdout" && c.text.trim() !== ""; })
            });
            start(); // siapkan mesin baru di latar belakang
        }

        function onMessage(ev) {
            const m = ev.data || {};
            switch (m.type) {
                case "ready":
                    clearTimeout(loadTimer);
                    setState("ready");
                    resolveWaiters(true);
                    break;
                case "fatal":
                    fail();
                    break;
                case "stdout":
                case "stderr":
                    pushChunk(m.type, m.text);
                    break;
                case "loading":
                    if (current && current.onStatus) current.onStatus("Menyiapkan paket Python yang dibutuhkan (pertama kali bisa agak lama)…");
                    break;
                case "started":
                    if (current && current.id === m.id) {
                        clearTimeout(current.timer);
                        current.t0 = performance.now();
                        current.timer = setTimeout(function () { abort("time"); }, EXEC_LIMIT_MS);
                    }
                    break;
                case "figure":
                    if (current && current.onFigure) current.onFigure(m.data);
                    break;
                case "result":
                    if (current && current.id === m.id) finishJob(m);
                    break;
                default:
                    break;
            }
        }

        async function run(code, stdin, hooks) {
            if (state === "idle") start();
            if (hooks && hooks.onStatus && state === "loading") hooks.onStatus("Memuat mesin Python (sekitar 10 MB, hanya sekali)…");
            const ok = await whenReady();
            if (!ok) return { status: "engine-failed", chunks: [], message: "", errType: "", ms: 0, hasOutput: false };
            return new Promise(function (resolve) {
                const job = {
                    id: ++seq,
                    resolve: resolve,
                    onChunk: hooks && hooks.onChunk,
                    onStatus: hooks && hooks.onStatus,
                    onFigure: hooks && hooks.onFigure,
                    chunks: [],
                    size: 0,
                    truncated: false,
                    t0: performance.now(),
                    timer: null
                };
                job.timer = setTimeout(function () { abort("time"); }, LOAD_LIMIT_MS); // sebelum "started"
                current = job;
                worker.postMessage({ id: job.id, code: code, stdin: stdin });
            });
        }

        return {
            start: start,
            run: run,
            retry: function () { if (state === "failed") { setState("idle"); start(); } },
            onState: function (fn) { stateListeners.push(fn); fn(state); },
            get state() { return state; }
        };
    })();

    /* ------------------------------------------------------------------
       4. STATE & PENYIMPANAN PROGRESS
       ------------------------------------------------------------------ */
    const state = {
        levelId: 1,
        taskIndex: 0,
        done: {},      // { levelId: Set(indexSoal) }
        drafts: {},    // { "level-soal": kode }
        settings: { lockOrder: false }
    };

    let storageWarned = false;

    function serialize() {
        const done = {};
        Object.keys(state.done).forEach(function (id) {
            done[id] = Array.from(state.done[id]).sort(function (a, b) { return a - b; });
        });
        return {
            version: 2,
            done: done,
            drafts: state.drafts,
            settings: state.settings,
            last: { levelId: state.levelId, taskIndex: state.taskIndex }
        };
    }

    function saveNow() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(serialize()));
        } catch (e) {
            if (!storageWarned) {
                storageWarned = true;
                toast("Penyimpanan browser tidak tersedia. Progress akan hilang saat halaman ditutup.", "warn", 6000);
            }
        }
    }
    const saveSoon = debounce(saveNow, 300);

    // Terapkan data (dari localStorage / file impor) dengan validasi ketat
    function applyData(raw) {
        if (!raw || typeof raw !== "object") return false;
        const done = {};
        levelsData.forEach(function (lvl) {
            const arr = raw.done && raw.done[lvl.id];
            if (Array.isArray(arr)) {
                const set = new Set(arr.filter(function (i) {
                    return Number.isInteger(i) && i >= 0 && i < lvl.tasks.length;
                }));
                if (set.size) done[lvl.id] = set;
            }
        });
        const drafts = {};
        if (raw.drafts && typeof raw.drafts === "object") {
            Object.keys(raw.drafts).forEach(function (k) {
                if (/^\d{1,3}-\d{1,2}$/.test(k) && typeof raw.drafts[k] === "string" && raw.drafts[k].length < 20000) {
                    drafts[k] = raw.drafts[k];
                }
            });
        }
        state.done = done;
        state.drafts = drafts;
        state.settings.lockOrder = !!(raw.settings && raw.settings.lockOrder);
        const last = raw.last || {};
        const lvl = levelById.get(last.levelId);
        if (lvl) {
            state.levelId = lvl.id;
            state.taskIndex = Number.isInteger(last.taskIndex) && last.taskIndex >= 0 && last.taskIndex < lvl.tasks.length ? last.taskIndex : 0;
        }
        return true;
    }

    function loadState() {
        try {
            applyData(JSON.parse(localStorage.getItem(STORAGE_KEY)));
        } catch (e) { /* data rusak / storage tak tersedia: mulai dari awal */ }
    }

    /* ---------- Turunan state ---------- */
    function currentLevel() { return levelById.get(state.levelId); }
    function currentTask() { return currentLevel().tasks[state.taskIndex]; }
    function isTaskDone(lvl, i) { const s = state.done[lvl.id]; return !!s && s.has(i); }
    function levelDoneCount(lvl) { const s = state.done[lvl.id]; return s ? s.size : 0; }
    function isLevelComplete(lvl) { return levelDoneCount(lvl) >= lvl.tasks.length; }
    function taskXp(lvl) { return Math.round(lvl.xp / lvl.tasks.length); }
    function levelBonus(lvl) { return Math.round(lvl.xp * LEVEL_BONUS_RATE); }
    function totalTasksDone() { return levelsData.reduce(function (n, l) { return n + levelDoneCount(l); }, 0); }
    function completedLevelCount() { return levelsData.filter(isLevelComplete).length; }
    function totalXp() {
        return levelsData.reduce(function (sum, lvl) {
            return sum + levelDoneCount(lvl) * taskXp(lvl) + (isLevelComplete(lvl) ? levelBonus(lvl) : 0);
        }, 0);
    }
    function rankFor(done) {
        const pct = (done / TOTAL_TASKS) * 100;
        let rank = RANKS[0];
        RANKS.forEach(function (r) { if (pct >= r.pct) rank = r; });
        return rank.name;
    }
    function isLocked(lvl) {
        return state.settings.lockOrder && lvl.id > 1 && !isLevelComplete(levelById.get(lvl.id - 1));
    }
    function firstUndone(lvl) {
        for (let i = 0; i < lvl.tasks.length; i++) if (!isTaskDone(lvl, i)) return i;
        return 0;
    }
    function ensureUnlocked() {
        if (!isLocked(currentLevel())) return;
        const target = levelsData.find(function (l) { return !isLevelComplete(l); }) || levelsData[0];
        state.levelId = target.id;
        state.taskIndex = firstUndone(target);
    }
    function draftKey() { return state.levelId + "-" + state.taskIndex; }

    /* ------------------------------------------------------------------
       5. TOAST
       ------------------------------------------------------------------ */
    function toast(message, kind, ms) {
        const root = $("toast-root");
        const node = el("div", "toast toast-" + (kind || "info"), message);
        root.appendChild(node);
        setTimeout(function () {
            node.classList.add("toast-out");
            setTimeout(function () { node.remove(); }, 320);
        }, ms || 3500);
    }

    /* ------------------------------------------------------------------
       6. RENDER
       ------------------------------------------------------------------ */
    function renderHeader() {
        const done = totalTasksDone();
        $("total-xp").textContent = totalXp().toLocaleString("id-ID") + " XP";
        $("rank-text").textContent = rankFor(done);
        $("progress-text").textContent = completedLevelCount() + " / " + levelsData.length + " Level";
        const pct = Math.round((done / TOTAL_TASKS) * 100);
        $("progress-bar").style.width = pct + "%";
        $("progress-track").setAttribute("aria-valuenow", String(pct));
    }

    function levelItem(lvl) {
        const done = levelDoneCount(lvl);
        const total = lvl.tasks.length;
        const complete = done >= total;
        const locked = isLocked(lvl);
        const active = lvl.id === state.levelId;

        const btn = el("button", [
            "w-full text-left p-2.5 rounded-xl border transition flex items-center gap-3",
            active ? "border-indigo-500 bg-indigo-950/30 shadow-lg shadow-indigo-500/10" : "border-slate-800/80 bg-slate-900/40 hover:border-slate-600",
            locked ? "opacity-50" : ""
        ].join(" "));
        btn.type = "button";
        btn.dataset.levelId = String(lvl.id);
        btn.title = lvl.title;
        if (active) btn.setAttribute("aria-current", "true");
        if (locked) btn.setAttribute("aria-disabled", "true");

        const num = el("span", [
            "shrink-0 w-9 h-9 grid place-items-center rounded-lg text-xs font-bold",
            complete ? "bg-emerald-500/15 text-emerald-300" : active ? "bg-indigo-500/20 text-indigo-300" : "bg-slate-800 text-slate-400"
        ].join(" "), String(lvl.id));

        const mid = el("span", "flex-1 min-w-0 flex flex-col gap-1.5");
        mid.appendChild(el("span", "text-sm font-semibold text-slate-200 truncate", lvl.shortTitle));
        const bar = el("span", "block h-1 rounded bg-slate-800 overflow-hidden");
        const fill = el("span", "block h-full " + (complete ? "bg-emerald-400" : "bg-indigo-400"));
        fill.style.width = Math.round((done / total) * 100) + "%";
        bar.appendChild(fill);
        mid.appendChild(bar);

        const status = el("span", "shrink-0 text-[11px] font-semibold " + (complete ? "text-emerald-400" : "text-slate-500"),
            locked ? "🔒" : complete ? "✔" : done + "/" + total);

        btn.append(num, mid, status);
        btn.addEventListener("click", function () {
            if (locked) {
                toast("Selesaikan Level " + (lvl.id - 1) + " dulu untuk membuka level ini.", "warn");
                return;
            }
            goTo(lvl.id, firstUndone(lvl));
            closeSidebar();
        });
        return btn;
    }

    function renderSidebar() {
        const list = $("level-list");
        const q = $("level-search").value.trim().toLowerCase();
        const scroll = list.scrollTop;
        const frag = document.createDocumentFragment();
        let shown = 0;

        categoryGroups.forEach(function (group) {
            const matches = group.levels.filter(function (lvl) {
                return !q || (lvl.id + " " + lvl.category + " " + lvl.shortTitle).toLowerCase().indexOf(q) !== -1;
            });
            if (!matches.length) return;
            const doneLevels = group.levels.filter(isLevelComplete).length;
            const header = el("div", "sticky top-0 z-10 bg-slate-900/95 backdrop-blur-sm flex justify-between items-center px-2 py-1.5 text-[10px] uppercase tracking-wider font-bold text-slate-400");
            header.append(el("span", "text-indigo-400", group.category), el("span", "", doneLevels + "/" + group.levels.length));
            frag.appendChild(header);
            matches.forEach(function (lvl) { frag.appendChild(levelItem(lvl)); shown++; });
        });

        if (!shown) frag.appendChild(el("p", "text-sm text-slate-500 px-2 py-4", "Tidak ada level yang cocok."));
        list.replaceChildren(frag);
        list.scrollTop = scroll;
    }

    function renderDots() {
        const lvl = currentLevel();
        const wrap = $("task-dots");
        const dots = lvl.tasks.map(function (_, i) {
            const done = isTaskDone(lvl, i);
            const current = i === state.taskIndex;
            const b = el("button", [
                "w-8 h-8 rounded-lg text-xs font-bold border transition",
                done ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300" : "bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500",
                current ? "ring-2 ring-indigo-400" : ""
            ].join(" "), String(i + 1));
            b.type = "button";
            b.setAttribute("aria-label", "Soal " + (i + 1) + (done ? ", sudah selesai" : ""));
            if (current) b.setAttribute("aria-current", "step");
            b.addEventListener("click", function () { goTo(lvl.id, i); });
            return b;
        });
        wrap.replaceChildren.apply(wrap, dots);
    }

    function updateLineNumbers() {
        const editor = $("code-input");
        const count = editor.value.split("\n").length;
        const nums = $("line-numbers");
        if (nums.dataset.count !== String(count)) {
            let s = "";
            for (let i = 1; i <= count; i++) s += (i === 1 ? "" : "\n") + i;
            nums.textContent = s;
            nums.dataset.count = String(count);
        }
        nums.scrollTop = editor.scrollTop;
    }

    function showPlaceholder(text) {
        const out = $("code-output");
        out.replaceChildren(el("span", "text-slate-500", text));
        out.dataset.ph = "1";
    }

    function renderLevel() {
        const lvl = currentLevel();
        const task = currentTask();
        $("bg-level-watermark").textContent = lvl.id < 10 ? "0" + lvl.id : String(lvl.id);
        $("badge-category").textContent = lvl.category;
        $("badge-xp").textContent = "+" + taskXp(lvl) + " XP / soal";
        $("badge-subtask").textContent = "Soal " + (state.taskIndex + 1) + " dari " + lvl.tasks.length;
        $("level-title").textContent = lvl.title;
        $("level-desc").innerHTML = "<p>" + lvl.desc + "</p>"; // konten kurikulum milik aplikasi (tepercaya)
        $("level-example").firstElementChild.textContent = lvl.example;
        $("level-task").textContent = task.task;

        const editor = $("code-input");
        editor.value = state.drafts[draftKey()] || "";
        updateLineNumbers();
        const isText = task.mode === "text";
        $("file-label").textContent = isText ? "jawaban.txt" : "main.py";
        editor.placeholder = isText ? "# Tulis perintah / konfigurasi / catatan jawaban di sini..." : "# Tulis kode Python solusi kamu di sini...";
        showPlaceholder(isText
            ? "// Soal ini berupa teks/konfigurasi: tidak dijalankan sebagai Python. Klik Periksa Jawaban untuk menilai isinya."
            : "// Output program akan muncul di sini setelah dijalankan...");
        renderDots();
    }

    function renderAll() {
        renderHeader();
        renderSidebar();
        renderLevel();
        $("opt-lock").checked = state.settings.lockOrder;
    }

    /* ---------- Navigasi ---------- */
    function saveDraftNow() {
        const code = $("code-input").value;
        const key = draftKey();
        if (code.trim()) state.drafts[key] = code;
        else delete state.drafts[key];
    }

    function goTo(levelId, taskIndex) {
        saveDraftNow();
        const lvl = levelById.get(levelId);
        if (!lvl) return;
        const levelChanged = lvl.id !== state.levelId;
        state.levelId = lvl.id;
        state.taskIndex = Math.min(Math.max(taskIndex || 0, 0), lvl.tasks.length - 1);
        renderAll();
        saveSoon();
        if (levelChanged) {
            const active = $("level-list").querySelector('[aria-current="true"]');
            if (active) active.scrollIntoView({ block: "nearest" });
        }
    }

    function goNext() {
        const lvl = currentLevel();
        const n = lvl.tasks.length;
        for (let k = 1; k <= n; k++) {
            const i = (state.taskIndex + k) % n;
            if (!isTaskDone(lvl, i)) { goTo(lvl.id, i); return; }
        }
        const next = levelById.get(lvl.id + 1);
        if (next && !isLocked(next)) { goTo(next.id, firstUndone(next)); return; }
        if (next) { toast("Level berikutnya masih terkunci. Selesaikan semua soal level ini dulu.", "warn"); return; }
        if (completedLevelCount() === levelsData.length) { showFinish(); return; }
        const pending = levelsData.find(function (l) { return !isLevelComplete(l) && !isLocked(l); });
        if (pending) { toast("Ini level terakhir. Pindah ke level yang belum selesai.", "info"); goTo(pending.id, firstUndone(pending)); }
    }

    /* ---------- Sidebar mobile ---------- */
    function openSidebar() { $("sidebar").classList.add("mobile-open"); document.body.style.overflow = "hidden"; }
    function closeSidebar() { $("sidebar").classList.remove("mobile-open"); document.body.style.overflow = ""; }

    /* ------------------------------------------------------------------
       7. TERMINAL OUTPUT
       ------------------------------------------------------------------ */
    const CLS = {
        out: "text-emerald-400",
        err: "text-rose-400",
        warn: "text-amber-400",
        dim: "text-slate-500",
        info: "text-slate-300",
        ok: "text-emerald-400 font-bold",
        bad: "text-rose-400 font-bold"
    };

    function outClear() { const o = $("code-output"); o.replaceChildren(); delete o.dataset.ph; }

    function outAppend(text, cls) {
        const out = $("code-output");
        delete out.dataset.ph;
        out.appendChild(el("span", cls, text));
        out.scrollTop = out.scrollHeight;
    }

    function outLine(text, cls) { outAppend(text + "\n", cls); }

    function outPending(text) {
        outClear();
        $("code-output").appendChild(el("span", "text-slate-400 animate-pulse", text));
    }

    /* ------------------------------------------------------------------
       8. MENJALANKAN & MEMERIKSA KODE
       ------------------------------------------------------------------ */
    let busy = false;

    function setBusy(flag) {
        busy = flag;
        ["btn-run", "btn-check"].forEach(function (id) {
            const b = $(id);
            b.disabled = flag;
        });
        $("btn-run").querySelector(".label").textContent = flag ? "Menjalankan…" : "Jalankan Kode";
    }

    function getStdin() {
        const v = $("stdin-input").value;
        return v === "" ? [] : v.split(/\r?\n/);
    }

    async function runAndRender(code) {
        // Jika murid pindah soal selagi kode jalan, jangan tulis output ke soal yang baru.
        const lid = state.levelId, tix = state.taskIndex;
        const same = function () { return lid === state.levelId && tix === state.taskIndex; };
        outPending("Menjalankan kode Python…");
        let started = false;
        let figures = 0;
        function begin() { if (!started) { started = true; outClear(); } }
        const res = await PyEngine.run(code, getStdin(), {
            onStatus: function (text) { if (!started && same()) outPending(text); },
            onChunk: function (stream, text) {
                if (!same()) return;
                begin();
                outAppend(text, stream === "stderr" ? CLS.err : CLS.out);
            },
            onFigure: function (data) {
                if (!same()) return;
                begin();
                figures++;
                const img = el("img", "my-2 rounded-lg bg-white max-w-full");
                img.alt = "Grafik hasil program";
                img.src = "data:image/png;base64," + data;
                $("code-output").appendChild(img);
            }
        });
        res.figures = figures;
        if (!same()) return res;
        if (!started) outClear();
        renderResult(res);
        return res;
    }

    function renderResult(res) {
        switch (res.status) {
            case "ok":
                if (!res.hasOutput) outLine("✔ Program selesai tanpa output. Gunakan print() untuk menampilkan hasil.", CLS.dim);
                else outLine("\n✔ Selesai (" + res.ms + " ms)", CLS.dim);
                break;
            case "syntax":
                outLine("Kode belum bisa dijalankan karena kesalahan sintaks:", CLS.bad);
                outLine(res.message, CLS.err);
                break;
            case "error":
                outLine((res.chunks.length ? "\n" : "") + res.message, CLS.err);
                break;
            case "timeout":
                outLine("\n⏱ " + (res.reason === "outlimit"
                    ? "Program dihentikan karena output terlalu banyak."
                    : "Program dihentikan karena berjalan lebih dari " + (EXEC_LIMIT_MS / 1000) + " detik (mungkin ada loop yang tidak pernah berhenti)."), CLS.warn);
                break;
            case "limited":
                outLine("\nℹ Kode ini memakai " + res.detail + ". Sintaksnya sudah benar; untuk soal seperti ini jawaban diperiksa dari sintaks dan struktur kode.", CLS.warn);
                break;
            case "engine-failed":
                outLine("⚠ Mesin Python tidak dapat dimuat (periksa koneksi internet, lalu klik label status di atas editor untuk mencoba lagi). Jawaban hanya bisa diperiksa dari struktur kode.", CLS.warn);
                break;
            default:
                break;
        }
    }

    async function onRun() {
        if (busy) return;
        const code = $("code-input").value;
        if (!code.trim()) {
            outClear();
            outLine("Kolom kode masih kosong. Tulis kode Python terlebih dahulu.", CLS.warn);
            return;
        }
        if (currentTask().mode === "text") {
            outClear();
            outLine("ℹ Soal ini berupa konfigurasi, perintah, atau penjelasan, jadi tidak dijalankan sebagai Python. Klik “Periksa Jawaban” untuk menilai isi jawabanmu.", CLS.warn);
            return;
        }
        setBusy(true);
        try { await runAndRender(code); } finally { setBusy(false); }
    }

    function runValidator(task, lvl, src) {
        try {
            if (task.validate(src)) return true;
            // Validator level 78+ ditulis huruf kecil; kode murid (mis. AutoTokenizer) dicek tanpa peka huruf besar/kecil.
            return lvl.id >= 78 && !!task.validate(src.toLowerCase());
        } catch (e) { return false; }
    }

    function structureOk(code, task, lvl) {
        if (task.mode === "text") {
            // Teks apa adanya: tanda # bermakna di Dockerfile/YAML/C, jadi komentar tidak dibuang.
            return runValidator(task, lvl, code) && code.replace(/\s+/g, "").length >= (task.minChars || 6);
        }
        // Komentar dibuang; untuk level 1-48 isi string juga dikosongkan agar print("def return") tidak lolos.
        return runValidator(task, lvl, stripPyComments(code, !!task.noStrings));
    }

    function judge(code, task, lvl, res) {
        const structOk = structureOk(code, task, lvl);
        const notMatching = "Kode belum memenuhi instruksi soal. Baca lagi soalnya dan gunakan 💡 Petunjuk jika perlu.";

        if (task.mode === "text") {
            return structOk
                ? { pass: true, note: "Soal ini diperiksa dari isi teks jawabanmu (tidak dijalankan sebagai Python)." }
                : { pass: false, reason: "Jawaban belum sesuai instruksi soal (atau terlalu singkat). Baca lagi soalnya dan gunakan 💡 Petunjuk." };
        }

        switch (res.status) {
            case "syntax":
                return { pass: false, reason: "Sintaks Python masih salah. Perbaiki error di terminal dulu." };
            case "error":
                return { pass: false, reason: "Kode menghasilkan error saat dijalankan. Baca pesan error di terminal." };
            case "timeout":
                return { pass: false, reason: "Kode tidak selesai tepat waktu (cek apakah ada loop yang tidak pernah berhenti)." };
            case "ok": {
                if (!structOk) return { pass: false, reason: "Kode berjalan tanpa error, tetapi " + notMatching.charAt(0).toLowerCase() + notMatching.slice(1) };
                const stdout = res.chunks.filter(function (c) { return c.stream === "stdout"; }).map(function (c) { return c.text; }).join("");
                const anyOut = res.figures > 0 || res.chunks.some(function (c) { return c.text.trim() !== ""; });
                if (task.needsStdout && !res.hasOutput) return { pass: false, reason: "Kode berjalan, tetapi tidak menampilkan output. Pastikan memakai print() dan, jika membuat fungsi, memanggilnya." };
                if (task.needsAnyOutput && !anyOut) return { pass: false, reason: "Soal meminta hasil dicetak, tetapi program tidak menampilkan apa pun. Gunakan print() dan panggil fungsi yang kamu buat." };
                if (task.expect && !task.expect.test(stdout)) return { pass: false, reason: "Program berjalan, tetapi hasil yang dicetak belum sesuai dengan yang diminta soal. Cek lagi nilai dan teks yang dicetak." };
                return { pass: true };
            }
            default: // limited / engine-failed
                if (!structOk) return { pass: false, reason: notMatching };
                return { pass: true, note: res.status === "limited"
                    ? "Soal ini memakai library/fitur yang tidak bisa dijalankan di browser, jadi diperiksa dari sintaks dan struktur kode."
                    : "Mesin Python tidak aktif, jadi jawaban hanya diperiksa dari struktur kode." };
        }
    }

    function markDone(lvl, idx) {
        let set = state.done[lvl.id];
        if (!set) set = state.done[lvl.id] = new Set();
        if (set.has(idx)) return { newlyDone: false };
        set.add(idx);
        const levelCompleted = set.size === lvl.tasks.length;
        return { newlyDone: true, xp: taskXp(lvl), levelCompleted: levelCompleted, bonus: levelCompleted ? levelBonus(lvl) : 0 };
    }

    async function onCheck() {
        if (busy) return;
        const code = $("code-input").value;
        if (!code.trim()) {
            outClear();
            outLine("Tulis kode solusi terlebih dahulu sebelum memeriksa jawaban.", CLS.warn);
            return;
        }
        const lvl = currentLevel();
        const idx = state.taskIndex;
        const task = currentTask();

        let res;
        if (task.mode === "text") {
            outClear();
            res = { status: "text", chunks: [], figures: 0 };
        } else {
            setBusy(true);
            try { res = await runAndRender(code); } finally { setBusy(false); }
        }

        // Murid mungkin berpindah soal selagi kode berjalan; jangan beri kredit ke soal yang salah.
        if (lvl.id !== state.levelId || idx !== state.taskIndex) return;

        const verdict = judge(code, task, lvl, res);
        outLine("", CLS.dim);
        if (!verdict.pass) {
            outLine("❌ Jawaban belum tepat", CLS.bad);
            outLine(verdict.reason, CLS.info);
            toast("Jawaban belum tepat", "warn", 2200);
            return;
        }

        const rankBefore = rankFor(totalTasksDone());
        const result = markDone(lvl, idx);
        saveSoon();
        renderHeader();
        renderSidebar();
        renderDots();

        if (result.newlyDone) {
            outLine("🎉 Benar! Soal " + (idx + 1) + " selesai. +" + result.xp + " XP", CLS.ok);
            toast("+" + result.xp + " XP", "xp", 2200);
            if (result.levelCompleted) {
                outLine("🏆 Level " + lvl.id + " tuntas! Bonus +" + result.bonus + " XP", CLS.ok);
                toast("🏆 Level " + lvl.id + " tuntas! Bonus +" + result.bonus + " XP", "success", 4500);
            }
            const rankAfter = rankFor(totalTasksDone());
            if (rankAfter !== rankBefore) toast("🎖️ Rank baru: " + rankAfter, "success", 4500);
        } else {
            outLine("✔ Benar! (Soal ini sudah pernah diselesaikan, tidak ada XP tambahan.)", CLS.ok);
        }
        if (verdict.note) outLine("ℹ " + verdict.note, CLS.warn);

        const allDone = completedLevelCount() === levelsData.length;
        if (allDone && result.levelCompleted) {
            showFinish();
            return;
        }
        const next = el("button", "mt-3 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition", "Lanjut ke soal berikutnya →");
        next.type = "button";
        next.addEventListener("click", goNext);
        $("code-output").appendChild(next);
        $("code-output").scrollTop = $("code-output").scrollHeight;
    }

    function onHint() {
        const out = $("code-output");
        if (out.dataset.ph) outClear(); else outLine("", CLS.dim);
        outLine("💡 Petunjuk untuk soal ini:", "text-amber-400 font-semibold");
        outLine(currentTask().hint, CLS.info);
    }

    function showFinish() {
        const dlg = $("finish-dialog");
        if (typeof dlg.showModal === "function") dlg.showModal();
        else toast("🏆 Selamat! Semua level sudah tuntas.", "success", 8000);
    }

    /* ------------------------------------------------------------------
       9. EDITOR (Tab, auto-indent, nomor baris, pintasan keyboard)
       ------------------------------------------------------------------ */
    function insertText(editor, text) {
        editor.focus();
        let ok = false;
        try { ok = document.execCommand("insertText", false, text); } catch (e) { ok = false; }
        if (!ok) {
            editor.setRangeText(text, editor.selectionStart, editor.selectionEnd, "end");
            editor.dispatchEvent(new Event("input", { bubbles: true }));
        }
    }

    function setupEditor() {
        const editor = $("code-input");
        let tabEscaped = false;

        editor.addEventListener("input", function () {
            updateLineNumbers();
            saveDraftNow();
            saveSoon();
        });
        editor.addEventListener("scroll", function () { $("line-numbers").scrollTop = editor.scrollTop; });

        editor.addEventListener("keydown", function (e) {
            const v = editor.value;
            const s = editor.selectionStart;
            const en = editor.selectionEnd;
            const mod = e.ctrlKey || e.metaKey;

            if (e.key === "Escape") { tabEscaped = true; return; }

            if (mod && e.key === "Enter") {
                e.preventDefault();
                if (e.shiftKey) onCheck(); else onRun();
                return;
            }

            if (e.key === "Tab" && !mod && !e.altKey) {
                if (tabEscaped) { tabEscaped = false; return; } // biarkan fokus berpindah (aksesibilitas)
                e.preventDefault();
                if (s === en && !e.shiftKey) {
                    const col = s - (v.lastIndexOf("\n", s - 1) + 1);
                    insertText(editor, " ".repeat(INDENT.length - (col % INDENT.length)));
                    return;
                }
                const lineStart = v.lastIndexOf("\n", s - 1) + 1;
                const endRef = (en > s && v[en - 1] === "\n") ? en - 1 : en;
                let lineEnd = v.indexOf("\n", endRef);
                if (lineEnd === -1) lineEnd = v.length;
                const block = v.slice(lineStart, lineEnd);
                const lines = block.split("\n");
                const changed = lines.map(function (line) {
                    if (e.shiftKey) return line.replace(/^( {1,4}|\t)/, "");
                    return line.trim() === "" ? line : INDENT + line;
                });
                const newBlock = changed.join("\n");
                editor.setSelectionRange(lineStart, lineEnd);
                insertText(editor, newBlock);
                const firstDelta = changed[0].length - lines[0].length;
                editor.setSelectionRange(Math.max(lineStart, s + firstDelta), en + (newBlock.length - block.length));
                return;
            }
            tabEscaped = false;

            if (e.key === "Enter" && !mod && !e.shiftKey && !e.altKey && s === en) {
                e.preventDefault();
                const lineStart = v.lastIndexOf("\n", s - 1) + 1;
                const before = v.slice(lineStart, s);
                const indent = before.match(/^[ \t]*/)[0];
                const opensBlock = stripPyComments(before).trimEnd().endsWith(":");
                insertText(editor, "\n" + indent + (opensBlock ? INDENT : ""));
                return;
            }

            if (e.key === "Backspace" && !mod && !e.altKey && s === en && s > 0) {
                const lineStart = v.lastIndexOf("\n", s - 1) + 1;
                const before = v.slice(lineStart, s);
                if (before.length > 0 && /^ +$/.test(before)) {
                    e.preventDefault();
                    const n = (before.length % INDENT.length) || INDENT.length;
                    editor.setSelectionRange(s - n, s);
                    if (!document.execCommand("delete")) {
                        editor.setRangeText("", s - n, s, "end");
                        editor.dispatchEvent(new Event("input", { bubbles: true }));
                    }
                }
            }
        });
    }

    /* ------------------------------------------------------------------
       10. KONTROL LAIN (salin contoh, ekspor/impor, reset, status mesin)
       ------------------------------------------------------------------ */
    async function copyText(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (e) {
            const ta = el("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            let ok = false;
            try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
            ta.remove();
            return ok;
        }
    }

    function exportProgress() {
        saveDraftNow();
        const blob = new Blob([JSON.stringify(serialize(), null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = el("a");
        a.href = url;
        a.download = "python-odyssey-progress-" + new Date().toISOString().slice(0, 10) + ".json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        toast("Progress diekspor.", "success");
    }

    function importProgress(file) {
        if (!file) return;
        if (file.size > 2 * 1024 * 1024) { toast("File terlalu besar untuk file progress.", "warn"); return; }
        const reader = new FileReader();
        reader.onload = function () {
            try {
                const data = JSON.parse(String(reader.result));
                if (!applyData(data)) throw new Error("format");
                ensureUnlocked();
                saveNow();
                renderAll();
                toast("Progress berhasil diimpor.", "success");
            } catch (e) {
                toast("File progress tidak valid.", "warn");
            }
        };
        reader.onerror = function () { toast("Gagal membaca file.", "warn"); };
        reader.readAsText(file);
    }

    function resetProgress() {
        if (!window.confirm("Hapus SEMUA progress, XP, dan draf kode? Tindakan ini tidak bisa dibatalkan.")) return;
        state.done = {};
        state.drafts = {};
        state.levelId = 1;
        state.taskIndex = 0;
        try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* abaikan */ }
        renderAll();
        toast("Progress direset.", "info");
    }

    function setupEngineBadge() {
        const badge = $("engine-status");
        PyEngine.onState(function (s) {
            const map = {
                idle: ["💤 Python dimuat saat pertama dijalankan", "border-slate-700 text-slate-400"],
                loading: ["⏳ Memuat mesin Python…", "border-amber-500/40 text-amber-300"],
                ready: ["● Python siap", "border-emerald-500/40 text-emerald-300"],
                failed: ["⚠ Mesin Python offline (klik untuk coba lagi)", "border-rose-500/40 text-rose-300"]
            };
            const entry = map[s] || map.idle;
            badge.textContent = entry[0];
            badge.className = "text-[11px] font-semibold px-2.5 py-1 rounded-full border " + entry[1];
        });
        badge.addEventListener("click", function () { PyEngine.retry(); });
    }

    /* ------------------------------------------------------------------
       11. INISIALISASI
       ------------------------------------------------------------------ */
    function init() {
        loadState();
        ensureUnlocked();
        setupEditor();
        setupEngineBadge();

        $("btn-run").addEventListener("click", onRun);
        $("btn-check").addEventListener("click", onCheck);
        $("btn-hint").addEventListener("click", onHint);
        $("btn-clear").addEventListener("click", function () {
            const editor = $("code-input");
            editor.value = "";
            updateLineNumbers();
            saveDraftNow();
            saveSoon();
            showPlaceholder("// Kolom kode dikosongkan. Silakan tulis ulang...");
            editor.focus();
        });
        $("btn-prev-task").addEventListener("click", function () {
            const n = currentLevel().tasks.length;
            goTo(state.levelId, (state.taskIndex - 1 + n) % n);
        });
        $("btn-next-task").addEventListener("click", function () {
            const n = currentLevel().tasks.length;
            goTo(state.levelId, (state.taskIndex + 1) % n);
        });
        $("btn-copy-example").addEventListener("click", async function () {
            const ok = await copyText(currentLevel().example);
            toast(ok ? "Contoh kode disalin." : "Gagal menyalin. Salin manual dari kotak contoh.", ok ? "success" : "warn");
        });
        $("btn-use-example").addEventListener("click", function () {
            const editor = $("code-input");
            if (editor.value.trim() && editor.value !== currentLevel().example &&
                !window.confirm("Ganti isi editor dengan contoh kode?")) return;
            editor.value = currentLevel().example;
            updateLineNumbers();
            saveDraftNow();
            saveSoon();
            editor.focus();
        });

        $("level-search").addEventListener("input", renderSidebar);
        $("opt-lock").addEventListener("change", function (e) {
            state.settings.lockOrder = e.target.checked;
            ensureUnlocked();
            saveNow();
            renderAll();
        });
        $("btn-menu").addEventListener("click", openSidebar);
        $("btn-close-sidebar").addEventListener("click", closeSidebar);
        $("btn-export").addEventListener("click", exportProgress);
        $("btn-import").addEventListener("click", function () { $("import-file").click(); });
        $("import-file").addEventListener("change", function (e) {
            importProgress(e.target.files[0]);
            e.target.value = "";
        });
        $("btn-reset").addEventListener("click", resetProgress);
        $("btn-finish-close").addEventListener("click", function () { $("finish-dialog").close(); });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") closeSidebar();
        });
        window.addEventListener("beforeunload", function () { saveDraftNow(); saveNow(); });
        document.addEventListener("visibilitychange", function () {
            if (document.visibilityState === "hidden") { saveDraftNow(); saveNow(); }
        });

        renderAll();
        const active = $("level-list").querySelector('[aria-current="true"]');
        if (active) active.scrollIntoView({ block: "nearest" });
        // Mesin Python (~10 MB) dimuat malas: saat editor pertama kali difokuskan atau saat Run/Periksa.
        $("code-input").addEventListener("focus", function () { PyEngine.start(); }, { once: true });
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
