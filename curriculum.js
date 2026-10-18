/* =====================================================================
   PYTHON ODYSSEY - curriculum.js
   Kurikulum: levelsData (level, materi, soal, validator) beserta semua tambalan/urutan.
   Dimuat SEBELUM app.js (const levelsData berada di cakupan global skrip klasik).
   Logika aplikasi ada di app.js.
   ===================================================================== */

const levelsData = [
    {
        id: 1, category: "Beginner", title: "Level 1: Variabel & Tipe Data",
        desc: "<b>Definisi Konsep Mendalam:</b> Variabel adalah simbol penamaan atau wadah yang dialokasikan di dalam memori komputer untuk menyimpan nilai data tertentu. Dalam Python, kita tidak perlu mendeklarasikan tipe data secara eksplisit berkat sistem <i>dynamic typing</i> yang otomatis mengenali nilai.<br><br><b>Analisis Rinci Tipe Data Fundamental:</b><br>• <b>Integer (<code>int</code>):</b> Bilangan bulat tanpa komponen desimal, baik positif, negatif, maupun nol (contoh: <code>25</code>, <code>-5</code>).<br>• <b>Float (<code>float</code>):</b> Bilangan desimal atau pecahan yang menggunakan tanda titik <code>.</code> sebagai pemisah (contoh: <code>3.14</code>, <code>175.5</code>).<br>• <b>String (<code>str</code>):</b> Teks atau karakter alfanumerik yang wajib diapit dengan tanda kutip tunggal atau ganda (contoh: <code>\"Rafi\"</code>).<br>• <b>Boolean (<code>bool</code>):</b> Nilai logika biner yang bernilai benar (<code>True</code>) atau salah (<code>False</code>) dengan huruf kapital di awal.",
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
            { task: "Buat fungsi 'sapa_pengguna(nama)' yang mengembalikan string sapaan, uji dengan nama 'Niko'.", hint: "Gunakan f-string di dalam return.", validate: c => c.includes("def") && c.includes("return") },
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
        example: `class ValidasiAngka:\n    def __set_name__(self, owner, name):\n        self.nama = name\n    def __get__(self, instance, owner):\n        return instance.__dict__[self.nama]\n    def __set__(self, instance, value):\n        if value < 0: raise ValueError("Harus positif")\n        instance.__dict__[self.nama] = value`,
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
        example: `def hitung(n):\n    for i in range(n):\n        yield i\n\nfor val in hitung(3):\n    print(val)\n\npy_gen = (x for x in range(3))  # generator expression`,
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
        example: `import json\n\ndata = {"nama": "Rafi", "level": 34}\njs_str = json.dumps(data)\nprint(js_str)`,
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
        desc: "<b>Definisi Konsep Mendalam:</b> Melepaskan ketergantungan kaku antar komponen kode (<i>loosely coupled</i>).<br><br><b>Poin Penting:</b><br>• Menyuntikkan objek dependensi melalui parameter konstruktor (<code>__init__</code>).<br>• Meningkatkan kemudahan unit testing dan fleksibilitas arsitektur.<br>• <b>ABC (Abstract Base Class):</b> kelas dasar dari modul <code>abc</code> yang menolak diinstansiasi selama method <code>@abstractmethod</code>-nya belum diimplementasikan; dipakai sebagai 'kontrak' antarmuka (<code>from abc import ABC, abstractmethod</code>).",
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
        desc: "<b>Definisi Konsep Mendalam:</b> Metaprogramming lanjutan (kelanjutan dari metaclass) untuk memanipulasi struktur kode program Python saat runtime.<br><br><b>Poin Penting:</b><br>• Menggunakan modul <code>ast</code> untuk mem-parse string kode menjadi pohon sintaks (Abstract Syntax Trees) serta melakukan transformasi node.",
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
            { task: "Parse kode 'def a(): pass' dan 'def b(): pass' (dua baris, dipisah \\n) dengan ast.parse, hitung jumlah node ast.FunctionDef memakai ast.walk, lalu cetak hasilnya (2).", hint: "tree = ast.parse('def a(): pass\\ndef b(): pass'); sum(isinstance(n, ast.FunctionDef) for n in ast.walk(tree))", validate: c => /ast\.walk\s*\(/.test(c) && /FunctionDef/.test(c), expect: /(^|\D)2(\D|$)/ }
        ]
    },
    {
        id: 49, category: "Web API", title: "Level 49: FastAPI: Routing, Path & Query Parameters",
        desc: "<b>Definisi Konsep Mendalam:</b> FastAPI adalah kerangka kerja web modern berkinerja tinggi untuk membangun API dengan Python berdasarkan standar tipe data type hints.<br><br><b>Poin Penting:</b><br>• <code>Path Parameters</code>: Variabel bagian dari URL endpoint.<br>• <code>Query Parameters</code>: Parameter tambahan setelah tanda tanya (<code>?</code>) di URL.",
        example: `from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/items/{item_id}")\nasync def read_item(item_id: int, q: str | None = None):\n    return {"item_id": item_id, "q": q}`,
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
        example: `from pydantic import BaseModel, field_validator\n\nclass User(BaseModel):\n    username: str\n    age: int\n\n    @field_validator('age')\n    @classmethod\n    def validate_age(cls, v):\n        if v < 18: raise ValueError("Harus dewasa")\n        return v`,
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
            { task: "Tulis program Python yang mencetak 5 teknologi utama yang kamu pelajari di Python Odyssey, satu per baris, memakai perulangan for.", hint: "technologies = [...]; for t in technologies: print(t)", validate: c => c.includes("for") && c.includes("print") }
        ]
    }
];


levelsData.push({
    id: 101, category: "Intermediate", title: "Level 101: OOP Dasar: Class, Object, & __init__",
    desc: "<b>Definisi Konsep Mendalam:</b> <i>Class</i> adalah cetak biru, <i>object</i> adalah hasil cetakannya. Class menggabungkan data (atribut) dan perilaku (method) dalam satu unit.<br><br><b>Poin Penting:</b><br>• <code>class Nama:</code> mendefinisikan class.<br>• <code>__init__(self, ...)</code> adalah konstruktor yang dipanggil otomatis saat objek dibuat.<br>• <code>self</code> merujuk ke objek itu sendiri; atribut dibuat dengan <code>self.atribut = nilai</code>.",
    example: `class Mobil:\n    def __init__(self, merk):\n        self.merk = merk\n    def info(self):\n        return f"Mobil {self.merk}"\n\nm = Mobil("Toyota")\nprint(m.info())`,
    tasks: [
        { task: "Buat class 'Kucing' dengan konstruktor __init__ yang menyimpan atribut 'nama'. Buat objek lalu cetak atribut nama.", hint: "self.nama = nama di dalam __init__.", validate: c => c.includes("class") && c.includes("__init__") && c.includes("self") && c.includes("print") },
        { task: "Buat class 'Mobil' dengan atribut merk dan warna, buat dua objek berbeda, lalu cetak merk keduanya.", hint: "Setiap objek punya atribut sendiri.", validate: c => c.includes("class") && c.includes("__init__") && c.includes("print") },
        { task: "Buat class 'Buku' dengan method 'info(self)' yang mengembalikan judul dan penulis, lalu cetak hasilnya.", hint: "Method selalu menerima self sebagai parameter pertama.", validate: c => c.includes("class") && c.includes("def info") && c.includes("return") },
        { task: "Buat class 'Counter' dengan atribut nilai = 0 dan method 'tambah(self)' yang menaikkan nilai 1. Panggil 3 kali lalu cetak nilai.", hint: "self.nilai += 1", validate: c => c.includes("class") && c.includes("self.nilai") },
        { task: "Buat class 'Dompet' dengan saldo awal dari parameter dan method 'setor(self, jumlah)'. Setor 5000 lalu cetak saldo.", hint: "self.saldo += jumlah", validate: c => c.includes("class") && c.includes("def setor") },
        { task: "Buat class 'Siswa' dengan parameter default nilai=0 pada __init__. Buat objek tanpa dan dengan nilai, lalu cetak keduanya.", hint: "def __init__(self, nama, nilai=0):", validate: c => c.includes("class") && /nilai\s*=\s*0/.test(c) },
        { task: "Buat class 'Lingkaran' dengan method 'luas(self)' yang menghitung 3.14 * r ** 2. Cetak luas untuk r = 10.", hint: "Simpan r sebagai self.r.", validate: c => c.includes("class") && c.includes("def luas") && c.includes("**") },
        { task: "Buat class 'Hewan' dengan class variable 'kingdom' bernilai 'Animalia'. Cetak dari class maupun dari objek.", hint: "Class variable ditulis langsung di bawah class, di luar method.", validate: c => c.includes("class") && c.includes("kingdom") && c.includes("print") },
        { task: "Buat list berisi 3 objek class 'Produk' (nama, harga), lalu loop for untuk mencetak nama dan harga tiap produk.", hint: "for p in daftar: print(p.nama, p.harga)", validate: c => c.includes("class") && c.includes("for") && c.includes("print") },
        { task: "Buat class 'Kalkulator' dengan method 'tambah' dan 'kali' (dua parameter), panggil keduanya lalu cetak hasilnya.", hint: "Method bisa menerima parameter tambahan setelah self.", validate: c => c.includes("class") && c.includes("def tambah") && c.includes("def kali") }
    ]
});
levelsData.push({
    id: 102, category: "Advanced", title: "Level 102: Decorator Dasar (@decorator)",
    desc: "<b>Definisi Konsep Mendalam:</b> Di Python fungsi adalah objek: bisa disimpan di variabel dan dikirim sebagai argumen. <i>Decorator</i> adalah fungsi yang menerima fungsi lain, membungkusnya dengan perilaku tambahan, lalu mengembalikan pembungkus (<i>wrapper</i>).<br><br><b>Poin Penting:</b><br>• <code>@nama</code> di atas <code>def</code> sama dengan <code>f = nama(f)</code>.<br>• Wrapper memakai <code>*args, **kwargs</code> agar cocok untuk fungsi apa saja.<br>• <code>functools.wraps</code> menjaga nama asli fungsi.",
    example: `def log(func):\n    def wrapper(*args, **kwargs):\n        print("Memanggil", func.__name__)\n        return func(*args, **kwargs)\n    return wrapper\n\n@log\ndef tambah(a, b):\n    return a + b\n\nprint(tambah(2, 3))`,
    tasks: [
        { task: "Buat fungsi 'sapa()' yang mencetak 'Halo', simpan ke variabel 'f = sapa', lalu panggil f().", hint: "Tanpa tanda kurung, sapa adalah objek fungsi.", validate: c => c.includes("def") && c.includes("=") },
        { task: "Buat fungsi 'jalankan(fungsi)' yang menerima fungsi lain lalu memanggilnya. Uji dengan fungsi sapa.", hint: "def jalankan(fungsi): fungsi()", validate: c => c.includes("def jalankan") },
        { task: "Buat dekorator 'log' yang mencetak 'Mulai' sebelum fungsi dijalankan, lalu pasang dengan @log.", hint: "Dekorator berisi fungsi wrapper dan mengembalikan wrapper.", validate: c => c.includes("@log") && c.includes("wrapper") },
        { task: "Buat dekorator 'selesai' yang mencetak 'Selesai' setelah fungsi dijalankan.", hint: "Cetak setelah memanggil func().", validate: c => c.includes("@selesai") && c.includes("wrapper") },
        { task: "Buat dekorator yang meneruskan *args dan **kwargs serta mengembalikan hasil fungsi asli.", hint: "return func(*args, **kwargs)", validate: c => c.includes("*args") && c.includes("**kwargs") && c.includes("return") },
        { task: "Buat dekorator 'huruf_besar' yang mengubah hasil kembalian string menjadi kapital.", hint: "return func(*args, **kwargs).upper()", validate: c => c.includes("upper") && c.includes("@") },
        { task: "Buat dekorator 'ukur_waktu' yang mencetak durasi eksekusi memakai time.perf_counter().", hint: "Catat waktu sebelum dan sesudah memanggil func.", validate: c => c.includes("perf_counter") || c.includes("time.time") },
        { task: "Gunakan @functools.wraps(func) pada wrapper agar nama fungsi asli tidak hilang. Cetak __name__.", hint: "from functools import wraps", validate: c => c.includes("wraps") },
        { task: "Tumpuk dua dekorator (@a di atas @b) pada satu fungsi dan amati urutan eksekusinya.", hint: "Dekorator paling dekat dengan def dijalankan lebih dulu.", validate: c => (c.match(/@/g) || []).length >= 2 },
        { task: "Buat dekorator 'hitung_panggilan' yang menghitung berapa kali fungsi dipanggil (wrapper.jumlah), lalu cetak jumlahnya.", hint: "wrapper.jumlah = 0 lalu tambah 1 di dalam wrapper.", validate: c => c.includes("wrapper") && c.includes("jumlah") && c.includes("print") }
    ]
});


/* ---------- PERBAIKAN: validator spesifik + pustaka modern ----------
   fix(id, indeks, {task, hint, re: regex atau [regex], text: true = dinilai sebagai teks}) */
(function () {
    const L = function (id) { return levelsData.find(function (l) { return l.id === id; }); };
    function fix(id, idx, o) {
        const t = L(id).tasks[idx];
        if (o.task) t.task = o.task;
        if (o.hint) t.hint = o.hint;
        if (o.re) { const rs = [].concat(o.re); t.validate = function (c) { return rs.every(function (r) { return r.test(c); }); }; }
        if (o.text) t.forceText = true;
    }

    // L52 Alembic (semua jawaban berupa perintah/konfigurasi)
    [/alembic\s+init/i, /target_metadata\s*=\s*\w*\.?metadata/i, /alembic\s+revision\s+--autogenerate/i,
     /alembic\s+upgrade\s+(head|\+1|[0-9a-f]{4,})/i, /alembic\s+downgrade\s+(-1|base|[0-9a-f]{4,})/i,
     /alembic\s+(history|current)/i, [/mapped_column|Column\s*\(/i, /alembic\s+revision/i],
     /op\.add_column\s*\(/i, /alembic\s+(upgrade|current|check)/i, /(git\s+(add|commit)|versions\/?)/i
    ].forEach(function (re, i) { fix(52, i, { re: re, text: true }); });

    // L53 Auth: passlib tidak lagi dirawat -> bcrypt langsung
    const l53 = L(53);
    l53.desc = l53.desc.replace("(passlib/bcrypt)", "(bcrypt)").replace("<code>Passlib</code>", "<code>bcrypt</code> (passlib sudah tidak dirawat)");
    l53.example = 'import bcrypt\n\nhashed = bcrypt.hashpw("rahasia123".encode(), bcrypt.gensalt())\nprint(bcrypt.checkpw("rahasia123".encode(), hashed))';
    fix(53, 0, { task: "Impor bcrypt lalu buat salt acak dengan bcrypt.gensalt().", hint: "import bcrypt; salt = bcrypt.gensalt()", re: /bcrypt\.gensalt\s*\(/ });
    fix(53, 1, { task: "Buat fungsi hash_password(password) yang mengembalikan bcrypt.hashpw(password.encode(), bcrypt.gensalt()).", hint: "Password harus berupa bytes: password.encode().", re: [/def\s+hash_password/, /hashpw\s*\(/] });
    fix(53, 2, { task: "Buat fungsi verify_password(password, hashed) yang memakai bcrypt.checkpw().", hint: "bcrypt.checkpw(password.encode(), hashed)", re: [/def\s+verify_password/, /checkpw\s*\(/] });
    fix(53, 9, { re: /(authorize|bearer|\/docs)/i, text: true });

    // L57 Redis
    fix(57, 8, { re: /maxmemory-policy\s+(allkeys|volatile)-(lru|lfu|random)|maxmemory-policy\s+(volatile-ttl|noeviction)/i, text: true });
    fix(57, 9, { task: "Ukur waktu dua pemanggilan fungsi (tanpa cache dan dengan cache dictionary) memakai time.perf_counter(), lalu cetak keduanya.", hint: "Catat perf_counter() sebelum dan sesudah tiap pemanggilan.", re: [/perf_counter|time\.time/, /def\s/] });

    // L58 CORS / gateway
    fix(58, 3, { re: [/(incr|expire|zadd|zcard|rate)/i, /redis/i], text: true });
    fix(58, 5, { re: /x-api-key/i, text: true });
    fix(58, 6, { re: /(x-content-type-options|strict-transport-security)/i, text: true });
    fix(58, 7, { re: /(content-length|max_body|413)/i, text: true });
    fix(58, 8, { re: /(options|access-control-allow-origin|preflight)/i, text: true });
    fix(58, 9, { re: [/(cors|rate.?limit|api.?key|gateway|owasp)/i, /\w+\s+\w+\s+\w+/], text: true });

    // L78 Ollama: pakai paket langchain_ollama
    fix(78, 7, { task: "Impor ChatOllama dari langchain_ollama dan buat llm = ChatOllama(model='qwen2.5') untuk menghubungkan model lokal Ollama.",
                 hint: "from langchain_ollama import ChatOllama; llm = ChatOllama(model='qwen2.5')",
                 re: [/from\s+langchain_ollama\s+import\s+ChatOllama/i, /ChatOllama\s*\(/i] });
    L(78).tasks[8].task = "Kirim kueri teks ke model lokal Ollama melalui llm.invoke() dan cetak response.content.";
    L(78).tasks[8].hint = "response = llm.invoke('Halo!'); print(response.content)";
    L(72).tasks[5].hint = "from langchain_chroma import Chroma (paket langchain-chroma)";

    // L84 Prometheus
    fix(84, 5, { re: /(scrape_configs|static_configs|targets)/i, text: true });
    fix(84, 7, { re: /(curl|httpx|requests|localhost:\d+\/metrics)/i, text: true });
    fix(84, 8, { re: [/grafana|data\s*source|datasource/i, /prometheus/i], text: true });
    fix(84, 9, { re: /(alert\s*:|groups\s*:|expr\s*:|rate\s*\()/i, text: true });

    // L88 Kubernetes
    fix(88, 9, { task: "Tulis manifes HorizontalPodAutoscaler atau perintah kubectl autoscale untuk menskalakan deployment python-app berdasarkan CPU.",
                 hint: "kubectl autoscale deployment python-app --cpu-percent=70 --min=2 --max=5",
                 re: /(HorizontalPodAutoscaler|kubectl\s+autoscale)/i, text: true });

    // L92-94: soal "Pahami..." diganti tugas yang bisa diuji
    fix(92, 0, { task: "Tulis fungsi Cython 'cpdef int kuadrat(int x)' yang mengembalikan x * x.", hint: "cpdef int kuadrat(int x): return x * x", re: /cpdef\s+int\s+kuadrat\s*\(\s*int\s+\w+\s*\)/i, text: true });
    fix(92, 5, { task: "Tulis kode Python dengan timeit yang membandingkan dua fungsi (mis. loop biasa vs sum(range())) lalu cetak kedua waktunya.", hint: "timeit.timeit(fungsi, number=1000)", re: [/timeit/, /def\s/], text: true });
    fix(92, 6, { task: "Tulis perintah terminal untuk menjalankan skrip 'hitung.py' dengan interpreter PyPy.", hint: "pypy3 hitung.py", re: /pypy3?\s+\S+\.py/i, text: true });
    fix(92, 7, { task: "Tulis fungsi Cython yang memakai 'cdef int i, total = 0' dan perulangan 'for i in range(n)' untuk menjumlahkan angka dengan tipe C.", hint: "cdef int i, total = 0", re: [/cdef\s+int/i, /for\s+\w+\s+in\s+range/], text: true });
    fix(92, 9, { task: "Tulis dua kalimat yang menjelaskan kapan Cython layak dipakai (sebut kata 'bottleneck' atau 'CPU').", hint: "Pakai Cython hanya untuk fungsi bottleneck yang CPU-bound.", re: [/cython/i, /(bottleneck|cpu|profil)/i], text: true });
    fix(93, 4, { task: "Buat async with asyncio.TaskGroup() berisi dua tugas, lalu cetak 'selesai' setelah blok with berakhir.", hint: "print di luar blok async with berjalan setelah semua tugas selesai.", re: [/taskgroup/i, /create_task/] });
    fix(93, 5, { task: "Di dalam TaskGroup, buat satu tugas yang melempar ValueError; tangkap dengan except* ValueError dan cetak pesannya.", hint: "except* ValueError as eg: print(eg.exceptions)", re: [/except\s*\*\s*ValueError/, /raise\s+ValueError/] });
    fix(93, 8, { task: "Jalankan tiga coroutine dengan asyncio.gather() lalu cetak daftar hasilnya.", hint: "hasil = await asyncio.gather(f(1), f(2), f(3))", re: [/gather\s*\(/, /async\s+def/] });
    fix(93, 9, { task: "Ukur waktu total tiga tugas asyncio.sleep(0.1) yang berjalan konkuren dalam TaskGroup memakai time.perf_counter(), lalu cetak durasinya.", hint: "Hasilnya sekitar 0.1 detik, bukan 0.3.", re: [/perf_counter|time\.time/, /taskgroup/i] });
    fix(94, 0, { task: "Tulis kerangka modul C: '#include <Python.h>' dan fungsi 'static PyObject* jumlah(PyObject* self, PyObject* args)'.", hint: "#include <Python.h> lalu definisikan fungsi static PyObject*.", re: [/#include\s*<Python\.h>/i, /static\s+PyObject\s*\*\s*jumlah\s*\(/i], text: true });

    // L97-L100: jawaban teks/konfigurasi yang dulu lolos dengan c.length > 3
    fix(97, 3, { re: /(registry|consul|service_registry|SERVICES\s*=)/i, text: true });
    fix(97, 4, { re: /(trace[-_]?id|x-request-id|traceparent)/i, text: true });
    fix(97, 5, { re: /(pika|kafka|basic_publish|producer\.send|publish)/i, text: true });
    fix(97, 6, { re: [/(httpx|requests)/i, /(forward|proxy|route)/i], text: true });
    fix(97, 7, { re: /(user_db|order_db|users\.db|orders\.db|create_engine)/i, text: true });
    fix(97, 8, { re: /(fallback|try\s*:|except|CircuitBreakerError)/i, text: true });
    fix(97, 9, { re: [/(user[-_ ]service|order[-_ ]service)/i, /(->|→|http|event|gateway)/i], text: true });
    fix(98, 8, { re: /(basic_ack|auto_ack|acknowledg|\back\b)/i, text: true });
    fix(98, 9, { re: [/(publish|send)/i, /consum/i], text: true });
    fix(99, 4, { re: /(rollback|begin_nested)/i, text: true });
    fix(100, 7, { re: /(bcrypt|hashpw|BaseModel|OWASP)/i, text: true });
    fix(100, 8, { re: /(readme|##?\s|install|docker compose|endpoint)/i, text: true });
})();


/* ---------- PERBAIKAN (lanjutan): sisa validator c.length > N ----------
   fx(id, indeks, regex | [regex], {task, hint, py:true}) -> py:true = tetap dijalankan sebagai Python */
(function () {
    const L = function (id) { return levelsData.find(function (l) { return l.id === id; }); };
    function fx(id, idx, re, o) {
        o = o || {};
        const t = L(id).tasks[idx], rs = [].concat(re);
        t.validate = function (c) { return rs.every(function (r) { return r.test(c); }); };
        if (o.task) t.task = o.task;
        if (o.hint) t.hint = o.hint;
        if (!o.py) t.forceText = true;
    }
    // Data Engineering
    fx(60, 0, [/iterrows/, /(perf_counter|timeit|time\.time)/], { py: true, task: "Bandingkan iterrows() vs operasi vektor pada kolom DataFrame memakai time.perf_counter(), lalu cetak kedua waktunya." });
    fx(60, 5, /(@n?jit|numba)/i);
    fx(66, 9, /adfuller\s*\(/, { task: "Impor adfuller dari statsmodels.tsa.stattools dan panggil adfuller(series) untuk uji stasioneritas.", hint: "from statsmodels.tsa.stattools import adfuller" });
    fx(62, 6, [/(timestamp|last_|watermark|since|tanggal)/i, />=?/], { py: true });
    fx(62, 9, [/(extract|sumber)/i, /transform/i, /(load|tujuan)/i]);
    fx(65, 4, /airflow\s+tasks\s+test/i);
    fx(65, 7, /airflow\s+(standalone|webserver|scheduler)/i);
    fx(65, 8, /(localhost:8080|graph|grid)/i);
    fx(65, 9, /(task_id|naming|nama|retries|idempot|owner)/i);
    fx(64, 2, [/to_csv/, /to_parquet/, /(getsize|stat\(\)|perf_counter|timeit)/], { py: true });
    fx(64, 5, /(merge|update|delete|transaction|_delta_log|acid)/i);
    fx(64, 6, /(versionAsOf|timestampAsOf)/);
    fx(64, 8, /(optimize|vacuum)/i);
    fx(64, 9, [/parquet/i, /delta/i, /(lakehouse|acid|columnar|kolom)/i]);
    fx(63, 1, /(get_validator|from_pandas|add_dataframe_asset|pandas)/i);
    fx(63, 6, /\.success|\[.success.\]/i);
    fx(63, 7, /(build_data_docs|data_docs)/i);
    fx(63, 8, [/(def\s|validate)/i, /(load|expect_)/i]);
    fx(63, 9, [/(expect_|validate)/i, /(None|NaN|nan|null|-\d)/]);
    fx(67, 4, /scrapy\s+crawl\s+\S+\s+-o\s+\S+\.(json|csv)/);
    fx(67, 5, /DOWNLOAD_DELAY\s*=\s*\d/);
    fx(67, 6, [/user.?agent/i, /(random|choice)/i]);
    fx(67, 9, [/robots/i, /(ROBOTSTXT_OBEY|delay|rate)/i]);
    fx(68, 7, /(set_title|set_xlabel|set_ylabel|update_layout|title\s*=)/, { py: true });
    fx(68, 9, /subplots\s*\(\s*2\s*,\s*2/, { py: true, task: "Buat satu figure dengan plt.subplots(2, 2) berisi empat grafik kecil.", hint: "fig, axes = plt.subplots(2, 2)" });
    // Web API
    fx(79, 8, [/os\.environ/, /(getenv|\[)/], { py: true });
    fx(79, 9, [/(try|except|ValidationError)/, /Settings\s*\(/], { py: true });
    fx(49, 9, /\/docs/);
    fx(56, 3, /celery\s+-A\s+\S+\s+worker/);
    fx(56, 8, /celery\s+(-A\s+\S+\s+)?flower/);
    fx(54, 9, /(new\s+WebSocket|websocket_connect)/i);
    fx(55, 7, /(^|\s)pytest\b/);
    fx(55, 8, /pytest\s+.*--cov/);
    // AI Engineering
    fx(77, 7, /\w+\s*=\s*model\s*\(/, { py: true });
    fx(77, 8, /=\s*criterion\s*\(/, { py: true });
    fx(77, 9, [/for\s+epoch/, /print/], { py: true });
    fx(78, 9, [/ollama|lokal|local/i, /(cloud|openai|privasi|privacy)/i]);
    fx(72, 4, /\[\s*['"]documents['"]\s*\]\s*\[\s*0\s*\]/);
    fx(73, 6, [/(konteks|context)/i, /(hanya|only|berdasarkan)/i]);
    fx(73, 9, [/(question|pertanyaan|query)/i, /(assert|expected|jawaban)/i]);
    fx(74, 4, /(tools\s*=|SerperDevTool|FileReadTool|BaseTool|@tool)/);
    fx(74, 5, /process\s*=\s*Process\.(hierarchical|sequential)/);
    fx(74, 9, /(verbose\s*=\s*True|log|output_log_file)/i);
    fx(75, 0, [/"messages"\s*:/, /"role"/, /"assistant"/]);
    fx(75, 5, /(Input|Contoh)[\s\S]*(Output|Jawab)/i);
    fx(75, 6, /(langkah demi langkah|step[ -]by[ -]step)/i);
    fx(75, 7, /(anda adalah|you are|kamu adalah)/i);
    fx(75, 8, /(jangan|tidak boleh|do not|don't|never)/i);
    fx(75, 9, [/(akurasi|accuracy|skor|score)/i, /(sebelum|before|base)/i, /(sesudah|setelah|after|ft:)/i]);
    // DevOps
    fx(80, 7, [/venv/, /__pycache__/]);
    fx(82, 9, /actions\/workflows\/\S+\/badge\.svg/, { task: "Tulis badge status workflow untuk README: ![CI](https://github.com/USER/REPO/actions/workflows/ci.yml/badge.svg)", hint: "Format: https://github.com/USER/REPO/actions/workflows/ci.yml/badge.svg" });
    fx(83, 8, [/(sentry-debug|debug-sentry|\/error|\/boom)/i, /(1\s*\/\s*0|raise)/], { task: "Tulis endpoint FastAPI '/sentry-debug' yang sengaja memicu error (1 / 0) untuk menguji Sentry.", hint: "@app.get('/sentry-debug') def trigger(): return 1 / 0" });
    fx(83, 9, [/INFO/, /ERROR/, /(DEBUG|WARNING)/]);
    fx(85, 9, [/(backend|s3|pulumi\s+login|state)/i, /(encrypt|enkripsi|secret|login)/i]);
    fx(86, 5, [/(iam|role|policy|dynamodb:|s3:)/i, /(Action|Effect|Statement|policy)/i]);
    fx(86, 7, /(layer|zip|requirements|--target|exclude)/i);
    fx(86, 8, [/(logging\.|logger\.|print\()/, /(event|handler)/i]);
    fx(86, 9, [/(serverless|lambda)/i, /(pay|bayar|server|cold start)/i]);
    fx(87, 9, /(block\s*public\s*access|BlockPublicAcls|put_public_access_block|acl)/i);
    // Security
    fx(89, 7, /(rsa\.generate_private_key|\.sign\s*\()/);
    fx(89, 8, /\.verify\s*\(/);
    fx(89, 9, /(os\.environ|getenv|secret.?manager|\.env|vault)/i);
    fx(90, 2, [/csrf/i, /(token|secrets\.token|compare_digest)/i]);
    fx(90, 7, [/(role|admin)/i, /(403|HTTPException|PermissionError|raise)/i]);
    fx(90, 9, /(bandit|pip-audit|safety|semgrep)/i);
    fx(96, 1, /(B307|B105|B602|B101)/, { task: "Tulis satu baris kode berisiko (eval() atau password hardcoded) dan sebutkan kode temuan Bandit-nya (B307 atau B105).", hint: "B307 = eval(), B105 = password hardcoded." });
    fx(96, 6, [/(bandit|ruff)/i, /(run\s*:|steps\s*:|jobs\s*:)/i]);
    fx(96, 8, /(bandit\s+-r|-ll\b|nosec)/i);
    fx(79, 7, /\w+\s*:\s*\w+\s*=\s*\S+/, { py: true, hint: "Contoh: port: int = 8000 di dalam class Settings." });
    fx(90, 6, [/(ast\.literal_eval|json\.loads|\bint\s*\(|\bfloat\s*\()/, /(input|data|teks|text|user)/i], { py: true });
    fx(91, 3, [/for\s+\w+\s+in\s+/, /print/], { py: true });
    fx(96, 9, [/bandit/i, /(ruff|linter|black)/i, /(merge|pull request|CI)/i]);
})();


/* ---------- LEVEL FONDASI BARU (103-106) ----------
   Baris soal: [soal, petunjuk, validator(regex), pola output (EXPECT), tes perilaku (Python), input otomatis, perlu 'in'] */
(function () {
    function V(rs) { rs = [].concat(rs); return function (c) { return rs.every(function (r) { return r.test(c); }); }; }
    function mk(id, title, desc, example, rows) {
        levelsData.push({ id: id, category: "Beginner", title: title, desc: desc, example: example, tasks: rows.map(function (r) {
            return { task: r[0], hint: r[1], validate: V(r[2]), expect: r[3] || null, check: r[4] || null, stdin: r[5] || null, needsIn: !!r[6] };
        }) });
    }
    const TF = /^\s*True\s*\n\s*False\s*$/, T = /^\s*True\s*$/, F = /^\s*False\s*$/;
    const seq = function () { return new RegExp("^\\D*" + Array.prototype.join.call(arguments, "\\D+") + "\\D*$"); };
    const num = function (n) { return new RegExp("(^|\\D)" + n + "(\\D|$)"); };

    mk(103, "Level 103: Operator Perbandingan & Logika",
        "<b>Definisi Konsep Mendalam:</b> Perbandingan menghasilkan nilai boolean (<code>True</code>/<code>False</code>) yang dipakai <code>if</code> dan perulangan untuk mengambil keputusan.<br><br><b>Poin Penting:</b><br>• Perbandingan: <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code> (jangan tertukar dengan <code>=</code> untuk menyimpan nilai).<br>• Logika: <code>and</code> (keduanya benar), <code>or</code> (salah satu benar), <code>not</code> (membalik).<br>• Keanggotaan: <code>in</code> dan <code>not in</code>. Perbandingan berantai: <code>10 &lt; x &lt; 20</code>.",
        'umur = 20\nprint(umur >= 17)\nprint(umur > 17 and umur < 30)\nprint("a" in "abc")',
        [
            ["Cetak hasil perbandingan 7 == 7 lalu 7 != 7 (dua baris).", "print(7 == 7) lalu print(7 != 7).", [/==/, /!=/], TF],
            ["Buat umur = 20. Cetak hasil umur >= 17 lalu umur < 17 (dua baris).", "Setiap perbandingan menghasilkan True atau False.", [/>=/, /</], TF, "assert umur == 20, 'umur harus 20'"],
            ["Buat a = 5 dan b = 8. Cetak a > b, a < b, dan a != b (tiga baris).", "Satu print per perbandingan.", [/>/, /</, /!=/], /^\s*False\s*\n\s*True\s*\n\s*True\s*$/, "assert a == 5 and b == 8, 'a harus 5 dan b harus 8'"],
            ["Cetak hasil perbandingan 'python' == 'Python' (huruf besar-kecil berpengaruh).", "Dua string berbeda huruf besarnya tidak sama.", [/==/], F],
            ["Buat suhu = 30. Cetak hasil suhu > 25 and suhu < 35.", "and: kedua kondisi harus benar.", [/\band\b/], T, "assert suhu == 30, 'suhu harus 30'"],
            ["Buat hari = 'minggu'. Cetak hasil hari == 'sabtu' or hari == 'minggu'.", "or: cukup salah satu benar.", [/\bor\b/], T, "assert hari == 'minggu', 'hari harus minggu'"],
            ["Buat aktif = False. Cetak hasil not aktif.", "not membalik True/False.", [/\bnot\b/], T, "assert aktif is False, 'aktif harus False'"],
            ["Buat nilai = 85 dan hadir = True. Cetak apakah nilai >= 75 and hadir.", "Gabungkan perbandingan dan variabel boolean dengan and.", [/>=/, /\band\b/], T, "assert nilai == 85 and hadir is True, 'nilai=85 dan hadir=True'"],
            ["Buat angka = 15. Cetak apakah angka berada di antara 10 dan 20 memakai perbandingan berantai 10 < angka < 20.", "10 < angka < 20", [/<[^<\n]*</], T, "assert angka == 15, 'angka harus 15'"],
            ["Buat teks = 'python'. Cetak 'py' in teks lalu 'java' not in teks (dua baris).", "in dan not in memeriksa apakah potongan teks ada di dalam string.", [/\bin\b/, /not\s+in/], /^\s*True\s*\n\s*True\s*$/, "assert teks == 'python', 'teks harus python'", null, true]
        ]);

    mk(104, "Level 104: input() & Konversi Tipe Data",
        "<b>Definisi Konsep Mendalam:</b> <code>input()</code> membaca teks dari pengguna dan <b>selalu</b> mengembalikan string. Untuk menghitung, ubah dulu ke angka dengan konversi tipe.<br><br><b>Poin Penting:</b><br>• <code>int(\"5\")</code>, <code>float(\"1.5\")</code>, <code>str(42)</code>, <code>type(x)</code>.<br>• <code>int(3.9)</code> memotong desimal menjadi 3.<br>• Di aplikasi ini, input otomatis disediakan per soal (atau isi kolom Input di bawah editor).",
        'nama = input("Nama: ")\numur = int(input("Umur: "))\nprint(f"{nama} tahun depan {umur + 1} tahun")',
        [
            ["Baca satu baris dengan input() ke variabel nama, lalu cetak 'Halo, ' + nama. (Input otomatis: Budi)", "nama = input()", [/\binput\s*\(/], /halo,\s*budi/i, "assert nama == 'Budi'", ["Budi"]],
            ["Baca umur dengan input(), ubah ke int dengan int(), simpan di umur, lalu cetak umur + 5. (Input otomatis: 20)", "umur = int(input())", [/\binput\s*\(/, /\bint\s*\(/], num(25), "assert umur == 20 and type(umur).__name__ == 'int', 'umur harus int bernilai 20'", ["20"]],
            ["Baca tinggi dengan input(), ubah ke float, simpan di tinggi, lalu cetak tinggi * 100. (Input otomatis: 1.75)", "tinggi = float(input())", [/\binput\s*\(/, /\bfloat\s*\(/], num("175(\\.0)?"), "assert tinggi == 1.75", ["1.75"]],
            ["Baca dua bilangan a dan b sebagai int (input otomatis: 4 lalu 6), lalu cetak hasil kali a * b.", "Dua kali input(), masing-masing dibungkus int().", [/\binput\s*\([\s\S]*\binput\s*\(/, /\bint\s*\(/], num(24), "assert a == 4 and b == 6", ["4", "6"]],
            ["Tanpa input(): buat angka = int('123'), lalu cetak angka + 1.", "int() mengubah string angka menjadi bilangan bulat.", [/\bint\s*\(/], num(124), "assert angka == 123 and type(angka).__name__ == 'int'"],
            ["Cetak hasil int(3.9) (desimal dipotong, bukan dibulatkan).", "print(int(3.9))", [/\bint\s*\(/], /^\s*3\s*$/],
            ["Ubah angka 42 menjadi string dengan str(), lalu cetak str(42) + '!'.", "str(42) + '!'", [/\bstr\s*\(/], /^\s*42!\s*$/],
            ["Cetak type(5), type(5.0), dan type('5') masing-masing satu baris.", "type() menunjukkan tipe data nilai.", [/\btype\s*\(/], /int[\s\S]*float[\s\S]*str/],
            ["Baca nama dan umur (input otomatis: Sari lalu 17), lalu cetak memakai f-string: 'Sari berumur 17 tahun'.", "f\"{nama} berumur {umur} tahun\"", [/\binput\s*\([\s\S]*\binput\s*\(/, /\bf["']/], /sari berumur 17 tahun/i, "assert nama == 'Sari' and str(umur) == '17'", ["Sari", "17"]],
            ["Baca bilangan sebagai int (input otomatis: 8). Cetak 'Genap' jika bilangan % 2 == 0, selain itu 'Ganjil'.", "Ubah ke int dulu sebelum memakai %.", [/\binput\s*\(/, /\bint\s*\(/, /%/, /\bif\b/], /genap/i, "assert bilangan == 8 and type(bilangan).__name__ == 'int'", ["8"]]
        ]);

    mk(105, "Level 105: String Method & Slicing",
        "<b>Definisi Konsep Mendalam:</b> String adalah urutan karakter yang bisa diakses lewat indeks dan diolah dengan method bawaan. String bersifat <i>immutable</i>: method mengembalikan string baru.<br><br><b>Poin Penting:</b><br>• Indeks: <code>s[0]</code> (pertama), <code>s[-1]</code> (terakhir). Slicing: <code>s[awal:akhir:langkah]</code>, akhir tidak ikut; <code>s[::-1]</code> membalik.<br>• Method: <code>.upper()</code>, <code>.strip()</code>, <code>.replace()</code>, <code>.split()</code>, <code>.join()</code>, <code>.count()</code>, <code>.find()</code>, <code>.startswith()</code>, <code>.endswith()</code>.",
        's = "Belajar Python"\nprint(s[0:7])\nprint(s.upper())\nprint(s.split(" "))',
        [
            ["Buat teks = 'Python'. Cetak teks[0] lalu teks[-1] (dua baris).", "Indeks -1 adalah karakter terakhir.", [/\[\s*0\s*\]/, /\[\s*-1\s*\]/], /^\s*P\s*\n\s*n\s*$/, "assert teks == 'Python'"],
            ["Buat teks = 'belajar python'. Cetak 7 huruf pertama dengan slicing.", "teks[0:7]", [/\[\s*0?\s*:\s*7\s*\]/], /^\s*belajar\s*$/, "assert teks == 'belajar python'"],
            ["Buat kata = 'python'. Cetak kata yang dibalik memakai slicing [::-1].", "kata[::-1]", [/\[\s*:\s*:\s*-1\s*\]/], /nohtyp/, "assert kata == 'python'"],
            ["Buat kalimat = 'saya suka python'. Cetak kalimat dalam huruf kapital dengan .upper().", "kalimat.upper()", [/\.upper\s*\(/], /SAYA SUKA PYTHON/, "assert kalimat == 'saya suka python'"],
            ["Buat kotor = '   halo   '. Cetak kotor tanpa spasi di kedua ujung dengan .strip().", "kotor.strip()", [/\.strip\s*\(/], /^\s*halo\s*$/, "assert kotor == '   halo   '"],
            ["Buat teks = 'saya suka kopi'. Cetak teks dengan 'kopi' diganti 'teh' memakai .replace().", "teks.replace('kopi', 'teh')", [/\.replace\s*\(/], /saya suka teh/, "assert teks == 'saya suka kopi'"],
            ["Buat data = 'apel,jeruk,mangga'. Cetak data.split(',') (hasilnya list).", "split memecah string menjadi list.", [/\.split\s*\(/], /\[\s*'apel',\s*'jeruk',\s*'mangga'\s*\]/, "assert data == 'apel,jeruk,mangga'"],
            ["Buat buah = ['apel', 'jeruk']. Cetak gabungan elemennya dengan pemisah ' - ' memakai .join().", "' - '.join(buah)", [/\.join\s*\(/], /apel - jeruk/, "assert buah == ['apel', 'jeruk']"],
            ["Buat kata = 'programming'. Cetak jumlah huruf 'm' dengan .count() lalu posisi pertama huruf 'g' dengan .find().", "Hasilnya 2 lalu 3 (indeks mulai dari 0).", [/\.count\s*\(/, /\.find\s*\(/], /2[\s\S]*3/, "assert kata == 'programming'"],
            ["Buat email = 'budi@mail.com'. Cetak apakah email.startswith('budi') and email.endswith('.com').", "Gabungkan dua method dengan and.", [/\.startswith\s*\(/, /\.endswith\s*\(/], T, "assert email == 'budi@mail.com'"]
        ]);

    mk(106, "Level 106: break & continue",
        "<b>Definisi Konsep Mendalam:</b> <code>break</code> menghentikan perulangan seketika, sedangkan <code>continue</code> melompati sisa iterasi saat ini dan lanjut ke iterasi berikutnya.<br><br><b>Poin Penting:</b><br>• Dipakai di dalam <code>if</code> yang ada di dalam <code>for</code> atau <code>while</code>.<br>• <code>while True:</code> hampir selalu butuh <code>break</code> agar tidak berjalan selamanya.<br>• <code>for ... else</code>: blok <code>else</code> jalan hanya bila loop selesai tanpa <code>break</code>.",
        'for i in range(1, 8):\n    if i == 3:\n        continue\n    if i == 6:\n        break\n    print(i)',
        [
            ["Dengan for i in range(1, 10), cetak i dan hentikan perulangan dengan break saat i == 5 (setelah mencetak 5).", "Taruh break setelah print.", [/\bfor\b/, /\bbreak\b/], seq(1, 2, 3, 4, 5)],
            ["Cetak angka 1 sampai 10 kecuali 5, memakai continue.", "if i == 5: continue sebelum print.", [/\bcontinue\b/], seq(1, 2, 3, 4, 6, 7, 8, 9, 10)],
            ["Cetak hanya bilangan ganjil dari 1 sampai 9: lewati yang genap dengan continue saat i % 2 == 0.", "if i % 2 == 0: continue", [/\bcontinue\b/, /%/], seq(1, 3, 5, 7, 9)],
            ["Buat i = 0 dan while True: tambah i, cetak i, lalu break saat i == 3.", "i += 1; print(i); if i == 3: break", [/while\s+True/, /\bbreak\b/], seq(1, 2, 3)],
            ["Buat data = [3, 8, 12, 5]. Cetak elemen pertama yang lebih dari 10, lalu berhenti dengan break.", "Cetak 12 saja.", [/\bbreak\b/, /\bfor\b/], seq(12), "assert data == [3, 8, 12, 5]"],
            ["Untuk setiap huruf dalam 'PYTHON', lewati huruf 'T' dengan continue dan cetak huruf lainnya (satu per baris).", "if huruf == 'T': continue", [/\bcontinue\b/, /\bfor\b/], /^\s*P\s*\n\s*Y\s*\n\s*H\s*\n\s*O\s*\n\s*N\s*$/],
            ["Buat total = 0. Untuk i dari 1 sampai 10: tambah i ke total, dan break jika total > 20. Cetak total di akhir.", "Hasil akhir total adalah 21.", [/\bbreak\b/], num(21), "assert total == 21, 'total akhir harus 21'"],
            ["Buat hewan = ['ikan', 'kucing', 'sapi']. Loop hewan; saat hewan == 'kucing' cetak 'Ketemu' lalu break.", "Cetak 'Ketemu' tepat sekali.", [/\bbreak\b/, /==/], /^\s*ketemu\s*$/i, "assert hewan == ['ikan', 'kucing', 'sapi']"],
            ["Buat for i in range(3): cetak i, lalu tambahkan blok else pada for yang mencetak 'Selesai' (loop selesai tanpa break).", "else sejajar dengan for.", [/\bfor\b/, /\belse\b/], /^\s*0\s*\n\s*1\s*\n\s*2\s*\n\s*selesai\s*$/i],
            ["Dengan for i in range(1, 15): lewati kelipatan 3 dengan continue, berhenti dengan break jika i > 8, cetak i lainnya.", "Urutan: continue dulu, lalu break, lalu print. Hasil: 1 2 4 5 7 8.", [/\bcontinue\b/, /\bbreak\b/], seq(1, 2, 4, 5, 7, 8)]
        ]);
})();

/* ---------- LEVEL TAMBAHAN 107-113 (fondasi: import, scope, rekursi, collections, NumPy/Pandas, SQL) ---------- */
(function () {
    function V(rs) { rs = [].concat(rs); return function (c) { return rs.every(function (r) { return r.test(c); }); }; }
    function mk(id, cat, title, desc, example, rows) {
        levelsData.push({ id: id, category: cat, title: title, desc: desc, example: example,
            tasks: rows.map(function (r) { return { task: r[0], hint: r[1], validate: V(r[2]), expect: r[3] || null, check: r[4] || null }; }) });
    }

    mk(107, "Intermediate", "Level 107: Modul & import (math, random)",
        "<b>Konsep:</b> Modul adalah file Python berisi fungsi dan variabel siap pakai. <code>import math</code> memuat modul lalu dipanggil dengan <code>math.sqrt()</code>. <code>from math import floor</code> mengambil satu nama saja, dan <code>import math as m</code> memberi alias.<br><br><b>Contoh &amp; output:</b> <code>math.sqrt(16)</code> mencetak <code>4.0</code> (hasilnya selalu float). <code>random.choice(daftar)</code> memilih satu elemen acak, <code>random.seed(n)</code> membuat hasil acak bisa diulang.<br><br><b>Kesalahan umum:</b> memanggil <code>sqrt(16)</code> tanpa awalan <code>math.</code> (NameError); menamai file sendiri <code>math.py</code> sehingga menimpa modul asli.",
        'import math\nfrom random import choice\n\nprint(math.sqrt(16))        # 4.0\nprint(choice(["a", "b"]))   # a atau b',
        [
            ["Impor modul math lalu cetak math.sqrt(144).", "import math lalu print(math.sqrt(144)).", [/\bimport\s+math\b/, /math\.sqrt\s*\(/], /^\s*12(\.0)?\s*$/],
            ["Cetak math.pi dibulatkan 2 desimal dengan round().", "round(math.pi, 2)", [/math\.pi/, /\bround\s*\(/], /^\s*3\.14\s*$/],
            ["Impor hanya floor dengan 'from math import floor', lalu cetak floor(7.9).", "from math import floor", [/from\s+math\s+import\s+[\w\s,]*\bfloor\b/], /^\s*7\s*$/],
            ["Impor math dengan alias m ('import math as m'), lalu cetak m.ceil(7.1).", "import math as m", [/import\s+math\s+as\s+m\b/, /\bm\.ceil\s*\(/], /^\s*8\s*$/],
            ["Impor random, simpan hasil random.randint(1, 10) di variabel 'hasil'.", "randint menyertakan kedua batas.", [/\bimport\s+random\b/, /randint\s*\(/], null, "assert 1 <= hasil <= 10, 'hasil harus antara 1 dan 10'"],
            ["Buat warna = ['merah', 'hijau', 'biru'], simpan random.choice(warna) di variabel 'pilihan'.", "random.choice memilih satu elemen.", [/\bchoice\s*\(/, /warna/], null, "assert pilihan in warna, 'pilihan harus salah satu isi warna'"]
        ]);

    mk(108, "Intermediate", "Level 108: Parameter Default, Keyword Argument & Scope",
        "<b>Konsep:</b> Parameter bisa punya nilai bawaan (<code>def sapa(nama, sapaan=\"Halo\")</code>) dan argumen bisa dikirim dengan nama (<code>sapa(\"Ani\", sapaan=\"Hai\")</code>) sehingga urutannya bebas. <i>Scope</i>: variabel di dalam fungsi bersifat lokal; mengubah variabel global dari dalam fungsi butuh <code>global</code>.<br><br><b>Contoh &amp; output:</b> <code>sapa(\"Ani\")</code> mencetak <code>Halo, Ani!</code>.<br><br><b>Kesalahan umum:</b> parameter default yang mutable (<code>daftar=[]</code>) dipakai bersama semua pemanggilan. Pakai <code>None</code> lalu buat list baru di dalam fungsi. Parameter berdefault harus ditulis setelah yang tanpa default.",
        'def sapa(nama, sapaan="Halo"):\n    return f"{sapaan}, {nama}!"\n\nprint(sapa("Ani"))                # Halo, Ani!\nprint(sapa("Ani", sapaan="Hai"))  # Hai, Ani!',
        [
            ["Buat sapa(nama, sapaan='Halo') yang mengembalikan f\"{sapaan}, {nama}!\". Cetak sapa('Budi').", "def sapa(nama, sapaan='Halo'):", [/def\s+sapa\s*\([^)]*sapaan\s*=/, /\breturn\b/], /halo,\s*budi!/i],
            ["Definisikan ulang sapa(nama, sapaan='Halo'), lalu cetak sapa('Sari', sapaan='Selamat pagi') (keyword argument).", "Tulis sapaan='...' saat memanggil.", [/def\s+sapa/, /sapaan\s*=\s*['"]Selamat pagi['"]/], /selamat pagi,\s*sari!/i],
            ["Buat kurang(a, b) yang mengembalikan a - b, lalu cetak kurang(b=3, a=10) (urutan keyword dibalik).", "Dengan keyword, urutan tidak masalah.", [/def\s+kurang/, /\bb\s*=\s*3/, /\ba\s*=\s*10/], /^\s*7\s*$/],
            ["Buat hitung = 0 (global) dan fungsi tambah() yang memakai 'global hitung' lalu hitung += 1. Panggil dua kali, cetak hitung.", "Tanpa global, Python menganggap hitung lokal dan error.", [/\bglobal\s+hitung\b/], /^\s*2\s*$/, "assert hitung == 2"],
            ["Buat x = 'global' di luar fungsi. Buat fungsi coba() yang membuat x = 'lokal' lalu mencetak x. Panggil coba(), lalu cetak x di luar fungsi (dua baris: lokal, lalu global).", "x di dalam fungsi adalah variabel lokal yang berbeda dari x di luar fungsi.", [/def\s+coba/, /\bx\s*=\s*['"]lokal['"]/], /^\s*lokal\s*\n\s*global\s*$/i, "assert x == 'global', 'x di luar fungsi harus tetap global'"],
            ["Buat tambah_item(item, daftar=None): jika daftar is None buat list kosong, append item, return daftar. Cetak tambah_item('a') lalu tambah_item('b') (dua baris).", "Jangan pakai daftar=[] sebagai default.", [/daftar\s*=\s*None/, /\bis\s+None\b/], /^\s*\['a'\]\s*\n\s*\['b'\]\s*$/]
        ]);

    mk(109, "Intermediate", "Level 109: lambda, enumerate, zip & sorted",
        "<b>Konsep:</b> <code>lambda x: x * 2</code> adalah fungsi kecil tanpa nama. <code>enumerate(daftar, start=0)</code> memberi pasangan (indeks, elemen), <code>zip(a, b)</code> menggabungkan dua daftar berpasangan, <code>sorted(daftar, key=..., reverse=...)</code> mengurutkan tanpa mengubah daftar asli.<br><br><b>Contoh &amp; output:</b> <code>sorted([3, 1, 2])</code> menghasilkan <code>[1, 2, 3]</code>.<br><br><b>Kesalahan umum:</b> mengira <code>sorted()</code> mengubah list asli (yang mengubah adalah <code>.sort()</code>); <code>zip</code> berhenti di daftar terpendek.",
        'nama = ["Ani", "Budi"]\nnilai = [90, 80]\nfor i, (n, v) in enumerate(zip(nama, nilai), start=1):\n    print(i, n, v)\nprint(sorted(nilai, reverse=True))',
        [
            ["Buat kali_dua = lambda x: x * 2, lalu cetak kali_dua(8).", "lambda parameter: ekspresi", [/lambda/], /^\s*16\s*$/],
            ["Dengan enumerate(), cetak indeks dan buah dari ['apel', 'jeruk'] ('0 apel' lalu '1 jeruk').", "for i, b in enumerate(buah): print(i, b)", [/enumerate\s*\(/, /\bfor\b/], /0\s+apel\s*\n\s*1\s+jeruk/],
            ["Ulangi dengan enumerate(..., start=1) supaya nomor mulai dari 1 ('1 apel', '2 jeruk').", "Tambahkan argumen start=1.", [/enumerate\s*\(/, /start\s*=\s*1/], /1\s+apel\s*\n\s*2\s+jeruk/],
            ["Gabungkan nama = ['Ani', 'Budi'] dan nilai = [90, 80] dengan zip(), cetak 'Ani 90' lalu 'Budi 80'.", "for n, v in zip(nama, nilai):", [/zip\s*\(/], /Ani\s+90\s*\n\s*Budi\s+80/],
            ["Untuk angka = [5, 2, 9, 1], cetak sorted(angka, reverse=True).", "Hasil: [9, 5, 2, 1]", [/sorted\s*\(/, /reverse\s*=\s*True/], /\[\s*9,\s*5,\s*2,\s*1\s*\]/],
            ["Urutkan kata = ['pisang', 'kiwi', 'apel'] berdasarkan panjang dengan sorted(kata, key=len), lalu cetak.", "key menerima fungsi pengukur.", [/sorted\s*\(/, /key\s*=/], /\[\s*'kiwi',\s*'apel',\s*'pisang'\s*\]/]
        ]);

    mk(110, "Intermediate", "Level 110: Rekursi",
        "<b>Konsep:</b> Rekursi adalah fungsi yang memanggil dirinya sendiri. Setiap fungsi rekursif wajib punya <b>kasus dasar</b> (kondisi berhenti) dan <b>langkah rekursif</b> yang mendekati kasus dasar.<br><br><b>Contoh &amp; output:</b> <code>faktorial(4)</code> = 4 * faktorial(3) = ... = <code>24</code>.<br><br><b>Kesalahan umum:</b> lupa kasus dasar atau langkahnya tidak mengecil, sehingga muncul <code>RecursionError</code> (batas kedalaman sekitar 1000 pemanggilan).",
        'def faktorial(n):\n    if n <= 1:\n        return 1\n    return n * faktorial(n - 1)\n\nprint(faktorial(4))  # 24',
        [
            ["Buat faktorial(n) rekursif (kasus dasar: n <= 1 mengembalikan 1). Cetak faktorial(5).", "return n * faktorial(n - 1)", [/def\s+faktorial[\s\S]*faktorial\s*\(\s*n\s*-\s*1/], /^\s*120\s*$/, "assert faktorial(0) == 1 and faktorial(6) == 720"],
            ["Buat jumlah(n) rekursif yang menjumlahkan 1 sampai n. Cetak jumlah(10).", "jumlah(n) = n + jumlah(n - 1)", [/def\s+jumlah[\s\S]*jumlah\s*\(\s*n\s*-\s*1/], /^\s*55\s*$/, "assert jumlah(1) == 1 and jumlah(4) == 10"],
            ["Buat hitung_mundur(n) rekursif yang mencetak n sampai 1 lalu 'Selesai'. Panggil hitung_mundur(3).", "Kasus dasar: n == 0 mencetak 'Selesai'.", [/def\s+hitung_mundur[\s\S]*hitung_mundur\s*\(\s*n\s*-\s*1/], /^\s*3\s*\n\s*2\s*\n\s*1\s*\n\s*selesai\s*$/i],
            ["Buat fib(n) rekursif (fib(0)=0, fib(1)=1). Cetak fib(10).", "fib(n) = fib(n - 1) + fib(n - 2)", [/def\s+fib[\s\S]*fib\s*\([^)]*\)[\s\S]*fib\s*\(/], /^\s*55\s*$/, "assert fib(7) == 13"],
            ["Buat balik(teks) rekursif yang membalik string (kasus dasar: teks kosong). Cetak balik('python').", "balik(teks[1:]) + teks[0]", [/def\s+balik[\s\S]*balik\s*\(/], /nohtyp/, "assert balik('abc') == 'cba' and balik('') == ''"],
            ["Buat pangkat(basis, eksp) rekursif (eksp == 0 mengembalikan 1). Cetak pangkat(2, 10).", "basis * pangkat(basis, eksp - 1)", [/def\s+pangkat[\s\S]*pangkat\s*\(/], /^\s*1024\s*$/, "assert pangkat(3, 0) == 1 and pangkat(3, 3) == 27"]
        ]);

    mk(111, "Intermediate", "Level 111: collections & datetime",
        "<b>Konsep:</b> <code>Counter</code> menghitung kemunculan elemen, <code>defaultdict(list)</code> membuat dictionary yang otomatis menyiapkan nilai awal, dan <code>datetime.date</code> menyimpan tanggal yang bisa dikurangkan dan diformat.<br><br><b>Contoh &amp; output:</b> <code>Counter(\"aab\")</code> menghasilkan <code>Counter({'a': 2, 'b': 1})</code>; selisih dua <code>date</code> memberi objek dengan atribut <code>.days</code>.<br><br><b>Kesalahan umum:</b> menulis <code>datetime.date(...)</code> padahal yang diimpor <code>from datetime import date</code>; mengira <code>defaultdict</code> melempar KeyError seperti dict biasa.",
        'from collections import Counter\nfrom datetime import date\n\nprint(Counter("aab"))\nprint((date(2026, 12, 25) - date(2026, 12, 1)).days)  # 24',
        [
            ["Pakai collections.Counter pada 'banana' dan cetak jumlah huruf 'a'.", "Counter('banana')['a']", [/Counter\s*\(/], /^\s*3\s*$/],
            ["Cetak Counter('banana').most_common(1).", "most_common(n) mengembalikan n pasangan terbanyak.", [/most_common\s*\(/], /\[\s*\('a',\s*3\)\s*\]/],
            ["Buat d = defaultdict(list), append 1 lalu 2 ke d['x'], dan cetak d['x'].", "Tanpa cek kunci dulu.", [/defaultdict\s*\(\s*list\s*\)/], /\[\s*1,\s*2\s*\]/],
            ["Buat tanggal = date(2026, 10, 16) dan cetak tahun, bulan, harinya dalam satu baris.", "tanggal.year, tanggal.month, tanggal.day", [/date\s*\(\s*2026\s*,\s*10\s*,\s*16\s*\)/], /2026\s+10\s+16/, "assert tanggal.year == 2026 and tanggal.month == 10 and tanggal.day == 16"],
            ["Cetak selisih hari antara date(2026, 12, 25) dan date(2026, 10, 16) dengan .days.", "Kurangkan dua date lalu ambil .days.", [/date\s*\(/, /\.days\b/], /^\s*70\s*$/],
            ["Format date(2026, 10, 16) menjadi '16/10/2026' dengan strftime('%d/%m/%Y') lalu cetak.", "%d hari, %m bulan, %Y tahun.", [/strftime\s*\(/], /16\/10\/2026/]
        ]);

    mk(112, "Data Engineering", "Level 112: NumPy & Pandas Dasar",
        "<b>Konsep:</b> NumPy menyediakan array bertipe seragam dengan operasi vektor (<code>arr * 2</code> berlaku ke semua elemen). Pandas membangun tabel <code>DataFrame</code> di atas NumPy; kolom diakses dengan <code>df[\"kolom\"]</code> dan baris disaring dengan kondisi boolean.<br><br><b>Contoh &amp; output:</b> <code>np.array([1, 2, 3]) * 2</code> mencetak <code>[2 4 6]</code> (tanpa koma, itu array).<br><br><b>Kesalahan umum:</b> mengalikan <i>list</i> Python (<code>[1, 2] * 2</code> menggandakan isinya); menulis <code>and</code> alih-alih <code>&amp;</code> pada filter DataFrame.",
        'import numpy as np\nimport pandas as pd\n\narr = np.array([1, 2, 3])\nprint(arr * 2)\ndf = pd.DataFrame({"nama": ["Ani", "Budi"], "nilai": [90, 70]})\nprint(df[df["nilai"] > 80])',
        [
            ["Impor numpy sebagai np, buat arr = np.array([1, 2, 3, 4]) dan cetak arr * 2.", "import numpy as np", [/import\s+numpy\s+as\s+np/, /\*\s*2/], /\[\s*2\s+4\s+6\s+8\s*\]/, "assert list(arr) == [1, 2, 3, 4]"],
            ["Dengan arr = np.array([1, 2, 3, 4]), cetak arr.mean() lalu arr.sum() (dua baris).", "Method langsung pada array.", [/\.mean\s*\(/, /\.sum\s*\(/], /2\.5\s*\n\s*10/],
            ["Buat np.arange(1, 7).reshape(2, 3) dan cetak .shape-nya.", "shape berupa tuple (baris, kolom).", [/reshape\s*\(\s*2\s*,\s*3\s*\)/, /\.shape/], /\(\s*2,\s*3\s*\)/],
            ["Buat DataFrame df dari {'nama': ['Ani', 'Budi', 'Cici'], 'nilai': [90, 70, 85]} dan cetak df.", "pd.DataFrame(dict)", [/DataFrame\s*\(/], /Ani[\s\S]*Budi[\s\S]*Cici/, "assert list(df.columns) == ['nama', 'nilai']"],
            ["Buat df yang sama, lalu cetak hanya baris bernilai > 80 dengan df[df['nilai'] > 80].", "Filter dengan kondisi boolean di dalam kurung siku.", [/df\s*\[\s*df\s*\[\s*['"]nilai['"]\s*\]\s*>\s*80\s*\]/], /^(?![\s\S]*Budi)[\s\S]*Ani[\s\S]*Cici/],
            ["Buat df yang sama, lalu cetak rata-rata kolom nilai dengan df['nilai'].mean().", "Hasil sekitar 81.67.", [/\[\s*['"]nilai['"]\s*\]\s*\.mean\s*\(/], /81\.66/]
        ]);

    mk(113, "Web API", "Level 113: SQL Dasar dengan sqlite3",
        "<b>Konsep:</b> SQL adalah bahasa untuk mengelola tabel. Modul bawaan <code>sqlite3</code> menjalankan database mini di memori: <code>connect(\":memory:\")</code> membuka koneksi, <code>cursor.execute()</code> menjalankan perintah, <code>fetchall()</code> mengambil hasil.<br><br><b>Perintah inti:</b> <code>CREATE TABLE</code>, <code>INSERT INTO</code>, <code>SELECT ... WHERE</code>, <code>AVG()</code>.<br><br><b>Kesalahan umum:</b> menyusun SQL dengan f-string (rawan SQL injection; pakai placeholder <code>?</code>); lupa <code>conn.commit()</code> setelah mengubah data.",
        'import sqlite3\n\nconn = sqlite3.connect(":memory:")\ncur = conn.cursor()\ncur.execute("CREATE TABLE siswa (nama TEXT, nilai INTEGER)")\ncur.execute("INSERT INTO siswa VALUES (?, ?)", ("Ani", 90))\nconn.commit()\nprint(cur.execute("SELECT * FROM siswa").fetchall())  # [(\'Ani\', 90)]',
        [
            ["Impor sqlite3 dan buat conn = sqlite3.connect(':memory:') serta cur = conn.cursor().", "Database di memori hilang saat program selesai.", [/sqlite3\.connect\s*\(\s*['"]:memory:['"]\s*\)/, /\.cursor\s*\(/], null, "assert conn is not None and cur is not None"],
            ["Buat conn, cur, lalu tabel siswa (nama TEXT, nilai INTEGER) dengan CREATE TABLE.", "cur.execute('CREATE TABLE siswa (...)')", [/CREATE\s+TABLE\s+siswa/i, /\.execute\s*\(/], null, "assert cur.execute(\"SELECT name FROM sqlite_master WHERE name='siswa'\").fetchone() is not None"],
            ["Buat conn, cur, dan tabel siswa; masukkan ('Ani', 90) dengan INSERT INTO dan placeholder ?, lalu conn.commit().", "execute(sql, (nilai1, nilai2))", [/INSERT\s+INTO\s+siswa/i, /\?/, /\.commit\s*\(/], null, "assert cur.execute('SELECT COUNT(*) FROM siswa').fetchone()[0] == 1"],
            ["Buat conn, cur, tabel siswa; masukkan Ani 90, Budi 70, Cici 85 dengan executemany, lalu cetak SELECT * memakai fetchall().", "executemany(sql, daftar_tuple)", [/executemany\s*\(/, /fetchall\s*\(/], /Ani[\s\S]*Budi[\s\S]*Cici/],
            ["Dengan data yang sama (Ani 90, Budi 70, Cici 85), cetak nama siswa bernilai > 80 memakai WHERE.", "SELECT nama FROM siswa WHERE nilai > 80", [/WHERE/i], /^(?![\s\S]*Budi)[\s\S]*Ani[\s\S]*Cici/],
            ["Dengan data yang sama, cetak rata-rata nilai dengan SELECT AVG(nilai) FROM siswa.", "fetchone()[0] mengambil angkanya.", [/AVG\s*\(/i], /81\.6/]
        ]);
})();

/* ---------- LEVEL TAMBAHAN 114-119 + PENGETATAN VALIDATOR ---------- */
(function () {
    function V(rs) { rs = [].concat(rs); return function (c) { return rs.every(function (r) { return r.test(c); }); }; }
    // baris: [soal, petunjuk, regex[], expect, check, teks?]
    function mk(id, title, desc, example, rows) {
        levelsData.push({ id: id, category: "Intermediate", title: title, desc: desc, example: example,
            tasks: rows.map(function (r) { var t = { task: r[0], hint: r[1], validate: V(r[2]), expect: r[3] || null, check: r[4] || null }; if (r[5]) t.forceText = true; return t; }) });
    }

    mk(114, "Level 114: Threading Dasar & GIL",
        "<b>Konsep:</b> <i>Thread</i> menjalankan beberapa tugas bergantian dalam satu proses. Buat dengan <code>threading.Thread(target=fungsi, args=(...))</code>, jalankan dengan <code>.start()</code>, tunggu dengan <code>.join()</code>. Data bersama harus dilindungi <code>threading.Lock()</code>.<br><br><b>GIL:</b> di CPython, <i>Global Interpreter Lock</i> membuat hanya satu thread yang mengeksekusi bytecode pada satu waktu. Thread tetap berguna untuk tugas I/O (jaringan, file) tetapi tidak mempercepat komputasi CPU berat (pakai proses).<br><br><b>Kesalahan umum:</b> lupa <code>.join()</code>; mengubah variabel bersama tanpa Lock (race condition). Soal level ini dinilai dari isi teks karena browser tidak mendukung thread.",
        'import threading\n\ndef kerja(n):\n    print("kerja", n)\n\nt = threading.Thread(target=kerja, args=(1,))\nt.start()\nt.join()',
        [
            ["Buat threading.Thread(target=kerja), jalankan dengan start(), lalu tunggu dengan join().", "t.start() lalu t.join()", [/threading\.Thread\s*\(/, /\.start\s*\(/, /\.join\s*\(/]],
            ["Buat lock = threading.Lock() dan lindungi penambahan counter dengan 'with lock:'.", "with lock: counter += 1", [/threading\.Lock\s*\(/, /with\s+\w*lock\w*\s*:/i]],
            ["Kirim argumen ke thread memakai threading.Thread(target=f, args=(1, 2)).", "args harus berupa tuple.", [/threading\.Thread\s*\(/, /args\s*=\s*\(/]],
            ["Tulis satu kalimat yang menjelaskan GIL dan kapan thread tetap berguna (sebut 'GIL' dan 'I/O').", "Thread membantu tugas yang banyak menunggu.", [/GIL/, /I\/O/i]],
            ["Buat q = queue.Queue(), lalu q.put(1) di satu sisi dan q.get() di thread pekerja.", "Queue aman dipakai antar thread.", [/queue\.Queue\s*\(/, /\.put\s*\(/, /\.get\s*\(/]]
        ]);

    mk(115, "Level 115: Struktur Data: Stack, Queue & Big-O",
        "<b>Konsep:</b> <b>Stack</b> bersifat LIFO (terakhir masuk, pertama keluar): <code>append()</code> dan <code>pop()</code> pada list. <b>Queue</b> bersifat FIFO: pakai <code>collections.deque</code> dengan <code>append()</code> dan <code>popleft()</code>. <b>Big-O</b> menggambarkan pertumbuhan waktu: <code>x in list</code> berjalan O(n), <code>x in set</code> rata-rata O(1), pencarian biner O(log n).<br><br><b>Contoh &amp; output:</b> setelah <code>s = [1, 2, 3]</code>, <code>s.pop()</code> menghasilkan <code>3</code>.<br><br><b>Kesalahan umum:</b> memakai <code>list.pop(0)</code> sebagai antrean (O(n), lambat); pencarian biner pada daftar yang belum terurut.",
        'from collections import deque\n\nstack = [1, 2, 3]\nprint(stack.pop())      # 3\nantrean = deque([1, 2, 3])\nprint(antrean.popleft())  # 1',
        [
            ["Buat stack = [], push 1, 2, 3 dengan append, lalu cetak stack.pop().", "LIFO: yang terakhir masuk keluar duluan.", [/\.append\s*\(/, /\.pop\s*\(\s*\)/], /^\s*3\s*$/, "assert stack == [1, 2]"],
            ["Buat antrean = deque([1, 2, 3]) dari collections, lalu cetak antrean.popleft().", "FIFO: yang pertama masuk keluar duluan.", [/deque\s*\(/, /popleft\s*\(/], /^\s*1\s*$/, "assert list(antrean) == [2, 3]"],
            ["Buat kurung_seimbang(s) yang memakai stack untuk memeriksa tanda '(' dan ')'. Cetak kurung_seimbang('(())') lalu kurung_seimbang('(()') (dua baris).", "Push saat '(', pop saat ')'; stack harus kosong di akhir.", [/def\s+kurung_seimbang/, /\.append\s*\(/, /\.pop\s*\(/], /^\s*True\s*\n\s*False\s*$/, "assert kurung_seimbang('()()') is True and kurung_seimbang(')(') is False"],
            ["Cari angka 7 dalam [1, 3, 5, 7, 9] dengan pencarian biner (while low <= high) dan cetak indeksnya.", "mid = (low + high) // 2", [/while\s+\w+\s*<=\s*\w+/, /\/\/\s*2/], /^\s*3\s*$/],
            ["Ukur waktu 'x in daftar' vs 'x in himpunan' untuk 100000 angka memakai time.perf_counter(), lalu cetak kedua waktunya.", "Buat daftar = list(range(100000)) dan himpunan = set(daftar).", [/perf_counter|timeit/, /\bset\s*\(/, /\blist\s*\(|range\s*\(/]]
        ]);

    mk(116, "Level 116: Pengujian dengan Fungsi test_ & pytest",
        "<b>Konsep:</b> Tes otomatis adalah fungsi berawalan <code>test_</code> yang berisi <code>assert</code>. <code>pytest</code> menemukan dan menjalankan semua fungsi itu. <code>pytest.raises(Error)</code> memastikan sebuah error memang terjadi, dan <code>@pytest.mark.parametrize</code> menjalankan satu tes dengan banyak data.<br><br><b>Contoh:</b> <code>def test_tambah(): assert tambah(2, 3) == 5</code>. Tes yang lolos tidak mencetak apa pun; tes gagal menampilkan nilai yang diharapkan dan yang didapat.<br><br><b>Kesalahan umum:</b> nama fungsi tidak berawalan <code>test_</code> (tidak dijalankan); satu tes memeriksa terlalu banyak hal. Soal 1-3 dijalankan langsung; soal pytest dinilai dari isi teks.",
        'def tambah(a, b):\n    return a + b\n\ndef test_tambah():\n    assert tambah(2, 3) == 5\n\ntest_tambah()\nprint("lolos")',
        [
            ["Buat tambah(a, b) dan test_tambah() berisi assert tambah(2, 3) == 5. Panggil test_tambah() lalu cetak 'lolos'.", "Tes lolos bila assert tidak melempar error.", [/def\s+test_tambah/, /\bassert\b/, /def\s+tambah/], /lolos/],
            ["Buat kurang(a, b) dan test_kurang_negatif() yang menguji kurang(3, 5) == -2. Panggil tes lalu cetak 'lolos'.", "Uji juga hasil negatif.", [/def\s+test_kurang_negatif/, /def\s+kurang/, /-\s*2/], /lolos/],
            ["Buat bagi(a, b) (a / b). Tangkap ZeroDivisionError dari bagi(1, 0) dengan try/except dan cetak 'error terdeteksi'.", "Biarkan Python melempar error bawaan.", [/def\s+bagi/, /except\s+ZeroDivisionError/], /error terdeteksi/],
            ["Tulis tes pytest yang memakai 'with pytest.raises(ZeroDivisionError):' untuk memanggil bagi(1, 0).", "import pytest di bagian atas.", [/pytest\.raises\s*\(\s*ZeroDivisionError/, /def\s+test_/], null, null, true],
            ["Tulis tes parametrik dengan @pytest.mark.parametrize('a,b,hasil', [(1, 2, 3), (2, 3, 5)]) untuk fungsi tambah.", "Parameter tes sama dengan nama argumen fungsi tes.", [/pytest\.mark\.parametrize/, /def\s+test_/], null, null, true]
        ]);

    mk(117, "Level 117: HTTP & REST Dasar",
        "<b>Konsep:</b> HTTP adalah protokol permintaan-respons. Metode utama: <code>GET</code> (ambil), <code>POST</code> (buat), <code>PUT</code>/<code>PATCH</code> (ubah), <code>DELETE</code> (hapus). Respons membawa <i>status code</i>: 2xx sukses, 4xx salah di klien (404 tidak ditemukan), 5xx salah di server. REST API biasanya bertukar data JSON.<br><br><b>Contoh &amp; output:</b> <code>urlencode({\"q\": \"python\"})</code> menghasilkan <code>q=python</code>; <code>json.loads('{\"a\": 1}')</code> menghasilkan dictionary <code>{'a': 1}</code>.<br><br><b>Kesalahan umum:</b> tidak memeriksa status code sebelum memakai isi respons (gunakan <code>raise_for_status()</code>); mengirim data JSON sebagai teks biasa. Soal httpx dinilai dari isi teks karena jaringan tidak tersedia di browser.",
        'import json\nfrom urllib.parse import urlencode\n\nprint(urlencode({"q": "python", "page": 2}))   # q=python&page=2\ndata = json.loads(\'{"nama": "Ani"}\')\nprint(data["nama"])                            # Ani',
        [
            ["Dengan urllib.parse.urlencode, bentuk query string dari {'q': 'python', 'page': 2} dan cetak hasilnya.", "from urllib.parse import urlencode", [/urlencode\s*\(/], /q=python&page=2/],
            ["Urai teks JSON '{\"nama\": \"Ani\", \"umur\": 20}' dengan json.loads, simpan di 'data', lalu cetak data['nama'].", "json.loads mengubah teks menjadi dictionary.", [/json\.loads\s*\(/], /^\s*Ani\s*$/, "assert data['umur'] == 20"],
            ["Buat status_arti(kode) yang mengembalikan 'OK' untuk 200, 'Tidak ditemukan' untuk 404, 'Error server' untuk 500, selain itu 'Lainnya'. Cetak status_arti(404).", "Gunakan if/elif.", [/def\s+status_arti/, /404/], /tidak ditemukan/i, "assert status_arti(200) == 'OK' and status_arti(500) == 'Error server' and status_arti(302) == 'Lainnya'"],
            ["Tulis permintaan GET httpx.get('https://api.contoh.com/users', params={'page': 1}) lalu cetak response.status_code.", "response = httpx.get(url, params={...})", [/httpx\.get\s*\(/, /params\s*=/, /status_code/], null, null, true],
            ["Tulis permintaan POST JSON dengan httpx.post(url, json={...}) lalu panggil response.raise_for_status().", "Parameter json= otomatis mengatur header Content-Type.", [/httpx\.post\s*\(/, /json\s*=/, /raise_for_status/], null, null, true]
        ]);

    mk(118, "Level 118: Git & Terminal Dasar",
        "<b>Konsep:</b> Git mencatat riwayat perubahan kode. Alur dasar: <code>git init</code> (mulai), <code>git add</code> (pilih perubahan), <code>git commit -m \"pesan\"</code> (simpan), <code>git switch -c nama</code> atau <code>git checkout -b nama</code> (branch baru), <code>git merge</code> (gabung). Terminal: <code>cd</code> pindah folder, <code>ls</code> melihat isi, <code>mkdir</code> membuat folder.<br><br><b>Kesalahan umum:</b> meng-commit file rahasia (.env) atau cache (<code>__pycache__/</code>) karena tidak ada <code>.gitignore</code>; pesan commit yang tidak jelas. Soal level ini berupa perintah dan dinilai dari isi teks.",
        '# Contoh perintah terminal\n# git init\n# git add .\n# git commit -m "versi pertama"',
        [
            ["Tulis perintah untuk menginisialisasi repositori Git di folder saat ini.", "git init", [/git\s+init/]],
            ["Tulis dua perintah: tambahkan semua perubahan lalu commit dengan pesan 'tambah fitur login'.", "git add . lalu git commit -m \"...\"", [/git\s+add\s+(\.|-A)/, /git\s+commit\s+-m\s+["'].+["']/]],
            ["Tulis perintah membuat dan langsung pindah ke branch baru bernama fitur-login.", "git switch -c atau git checkout -b", [/git\s+(checkout\s+-b|switch\s+-c)\s+fitur-login/]],
            ["Tulis perintah menggabungkan branch fitur-login ke branch yang sedang aktif.", "git merge nama-branch", [/git\s+merge\s+fitur-login/]],
            ["Tulis isi .gitignore yang mengabaikan __pycache__/ dan .env (satu per baris).", "Satu pola per baris.", [/__pycache__/, /\.env/]]
        ]);

    mk(119, "Level 119: Dasar Machine Learning: Train/Test & Overfitting",
        "<b>Konsep:</b> Model belajar dari <b>data latih</b> dan harus dinilai pada <b>data uji</b> yang belum pernah dilihat. <code>train_test_split</code> membaginya; <code>model.fit(X, y)</code> melatih, <code>model.predict(X)</code> memprediksi, <code>accuracy_score</code> mengukur ketepatan. <i>Overfitting</i> terjadi saat model sangat bagus pada data latih tetapi buruk pada data uji.<br><br><b>Contoh:</b> skor latih 1.0 tetapi skor uji 0.6 adalah tanda overfitting.<br><br><b>Kesalahan umum:</b> menguji model pada data yang sama dengan data latih; lupa <code>random_state</code> sehingga hasil berubah tiap dijalankan.",
        'from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\n\nX = [[1], [2], [3], [4], [5], [6], [7], [8]]\ny = [0, 0, 0, 0, 1, 1, 1, 1]\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)\nmodel = LogisticRegression().fit(X_train, y_train)\nprint(model.score(X_test, y_test))',
        [
            ["Bagi X = [[1], [2], [3], [4], [5], [6], [7], [8]] dan y = [0, 0, 0, 0, 1, 1, 1, 1] dengan train_test_split(test_size=0.25, random_state=42) ke X_train, X_test, y_train, y_test. Cetak len(X_test).", "from sklearn.model_selection import train_test_split", [/train_test_split\s*\(/, /random_state\s*=/], /^\s*2\s*$/, "assert len(X_train) == 6 and len(X_test) == 2"],
            ["Dengan data dan pembagian yang sama, latih model = LogisticRegression() memakai fit(X_train, y_train).", "from sklearn.linear_model import LogisticRegression", [/LogisticRegression\s*\(/, /\.fit\s*\(/], null, "assert hasattr(model, 'coef_'), 'model belum dilatih dengan fit()'"],
            ["Lanjutkan: simpan model.predict(X_test) di y_pred lalu cetak accuracy_score(y_test, y_pred).", "from sklearn.metrics import accuracy_score", [/accuracy_score\s*\(/, /\.predict\s*\(/], /^\s*[01](\.\d+)?\s*$/, "assert len(y_pred) == len(y_test)"],
            ["Tulis satu kalimat yang menjelaskan overfitting (sebut 'data latih' dan 'data uji').", "Bagus di data latih, buruk di data uji.", [/overfit/i, /data latih/i, /data uji/i], null, null, true],
            ["Cetak model.score(X_train, y_train) lalu model.score(X_test, y_test) untuk membandingkan skor latih dan uji.", "Selisih besar menandakan overfitting.", [/\.score\s*\([\s\S]*\.score\s*\(/], /\d/]
        ]);
})();

/* ---------- Pengetatan validator (soal dulu lolos hanya dengan kata kunci) ---------- */
(function () {
    function L(id) { return levelsData.find(function (l) { return l.id === id; }); }
    // Closures: wajib fungsi bersarang + return + dicetak
    L(22).tasks.forEach(function (t, i) {
        t.validate = function (c) {
            return /def\s+\w+\s*\([^)]*\)\s*:[\s\S]*?\n[ \t]+def\s+\w+[\s\S]*?\breturn\b/.test(c) && /\bpr[i]nt\s*\(/.test(c) && (i !== 1 || /\bnonlocal\b/.test(c));
        };
    });
    // Pewarisan & design pattern: tidak cukup 'class A: pass'
    var onlyClass = /^c=>c\.includes\("class"\)$/;
    [28, 40, 41, 42, 43, 44, 45, 46, 47].forEach(function (id) {
        L(id).tasks.forEach(function (t) {
            if (!onlyClass.test(String(t.validate).replace(/\s+/g, ""))) return;
            t.validate = id === 28
                ? function (c) { return /class\s+\w+\s*\(\s*\w+\s*\)/.test(c) && /\bpr[i]nt\s*\(/.test(c); }
                : function (c) { return /\bclass\s+\w+/.test(c) && /\bdef\s+\w+/.test(c) && /^(?!\s*class\b).*\b[A-Z]\w*\s*\(/m.test(c) && /(\bpr[i]nt\s*\(|\bassert\b)/.test(c); };
        });
    });
})();


/* ---------- LEVEL FONDASI & MINI-PROYEK BARU (120-139) ----------
   Baris soal: {t: soal, h: petunjuk, v: regex[] struktur, e: pola/objek .test() untuk output,
                c: tes perilaku Python, i: input otomatis, n: perlu operator 'in', x: dinilai sebagai teks} */
(function () {
    function V(rs) { rs = [].concat(rs); return function (c) { return rs.every(function (r) { return r.test(c); }); }; }
    function C(lines) { return lines.join("\n"); }
    function norm(l) { return l.replace(/\s+/g, " ").trim().toLowerCase(); }
    // Output harus persis sama baris demi baris (spasi berlebih & huruf besar-kecil diabaikan)
    function LINES(arr) {
        const want = arr.map(function (x) { return norm(String(x)); });
        return { want: arr.map(String), test: function (s) {
            const got = String(s).replace(/\r/g, "").split("\n").map(norm).filter(function (l) { return l !== ""; });
            return got.length === want.length && got.every(function (x, i) { return x === want[i]; });
        } };
    }
    // Seperti LINES, tetapi spasi di awal baris (rata tengah) harus tepat
    function LINESX(arr) {
        return { want: arr.map(String), test: function (s) {
            const got = String(s).replace(/\r/g, "").split("\n").map(function (l) { return l.replace(/\s+$/, ""); });
            while (got.length && got[got.length - 1] === "") got.pop();
            return got.length === arr.length && got.every(function (x, i) { return x === arr[i]; });
        } };
    }
    function mk(id, cat, title, desc, example, rows) {
        levelsData.push({ id: id, category: cat, title: title, desc: desc, example: example,
            tasks: rows.map(function (r) {
                return { task: r.t, hint: r.h, validate: V(r.v || [/[\s\S]/]), expect: r.e || null, check: r.c || null,
                         stdin: r.i || null, needsIn: !!r.n, forceText: !!r.x };
            }) });
    }
    const NEST = /\bfor\b[\s\S]*\bfor\b/;

    /* ===== 120: Nested loop & pola bintang ===== */
    mk(120, "Beginner", "Level 120: Nested Loop & Pola Bintang",
        "<b>Konsep:</b> <i>Nested loop</i> adalah perulangan di dalam perulangan. Loop luar biasanya mewakili <b>baris</b>, loop dalam mewakili <b>kolom</b>: untuk setiap iterasi loop luar, loop dalam berjalan penuh dari awal sampai akhir.<br><br><b>Contoh &amp; output:</b> tabel perkalian 3 x 3 di bawah mencetak <code>1 2 3</code>, <code>2 4 6</code>, <code>3 6 9</code> masing-masing di satu baris. <code>print(..., end=\" \")</code> mengganti baris baru dengan spasi, dan <code>print()</code> kosong di akhir loop dalam memindahkan kursor ke baris berikutnya.<br><br><b>Kesalahan umum:</b> lupa <code>print()</code> kosong (semua hasil menumpuk di satu baris); salah indentasi sehingga <code>print()</code> ikut berulang di loop dalam; memakai nama variabel loop yang sama (<code>i</code>) untuk loop luar dan dalam.",
        'for i in range(1, 4):\n    for j in range(1, 4):\n        print(i * j, end=" ")\n    print()\n# 1 2 3\n# 2 4 6\n# 3 6 9',
        [
            { t: "Cetak persegi bintang 3 baris x 3 kolom ('***' di tiap baris) memakai nested loop dan print(..., end='').", h: "Loop luar = baris, loop dalam = kolom; print() kosong di akhir tiap baris.", v: [NEST, /end\s*=/], e: LINES(["***", "***", "***"]) },
            { t: "Cetak persegi '#' berukuran 4 baris x 4 kolom memakai nested loop.", h: "Ubah jumlah iterasi kedua loop menjadi 4.", v: [NEST, /end\s*=/], e: LINES(["####", "####", "####", "####"]) },
            { t: "Cetak segitiga siku-siku bintang setinggi 4 baris (1, 2, 3, lalu 4 bintang) dengan nested loop.", h: "Loop dalam: for j in range(i) dengan i dari 1 sampai 4.", v: [NEST, /end\s*=/], e: LINES(["*", "**", "***", "****"]) },
            { t: "Cetak segitiga angka 4 baris: baris 1 '1', baris 2 '1 2', baris 3 '1 2 3', baris 4 '1 2 3 4'.", h: "Loop dalam mencetak j dari 1 sampai i (end=' ').", v: [NEST, /end\s*=/], e: LINES(["1", "1 2", "1 2 3", "1 2 3 4"]) },
            { t: "Cetak piramida bintang setinggi 3 rata tengah: '  *', ' ***', '*****' (spasi di depan harus tepat).", h: "Baris i: spasi sebanyak (3 - i), bintang sebanyak 2 * i - 1.", v: [/\bfor\b/], e: LINESX(["  *", " ***", "*****"]) },
            { t: "Cetak tabel perkalian 1 sampai 5: baris ke-i berisi i*1 sampai i*5 dipisah spasi (baris pertama '1 2 3 4 5').", h: "Cetak i * j di loop dalam.", v: [NEST], e: LINES(["1 2 3 4 5", "2 4 6 8 10", "3 6 9 12 15", "4 8 12 16 20", "5 10 15 20 25"]) },
            { t: "Cetak papan catur 4 x 4: '#' bila (i + j) genap, selain itu '.' (baris pertama '#.#.', baris kedua '.#.#').", h: "Periksa (i + j) % 2 == 0 di dalam loop dalam.", v: [NEST, /%/], e: LINES(["#.#.", ".#.#", "#.#.", ".#.#"]) },
            { t: "Cetak semua pasangan (i, j) dari 1 sampai 3 dengan i < j, satu pasangan per baris: '1 2', '1 3', '2 3'.", h: "Loop dalam bisa dimulai dari i + 1.", v: [NEST], e: LINES(["1 2", "1 3", "2 3"]) }
        ]);

    /* ===== 121: is vs ==, mutable vs immutable ===== */
    mk(121, "Intermediate", "Level 121: Operator is, Mutable vs Immutable",
        "<b>Konsep:</b> <code>==</code> membandingkan <b>nilai</b>, sedangkan <code>is</code> membandingkan <b>identitas</b> (apakah dua nama menunjuk objek yang sama di memori). Objek <i>mutable</i> (list, dict, set) bisa diubah di tempat; objek <i>immutable</i> (int, str, tuple, bool) tidak bisa: operasi menghasilkan objek baru.<br><br><b>Contoh &amp; output:</b> setelah <code>b = a</code>, kedua nama menunjuk list yang sama, jadi <code>b.append(3)</code> ikut mengubah <code>a</code>. <code>a.copy()</code> membuat salinan dangkal; untuk list bersarang pakai <code>copy.deepcopy</code>.<br><br><b>Kesalahan umum:</b> mengira <code>b = a</code> menyalin list; memakai <code>is</code> untuk membandingkan angka/string (pakai <code>==</code>); hanya <code>x is None</code> yang memang idiom untuk <code>is</code>; mengubah list yang sedang diiterasi.",
        'a = [1, 2]\nb = a            # b menunjuk list yang SAMA\nc = a.copy()     # c adalah salinan\nb.append(3)\nprint(a, c)                    # [1, 2, 3] [1, 2]\nprint(a is b, a is c, a == c)  # True False False',
        [
            { t: "Buat a = [1, 2, 3] dan b = a. Tambahkan 4 lewat b.append(4), lalu cetak a (a ikut berubah).", h: "b = a tidak menyalin list; keduanya satu objek.", v: [/\bb\s*=\s*a\b/, /\.append\s*\(/], e: /\[1, 2, 3, 4\]/, c: "assert a == [1, 2, 3, 4] and a is b" },
            { t: "Buat a = [1, 2, 3] dan salinannya c = a.copy(). Tambahkan 4 ke c, lalu cetak a dan c (dua baris).", h: "copy() membuat objek list baru.", v: [/\.copy\s*\(|\[\s*:\s*\]|\blist\s*\(\s*a\s*\)/], e: LINES(["[1, 2, 3]", "[1, 2, 3, 4]"]), c: "assert a == [1, 2, 3] and c == [1, 2, 3, 4]" },
            { t: "Buat x = [1, 2] dan y = [1, 2]. Cetak x == y lalu x is y (dua baris).", h: "Isi sama belum tentu objek yang sama.", v: [/\bis\b/, /==/], e: LINES(["True", "False"]), c: "assert x == y and x is not y" },
            { t: "Buat s = 'halo'. Coba s[0] = 'H' di dalam try/except TypeError, dan cetak 'string immutable' saat gagal.", h: "String tidak bisa diubah per karakter.", v: [/\btry\b/, /except\s+TypeError/], e: /string immutable/i, c: "assert s == 'halo'" },
            { t: "Buat tuple t = (1, 2, 3) dan tuple baru t2 dengan menambahkan 4 (t + (4,)). Cetak t lalu t2 (dua baris).", h: "Tuple tidak berubah; operasi + menghasilkan tuple baru.", v: [/\bt2\s*=/], e: LINES(["(1, 2, 3)", "(1, 2, 3, 4)"]), c: "assert t == (1, 2, 3) and t2 == (1, 2, 3, 4)" },
            { t: "Buat data = [[1, 2], [3]] dan salinan penuh salinan = copy.deepcopy(data). Tambahkan 99 ke salinan[0], lalu cetak data (tidak boleh berubah).", h: "import copy; deepcopy menyalin juga list di dalamnya.", v: [/deepcopy\s*\(/], e: /^\s*\[\[1, 2\], \[3\]\]\s*$/, c: "assert data == [[1, 2], [3]] and salinan[0] == [1, 2, 99]" },
            { t: "Buat hasil = None. Cetak hasil is None (cara idiomatik memeriksa None).", h: "Untuk None gunakan is, bukan ==.", v: [/\bis\s+None\b/], e: /True/, c: "assert hasil is None" },
            { t: "Buat fungsi tambah_item(daftar) yang melakukan daftar.append('x'). Buat l = [], panggil tambah_item(l) sekali, lalu cetak l ('x' muncul karena list diteruskan sebagai referensi).", h: "Fungsi mengubah objek yang sama dengan milik pemanggil.", v: [/def\s+tambah_item\s*\(/, /\.append\s*\(/], e: /\['x'\]/, c: "assert l == ['x']" }
        ]);

    /* ===== 122: Traceback & debugging ===== */
    mk(122, "Intermediate", "Level 122: Membaca Traceback & Debugging Dasar",
        "<b>Konsep:</b> Saat program error, Python mencetak <i>traceback</i>. Bacalah <b>dari bawah</b>: baris terakhir berisi jenis dan pesan error; baris-baris di atasnya menunjuk file dan nomor baris tempat error terjadi. Jenis umum: <code>SyntaxError</code> (tata tulis salah), <code>NameError</code> (nama belum didefinisikan), <code>TypeError</code> (tipe tidak cocok), <code>ValueError</code> (nilai tidak valid), <code>IndexError</code>, <code>ZeroDivisionError</code>, <code>AttributeError</code>.<br><br><b>Contoh &amp; output:</b> <code>int(\"dua puluh\")</code> berakhir dengan <code>ValueError: invalid literal for int() with base 10: 'dua puluh'</code>. Teknik dasar mencari bug: baca pesan error, cetak nilai variabel (<i>print debugging</i>), kecilkan kode sampai masalahnya terisolasi.<br><br><b>Kesalahan umum:</b> membaca traceback dari atas; mengubah kode secara acak tanpa membaca pesan; mengabaikan nomor baris. Setiap soal di level ini memberi kode yang rusak: tulis versi yang benar.",
        '# Jalankan kode ini dan baca tracebacknya dari BAWAH\nprint("Mulai")\numur = int("dua puluh")\nprint(umur)\n# ValueError: invalid literal for int() with base 10: \'dua puluh\'',
        [
            { t: "Kode rusak: nama = 'Ani' lalu print(nma). Ini memicu NameError karena salah ketik. Tulis versi yang benar sehingga mencetak Ani.", h: "Nama variabel harus sama persis (nama).", v: [/\bprint\s*\(/], e: /Ani/, c: "assert nama == 'Ani'" },
            { t: "Kode rusak: print('Umur: ' + 20) memicu TypeError (str + int). Perbaiki dengan str() atau f-string agar mencetak: Umur: 20", h: "'Umur: ' + str(20) atau f\"Umur: {20}\"", v: [/\bprint\s*\(/], e: /Umur: 20/ },
            { t: "Kode rusak: angka = int('3.5') memicu ValueError. Perbaiki lewat float() lebih dulu agar angka bernilai integer 3, lalu cetak angka.", h: "int(float('3.5')) memotong desimal.", v: [/\bint\s*\(/, /\bfloat\s*\(/], e: /^\s*3\s*$/, c: "assert angka == 3 and type(angka).__name__ == 'int'" },
            { t: "Kode rusak: total = 0; jumlah = 0; print(total / jumlah) memicu ZeroDivisionError. Tulis versi aman: jika jumlah == 0 cetak 0, selain itu cetak total / jumlah.", h: "Periksa pembagi dengan if sebelum membagi.", v: [/\bif\b/, /\//], e: /^\s*0(\.0)?\s*$/, c: "assert total == 0 and jumlah == 0" },
            { t: "Kode rusak: kata = 'python'; print(kata[6]) memicu IndexError (indeks mulai dari 0). Perbaiki agar mencetak huruf terakhir, yaitu n.", h: "kata[5] atau kata[-1].", v: [/\bkata\s*\[/], e: /^\s*n\s*$/, c: "assert kata == 'python'" },
            { t: "Kode rusak: for i in range(1, 5): print(i) seharusnya mencetak 1 sampai 5 (off-by-one). Perbaiki.", h: "Batas atas range tidak ikut dicetak.", v: [/range\s*\(\s*1\s*,\s*6\s*\)/], e: LINES(["1", "2", "3", "4", "5"]) },
            { t: "Kode rusak: def rata(a, b): return a + b / 2 (urutan operasi salah). Perbaiki lalu cetak rata(10, 20), harus 15.0.", h: "Pakai tanda kurung: (a + b) / 2.", v: [/def\s+rata\s*\(/], e: /^\s*15(\.0)?\s*$/, c: "assert rata(10, 20) == 15 and rata(1, 2) == 1.5" },
            { t: "Kode rusak: baris 'print(i)' tidak diindentasi di bawah 'for i in range(3):' (IndentationError). Tulis versi benar yang mencetak 0, 1, 2.", h: "Isi blok for harus menjorok 4 spasi.", v: [/for\s+\w+\s+in\s+range\s*\(\s*3\s*\)\s*:\s*\n[ \t]+print/], e: LINES(["0", "1", "2"]) },
            { t: "Kode rusak: x = [1, 2, 3]; x.push(4) memicu AttributeError. Simpan nama error itu sebagai string di variabel jenis_error, perbaiki x dengan append(4), lalu cetak jenis_error dan x (dua baris).", h: "List tidak punya push; yang benar append.", v: [/\.append\s*\(\s*4\s*\)/], e: LINES(["AttributeError", "[1, 2, 3, 4]"]), c: "assert jenis_error == 'AttributeError' and x == [1, 2, 3, 4]" }
        ]);

    /* ===== 123: itertools ===== */
    mk(123, "Intermediate", "Level 123: itertools",
        "<b>Konsep:</b> Modul <code>itertools</code> berisi pembangun <i>iterator</i> yang efisien: <code>chain</code> (menyambung), <code>combinations</code>/<code>permutations</code>/<code>product</code> (kombinatorik), <code>accumulate</code> (total berjalan), <code>islice</code> (mengiris iterator), <code>count</code>/<code>cycle</code> (tak hingga), dan <code>groupby</code> (mengelompokkan).<br><br><b>Contoh &amp; output:</b> <code>list(combinations('ABC', 2))</code> menghasilkan <code>[('A', 'B'), ('A', 'C'), ('B', 'C')]</code>.<br><br><b>Kesalahan umum:</b> mencetak iterator langsung (hasilnya <code>&lt;itertools...&gt;</code>, bungkus dengan <code>list()</code>); iterator hanya bisa dipakai <b>sekali</b>; <code>groupby</code> hanya mengelompokkan elemen yang bersebelahan, jadi data harus diurutkan dulu; loop tak berujung pada <code>count()</code>/<code>cycle()</code> tanpa <code>islice</code>.",
        'from itertools import combinations, chain\n\nprint(list(combinations("ABC", 2)))  # [(\'A\', \'B\'), (\'A\', \'C\'), (\'B\', \'C\')]\nprint(list(chain([1, 2], [3])))      # [1, 2, 3]',
        [
            { t: "Sambung a = [1, 2] dan b = [3, 4] dengan itertools.chain, lalu cetak hasilnya sebagai list.", h: "list(chain(a, b))", v: [/chain\s*\(/], e: /\[1, 2, 3, 4\]/ },
            { t: "Cetak semua kombinasi 2 huruf dari 'ABC' dengan combinations (sebagai list).", h: "list(combinations('ABC', 2))", v: [/combinations\s*\(/], e: /\[\('A', 'B'\), \('A', 'C'\), \('B', 'C'\)\]/ },
            { t: "Cetak banyaknya permutasi 2 elemen dari [1, 2, 3] memakai permutations dan len().", h: "len(list(permutations([1, 2, 3], 2)))", v: [/permutations\s*\(/], e: /^\s*6\s*$/ },
            { t: "Cetak list product([0, 1], repeat=2) (semua pasangan bit).", h: "product(..., repeat=2)", v: [/product\s*\(/], e: /\[\(0, 0\), \(0, 1\), \(1, 0\), \(1, 1\)\]/ },
            { t: "Cetak total berjalan dari [1, 2, 3, 4] dengan accumulate (sebagai list).", h: "list(accumulate([1, 2, 3, 4]))", v: [/accumulate\s*\(/], e: /\[1, 3, 6, 10\]/ },
            { t: "Ambil 3 angka pertama dari count(10) memakai islice, lalu cetak sebagai list.", h: "list(islice(count(10), 3))", v: [/islice\s*\(/, /count\s*\(/], e: /\[10, 11, 12\]/ },
            { t: "Urutkan ['apel', 'anggur', 'bayam', 'buah', 'cabai'], kelompokkan per huruf pertama dengan groupby, dan cetak tiap grup (huruf lalu list katanya).", h: "groupby(data, key=lambda k: k[0]) lalu list(grup).", v: [/groupby\s*\(/, /sorted\s*\(|\.sort\s*\(/], e: /a\W+anggur\W+apel[\s\S]*b\W+bayam\W+buah[\s\S]*c\W+cabai/ },
            { t: "Dari lampu = ['merah', 'kuning', 'hijau'], ambil 5 nilai pertama dari cycle(lampu) dan cetak (merah, kuning, hijau, merah, kuning).", h: "islice(cycle(lampu), 5)", v: [/cycle\s*\(/, /islice\s*\(|next\s*\(/], e: /merah[\s\S]*kuning[\s\S]*hijau[\s\S]*merah[\s\S]*kuning/ }
        ]);

    /* ===== 124: os & pathlib ===== */
    mk(124, "Intermediate", "Level 124: os & pathlib",
        "<b>Konsep:</b> <code>pathlib.Path</code> memperlakukan lokasi file sebagai objek: <code>Path('/tmp') / 'a.txt'</code> menggabungkan path, <code>.name</code>, <code>.stem</code>, <code>.suffix</code>, <code>.parent</code> menguraikannya, dan <code>.exists()</code>, <code>.mkdir()</code>, <code>.write_text()</code>, <code>.read_text()</code>, <code>.glob('*.txt')</code> bekerja pada filesystem. <code>os.path.join</code> dan <code>os.getcwd()</code> adalah padanan gaya lama.<br><br><b>Contoh &amp; output:</b> <code>Path('/tmp/data/a.txt').suffix</code> menghasilkan <code>'.txt'</code>. Di browser, filesystem bersifat sementara (hilang saat halaman dimuat ulang).<br><br><b>Kesalahan umum:</b> menggabungkan path dengan <code>+</code> atau <code>'\\'</code> alih-alih <code>/</code>/<code>join</code>; lupa <code>exist_ok=True</code> sehingga <code>mkdir</code> error bila folder sudah ada; mengira <code>Path(...)</code> sendiri membuat file; path relatif bergantung pada folder kerja saat program dijalankan.",
        'from pathlib import Path\n\np = Path("/tmp/data/laporan.txt")\nprint(p.name, p.stem, p.suffix)   # laporan.txt laporan .txt\nprint(p.parent)                   # /tmp/data\nprint(Path("/tmp") / "data" / "a.txt")  # /tmp/data/a.txt',
        [
            { t: "Dari p = Path('/tmp/data/laporan.txt') cetak p.name, p.stem, dan p.suffix (tiga baris).", h: "Tiga print terpisah.", v: [/Path\s*\(/], e: LINES(["laporan.txt", "laporan", ".txt"]) },
            { t: "Cetak folder induk (parent) dari Path('/tmp/data/laporan.txt').", h: "p.parent", v: [/\.parent\b/], e: LINES(["/tmp/data"]) },
            { t: "Gabungkan Path('/tmp') / 'proyek' / 'main.py' memakai operator / lalu cetak hasilnya.", h: "Operator / pada objek Path.", v: [/Path\s*\(\s*['"][^'"]*['"]\s*\)\s*\/\s*['"]/], e: LINES(["/tmp/proyek/main.py"]) },
            { t: "Gabungkan 'data', '2026', 'file.csv' dengan os.path.join dan cetak hasilnya.", h: "import os; os.path.join(a, b, c)", v: [/os\.path\.join\s*\(/], e: LINES(["data/2026/file.csv"]) },
            { t: "Buat folder /tmp/odyssey/sub dengan mkdir(parents=True, exist_ok=True), lalu cetak apakah folder itu exists().", h: "Path('/tmp/odyssey/sub').mkdir(parents=True, exist_ok=True)", v: [/mkdir\s*\(/, /parents\s*=\s*True/, /exist_ok\s*=\s*True/], e: LINES(["True"]), c: "from pathlib import Path\nassert Path('/tmp/odyssey/sub').is_dir()" },
            { t: "Buat folder /tmp/odyssey (jika belum ada), tulis 'halo' ke /tmp/odyssey/catatan.txt dengan write_text(), lalu baca kembali dengan read_text() dan cetak.", h: "Path.write_text('halo') lalu Path.read_text().", v: [/write_text\s*\(/, /read_text\s*\(/], e: LINES(["halo"]), c: "from pathlib import Path\nassert Path('/tmp/odyssey/catatan.txt').read_text() == 'halo'" },
            { t: "Awali dengan shutil.rmtree('/tmp/odyssey/data', ignore_errors=True) agar bersih, buat folder itu, tulis file a.txt, b.txt, c.txt di dalamnya, lalu cetak nama file hasil glob('*.txt') secara terurut (satu per baris).", h: "sorted(p.name for p in folder.glob('*.txt'))", v: [/rmtree\s*\(/, /glob\s*\(/, /sorted\s*\(/, /write_text\s*\(|open\s*\(/], e: LINES(["a.txt", "b.txt", "c.txt"]), c: "from pathlib import Path\nassert sorted(p.name for p in Path('/tmp/odyssey/data').glob('*.txt')) == ['a.txt', 'b.txt', 'c.txt']" },
            { t: "Tulis 'abcde' ke /tmp/odyssey/ukuran.txt (folder dibuat dulu bila perlu), lalu cetak ukuran file itu dalam byte memakai stat().st_size atau os.path.getsize().", h: "Path.stat().st_size", v: [/stat\s*\(\s*\)\s*\.st_size|getsize\s*\(/], e: LINES(["5"]), c: "from pathlib import Path\nassert Path('/tmp/odyssey/ukuran.txt').stat().st_size == 5" }
        ]);

    /* ===== 125: venv & pip (dinilai dari teks) ===== */
    mk(125, "Intermediate", "Level 125: Virtual Environment & pip",
        "<b>Konsep:</b> <i>Virtual environment</i> (venv) adalah folder Python terisolasi sehingga paket proyek A tidak bentrok dengan proyek B. <code>pip</code> memasang paket ke venv yang sedang aktif, dan <code>requirements.txt</code> mencatat daftar paket beserta versinya agar orang lain bisa memasang lingkungan yang sama.<br><br><b>Contoh &amp; perintah:</b> buat dengan <code>python -m venv .venv</code>, aktifkan dengan <code>source .venv/bin/activate</code> (Linux/macOS) atau <code>.venv\\Scripts\\activate</code> (Windows), lalu <code>pip install requests</code>. Soal level ini berupa perintah terminal dan dinilai dari isi teks (tidak dijalankan).<br><br><b>Kesalahan umum:</b> memasang paket tanpa mengaktifkan venv (masuk ke Python global); meng-commit folder venv ke Git (tambahkan ke <code>.gitignore</code>); lupa mengunci versi (<code>requests==2.32.3</code>) sehingga hasil berbeda antar mesin.",
        '# Perintah terminal\n# python -m venv .venv\n# source .venv/bin/activate\n# pip install requests==2.32.3\n# pip freeze > requirements.txt',
        [
            { t: "Tulis perintah membuat virtual environment bernama .venv.", h: "python -m venv .venv", v: [/python3?\s+-m\s+venv\s+\S+/], x: true },
            { t: "Tulis perintah mengaktifkan .venv untuk Linux/macOS dan untuk Windows (dua baris).", h: "source .venv/bin/activate dan .venv\\Scripts\\activate", v: [/source\s+\S*bin[\\\/]activate/, /Scripts[\\\/]activate/], x: true },
            { t: "Tulis perintah memasang paket requests dengan versi dikunci (==).", h: "pip install requests==2.32.3", v: [/pip3?\s+install\s+requests==\d+(\.\d+)+/], x: true },
            { t: "Tulis perintah menyimpan daftar paket terpasang ke berkas requirements.txt.", h: "pip freeze > requirements.txt", v: [/pip3?\s+freeze\s*>\s*requirements\.txt/], x: true },
            { t: "Tulis perintah memasang semua paket dari requirements.txt.", h: "pip install -r requirements.txt", v: [/pip3?\s+install\s+-r\s+requirements\.txt/], x: true },
            { t: "Tulis perintah menonaktifkan venv, lalu satu baris .gitignore yang mengabaikan folder .venv.", h: "deactivate; baris .venv/ pada .gitignore.", v: [/\bdeactivate\b/, /^\s*\.?venv\/?\s*$/m], x: true },
            { t: "Tulis dua perintah: menampilkan daftar paket terpasang, lalu menghapus paket requests.", h: "pip list dan pip uninstall requests", v: [/pip3?\s+list/, /pip3?\s+uninstall\s+(-y\s+)?requests/], x: true }
        ]);

    /* ===== 126: Matplotlib dasar ===== */
    const MPL = [/matplotlib\.pyplot\s+as\s+plt/, /plt\.subplots\s*\(/];
    mk(126, "Data Engineering", "Level 126: Matplotlib Dasar",
        "<b>Konsep:</b> Matplotlib menggambar grafik. Gaya yang dianjurkan adalah <i>object-oriented</i>: <code>fig, ax = plt.subplots()</code> membuat kanvas (<code>fig</code>) dan area plot (<code>ax</code>), lalu semua pengaturan dipanggil lewat <code>ax</code>: <code>ax.plot()</code> (garis), <code>ax.bar()</code> (batang), <code>ax.scatter()</code> (titik), <code>ax.hist()</code> (histogram), <code>ax.set_title()</code>, <code>ax.set_xlabel()</code>, <code>ax.legend()</code>. <code>fig.savefig('file.png')</code> menyimpan gambar.<br><br><b>Contoh &amp; output:</b> kode di bawah menampilkan satu grafik garis berjudul \"Contoh\" di panel terminal.<br><br><b>Kesalahan umum:</b> mencampur gaya <code>plt.plot</code> dan <code>ax.plot</code>; lupa <code>label=</code> sebelum <code>ax.legend()</code>; memanggil <code>plt.show()</code> berkali-kali; jumlah data x dan y tidak sama.",
        'import matplotlib.pyplot as plt\n\nfig, ax = plt.subplots()\nax.plot([1, 2, 3], [2, 4, 8])\nax.set_title("Contoh")\nplt.show()',
        [
            { t: "Buat fig, ax = plt.subplots(), gambar garis x = [1, 2, 3] dan y = [2, 4, 8] dengan ax.plot, lalu tampilkan dengan plt.show().", h: "ax.plot(x, y)", v: MPL.concat([/ax\.plot\s*\(/]), c: "assert len(ax.lines) == 1 and list(ax.lines[0].get_ydata()) == [2, 4, 8]" },
            { t: "Pada grafik garis sederhana (fig, ax = plt.subplots()), beri judul 'Penjualan', label sumbu x 'Bulan', dan label sumbu y 'Unit', lalu tampilkan.", h: "ax.set_title, ax.set_xlabel, ax.set_ylabel", v: MPL.concat([/set_title\s*\(/, /set_xlabel\s*\(/, /set_ylabel\s*\(/]), c: "assert ax.get_title() == 'Penjualan' and ax.get_xlabel() == 'Bulan' and ax.get_ylabel() == 'Unit'" },
            { t: "Buat grafik batang ax.bar(['A', 'B', 'C'], [5, 3, 7]) lalu tampilkan.", h: "ax.bar(kategori, nilai)", v: MPL.concat([/ax\.bar\s*\(/]), c: "assert len(ax.patches) == 3 and [round(p.get_height()) for p in ax.patches] == [5, 3, 7]" },
            { t: "Buat scatter plot ax.scatter dengan x = [1, 2, 3, 4] dan y = [1, 4, 9, 16], lalu tampilkan.", h: "ax.scatter(x, y)", v: MPL.concat([/ax\.scatter\s*\(/]), c: "assert len(ax.collections) == 1" },
            { t: "Gambar dua garis pada satu ax dengan label 'Kucing' dan 'Anjing' (data bebas), tambahkan ax.legend(), lalu tampilkan.", h: "ax.plot(x, y, label='Kucing')", v: MPL.concat([/label\s*=/, /ax\.legend\s*\(/]), c: "assert len(ax.lines) == 2 and ax.get_legend() is not None and [t.get_text() for t in ax.get_legend().get_texts()] == ['Kucing', 'Anjing']" },
            { t: "Buat histogram dari data = [1, 2, 2, 3, 3, 3, 4, 4, 5] dengan bins=5 memakai ax.hist, lalu tampilkan.", h: "ax.hist(data, bins=5)", v: MPL.concat([/ax\.hist\s*\(/, /bins\s*=\s*5/]), c: "assert len(ax.patches) == 5" },
            { t: "Buat dua panel berdampingan: fig, axes = plt.subplots(1, 2). Panel kiri berisi garis (axes[0].plot), panel kanan berisi batang (axes[1].bar). Tampilkan.", h: "axes adalah array dua ax.", v: [/matplotlib\.pyplot\s+as\s+plt/, /plt\.subplots\s*\(\s*1\s*,\s*2/, /axes\s*\[\s*0\s*\]\s*\.plot\s*\(/, /axes\s*\[\s*1\s*\]\s*\.bar\s*\(/], c: "assert len(axes) == 2 and len(axes[0].lines) == 1 and len(axes[1].patches) >= 1" },
            { t: "Buat grafik garis apa saja (fig, ax = plt.subplots()), lalu simpan ke /tmp/grafik.png dengan fig.savefig().", h: "fig.savefig('/tmp/grafik.png')", v: MPL.concat([/savefig\s*\(/]), c: "import os\nassert os.path.getsize('/tmp/grafik.png') > 0" }
        ]);

    /* ===== 127: Embedding & kemiripan vektor ===== */
    mk(127, "AI Engineering", "Level 127: Embedding & Kemiripan Vektor",
        "<b>Konsep:</b> <i>Embedding</i> mengubah teks menjadi vektor angka sehingga teks yang maknanya mirip menghasilkan vektor yang berdekatan. Kedekatan diukur dengan <b>cosine similarity</b> = <code>dot(a, b) / (norma(a) * norma(b))</code>, bernilai 1 untuk arah sama, 0 untuk tegak lurus. Basis data vektor (Level berikutnya) hanya menyimpan vektor dan mencari yang terdekat.<br><br><b>Contoh &amp; output:</b> embedding asli datang dari model (ratusan dimensi); di sini kita memakai <i>bag-of-words</i> sederhana: tiap dimensi = jumlah kemunculan satu kata kosakata. Vektor <code>[1, 2, 3]</code> dan <code>[2, 4, 6]</code> searah, cosine = <code>1.0</code>.<br><br><b>Kesalahan umum:</b> membagi dengan nol bila salah satu vektor berisi nol semua; membandingkan vektor dari kosakata/model berbeda; mengira jarak kecil = skor tinggi (cosine dan jarak berlawanan arah).",
        'import math\n\ndef dot(a, b):\n    return sum(x * y for x, y in zip(a, b))\n\ndef norma(v):\n    return math.sqrt(dot(v, v))\n\ndef cosine(a, b):\n    return dot(a, b) / (norma(a) * norma(b))\n\nprint(round(cosine([1, 2, 3], [2, 4, 6]), 4))   # 1.0\nprint(round(cosine([1, 0], [0, 1]), 4))         # 0.0',
        [
            { t: "Buat fungsi dot(a, b) yang mengembalikan hasil kali titik dua vektor (jumlah a[i] * b[i]). Cetak dot([1, 2, 3], [4, 5, 6]).", h: "sum(x * y for x, y in zip(a, b))", v: [/def\s+dot\s*\(/], e: /^\s*32\s*$/, c: "assert dot([1, 0], [0, 1]) == 0 and dot([2, 3], [4, 5]) == 23" },
            { t: "Buat fungsi norma(v) (panjang vektor, akar jumlah kuadrat). Cetak norma([3, 4]).", h: "math.sqrt(sum(x * x for x in v))", v: [/def\s+norma\s*\(/], e: /^\s*5(\.0)?\s*$/, c: "assert abs(norma([1, 0]) - 1) < 1e-9 and abs(norma([3, 4]) - 5) < 1e-9" },
            { t: "Buat dot, norma, dan cosine(a, b) = dot / (norma(a) * norma(b)). Cetak round(cosine([1, 0], [0, 1]), 4) lalu round(cosine([1, 2], [2, 4]), 4).", h: "Vektor tegak lurus -> 0.0; searah -> 1.0.", v: [/def\s+cosine\s*\(/], e: LINES(["0.0", "1.0"]), c: "assert abs(cosine([1, 2], [2, 4]) - 1) < 1e-9 and abs(cosine([1, 0], [0, 1])) < 1e-9" },
            { t: "Dengan VOKAB = ['kucing', 'anjing', 'makan', 'tidur'], buat embed(teks) yang mengembalikan list jumlah kemunculan tiap kata VOKAB di teks. Cetak embed('kucing makan makan').", h: "[teks.split().count(k) for k in VOKAB]", v: [/def\s+embed\s*\(/], e: /\[1, 0, 2, 0\]/, c: "assert embed('anjing tidur tidur') == [0, 1, 0, 2]" },
            { t: "Dalam satu program (VOKAB seperti soal sebelumnya, embed, dot, norma, cosine), cetak round(cosine(embed('kucing makan'), embed('kucing tidur')), 2).", h: "Hasilnya 0.5 karena hanya satu kata yang sama.", v: [/def\s+embed\s*\(/, /def\s+cosine\s*\(/], e: LINES(["0.5"]) },
            { t: "Dengan VOKAB = ['kucing', 'anjing', 'makan', 'tidur', 'ikan'] dan dokumen = ['kucing makan ikan', 'anjing tidur', 'kucing tidur'], buat cari(kueri) yang mengembalikan dokumen paling mirip (cosine tertinggi). Cetak cari('kucing makan').", h: "Embed kueri dan tiap dokumen, ambil yang cosine-nya maksimum.", v: [/def\s+cari\s*\(/], e: /kucing makan ikan/, c: "assert cari('anjing tidur') == 'anjing tidur' and cari('kucing makan') == 'kucing makan ikan'" },
            { t: "Buat normalisasi(v) yang membagi tiap elemen dengan norma vektor (panjang menjadi 1). Cetak normalisasi([3, 4]).", h: "[x / norma for x in v]", v: [/def\s+normalisasi\s*\(/], e: /\[0\.6, 0\.8\]/, c: "assert normalisasi([0, 5]) == [0.0, 1.0]" },
            { t: "Buat euclid(a, b) (jarak Euclidean: akar jumlah kuadrat selisih). Cetak euclid([0, 0], [3, 4]).", h: "math.sqrt(sum((x - y) ** 2 for x, y in zip(a, b)))", v: [/def\s+euclid\s*\(/], e: /^\s*5(\.0)?\s*$/, c: "assert euclid([1, 1], [1, 1]) == 0 and abs(euclid([0, 0], [3, 4]) - 5) < 1e-9" }
        ]);
})();

/* ---------- MINI-PROYEK DI AKHIR TIAP FASE (128-139) ----------
   Tiap mini-proyek berisi 5 soal berjenjang (mudah -> sulit) yang bersama-sama membangun satu program kecil.
   Setiap soal berdiri sendiri (tulis ulang bagian yang dibutuhkan) dan dinilai dengan tes perilaku. */
(function () {
    function V(rs) { rs = [].concat(rs); return function (c) { return rs.every(function (r) { return r.test(c); }); }; }
    function C(lines) { return lines.join("\n"); }
    function norm(l) { return l.replace(/\s+/g, " ").trim().toLowerCase(); }
    function LINES(arr) {
        const want = arr.map(function (x) { return norm(String(x)); });
        return { want: arr.map(String), test: function (s) {
            const got = String(s).replace(/\r/g, "").split("\n").map(norm).filter(function (l) { return l !== ""; });
            return got.length === want.length && got.every(function (x, i) { return x === want[i]; });
        } };
    }
    function mk(id, cat, title, desc, example, rows) {
        levelsData.push({ id: id, category: cat, title: title, desc: desc, example: example,
            tasks: rows.map(function (r) {
                return { task: r.t, hint: r.h, validate: V(r.v || [/[\s\S]/]), expect: r.e || null, check: r.c || null,
                         stdin: r.i || null, needsIn: !!r.n, forceText: !!r.x, skipUnused: true };
            }) });
    }
    const intro = function (fase, isi) {
        return "<b>Mini-proyek penutup fase " + fase + ":</b> " + isi + " Soal disusun dari mudah ke sulit dan saling melengkapi; tiap soal berdiri sendiri, jadi tulis ulang bagian yang dibutuhkan. Jawaban dinilai dengan menjalankan tes pada fungsi/kelas yang kamu buat.";
    };

    /* ----- 128: Beginner ----- */
    mk(128, "Beginner", "Level 128: Mini-Proyek Beginner: Kasir & Tebak Angka",
        intro("Beginner", "membuat kasir sederhana lalu permainan tebak angka dari variabel, operator, percabangan, input(), dan while.") + "<br><br><b>Contoh &amp; output:</b> kode di bawah menghitung total belanja dan mencetak <code>Total: 25000</code>.<br><br><b>Kesalahan umum:</b> lupa mengubah hasil input() ke angka; memakai <code>=</code> alih-alih <code>==</code>; while yang kondisinya tidak pernah berubah.",
        'harga1 = 12000\nharga2 = 8500\nharga3 = 4500\ntotal = harga1 + harga2 + harga3\nprint(f"Total: {total}")  # Total: 25000',
        [
            { t: "Buat harga1 = 12000, harga2 = 8500, harga3 = 4500. Hitung total (jumlah ketiganya) dan cetak: Total: 25000", h: "total = harga1 + harga2 + harga3", v: [/\btotal\s*=/], e: /Total: 25000/, c: "assert total == 25000" },
            { t: "Dengan total = 25000: jika total >= 20000 beri diskon 10% (bayar = total * 0.9), selain itu bayar = total. Cetak: Bayar: 22500.0", h: "Gunakan if ... else.", v: [/\bif\b/, /\belse\b/, /\bbayar\b/], e: /Bayar: 22500(\.0)?/, c: "assert bayar == 22500" },
            { t: "Dengan bayar = 22500.0, baca uang dari input() (otomatis: 30000), ubah ke int, lalu cetak: Kembalian: 7500.0", h: "kembalian = uang - bayar", v: [/\binput\s*\(/, /\bint\s*\(|\bfloat\s*\(/], i: ["30000"], e: /Kembalian: 7500(\.0)?/, c: "assert uang == 30000" },
            { t: "Tebak angka: rahasia = 7. Baca tebakan (int dari input(), otomatis: 5). Cetak 'Terlalu kecil' bila tebakan < rahasia, 'Terlalu besar' bila lebih, selain itu 'Benar!'.", h: "if / elif / else.", v: [/\binput\s*\(/, /\bif\b/, /\belif\b/, /\belse\b/], i: ["5"], e: /terlalu kecil/i, c: "assert rahasia == 7" },
            { t: "Ulangi tebakan dengan while (rahasia = 7; input otomatis: 3, 9, 7). Beri petunjuk seperti soal sebelumnya, hitung percobaan (variabel percobaan), berhenti saat benar, lalu cetak: Benar dalam 3 percobaan", h: "Naikkan percobaan di setiap iterasi; hentikan dengan break atau kondisi while.", v: [/\bwhile\b/, /\binput\s*\(/, /\bpercobaan\b/], i: ["3", "9", "7"], e: /terlalu kecil[\s\S]*terlalu besar[\s\S]*benar dalam 3 percobaan/i, c: "assert percobaan == 3" }
        ]);

    /* ----- 129: Intermediate ----- */
    mk(129, "Intermediate", "Level 129: Mini-Proyek Intermediate: Pengelola Nilai Siswa",
        intro("Intermediate", "membangun pengelola nilai dari fungsi, dictionary, sorted/lambda/enumerate, Counter, dan penanganan error.") + "<br><br><b>Contoh &amp; output:</b> kode di bawah mencetak <code>80.0</code>.<br><br><b>Kesalahan umum:</b> membagi dengan nol pada daftar kosong; mengubah dictionary sambil diiterasi; lupa <code>reverse=True</code>.",
        'def rata_rata(daftar):\n    return sum(daftar) / len(daftar) if daftar else 0\n\nnilai = {"Ani": 90, "Budi": 70, "Cici": 85}\nprint(rata_rata([80, 90, 70]))  # 80.0',
        [
            { t: "Buat rata_rata(daftar) yang mengembalikan rata-rata (0 bila daftar kosong). Cetak rata_rata([80, 90, 70]).", h: "Periksa daftar kosong sebelum membagi.", v: [/def\s+rata_rata\s*\(/], e: /^\s*80(\.0)?\s*$/, c: "assert rata_rata([1, 2, 3, 4]) == 2.5 and rata_rata([]) == 0" },
            { t: "Dengan nilai = {'Ani': 90, 'Budi': 70, 'Cici': 85}, buat lulus(nilai, batas=75) yang mengembalikan list nama yang lulus (nilai >= batas), terurut. Cetak lulus(nilai).", h: "sorted(n for n, v in nilai.items() if v >= batas)", v: [/def\s+lulus\s*\(\s*\w+\s*,\s*batas\s*=\s*75/], e: /\['Ani', 'Cici'\]/, c: "assert lulus({'Z': 80, 'A': 60, 'B': 75}) == ['B', 'Z'] and lulus({'A': 80, 'B': 60}, batas=50) == ['A', 'B']" },
            { t: "Cetak peringkat dari nilai tertinggi (nilai seperti soal sebelumnya) memakai sorted(..., key=lambda ..., reverse=True) dan enumerate(start=1), format '1. Ani 90'.", h: "sorted(nilai.items(), key=lambda p: p[1], reverse=True)", v: [/sorted\s*\(/, /lambda/, /enumerate\s*\(/], e: LINES(["1. Ani 90", "2. Cici 85", "3. Budi 70"]) },
            { t: "Buat predikat(n): 'A' bila n >= 85, 'B' bila n >= 75, selain itu 'C'. Hitung distribusi predikat dari nilai seperti soal sebelumnya dengan collections.Counter dan cetak dict(counter).", h: "Counter(predikat(v) for v in nilai.values())", v: [/def\s+predikat\s*\(/, /Counter\s*\(/], e: /\{'A': 2, 'C': 1\}|\{'C': 1, 'A': 2\}/, c: "assert predikat(85) == 'A' and predikat(75) == 'B' and predikat(74) == 'C'" },
            { t: "Buat aman_nilai(teks): ubah ke int; bila bukan angka atau di luar 0-100, raise ValueError. Uji '85', 'abc', '150' dengan try/except; cetak 85 lalu 'Nilai tidak valid' dua kali (tiga baris).", h: "int('abc') sudah melempar ValueError sendiri.", v: [/def\s+aman_nilai\s*\(/, /raise\s+ValueError/, /except\s+ValueError/], e: LINES(["85", "Nilai tidak valid", "Nilai tidak valid"]), c: C(["assert aman_nilai('0') == 0 and aman_nilai('100') == 100", "try:", "    aman_nilai('-1')", "    ok = False", "except ValueError:", "    ok = True", "assert ok, 'nilai -1 harus ditolak'"]) }
        ]);

    /* ----- 130: Advanced ----- */
    mk(130, "Advanced", "Level 130: Mini-Proyek Advanced: Rekening Bank OOP",
        intro("Advanced", "membangun class Rekening lengkap dengan validasi, property, __str__, dan dataclass.") + "<br><br><b>Contoh &amp; output:</b> kode di bawah mencetak <code>150</code>.<br><br><b>Kesalahan umum:</b> lupa <code>self</code>; mengubah saldo langsung dari luar class; <code>raise ValueError</code> tanpa pesan yang jelas.",
        'class Rekening:\n    def __init__(self, pemilik, saldo=0):\n        self.pemilik = pemilik\n        self.saldo = saldo\n\n    def setor(self, jumlah):\n        if jumlah <= 0:\n            raise ValueError("Jumlah harus positif")\n        self.saldo += jumlah\n\nr = Rekening("Ani", 100)\nr.setor(50)\nprint(r.saldo)  # 150',
        [
            { t: "Buat class Rekening dengan __init__(self, pemilik, saldo=0) dan method setor(jumlah) yang menambah saldo; jumlah <= 0 -> raise ValueError. Buat Rekening('Ani'), setor 500, cetak saldo.", h: "Atribut self.saldo; validasi di awal setor().", v: [/class\s+Rekening/, /def\s+setor/, /raise\s+ValueError/], e: /^\s*500\s*$/, c: C(["r = Rekening('Budi', 100)", "r.setor(50)", "assert r.saldo == 150", "try:", "    r.setor(0)", "    ok = False", "except ValueError:", "    ok = True", "assert ok"]) },
            { t: "Lanjutkan: tambahkan tarik(jumlah); bila jumlah > saldo, raise ValueError('Saldo tidak cukup'). Setor 500 lalu tarik 200 dan cetak saldo (300); lalu tarik 1000 di dalam try/except dan cetak pesan error.", h: "except ValueError as e: print(e)", v: [/class\s+Rekening/, /def\s+tarik/, /except\s+ValueError/], e: LINES(["300", "Saldo tidak cukup"]), c: C(["r = Rekening('A', 100)", "r.tarik(40)", "assert r.saldo == 60", "try:", "    r.tarik(500)", "    ok = False", "except ValueError:", "    ok = True", "assert ok"]) },
            { t: "Ubah saldo menjadi property read-only (atribut internal _saldo, tanpa setter). Dengan r = Rekening('Ani', 100) cetak r.saldo; lalu coba r.saldo = 5 di dalam try/except AttributeError dan cetak 'saldo read-only'.", h: "@property def saldo(self): return self._saldo", v: [/@property/, /_saldo/, /except\s+AttributeError/], e: LINES(["100", "saldo read-only"]), c: C(["r = Rekening('A', 100)", "assert r.saldo == 100", "try:", "    r.saldo = 5", "    ok = False", "except AttributeError:", "    ok = True", "assert ok", "r.setor(10)", "assert r.saldo == 110"]) },
            { t: "Tambahkan __str__ sehingga print(r) menampilkan 'Rekening Ani: 1500'. Buat r = Rekening('Ani', 1000), setor 500, lalu cetak r.", h: "return f\"Rekening {self.pemilik}: {self.saldo}\"", v: [/def\s+__str__/], e: /Rekening Ani: 1500/, c: "assert str(Rekening('X', 5)) == 'Rekening X: 5'" },
            { t: "Buat @dataclass Transaksi(jenis: str, jumlah: int). Rekening menyimpan self.riwayat (list Transaksi) dan mencatat 'setor'/'tarik' tiap transaksi sukses. Dengan Rekening('Ani'): setor 500, tarik 200, lalu cetak len(r.riwayat) dan r.riwayat[0] (dua baris).", h: "from dataclasses import dataclass", v: [/@dataclass/, /class\s+Transaksi/, /riwayat/], e: LINES(["2", "Transaksi(jenis='setor', jumlah=500)"]), c: "r = Rekening('A')\nr.setor(10)\nr.tarik(4)\nassert r.riwayat == [Transaksi('setor', 10), Transaksi('tarik', 4)]" }
        ]);

    /* ----- 131: Expert ----- */
    const LOG = 'LOG = [\n    "2026-10-01 10:00:01 INFO login user=ani",\n    "2026-10-01 10:00:05 ERROR gagal bayar user=budi",\n    "2026-10-01 10:01:00 INFO login user=cici",\n    "2026-10-01 10:02:10 ERROR timeout user=ani",\n    "2026-10-01 10:03:00 ERROR disk penuh user=ani",\n]\n';
    mk(131, "Expert", "Level 131: Mini-Proyek Expert: Analisis Log Server",
        intro("Expert", "menganalisis log server dengan generator, regex, closure, dan Counter.") + " Data <code>LOG</code> ada di kotak contoh; salin ke editor (tombol \"Pakai di editor\") untuk soal yang memakainya.<br><br><b>Contoh &amp; output:</b> kode di bawah mencetak <code>3</code> (jumlah baris ERROR).<br><br><b>Kesalahan umum:</b> generator yang dipakai dua kali (habis setelah pemakaian pertama); pola regex yang terlalu rakus; lupa mengembalikan fungsi dalam pada closure.",
        LOG + '\ndef error_saja(baris):\n    for b in baris:\n        if " ERROR " in b:\n            yield b\n\nprint(len(list(error_saja(LOG))))  # 3',
        [
            { t: "Buat generator error_saja(baris) yang yield setiap baris log yang mengandung ' ERROR '. Dengan LOG dari contoh, cetak len(list(error_saja(LOG))).", h: "Gunakan yield di dalam for.", v: [/def\s+error_saja\s*\(/, /\byield\b/], e: /^\s*3\s*$/, c: C(["import inspect", "assert inspect.isgeneratorfunction(error_saja)", "assert list(error_saja(['a ERROR x', 'b INFO y'])) == ['a ERROR x']"]) },
            { t: "Dengan re.findall, ambil semua nama user dari LOG (teks setelah 'user=') ke list 'pengguna' dan cetak.", h: "re.findall(r'user=(\\w+)', teks)", v: [/re\.findall\s*\(/], e: /\['ani', 'budi', 'cici', 'ani', 'ani'\]/, c: "assert pengguna == ['ani', 'budi', 'cici', 'ani', 'ani']" },
            { t: "Buat buat_penghitung(level) yang mengembalikan fungsi hitung(baris) (closure) untuk menghitung baris ber-level itu. Cetak buat_penghitung('ERROR')(LOG).", h: "Fungsi dalam memakai variabel level dari fungsi luar.", v: [/def\s+buat_penghitung\s*\(/, /def\s+buat_penghitung[\s\S]*\n[ \t]+def\s+\w+/], e: /^\s*3\s*$/, c: "assert buat_penghitung('INFO')(['x INFO y', 'z ERROR w', 'q INFO r']) == 2" },
            { t: "Dengan collections.Counter dan most_common(1), cari user dengan ERROR terbanyak di LOG dan cetak namanya.", h: "Hitung user hanya dari baris ERROR.", v: [/Counter\s*\(/, /most_common\s*\(/], e: /^\s*ani\s*$/ },
            { t: "Buat laporan(baris) yang mengembalikan dict {'total': ..., 'error': ..., 'user_terbanyak': ...} (user_terbanyak = user dengan ERROR terbanyak). Cetak laporan(LOG).", h: "Gabungkan generator, re, dan Counter dari soal sebelumnya.", v: [/def\s+laporan\s*\(/, /re\.|Counter/], e: /\{'total': 5, 'error': 3, 'user_terbanyak': 'ani'\}/, c: "assert laporan(['t ERROR user=x', 't INFO user=x', 't ERROR user=y', 't ERROR user=y']) == {'total': 4, 'error': 3, 'user_terbanyak': 'y'}" }
        ]);

    /* ----- 132: Professional ----- */
    mk(132, "Professional", "Level 132: Mini-Proyek Professional: Penyimpan Konfigurasi JSON Bertipe",
        intro("Professional", "membangun penyimpan konfigurasi dengan type hint, dataclass, serialisasi JSON, validasi, dan file.") + "<br><br><b>Contoh &amp; output:</b> kode di bawah mencetak <code>Konfigurasi(nama='app', port=8000, debug=False)</code>.<br><br><b>Kesalahan umum:</b> lupa <code>asdict</code> saat membuat JSON; mengira type hint memaksa tipe saat runtime (tidak); lupa menutup file (pakai <code>with</code>).",
        'from dataclasses import dataclass\n\n@dataclass\nclass Konfigurasi:\n    nama: str\n    port: int = 8000\n    debug: bool = False\n\nprint(Konfigurasi("app"))  # Konfigurasi(nama=\'app\', port=8000, debug=False)',
        [
            { t: "Buat @dataclass Konfigurasi dengan type hint: nama: str, port: int = 8000, debug: bool = False. Cetak Konfigurasi('app').", h: "from dataclasses import dataclass", v: [/@dataclass/, /nama\s*:\s*str/, /port\s*:\s*int\s*=\s*8000/, /debug\s*:\s*bool\s*=\s*False/], e: /Konfigurasi\(nama='app', port=8000, debug=False\)/, c: "assert Konfigurasi('x', 1, True).debug is True" },
            { t: "Ubah Konfigurasi('app') menjadi string JSON dengan dataclasses.asdict + json.dumps dan cetak hasilnya.", h: "json.dumps(asdict(obj))", v: [/asdict\s*\(/, /json\.dumps\s*\(/], e: /\{"nama": "app", "port": 8000, "debug": false\}/ },
            { t: "Buat muat(teks: str) -> Konfigurasi yang membuat objek dari string JSON (json.loads lalu ** unpacking). Cetak muat('{\"nama\": \"x\", \"port\": 9}').", h: "Konfigurasi(**json.loads(teks))", v: [/def\s+muat\s*\(\s*teks\s*:\s*str\s*\)\s*->\s*Konfigurasi/, /json\.loads\s*\(/], e: /Konfigurasi\(nama='x', port=9, debug=False\)/, c: "assert muat('{\"nama\": \"y\"}') == Konfigurasi('y')" },
            { t: "Tambahkan __post_init__ yang raise ValueError bila port di luar 1..65535. Uji Konfigurasi('a', 70000) dalam try/except dan cetak 'port tidak valid'.", h: "Validasi di __post_init__ berjalan setelah __init__ otomatis.", v: [/__post_init__/, /raise\s+ValueError/], e: /port tidak valid/i, c: C(["try:", "    Konfigurasi('a', 0)", "    ok = False", "except ValueError:", "    ok = True", "assert ok", "assert Konfigurasi('a', 80).port == 80"]) },
            { t: "Simpan Konfigurasi('app', 9000) ke /tmp/konfig.json dengan json.dump, muat kembali dengan json.load, lalu cetak apakah hasilnya sama dengan asdict aslinya (True).", h: "with open(path, 'w') as f: json.dump(...)", v: [/json\.dump\s*\(/, /json\.load\s*\(/, /open\s*\(/], e: LINES(["True"]), c: "import json\nassert json.load(open('/tmp/konfig.json')) == {'nama': 'app', 'port': 9000, 'debug': False}" }
        ]);

    /* ----- 133: Architecture ----- */
    mk(133, "Architecture", "Level 133: Mini-Proyek Architecture: Sistem Pesanan Modular",
        intro("Architecture", "merakit sistem pesanan dengan pola Strategy, Repository, Dependency Injection, dan class abstrak.") + "<br><br><b>Contoh &amp; output:</b> kode di bawah mencetak <code>900.0</code>.<br><br><b>Kesalahan umum:</b> membuat objek dependensi di dalam class (membuat tes sulit); class abstrak tanpa <code>@abstractmethod</code>; satu class mengerjakan terlalu banyak hal.",
        'class DiskonMember:\n    def hitung(self, total):\n        return total * 0.9\n\nprint(DiskonMember().hitung(1000))  # 900.0',
        [
            { t: "Strategy: buat class DiskonNormal (hitung(total) mengembalikan total) dan DiskonMember (hitung(total) mengembalikan total * 0.9). Cetak DiskonMember().hitung(1000).", h: "Dua class dengan method yang sama.", v: [/class\s+DiskonNormal/, /class\s+DiskonMember/, /def\s+hitung/], e: /900(\.0)?/, c: "assert DiskonNormal().hitung(500) == 500 and abs(DiskonMember().hitung(200) - 180) < 1e-9" },
            { t: "Repository: buat class PesananRepository dengan simpan(pesanan) dan semua() (data di list internal). Simpan 'A' dan 'B', lalu cetak semua().", h: "self._data = [] di __init__.", v: [/class\s+PesananRepository/, /def\s+simpan/, /def\s+semua/], e: /\['A', 'B'\]/, c: "r = PesananRepository()\nr.simpan(1)\nr.simpan(2)\nassert r.semua() == [1, 2]" },
            { t: "Dependency Injection: buat class LayananPesanan(repo, diskon) dengan buat(total) yang menghitung total akhir lewat diskon.hitung, menyimpannya lewat repo.simpan, dan mengembalikannya. Pakai PesananRepository dan DiskonMember (tulis ulang), panggil buat(1000), cetak hasilnya dan repo.semua().", h: "Terima dependensi lewat __init__, jangan buat sendiri di dalam class.", v: [/class\s+LayananPesanan/, /def\s+__init__\s*\(\s*self\s*,\s*repo\s*,\s*diskon/, /def\s+buat/], e: /900(\.0)?[\s\S]*\[900(\.0)?\]/, c: C(["class _R:", "    def __init__(s): s.d = []", "    def simpan(s, x): s.d.append(x)", "class _D:", "    def hitung(s, t): return t - 1", "_r = _R()", "assert LayananPesanan(_r, _D()).buat(10) == 9 and _r.d == [9]"]) },
            { t: "ABC: buat class abstrak Diskon (abc.ABC) dengan @abstractmethod hitung(total); DiskonNormal mewarisinya. Buktikan Diskon() memicu TypeError (cetak 'abstrak') dan cetak DiskonNormal().hitung(10) (10).", h: "from abc import ABC, abstractmethod", v: [/\bABC\b/, /@abstractmethod/, /except\s+TypeError/], e: LINES(["abstrak", "10"]), c: C(["try:", "    Diskon()", "    ok = False", "except TypeError:", "    ok = True", "assert ok and DiskonNormal().hitung(5) == 5"]) },
            { t: "Tes dengan fake: buat RepoPalsu (simpan ke list), DiskonMember, LayananPesanan, dan fungsi test_buat_member() yang meng-assert LayananPesanan(RepoPalsu(), DiskonMember()).buat(100) == 90.0. Panggil test_buat_member() lalu cetak 'lulus'.", h: "Fake object menggantikan repository asli saat tes.", v: [/def\s+test_buat_member/, /\bassert\b/, /class\s+RepoPalsu/, /class\s+LayananPesanan/, /class\s+DiskonMember/], e: /lulus/, c: "test_buat_member()" }
        ]);

    /* ----- 134: Data Engineering ----- */
    mk(134, "Data Engineering", "Level 134: Mini-Proyek Data Engineering: ETL Penjualan dengan Pandas",
        intro("Data Engineering", "menjalankan ETL kecil: extract data, transform dengan groupby, lalu load ke CSV.") + " Data <code>DATA</code> ada di kotak contoh.<br><br><b>Contoh &amp; output:</b> kode di bawah mencetak tabel dengan kolom <code>total</code>.<br><br><b>Kesalahan umum:</b> loop baris dengan <code>iterrows</code> padahal ada operasi vektor; lupa <code>index=False</code>/<code>reset_index</code> saat menyimpan; membandingkan kolom dengan <code>and</code> alih-alih <code>&amp;</code>.",
        'import pandas as pd\n\nDATA = {\n    "produk": ["A", "B", "A", "C", "B"],\n    "qty": [2, 1, 3, 5, 4],\n    "harga": [1000, 2500, 1000, 400, 2500],\n}\ndf = pd.DataFrame(DATA)\ndf["total"] = df["qty"] * df["harga"]\nprint(df)',
        [
            { t: "Extract & Transform: buat DataFrame df dari DATA (lihat contoh), tambah kolom 'total' = qty * harga, lalu cetak df['total'].sum().", h: "df['total'] = df['qty'] * df['harga']", v: [/DataFrame\s*\(/, /\[\s*['"]total['"]\s*\]\s*=/, /\.sum\s*\(/], e: /^\s*19500\s*$/, c: "assert 'total' in df.columns and int(df['total'].sum()) == 19500" },
            { t: "Dengan df dari soal sebelumnya, hitung total per produk: ringkasan = df.groupby('produk')['total'].sum(), lalu cetak ringkasan.", h: "groupby('produk')['total'].sum()", v: [/groupby\s*\(/], e: /A\s+5000[\s\S]*B\s+12500[\s\S]*C\s+2000/, c: "assert ringkasan.to_dict() == {'A': 5000, 'B': 12500, 'C': 2000}" },
            { t: "Filter: dari ringkasan, ambil nama produk dengan total > 3000 sebagai list terurut di variabel 'laris', lalu cetak laris.", h: "ringkasan[ringkasan > 3000].index.tolist()", v: [/>\s*3000/], e: /\['A', 'B'\]/, c: "assert laris == ['A', 'B']" },
            { t: "Cari produk terlaris (total terbesar) dari ringkasan dengan idxmax() (atau sort_values/nlargest) dan cetak namanya (B).", h: "ringkasan.idxmax()", v: [/(idxmax|sort_values|nlargest|max)\s*\(/], e: /^\s*B\s*$/ },
            { t: "Load: simpan ringkasan ke '/tmp/ringkasan.csv' dengan to_csv, baca kembali dengan pd.read_csv, lalu cetak .shape (harus (3, 2)).", h: "pd.read_csv('/tmp/ringkasan.csv').shape", v: [/to_csv\s*\(/, /read_csv\s*\(/, /\.shape/], e: /\(3,\s*2\)/, c: "import os\nassert os.path.exists('/tmp/ringkasan.csv')" }
        ]);

    /* ----- 135: Web API ----- */
    mk(135, "Web API", "Level 135: Mini-Proyek Web API: Mini REST dengan Router & SQLite",
        intro("Web API", "membangun inti sebuah REST API tanpa framework: router, path parameter, database SQLite, dan POST dengan validasi.") + "<br><br><b>Contoh &amp; output:</b> kode di bawah mencetak <code>(200, 'pong')</code>.<br><br><b>Kesalahan umum:</b> menyusun SQL dengan f-string (rawan SQL injection; pakai placeholder <code>?</code>); lupa <code>commit()</code> setelah INSERT; status code yang salah (404 vs 422).",
        'def tangani(metode, path):\n    if metode == "GET" and path == "/ping":\n        return (200, "pong")\n    return (404, "tidak ditemukan")\n\nprint(tangani("GET", "/ping"))  # (200, \'pong\')',
        [
            { t: "Buat tangani(metode, path) yang mengembalikan tuple (status, body): GET '/ping' -> (200, 'pong'); selain itu (404, 'tidak ditemukan'). Cetak tangani('GET', '/ping') dan tangani('GET', '/x').", h: "if metode == 'GET' and path == '/ping':", v: [/def\s+tangani\s*\(\s*metode\s*,\s*path/], e: LINES(["(200, 'pong')", "(404, 'tidak ditemukan')"]), c: "assert tangani('GET', '/ping') == (200, 'pong') and tangani('POST', '/ping') == (404, 'tidak ditemukan')" },
            { t: "Tambahkan rute GET '/users/<id>' (id angka) dengan re.fullmatch/re.match sehingga tangani('GET', '/users/5') mengembalikan (200, {'id': 5}). Cetak hasil itu (rute /ping tetap berfungsi).", h: "re.fullmatch(r'/users/(\\d+)', path)", v: [/re\.(fullmatch|match)\s*\(/], e: /\(200, \{'id': 5\}\)/, c: "assert tangani('GET', '/users/12') == (200, {'id': 12}) and tangani('GET', '/ping') == (200, 'pong')" },
            { t: "Buat koneksi sqlite3 ':memory:', tabel users(id INTEGER PRIMARY KEY, nama TEXT), isi (1, 'Ani'), lalu buat ambil_user(id) yang mengembalikan {'id': ..., 'nama': ...} atau None. Cetak ambil_user(1) dan ambil_user(99).", h: "cur.execute('SELECT ... WHERE id = ?', (id,)).fetchone()", v: [/sqlite3\.connect\s*\(/, /def\s+ambil_user\s*\(/], e: LINES(["{'id': 1, 'nama': 'Ani'}", "None"]), c: "assert ambil_user(1) == {'id': 1, 'nama': 'Ani'} and ambil_user(2) is None" },
            { t: "Hubungkan keduanya: GET '/users/<id>' di tangani() memakai ambil_user; ada -> (200, user), tidak ada -> (404, 'user tidak ada'). Cetak tangani('GET', '/users/1') dan tangani('GET', '/users/99').", h: "Satu program berisi database, ambil_user, dan tangani.", v: [/def\s+tangani/, /def\s+ambil_user/, /sqlite3\.connect/], e: LINES(["(200, {'id': 1, 'nama': 'Ani'})", "(404, 'user tidak ada')"]), c: "assert tangani('GET', '/users/1') == (200, {'id': 1, 'nama': 'Ani'}) and tangani('GET', '/users/99') == (404, 'user tidak ada')" },
            { t: "POST '/users': ubah tangani menjadi tangani(metode, path, body=None). tangani('POST', '/users', {'nama': 'Budi'}) menyisipkan user baru (id otomatis) dan mengembalikan (201, {'id': 2, 'nama': 'Budi'}); tanpa 'nama' -> (422, 'nama wajib'). Cetak kedua kasus (kasus kedua pakai {}).", h: "INSERT INTO users (nama) VALUES (?) lalu cur.lastrowid.", v: [/def\s+tangani\s*\([^)]*body/, /INSERT\s+INTO/i], e: LINES(["(201, {'id': 2, 'nama': 'Budi'})", "(422, 'nama wajib')"]), c: "assert tangani('POST', '/users', {'nama': 'Cici'})[0] == 201 and tangani('POST', '/users', {}) == (422, 'nama wajib')" }
        ]);

    /* ----- 136: AI Engineering ----- */
    mk(136, "AI Engineering", "Level 136: Mini-Proyek AI Engineering: Mesin Pencari Semantik Mini",
        intro("AI Engineering", "membangun mesin pencari mini: tokenisasi, kosakata, embedding bag-of-words, cosine similarity, class MesinCari, dan evaluasi akurasi.") + "<br><br><b>Contoh &amp; output:</b> kode di bawah mencetak <code>['kucing', 'makan', 'ikan']</code>.<br><br><b>Kesalahan umum:</b> lupa mengubah ke huruf kecil sebelum menghitung; membagi dengan nol pada vektor kosong; menguji mesin pada data yang sama dengan data pembuatnya tanpa menyadarinya.",
        'import re\n\ndef tokenisasi(teks):\n    return re.findall(r"\\w+", teks.lower())\n\nprint(tokenisasi("Kucing Makan, Ikan!"))  # [\'kucing\', \'makan\', \'ikan\']',
        [
            { t: "Buat tokenisasi(teks) yang mengubah ke huruf kecil dan mengambil kata dengan re.findall. Cetak tokenisasi('Kucing Makan, Ikan!').", h: "re.findall(r'\\w+', teks.lower())", v: [/def\s+tokenisasi\s*\(/, /re\.findall\s*\(/], e: /\['kucing', 'makan', 'ikan'\]/, c: "assert tokenisasi('A b-C') == ['a', 'b', 'c']" },
            { t: "Buat buat_vokab(dokumen) yang mengembalikan list kata unik terurut dari semua dokumen (pakai tokenisasi). Cetak buat_vokab(['kucing makan', 'anjing makan']).", h: "sorted(set(...))", v: [/def\s+buat_vokab\s*\(/, /def\s+tokenisasi\s*\(/], e: /\['anjing', 'kucing', 'makan'\]/, c: "assert buat_vokab(['b a', 'c a']) == ['a', 'b', 'c']" },
            { t: "Buat embed(teks, vokab) (jumlah kemunculan tiap kata vokab, memakai tokenisasi) dan cosine(a, b). Cetak embed('kucing makan makan', ['anjing', 'kucing', 'makan']) lalu round(cosine([1, 1], [1, 0]), 3) (dua baris).", h: "cosine([1, 1], [1, 0]) = 0.707", v: [/def\s+embed\s*\(/, /def\s+cosine\s*\(/], e: LINES(["[0, 1, 2]", "0.707"]), c: "assert embed('anjing', ['anjing', 'kucing']) == [1, 0] and abs(cosine([1, 2], [2, 4]) - 1) < 1e-9" },
            { t: "Buat class MesinCari: __init__(self, dokumen) menyimpan dokumen dan kosakata; cari(kueri, k=1) mengembalikan list k dokumen paling mirip. Cetak MesinCari(['kucing makan ikan', 'anjing tidur', 'kucing tidur']).cari('kucing makan').", h: "Urutkan dokumen berdasarkan cosine terhadap embed kueri.", v: [/class\s+MesinCari/, /def\s+cari\s*\(\s*self\s*,\s*kueri/], e: /\['kucing makan ikan'\]/, c: "m = MesinCari(['a b', 'c d', 'a c'])\nassert m.cari('a b') == ['a b'] and len(m.cari('a', k=2)) == 2" },
            { t: "Evaluasi: buat akurasi(mesin, uji) (uji = list tuple (kueri, dokumen_benar); akurasi = fraksi kueri yang hasil teratasnya benar). Cetak akurasi(MesinCari(['kucing makan ikan', 'anjing tidur', 'kucing tidur']), [('kucing makan', 'kucing makan ikan'), ('anjing', 'anjing tidur')]) (1.0).", h: "mesin.cari(kueri)[0] == benar", v: [/def\s+akurasi\s*\(/, /class\s+MesinCari/], e: LINES(["1.0"]), c: C(["class _M:", "    def cari(s, q, k=1):", "        return ['x'] if q == 'ok' else ['y']", "assert akurasi(_M(), [('ok', 'x'), ('no', 'x')]) == 0.5"]) }
        ]);

    /* ----- 137: DevOps (dinilai dari teks) ----- */
    mk(137, "DevOps", "Level 137: Mini-Proyek DevOps: Paket Deploy Aplikasi Python",
        intro("DevOps", "menulis paket deploy lengkap: Dockerfile, Docker Compose, GitHub Actions, manifes Kubernetes, dan urutan rilis.") + " Soal berupa berkas konfigurasi, jadi dinilai dari isi teks (tidak dijalankan).<br><br><b>Contoh &amp; konfigurasi:</b> awal sebuah Dockerfile ada di kotak contoh.<br><br><b>Kesalahan umum:</b> menyalin seluruh kode sebelum <code>requirements.txt</code> (cache layer tidak efektif); jalan sebagai root; mengunci semua layanan di satu container; lupa mengurutkan langkah rilis (tes dulu, baru build).",
        '# Dockerfile minimal (belum memakai cache dependensi)\nFROM python:3.11-slim\nWORKDIR /srv\nCOPY app.py .\nCMD ["python", "app.py"]',
        [
            { t: "Tulis Dockerfile: FROM python:3.12-slim, WORKDIR /app, COPY requirements.txt, RUN pip install --no-cache-dir -r requirements.txt, COPY seluruh kode, dan CMD.", h: "Salin requirements.txt dulu agar layer dependensi di-cache.", v: [/FROM\s+python:3\.\d+(\.\d+)?-slim/i, /WORKDIR\s+\/app/i, /COPY\s+requirements\.txt/i, /RUN\s+pip\s+install\s+--no-cache-dir\s+-r\s+requirements\.txt/i, /CMD\s*\[/i], x: true },
            { t: "Tulis docker-compose.yml dengan layanan web (build, ports) yang depends_on layanan redis (image redis:alpine).", h: "services: web: ... redis: image: redis:alpine", v: [/services\s*:/, /\bweb\s*:/, /\bredis\s*:/, /build\s*:/, /ports\s*:/, /depends_on\s*:/, /redis:\S+/], x: true },
            { t: "Tulis workflow GitHub Actions: berjalan saat push, di ubuntu-latest, memakai actions/checkout, actions/setup-python, dan menjalankan pytest.", h: "on: [push]; jobs: test: runs-on: ubuntu-latest; steps: ...", v: [/on\s*:/, /runs-on\s*:\s*ubuntu-latest/, /actions\/checkout@v\d/, /actions\/setup-python@v\d/, /pytest/], x: true },
            { t: "Tulis manifes Kubernetes: Deployment dengan replicas: 2 dan containerPort, serta Service untuk mengeksposnya (dua dokumen).", h: "kind: Deployment ... --- kind: Service", v: [/kind\s*:\s*Deployment/, /replicas\s*:\s*2/, /kind\s*:\s*Service/, /containerPort\s*:\s*\d+/], x: true },
            { t: "Tulis urutan perintah rilis: jalankan pytest, docker build, kubectl apply -f, lalu kubectl rollout status (satu per baris, urut).", h: "Tes dulu, baru build dan deploy.", v: [/pytest[\s\S]*docker\s+build[\s\S]*kubectl\s+apply\s+-f[\s\S]*kubectl\s+rollout\s+status/i], x: true }
        ]);

    /* ----- 138: Security & Performance ----- */
    mk(138, "Security & Performance", "Level 138: Mini-Proyek Security & Performance: Penyimpanan Password Aman",
        intro("Security & Performance", "membangun penyimpanan password aman dan membuktikan pilihan struktur data cepat, hanya dengan pustaka standar.") + "<br><br><b>Contoh &amp; output:</b> kode di bawah mencetak <code>64</code> (hash SHA-256 heksadesimal).<br><br><b>Kesalahan umum:</b> menyimpan password mentah atau hash cepat tanpa salt; membandingkan hash dengan <code>==</code> (rentan timing attack, pakai <code>hmac.compare_digest</code>); memakai <code>random</code> alih-alih <code>secrets</code> untuk token.",
        'import hashlib\n\nhasil = hashlib.pbkdf2_hmac("sha256", b"rahasia", b"garam", 100_000)\nprint(len(hasil.hex()))  # 64',
        [
            { t: "Buat hash_password(password, salt) dengan hashlib.pbkdf2_hmac('sha256', password.encode(), salt, 100_000) dan kembalikan .hex(). Cetak panjang hasil hash_password('rahasia', b'garam').", h: "salt berupa bytes.", v: [/pbkdf2_hmac\s*\(/, /def\s+hash_password\s*\(/], e: /^\s*64\s*$/, c: "import hashlib\nassert hash_password('a', b'x') == hashlib.pbkdf2_hmac('sha256', b'a', b'x', 100000).hex()" },
            { t: "Buat verifikasi(password, salt, hash_tersimpan) memakai hmac.compare_digest (sertakan hash_password). Cetak verifikasi benar lalu salah (True, False) untuk password 'rahasia' dan 'salah'.", h: "hmac.compare_digest(a, b)", v: [/compare_digest\s*\(/, /def\s+verifikasi\s*\(/, /def\s+hash_password/], e: LINES(["True", "False"]), c: "h = hash_password('p', b's')\nassert verifikasi('p', b's', h) is True and verifikasi('q', b's', h) is False" },
            { t: "Buat buat_token() yang mengembalikan secrets.token_hex(16). Cetak len(buat_token()) lalu buat_token() != buat_token() (32, True).", h: "import secrets", v: [/secrets\.token_hex\s*\(\s*16\s*\)/, /def\s+buat_token\s*\(/], e: LINES(["32", "True"]), c: "assert len(buat_token()) == 32" },
            { t: "Buat aman_html(teks) memakai html.escape untuk mencegah XSS. Cetak aman_html('<script>alert(1)</script>').", h: "import html; html.escape(teks)", v: [/html\.escape\s*\(/, /def\s+aman_html\s*\(/], e: /&lt;script&gt;alert\(1\)&lt;\/script&gt;/, c: "assert aman_html('<b>') == '&lt;b&gt;'" },
            { t: "Dengan daftar = list(range(20000)) dan himpunan = set(daftar), ukur 200 kali '19999 in daftar' vs '19999 in himpunan' dengan timeit. Cetak 'set lebih cepat' bila waktu set lebih kecil.", h: "timeit.timeit('19999 in daftar', globals=globals(), number=200)", v: [/timeit/, /\bset\s*\(/, /\blist\s*\(\s*range/], e: /set lebih cepat/ }
        ]);

    /* ----- 139: Enterprise Mastery (sebelum capstone) ----- */
    mk(139, "Enterprise Mastery", "Level 139: Mini-Proyek Enterprise: Event Bus & Circuit Breaker",
        intro("Enterprise Mastery", "membangun dua pola ketahanan sistem terdistribusi dalam Python murni: event bus dan circuit breaker.") + "<br><br><b>Contoh &amp; output:</b> kode di bawah mencetak <code>dunia</code>.<br><br><b>Kesalahan umum:</b> satu handler yang error menghentikan semua handler lain; circuit breaker yang tidak pernah menutup kembali; lupa mengembalikan hasil fungsi di <code>call()</code>.",
        'class EventBus:\n    def __init__(self):\n        self.handlers = {}\n    def subscribe(self, event, handler):\n        self.handlers.setdefault(event, []).append(handler)\n    def publish(self, event, data):\n        for h in self.handlers.get(event, []):\n            h(data)\n\nbus = EventBus()\nbus.subscribe("halo", print)\nbus.publish("halo", "dunia")  # dunia',
        [
            { t: "Buat class EventBus dengan subscribe(event, handler) dan publish(event, data) yang memanggil semua handler event itu dengan data. Subscribe 'halo' ke print lalu publish('halo', 'dunia').", h: "Simpan handler dalam dict event -> list.", v: [/class\s+EventBus/, /def\s+subscribe/, /def\s+publish/], e: /dunia/, c: "b = EventBus()\ngot = []\nb.subscribe('e', got.append)\nb.publish('e', 1)\nb.publish('x', 2)\nassert got == [1]" },
            { t: "Ubah publish agar mengembalikan jumlah handler yang berhasil dipanggil (0 bila event tak dikenal). Cetak publish('x', 1) pada bus kosong, lalu hasil publish setelah 2 subscriber didaftarkan (dua baris: 0 dan 2).", h: "Hitung dengan variabel penghitung.", v: [/class\s+EventBus/, /\breturn\b/], e: LINES(["0", "2"]), c: "b = EventBus()\nassert b.publish('a', 1) == 0\nb.subscribe('a', lambda d: None)\nb.subscribe('a', lambda d: None)\nassert b.publish('a', 1) == 2" },
            { t: "Isolasi error: bila satu handler melempar exception, handler lain tetap dipanggil dan publish hanya menghitung yang sukses. Daftarkan 1 handler yang error dan 1 normal, lalu cetak hasil publish (1).", h: "try/except di dalam loop handler.", v: [/\btry\s*:/, /\bexcept\b/, /class\s+EventBus/], e: /^\s*1\s*$/, c: C(["b = EventBus()", "got = []", "def bad(d):", "    raise RuntimeError('x')", "b.subscribe('e', bad)", "b.subscribe('e', got.append)", "assert b.publish('e', 5) == 1 and got == [5]"]) },
            { t: "Buat class CircuitBreaker(max_gagal=2) dengan call(fungsi, *args) yang mengembalikan hasil fungsi. Bila gagal beruntun mencapai max_gagal, circuit 'open': call langsung raise RuntimeError('circuit open') tanpa memanggil fungsi. Uji 3 panggilan gagal berturut-turut dan cetak pesan error ketiga.", h: "Hitung kegagalan beruntun; periksa sebelum memanggil fungsi.", v: [/class\s+CircuitBreaker/, /def\s+call/, /raise\s+RuntimeError/], e: /circuit open/, c: C(["cb = CircuitBreaker(max_gagal=2)", "n = [0]", "def gagal():", "    n[0] += 1", "    raise ValueError('x')", "for _ in range(2):", "    try:", "        cb.call(gagal)", "    except ValueError:", "        pass", "try:", "    cb.call(gagal)", "    ok = False", "except RuntimeError as e:", "    ok = 'circuit open' in str(e)", "assert ok and n[0] == 2"]) },
            { t: "Tambahkan reset() yang menutup circuit, dan panggilan sukses mereset hitungan gagal. Uji: gagal 1x, sukses 1x, gagal 1x lagi (circuit tetap tertutup) lalu cetak 'tertutup'.", h: "Set hitungan gagal ke 0 setelah panggilan sukses.", v: [/def\s+reset/, /class\s+CircuitBreaker/], e: /tertutup/, c: C(["cb = CircuitBreaker(max_gagal=2)", "def gagal():", "    raise ValueError('x')", "def coba():", "    try:", "        cb.call(gagal)", "    except ValueError:", "        pass", "coba()", "assert cb.call(lambda: 7) == 7", "coba()", "assert cb.call(lambda: 8) == 8", "coba()", "coba()", "try:", "    cb.call(lambda: 1)", "    ok = False", "except RuntimeError:", "    ok = True", "assert ok", "cb.reset()", "assert cb.call(lambda: 9) == 9"]) }
        ]);
})();

/* ---------- SOAL LEVEL 1, 2, 3, 6 DISUSUN ULANG (kesulitan bertingkat: mudah -> sulit) ----------
   Soal lama memakai 10 variasi template yang sama. Soal baru naik bertahap dan memakai tes perilaku. */
(function () {
    function V(rs) { rs = [].concat(rs); return function (c) { return rs.every(function (r) { return r.test(c); }); }; }
    function norm(l) { return l.replace(/\s+/g, " ").trim().toLowerCase(); }
    function LINES(arr) {
        const want = arr.map(function (x) { return norm(String(x)); });
        return { want: arr.map(String), test: function (s) {
            const got = String(s).replace(/\r/g, "").split("\n").map(norm).filter(function (l) { return l !== ""; });
            return got.length === want.length && got.every(function (x, i) { return x === want[i]; });
        } };
    }
    function L(id) { return levelsData.find(function (l) { return l.id === id; }); }
    function set(id, rows) {
        L(id).tasks = rows.map(function (r) {
            return { task: r.t, hint: r.h, validate: V(r.v || [/[\s\S]/]), expect: r.e || null, check: r.c || null };
        });
    }
    const FPFX = /(^|[^A-Za-z0-9_])f["']/;
    const T = function (name, tp) { return "assert type(" + name + ").__name__ == '" + tp + "', '" + name + " harus bertipe " + tp + "'"; };

    set(1, [
        { t: "Buat variabel 'nama' berisi string 'Ani', lalu cetak nilainya.", h: "String diapit tanda kutip: nama = \"Ani\".", v: [/\bnama\s*=\s*["']/], e: /Ani/, c: "assert nama == 'Ani'" },
        { t: "Buat 'umur' (integer 17) dan 'tinggi' (float 1.65), lalu cetak keduanya.", h: "Integer tanpa titik, float memakai titik desimal.", v: [/\bumur\s*=/, /\btinggi\s*=/], e: /17[\s\S]*1\.65/, c: T("umur", "int") + "\n" + T("tinggi", "float") },
        { t: "Buat variabel boolean 'lulus' bernilai True, lalu cetak tipenya dengan type().", h: "print(type(lulus))", v: [/\btype\s*\(/, /\blulus\s*=\s*True\b/], e: /bool/, c: "assert lulus is True" },
        { t: "Buat a = 10, b = 2.5, c = '10'. Cetak type() dari masing-masing (tiga baris).", h: "Tiga pemanggilan print(type(...)).", v: [/\btype\s*\(/], e: /int[\s\S]*float[\s\S]*str/, c: "assert a == 10 and b == 2.5 and c == '10'" },
        { t: "Buat x = 3 dan y = 7, lalu tukar isinya tanpa variabel ketiga (x, y = y, x). Cetak x dan y.", h: "Python mendukung penugasan tuple.", v: [/\bx\s*,\s*y\s*=\s*y\s*,\s*x\b/], e: /7\D+3/, c: "assert x == 7 and y == 3" },
        { t: "Isi tiga variabel p, q, r dengan nilai 0 sekaligus dalam satu baris (p = q = r = 0), lalu cetak ketiganya.", h: "Penugasan berantai.", v: [/\bp\s*=\s*q\s*=\s*r\s*=\s*0\b/], e: /^\s*0\s+0\s+0\s*$/, c: "assert p == q == r == 0" },
        { t: "Buat harga = 15000 dan jumlah = 3, hitung total = harga * jumlah, lalu cetak total.", h: "Variabel dapat dipakai dalam ekspresi.", v: [/\btotal\s*=\s*harga\s*\*\s*jumlah\b/], e: /45000/, c: "assert total == 45000" },
        { t: "Buat x = 5 lalu cetak type(x); isi ulang x = 'lima' lalu cetak type(x) lagi (dynamic typing).", h: "Variabel boleh berganti tipe.", v: [/\bx\s*=\s*\d+[\s\S]*\bx\s*=\s*["']/, /\btype\s*\(/], e: /int[\s\S]*str/ },
        { t: "Buat angka_teks = '42', ubah menjadi integer di variabel 'angka' dengan int(), lalu cetak angka + 8.", h: "int('42') mengubah string menjadi bilangan.", v: [/\bint\s*\(/], e: /(^|\D)50(\D|$)/, c: "assert angka == 42 and type(angka).__name__ == 'int'" },
        { t: "Buat nama (str), umur (int), tinggi (float), mahasiswa (bool). Cetak keempatnya dalam satu print() dipisah ' | ' lewat argumen sep.", h: "print(a, b, c, d, sep=\" | \")", v: [/sep\s*=/], e: /.+ \| .+ \| .+ \| .+/, c: T("nama", "str") + "\n" + T("umur", "int") + "\n" + T("tinggi", "float") + "\n" + T("mahasiswa", "bool") }
    ]);

    set(2, [
        { t: "Cetak hasil 7 + 5.", h: "print(7 + 5)", v: [/7\s*\+\s*5/], e: /^\s*12\s*$/ },
        { t: "Cetak hasil 17 // 5 lalu 17 % 5 (dua baris).", h: "// pembagian bulat, % sisa bagi.", v: [/\/\//, /%/], e: LINES(["3", "2"]) },
        { t: "Cetak 2 pangkat 10 memakai operator **.", h: "2 ** 10", v: [/\*\*/], e: /^\s*1024\s*$/ },
        { t: "Buat panjang = 8 dan lebar = 5, hitung keliling = 2 * (panjang + lebar), lalu cetak keliling.", h: "Kurung mengatur urutan operasi.", v: [/\bkeliling\s*=/], e: /^\s*26\s*$/, c: "assert keliling == 26" },
        { t: "Cetak 2 + 3 * 4 lalu (2 + 3) * 4 (dua baris) untuk melihat pengaruh urutan operasi.", h: "Perkalian didahulukan dari penjumlahan.", v: [/\(\s*2\s*\+\s*3\s*\)/], e: LINES(["14", "20"]) },
        { t: "Hitung rata-rata nilai 80, 85, 90 dan simpan di 'rata'. Cetak hasilnya (operator / selalu menghasilkan float).", h: "(80 + 85 + 90) / 3", v: [/\brata\s*=/, /\//], e: /^\s*85\.0\s*$/, c: "assert rata == 85.0" },
        { t: "Harga 200000 diskon 15%. Hitung harga_akhir = harga - harga * 0.15 lalu cetak.", h: "Simpan harga = 200000 terlebih dulu.", v: [/\bharga_akhir\s*=/, /\*/], e: /170000/, c: "assert abs(harga_akhir - 170000) < 1e-6" },
        { t: "Ubah 3725 detik menjadi jam, menit, detik memakai // dan % (variabel jam, menit, detik). Cetak ketiganya: 1 2 5.", h: "jam = detik_total // 3600; sisa = detik_total % 3600", v: [/\/\//, /%/], e: /(^|\D)1\D+2\D+5(\D|$)/, c: "assert jam == 1 and menit == 2 and detik == 5" },
        { t: "Buat angka = 4729. Cetak digit satuannya (angka % 10) lalu angka tanpa digit satuan (angka // 10) pada dua baris.", h: "Hasilnya 9 dan 472.", v: [/%/, /\/\//], e: LINES(["9", "472"]), c: "assert angka == 4729" },
        { t: "Bunga majemuk: modal 1000000, bunga 5% per tahun, 3 tahun. Hitung total = modal * (1 + 0.05) ** 3, bulatkan 2 desimal dengan round(), lalu cetak.", h: "round(nilai, 2)", v: [/\bround\s*\(/, /\*\*/], e: /1157625(\.0+)?/ }
    ]);

    set(3, [
        { t: "Buat nama = 'Rian' lalu cetak 'Halo, Rian!' memakai f-string.", h: "f\"Halo, {nama}!\"", v: [FPFX], e: /Halo, Rian!/, c: "assert nama == 'Rian'" },
        { t: "Buat buah = 'apel' dan jumlah = 5, cetak: Saya membeli 5 apel (f-string).", h: "Dua variabel dalam satu f-string.", v: [FPFX], e: /Saya membeli 5 apel/, c: "assert buah == 'apel' and jumlah == 5" },
        { t: "Buat a = 7 dan b = 3, lalu cetak dengan f-string: 7 + 3 = 10 (hasil dihitung di dalam kurung kurawal).", h: "f\"{a} + {b} = {a + b}\"", v: [FPFX], e: /7 \+ 3 = 10/ },
        { t: "Buat kata = 'Python' dan cetak dengan f-string: Python punya 6 huruf (angka 6 dari len()).", h: "{len(kata)} di dalam f-string.", v: [FPFX], e: /Python punya 6 huruf/, c: "assert kata == 'Python'" },
        { t: "Cetak 'ha' diulang 3 kali lalu tanda '!' (hahaha!) memakai operator * dan +.", h: "'ha' * 3 + '!'", v: [/\*/, /\+/], e: /^\s*hahaha!\s*$/ },
        { t: "Buat nama = 'Sari' dan umur = 17. Cetak dua baris dengan SATU f-string dan \\n: 'Nama: Sari' lalu 'Umur: 17'.", h: "\\n di dalam string pindah baris.", v: [FPFX], e: LINES(["Nama: Sari", "Umur: 17"]), c: "assert nama == 'Sari' and umur == 17" },
        { t: "Buat x = 5 lalu cetak teks persis '{x} = 5' dengan f-string (kurung kurawal literal ditulis ganda: {{ dan }}).", h: "f\"{{x}} = {x}\"", v: [FPFX], e: /\{x\} = 5/, c: "assert x == 5" },
        { t: "Buat nama = 'budi santoso' lalu cetak dengan huruf awal tiap kata kapital memakai .title().", h: "nama.title()", v: [/\.title\s*\(/], e: /Budi Santoso/, c: "assert nama == 'budi santoso'" },
        { t: "Buat depan = 'Budi' dan belakang = 'Santoso'. Cetak inisialnya dengan indeks [0] dan f-string: B.S.", h: "f\"{depan[0]}.{belakang[0]}.\"", v: [FPFX], e: /B\.S\./, c: "assert depan == 'Budi' and belakang == 'Santoso'" },
        { t: "Buat item = 'Kopi', harga = 18000, jumlah = 2. Cetak struk dengan f-string, total dihitung di dalamnya: Kopi x2 = 36000", h: "{harga * jumlah}", v: [FPFX], e: /Kopi x2 = 36000/, c: "assert item == 'Kopi' and harga == 18000 and jumlah == 2" }
    ]);

    set(6, [
        { t: "Cetak angka 1 sampai 5 (satu per baris) dengan perulangan for dan range.", h: "range(1, 6)", v: [/\bfor\b/, /range\s*\(/], e: LINES(["1", "2", "3", "4", "5"]) },
        { t: "Cetak bilangan genap 2 sampai 10 dengan range yang memakai step (tiga argumen).", h: "range(2, 11, 2)", v: [/range\s*\([^)]*,[^)]*,[^)]*\)/], e: LINES(["2", "4", "6", "8", "10"]) },
        { t: "Hitung mundur 5 sampai 1 dengan for, lalu cetak 'Selesai!'.", h: "range(5, 0, -1)", v: [/\bfor\b/, /range\s*\(/], e: LINES(["5", "4", "3", "2", "1", "Selesai!"]) },
        { t: "Jumlahkan angka 1 sampai 100 dengan for dan variabel penampung 'total'. Cetak total.", h: "total = 0, lalu total += i.", v: [/\bfor\b/, /\btotal\s*(\+)?=/], e: /5050/, c: "assert total == 5050" },
        { t: "Cetak tabel perkalian 7 dari 1 sampai 5 dengan format '7 x 1 = 7'.", h: "f\"7 x {i} = {7 * i}\"", v: [/\bfor\b/], e: LINES(["7 x 1 = 7", "7 x 2 = 14", "7 x 3 = 21", "7 x 4 = 28", "7 x 5 = 35"]) },
        { t: "Hitung banyaknya huruf vokal (a, i, u, e, o) pada 'pemrograman' dengan for dan if. Simpan di 'jumlah_vokal' dan cetak.", h: "if huruf in 'aiueo': jumlah_vokal += 1", v: [/\bfor\b/, /\bif\b/, /\bjumlah_vokal\b/], e: /(^|\D)4(\D|$)/, c: "assert jumlah_vokal == 4" },
        { t: "Hitung faktorial 6 (1*2*3*4*5*6) dengan for. Simpan di 'hasil' dan cetak.", h: "hasil = 1, lalu hasil *= i.", v: [/\bfor\b/, /\bhasil\b/, /\*/], e: /720/, c: "assert hasil == 720" },
        { t: "Jumlahkan hanya bilangan genap dari 1 sampai 20 dengan for + if. Simpan di 'jumlah' dan cetak.", h: "if i % 2 == 0:", v: [/\bfor\b/, /\bif\b/, /%/], e: /110/, c: "assert jumlah == 110" },
        { t: "FizzBuzz 1 sampai 15: kelipatan 3 cetak 'Fizz', kelipatan 5 'Buzz', kelipatan keduanya 'FizzBuzz', lainnya angkanya (satu per baris).", h: "Periksa kelipatan 15 lebih dulu.", v: [/\bfor\b/, /%/], e: LINES(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]) },
        { t: "Cetak 8 suku pertama deret Fibonacci (0 1 1 2 3 5 8 13), satu per baris, dengan for dan penugasan a, b = b, a + b.", h: "Mulai a = 0, b = 1.", v: [/\bfor\b/, /\ba\s*,\s*b\s*=\s*b\s*,\s*a\s*\+\s*b\b/], e: LINES(["0", "1", "1", "2", "3", "5", "8", "13"]) }
    ]);
})();

/* ---------- AUDIT VALIDATOR LANJUTAN (soal yang dulu lolos dengan kode asal-asalan) ----------
   Memakai tes perilaku (check) atau regex struktur yang lebih spesifik. */
(function () {
    function L(id) { return levelsData.find(function (l) { return l.id === id; }); }
    function val(id, idx, rs) { rs = [].concat(rs); L(id).tasks[idx].validate = function (c) { return rs.every(function (r) { return r.test(c); }); }; }
    function chk(id, idx, code) { L(id).tasks[idx].check = code; }
    function all(id, fn) { L(id).tasks.forEach(function (t, i) { fn(t, i); }); }
    function C(lines) { return lines.join("\n"); }
    const NEST3 = /^def\s[\s\S]*?\n( +)def\s[\s\S]*?\n\1 +def\s/m;

    // L8 Fungsi: wajib benar-benar membuat fungsi bernama sesuai soal dan benar hasilnya
    [["luas_persegi_panjang(5, 4) == 20"], ["tambah_dua_angka(2, 3) == 5"], ["keliling_persegi(6) == 24"], ["kuadrat(7) == 49"],
     ["isinstance(sapa_pengguna('Rafi'), str) and 'Rafi' in sapa_pengguna('Rafi')"], ["kurangi(20, 8) == 12"],
     ["konversi_jam_ke_menit(3) == 180"], ["abs(luas_lingkaran(7) - 153.86) < 0.01"],
     ["cek_genap(4) is True and cek_genap(3) is False"], ["hitung_total(5000, 3) == 15000"]
    ].forEach(function (p, i) { chk(8, i, "assert " + p[0]); });

    // L11 Dictionary (tiga soal pertama)
    chk(11, 0, "assert any(isinstance(v, dict) and {'merk', 'tipe', 'tahun'} <= set(v) for v in list(globals().values()))");
    chk(11, 1, "assert any(isinstance(v, dict) and {'nama', 'umur', 'hobi', 'pekerjaan'} <= set(v) for v in list(globals().values()))");
    chk(11, 2, "assert any(isinstance(v, dict) and {'nama', 'harga', 'stok'} <= set(v) and v['stok'] == 50 for v in list(globals().values()))");

    val(16, 7, [/\[[^\]]*\bfor\s+\w+\s+in\s+[^\]]*\bfor\s+\w+\s+in\b[^\]]*\]/]);
    val(33, 7, [/\bclass\s+\w+[\s\S]*\n[ \t]+\w+\s*:\s*(int|str|float|bool|list|dict)\b/]);

    // L30 Dekorator berargumen: tiga fungsi bersarang + dipasang dengan @nama(...)
    all(30, function (t, i) {
        if (i === 9) return;
        const base = t.validate;
        t.validate = function (c) { return NEST3.test(c) && /\breturn\b/.test(c) && base(c); };
    });
    chk(30, 0, C(["calls = []", "@ulang(3)", "def _t():", "    calls.append(1)", "_t()", "assert len(calls) == 3, 'ulang(3) harus menjalankan fungsi 3 kali'"]));

    // L24 generator expression
    [1, 6].forEach(function (i) { val(24, i, [/\(\s*[^\n()]+\s+for\s+\w+\s+in\s+[^\n]+\)/]); });

    // L40 / L44 / L48 / dst.
    val(40, 8, [/def\s+\w+\s*\([^)]*:[^)]*\)\s*->\s*\w+/, /("""|''')[\s\S]*?\1/]);
    val(44, 8, [/def\s+\w+[^\n]*\n(?:.*\n)*?[ \t]+def\s+\w+/, /(\*\*kwargs|\*args)/]);
    val(44, 9, [/("""|''')[\s\S]*?\1/, /\b__init__\b/, /\bclass\b/]);
    val(48, 4, [/def\s+\w+[\s\S]*?\n[ \t]+def\s+\w+/, /__name__/, /\*args/, /\bprint\s*\(/]);
    val(66, 8, [/\[\s*['"][\d-]+['"]\s*:\s*['"][\d-]+['"]\s*\]/]);

    // L62 ETL
    val(62, 0, [/def\s+extract\s*\(/, /\breturn\b/]);
    val(62, 1, [/def\s+transform\s*\(/, /\.strip\s*\(/, /\.upper\s*\(/]);
    val(62, 2, [/def\s+load\s*\(/, /(open\s*\(|print\s*\(|\.append|\.to_csv|\.write|json|sqlite|\.execute)/]);
    val(62, 3, [/def\s+run_etl\s*\(/, /extract\s*\(/, /transform\s*\(/, /load\s*\(/]);
    val(62, 8, [/def\s+test_\w+/, /\bassert\b/]);

    val(67, 7, [/class\s+\w*Pipeline\w*/, /def\s+process_item\s*\(\s*self/]);
    val(57, 4, [/def\s+\w+[\s\S]*?\n[ \t]+def\s+\w+/, /(\.get\s*\(|redis)/, /(\.set\s*\(|setex)/]);
    val(53, 6, [/def\s+get_current_user/, /decode\s*\(/]);
    val(54, 4, [/class\s+\w*(Manager|Connection)\w*/, /(connect|accept)\s*\(/, /(append|add)\b/]);
    val(54, 5, [/def\s+broadcast/, /\bfor\b/, /send/]);
    val(58, 4, [/httpx\.(get|post|request|AsyncClient|Client)/]);
    val(77, 3, [/class\s+(\w+)\s*\(\s*nn\.Module\s*\)[\s\S]*=\s*\1\s*\(/, /\bprint\s*\(/]);
    val(91, 3, [/tracemalloc/, /statistics\s*\(/, /\[\s*:\s*5\s*\]|range\s*\(\s*5\s*\)|\bhead\b/, /\bprint\b/]);
    L(100).tasks[9].expect = { test: function (s) {
        const ln = String(s).split("\n").map(function (x) { return x.trim(); }).filter(Boolean);
        return ln.length === 5 && ln.every(function (x) { return /[A-Za-z]{2,}/.test(x); });
    } };
    val(100, 9, [/\bfor\b/, /\bprint\b/, /\[[^\]\n]+,[^\]\n]+,[^\]\n]+,[^\]\n]+,[^\]\n]+\]/]);

    // L36 Metaclass: periksa perilaku metaclass sungguhan, bukan sekadar kata kunci
    const MF = ["_M = [v for v in list(globals().values()) if isinstance(v, type) and issubclass(v, type) and v is not type and v.__module__ == '__main__']",
                "assert _M, 'Belum ada metaclass (class turunan type)'", "_m = _M[0]"];
    const META_ONLY = C(MF.concat(["assert any(n in vars(_m) for n in ('__new__', '__init__', '__call__')), 'Metaclass belum mengatur pembuatan class'"]));
    L(36).tasks[0].task = "Buat metaclass turunan 'type' yang menolak (raise TypeError) setiap class baru yang tidak punya atribut wajib 'versi'.";
    chk(36, 0, C(MF.concat(["try:", "    _m('Tanpa', (), {})", "    _ok = False", "except Exception:", "    _ok = True", "assert _ok, 'Class tanpa atribut versi harus ditolak'", "_m('Dengan', (), {'versi': 1})"])));
    chk(36, 1, "assert any(isinstance(v, type) and type(v) is not type and issubclass(type(v), type) and v.__module__ == '__main__' for v in list(globals().values())), 'Belum ada class yang memakai metaclass kustom'");
    val(36, 2, [/\btype\s*\(\s*[^,()]+,\s*\(/]);
    chk(36, 3, C(MF.concat(["C_ = _m('X', (), {'halo': lambda self: 1})", "assert hasattr(C_, 'HALO') and not hasattr(C_, 'halo'), 'Nama method harus menjadi huruf kapital'"])));
    chk(36, 4, C(MF.concat(["import io, contextlib", "_b = io.StringIO()", "with contextlib.redirect_stdout(_b):", "    _m('Baru', (), {'versi': 1, 'id': 1})", "assert _b.getvalue().strip() != '', 'Metaclass harus mencetak log saat class dibuat'"])));
    val(36, 5, [/\bclass\s+\w+/, /def\s+\w+\s*\(\s*\w+/, /\breturn\s+[\w\[\]'"]+\s*\(/]);
    chk(36, 6, META_ONLY); chk(36, 7, META_ONLY); chk(36, 9, META_ONLY);
    val(36, 8, [/\btype\s*\(\s*[^,()]+,\s*\([^)]*\)\s*,\s*\{/]);

    // Pola OOP lain: pastikan class yang diminta benar-benar ada dan punya anggota yang dimaksud
    const HAS = function (m) { return "assert any(isinstance(v, type) and '" + m + "' in vars(v) for v in list(globals().values())), 'Belum ada class yang mendefinisikan " + m + "'"; };
    all(17, function (t, i) { if (!t.check) t.check = "assert any(isinstance(v, type) and hasattr(v, '__enter__') and hasattr(v, '__exit__') for v in list(globals().values()) if getattr(v, '__module__', '') == '__main__'), 'Belum ada class dengan __enter__ dan __exit__'"; });
    ["__str__", "__repr__", "__len__", "__add__", "__eq__", "__str__", "__add__", "__len__", "__str__", "__len__"].forEach(function (m, i) { chk(18, i, HAS(m)); });
    all(19, function (t) { t.check = "import dataclasses\nassert any(isinstance(v, type) and dataclasses.is_dataclass(v) for v in list(globals().values())), 'Belum ada class @dataclass'"; });
    all(20, function (t, i) {
        const needSetter = [2, 5, 6, 9].indexOf(i) !== -1;
        t.check = "assert any(isinstance(v, type) and any(isinstance(a, property)" + (needSetter ? " and a.fset is not None" : "") + " for a in vars(v).values()) for v in list(globals().values())), 'Belum ada property" + (needSetter ? " dengan setter" : "") + "'";
    });
    all(21, function (t, i) {
        const m = [2, 6].indexOf(i) !== -1 ? "__get__" : ([0, 1].indexOf(i) !== -1 ? "__get__" : "__set__");
        t.check = "assert any(isinstance(v, type) and '" + m + "' in vars(v) for v in list(globals().values())), 'Belum ada class descriptor dengan " + m + "'" + (i < 2 ? "\nassert any(isinstance(v, type) and '__set__' in vars(v) for v in list(globals().values()))" : "");
    });
    [0, 2, 3, 4, 5, 7, 8, 9].forEach(function (i) { chk(24, i, "import inspect\nassert any(inspect.isgeneratorfunction(v) for v in list(globals().values())), 'Belum ada fungsi generator (yield)'"); });
    all(38, function (t, i) {
        t.check = i === 7 ? "assert any(isinstance(v, type) and '__iter__' in vars(v) for v in list(globals().values()))"
            : "assert any(isinstance(v, type) and '__iter__' in vars(v) and '__next__' in vars(v) for v in list(globals().values())), 'Belum ada class dengan __iter__ dan __next__'";
    });

    // Level 1, 2, 3, 6 disusun ulang: EXPECT/CHECKS lama (kunci "id-indeks") dihapus pada tahap normalisasi.
})();

/* ---------- AUDIT PRASYARAT: istilah yang dipakai soal harus sudah diajarkan di materi level itu / sebelumnya ---------- */
(function () {
    const L = function (id) { return levelsData.find(function (l) { return l.id === id; }); };
    function add(id, html) { L(id).desc += "<br><br><b>Alat bantu yang dipakai di soal:</b> " + html; }

    add(1, "<code>type(x)</code> menampilkan tipe data suatu nilai; <code>int(\"42\")</code> mengubah teks angka menjadi integer; <code>print(a, b, sep=\" | \")</code> mengatur pemisah antar nilai yang dicetak; <code>x, y = y, x</code> menukar isi dua variabel; <code>p = q = 0</code> mengisi beberapa variabel sekaligus. Konversi tipe dibahas lebih dalam di Level input() &amp; Konversi Tipe Data.");
    add(2, "<code>+=</code>, <code>-=</code>, <code>*=</code> (<code>x += 1</code> sama dengan <code>x = x + 1</code>) dan <code>round(angka, n)</code> untuk membulatkan ke n desimal. Urutan operasi: kurung, lalu <code>**</code>, lalu <code>* / // %</code>, terakhir <code>+ -</code>.");
    add(3, "<code>len(teks)</code> menghitung jumlah karakter; <code>teks[0]</code> mengambil karakter pertama (indeks mulai dari 0, dibahas penuh di Level String Method &amp; Slicing); <code>'ha' * 3</code> mengulang teks dan <code>+</code> menyambung teks; <code>\\n</code> pindah baris; <code>{{</code> dan <code>}}</code> mencetak kurung kurawal apa adanya; <code>.title()</code> membuat huruf awal tiap kata menjadi kapital.");
    add(9, "<code>len(daftar)</code> jumlah elemen, <code>max()</code>/<code>min()</code> nilai terbesar/terkecil, <code>daftar[-1]</code> elemen terakhir, <code>list1 + list2</code> menggabungkan dua list, dan <code>x in daftar</code> memeriksa keberadaan elemen.");
    add(10, "<code>set(\"PROGRAM\")</code> mengubah urutan menjadi set; operasi set: <code>a | b</code> (union), <code>a &amp; b</code> (irisan), <code>a - b</code> (selisih); <code>len()</code> dan <code>in</code> bekerja seperti pada list.");
    add(11, "<code>.items()</code> mengembalikan pasangan (kunci, nilai) untuk diulang dengan <code>for k, v in d.items():</code>; <code>del d[\"kunci\"]</code> menghapus pasangan; <code>len(d)</code> jumlah pasangan.");
    add(15, "<code>else</code> pada try dijalankan bila tidak ada error; <code>except Exception as e</code> menyimpan objek error ke <code>e</code> sehingga pesannya bisa dicetak; <code>raise ValueError(\"pesan\")</code> melempar error sendiri.");
    add(19, "nilai default pada atribut (<code>port: int = 8000</code>) dan <code>__post_init__(self)</code>, method yang dijalankan otomatis setelah <code>__init__</code> hasil dataclass (cocok untuk validasi).");
    add(22, "fungsi adalah objek di Python, jadi fungsi boleh dikembalikan dari fungsi lain dan dipanggil kemudian. Itu fondasi closure dan juga decorator (level berikutnya).");
    add(23, "<code>with open(\"file.txt\", \"w\") as f:</code> membuka file lalu menutupnya otomatis saat blok selesai; <code>with</code> dibahas lebih dalam di Level Custom Context Managers.");
    add(26, "<code>r'...'</code> (raw string) agar tanda <code>\\</code> pada pola tidak ditafsirkan sebagai escape string; contoh <code>r'\\d+'</code>.");
    add(41, "<b>ABC</b> (<code>from abc import ABC, abstractmethod</code>) adalah class dasar yang tidak boleh diinstansiasi langsung dan memaksa subclass mengimplementasikan method <code>@abstractmethod</code>; dipakai untuk Abstract Factory dan interface pada level-level berikutnya.");
    add(46, "<b>Repository</b> adalah antarmuka penyimpanan/pengambilan entity (<code>simpan()</code>, <code>cari()</code>) yang menyembunyikan detail database; pola ini dibahas penuh di level berikutnya. <b>Use Case</b> adalah class yang mengatur satu alur bisnis dengan memanggil entity dan repository.");
    add(53, "<code>Depends(fungsi)</code> milik FastAPI menyuntikkan hasil sebuah fungsi (mis. pengguna aktif) ke endpoint; <code>OAuth2PasswordBearer</code> mengambil token dari header <code>Authorization: Bearer ...</code>.");
    add(97, "<b>Message broker</b> (RabbitMQ/Kafka) adalah perantara yang meneruskan pesan antar layanan secara asinkron (dibahas penuh di level Event-Driven berikutnya). <b>Circuit Breaker</b> memutus pemanggilan ke layanan yang terus gagal agar kegagalan tidak menjalar; <b>service discovery</b> adalah registri tempat layanan menemukan alamat layanan lain.");
    add(115, "<code>time.perf_counter()</code> mengembalikan waktu berpresisi tinggi (detik); selisih dua pemanggilan = durasi eksekusi.");
    add(124, "<code>shutil.rmtree(folder, ignore_errors=True)</code> menghapus folder beserta isinya (modul <code>shutil</code>, bawaan Python); <code>sorted()</code> mengurutkan hasil <code>glob()</code>.");
    add(125, "<code>.gitignore</code> adalah berkas teks berisi pola file/folder yang tidak boleh dilacak Git (satu pola per baris); Git sendiri dibahas di Level Git &amp; Terminal Dasar.");

    // L15 soal 8 memakai open() padahal File I/O baru dibahas di Level 23 -> ganti dengan error yang sudah dikenal
    const t15 = L(15).tasks[7];
    t15.task = "Buat try-except untuk menangani AttributeError dengan memanggil method yang tidak ada pada string, misalnya 'abc'.tambah().";
    t15.hint = "Gunakan except AttributeError:";
    t15.validate = function (c) { return /\btry\b/.test(c) && /except\s+AttributeError/.test(c); };

    // L124 soal 7: petunjuk memakai list comprehension (sudah dibahas sebelum level ini)
    L(124).tasks[6].hint = "sorted([p.name for p in folder.glob('*.txt')])";
})();

/* ---------- AUDIT PRASYARAT TAHAP 2: soal yang diganti + materi yang dilengkapi ---------- */
(function () {
    const L = function (id) { return levelsData.find(function (l) { return l.id === id; }); };
    function add(id, html) {
        const l = L(id);
        l.desc += (l.desc.indexOf("Alat bantu yang dipakai di soal") === -1 ? "<br><br><b>Alat bantu yang dipakai di soal:</b> " : "<br>") + html;
    }
    function has(rs) { rs = [].concat(rs); return function (c) { return rs.every(function (r) { return r.test(c); }); }; }
    function swap(id, idx, o) {
        const t = L(id).tasks[idx];
        t.task = o.task; t.hint = o.hint;
        t.validate = has(o.v);
        if (o.text) t.forceText = true;
    }

    /* ===== A. Soal yang diganti ===== */
    swap(41, 8, { task: "Buat Builder pattern untuk menyusun pesan email bertahap (penerima, subjek, isi) dengan method chaining, lalu panggil .build() dan cetak hasilnya.",
        hint: "Setiap method (mis. kepada, subjek, isi) menyimpan nilai lalu mengembalikan self; .build() mengembalikan dictionary atau string akhir.",
        v: [/class\s+\w+/, /return\s+self/, /\.build\s*\(/] });
    swap(42, 3, { task: "Buat Adapter yang mengubah teks 'a=1;b=2' menjadi dictionary {'a': '1', 'b': '2'} agar cocok dengan sistem yang hanya menerima dictionary.",
        hint: "Di dalam method adapter: teks.split(';') lalu split('=') pada tiap bagian.",
        v: [/class\s+\w+/, /\.split\s*\(/] });
    swap(43, 1, { task: "Buat Strategy pattern untuk memilih algoritma pengurutan (naik atau turun) saat runtime, lalu uji keduanya pada [3, 1, 2].",
        hint: "Strategi naik memakai sorted(data), strategi turun memakai sorted(data, reverse=True); Context menerima strategi lewat konstruktor.",
        v: [/class\s+\w+/, /sorted\s*\(|\.sort\s*\(/] });
    swap(44, 6, { task: "Buat container IoC sederhana: simpan class plugin di dictionary (nama -> class), lalu buat dan jalankan plugin berdasarkan nama.",
        hint: "registry = {'email': EmailPlugin}; plugin = registry[nama]()",
        v: [/class\s+\w+/, /\{\s*['"]\w+['"]\s*:/] });
    swap(37, 9, { task: "Gunakan cProfile.Profile() dan pstats.Stats(...).sort_stats('cumulative') untuk menampilkan fungsi paling lambat dari sebuah fungsi buatanmu.",
        hint: "p = cProfile.Profile(); p.enable(); fungsi(); p.disable(); pstats.Stats(p).sort_stats('cumulative').print_stats(5)",
        v: [/cProfile/, /pstats/, /sort_stats\s*\(/, /def\s+\w+/] });
    swap(39, 2, { task: "Tulis baris kode yang memasang breakpoint debugger dengan pdb.set_trace() (atau breakpoint()). Soal ini dinilai dari teks karena debugger interaktif tidak bisa dijalankan di browser.",
        hint: "import pdb lalu pdb.set_trace() di baris tempat program harus berhenti.",
        v: [/pdb\.set_trace\s*\(\s*\)|\bbreakpoint\s*\(\s*\)/], text: true });
    swap(39, 7, { task: "Tulis empat perintah dasar pdb beserta artinya, satu per baris: n (next), c (continue), p variabel (print), q (quit).",
        hint: "Contoh: n = next (jalankan baris berikutnya).",
        v: [/\bnext\b/i, /\bcontinue\b/i, /\bquit\b/i, /\bp\s+\w+/], text: true });

    /* ===== B. Materi yang dilengkapi ===== */
    add(12, "<code>{x:.1%}</code> menampilkan persen (0.758 menjadi 75.8%); <code>{n:04d}</code> mengisi angka nol di depan sampai 4 digit; <code>{n:x}</code> heksadesimal; <code>{n:b}</code> biner.");
    add(104, "<code>bool(x)</code> mengubah nilai menjadi True/False: angka 0, string kosong, dan list kosong menjadi False, selain itu True.");
    add(9, "<code>sum(daftar)</code> menjumlahkan semua elemen angka.");
    add(107, "<code>math.pi</code> (konstanta), <code>math.floor(x)</code> membulatkan ke bawah, <code>math.ceil(x)</code> ke atas, <code>random.randint(a, b)</code> bilangan bulat acak (kedua batas ikut).");
    add(125, "<code>deactivate</code> keluar dari venv, <code>pip list</code> menampilkan paket terpasang, <code>pip uninstall nama</code> menghapus paket.");
    add(10, "<code>s.add(x)</code> menambah elemen, <code>s.remove(x)</code> menghapus (error bila tidak ada), <code>s.discard(x)</code> menghapus tanpa error.");
    add(11, "<code>d[\"kunci\"] = nilai</code> menambah pasangan baru, atau mengubah nilainya bila kunci sudah ada.");
    add(16, "<b>Set comprehension</b> memakai kurung kurawal tanpa pasangan: <code>{x % 3 for x in range(1, 10)}</code>. <b>Dua for</b> dalam satu comprehension: <code>[a + str(b) for a in huruf for b in angka]</code> (for kedua adalah loop dalam).");
    add(121, "tuple satu elemen wajib memakai koma: <code>(4,)</code>; <code>t + (4,)</code> menghasilkan tuple baru.");
    add(111, "<code>Counter(x).most_common(n)</code> mengembalikan n pasangan (elemen, jumlah) terbanyak; atribut tanggal <code>d.year</code>, <code>d.month</code>, <code>d.day</code>; <code>d.strftime(\"%d/%m/%Y\")</code> memformat tanggal (%d hari, %m bulan, %Y tahun).");
    add(115, "<b>Pencarian biner</b> pada list terurut: <code>low = 0</code>, <code>high = len(daftar) - 1</code>; selama <code>low &lt;= high</code> hitung <code>mid = (low + high) // 2</code>; jika <code>daftar[mid]</code> sama dengan target, selesai; jika lebih kecil, <code>low = mid + 1</code>; jika lebih besar, <code>high = mid - 1</code>.");
    add(116, "tanda <code>@</code> di atas <code>def</code> disebut dekorator, yaitu penambah perilaku pada fungsi (dibahas penuh di level Decorator Dasar); untuk saat ini cukup ditulis persis seperti contoh, mis. <code>@pytest.mark.parametrize(\"a,b\", [(1, 2), (3, 4)])</code>.");
    add(26, "<code>\\w</code> huruf/angka/underscore, <code>\\b</code> batas kata, <code>{n}</code> tepat n kali, <code>+</code> satu atau lebih, <code>*</code> nol atau lebih, <code>[A-Z]</code> rentang karakter, <code>\\.</code> titik literal, <code>( )</code> kelompok yang diambil; <code>re.search(pola, teks)</code> mengembalikan kecocokan pertama (atau None), <code>re.split(pola, teks)</code> memecah teks berdasarkan pola.");
    add(23, "<code>f.read()</code> membaca seluruh isi, <code>f.readline()</code> satu baris, <code>f.readlines()</code> list semua baris, <code>f.write(teks)</code> menulis string, <code>f.writelines(list_teks)</code> menulis banyak string.");
    add(124, "<code>folder.mkdir(parents=True, exist_ok=True)</code> membuat folder (beserta induknya, tanpa error bila sudah ada); <code>p.is_dir()</code>; ukuran file: <code>p.stat().st_size</code> atau <code>os.path.getsize(path)</code>.");
    add(101, "<b>Class variable</b> ditulis langsung di bawah <code>class</code>, di luar method, dan dimiliki bersama oleh semua objek (<code>Hewan.kingdom</code>); atribut biasa dibuat dengan <code>self.x = ...</code> dan milik tiap objek.");
    add(34, "<code>json.dumps(obj)</code> objek menjadi string JSON, <code>json.loads(teks)</code> kebalikannya; <code>json.dump(obj, f)</code> dan <code>json.load(f)</code> bekerja dengan file; <code>pickle.dumps(obj)</code> menghasilkan bytes, <code>pickle.loads(data)</code> mengembalikannya; teks JSON rusak melempar <code>json.JSONDecodeError</code>.");
    add(117, "<code>httpx.get(url, params={...})</code> mengirim GET dengan query string, <code>httpx.post(url, json={...})</code> mengirim body JSON; objek respons punya <code>.status_code</code>, <code>.json()</code>, dan <code>.raise_for_status()</code> (melempar error bila status 4xx/5xx).");
    add(13, "membongkar koleksi saat memanggil fungsi: <code>f(*daftar)</code> mengirim elemen list sebagai argumen posisi, <code>f(**kamus)</code> mengirim pasangan dictionary sebagai argumen kata kunci.");
    add(33, "<code>Callable[[int], int]</code> (fungsi dengan parameter int, hasil int), <code>Any</code> (tipe apa saja), <code>int | None</code> (sama dengan Optional[int]), dan <code>list[int]</code> (huruf kecil, tanpa import, Python 3.9+).");
    add(28, "<code>isinstance(objek, Kelas)</code> memeriksa apakah objek berasal dari class itu atau turunannya; <code>issubclass(Anak, Induk)</code> memeriksa hubungan antar class.");
    add(18, "<code>__repr__</code> adalah representasi objek untuk programmer (tampil di console dan list), sedangkan <code>__str__</code> untuk pengguna (dipakai <code>print</code>); <code>__eq__(self, other)</code> menentukan hasil operator <code>==</code> antar objek.");
    add(102, "karena fungsi adalah objek, ia boleh diberi atribut: <code>wrapper.jumlah = 0</code> lalu <code>wrapper.jumlah += 1</code> di dalam wrapper.");
    add(19, "<code>dataclasses.asdict(obj)</code> mengubah objek dataclass menjadi dictionary; <code>@dataclass(frozen=True)</code> membuat objek tidak bisa diubah (immutable).");
    add(25, "<code>asyncio.run(main())</code> menjalankan coroutine <code>main</code> dari kode biasa dan menunggunya selesai.");
    add(93, "<code>asyncio.gather(c1(), c2())</code> menjalankan beberapa coroutine bersamaan dan mengembalikan list hasil; <code>except* Tipe as eg</code> menangkap ExceptionGroup, daftar error ada di <code>eg.exceptions</code>.");
    add(29, "<code>id(x)</code> alamat identitas objek; <code>del x</code> menghapus nama (referensi); <code>__del__(self)</code> dipanggil saat objek dihancurkan; modul <code>gc</code>: <code>gc.enable()</code>, <code>gc.isenabled()</code>, <code>gc.collect()</code>, <code>gc.get_threshold()</code>.");
    add(114, "<code>queue.Queue()</code> adalah antrean aman untuk dipakai antar thread: <code>q.put(x)</code> memasukkan, <code>q.get()</code> mengambil (menunggu bila kosong).");
    add(31, "<code>executor.submit(f, arg)</code> menjadwalkan satu tugas dan mengembalikan objek Future; <code>future.result()</code> mengambil hasilnya; <code>as_completed(daftar_future)</code> memberi future sesuai urutan selesai; <code>executor.map(f, iterable)</code> memetakan fungsi ke banyak data.");
    add(32, "API-nya sama dengan ThreadPoolExecutor (<code>submit</code>, <code>result</code>, <code>map</code>, <code>max_workers</code>), tetapi fungsi yang dikirim harus bisa di-pickle: didefinisikan di level atas modul, bukan lambda atau fungsi bersarang.");
    add(35, "socket hanya mengirim <b>bytes</b>: <code>\"teks\".encode(\"utf-8\")</code> mengubah string menjadi bytes untuk <code>.send()</code>, dan <code>data.decode(\"utf-8\")</code> mengubah hasil <code>.recv()</code> kembali menjadi string.");
    add(36, "<code>type(nama, (basis,), {atribut})</code> membuat class secara dinamis; <code>class Contoh(metaclass=Meta):</code> memakai metaclass kustom untuk class itu.");
    add(48, "<code>ast.walk(tree)</code> mengiterasi semua node; <code>ast.NodeVisitor</code> (method <code>visit_NamaNode</code>, panggil <code>self.generic_visit(node)</code>) membaca pohon; <code>ast.NodeTransformer</code> mengubahnya (method mengembalikan node baru); setelah transformasi panggil <code>ast.fix_missing_locations(tree)</code>, lalu <code>exec(compile(tree, \"&lt;ast&gt;\", \"exec\"))</code>; <code>inspect.getsource(fungsi)</code> membaca kode sumber fungsi.");
    add(44, "untuk container yang menyelesaikan dependensi otomatis, <code>inspect.signature(__init__).parameters</code> memberi daftar parameter beserta <code>.annotation</code>-nya (tipe yang diminta).");
    add(112, "<code>np.arange(1, 7)</code> deret angka, <code>arr.reshape(2, 3)</code> mengubah bentuk, <code>arr.shape</code> bentuk array (tuple), <code>arr.mean()</code> dan <code>arr.sum()</code>; pada DataFrame, <code>df[\"kolom\"].mean()</code> rata-rata satu kolom.");
    add(126, "<code>fig, axes = plt.subplots(1, 2)</code> membuat dua panel berdampingan (<code>axes[0]</code>, <code>axes[1]</code>); <code>ax.hist(data, bins=5)</code> membagi data ke 5 kelompok.");
    add(59, "<code>transform(\"mean\")</code> hasil agregasi per kelompok dengan panjang sama seperti data asli; <code>rank()</code> peringkat; <code>shift(1)</code> menggeser nilai satu baris; <code>cumsum()</code> total berjalan; <code>rolling(3).mean()</code> rata-rata bergerak; <code>pd.merge(a, b, on=\"kunci\")</code> menggabungkan dua tabel.");
    add(60, "<code>df.eval(\"c = a + b\")</code> dan <code>df.query(\"a &gt; 500\")</code> mengevaluasi ekspresi/filter dalam bentuk string; <code>astype(\"category\")</code> menghemat memori kolom berulang; <code>pd.to_numeric(kolom, downcast=\"integer\")</code> memperkecil tipe angka; <code>pd.concat([df, baru], axis=1)</code> menambah banyak kolom sekaligus; <code>pd.read_csv(file, chunksize=n)</code> membaca per potongan; <code>df.memory_usage(deep=True)</code> mengukur memori.");
    add(66, "<code>s.interpolate()</code> mengisi nilai hilang; <code>idx.year</code>/<code>.month</code>/<code>.day_name()</code> (lewat <code>.dt</code> pada kolom); <code>s.pct_change()</code> persentase perubahan; <code>s.ewm(span=5).mean()</code> rata-rata bergerak eksponensial; irisan tanggal <code>s[\"2026-01-01\":\"2026-01-05\"]</code>; uji stasioneritas <code>adfuller(series)</code> dari <code>statsmodels.tsa.stattools</code>.");
    add(65, "<code>t1 &gt;&gt; t2</code> berarti t1 jalan dulu baru t2; <code>default_args</code> adalah pengaturan bawaan semua task (retries, retry_delay); <b>XCom</b> mengirim data kecil antar task (<code>ti.xcom_push</code>, <code>ti.xcom_pull</code>); <b>Sensor</b> adalah task yang menunggu suatu kondisi, mis. file muncul (<code>FileSensor</code>).");
    add(68, "<code>df.corr()</code> menghitung matriks korelasi antar kolom numerik; <code>sns.heatmap(matriks, annot=True)</code> menampilkannya sebagai peta warna berangka.");
    add(49, "<code>from fastapi import Path, Query</code>: <code>Path(gt=0)</code> membatasi path parameter, <code>Query(max_length=50)</code> membatasi query parameter; <code>@app.post(\"/x\", status_code=201)</code> mengatur kode respons; <code>uvicorn.run(app)</code> menjalankan server.");
    add(50, "<code>Field(default=0, ge=0)</code> memberi default dan batas; <code>obj.model_dump()</code> menjadi dictionary, <code>obj.model_dump_json()</code> menjadi string JSON; <code>pydantic.ValidationError</code> dilempar saat data tidak valid; model boleh bersarang (atribut bertipe model lain).");
    add(113, "<code>cur.executemany(sql, daftar_tuple)</code> menjalankan satu perintah untuk banyak baris; <code>cur.fetchone()</code> mengambil satu baris (atau None); <code>cur.lastrowid</code> id baris yang baru disisipkan.");
    add(51, "<code>create_engine(\"sqlite:///test.db\")</code> membuat koneksi; <code>sessionmaker(bind=engine)</code> pembuat sesi; <code>Base.metadata.create_all(engine)</code> membuat tabel; <code>select(User)</code> membangun query (dijalankan lewat <code>session.scalars(...)</code>); <code>session.query(User).filter_by(username=\"x\").first()</code> filter sederhana gaya lama.");
    add(89, "kunci asimetris punya pasangan: <b>kunci privat</b> menandatangani data (<code>private_key.sign(...)</code>), <b>kunci publik</b> memverifikasi tanda tangan itu (<code>public_key.verify(...)</code>, error bila palsu); kunci RSA dibuat dengan <code>rsa.generate_private_key(public_exponent=65537, key_size=2048)</code> dan <code>.public_key()</code>.");
    add(90, "<b>XXE</b>: parser XML yang membaca file/URL luar atas perintah dokumen jahat; <b>Mass Assignment</b>: klien menyelundupkan field tak terduga (mis. is_admin) ke model; <b>CSP</b>: header yang membatasi dari mana skrip boleh dimuat; cookie aman memakai <code>HttpOnly</code> (tak bisa dibaca JavaScript), <code>Secure</code> (hanya HTTPS), <code>SameSite</code> (mengurangi CSRF).");
    add(76, "<code>a @ b</code> adalah operator perkalian matriks (juga di NumPy), sama dengan <code>torch.matmul(a, b)</code>.");
    add(127, "<code>max(daftar, key=lambda d: skor(d))</code> mengembalikan elemen dengan skor tertinggi.");
    add(71, "operator <code>|</code> pada LangChain menyambung komponen menjadi rantai: <code>chain = prompt | llm | parser</code> berarti keluaran komponen kiri menjadi masukan komponen kanan; rantai dijalankan dengan <code>.invoke({...})</code>.");
    add(80, "<b>User non-root</b>: <code>RUN useradd -m appuser</code> lalu <code>USER appuser</code> agar proses tidak berjalan sebagai root; <b>.dockerignore</b> adalah berkas berisi pola file/folder yang tidak disalin ke image (mis. <code>venv/</code>, <code>__pycache__/</code>).");
    add(84, "<b>Scrape</b>: Prometheus mengambil endpoint <code>/metrics</code> secara berkala sesuai <code>prometheus.yml</code> (<code>scrape_configs</code> &rarr; <code>static_configs</code> &rarr; <code>targets</code>); <b>Grafana</b> menampilkan dashboard dengan Prometheus sebagai data source; <b>alerting rule</b> berisi <code>alert:</code> dan <code>expr:</code> (kondisi PromQL, mis. <code>rate(...) &gt; 5</code>).");
    add(86, "<b>IAM role/policy</b> menentukan layanan AWS apa yang boleh diakses fungsi (<code>Effect</code>, <code>Action</code>, <code>Resource</code>); <b>API Gateway</b> mengubah permintaan HTTP menjadi event untuk Lambda; <b>CloudWatch Logs</b> menampung semua <code>print()</code>/logging fungsi.");
    add(85, "<b>EC2</b> adalah server virtual AWS; <b>Security Group</b> adalah firewall virtual yang mengatur port yang boleh masuk; <b>stack</b> Pulumi adalah satu instansi lingkungan proyek (mis. dev atau prod) dengan state sendiri.");
    add(94, "<b>Prasyarat:</b> level ini mengasumsikan kamu mengenal dasar bahasa C (fungsi, pointer, <code>#include</code>); soalnya berupa kode C dan dinilai dari isi teks.");
    add(99, "fixture dengan <code>yield</code>: kode sebelum <code>yield</code> adalah setup, nilai setelah <code>yield</code> dipakai tes, dan kode sesudahnya (teardown) otomatis jalan setelah tes selesai.");
    add(39, "perintah dasar pdb saat program berhenti di breakpoint: <code>n</code> (next, baris berikutnya), <code>s</code> (step, masuk ke fungsi), <code>c</code> (continue, lanjut sampai breakpoint berikutnya), <code>p variabel</code> (print nilai), <code>l</code> (list, tampilkan kode sekitar), <code>q</code> (quit, keluar).");
    add(37, "<code>pstats.Stats(profil).sort_stats(\"cumulative\").print_stats(5)</code> menampilkan 5 fungsi yang paling memakan waktu; <code>cProfile.Profile()</code> dipakai dengan <code>.enable()</code> dan <code>.disable()</code> di sekitar kode yang diukur.");
})();

/* ---------- URUTAN BELAJAR (fondasi dulu, lanjutan kemudian) ----------
   `id` = identitas tetap (dipakai untuk progress tersimpan, JANGAN diubah), `no` = nomor tampilan.
   Untuk mengubah urutan cukup edit daftar PHASES di bawah; `no` dihitung otomatis.
   Aturan prasyarat yang dijaga: if/elif sebelum input(); list (id 9) sebelum string method, break/continue;
   import (id 107) sebelum pemakaian modul; try/except (id 15) sebelum soal yang memakainya;
   Pydantic (50) sebelum Settings (79); PySpark (61) sebelum Delta Lake (64); NumPy/Pandas dasar (112) sebelum Pandas lanjutan (59);
   kriptografi (89) sebelum autentikasi (53); level rangkuman (40) di akhir fase Architecture;
   comprehension (16) setelah dict (11); closure (22) & decorator (102) sebelum @property (20) & @dataclass (19);
   dunder (18) sebelum context manager (17); HTTP (117) sebelum FastAPI & Scrapy; Matplotlib (126) sebelum time series (66);
   embedding (127) dan LangChain (71) sebelum HF/Ollama (78); S3 (87) & Lambda (86) sebelum IaC (85).
   Di konsol browser: odysseyLevelMap() menampilkan tabel nomor tampilan <-> id. */
(function () {
    const PHASES = [
        ["Beginner", [1, 2, 3, 12, 103, 4, 5, 104, 6, 7, 9, 105, 106, 120, 128]],
        ["Intermediate", [8, 110, 107, 125, 10, 11, 16, 15, 121, 108, 122, 109, 111, 123, 115, 27, 116, 26, 23, 124, 101, 34, 117, 13, 14, 33, 129]],
        ["Advanced", [28, 18, 17, 22, 102, 30, 20, 19, 130]],
        ["Expert", [38, 24, 21, 25, 93, 29, 131]],
        ["Professional", [114, 31, 32, 35, 95, 37, 39, 36, 48, 132]],
        ["Architecture", [41, 42, 43, 44, 45, 46, 47, 40, 133]],
        ["Data Engineering", [112, 126, 59, 60, 66, 62, 65, 63, 61, 64, 67, 68, 134]],
        ["Web API", [49, 50, 79, 113, 51, 52, 57, 56, 89, 53, 90, 54, 55, 58, 135]],
        ["AI Engineering", [119, 69, 76, 77, 70, 127, 71, 78, 72, 73, 74, 75, 136]],
        ["DevOps", [118, 80, 81, 82, 83, 84, 87, 86, 85, 88, 137]],
        ["Security & Performance", [96, 91, 92, 94, 138]],
        ["Enterprise Mastery", [97, 98, 99, 139, 100]]
    ];
    const byId = new Map(levelsData.map(function (l) { return [l.id, l]; }));
    const ordered = [];
    PHASES.forEach(function (ph) {
        ph[1].forEach(function (id) {
            const l = byId.get(id);
            if (!l) throw new Error("Level " + id + " dobel/hilang di PHASES");
            l.category = ph[0];
            ordered.push(l);
            byId.delete(id);
        });
    });
    if (byId.size) throw new Error("Level belum dimasukkan ke PHASES: " + Array.from(byId.keys()).join(","));
    ordered.forEach(function (l, i) {
        l.no = i + 1;
        l.title = "Level " + l.no + ": " + l.title.replace(/^Level\s+\d+\s*:\s*/i, "");
    });
    levelsData.splice(0, levelsData.length, ...ordered);
    window.odysseyLevelMap = function () {
        const rows = levelsData.map(function (l) { return { no: l.no, id: l.id, fase: l.category, judul: l.title }; });
        if (console.table) console.table(rows);
        return rows;
    };
})();


/* ---------- MATERI BEGINNER DITULIS ULANG (struktur seragam, istilah soal dijelaskan) ---------- */
(function () {
    "use strict";
    const sec = function (t) { return '<span class="sec">' + t + "</span>"; };
    const bl = function (a) { return a.map(function (x) { return "• " + x; }).join("<br>"); };
    function rewrite(id, o) {
        const l = levelsData.find(function (x) { return x.id === id; });
        if (!l) throw new Error("curriculum-beginner: level id " + id + " tidak ditemukan");
        l.desc = sec("Konsep") + o.konsep +
            sec("Poin penting") + bl(o.poin) +
            sec("Baca contoh baris demi baris") + bl(o.baris) +
            sec("Contoh &amp; output") + o.output +
            sec("Kesalahan umum") + bl(o.salah) +
            "<br><br><b>Alat bantu yang dipakai di soal:</b> " + o.alat.join("<br>");
        l.example = o.example;
    }

    rewrite(1, {
        konsep: "Variabel adalah <b>nama</b> untuk menyimpan sebuah nilai di memori komputer. Bayangkan label di sebuah kotak: <code>umur = 20</code> berarti \"kotak bernama umur berisi 20\". Tanda <code>=</code> di Python artinya <b>menyimpan</b> (penugasan), bukan \"sama dengan\".",
        poin: [
            "Aturan nama: huruf kecil, boleh angka (tidak di awal) dan garis bawah <code>_</code>, tanpa spasi. Contoh baik: <code>nama_depan</code>. Huruf besar-kecil dianggap beda (<code>Umur</code> tidak sama dengan <code>umur</code>).",
            "<b>int</b> = bilangan bulat (<code>25</code>, <code>-5</code>). <b>float</b> = bilangan desimal, pemisahnya titik (<code>3.14</code>). <b>str</b> = teks yang diapit kutip (<code>\"Rafi\"</code>). <b>bool</b> = hanya <code>True</code> atau <code>False</code> (huruf pertama kapital).",
            "Python menebak tipe dari nilainya (<i>dynamic typing</i>), jadi variabel boleh diisi ulang dengan tipe lain."
        ],
        baris: [
            "<code># ...</code> : komentar. Python mengabaikan tulisan setelah <code>#</code>; gunanya catatan untuk manusia.",
            "<code>nama = \"Budi\"</code> : membuat variabel <code>nama</code> berisi teks <code>Budi</code>.",
            "<code>umur = 20</code> : variabel berisi bilangan bulat. <code>tinggi = 1.75</code> : bilangan desimal. <code>mahasiswa = True</code> : nilai benar/salah.",
            "<code>print(nama, umur, ...)</code> : menampilkan semua nilai di terminal, dipisah spasi.",
            "<code>print(type(umur))</code> : <code>type()</code> menanyakan tipe data, <code>print()</code> menampilkannya."
        ],
        output: "<code>Budi 20 1.75 True</code> lalu <code>&lt;class 'int'&gt;</code>.",
        salah: [
            "Teks tanpa kutip (<code>nama = Budi</code>) membuat <code>NameError</code>: Python mengira <code>Budi</code> adalah nama variabel.",
            "Menulis <code>true</code> / <code>false</code> huruf kecil. Yang benar <code>True</code> / <code>False</code>.",
            "Memakai koma untuk desimal (<code>1,75</code>). Pakailah titik: <code>1.75</code>.",
            "Nama variabel berspasi (<code>nama depan</code>) atau diawali angka (<code>1nama</code>)."
        ],
        alat: [
            "<code>print(x)</code> menampilkan nilai. Soal yang berkata \"cetak\" berarti memakai <code>print()</code>. <code>print(a, b)</code> mencetak dua nilai dipisah spasi.",
            "<code>print(a, b, sep=\" | \")</code> : argumen <code>sep</code> (separator) mengganti pemisah antar nilai, di sini menjadi <code> | </code>.",
            "<code>type(x)</code> memberi tahu tipe data nilai, hasilnya seperti <code>&lt;class 'int'&gt;</code>.",
            "<code>int(\"42\")</code> mengubah teks angka menjadi bilangan bulat 42 (dibahas penuh di level <i>input() &amp; Konversi Tipe Data</i>).",
            "<code>x, y = y, x</code> menukar isi dua variabel sekaligus, tanpa variabel bantu.",
            "<code>p = q = r = 0</code> mengisi beberapa variabel dengan nilai sama dalam satu baris.",
            "<code>total = harga * jumlah</code> : <code>*</code> adalah perkalian; hasilnya disimpan ke variabel baru (operator lengkap ada di level berikutnya)."
        ],
        example: '# Membuat variabel: nama = nilai\nnama = "Budi"       # str   : teks, diapit kutip\numur = 20           # int   : bilangan bulat\ntinggi = 1.75       # float : bilangan desimal (pakai titik)\nmahasiswa = True    # bool  : True atau False\n\n# print() menampilkan nilai ke terminal\nprint(nama, umur, tinggi, mahasiswa)\nprint(type(umur))   # menampilkan tipe data umur'
    });

    rewrite(2, {
        konsep: "Operator aritmatika adalah simbol untuk menghitung. Python menjalankannya seperti kalkulator, dan hasilnya bisa disimpan ke variabel.",
        poin: [
            "<code>+</code> tambah, <code>-</code> kurang, <code>*</code> kali, <code>/</code> bagi (hasil selalu <b>float</b>, mis. <code>10 / 2</code> menjadi <code>5.0</code>).",
            "<code>//</code> bagi bulat (hasil dibulatkan ke bawah): <code>17 // 5</code> = 3. <code>%</code> modulo (sisa bagi): <code>17 % 5</code> = 2. <code>**</code> pangkat: <code>2 ** 10</code> = 1024.",
            "Urutan operasi sama seperti matematika: kurung, lalu <code>**</code>, lalu <code>* / // %</code>, terakhir <code>+ -</code>. Jadi <code>2 + 3 * 4</code> = 14, tetapi <code>(2 + 3) * 4</code> = 20."
        ],
        baris: [
            "<code>panjang = 10</code> dan <code>lebar = 5</code> : dua variabel berisi angka.",
            "<code>luas = panjang * lebar</code> : hitung perkalian lalu simpan hasilnya (50) ke <code>luas</code>.",
            "<code>print(\"Luas:\", luas)</code> : tulisan dalam kutip tampil apa adanya, <code>luas</code> diganti nilainya."
        ],
        output: "<code>Luas: 50</code>",
        salah: [
            "Mengira <code>/</code> menghasilkan bilangan bulat. Hasilnya float; pakai <code>//</code> bila butuh bulat.",
            "Lupa tanda kurung sehingga urutan operasi salah (mis. rata-rata <code>80 + 85 + 90 / 3</code> padahal seharusnya <code>(80 + 85 + 90) / 3</code>).",
            "Memakai <code>^</code> untuk pangkat. Di Python pangkat adalah <code>**</code>."
        ],
        alat: [
            "<code>x += 1</code> adalah singkatan <code>x = x + 1</code>. Begitu pula <code>-=</code>, <code>*=</code>.",
            "<code>round(angka, n)</code> membulatkan ke n angka di belakang koma, mis. <code>round(3.14159, 2)</code> menjadi <code>3.14</code>.",
            "Persen jadi desimal: 15% ditulis <code>0.15</code>, sehingga diskon 15% dari harga = <code>harga * 0.15</code>.",
            "Mengubah detik menjadi jam: jam = <code>detik // 3600</code>; sisanya <code>detik % 3600</code> dihitung lagi untuk menit dan detik.",
            "Digit satuan sebuah bilangan = <code>angka % 10</code>; bilangan tanpa digit satuan = <code>angka // 10</code>.",
            "Bunga majemuk: <code>modal * (1 + bunga) ** tahun</code>, dengan bunga 5% ditulis <code>0.05</code>."
        ],
        example: 'panjang = 10          # variabel angka\nlebar = 5\nluas = panjang * lebar  # kali, simpan ke luas\nprint("Luas:", luas)    # Luas: 50\n\nprint(17 / 5)    # 3.4  (bagi biasa -> float)\nprint(17 // 5)   # 3    (bagi bulat)\nprint(17 % 5)    # 2    (sisa bagi)\nprint(2 ** 10)   # 1024 (pangkat)'
    });

    rewrite(3, {
        konsep: "String adalah teks. <b>f-string</b> adalah cara modern menyisipkan variabel atau hitungan ke dalam teks: tulis huruf <code>f</code> sebelum kutip pembuka, lalu taruh ekspresi di dalam kurung kurawal <code>{ }</code>.",
        poin: [
            "String boleh memakai kutip tunggal <code>'...'</code> atau ganda <code>\"...\"</code> (sama saja; pilih satu).",
            "Di dalam <code>{ }</code> boleh ada variabel (<code>{nama}</code>) maupun hitungan (<code>{a + b}</code>, <code>{harga * jumlah}</code>).",
            "Angka otomatis menjadi teks di dalam f-string, jadi tidak perlu diubah dulu."
        ],
        baris: [
            "<code>hobi = \"Membaca\"</code> : menyimpan teks ke variabel.",
            "<code>f\"Hobi saya adalah {hobi}\"</code> : huruf <code>f</code> mengaktifkan kurung kurawal; <code>{hobi}</code> diganti isi variabel.",
            "<code>print(...)</code> : menampilkan hasil teks akhir."
        ],
        output: "<code>Hobi saya adalah Membaca</code>",
        salah: [
            "Lupa huruf <code>f</code> di depan kutip: hasilnya mencetak <code>{hobi}</code> apa adanya.",
            "Salah ketik nama variabel di dalam kurung kurawal sehingga <code>NameError</code>.",
            "Memakai kutip yang sama di dalam dan di luar f-string pada Python lama (pakai kutip berbeda)."
        ],
        alat: [
            "<code>f\"...{variabel}...\"</code> : f-string. Soal meminta teks <b>persis</b>, termasuk spasi, koma, dan huruf besar.",
            "<code>len(teks)</code> menghitung jumlah karakter; <code>len(\"Python\")</code> = 6. Bisa dipakai di dalam f-string: <code>{len(kata)}</code>.",
            "<code>teks[0]</code> mengambil karakter pertama (indeks dimulai dari 0). Dibahas penuh di level <i>String Method &amp; Slicing</i>.",
            "<code>\"ha\" * 3</code> mengulang teks 3 kali menjadi <code>hahaha</code>; <code>+</code> menyambung teks: <code>\"ha\" * 3 + \"!\"</code> menjadi <code>hahaha!</code>.",
            "<code>\\n</code> di dalam string berarti pindah baris, sehingga satu <code>print</code> bisa mencetak dua baris.",
            "<code>{{</code> dan <code>}}</code> mencetak tanda kurung kurawal <b>apa adanya</b>: <code>f\"{{x}} = {x}\"</code> menghasilkan <code>{x} = 5</code> bila x = 5.",
            "<code>teks.title()</code> membuat huruf pertama setiap kata menjadi kapital: <code>\"budi santoso\".title()</code> menjadi <code>Budi Santoso</code>."
        ],
        example: 'hobi = "Membaca"           # simpan teks ke variabel\nprint(f"Hobi saya adalah {hobi}")   # f-string: {hobi} diganti isinya\n\na = 7\nb = 3\nprint(f"{a} + {b} = {a + b}")        # hitungan boleh di dalam { }\nprint(len("Python"))                 # 6 (jumlah karakter)\nprint("ha" * 3 + "!")                # hahaha!'
    });

    rewrite(12, {
        konsep: "Format string mengatur <b>tampilan</b> sebuah nilai di dalam f-string: jumlah desimal, pemisah ribuan, persen, dan perataan teks. Tulisannya <code>{nilai:aturan}</code>; aturan berada setelah tanda titik dua.",
        poin: [
            "Desimal: <code>{pi:.2f}</code> = 2 angka di belakang koma. Ribuan: <code>{angka:,}</code>. Persen: <code>{0.758:.1%}</code> menjadi <code>75.8%</code>.",
            "Rata: <code>&lt;</code> kiri, <code>&gt;</code> kanan, <code>^</code> tengah, diikuti lebar kolom. <code>{'Python':&gt;10}</code> = teks rata kanan dalam lebar 10 karakter.",
            "Bilangan bulat: <code>{5:04d}</code> memberi angka nol di depan sampai 4 digit (<code>0005</code>); <code>{255:x}</code> heksadesimal; <code>{10:b}</code> biner."
        ],
        baris: [
            "<code>pi = 3.14159</code> : variabel desimal.",
            "<code>{pi:.2f}</code> : <code>.2</code> dua angka desimal, <code>f</code> berarti tipe float.",
            "<code>{'Teks':&lt;10}</code> : kata <code>Teks</code> rata kiri pada lebar 10; kutip di dalam harus beda dari kutip luar."
        ],
        output: "<code>Pi: 3.14</code> lalu <code>Teks       - Kiri</code>",
        salah: [
            "Memakai kutip yang sama di dalam dan di luar (<code>f\"{\"A\":&gt;5}\"</code>). Pakai <code>f\"{'A':&gt;5}\"</code>.",
            "Salah posisi: aturan selalu setelah <code>:</code>, bukan sebelum.",
            "Mengira <code>round()</code> dan <code>:.2f</code> sama. <code>round</code> mengubah nilai; <code>:.2f</code> hanya mengubah tampilan."
        ],
        alat: [
            "<code>{x:.2f}</code> desimal 2 digit; <code>{x:.1%}</code> persen 1 desimal (nilai 0.758 dianggap 75.8%).",
            "<code>{x:,}</code> pemisah ribuan koma: <code>1500000</code> menjadi <code>1,500,000</code>.",
            "<code>{x:&gt;10}</code> kanan, <code>{x:&lt;10}</code> kiri, <code>{x:^12}</code> tengah (angka = lebar total).",
            "<code>{x:04d}</code> : <code>d</code> = integer, <code>0</code> = isi nol, <code>4</code> = lebar. <code>{x:x}</code> heksadesimal, <code>{x:b}</code> biner."
        ],
        example: 'pi = 3.14159\nprint(f"Pi: {pi:.2f}")            # 2 angka desimal -> Pi: 3.14\nprint(f"{1500000:,}")             # ribuan -> 1,500,000\nprint(f"{0.758:.1%}")             # persen -> 75.8%\nprint(f"{\'Teks\':<10} - Kiri")      # rata kiri lebar 10\nprint(f"{5:04d}")                 # nol di depan -> 0005'
    });

    rewrite(103, {
        konsep: "Perbandingan memeriksa hubungan dua nilai dan menghasilkan <b>boolean</b> (<code>True</code> atau <code>False</code>). Hasil inilah yang dipakai <code>if</code> dan perulangan untuk mengambil keputusan.",
        poin: [
            "<code>==</code> sama dengan, <code>!=</code> tidak sama, <code>&gt;</code> <code>&lt;</code> <code>&gt;=</code> <code>&lt;=</code>. Ingat: <code>=</code> menyimpan nilai, <code>==</code> membandingkan.",
            "Logika: <code>and</code> (keduanya benar), <code>or</code> (salah satu benar), <code>not</code> (membalik).",
            "Keanggotaan: <code>\"py\" in \"python\"</code> memeriksa isi; <code>not in</code> kebalikannya. Perbandingan berantai: <code>10 &lt; x &lt; 20</code>."
        ],
        baris: [
            "<code>umur = 20</code> : variabel angka.",
            "<code>print(umur &gt;= 17)</code> : perbandingan menghasilkan <code>True</code>.",
            "<code>print(umur &gt; 17 and umur &lt; 30)</code> : keduanya benar, jadi <code>True</code>.",
            "<code>print(\"a\" in \"abc\")</code> : huruf a ada dalam abc, jadi <code>True</code>."
        ],
        output: "<code>True</code>, <code>True</code>, <code>True</code> (tiga baris).",
        salah: [
            "Memakai <code>=</code> alih-alih <code>==</code> (SyntaxError).",
            "Membandingkan teks tanpa memperhatikan huruf besar: <code>\"python\" == \"Python\"</code> adalah <code>False</code>.",
            "Menulis <code>10 &lt; x &lt; 20</code> sebagai <code>10 &lt; x and 20</code> (hanya sebagian yang diperiksa)."
        ],
        alat: [
            "Tabel <code>and</code>: benar hanya bila <b>keduanya</b> True. <code>or</code>: salah hanya bila keduanya False. <code>not True</code> = <code>False</code>.",
            "Variabel boleh bernilai boolean langsung: <code>aktif = False</code>, lalu <code>not aktif</code> menjadi <code>True</code>.",
            "<code>10 &lt; angka &lt; 20</code> : perbandingan berantai, True bila angka di antara 10 dan 20.",
            "<code>\"py\" in teks</code> dan <code>\"java\" not in teks</code> : periksa apakah potongan teks ada atau tidak di dalam string."
        ],
        example: 'umur = 20\nprint(umur >= 17)               # True  (20 lebih dari atau sama dengan 17)\nprint(umur != 20)               # False (umur memang 20)\nprint(umur > 17 and umur < 30)  # True  (kedua syarat benar)\nprint(not umur > 30)            # True  (not membalik False)\nprint("a" in "abc")             # True  (a ada di dalam abc)'
    });

    rewrite(4, {
        konsep: "Percabangan membuat program memilih jalur berdasarkan kondisi: jika benar jalankan satu blok, jika salah jalankan blok lain.",
        poin: [
            "<code>if kondisi:</code> blok dijalankan hanya bila kondisi <code>True</code>. <code>else:</code> dijalankan bila salah.",
            "Wajib ada titik dua <code>:</code> di akhir <code>if</code> dan <code>else</code>.",
            "<b>Indentasi</b>: isi blok harus menjorok 4 spasi. Itulah cara Python tahu baris mana milik <code>if</code>."
        ],
        baris: [
            "<code>nilai = 75</code> : variabel yang akan diperiksa.",
            "<code>if nilai &gt;= 70:</code> : kondisi; benar karena 75 lebih besar dari 70.",
            "<code>    print(\"Lulus\")</code> : menjorok, jadi hanya jalan bila kondisi benar.",
            "<code>else:</code> + <code>print(\"Remidi\")</code> : jalur cadangan bila kondisi salah."
        ],
        output: "<code>Lulus</code>",
        salah: [
            "Lupa titik dua setelah <code>if</code> atau <code>else</code>.",
            "Isi blok tidak diindentasi (<code>IndentationError</code>).",
            "Kondisi berupa nilai tunggal (<code>if umur:</code>), bukan perbandingan. Pada soal level ini kondisi harus berupa perbandingan seperti <code>umur &gt;= 17</code>.",
            "Mengubah nilai variabel dari yang diminta soal. Variabel harus bernilai persis seperti di soal (mis. <code>umur = 18</code>)."
        ],
        alat: [
            "<code>if kondisi:</code> / <code>else:</code> : struktur dua jalur. Teks dicetak persis seperti permintaan soal.",
            "Operator perbandingan <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>==</code>, <code>!=</code> (lihat level sebelumnya).",
            "<code>angka % 2 == 0</code> : <code>%</code> = sisa bagi. Bilangan genap bersisa 0 jika dibagi 2, jadi kondisi ini benar untuk genap dan salah untuk ganjil."
        ],
        example: 'nilai = 75\nif nilai >= 70:          # kondisi, diakhiri titik dua\n    print("Lulus")       # menjorok 4 spasi = isi blok if\nelse:                    # dijalankan bila kondisi salah\n    print("Remidi")'
    });

    rewrite(5, {
        konsep: "<code>elif</code> (singkatan <i>else if</i>) menambah pilihan di antara <code>if</code> dan <code>else</code> sehingga bisa memeriksa banyak kondisi berurutan.",
        poin: [
            "Python memeriksa dari atas ke bawah dan menjalankan <b>hanya blok pertama</b> yang benar; sisanya dilewati.",
            "Urutan penting: mulai dari syarat yang paling ketat (mis. nilai terbesar), karena syarat yang longgar akan menangkap semuanya.",
            "<code>else</code> opsional; ia menampung semua kemungkinan yang tersisa."
        ],
        baris: [
            "<code>skor = 85</code> : variabel yang diperiksa.",
            "<code>if skor &gt;= 90:</code> : salah (85 kurang dari 90), dilewati.",
            "<code>elif skor &gt;= 80:</code> : benar, jadi cetak <code>B</code>; <code>else</code> tidak dijalankan."
        ],
        output: "<code>B</code>",
        salah: [
            "Urutan salah: memeriksa <code>&gt;= 75</code> sebelum <code>&gt;= 90</code> membuat nilai 95 tetap mendapat predikat lebih rendah.",
            "Memakai beberapa <code>if</code> terpisah alih-alih <code>elif</code>, sehingga lebih dari satu blok bisa jalan.",
            "Membandingkan teks tanpa kutip (<code>lampu == merah</code>). Harus <code>lampu == \"merah\"</code>."
        ],
        alat: [
            "<code>if ... elif ... elif ... else</code> : boleh ada banyak <code>elif</code>.",
            "Membandingkan string: <code>level == \"admin\"</code> (kutip wajib, huruf harus sama persis).",
            "Predikat nilai pada soal: A bila nilai &gt;= 90, B bila &gt;= 75, selain itu C (tulis dari kondisi terbesar).",
            "Angka desimal (<code>6.5</code>, <code>4.5</code>) dibandingkan dengan cara sama seperti bilangan bulat."
        ],
        example: 'skor = 85\nif skor >= 90:          # diperiksa pertama: salah\n    print("A")\nelif skor >= 80:        # diperiksa kedua: benar -> cetak B\n    print("B")\nelse:                   # sisanya\n    print("C")'
    });

    rewrite(104, {
        konsep: "<code>input()</code> membaca teks yang diketik pengguna. Hasilnya <b>selalu string</b>, jadi untuk berhitung ubah dulu menjadi angka dengan <code>int()</code> atau <code>float()</code>.",
        poin: [
            "<code>int(\"5\")</code> menjadi 5; <code>float(\"1.5\")</code> menjadi 1.5; <code>str(42)</code> menjadi <code>\"42\"</code>; <code>int(3.9)</code> memotong desimal menjadi 3.",
            "Di aplikasi ini, input soal sudah <b>otomatis</b> disediakan (tertulis di soal). Untuk mencoba sendiri, isi kolom Input di bawah editor atau ketik di terminal."
        ],
        baris: [
            "<code>nama = input(\"Nama: \")</code> : tampilkan pertanyaan <code>Nama: </code>, simpan jawaban sebagai string.",
            "<code>umur = int(input(\"Umur: \"))</code> : baca jawaban lalu ubah ke integer.",
            "<code>print(f\"... {umur + 1} ...\")</code> : karena <code>umur</code> sudah angka, boleh dihitung."
        ],
        output: "Bila diketik Budi dan 20: <code>Budi tahun depan 21 tahun</code>",
        salah: [
            "Menghitung hasil <code>input()</code> tanpa konversi: <code>\"20\" + 1</code> memicu <code>TypeError</code>.",
            "<code>int(\"3.5\")</code> memicu <code>ValueError</code>; ubah dulu lewat <code>float()</code>.",
            "Lupa membungkus <code>input()</code> dengan <code>int()</code> pada soal yang meminta angka."
        ],
        alat: [
            "<code>input()</code> membaca satu baris; setiap pemanggilan membaca satu baris masukan.",
            "<code>int(x)</code>, <code>float(x)</code>, <code>str(x)</code> : konversi tipe. <code>int(input())</code> = baca lalu langsung jadikan integer.",
            "<code>type(x)</code> menunjukkan tipe sebuah nilai (<code>&lt;class 'int'&gt;</code> dan sebagainya).",
            "<code>bilangan % 2 == 0</code> memeriksa genap (sisa bagi 2 sama dengan 0), dipakai bersama <code>if</code>.",
            "f-string <code>f\"{nama} berumur {umur} tahun\"</code> untuk menggabungkan teks dan variabel."
        ],
        example: 'nama = input("Nama: ")           # selalu berupa string\numur = int(input("Umur: "))      # ubah ke integer agar bisa dihitung\nprint(f"{nama} tahun depan {umur + 1} tahun")'
    });

    rewrite(6, {
        konsep: "Perulangan <code>for</code> mengulang sebuah blok kode sejumlah kali yang sudah pasti. Biasanya dipakai bersama <code>range()</code> untuk menghasilkan deretan angka.",
        poin: [
            "<code>range(5)</code> menghasilkan 0 1 2 3 4. <code>range(1, 6)</code> menghasilkan 1 sampai 5 (angka akhir <b>tidak ikut</b>). <code>range(2, 11, 2)</code> menambah 2 tiap langkah; langkah negatif (<code>range(5, 0, -1)</code>) menghitung mundur.",
            "Variabel loop (mis. <code>i</code>) berganti nilai di setiap putaran; isi blok harus diindentasi 4 spasi.",
            "<code>for</code> juga bisa mengulang tiap huruf sebuah string: <code>for h in \"abc\":</code>."
        ],
        baris: [
            "<code>for i in range(1, 4):</code> : jalankan blok dengan <code>i</code> bernilai 1, lalu 2, lalu 3.",
            "<code>print(\"Hitungan ke:\", i)</code> : menjorok, jadi diulang di setiap putaran."
        ],
        output: "<code>Hitungan ke: 1</code>, <code>Hitungan ke: 2</code>, <code>Hitungan ke: 3</code>",
        salah: [
            "Mengira <code>range(1, 5)</code> menghasilkan 1 sampai 5. Angka akhir tidak ikut, jadi 1 sampai 4 (off-by-one).",
            "Lupa titik dua atau indentasi pada <code>for</code>.",
            "Lupa menetapkan nilai awal penampung (mis. <code>total = 0</code>) sebelum loop."
        ],
        alat: [
            "<code>range(awal, akhir, langkah)</code> : tiga argumen. Contoh <code>range(5, 0, -1)</code> menghasilkan 5, 4, 3, 2, 1.",
            "<b>Penampung</b> (accumulator): <code>total = 0</code> sebelum loop, lalu <code>total += i</code> di dalam loop untuk menjumlahkan; untuk mengalikan mulai dari <code>hasil = 1</code> dan pakai <code>hasil *= i</code> (faktorial).",
            "<code>for huruf in \"pemrograman\":</code> mengulang tiap karakter; <code>if huruf in \"aiueo\":</code> memeriksa apakah huruf termasuk vokal.",
            "<code>i % 2 == 0</code> memeriksa genap; <code>i % 3 == 0</code> memeriksa kelipatan 3. FizzBuzz: periksa kelipatan 15 lebih dulu, lalu 3, lalu 5 (<code>if / elif</code>).",
            "<code>f\"7 x {i} = {7 * i}\"</code> : f-string untuk mencetak tabel perkalian.",
            "<b>Fibonacci</b>: <code>a, b = 0, 1</code> lalu di tiap putaran cetak <code>a</code> dan <code>a, b = b, a + b</code> (a dan b bergeser maju serentak)."
        ],
        example: '# Hitung mundur dan jumlahkan angka\nfor i in range(1, 4):               # i = 1, 2, 3\n    print("Hitungan ke:", i)\n\ntotal = 0                           # penampung, mulai dari 0\nfor i in range(1, 5):\n    total += i                      # tambahkan i ke total\nprint(total)                        # 10'
    });

    rewrite(7, {
        konsep: "Perulangan <code>while</code> mengulang blok <b>selama kondisinya True</b>. Dipakai bila jumlah putaran belum pasti.",
        poin: [
            "Tiga bagian wajib: nilai awal sebelum loop, kondisi di <code>while</code>, dan pembaruan nilai di dalam loop.",
            "Bila nilai tidak pernah berubah sehingga kondisi selalu True, terjadi <b>infinite loop</b> (program tergantung; di sini dihentikan otomatis setelah 8 detik).",
            "Kondisi <code>while</code> tidak boleh konstan (misal <code>while True</code> atau <code>while 1</code>) pada soal level ini; pakai kondisi yang berubah seperti <code>i &lt;= 3</code>."
        ],
        baris: [
            "<code>i = 1</code> : nilai awal.",
            "<code>while i &lt;= 3:</code> : ulangi selama i belum lebih dari 3.",
            "<code>print(i)</code> : tampilkan i.",
            "<code>i += 1</code> : naikkan i. Tanpa baris ini loop tak pernah berhenti."
        ],
        output: "<code>1</code>, <code>2</code>, <code>3</code> (tiga baris)",
        salah: [
            "Lupa memperbarui variabel di dalam loop (infinite loop).",
            "Kondisi terbalik (<code>while i &gt; 3</code> padahal i mulai dari 1, loop tidak pernah jalan).",
            "Memperbarui di arah yang salah (<code>i -= 1</code> pada kondisi <code>i &lt;= 3</code>)."
        ],
        alat: [
            "<code>i += 1</code> naik 1, <code>i -= 1</code> turun 1, <code>i += 2</code> naik 2, <code>i *= 2</code> dikali 2 setiap putaran (1, 2, 4, 8).",
            "Hitung mundur: mulai <code>i = 3</code>, kondisi <code>i &gt; 0</code>, pembaruan <code>i -= 1</code>.",
            "Penampung: <code>total = 0</code> sebelum loop, <code>total += i</code> di dalam loop untuk menjumlahkan.",
            "Pada soal \"energi\", variabel bebas diberi nama <code>e</code> dan nilai awal 3, dikurangi 1 tiap putaran selama masih lebih dari 0.",
            "<code>print(i * i)</code> mencetak kuadrat dari i (1, 4, 9)."
        ],
        example: 'i = 1                 # 1. nilai awal\nwhile i <= 3:         # 2. selama kondisi benar, ulangi\n    print(i)\n    i += 1            # 3. perbarui i, agar suatu saat kondisi salah'
    });

    rewrite(9, {
        konsep: "List adalah wadah yang menyimpan banyak nilai berurutan dalam satu variabel, ditulis dengan kurung siku: <code>[1, 2, 3]</code>.",
        poin: [
            "Setiap elemen punya nomor urut (<b>indeks</b>) yang dimulai dari <b>0</b>: elemen pertama <code>daftar[0]</code>, terakhir <code>daftar[-1]</code>. Jadi \"indeks ke-1\" adalah elemen <b>kedua</b>.",
            "List bersifat <b>mutable</b>: isinya bisa diubah, ditambah, dan dihapus.",
            "Method penting: <code>.append()</code>, <code>.insert()</code>, <code>.remove()</code>, <code>.sort()</code>."
        ],
        baris: [
            "<code>warna = [\"merah\", \"hijau\", \"biru\"]</code> : membuat list berisi 3 teks.",
            "<code>warna.append(\"kuning\")</code> : menambah <code>kuning</code> di akhir.",
            "<code>print(warna[0])</code> : cetak elemen indeks 0 (<code>merah</code>).",
            "<code>print(len(warna))</code> : jumlah elemen (4)."
        ],
        output: "<code>merah</code> lalu <code>4</code>",
        salah: [
            "Mengira indeks mulai dari 1; akses di luar batas memicu <code>IndexError</code>.",
            "Mengira <code>sort()</code> mengembalikan list baru. Ia mengubah list itu sendiri dan hasilnya <code>None</code>; jadi tulis <code>daftar.sort()</code> lalu <code>print(daftar)</code>.",
            "<code>remove(20)</code> menghapus <b>nilai</b> 20, bukan elemen di indeks 20."
        ],
        alat: [
            "<code>daftar.append(x)</code> tambah di akhir; <code>daftar.insert(0, x)</code> sisipkan di posisi 0; <code>daftar.remove(x)</code> hapus nilai x; <code>daftar.sort()</code> urutkan naik.",
            "<code>daftar[0] = 99</code> mengubah elemen indeks 0 menjadi 99.",
            "<code>len(daftar)</code> jumlah elemen; <code>max(daftar)</code> / <code>min(daftar)</code> nilai terbesar/terkecil; <code>sum(daftar)</code> jumlah.",
            "<code>list1 + list2</code> menggabungkan dua list menjadi satu.",
            "<code>x in daftar</code> memeriksa apakah x ada di dalam list.",
            "<code>daftar = []</code> membuat list kosong, lalu diisi dengan <code>.append()</code>."
        ],
        example: 'warna = ["merah", "hijau", "biru"]   # list berisi 3 teks\nwarna.append("kuning")                # tambah di akhir\nprint(warna[0])                       # indeks 0 = merah\nprint(warna[-1])                      # indeks -1 = elemen terakhir\nprint(len(warna))                     # jumlah elemen = 4\nprint(warna)                          # tampil dengan kurung siku'
    });

    rewrite(105, {
        konsep: "String adalah urutan karakter, jadi bisa diakses lewat indeks (seperti list) dan diolah dengan <b>method</b> bawaan. String bersifat <i>immutable</i>: method tidak mengubah aslinya, melainkan mengembalikan string baru.",
        poin: [
            "Indeks: <code>s[0]</code> karakter pertama, <code>s[-1]</code> terakhir. Slicing: <code>s[awal:akhir:langkah]</code>; indeks akhir <b>tidak ikut</b>.",
            "<code>s[::-1]</code> membalik string.",
            "Method mengubah teks: <code>.upper()</code>, <code>.strip()</code>, <code>.replace()</code>; memecah/menggabung: <code>.split()</code>, <code>.join()</code>; mencari: <code>.count()</code>, <code>.find()</code>, <code>.startswith()</code>, <code>.endswith()</code>."
        ],
        baris: [
            "<code>s = \"Belajar Python\"</code> : simpan teks.",
            "<code>s[0:7]</code> : ambil indeks 0 sampai 6 (<code>Belajar</code>).",
            "<code>s.upper()</code> : semua huruf kapital.",
            "<code>s.split(\" \")</code> : pecah di tiap spasi menjadi list <code>['Belajar', 'Python']</code>."
        ],
        output: "<code>Belajar</code>, <code>BELAJAR PYTHON</code>, <code>['Belajar', 'Python']</code>",
        salah: [
            "Mengira <code>s[0:7]</code> termasuk indeks 7 (tidak).",
            "Mengira method mengubah variabel asli. <code>s.upper()</code> harus dicetak atau disimpan: <code>s = s.upper()</code>.",
            "Terbalik urutan di <code>join</code>: yang dipanggil adalah <b>pemisah</b>, <code>\" - \".join(daftar)</code>."
        ],
        alat: [
            "<code>teks[a:b]</code> potong dari indeks a sampai sebelum b; <code>teks[:7]</code> = 7 huruf pertama; <code>teks[::-1]</code> terbalik.",
            "<code>.strip()</code> membuang spasi di kedua ujung; <code>.replace(\"kopi\", \"teh\")</code> mengganti potongan teks.",
            "<code>\"a,b,c\".split(\",\")</code> menghasilkan <code>['a', 'b', 'c']</code>; <code>\" - \".join([\"apel\", \"jeruk\"])</code> menghasilkan <code>apel - jeruk</code>.",
            "<code>kata.count(\"m\")</code> berapa kali muncul; <code>kata.find(\"g\")</code> indeks pertama (<code>-1</code> bila tidak ada).",
            "<code>email.startswith(\"budi\")</code> dan <code>email.endswith(\".com\")</code> menghasilkan True/False; digabung dengan <code>and</code>."
        ],
        example: 's = "Belajar Python"\nprint(s[0])           # B           (karakter pertama)\nprint(s[-1])          # n           (karakter terakhir)\nprint(s[0:7])         # Belajar     (indeks 0 s.d. 6)\nprint(s[::-1])        # nohtyP rajaleB (dibalik)\nprint(s.upper())      # BELAJAR PYTHON\nprint(s.split(" "))   # [\'Belajar\', \'Python\']'
    });

    rewrite(106, {
        konsep: "<code>break</code> menghentikan perulangan seketika. <code>continue</code> melompati sisa putaran saat ini dan lanjut ke putaran berikutnya.",
        poin: [
            "Keduanya dipakai di dalam <code>if</code> yang ada di dalam <code>for</code> atau <code>while</code>.",
            "<code>while True:</code> hampir selalu butuh <code>break</code> agar tidak berjalan selamanya.",
            "<code>for ... else</code>: blok <code>else</code> jalan hanya bila loop selesai <b>tanpa</b> <code>break</code>."
        ],
        baris: [
            "<code>for i in range(1, 8):</code> : putaran dengan i = 1 sampai 7.",
            "<code>if i == 3: continue</code> : saat i = 3, langsung ke putaran berikutnya (3 tidak dicetak).",
            "<code>if i == 6: break</code> : saat i = 6, loop berhenti total.",
            "<code>print(i)</code> : mencetak 1, 2, 4, 5."
        ],
        output: "<code>1</code>, <code>2</code>, <code>4</code>, <code>5</code>",
        salah: [
            "Menaruh <code>continue</code> setelah <code>print</code> (tidak ada yang dilewati).",
            "Di <code>while</code>, memakai <code>continue</code> sebelum <code>i += 1</code> sehingga loop macet.",
            "Mengira <code>break</code> keluar dari semua loop sekaligus (hanya loop terdalam)."
        ],
        alat: [
            "<code>break</code> : keluar dari loop; <code>continue</code> : lompat ke putaran berikutnya.",
            "<code>while True:</code> + <code>if kondisi: break</code> : loop yang berhenti oleh kondisi di dalamnya.",
            "<code>i % 2 == 0</code> : genap. Untuk mencetak ganjil saja, lewati yang genap dengan <code>continue</code>.",
            "<code>for ... else</code> : <code>else</code> sejajar dengan <code>for</code>, jalan bila loop selesai tanpa <code>break</code>.",
            "<code>total += i</code> (penampung) dan <code>if total &gt; 20: break</code> untuk berhenti saat batas tercapai."
        ],
        example: 'for i in range(1, 8):\n    if i == 3:\n        continue      # lewati 3, lanjut ke putaran berikutnya\n    if i == 6:\n        break         # berhenti total saat i = 6\n    print(i)          # tercetak: 1 2 4 5'
    });

    rewrite(120, {
        konsep: "<i>Nested loop</i> adalah perulangan di dalam perulangan. Loop luar biasanya mewakili <b>baris</b>, loop dalam mewakili <b>kolom</b>: setiap kali loop luar berputar sekali, loop dalam berjalan penuh dari awal sampai akhir.",
        poin: [
            "<code>print(..., end=\"\")</code> mencetak tanpa pindah baris; <code>end=\" \"</code> memberi spasi sebagai pemisah.",
            "<code>print()</code> kosong di akhir loop dalam memindahkan kursor ke baris berikutnya.",
            "Banyak pola bergantung pada nilai loop luar: <code>range(i)</code> membuat baris yang makin panjang."
        ],
        baris: [
            "<code>for i in range(1, 4):</code> : loop luar = baris 1, 2, 3.",
            "<code>for j in range(1, 4):</code> : loop dalam = kolom 1, 2, 3 untuk tiap baris.",
            "<code>print(i * j, end=\" \")</code> : cetak hasil kali di baris yang sama.",
            "<code>print()</code> : (sejajar dengan <code>for j</code>) pindah baris setelah satu baris selesai."
        ],
        output: "<code>1 2 3</code> / <code>2 4 6</code> / <code>3 6 9</code>",
        salah: [
            "Lupa <code>print()</code> kosong, sehingga semua hasil menumpuk di satu baris.",
            "Indentasi <code>print()</code> salah sehingga ikut berulang di loop dalam.",
            "Memakai nama variabel sama (<code>i</code>) untuk loop luar dan dalam."
        ],
        alat: [
            "<code>end=\"\"</code> mencetak tanpa pindah baris; <code>end=\" \"</code> dengan spasi.",
            "<code>range(i)</code> dan <code>range(1, i + 1)</code> : jumlah putaran loop dalam mengikuti nomor baris i.",
            "<code>\"*\" * n</code> mengulang teks n kali; <code>\" \" * (3 - i)</code> menambah spasi di depan (untuk rata tengah piramida).",
            "<code>(i + j) % 2 == 0</code> : bergantian benar/salah, dipakai untuk pola papan catur.",
            "Pasangan unik (i, j): mulai loop dalam dari <code>i + 1</code> agar tidak ada pasangan ganda."
        ],
        example: '# Tabel perkalian 3 x 3\nfor i in range(1, 4):              # loop luar = baris\n    for j in range(1, 4):          # loop dalam = kolom\n        print(i * j, end=" ")      # cetak di baris yang sama\n    print()                        # pindah baris\n# 1 2 3\n# 2 4 6\n# 3 6 9'
    });

    rewrite(128, {
        konsep: "Mini-proyek penutup fase Beginner: menggabungkan variabel, operator, <code>if/elif/else</code>, <code>input()</code>, dan <code>while</code> menjadi kasir sederhana lalu permainan tebak angka. Tiap soal berdiri sendiri; tulis ulang bagian yang dibutuhkan.",
        poin: [
            "Susun masalah menjadi langkah kecil: hitung total, beri diskon, hitung kembalian, lalu ulangi tebakan.",
            "Soal 3-5 memakai input otomatis (tertulis di soal)."
        ],
        baris: [
            "<code>harga1 = 12000</code> (dan seterusnya) : tiga harga.",
            "<code>total = harga1 + harga2 + harga3</code> : jumlahkan.",
            "<code>print(f\"Total: {total}\")</code> : tampilkan memakai f-string."
        ],
        output: "<code>Total: 25000</code>",
        salah: [
            "Lupa mengubah hasil <code>input()</code> menjadi angka.",
            "Memakai <code>=</code> alih-alih <code>==</code> pada perbandingan.",
            "<code>while</code> yang nilai/kondisinya tidak pernah berubah."
        ],
        alat: [
            "Diskon 10%: <code>bayar = total * 0.9</code> (bayar 90% dari total).",
            "<code>uang = int(input())</code> : baca uang pembeli sebagai angka; kembalian = <code>uang - bayar</code>.",
            "<code>if tebakan &lt; rahasia: ... elif tebakan &gt; rahasia: ... else: ...</code> : tiga kemungkinan hasil tebakan.",
            "<code>percobaan = 0</code> sebelum loop, <code>percobaan += 1</code> di tiap tebakan, <code>break</code> bila benar.",
            "<code>while True:</code> + <code>break</code> boleh dipakai di soal ini karena kondisi berhenti ada di dalam loop."
        ],
        example: 'harga1 = 12000\nharga2 = 8500\nharga3 = 4500\ntotal = harga1 + harga2 + harga3     # jumlahkan\nprint(f"Total: {total}")             # Total: 25000'
    });
})();

/* ---------- PERAPIAN MATERI (format lama -> struktur seragam) ----------
   Level yang desc-nya masih berawalan "Definisi Konsep Mendalam" ditulis ulang dengan struktur:
   Konsep, Poin penting, Baca contoh baris demi baris, Contoh & output, Kesalahan umum.
   Blok "Alat bantu yang dipakai di soal" yang sudah ada dipertahankan apa adanya. id/validate/expect/check tidak disentuh. */
(function () {
    "use strict";
    const sec = function (t) { return '<span class="sec">' + t + "</span>"; };
    const bl = function (a) { return a.map(function (x) { return "• " + x; }).join("<br>"); };
    const MARK = "<b>Alat bantu yang dipakai di soal:</b>";
    function R(id, konsep, poin, baris, output, salah, ex) {
        const l = levelsData.find(function (x) { return x.id === id; });
        if (!l) throw new Error("perapian: level id " + id + " tidak ditemukan");
        const parts = l.desc.split(MARK);
        const alat = parts.length > 1 ? "<br><br>" + MARK + parts.slice(1).join(MARK) : "";
        l.desc = sec("Konsep") + konsep + sec("Poin penting") + bl(poin) +
            sec("Baca contoh baris demi baris") + bl(baris) +
            sec("Contoh &amp; output") + output +
            sec("Kesalahan umum") + bl(salah) + alat;
        if (ex) l.example = ex;
    }

    /* ===== INTERMEDIATE ===== */
    R(8, `Fungsi adalah blok kode bernama yang membungkus satu tugas sehingga bisa dipakai berulang kali tanpa menulis ulang kodenya.`,
        [`Definisi: <code>def nama_fungsi(parameter):</code>, isi fungsi diindentasi 4 spasi.`,
         `<b>Parameter</b> adalah variabel penerima di definisi; <b>argumen</b> adalah nilai yang dikirim saat memanggil.`,
         `<code>return</code> mengeluarkan hasil dan menghentikan fungsi. Tanpa <code>return</code>, hasil fungsi adalah <code>None</code>.`],
        [`<code>def sapa(nama):</code> : membuat fungsi bernama <code>sapa</code> dengan satu parameter.`,
         `<code>return f"Halo {nama}"</code> : mengembalikan teks, belum mencetak apa pun.`,
         `<code>sapa("Rian")</code> : memanggil fungsi dengan argumen <code>"Rian"</code>.`,
         `<code>print(...)</code> : menampilkan nilai yang dikembalikan.`],
        `<code>Halo Rian</code>`,
        [`Mendefinisikan fungsi tetapi lupa memanggilnya, sehingga tidak ada yang terjadi.`,
         `Memakai <code>print</code> di dalam fungsi padahal soal meminta <code>return</code>: hasil fungsi menjadi <code>None</code>.`,
         `Lupa titik dua setelah <code>def</code> atau salah indentasi.`]);

    R(10, `Tuple dan set adalah dua koleksi pendamping list. Tuple menyimpan urutan data yang tidak boleh berubah; set menyimpan kumpulan data unik tanpa urutan.`,
        [`<b>Tuple</b> ditulis <code>(10, 20)</code> dan bersifat <i>immutable</i>: elemennya tidak bisa diubah setelah dibuat. Indeks dimulai dari 0.`,
         `<b>Set</b> ditulis <code>{1, 2, 3}</code>: elemen duplikat otomatis dibuang dan tidak punya indeks.`,
         `Set kosong ditulis <code>set()</code>, bukan <code>{}</code> (itu dictionary).`],
        [`<code>koordinat = (10, 20)</code> : tuple berisi dua angka; <code>koordinat[0]</code> bernilai 10.`,
         `<code>angka_unik = {1, 2, 2, 3}</code> : set; angka 2 yang kembar hanya disimpan sekali.`,
         `<code>print(angka_unik)</code> : mencetak isi set tanpa duplikat.`],
        `<code>{1, 2, 3}</code>`,
        [`Mencoba mengubah tuple (<code>t[0] = 5</code>) memicu <code>TypeError</code>.`,
         `Mengira set menjaga urutan atau punya indeks (<code>s[0]</code> memicu <code>TypeError</code>).`,
         `Tuple satu elemen tanpa koma: <code>(5)</code> hanyalah angka, yang benar <code>(5,)</code>.`]);

    R(11, `Dictionary menyimpan data berpasangan <b>kunci: nilai</b>. Data diambil lewat kuncinya, bukan lewat nomor urut, sehingga cocok untuk data bernama seperti profil atau produk.`,
        [`Ditulis dengan kurung kurawal: <code>{"nama": "Siti", "nilai": 90}</code>. Kunci harus unik.`,
         `Baca: <code>d["nama"]</code>; ubah atau tambah: <code>d["umur"] = 17</code>; hapus: <code>del d["nama"]</code>.`,
         `<code>.get("kunci")</code> mengembalikan <code>None</code> bila kunci tidak ada (tanpa error); <code>.keys()</code> dan <code>.values()</code> mengambil semua kunci/nilai.`],
        [`<code>siswa = {...}</code> : membuat dictionary dengan dua pasangan.`,
         `<code>siswa["nama"]</code> : mengambil nilai milik kunci <code>"nama"</code> (<code>Siti</code>).`,
         `<code>print(...)</code> : menampilkan nilai itu.`],
        `<code>Siti</code>`,
        [`Mengakses kunci yang tidak ada (<code>d["email"]</code>) memicu <code>KeyError</code>; pakai <code>.get()</code> atau periksa dengan <code>in</code>.`,
         `Lupa kutip pada kunci teks (<code>d[nama]</code> mencari variabel bernama <code>nama</code>).`,
         `Mengubah dictionary saat sedang diulang dengan <code>for</code>.`]);

    R(16, `Comprehension adalah cara ringkas membangun list, dictionary, atau set baru dari data yang sudah ada dalam satu baris, menggantikan loop <code>for</code> + <code>append</code>.`,
        [`List: <code>[ekspresi for item in iterable]</code>. Dictionary: <code>{k: v for item in iterable}</code>. Set: <code>{ekspresi for item in iterable}</code>.`,
         `Tambahkan <code>if</code> di akhir untuk menyaring: <code>[x for x in data if x % 2 == 0]</code>.`,
         `Dua <code>for</code> dalam satu comprehension berarti loop bersarang (<code>for</code> pertama adalah loop luar).`],
        [`<code>range(1, 4)</code> : menghasilkan 1, 2, 3.`,
         `<code>{x: x**2 for x in ...}</code> : tiap x menjadi kunci dan kuadratnya menjadi nilai.`,
         `<code>print(kuadrat)</code> : mencetak dictionary hasilnya.`],
        `<code>{1: 1, 2: 4, 3: 9}</code>`,
        [`Mencampur kurung: list memakai <code>[ ]</code>, dictionary dan set memakai <code>{ }</code>.`,
         `Menulis <code>if</code> di tempat yang salah: penyaring ada di belakang <code>for</code>, bukan di depan.`,
         `Comprehension terlalu panjang dan sulit dibaca; pecah menjadi loop biasa bila perlu.`]);

    R(15, `Exception handling menangani error saat program berjalan agar tidak langsung berhenti. Kode berisiko ditaruh di <code>try</code>, dan reaksi terhadap error ditulis di <code>except</code>.`,
        [`<code>try:</code> blok yang dipantau; <code>except JenisError:</code> dijalankan bila error itu terjadi.`,
         `<code>else:</code> jalan bila tidak ada error; <code>finally:</code> selalu jalan, apa pun yang terjadi.`,
         `Tangkap jenis error sespesifik mungkin (<code>ValueError</code>, <code>ZeroDivisionError</code>, <code>KeyError</code>) dan <code>except Exception as e</code> hanya sebagai jaring terakhir.`],
        [`<code>try:</code> : mulai blok yang dipantau.`,
         `<code>hasil = 10 / 0</code> : pembagian dengan nol memicu <code>ZeroDivisionError</code>.`,
         `<code>except ZeroDivisionError:</code> : menangkap error itu, program tidak berhenti.`,
         `<code>print("Tidak bisa dibagi nol!")</code> : pesan untuk pengguna.`],
        `<code>Tidak bisa dibagi nol!</code>`,
        [`<code>except:</code> kosong yang menelan semua error sehingga bug tersembunyi.`,
         `Menangkap jenis error yang salah, jadi error aslinya tetap muncul.`,
         `Menaruh terlalu banyak kode di <code>try</code>; cukup baris yang berisiko.`]);

    R(27, `Unit test memeriksa otomatis bahwa fungsi menghasilkan nilai yang diharapkan. Alat paling dasarnya adalah <code>assert</code>.`,
        [`<code>assert kondisi</code> diam bila kondisi benar dan memicu <code>AssertionError</code> bila salah.`,
         `Tulis pesan dengan <code>assert kondisi, "pesan"</code> agar kegagalan mudah dipahami.`,
         `Uji juga kasus batas (nilai 0, negatif, kosong), bukan hanya kasus mudah.`],
        [`<code>def kali(a, b): return a * b</code> : fungsi yang diuji.`,
         `<code>assert kali(2, 3) == 6</code> : menyatakan bahwa hasilnya harus 6.`,
         `<code>print("Test Lolos!")</code> : hanya tercapai bila semua assert di atasnya benar.`],
        `<code>Test Lolos!</code>`,
        [`Menulis <code>=</code> alih-alih <code>==</code> di dalam assert.`,
         `Mengira <code>assert</code> mencetak sesuatu; ia hanya bersuara saat gagal.`,
         `Menguji dengan nilai yang sama dengan isi fungsi sehingga tes tidak bisa gagal.`]);

    R(26, `Regular expression (regex) adalah pola karakter untuk mencari, memeriksa, dan mengganti teks. Python menyediakannya lewat modul <code>re</code>.`,
        [`<code>re.findall(pola, teks)</code> mengembalikan semua kecocokan sebagai list; <code>re.search</code> mengembalikan kecocokan pertama; <code>re.sub</code> mengganti teks yang cocok.`,
         `Pola dasar: <code>\\d</code> digit, <code>\\w</code> huruf/angka, <code>+</code> satu atau lebih, <code>.</code> sembarang karakter.`,
         `Tulis pola sebagai raw string <code>r'...'</code> agar tanda <code>\\</code> tidak dianggap escape.`],
        [`<code>import re</code> : memuat modul regex.`,
         `<code>r'\\d+'</code> : pola satu atau lebih digit berurutan.`,
         `<code>re.findall(...)</code> : mencari semua deret digit di teks <code>'Umur saya 25 tahun'</code>.`,
         `<code>print(hasil)</code> : mencetak list hasilnya.`],
        `<code>['25']</code>`,
        [`Lupa awalan <code>r</code> pada pola sehingga <code>\\d</code> bermasalah.`,
         `Mengira <code>findall</code> mengembalikan angka; hasilnya list berisi <b>string</b>.`,
         `Pola terlalu rakus (<code>.*</code>) sehingga menangkap lebih dari yang dimaksud.`]);

    R(23, `File I/O adalah membaca dan menulis berkas teks di penyimpanan. Python membukanya dengan <code>open()</code>, dan blok <code>with</code> menutup berkas otomatis.`,
        [`Mode: <code>"r"</code> baca, <code>"w"</code> tulis (menimpa isi lama), <code>"a"</code> tambah di akhir.`,
         `<code>with open(...) as f:</code> menjamin file tertutup walau terjadi error.`,
         `Di browser, penyimpanan file bersifat sementara dan hilang saat halaman dimuat ulang.`],
        [`<code>with open("test.txt", "w") as f:</code> : buka (atau buat) file untuk ditulis.`,
         `<code>f.write("Belajar File I/O")</code> : menulis teks ke file; file ditutup setelah blok selesai.`],
        `Program tidak mencetak apa pun; file <code>test.txt</code> berisi <code>Belajar File I/O</code>.`,
        [`Memakai mode <code>"w"</code> pada file penting sehingga isinya terhapus.`,
         `Lupa menutup file (hindari dengan <code>with</code>).`,
         `Membaca file yang belum ada tanpa menangani <code>FileNotFoundError</code>.`]);

    R(101, `<i>Class</i> adalah cetak biru, <i>object</i> adalah hasil cetakannya. Class menggabungkan data (atribut) dan perilaku (method) dalam satu unit.`,
        [`<code>class Nama:</code> mendefinisikan class; <code>__init__(self, ...)</code> adalah konstruktor yang dipanggil otomatis saat objek dibuat.`,
         `<code>self</code> merujuk ke objek itu sendiri; atribut dibuat dengan <code>self.atribut = nilai</code>.`,
         `Method adalah fungsi di dalam class dan parameter pertamanya selalu <code>self</code>.`],
        [`<code>class Mobil:</code> : cetak biru bernama <code>Mobil</code>.`,
         `<code>def __init__(self, merk):</code> : konstruktor, menerima <code>merk</code>.`,
         `<code>self.merk = merk</code> : menyimpan merk sebagai atribut objek.`,
         `<code>def info(self):</code> : method yang bisa dipanggil pada objek.`,
         `<code>m = Mobil("Toyota")</code> : membuat objek; <code>m.info()</code> memanggil method-nya.`],
        `<code>Mobil Toyota</code>`,
        [`Lupa <code>self</code> sebagai parameter pertama method (<code>TypeError</code>).`,
         `Lupa <code>self.</code> saat menyimpan atribut, sehingga datanya hilang setelah <code>__init__</code> selesai.`,
         `Memanggil class tanpa tanda kurung (<code>Mobil</code> alih-alih <code>Mobil("Toyota")</code>).`]);

    R(34, `Serialisasi mengubah objek data menjadi teks atau bytes untuk disimpan atau dikirim, dan deserialisasi mengembalikannya. Dua pilihan utama: <code>json</code> dan <code>pickle</code>.`,
        [`<b>JSON</b>: teks universal yang bisa dibaca manusia dan semua bahasa; hanya mendukung tipe dasar (dict, list, str, angka, bool, None).`,
         `<b>pickle</b>: biner khusus Python yang mendukung hampir semua objek, tetapi <b>jangan pernah</b> membuka pickle dari sumber tak tepercaya (bisa menjalankan kode jahat).`,
         `Akhiran <code>s</code> (<code>dumps</code>, <code>loads</code>) bekerja dengan string/bytes; tanpa <code>s</code> (<code>dump</code>, <code>load</code>) bekerja dengan file.`],
        [`<code>import json</code> : memuat modul.`,
         `<code>data = {...}</code> : dictionary Python.`,
         `<code>json.dumps(data)</code> : mengubahnya menjadi string JSON.`,
         `<code>print(js_str)</code> : mencetak string itu (kunci memakai kutip ganda).`],
        `<code>{"nama": "Rafi", "level": 34}</code>`,
        [`Mencampur <code>dumps</code> dan <code>dump</code> (string vs file).`,
         `Mencoba menyimpan tipe yang tak didukung JSON (mis. set) sehingga <code>TypeError</code>.`,
         `Memuat pickle dari sumber yang tidak dipercaya.`]);

    R(13, `<code>*args</code> dan <code>**kwargs</code> membuat fungsi menerima jumlah argumen yang fleksibel.`,
        [`<code>*args</code> menampung semua argumen posisi dalam sebuah <b>tuple</b>.`,
         `<code>**kwargs</code> menampung semua argumen berkata kunci dalam sebuah <b>dictionary</b>.`,
         `Urutan parameter: biasa, lalu <code>*args</code>, lalu <code>**kwargs</code>.`],
        [`<code>def total_semua(*args):</code> : <code>args</code> berisi semua argumen sebagai tuple.`,
         `<code>return sum(args)</code> : menjumlahkan semua isinya.`,
         `<code>total_semua(1, 2, 3, 4)</code> : dipanggil dengan empat argumen.`],
        `<code>10</code>`,
        [`Menganggap <code>args</code> sebagai list (ia tuple).`,
         `Lupa tanda <code>*</code> atau <code>**</code> pada definisi.`,
         `Menaruh parameter biasa setelah <code>*args</code> sehingga harus dipanggil dengan nama.`]);

    R(14, `Pemrograman fungsional memproses koleksi dengan fungsi: <code>map()</code> mengubah setiap elemen, <code>filter()</code> menyaring elemen, dan <code>lambda</code> menulis fungsi kecil satu baris tanpa nama.`,
        [`<code>map(fungsi, data)</code> menerapkan fungsi ke tiap elemen; <code>filter(fungsi, data)</code> mempertahankan elemen yang fungsinya bernilai True.`,
         `Keduanya mengembalikan iterator, jadi bungkus dengan <code>list(...)</code> untuk melihat hasilnya.`,
         `<code>lambda x: x * 2</code> sama dengan <code>def f(x): return x * 2</code>.`],
        [`<code>angka = [1, 2, 3, 4]</code> : data awal.`,
         `<code>lambda x: x**2</code> : fungsi yang mengkuadratkan.`,
         `<code>list(map(...))</code> : menerapkan lambda ke tiap angka lalu menjadikannya list.`],
        `<code>[1, 4, 9, 16]</code>`,
        [`Mencetak hasil <code>map</code>/<code>filter</code> langsung (tampil <code>&lt;map object ...&gt;</code>).`,
         `Memakai lambda untuk logika panjang; fungsi biasa lebih mudah dibaca.`,
         `Mengira <code>filter</code> mengubah nilai (ia hanya menyaring).`]);

    R(33, `Type hint menambahkan anotasi tipe pada parameter, nilai kembalian, dan variabel. Python tidak memaksanya saat berjalan, tetapi editor dan alat analisis statis (mis. mypy) memakainya untuk menangkap kesalahan lebih awal.`,
        [`Format: <code>def f(x: int) -> str:</code>; variabel: <code>umur: int = 20</code>.`,
         `Dari modul <code>typing</code>: <code>List</code>, <code>Dict</code>, <code>Optional</code>, <code>Union</code>, <code>Callable</code>, <code>Any</code>. Python 3.9+ juga menerima <code>list[int]</code> langsung.`,
         `<code>Optional[str]</code> berarti <code>str</code> atau <code>None</code>.`],
        [`<code>from typing import List</code> : memuat tipe koleksi.`,
         `<code>skor: List[int]</code> : parameter harus berupa list angka bulat.`,
         `<code>-&gt; float</code> : fungsi mengembalikan float.`,
         `<code>print(proses_data([80, 90, 100]))</code> : pemanggilan untuk mencoba fungsinya.`],
        `<code>90.0</code>`,
        [`Mengira type hint menolak tipe yang salah saat dijalankan (tidak).`,
         `Lupa mengimpor <code>List</code>/<code>Optional</code> dari <code>typing</code>.`,
         `Menulis <code>-&gt;</code> tanpa tipe sesudahnya.`],
        `from typing import List\n\ndef proses_data(skor: List[int]) -> float:\n    return sum(skor) / len(skor)\n\nprint(proses_data([80, 90, 100]))  # 90.0`);

    /* ===== ADVANCED ===== */
    R(28, `Pewarisan (inheritance) membuat class anak otomatis memiliki atribut dan method class induk, lalu menambah atau mengubahnya sesuai kebutuhan.`,
        [`Sintaks: <code>class Anak(Induk):</code>. Anak bisa memakai semua method induk.`,
         `<code>super().__init__(...)</code> memanggil konstruktor induk agar atribut induk ikut dibuat.`,
         `Method dengan nama sama di anak <b>menimpa</b> (override) milik induk.`],
        [`<code>class Induk:</code> + <code>__init__</code> : menyimpan <code>nama</code>; <code>sapa()</code> memakainya.`,
         `<code>class Anak(Induk):</code> : Anak mewarisi semua milik Induk.`,
         `<code>super().__init__(nama)</code> : meminta Induk menyiapkan atribut <code>nama</code>.`,
         `<code>self.umur = umur</code> : atribut tambahan khusus Anak.`,
         `<code>a.sapa()</code> : method milik Induk, dipanggil lewat objek Anak.`],
        `<code>Halo, Dina</code> lalu <code>10</code>`,
        [`Lupa <code>super().__init__()</code> sehingga atribut induk tidak pernah dibuat (<code>AttributeError</code>).`,
         `Salah menulis kurung: <code>class Anak(Induk)</code>, bukan <code>class Anak[Induk]</code>.`,
         `Memakai pewarisan untuk hubungan yang bukan "adalah-sebuah" (lebih baik komposisi).`],
        `class Induk:\n    def __init__(self, nama):\n        self.nama = nama\n    def sapa(self):\n        return f"Halo, {self.nama}"\n\nclass Anak(Induk):\n    def __init__(self, nama, umur):\n        super().__init__(nama)\n        self.umur = umur\n\na = Anak("Dina", 10)\nprint(a.sapa())   # Halo, Dina\nprint(a.umur)     # 10`);

    R(18, `Dunder (<i>double underscore</i>) method adalah method khusus berawalan dan berakhiran <code>__</code> yang dipanggil Python otomatis agar objek buatanmu bekerja dengan fungsi dan operator bawaan.`,
        [`<code>__str__</code> menentukan teks untuk <code>print(objek)</code>; <code>__repr__</code> representasi untuk programmer.`,
         `<code>__len__</code> dipakai <code>len(objek)</code>; <code>__add__</code> dipakai operator <code>+</code>; <code>__eq__</code> dipakai operator <code>==</code>.`,
         `Method ini jarang dipanggil langsung; Python yang memanggilnya.`],
        [`<code>class Buku:</code> + <code>__init__</code> : menyimpan <code>judul</code>.`,
         `<code>def __str__(self):</code> : dipanggil saat objek dicetak.`,
         `<code>return f"Buku: {self.judul}"</code> : teks yang tampil (harus <b>dikembalikan</b>, bukan dicetak).`,
         `<code>print(b)</code> : Python memanggil <code>b.__str__()</code> otomatis.`],
        `<code>Buku: Python</code>`,
        [`<code>__str__</code> memakai <code>print</code> alih-alih <code>return</code> (error <code>TypeError</code>).`,
         `Salah ejaan nama dunder (<code>__str</code>, <code>_str_</code>) sehingga tidak dikenali.`,
         `<code>__eq__</code> tanpa memeriksa tipe lawan bandingnya.`]);

    R(17, `Context manager mengatur persiapan dan pembersihan sumber daya (file, koneksi, kunci) secara rapi lewat <code>with</code>, sehingga pembersihan pasti terjadi walau ada error.`,
        [`Sebuah class menjadi context manager bila punya <code>__enter__</code> (dijalankan di awal blok) dan <code>__exit__</code> (dijalankan di akhir).`,
         `Nilai yang dikembalikan <code>__enter__</code> menjadi variabel setelah <code>as</code>: <code>with Kelas() as x:</code>.`,
         `<code>__exit__(self, exc_type, exc_val, exc_tb)</code> menerima info error; bila mengembalikan <code>True</code>, error tersebut diredam.`],
        [`<code>class Timer:</code> : class context manager.`,
         `<code>__enter__</code> : mencetak <code>Mulai</code> saat blok <code>with</code> dimasuki.`,
         `<code>__exit__</code> : mencetak <code>Selesai</code> saat blok berakhir, normal maupun error.`,
         `<code>with Timer():</code> : blok yang diapit; <code>pass</code> berarti tidak melakukan apa-apa.`],
        `<code>Mulai</code> lalu <code>Selesai</code>`,
        [`<code>__exit__</code> dengan jumlah parameter yang salah (harus empat termasuk <code>self</code>).`,
         `Mengembalikan <code>True</code> di <code>__exit__</code> tanpa sengaja sehingga error tersembunyi.`,
         `Lupa <code>return self</code> di <code>__enter__</code> padahal memakai <code>as</code>.`]);

    R(22, `Closure adalah fungsi bagian dalam yang tetap mengingat variabel dari fungsi luarnya, walau fungsi luar sudah selesai dijalankan.`,
        [`Fungsi luar membuat dan mengembalikan fungsi dalam (tanpa tanda kurung, karena yang dikembalikan adalah fungsinya).`,
         `Variabel fungsi luar yang dipakai fungsi dalam "terkunci" di dalam closure.`,
         `<code>nonlocal nama</code> diperlukan bila fungsi dalam ingin <b>mengubah</b> (bukan hanya membaca) variabel fungsi luar.`],
        [`<code>def pengali(faktor):</code> : fungsi luar yang menerima faktor.`,
         `<code>def kali(x): return x * faktor</code> : fungsi dalam memakai <code>faktor</code> dari luar.`,
         `<code>return kali</code> : mengembalikan fungsinya, bukan hasilnya.`,
         `<code>dua_kali = pengali(2)</code> : menghasilkan fungsi dengan faktor 2 yang diingat.`,
         `<code>dua_kali(5)</code> : 5 * 2.`],
        `<code>10</code>`,
        [`Menulis <code>return kali()</code> (memanggil) alih-alih <code>return kali</code>.`,
         `Mengubah variabel luar tanpa <code>nonlocal</code> (<code>UnboundLocalError</code>).`,
         `Membuat closure di dalam loop sehingga semuanya memakai nilai variabel loop terakhir.`]);

    R(102, `Decorator adalah fungsi yang menerima fungsi lain, membungkusnya dengan perilaku tambahan, lalu mengembalikan pembungkus (<i>wrapper</i>). Pondasinya: fungsi adalah objek yang bisa disimpan di variabel dan dikirim sebagai argumen.`,
        [`<code>@nama</code> di atas <code>def</code> sama dengan <code>f = nama(f)</code>.`,
         `Wrapper memakai <code>*args, **kwargs</code> agar cocok dengan fungsi apa pun dan mengembalikan hasil fungsi asli.`,
         `<code>functools.wraps(func)</code> menjaga nama dan dokumentasi fungsi asli.`],
        [`<code>def log(func):</code> : dekorator menerima fungsi yang dibungkus.`,
         `<code>def wrapper(*args, **kwargs):</code> : pembungkus yang menerima argumen apa saja.`,
         `<code>print("Memanggil", func.__name__)</code> : perilaku tambahan sebelum fungsi asli.`,
         `<code>return func(*args, **kwargs)</code> : menjalankan fungsi asli dan meneruskan hasilnya.`,
         `<code>@log</code> di atas <code>tambah</code> : mengganti <code>tambah</code> dengan versi pembungkusnya.`],
        `<code>Memanggil tambah</code> lalu <code>5</code>`,
        [`Wrapper lupa <code>return</code> sehingga hasil fungsi asli hilang (menjadi <code>None</code>).`,
         `Dekorator tidak mengembalikan <code>wrapper</code>.`,
         `Menumpuk dekorator tanpa tahu urutannya: yang paling dekat dengan <code>def</code> dijalankan lebih dulu.`]);

    R(30, `Decorator berargumen adalah decorator yang menerima pengaturan sendiri, misalnya <code>@ulang(3)</code>. Ia butuh tiga lapis fungsi bersarang.`,
        [`Lapis 1 menerima argumen dekorator (<code>n</code>), lapis 2 menerima fungsi yang dibungkus, lapis 3 adalah wrapper.`,
         `<code>@ulang(3)</code> pertama memanggil <code>ulang(3)</code>, lalu hasilnya (sebuah dekorator) dipasang ke fungsi.`,
         `Wrapper tetap memakai <code>*args, **kwargs</code> dan sebaiknya mengembalikan hasil fungsi asli.`],
        [`<code>def ulang(n):</code> : lapis luar, menyimpan jumlah ulangan.`,
         `<code>def dekorator(func):</code> : lapis tengah, menerima fungsi target.`,
         `<code>def wrapper(*args, **kwargs):</code> : lapis dalam, berisi perilaku tambahan.`,
         `<code>for _ in range(n): func(...)</code> : menjalankan fungsi asli sebanyak n kali.`,
         `<code>@ulang(3)</code> : memasang dekorator itu pada <code>sapa</code>.`],
        `<code>Halo</code> tercetak tiga kali.`,
        [`Menulis <code>@ulang</code> tanpa kurung padahal dekoratornya butuh argumen.`,
         `Kurang satu lapis fungsi sehingga pemasangan error.`,
         `Lupa mengembalikan <code>wrapper</code> dan <code>dekorator</code> di tingkat masing-masing.`],
        `def ulang(n):\n    def dekorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                func(*args, **kwargs)\n        return wrapper\n    return dekorator\n\n@ulang(3)\ndef sapa():\n    print("Halo")\n\nsapa()   # Halo tercetak 3 kali`);

    R(20, `Enkapsulasi melindungi data objek dan mengontrol cara membaca serta mengubahnya. <code>@property</code> membuat method terlihat seperti atribut biasa.`,
        [`Awalan <code>_</code> (<code>self._saldo</code>) menandai atribut internal yang tidak seharusnya disentuh dari luar.`,
         `<code>@property</code> adalah getter: <code>a.saldo</code> tanpa kurung memanggil methodnya.`,
         `<code>@nama.setter</code> mengatur validasi saat nilai diubah: <code>a.saldo = 500</code>. Tanpa setter, atribut bersifat read-only.`],
        [`<code>self._saldo = saldo</code> : menyimpan nilai di atribut internal.`,
         `<code>@property def saldo(self):</code> : getter yang mengembalikan <code>_saldo</code>.`,
         `<code>@saldo.setter def saldo(self, nilai):</code> : dipanggil saat <code>a.saldo = ...</code>.`,
         `<code>raise ValueError(...)</code> : menolak nilai negatif sebelum menyimpan.`],
        `<code>1000</code> lalu <code>500</code>`,
        [`Nama setter berbeda dari nama property (harus sama persis).`,
         `Setter tersimpan ke <code>self.saldo</code> (memanggil dirinya sendiri tanpa henti); simpan ke <code>self._saldo</code>.`,
         `Memanggil property dengan kurung (<code>a.saldo()</code>).`],
        `class Akun:\n    def __init__(self, saldo):\n        self._saldo = saldo\n\n    @property\n    def saldo(self):\n        return self._saldo\n\n    @saldo.setter\n    def saldo(self, nilai):\n        if nilai < 0:\n            raise ValueError("Saldo tidak boleh negatif")\n        self._saldo = nilai\n\na = Akun(1000)\nprint(a.saldo)   # 1000\na.saldo = 500\nprint(a.saldo)   # 500`);

    R(19, `Dataclass adalah class untuk menyimpan data. Dekorator <code>@dataclass</code> otomatis membuatkan <code>__init__</code>, <code>__repr__</code>, dan <code>__eq__</code> dari daftar atribut.`,
        [`Atribut ditulis sebagai anotasi tipe di badan class: <code>nama: str</code>, <code>harga: int</code>.`,
         `Dua objek dataclass dengan isi sama dianggap sama oleh <code>==</code>.`,
         `Atribut boleh punya nilai default (<code>port: int = 8000</code>).`],
        [`<code>from dataclasses import dataclass</code> : memuat dekorator.`,
         `<code>@dataclass</code> : dipasang tepat di atas class.`,
         `<code>nama: str</code> dan <code>harga: int</code> : dua field beserta tipenya.`,
         `<code>Produk("Laptop", 5000000)</code> : konstruktor sudah otomatis tersedia.`],
        `<code>Produk(nama='Laptop', harga=5000000)</code>`,
        [`Lupa memasang <code>@dataclass</code> sehingga <code>Produk(...)</code> menolak argumen.`,
         `Menulis field tanpa tipe (<code>nama = str</code>) sehingga tidak dianggap field.`,
         `Default berupa list/dict (<code>x: list = []</code>); gunakan <code>field(default_factory=list)</code>.`]);

    /* ===== EXPERT ===== */
    R(38, `Protokol iterator menjelaskan cara kerja <code>for</code> di balik layar. Class sendiri bisa dibuat <b>iterable</b> dengan dua method: <code>__iter__</code> dan <code>__next__</code>.`,
        [`<code>__iter__()</code> mengembalikan objek iterator (sering cukup <code>return self</code>).`,
         `<code>__next__()</code> mengembalikan elemen berikutnya, dan melempar <code>StopIteration</code> saat habis.`,
         `Loop <code>for</code> memanggil <code>__next__</code> berulang sampai <code>StopIteration</code>.`],
        [`<code>__init__</code> : menyimpan batas dan posisi awal <code>sekarang = 0</code>.`,
         `<code>__iter__</code> : mengembalikan dirinya sendiri sebagai iterator.`,
         `<code>if self.sekarang &gt;= self.batas: raise StopIteration</code> : tanda bahwa data habis.`,
         `Selain itu: simpan nilai, naikkan <code>sekarang</code>, kembalikan nilai.`,
         `<code>for v in HitungMaju(3):</code> : mengulang sampai habis.`],
        `<code>0</code>, <code>1</code>, <code>2</code> (tiga baris)`,
        [`Lupa melempar <code>StopIteration</code> sehingga loop tidak pernah berhenti.`,
         `Tidak menaikkan posisi di <code>__next__</code> (mengembalikan nilai yang sama selamanya).`,
         `Mengira iterator bisa dipakai ulang; setelah habis ia perlu dibuat baru.`],
        `class HitungMaju:\n    def __init__(self, batas):\n        self.batas = batas\n        self.sekarang = 0\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.sekarang >= self.batas:\n            raise StopIteration\n        val = self.sekarang\n        self.sekarang += 1\n        return val\n\nfor v in HitungMaju(3):\n    print(v)   # 0 1 2`);

    R(24, `Generator adalah fungsi yang menghasilkan data satu per satu dengan <code>yield</code> tanpa menyimpan semuanya di memori (<i>lazy evaluation</i>).`,
        [`<code>yield</code> mengeluarkan satu nilai lalu <b>menjeda</b> fungsi; panggilan berikutnya melanjutkan dari titik jeda.`,
         `Memanggil fungsi generator mengembalikan objek generator; ambil nilainya dengan <code>for</code> atau <code>next()</code>.`,
         `<i>Generator expression</i> memakai kurung biasa: <code>(x for x in range(3))</code>.`],
        [`<code>def hitung(n):</code> : fungsi generator karena berisi <code>yield</code>.`,
         `<code>for i in range(n): yield i</code> : mengeluarkan 0, 1, 2 satu per satu.`,
         `<code>for val in hitung(3):</code> : meminta nilai satu per satu lalu mencetaknya.`,
         `<code>(x for x in range(3))</code> : versi ringkas yang berperan sama.`],
        `<code>0</code>, <code>1</code>, <code>2</code>`,
        [`Memakai <code>return</code> alih-alih <code>yield</code> (fungsi biasa, bukan generator).`,
         `Mengulang generator yang sudah habis: ia tidak bisa dipakai dua kali.`,
         `Mencetak objek generator langsung (tampil <code>&lt;generator object ...&gt;</code>).`]);

    R(21, `Descriptor adalah objek yang mengatur bagaimana sebuah atribut dibaca dan ditulis, sehingga logika validasi bisa dipakai ulang di banyak class. Inilah mekanisme di balik <code>@property</code>.`,
        [`Sebuah class menjadi descriptor bila punya <code>__get__</code> dan/atau <code>__set__</code>.`,
         `Descriptor dipasang sebagai <b>atribut class</b> pada class lain; lalu ia mencegat akses ke atribut itu pada objek.`,
         `<code>__set_name__(self, owner, name)</code> memberi tahu descriptor nama atribut tempatnya dipasang.`],
        [`<code>class Positif:</code> : descriptor yang menolak angka negatif.`,
         `<code>__set_name__</code> : menyimpan nama atribut (<code>harga</code>).`,
         `<code>__set__</code> : dipanggil saat <code>p.harga = ...</code>; memvalidasi lalu menyimpan ke <code>instance.__dict__</code>.`,
         `<code>__get__</code> : dipanggil saat <code>p.harga</code> dibaca.`,
         `<code>harga = Positif()</code> di class <code>Produk</code> : memasang descriptor.`],
        `<code>100</code> lalu <code>Harus positif</code>`,
        [`Menyimpan nilai di dalam descriptor itu sendiri (dibagi semua objek); simpan di <code>instance.__dict__</code>.`,
         `Memasang descriptor di <code>__init__</code> lewat <code>self.x = Positif()</code> (harus di tingkat class).`,
         `Lupa <code>__get__</code> sehingga membaca atribut mengembalikan objek descriptor.`],
        `class Positif:\n    def __set_name__(self, owner, name):\n        self.nama = name\n    def __get__(self, instance, owner):\n        return instance.__dict__[self.nama]\n    def __set__(self, instance, value):\n        if value < 0:\n            raise ValueError("Harus positif")\n        instance.__dict__[self.nama] = value\n\nclass Produk:\n    harga = Positif()\n    def __init__(self, harga):\n        self.harga = harga\n\np = Produk(100)\nprint(p.harga)      # 100\ntry:\n    p.harga = -5\nexcept ValueError as e:\n    print(e)        # Harus positif`);

    R(25, `Asyncio menjalankan banyak tugas yang banyak menunggu (jaringan, file) secara bergantian dalam satu thread, tanpa saling memblokir.`,
        [`<code>async def</code> mendefinisikan <b>coroutine</b>; memanggilnya hanya membuat objek coroutine, belum menjalankan.`,
         `<code>await</code> menunggu coroutine/jeda selesai sambil membiarkan tugas lain berjalan; hanya boleh di dalam <code>async def</code>.`,
         `<code>asyncio.run(main())</code> adalah titik masuk yang menjalankan coroutine dari kode biasa.`],
        [`<code>async def main():</code> : coroutine utama.`,
         `<code>await asyncio.sleep(0.1)</code> : jeda tanpa memblokir tugas lain.`,
         `<code>print("Async Selesai")</code> : berjalan setelah jeda.`,
         `<code>asyncio.run(main())</code> : menjalankan coroutine sampai selesai.`],
        `<code>Mulai</code> lalu <code>Async Selesai</code>`,
        [`Memanggil <code>main()</code> tanpa <code>await</code>/<code>asyncio.run</code> (coroutine tidak pernah jalan).`,
         `Memakai <code>time.sleep</code> alih-alih <code>await asyncio.sleep</code> sehingga seluruh program ikut berhenti.`,
         `Menulis <code>await</code> di fungsi biasa (<code>SyntaxError</code>).`],
        `import asyncio\n\nasync def main():\n    print("Mulai")\n    await asyncio.sleep(0.1)\n    print("Async Selesai")\n\nasyncio.run(main())`);

    R(93, `<code>asyncio.TaskGroup</code> (Python 3.11+) menjalankan beberapa coroutine bersamaan secara terstruktur: blok <code>async with</code> baru selesai setelah semua tugas di dalamnya selesai.`,
        [`<code>tg.create_task(coroutine)</code> mendaftarkan tugas ke grup.`,
         `Bila satu tugas gagal, tugas lain dibatalkan otomatis dan error dikumpulkan dalam <code>ExceptionGroup</code> (ditangkap dengan <code>except*</code>).`,
         `Lebih aman daripada <code>asyncio.gather()</code> karena siklus hidup dan pembatalan tugas dikelola otomatis.`],
        [`<code>async def tugas(nama, detik):</code> : coroutine yang menunggu lalu mencetak.`,
         `<code>async with asyncio.TaskGroup() as tg:</code> : membuka grup tugas.`,
         `<code>tg.create_task(...)</code> : dua tugas berjalan bersamaan.`,
         `Baris setelah blok <code>with</code> : baru jalan setelah kedua tugas selesai; <code>t1.result()</code> mengambil hasil.`],
        `<code>Selesai: B</code>, <code>Selesai: A</code>, lalu <code>Semua selesai: A B</code>`,
        [`Memakai <code>TaskGroup</code> tanpa <code>async with</code>.`,
         `Menjalankan di Python lama (&lt; 3.11) yang belum punya <code>TaskGroup</code>.`,
         `Menangkap error dengan <code>except</code> biasa padahal grup melempar <code>ExceptionGroup</code> (pakai <code>except*</code>).`],
        `import asyncio\n\nasync def tugas(nama, detik):\n    await asyncio.sleep(detik)\n    print("Selesai:", nama)\n    return nama\n\nasync def main():\n    async with asyncio.TaskGroup() as tg:\n        t1 = tg.create_task(tugas("A", 0.2))\n        t2 = tg.create_task(tugas("B", 0.1))\n    print("Semua selesai:", t1.result(), t2.result())\n\nasyncio.run(main())`);

    R(29, `Python mengelola memori otomatis: setiap objek menghitung berapa nama yang menunjuk padanya (<i>reference count</i>), dan objek dibuang saat hitungannya nol. Modul <code>gc</code> menangani siklus referensi yang tidak bisa dibersihkan penghitung biasa.`,
        [`<code>sys.getrefcount(x)</code> menampilkan jumlah referensi (selalu +1 karena argumennya sendiri).`,
         `<code>del x</code> menghapus <b>nama</b>, bukan memaksa objek hilang; objek hilang bila tak ada referensi lagi.`,
         `<code>gc.collect()</code> memicu pembersihan siklus; <code>id(x)</code> memberi identitas objek.`],
        [`<code>import sys</code> : memuat modul sistem.`,
         `<code>x = [1, 2, 3]</code> : list baru, satu nama menunjuknya.`,
         `<code>sys.getrefcount(x)</code> : menghitung referensi (biasanya 2: <code>x</code> dan argumen sementara).`],
        `<code>2</code> (angka bisa berbeda tergantung versi)`,
        [`Mengira <code>del</code> langsung membebaskan memori.`,
         `Menganggap <code>getrefcount</code> persis jumlah variabel (nilainya selalu satu lebih).`,
         `Memanggil <code>gc.collect()</code> terlalu sering sebagai "optimasi" padahal jarang perlu.`]);

    /* ===== PROFESSIONAL ===== */
    R(31, `<code>ThreadPoolExecutor</code> menjalankan beberapa tugas bergantian pada kumpulan thread. Cocok untuk tugas yang banyak menunggu (I/O: jaringan, file), bukan komputasi CPU berat.`,
        [`Berada di modul standar <code>concurrent.futures</code>.`,
         `<code>executor.map(f, data)</code> menjalankan fungsi ke banyak data; <code>executor.submit(f, arg)</code> menjadwalkan satu tugas dan mengembalikan <b>Future</b>.`,
         `<code>future.result()</code> mengambil hasil (menunggu bila belum selesai); <code>max_workers</code> membatasi jumlah thread.`],
        [`<code>from concurrent.futures import ThreadPoolExecutor</code> : memuat kelasnya.`,
         `<code>with ThreadPoolExecutor(max_workers=3) as executor:</code> : kolam thread yang otomatis ditutup.`,
         `<code>executor.map(tugas, [1, 2, 3])</code> : menjalankan <code>tugas</code> untuk tiap angka.`,
         `<code>list(...)</code> : mengumpulkan hasil menurut urutan data.`],
        `<code>[2, 4, 6]</code>`,
        [`Memakai thread untuk komputasi berat (GIL membuatnya tidak lebih cepat; pakai proses).`,
         `Lupa memanggil <code>.result()</code> sehingga error di thread tidak terlihat.`,
         `Mengubah data bersama dari banyak thread tanpa <code>Lock</code>.`]);

    R(32, `<code>ProcessPoolExecutor</code> membagi komputasi berat (CPU-bound) ke beberapa proses terpisah sehingga memanfaatkan banyak inti CPU dan melewati batasan GIL.`,
        [`API-nya sama dengan <code>ThreadPoolExecutor</code> (<code>map</code>, <code>submit</code>, <code>result</code>, <code>max_workers</code>).`,
         `Data dan fungsi dikirim antar proses lewat pickle, jadi fungsi harus didefinisikan di tingkat atas modul (bukan lambda atau fungsi bersarang).`,
         `Pembuatan proses lebih mahal daripada thread; manfaatnya hanya terasa untuk tugas yang cukup berat.`],
        [`<code>def hitung_berat(n):</code> : fungsi komputasi yang akan dibagi ke proses.`,
         `<code>with ProcessPoolExecutor() as ex:</code> : kolam proses, jumlahnya mengikuti inti CPU.`,
         `<code>ex.map(hitung_berat, [2, 3, 4])</code> : tiap angka diproses di proses berbeda.`,
         `<code>print(list(...))</code> : mencetak semua hasil.`],
        `<code>[32, 243, 1024]</code> (di browser, proses tidak didukung sehingga level ini dinilai dari struktur kode)`,
        [`Mengirim lambda atau fungsi bersarang (tidak bisa di-pickle).`,
         `Memakai proses untuk tugas ringan sehingga overhead lebih besar daripada untungnya.`,
         `Lupa pelindung <code>if __name__ == "__main__":</code> pada skrip di Windows/macOS.`]);

    R(35, `Socket adalah antarmuka tingkat rendah untuk komunikasi jaringan TCP/IP. Satu pihak (server) menunggu koneksi, pihak lain (klien) menghubunginya.`,
        [`Server: <code>bind</code> (ikat alamat dan port), <code>listen</code> (mulai menunggu), <code>accept</code> (terima koneksi). Klien: <code>connect</code>.`,
         `Socket hanya mengirim <b>bytes</b>: <code>.encode("utf-8")</code> sebelum <code>send</code>, <code>.decode("utf-8")</code> setelah <code>recv</code>.`,
         `Selalu tutup dengan <code>.close()</code> atau blok <code>with</code>, dan beri <code>settimeout()</code> agar tidak menggantung.`],
        [`<code>import socket</code> : memuat modul.`,
         `<code>socket.AF_INET</code> : keluarga alamat IPv4; <code>socket.SOCK_STREAM</code> : protokol TCP.`,
         `<code>socket.socket(...)</code> : membuat objek socket.`,
         `<code>print(...)</code> : penanda bahwa socket berhasil dibuat.`],
        `<code>Socket TCP berhasil dibuat!</code> (koneksi jaringan nyata tidak tersedia di browser)`,
        [`Mengirim string langsung tanpa <code>encode</code> (<code>TypeError</code>).`,
         `Lupa menutup socket sehingga port tetap terpakai.`,
         `Mengira <code>recv</code> selalu menerima seluruh pesan dalam sekali panggil.`]);

    R(95, `SSL/TLS mengenkripsi komunikasi jaringan dan memverifikasi identitas server lewat sertifikat digital. Python menyediakannya di modul <code>ssl</code>.`,
        [`<code>ssl.create_default_context()</code> membuat konteks dengan pengaturan aman (verifikasi sertifikat aktif).`,
         `<code>context.wrap_socket(sock, server_hostname=...)</code> membungkus socket TCP biasa menjadi socket terenkripsi.`,
         `Jangan pernah menonaktifkan verifikasi sertifikat di produksi; itu membuka serangan Man-in-the-Middle.`],
        [`<code>context = ssl.create_default_context()</code> : konteks aman standar.`,
         `<code>socket.create_connection((host, 443))</code> : sambungan TCP ke port HTTPS.`,
         `<code>context.wrap_socket(...)</code> : handshake TLS terjadi di sini.`,
         `<code>ssock.version()</code> : versi TLS yang dinegosiasikan.`],
        `Misalnya <code>TLSv1.3</code> (butuh internet; tidak berjalan di browser)`,
        [`Mematikan verifikasi (<code>CERT_NONE</code>) agar "tidak error".`,
         `Lupa <code>server_hostname</code> sehingga nama sertifikat tidak diperiksa.`,
         `Tidak menangani <code>ssl.SSLError</code> saat sertifikat kedaluwarsa atau tidak cocok.`]);

    R(37, `Profiling mengukur bagian kode yang paling lambat (<i>bottleneck</i>) supaya optimasi dilakukan pada tempat yang tepat, bukan berdasarkan tebakan.`,
        [`<code>timeit</code> mengukur kecepatan potongan kode kecil dengan mengulanginya banyak kali.`,
         `<code>cProfile</code> menghitung waktu tiap fungsi dalam program; <code>pstats</code> mengurutkan dan menampilkan hasilnya.`,
         `Bandingkan dua pendekatan dengan data dan jumlah ulangan yang sama agar adil.`],
        [`<code>import timeit</code> : memuat modul.`,
         `<code>timeit.timeit("sum(range(100))", number=1000)</code> : menjalankan kode itu 1000 kali dan mengembalikan total detik.`,
         `<code>print(f"Waktu eksekusi: {waktu}")</code> : menampilkan hasil ukur.`],
        `Misalnya <code>Waktu eksekusi: 0.0021</code> (nilai berbeda tiap mesin)`,
        [`Mengukur sekali saja sehingga hasilnya dipengaruhi gangguan sesaat.`,
         `Mengoptimasi kode yang ternyata bukan bottleneck.`,
         `Membandingkan dengan data yang berbeda ukuran.`]);

    R(39, `Logging mencatat peristiwa program dengan tingkat keparahan, jauh lebih terkontrol daripada <code>print</code>. <code>pdb</code> adalah debugger interaktif untuk berhenti di suatu baris dan memeriksa variabel.`,
        [`Tingkat log naik: <code>DEBUG</code>, <code>INFO</code>, <code>WARNING</code>, <code>ERROR</code>, <code>CRITICAL</code>. Pesan di bawah level yang diatur tidak ditampilkan.`,
         `<code>logging.basicConfig(level=..., format=..., filename=...)</code> mengatur level, format, dan tujuan log.`,
         `<code>logging.exception(pesan)</code> di blok <code>except</code> mencatat pesan beserta traceback.`],
        [`<code>import logging</code> : memuat modul.`,
         `<code>logging.basicConfig(level=logging.INFO)</code> : tampilkan pesan INFO ke atas.`,
         `<code>logging.info("Aplikasi berjalan normal")</code> : mencatat satu pesan tingkat INFO.`],
        `<code>INFO:root:Aplikasi berjalan normal</code>`,
        [`Level terlalu tinggi sehingga pesan <code>info</code>/<code>debug</code> tidak muncul.`,
         `Memakai <code>print</code> untuk log produksi (tak ada level, waktu, atau tujuan).`,
         `Meninggalkan <code>pdb.set_trace()</code> di kode yang dirilis.`]);

    R(36, `Metaclass adalah "class dari sebuah class": ia mengatur bagaimana class dibuat, sehingga bisa memvalidasi atau mengubah struktur class saat didefinisikan.`,
        [`Metaclass diturunkan dari <code>type</code>; method <code>__new__(cls, name, bases, attrs)</code> dipanggil saat sebuah class dibuat.`,
         `Dipakai dengan <code>class Contoh(metaclass=MetaKetat):</code>.`,
         `<code>type(nama, (basis,), {atribut})</code> membuat class secara dinamis saat program berjalan.`],
        [`<code>class MetaKetat(type):</code> : metaclass kustom.`,
         `<code>if 'id' not in attrs: raise TypeError(...)</code> : menolak class yang tak punya atribut <code>id</code>.`,
         `<code>super().__new__(cls, name, bases, attrs)</code> : meneruskan pembuatan class sebenarnya.`,
         `<code>class Produk(metaclass=MetaKetat):</code> : lolos karena punya <code>id</code>; class <code>Salah</code> ditolak.`],
        `<code>Produk dibuat</code> lalu <code>Class wajib punya atribut id</code>`,
        [`Lupa <code>return</code> hasil <code>super().__new__(...)</code>.`,
         `Memakai metaclass padahal class decorator atau pewarisan biasa sudah cukup.`,
         `Mencampur dua class dengan metaclass berbeda (konflik metaclass).`],
        `class MetaKetat(type):\n    def __new__(cls, name, bases, attrs):\n        if 'id' not in attrs:\n            raise TypeError("Class wajib punya atribut id")\n        return super().__new__(cls, name, bases, attrs)\n\nclass Produk(metaclass=MetaKetat):\n    id = 1\n\nprint("Produk dibuat")\ntry:\n    class Salah(metaclass=MetaKetat):\n        pass\nexcept TypeError as e:\n    print(e)   # Class wajib punya atribut id`);

    R(48, `Setiap kode Python dapat diurai menjadi pohon sintaks abstrak (AST). Modul <code>ast</code> memungkinkan membaca, memeriksa, bahkan mengubah struktur kode sebelum dijalankan.`,
        [`<code>ast.parse(teks_kode)</code> mengubah string kode menjadi pohon; <code>ast.dump(tree)</code> menampilkannya sebagai teks.`,
         `<code>ast.NodeVisitor</code> membaca pohon (method <code>visit_NamaNode</code>); <code>ast.NodeTransformer</code> mengubahnya.`,
         `Setelah mengubah pohon, jalankan lagi dengan <code>exec(compile(tree, "&lt;ast&gt;", "exec"))</code>.`],
        [`<code>import ast</code> : memuat modul.`,
         `<code>ast.parse("x = 1 + 2")</code> : mengurai kode menjadi pohon <code>Module</code>.`,
         `<code>ast.dump(tree)</code> : mencetak hierarki node (<code>Assign</code>, <code>BinOp</code>, <code>Constant</code>, ...).`],
        `Satu baris panjang yang diawali <code>Module(body=[Assign(...)])</code>`,
        [`Mengubah pohon tanpa memanggil <code>ast.fix_missing_locations</code> sebelum <code>compile</code>.`,
         `Memakai <code>eval</code>/<code>exec</code> pada kode dari pengguna tak tepercaya.`,
         `Tidak memanggil <code>self.generic_visit(node)</code> sehingga node anak tidak dikunjungi.`]);

    /* ===== ARCHITECTURE ===== */
    R(41, `Creational pattern mengatur cara objek dibuat: <b>Singleton</b> (hanya satu instance), <b>Factory</b> (objek dibuat berdasarkan parameter), dan <b>Builder</b> (objek kompleks dirakit bertahap).`,
        [`Singleton: simpan instance di variabel class dan kembalikan yang sama di <code>__new__</code>.`,
         `Factory: fungsi atau class yang memutuskan class konkret mana yang dibuat.`,
         `Builder: tiap method mengatur satu bagian dan mengembalikan <code>self</code> (method chaining); <code>.build()</code> menghasilkan objek akhir.`],
        [`<code>_instance = None</code> : penyimpan satu-satunya instance (di tingkat class).`,
         `<code>__new__(cls)</code> : dipanggil sebelum objek dibuat.`,
         `<code>if cls._instance is None:</code> : buat hanya pada panggilan pertama.`,
         `<code>a is b</code> : membuktikan kedua nama menunjuk objek yang sama.`],
        `<code>True</code>`,
        [`Singleton dipakai untuk semua hal sehingga kode sulit diuji (state global).`,
         `Builder yang lupa <code>return self</code> sehingga chaining putus.`,
         `Factory yang berisi rantai <code>if</code> panjang tanpa jalur untuk tipe tak dikenal.`],
        `class Singleton:\n    _instance = None\n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\na = Singleton()\nb = Singleton()\nprint(a is b)   # True`);

    R(42, `Structural pattern mengatur hubungan antar class: <b>Adapter</b> menjembatani antarmuka yang tidak cocok, <b>Decorator</b> menambah fitur dengan membungkus objek, dan <b>Facade</b> menyederhanakan subsistem rumit di balik satu pintu.`,
        [`Adapter membungkus objek lama dan menerjemahkan method-nya ke antarmuka yang diharapkan.`,
         `Decorator (pola desain, berbeda dari <code>@decorator</code>) membungkus objek yang sama jenisnya dan meneruskan panggilan sambil menambah perilaku.`,
         `Facade menyediakan satu method sederhana yang memanggil banyak subsistem di belakang layar.`],
        [`<code>class Sub1</code> dan <code>class Sub2</code> : dua subsistem terpisah.`,
         `<code>class Facade:</code> : pintu tunggal; <code>__init__</code> membuat kedua subsistem.`,
         `<code>operation()</code> : memanggil keduanya lalu menggabungkan hasil.`,
         `<code>Facade().operation()</code> : klien cukup tahu satu method ini.`],
        `<code>Sub1 siap &amp; Sub2 siap</code>`,
        [`Facade yang menyembunyikan begitu banyak sehingga klien tak bisa mengakses subsistem bila perlu.`,
         `Adapter yang mengubah data tetapi lupa mengembalikan hasil.`,
         `Menumpuk decorator tanpa mempertahankan antarmuka yang sama.`],
        `class Sub1:\n    def action(self):\n        return "Sub1 siap"\n\nclass Sub2:\n    def action(self):\n        return "Sub2 siap"\n\nclass Facade:\n    def __init__(self):\n        self.sub1 = Sub1()\n        self.sub2 = Sub2()\n    def operation(self):\n        return self.sub1.action() + " & " + self.sub2.action()\n\nprint(Facade().operation())   # Sub1 siap & Sub2 siap`);

    R(43, `Behavioral pattern mengatur komunikasi antar objek: <b>Observer</b> (pelanggan diberi tahu otomatis saat ada kejadian), <b>Strategy</b> (algoritma bisa ditukar saat runtime), dan <b>Command</b> (permintaan dibungkus menjadi objek).`,
        [`Observer: subjek menyimpan daftar pelanggan dan memanggil method <code>update()</code> masing-masing saat berubah.`,
         `Strategy: context menerima algoritma (fungsi atau objek) lewat konstruktor dan memakainya di <code>execute</code>.`,
         `Command: objek dengan method <code>execute()</code>; menyimpannya di list memungkinkan antrean dan undo.`],
        [`<code>class StrategyContext:</code> : pemakai strategi.`,
         `<code>__init__(self, strategy)</code> : menyimpan strategi yang dipilih.`,
         `<code>execute(self, val)</code> : menjalankan strategi pada nilai.`,
         `<code>StrategyContext(lambda x: x * 2)</code> : strategi bisa diganti tanpa mengubah context.`],
        `<code>10</code> lalu <code>25</code>`,
        [`Observer yang tidak pernah menghapus pelanggan sehingga memori bocor.`,
         `Strategy yang berisi <code>if</code> bercabang di dalam context (tujuan pola ini justru menghilangkannya).`,
         `Command tanpa cara membatalkan padahal fitur undo diminta.`],
        `class StrategyContext:\n    def __init__(self, strategy):\n        self.strategy = strategy\n    def execute(self, val):\n        return self.strategy(val)\n\nprint(StrategyContext(lambda x: x * 2).execute(5))    # 10\nprint(StrategyContext(lambda x: x ** 2).execute(5))   # 25`);

    R(44, `Dependency Injection (DI) berarti sebuah class tidak membuat sendiri objek yang dibutuhkannya; objek itu disuntikkan dari luar. Hasilnya komponen longgar terikat (<i>loosely coupled</i>) dan mudah diuji. IoC (Inversion of Control) adalah prinsip umumnya.`,
        [`Suntikkan dependensi lewat parameter <code>__init__</code>, bukan dengan membuat objeknya di dalam class.`,
         `Dengan DI, implementasi asli bisa diganti objek palsu (mock) saat pengujian.`,
         `Container IoC sederhana: dictionary yang memetakan nama ke class lalu membuat objeknya saat diminta.`],
        [`<code>class Service</code> dan <code>class MockService</code> : dua implementasi dengan method <code>run</code> yang sama.`,
         `<code>Client.__init__(self, service)</code> : menerima service dari luar.`,
         `<code>Client(Service()).kerja()</code> : memakai service asli.`,
         `<code>Client(MockService()).kerja()</code> : service diganti tanpa mengubah <code>Client</code>.`],
        `<code>OK</code> lalu <code>PALSU</code>`,
        [`Membuat dependensi di dalam constructor (<code>self.service = Service()</code>) sehingga tidak bisa diganti.`,
         `Menyuntikkan terlalu banyak dependensi ke satu class (tanda class terlalu besar).`,
         `Container yang menyembunyikan dependensi sehingga alur program sulit ditelusuri.`],
        `class Service:\n    def run(self):\n        return "OK"\n\nclass MockService:\n    def run(self):\n        return "PALSU"\n\nclass Client:\n    def __init__(self, service):\n        self.service = service\n    def kerja(self):\n        return self.service.run()\n\nprint(Client(Service()).kerja())       # OK\nprint(Client(MockService()).kerja())   # PALSU`);

    R(45, `SOLID adalah lima prinsip perancangan OOP agar kode mudah dipelihara: <b>S</b>ingle Responsibility, <b>O</b>pen/Closed, <b>L</b>iskov Substitution, <b>I</b>nterface Segregation, <b>D</b>ependency Inversion.`,
        [`<b>SRP</b>: satu class hanya punya satu alasan untuk berubah. <b>OCP</b>: terbuka untuk ekstensi, tertutup untuk modifikasi (tambah class turunan, jangan ubah kode inti).`,
         `<b>LSP</b>: objek anak harus bisa menggantikan induk tanpa merusak program. <b>ISP</b>: banyak antarmuka kecil lebih baik daripada satu antarmuka besar.`,
         `<b>DIP</b>: bergantung pada abstraksi (ABC/interface), bukan pada implementasi konkret.`],
        [`<code>class UserReport:</code> : class yang hanya bertugas membuat laporan (SRP).`,
         `<code>generate(self, user)</code> : satu tanggung jawab: menyusun teks laporan.`,
         `Penyimpanan data tidak dicampur di sini; itu tugas class lain.`],
        `<code>Laporan Ani</code>`,
        [`Class "serba bisa" yang mengurus data, tampilan, dan penyimpanan sekaligus.`,
         `Menambah fitur dengan mengubah <code>if/elif</code> di kode inti alih-alih menambah class baru.`,
         `Subclass yang melempar error atau mengubah makna method induk (melanggar LSP).`],
        `# Single Responsibility Principle: satu class, satu tugas\nclass UserReport:\n    def generate(self, user):\n        return f"Laporan {user}"\n\nprint(UserReport().generate("Ani"))   # Laporan Ani`);

    R(46, `Domain-Driven Design (DDD) dan Clean Architecture memisahkan aturan bisnis inti (domain) dari detail teknis seperti database dan framework. Arah ketergantungan selalu menuju ke dalam, ke domain.`,
        [`<b>Entity</b> punya identitas dan aturan bisnis; <b>Value Object</b> ditentukan oleh nilainya dan tidak bisa diubah (immutable); <b>Aggregate Root</b> menjaga konsistensi sekelompok entity.`,
         `<b>Use Case</b> mengatur satu alur bisnis; <b>Repository</b> menyembunyikan cara penyimpanan data (dibahas di level berikutnya); <b>DTO</b> membawa data antar lapisan.`,
         `Domain tidak boleh meng-import apa pun dari lapisan infrastruktur.`],
        [`<code>@dataclass(frozen=True) class Item</code> : value object immutable.`,
         `<code>class OrderEntity:</code> : entity berisi aturan bisnis murni.`,
         `<code>calculate_total(self)</code> : menjumlahkan harga tanpa menyentuh database.`,
         `<code>print(...)</code> : membuktikan domain bisa dijalankan sendiri.`],
        `<code>3500</code>`,
        [`Domain meng-import framework web atau ORM (ketergantungan arah terbalik).`,
         `Value object yang bisa diubah sehingga nilainya berubah diam-diam.`,
         `Menaruh aturan bisnis di endpoint/controller alih-alih di entity.`],
        `from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass Item:\n    nama: str\n    harga: int\n\nclass OrderEntity:\n    def __init__(self, items):\n        self.items = items\n    def calculate_total(self):\n        return sum(i.harga for i in self.items)\n\nprint(OrderEntity([Item("A", 1000), Item("B", 2500)]).calculate_total())   # 3500`);

    R(47, `Repository menyembunyikan cara data disimpan di balik antarmuka koleksi (<code>simpan</code>, <code>cari</code>). Unit of Work membungkus beberapa operasi sebagai satu transaksi: semua berhasil (commit) atau semua dibatalkan (rollback).`,
        [`Repository: class dengan method seperti <code>save</code> dan <code>find_by_id</code>; logika bisnis tidak tahu apakah di baliknya memori, SQL, atau file.`,
         `Unit of Work biasanya berupa context manager: <code>__enter__</code> membuka transaksi, <code>__exit__</code> meng-commit atau rollback sesuai ada tidaknya error.`,
         `Dengan antarmuka yang sama, repository SQL bisa diganti repository memori saat uji.`],
        [`<code>class Repo</code> : penyimpanan sederhana berbasis list.`,
         `<code>class UnitOfWork:</code> : context manager transaksi.`,
         `<code>__enter__</code> : membuat repository lalu <code>return self</code>.`,
         `<code>__exit__(self, exc_type, exc, tb)</code> : bila <code>exc_type</code> ada berarti error, cetak <code>rollback</code>; kalau tidak, <code>commit</code>.`],
        `<code>['pesanan-1']</code> lalu <code>commit</code>`,
        [`Lupa rollback saat terjadi exception sehingga data setengah tersimpan.`,
         `Repository yang membocorkan detail SQL ke lapisan bisnis.`,
         `Membuat Unit of Work berbeda untuk tiap repository yang seharusnya satu transaksi.`],
        `class Repo:\n    def __init__(self):\n        self.data = []\n    def simpan(self, x):\n        self.data.append(x)\n\nclass UnitOfWork:\n    def __enter__(self):\n        self.repo = Repo()\n        return self\n    def __exit__(self, exc_type, exc, tb):\n        print("rollback" if exc_type else "commit")\n        return False\n\nwith UnitOfWork() as uow:\n    uow.repo.simpan("pesanan-1")\n    print(uow.repo.data)   # ['pesanan-1']`);

    R(40, `Level rangkuman fase Architecture: menggabungkan Dependency Injection, kelas abstrak (<code>abc</code>), pola desain, dan kode bersih (PEP 8, docstring, type hint).`,
        [`Class abstrak (<code>ABC</code> + <code>@abstractmethod</code>) menjadi kontrak: ia tidak bisa dibuat langsung dan memaksa turunan mengimplementasikan method-nya.`,
         `Kode bersih: nama jelas, fungsi pendek, docstring, dan type hint.`,
         `Suntikkan dependensi lewat constructor agar mudah diuji dan diganti.`],
        [`<code>class EngineInterface</code> : kontrak untuk semua mesin.`,
         `<code>class Mesin(EngineInterface)</code> : implementasi nyata dengan <code>start()</code>.`,
         `<code>Car.__init__(self, engine)</code> : mobil menerima mesin dari luar.`,
         `<code>Car(Mesin()).drive()</code> : memakai mesin lewat kontraknya.`],
        `<code>Mesin menyala</code>`,
        [`Interface tanpa <code>@abstractmethod</code> sehingga tidak memaksa apa pun.`,
         `Membuat dependensi di dalam constructor.`,
         `Mengabaikan docstring dan type hint pada kode "akhir".`],
        `from abc import ABC, abstractmethod\n\nclass EngineInterface(ABC):\n    @abstractmethod\n    def start(self) -> str:\n        ...\n\nclass Mesin(EngineInterface):\n    def start(self) -> str:\n        return "Mesin menyala"\n\nclass Car:\n    def __init__(self, engine: EngineInterface):\n        self.engine = engine\n    def drive(self) -> str:\n        return self.engine.start()\n\nprint(Car(Mesin()).drive())   # Mesin menyala`);

    /* ===== DATA ENGINEERING ===== */
    R(59, `Pandas lanjutan: mengelompokkan data (<code>groupby</code>), menghitung ringkasan per kelompok (<code>agg</code>), dan fungsi jendela yang menghitung berdasarkan baris di sekitarnya (<code>rank</code>, <code>shift</code>, <code>cumsum</code>, <code>rolling</code>).`,
        [`<code>df.groupby("kolom")["target"].sum()</code>: pecah data per kelompok, hitung, gabungkan hasilnya.`,
         `<code>agg</code> menerima beberapa fungsi sekaligus; <code>transform</code> mengembalikan hasil dengan panjang sama seperti data asli.`,
         `<code>pd.merge(a, b, on="kunci")</code> menggabungkan dua tabel berdasarkan kolom kunci.`],
        [`<code>pd.DataFrame({...})</code> : membuat tabel dari dictionary kolom.`,
         `<code>df.groupby('kategori')</code> : mengelompokkan baris berdasarkan kolom kategori.`,
         `<code>['nilai'].sum()</code> : menjumlahkan kolom nilai di tiap kelompok.`],
        `Kelompok <code>A</code> bernilai <code>30</code> dan <code>B</code> bernilai <code>30</code>`,
        [`Lupa memilih kolom sebelum agregasi sehingga Pandas mencoba menjumlahkan kolom teks.`,
         `Mengira <code>transform</code> dan <code>agg</code> sama: <code>agg</code> memperkecil jumlah baris, <code>transform</code> tidak.`,
         `Memakai loop <code>for</code> pada baris DataFrame padahal ada operasi vektor.`]);

    R(60, `Optimasi Pandas: mengganti loop per baris dengan operasi vektor (dikerjakan sekaligus oleh kode C di NumPy), menghemat memori lewat tipe data yang tepat, dan membaca file besar secara bertahap.`,
        [`Hindari <code>iterrows()</code>; operasi seperti <code>df["a"] + df["b"]</code> berlaku ke seluruh kolom sekaligus dan jauh lebih cepat.`,
         `<code>astype("category")</code> dan <code>downcast</code> memperkecil memori; <code>memory_usage(deep=True)</code> mengukurnya.`,
         `<code>read_csv(..., chunksize=n)</code> membaca file besar per potongan.`],
        [`<code>pd.DataFrame({'a': range(1000), ...})</code> : tabel dua kolom dengan 1000 baris.`,
         `<code>df['c'] = df['a'] + df['b']</code> : penjumlahan vektor, tanpa loop.`],
        `Kolom <code>c</code> baru berisi jumlah <code>a</code> dan <code>b</code> untuk semua baris.`,
        [`Membangun DataFrame dengan menambah baris satu per satu di dalam loop.`,
         `Menganggap optimasi memori tidak perlu sebelum benar-benar menghitung pemakaiannya.`,
         `Membaca seluruh file raksasa sekaligus padahal bisa dipotong per chunk.`]);

    R(66, `Time series adalah data yang diindeks waktu. Pandas menyediakan indeks tanggal sehingga data bisa diiris, digeser, diubah frekuensinya (resample), dan dihitung rata-rata bergeraknya.`,
        [`<code>pd.date_range(awal, periods=n, freq="D")</code> membuat deretan tanggal; <code>freq</code>: <code>D</code> harian, <code>W</code> mingguan, <code>M</code> bulanan.`,
         `<code>s.resample("W").mean()</code> mengelompokkan data ke frekuensi baru; <code>shift</code>, <code>pct_change</code>, <code>ewm</code> menghitung selisih dan rata-rata bergerak.`,
         `Irisan tanggal memakai label: <code>s["2026-01-01":"2026-01-05"]</code> (kedua ujung ikut).`],
        [`<code>dates = pd.date_range(...)</code> : lima tanggal harian.`,
         `<code>pd.Series([...], index=dates)</code> : nilai dengan indeks tanggal.`,
         `<code>s.resample('W').mean()</code> : rata-rata per minggu.`],
        `Series dengan indeks tanggal mingguan dan rata-rata tiap minggu.`,
        [`Indeks berupa string biasa, bukan tanggal, sehingga <code>resample</code> error.`,
         `Mengira irisan tanggal tidak menyertakan ujung akhir (ia ikut).`,
         `Mengisi data hilang tanpa memahami pola waktunya.`]);

    R(62, `ETL adalah alur data tiga tahap: <b>Extract</b> (ambil dari sumber), <b>Transform</b> (bersihkan dan olah), <b>Load</b> (simpan ke tujuan). Setiap tahap dibuat sebagai fungsi tersendiri supaya mudah diuji.`,
        [`Pisahkan tahap menjadi fungsi <code>extract()</code>, <code>transform(data)</code>, <code>load(data)</code>, lalu satukan dalam satu fungsi orkestrator.`,
         `Catat log dan tangani error per tahap; periksa jumlah baris masuk dan keluar.`,
         `Pemuatan inkremental hanya memproses data yang lebih baru dari penanda terakhir (timestamp).`],
        [`<code>extract()</code> : mengembalikan data mentah (list dictionary).`,
         `<code>transform(data)</code> : membersihkan spasi dengan <code>strip()</code> dan menjadikan huruf kapital.`,
         `<code>load(data)</code> : menyimpan; di contoh cukup mencetak.`],
        `<code>Loaded: [{'id': 1, 'val': 'A'}]</code>`,
        [`Satu fungsi raksasa yang mengerjakan ketiga tahap sehingga sulit diuji.`,
         `Tidak menangani kegagalan di tengah proses sehingga data setengah termuat.`,
         `Memuat ulang seluruh data setiap kali padahal hanya sebagian yang baru.`]);

    R(65, `Apache Airflow menjadwalkan dan memantau alur kerja data. Sebuah alur disebut <b>DAG</b> (Directed Acyclic Graph): kumpulan <i>task</i> dengan urutan ketergantungan tanpa putaran.`,
        [`<code>with DAG(id, start_date=..., schedule="@daily") as dag:</code> mendefinisikan alur dan jadwalnya.`,
         `<code>PythonOperator(task_id=..., python_callable=fungsi)</code> membuat task yang menjalankan fungsi Python.`,
         `<code>t1 &gt;&gt; t2</code> berarti t1 jalan dulu baru t2.`],
        [`<code>from airflow import DAG</code> : memuat kelas DAG.`,
         `<code>with DAG('my_dag', ..., schedule='@daily')</code> : DAG harian bernama <code>my_dag</code>.`,
         `<code>PythonOperator(task_id='t1', python_callable=print)</code> : satu task yang memanggil fungsi <code>print</code>.`],
        `Tidak mencetak apa pun saat dijalankan langsung; Airflow yang menjalankan task sesuai jadwal.`,
        [`Menaruh pekerjaan berat di tingkat atas file DAG (dijalankan tiap penjadwal membaca file).`,
         `Membuat ketergantungan melingkar antar task.`,
         `Mengirim data besar lewat XCom (hanya untuk data kecil).`]);

    R(63, `Great Expectations memeriksa kualitas data dengan aturan yang disebut <i>expectation</i>, misalnya "kolom ini tidak boleh kosong" atau "nilai harus antara 0 dan 100".`,
        [`<code>gx.get_context()</code> membuka konteks kerja; data dimuat ke objek <b>validator</b>.`,
         `Aturan memakai nama berawalan <code>expect_column_values_to_...</code> (<code>not_be_null</code>, <code>be_between</code>, <code>be_unique</code>).`,
         `Hasil validasi punya atribut <code>success</code>; laporan HTML dibuat sebagai <i>Data Docs</i>.`],
        [`<code>import great_expectations as gx</code> : memuat pustaka.`,
         `<code>context = gx.get_context()</code> : titik awal semua operasi.`,
         `Komentar menandai tempat aturan kualitas ditambahkan.`],
        `Tidak mencetak apa pun; konteks siap dipakai untuk membuat validator.`,
        [`Memvalidasi setelah data termuat ke tujuan (seharusnya sebelumnya).`,
         `Aturan terlalu longgar sehingga data kotor tetap lolos.`,
         `Mengabaikan hasil <code>success</code> sehingga pipeline tetap jalan walau data gagal.`]);

    R(61, `PySpark adalah antarmuka Python untuk Apache Spark, mesin pemroses data besar yang membagi pekerjaan ke banyak mesin. Evaluasinya <i>lazy</i>: transformasi baru dijalankan saat ada <b>aksi</b>.`,
        [`<code>SparkSession.builder.appName(...).getOrCreate()</code> membuka sesi.`,
         `Transformasi (<code>filter</code>, <code>withColumn</code>, <code>groupBy</code>) hanya merencanakan; aksi (<code>show</code>, <code>collect</code>, <code>count</code>) memicu eksekusi.`,
         `<code>df.write.parquet(...)</code> menyimpan hasil; <code>spark.stop()</code> menutup sesi.`],
        [`<code>from pyspark.sql import SparkSession</code> : memuat kelas sesi.`,
         `<code>spark = ...getOrCreate()</code> : membuat atau memakai sesi yang ada.`,
         `<code>spark.createDataFrame([...], ["id", "val"])</code> : tabel dari data Python dan nama kolom.`,
         `<code>df.show()</code> : aksi yang menampilkan isi tabel.`],
        `Tabel dua kolom <code>id</code> dan <code>val</code> (di browser, PySpark tidak tersedia sehingga dinilai dari struktur kode)`,
        [`Memakai <code>collect()</code> pada data raksasa sehingga memori habis.`,
         `Mengira baris transformasi langsung berjalan (menunggu aksi).`,
         `Lupa <code>spark.stop()</code> pada skrip yang selesai.`]);

    R(64, `Parquet adalah format file berbasis kolom yang terkompresi dan cepat dibaca. Delta Lake menambahkan transaksi ACID, riwayat versi (<i>time travel</i>), dan operasi update/merge di atas file Parquet.`,
        [`<code>df.to_parquet("file.parquet")</code> dan <code>pd.read_parquet("file.parquet", columns=[...])</code>; membaca hanya kolom yang perlu menghemat memori.`,
         `Parquet jauh lebih kecil dan cepat daripada CSV untuk analitik.`,
         `Delta Lake: <code>versionAsOf</code>/<code>timestampAsOf</code> membaca versi lama; <code>merge</code> menggabungkan perubahan; <code>optimize</code> dan <code>vacuum</code> merapikan file.`],
        [`<code>pd.DataFrame({...})</code> : tabel dua kolom.`,
         `<code>df.to_parquet('data.parquet', engine='pyarrow')</code> : menyimpan ke format kolom memakai mesin <code>pyarrow</code>.`],
        `File <code>data.parquet</code> terbuat (tidak ada output cetak).`,
        [`Menganggap Parquet bisa dibuka seperti teks biasa.`,
         `Menjalankan <code>vacuum</code> terlalu agresif sehingga <i>time travel</i> ke versi lama hilang.`,
         `Menyimpan banyak file kecil, bukan sedikit file berukuran sedang.`]);

    R(67, `Scrapy adalah kerangka kerja untuk mengambil data dari banyak halaman web secara paralel. Pekerjaan diatur dalam class <b>Spider</b>.`,
        [`Spider punya <code>name</code>, <code>start_urls</code>, dan method <code>parse(self, response)</code>.`,
         `Ambil data dengan selector: <code>response.css("div.quote")</code> atau <code>response.xpath(...)</code>; <code>.get()</code> satu hasil, <code>.getall()</code> semua.`,
         `Bersikap sopan: hormati <code>robots.txt</code> dan beri jeda unduhan (<code>DOWNLOAD_DELAY</code>).`],
        [`<code>class QuotesSpider(scrapy.Spider):</code> : spider bernama <code>quotes</code>.`,
         `<code>start_urls = [...]</code> : halaman awal.`,
         `<code>response.css('div.quote')</code> : memilih semua elemen kutipan.`,
         `<code>yield {...}</code> : mengeluarkan satu item data per kutipan.`],
        `Item berisi teks kutipan (butuh internet; tidak berjalan di browser)`,
        [`Mengabaikan <code>robots.txt</code> dan membebani server target.`,
         `Memakai <code>return</code> alih-alih <code>yield</code> sehingga hanya satu item terambil.`,
         `Selector yang rapuh sehingga rusak saat struktur HTML berubah.`]);

    R(68, `Visualisasi menyajikan data sebagai grafik. Matplotlib adalah dasarnya, Seaborn menambah grafik statistik yang rapi, dan Plotly membuat grafik interaktif.`,
        [`Gaya yang dianjurkan: <code>fig, ax = plt.subplots()</code>, lalu gambar lewat <code>ax</code>.`,
         `Seaborn: <code>scatterplot</code>, <code>histplot</code>, <code>heatmap</code> (peta warna, cocok untuk matriks korelasi <code>df.corr()</code>).`,
         `Plotly Express: <code>px.scatter(df, x=..., y=...)</code> menghasilkan grafik dengan tooltip.`],
        [`<code>sns.set_theme()</code> : memasang tema Seaborn.`,
         `<code>fig, ax = plt.subplots()</code> : kanvas dan area plot.`,
         `<code>sns.lineplot(x=..., y=..., ax=ax)</code> : menggambar garis pada area itu.`],
        `Satu grafik garis (Seaborn tidak tersedia di browser; level ini dinilai dari struktur kode)`,
        [`Mencampur <code>plt.plot</code> dan <code>ax.plot</code>.`,
         `Grafik tanpa judul dan label sumbu.`,
         `Memakai warna yang sulit dibedakan untuk kategori.`]);

    /* ===== WEB API ===== */
    R(49, `FastAPI adalah kerangka kerja web modern untuk membuat API. Rute ditulis sebagai fungsi yang diberi dekorator, dan tipe data parameter diperiksa otomatis.`,
        [`Rute: <code>@app.get("/path")</code>, <code>@app.post(...)</code>. Fungsi mengembalikan dictionary yang otomatis menjadi JSON.`,
         `<b>Path parameter</b> bagian dari URL (<code>/items/{item_id}</code>); <b>query parameter</b> setelah <code>?</code> (<code>?q=abc</code>).`,
         `Dokumentasi interaktif otomatis tersedia di <code>/docs</code> (Swagger UI).`],
        [`<code>app = FastAPI()</code> : membuat aplikasi.`,
         `<code>@app.get("/items/{item_id}")</code> : rute GET dengan path parameter.`,
         `<code>item_id: int</code> : FastAPI mengonversi dan memvalidasi menjadi integer.`,
         `<code>q: str | None = None</code> : query parameter opsional.`],
        `Permintaan <code>/items/5?q=abc</code> menghasilkan <code>{"item_id": 5, "q": "abc"}</code> (FastAPI tidak tersedia di browser)`,
        [`Tipe parameter salah sehingga respons 422 (validasi gagal).`,
         `Lupa nama parameter fungsi sama dengan nama di path.`,
         `Mengembalikan objek yang tidak bisa dijadikan JSON.`]);

    R(50, `Pydantic memvalidasi dan mengonversi data berdasarkan type hint. Model dibuat dengan menurunkan <code>BaseModel</code>; data yang tak sesuai langsung ditolak dengan pesan jelas.`,
        [`Atribut ditulis sebagai anotasi tipe; Pydantic memaksa konversi bila masuk akal (<code>"5"</code> menjadi <code>5</code>).`,
         `<code>@field_validator("kolom")</code> menambah aturan kustom dan harus melempar <code>ValueError</code> bila tak valid.`,
         `Model dapat bersarang; <code>model_dump()</code> menjadi dictionary dan <code>model_dump_json()</code> menjadi JSON.`],
        [`<code>class User(BaseModel):</code> : model dengan dua field.`,
         `<code>@field_validator('age')</code> + <code>@classmethod</code> : validator untuk field <code>age</code>.`,
         `<code>if v &lt; 18: raise ValueError(...)</code> : menolak nilai tak valid.`,
         `<code>return v</code> : nilai yang lolos wajib dikembalikan.`],
        `<code>User(username="a", age=20)</code> berhasil; <code>age=10</code> memicu <code>ValidationError</code> (Pydantic tidak tersedia di browser)`,
        [`Validator lupa <code>return v</code> sehingga nilai menjadi <code>None</code>.`,
         `Menangkap <code>ValueError</code> padahal yang dilempar adalah <code>pydantic.ValidationError</code>.`,
         `Mengira Pydantic tidak mengonversi tipe sama sekali.`]);

    R(79, `Konfigurasi aplikasi (kunci API, URL database) sebaiknya berasal dari variabel lingkungan, bukan ditulis di kode. <code>python-dotenv</code> memuatnya dari berkas <code>.env</code>, dan <code>BaseSettings</code> dari Pydantic memvalidasi tipenya.`,
        [`<code>os.getenv("NAMA", default)</code> membaca variabel lingkungan; variabel sistem operasi lebih diutamakan daripada isi <code>.env</code>.`,
         `<code>BaseSettings</code> membaca otomatis dari lingkungan dan memeriksa tipe (port harus int, debug harus bool).`,
         `Jangan meng-commit <code>.env</code> berisi rahasia ke Git.`],
        [`<code>class Settings(BaseSettings):</code> : kelas konfigurasi bertipe.`,
         `<code>app_name: str</code> dan <code>database_url: str</code> : dua pengaturan wajib.`,
         `<code>env_file = ".env"</code> : sumber berkas konfigurasi.`],
        `<code>Settings()</code> membaca nilai dari lingkungan atau <code>.env</code> (tidak ada output cetak)`,
        [`Menulis kunci rahasia langsung di kode sumber.`,
         `Mengira variabel lingkungan selalu bertipe sesuai kebutuhan (semuanya string sebelum divalidasi).`,
         `Lupa memberi nilai default untuk pengaturan opsional.`]);

    R(51, `SQLAlchemy adalah ORM yang memetakan class Python ke tabel database sehingga data dikelola sebagai objek. Gaya 2.0 memakai anotasi <code>Mapped</code> dan <code>mapped_column</code>.`,
        [`Class dasar: <code>class Base(DeclarativeBase): pass</code>; tiap model menurunkannya dan menentukan <code>__tablename__</code>.`,
         `<code>create_engine(url)</code> membuka koneksi; <code>Session</code> mengelola transaksi (<code>add</code>, <code>commit</code>, <code>delete</code>).`,
         `Query gaya baru: <code>session.scalars(select(User)).all()</code>.`],
        [`<code>class User(Base):</code> : model yang menjadi tabel <code>users</code>.`,
         `<code>id: Mapped[int] = mapped_column(primary_key=True)</code> : kolom kunci utama.`,
         `<code>name: Mapped[str]</code> : kolom teks.`],
        `Definisi tabel tanpa output cetak (SQLAlchemy tidak tersedia di browser)`,
        [`Lupa <code>commit()</code> sehingga data tidak tersimpan.`,
         `Menyusun SQL dengan f-string alih-alih memakai ORM atau parameter (rawan SQL injection).`,
         `Memakai satu session untuk seluruh umur aplikasi.`]);

    R(52, `Alembic mengelola perubahan skema database (migrasi) dengan versi, seperti Git untuk struktur tabel. Soal level ini berupa perintah terminal dan konfigurasi, dinilai dari isi teks.`,
        [`<code>alembic init alembic</code> menyiapkan proyek; <code>target_metadata = Base.metadata</code> di <code>env.py</code> menghubungkannya ke model.`,
         `<code>alembic revision --autogenerate -m "pesan"</code> membuat skrip migrasi dari perubahan model.`,
         `<code>alembic upgrade head</code> menerapkan hingga versi terbaru; <code>alembic downgrade -1</code> membatalkan satu langkah.`],
        [`<code># alembic init alembic</code> : membuat folder dan konfigurasi migrasi.`,
         `<code># alembic revision --autogenerate -m ...</code> : menghasilkan berkas revisi.`,
         `<code># alembic upgrade head</code> : menjalankan migrasi ke versi terbaru.`],
        `Berkas baru di folder <code>versions/</code> dan skema database yang diperbarui.`,
        [`Mengedit berkas revisi lama yang sudah diterapkan di tim lain.`,
         `Tidak melacak folder <code>versions/</code> di Git.`,
         `Menjalankan <code>autogenerate</code> tanpa memeriksa isi skrip hasilnya.`]);

    R(57, `Redis adalah penyimpanan data di memori yang sangat cepat, sering dipakai sebagai cache: hasil kueri berat disimpan sementara agar permintaan berikutnya tidak menghitung ulang.`,
        [`<code>client.set(kunci, nilai, ex=60)</code> menyimpan dengan TTL (kedaluwarsa 60 detik); <code>client.get(kunci)</code> mengembalikan <b>bytes</b> sehingga perlu <code>.decode()</code>.`,
         `Pola <b>Cache-Aside</b>: cek cache; bila tidak ada, ambil dari database lalu simpan ke cache.`,
         `Struktur data Python dikonversi ke JSON (<code>json.dumps</code>) sebelum disimpan; <code>delete</code> menghapus cache saat data berubah.`],
        [`<code>client = redis.Redis(host='localhost', port=6379, db=0)</code> : koneksi ke server Redis.`,
         `<code>client.set('kunci', 'nilai', ex=60)</code> : simpan selama 60 detik.`],
        `Tidak ada output cetak; <code>client.get('kunci')</code> akan mengembalikan <code>b'nilai'</code> (butuh server Redis; tidak berjalan di browser)`,
        [`Menyimpan cache tanpa TTL sehingga data usang selamanya.`,
         `Lupa menghapus cache saat data sumber berubah.`,
         `Lupa mendekode hasil <code>get</code> dari bytes.`]);

    R(56, `Celery menjalankan pekerjaan berat di latar belakang lewat antrean pesan (broker) seperti Redis, sehingga permintaan pengguna tidak menunggu.`,
        [`<code>@app.task</code> menandai fungsi sebagai tugas; <code>tugas.delay(args)</code> memasukkannya ke antrean dan langsung kembali.`,
         `Proses terpisah bernama <b>worker</b> mengambil tugas dari antrean dan mengerjakannya.`,
         `Hasil diambil lewat <code>AsyncResult.get()</code>; <code>self.retry()</code> mengulang tugas yang gagal.`],
        [`<code>Celery('tasks', broker='redis://localhost:6379/0')</code> : aplikasi Celery dengan broker Redis.`,
         `<code>@app.task</code> : mendaftarkan <code>add</code> sebagai tugas.`,
         `<code>add(x, y)</code> : menjumlahkan; dipanggil lewat <code>add.delay(2, 3)</code>.`],
        `Tidak mencetak apa pun; worker yang menjalankan tugas (butuh Celery dan Redis; tidak berjalan di browser)`,
        [`Memanggil <code>add(2, 3)</code> langsung alih-alih <code>add.delay(2, 3)</code> (berjalan sinkron).`,
         `Lupa menjalankan worker sehingga tugas menumpuk di antrean.`,
         `Mengirim objek besar sebagai argumen tugas.`]);

    R(89, `Kriptografi melindungi data. Hashing menghasilkan sidik jari satu arah (untuk password), enkripsi simetris memakai satu kunci untuk mengunci dan membuka, enkripsi asimetris memakai pasangan kunci publik dan privat.`,
        [`Password disimpan sebagai hash lambat bergaram (<b>bcrypt</b>), bukan hash cepat seperti SHA-256.`,
         `Simetris (Fernet): kunci yang sama untuk <code>encrypt</code> dan <code>decrypt</code>; data berupa bytes.`,
         `Kunci rahasia tidak boleh ditulis di kode; simpan di variabel lingkungan atau secret manager.`],
        [`<code>key = Fernet.generate_key()</code> : membuat kunci acak.`,
         `<code>cipher = Fernet(key)</code> : objek pengenkripsi.`,
         `<code>cipher.encrypt(b"Data rahasia")</code> : menghasilkan token terenkripsi.`,
         `<code>cipher.decrypt(token)</code> : mengembalikan data aslinya.`],
        `<code>b'Data rahasia'</code> (pustaka <code>cryptography</code> tidak tersedia di browser)`,
        [`Menyimpan password dengan SHA-256 tanpa salt.`,
         `Menulis kunci di kehadiran kode sumber atau Git.`,
         `Mengirim string ke <code>encrypt</code> alih-alih bytes.`]);

    R(53, `Autentikasi memastikan siapa pengguna; otorisasi menentukan apa yang boleh ia lakukan. Pola umum API: password disimpan sebagai hash bcrypt, setelah login server memberi token JWT yang dikirim klien di tiap permintaan.`,
        [`<code>bcrypt.hashpw(password.encode(), bcrypt.gensalt())</code> membuat hash; <code>bcrypt.checkpw(...)</code> memverifikasi.`,
         `<b>JWT</b>: token bertanda tangan berisi data pengguna; <code>jwt.encode</code> membuat, <code>jwt.decode</code> memverifikasi dan membaca.`,
         `FastAPI: <code>OAuth2PasswordBearer</code> mengambil token dari header, <code>Depends(fungsi)</code> menyuntikkan pengguna aktif ke rute.`],
        [`<code>import bcrypt</code> : memuat pustaka.`,
         `<code>bcrypt.gensalt()</code> : membuat salt acak.`,
         `<code>bcrypt.hashpw(...)</code> : menghasilkan hash dari password.`,
         `<code>bcrypt.checkpw(...)</code> : mencocokkan password dengan hash (<code>True</code>/<code>False</code>).`],
        `<code>True</code> (bcrypt tidak tersedia di browser)`,
        [`Menyimpan password mentah atau memakai hash cepat.`,
         `Menaruh kunci JWT di kode dan tanpa masa kedaluwarsa token.`,
         `Mempercayai isi token tanpa memverifikasi tanda tangannya.`]);

    R(90, `Secure coding mencegah celah keamanan umum yang dirangkum OWASP Top 10: SQL injection, XSS, CSRF, autentikasi yang rusak, dan sejenisnya.`,
        [`<b>SQL injection</b>: selalu pakai query berparameter atau ORM, jangan menyambung SQL dengan input pengguna.`,
         `<b>XSS</b>: escape teks pengguna sebelum ditampilkan di HTML (<code>html.escape</code>); <b>CSRF</b>: sertakan token unik di formulir.`,
         `Hindari <code>eval()</code>/<code>exec()</code> pada input pengguna; validasi masukan dengan Pydantic.`],
        [`<code>session.query(User)</code> : memulai kueri lewat ORM.`,
         `<code>.filter(User.username == username)</code> : kondisi dikirim sebagai parameter, bukan teks SQL.`,
         `<code>.first()</code> : mengambil satu baris atau <code>None</code>.`],
        `Satu objek <code>User</code> atau <code>None</code> (SQLAlchemy tidak tersedia di browser)`,
        [`Membangun query dengan f-string: <code>f"SELECT ... WHERE nama='{x}'"</code>.`,
         `Menampilkan input pengguna di HTML tanpa escape.`,
         `Memeriksa hak akses hanya di sisi klien.`]);

    R(54, `WebSocket membuka koneksi dua arah yang tetap terbuka antara klien dan server sehingga data bisa dikirim kapan saja, cocok untuk chat dan notifikasi real-time.`,
        [`Rute: <code>@app.websocket("/ws")</code>; terima koneksi dengan <code>await websocket.accept()</code>.`,
         `<code>receive_text()</code>/<code>send_text()</code> dan <code>send_json()</code> menukar pesan; lakukan dalam loop <code>while True</code>.`,
         `Tangkap <code>WebSocketDisconnect</code> saat klien putus dan hapus koneksinya dari daftar.`],
        [`<code>@app.websocket("/ws")</code> : rute WebSocket.`,
         `<code>await websocket.accept()</code> : menyetujui sambungan.`,
         `<code>data = await websocket.receive_text()</code> : menunggu pesan klien.`,
         `<code>await websocket.send_text(...)</code> : membalas.`],
        `Klien mengirim <code>halo</code> dan menerima <code>Pesan diterima: halo</code> (butuh server FastAPI; tidak berjalan di browser)`,
        [`Lupa <code>accept()</code> sebelum menukar pesan.`,
         `Tidak menangani <code>WebSocketDisconnect</code> sehingga server error saat klien pergi.`,
         `Tidak menghapus koneksi mati dari daftar broadcast.`]);

    R(55, `Pengujian API memeriksa endpoint secara otomatis. <code>pytest</code> menjalankan fungsi berawalan <code>test_</code>, dan <code>TestClient</code> milik FastAPI memanggil aplikasi tanpa menjalankan server sungguhan.`,
        [`<code>client.get("/")</code> dan <code>client.post("/x", json={...})</code> mengembalikan respons dengan <code>status_code</code> dan <code>json()</code>.`,
         `<code>@pytest.fixture</code> menyiapkan sumber daya tes (klien, database) yang dipakai dengan menuliskan namanya sebagai parameter.`,
         `Uji juga jalur gagal: 404 (tidak ditemukan), 422 (validasi gagal), 401 (tanpa token).`],
        [`<code>client = TestClient(app)</code> : klien uji untuk aplikasi.`,
         `<code>def test_read_main():</code> : fungsi tes (awalan <code>test_</code> wajib).`,
         `<code>client.get("/")</code> : memanggil rute.`,
         `<code>assert response.status_code == 200</code> : memastikan sukses.`],
        `Tes lolos tanpa output; <code>pytest</code> menampilkan <code>1 passed</code> (pytest tidak tersedia di browser)`,
        [`Nama fungsi tidak berawalan <code>test_</code> sehingga tidak dijalankan.`,
         `Tes saling bergantung pada urutan dan data sisa tes lain.`,
         `Hanya menguji jalur sukses.`]);

    R(58, `Gateway dan lapisan keamanan API mengatur siapa yang boleh memanggil dan seberapa sering. Mencakup CORS, rate limiting, validasi API key, dan header keamanan.`,
        [`<b>CORS</b> menentukan domain frontend mana yang boleh memanggil API dari browser; jangan memakai <code>"*"</code> bersama <code>allow_credentials=True</code>.`,
         `<b>Rate limiting</b> membatasi jumlah permintaan per IP dalam rentang waktu (mis. dengan penghitung di Redis).`,
         `Middleware (<code>@app.middleware("http")</code>) mencegat tiap permintaan untuk mencatat waktu, memeriksa header, atau menambah header keamanan.`],
        [`<code>app.add_middleware(CORSMiddleware, ...)</code> : memasang aturan CORS.`,
         `<code>allow_origins=[...]</code> : daftar domain yang diizinkan.`,
         `<code>allow_credentials=True</code> : mengizinkan cookie/kredensial.`,
         `<code>allow_methods</code>, <code>allow_headers</code> : metode dan header yang diizinkan.`],
        `Browser dari domain yang terdaftar dapat memanggil API; domain lain diblokir (FastAPI tidak tersedia di browser)`,
        [`Mengizinkan semua asal (<code>"*"</code>) untuk API yang memakai cookie.`,
         `Menganggap CORS sebagai pengganti autentikasi (ia hanya aturan browser).`,
         `Rate limit yang sama untuk semua pengguna tanpa pengecualian.`]);

    /* ===== AI ENGINEERING ===== */
    R(69, `Pipeline machine learning dengan scikit-learn: membagi data menjadi latih dan uji, melatih model, memprediksi, lalu mengukur hasilnya.`,
        [`<code>train_test_split(X, y, test_size=0.2)</code> membagi data; model belajar dari data latih dan dinilai pada data uji.`,
         `Estimator punya pola seragam: <code>fit(X_train, y_train)</code> melatih, <code>predict(X_test)</code> memprediksi.`,
         `<code>Pipeline</code> menyambung langkah (mis. <code>StandardScaler</code> lalu model) agar pra-pemrosesan konsisten; <code>GridSearchCV</code> mencari hiperparameter terbaik.`],
        [`<code>from sklearn.model_selection import train_test_split</code> : alat pembagi data.`,
         `<code>RandomForestClassifier</code> : model klasifikasi berbasis banyak pohon keputusan.`,
         `Baris <code>train_test_split(...)</code> berupa komentar contoh, karena <code>X</code> dan <code>y</code> perlu data nyata.`],
        `Tidak mencetak apa pun; <code>X_train</code>, <code>X_test</code>, <code>y_train</code>, <code>y_test</code> terisi setelah dijalankan dengan data (scikit-learn tidak tersedia di browser)`,
        [`Melatih dan menguji pada data yang sama.`,
         `Menyesuaikan <code>scaler</code> (<code>fit</code>) pada seluruh data sebelum dibagi (kebocoran data).`,
         `Lupa <code>random_state</code> sehingga hasil berubah-ubah.`]);

    R(76, `PyTorch adalah pustaka deep learning. Dasarnya <b>tensor</b> (array multidimensi yang bisa dihitung di GPU) dan <b>autograd</b> (penghitung turunan otomatis).`,
        [`<code>torch.tensor([1.0, 2.0])</code> membuat tensor; <code>.shape</code> bentuknya, <code>.to(device)</code> memindahkannya ke CPU/GPU.`,
         `<code>requires_grad=True</code> menyuruh PyTorch mencatat operasi; <code>y.backward()</code> menghitung turunan dan hasilnya ada di <code>x.grad</code>.`,
         `<code>with torch.no_grad():</code> mematikan pencatatan gradien saat evaluasi.`],
        [`<code>x = torch.tensor([2.0], requires_grad=True)</code> : tensor yang dilacak turunannya.`,
         `<code>y = x ** 3</code> : y = x pangkat 3.`,
         `<code>y.backward()</code> : menghitung dy/dx.`,
         `<code>print(x.grad)</code> : turunannya, yaitu 3x² = 12.`],
        `<code>tensor([12.])</code> (PyTorch tidak tersedia di browser)`,
        [`Gradien menumpuk antar iterasi bila tidak di-nol-kan (<code>zero_grad</code>).`,
         `Memanggil <code>backward()</code> pada tensor berisi banyak elemen tanpa argumen.`,
         `Mencampur tensor di CPU dan GPU dalam satu operasi.`]);

    R(77, `Jaringan saraf dibuat dengan menurunkan class dari <code>nn.Module</code>. Lapisan didefinisikan di <code>__init__</code>, dan alur data di <code>forward</code>. Pelatihan menyesuaikan bobot dengan <i>loss</i> dan <i>optimizer</i>.`,
        [`<code>nn.Linear(masuk, keluar)</code> adalah lapisan terhubung penuh; <code>model(x)</code> otomatis memanggil <code>forward</code>.`,
         `Loss mengukur kesalahan (<code>nn.MSELoss()</code>); optimizer memperbarui bobot (<code>torch.optim.Adam(model.parameters(), lr=0.01)</code>).`,
         `Satu langkah latih: <code>zero_grad()</code>, forward, hitung loss, <code>loss.backward()</code>, <code>optimizer.step()</code>.`],
        [`<code>class SimpleNN(nn.Module):</code> : model kustom.`,
         `<code>super().__init__()</code> : wajib dipanggil pertama.`,
         `<code>self.linear = nn.Linear(10, 1)</code> : 10 masukan menjadi 1 keluaran.`,
         `<code>def forward(self, x): return self.linear(x)</code> : cara data mengalir.`],
        `Definisi model tanpa output cetak (PyTorch tidak tersedia di browser)`,
        [`Lupa <code>super().__init__()</code>.`,
         `Memanggil <code>model.forward(x)</code> alih-alih <code>model(x)</code>.`,
         `Lupa <code>optimizer.zero_grad()</code> sehingga gradien menumpuk.`]);

    R(70, `API LLM komersial (OpenAI, Anthropic) dipakai lewat SDK resmi: kirim daftar pesan dan terima balasan model.`,
        [`Pesan berupa list dictionary dengan <code>role</code> (<code>system</code>, <code>user</code>, <code>assistant</code>) dan <code>content</code>.`,
         `Parameter umum: <code>model</code>, <code>temperature</code> (kreativitas), <code>max_tokens</code>, dan <code>stream=True</code> untuk balasan bertahap.`,
         `Kunci API dibaca dari variabel lingkungan, bukan ditulis di kode; tangani <code>RateLimitError</code> dengan try/except.`],
        [`<code>client = OpenAI(api_key=...)</code> : membuat klien.`,
         `<code>client.chat.completions.create(...)</code> : mengirim permintaan.`,
         `<code>messages=[{"role": "user", ...}]</code> : percakapan yang dikirim.`,
         `Teks jawaban ada di <code>response.choices[0].message.content</code>.`],
        `Teks balasan model (butuh kunci API dan internet; tidak berjalan di browser)`,
        [`Menulis kunci API di kode atau Git.`,
         `Mengasumsikan balasan selalu valid JSON tanpa memeriksanya.`,
         `Tidak menangani batas laju (rate limit) dan error jaringan.`]);

    R(71, `LangChain menyusun aplikasi LLM dari komponen kecil yang disambung menjadi rantai (<i>chain</i>): prompt, model, dan parser keluaran.`,
        [`<code>ChatPromptTemplate.from_template("... {topik}")</code> membuat prompt dengan lubang variabel; <code>format</code>/<code>invoke</code> mengisinya.`,
         `Operator <code>|</code> menyambung komponen: <code>chain = prompt | llm | StrOutputParser()</code>.`,
         `LlamaIndex fokus pada pengindeksan dokumen (<code>VectorStoreIndex</code>) untuk tanya jawab berbasis dokumen.`],
        [`<code>ChatPromptTemplate.from_template(...)</code> : template dengan <code>{topik}</code>.`,
         `<code>prompt.format(topik="Python")</code> : mengisi variabel menjadi teks akhir.`,
         `<code>print(...)</code> : <code>Jelaskan tentang Python</code>.`],
        `<code>Human: Jelaskan tentang Python</code> (LangChain tidak tersedia di browser)`,
        [`Nama variabel di template dan di <code>invoke</code> tidak sama.`,
         `Mencampur versi paket LangChain lama dan baru.`,
         `Mengira rantai langsung berjalan saat disusun (butuh <code>.invoke()</code>).`]);

    R(78, `Model open-source dapat dijalankan sendiri: lewat pustaka <code>transformers</code> milik Hugging Face, atau lewat server lokal Ollama. Keuntungannya privasi dan biaya; kekurangannya butuh perangkat keras.`,
        [`<code>pipeline("text-generation", model="gpt2")</code> adalah cara tercepat memakai model.`,
         `Cara manual: <code>AutoTokenizer</code> (teks ke token), <code>AutoModelForCausalLM</code>, <code>model.generate(...)</code>, lalu <code>tokenizer.decode(...)</code>.`,
         `Ollama menjalankan model lokal; dari Python dipakai lewat <code>langchain_ollama.ChatOllama</code>.`],
        [`<code>pipeline('text-generation', model='gpt2')</code> : memuat model teks ringan.`,
         `<code>generator("Python adalah", max_length=20)</code> : melanjutkan kalimat.`,
         `<code>print(...)</code> : menampilkan list hasil.`],
        `Teks lanjutan yang berbeda tiap dijalankan (butuh unduhan model; tidak berjalan di browser)`,
        [`Memuat model besar di mesin yang kurang memori.`,
         `Lupa <code>skip_special_tokens=True</code> saat <code>decode</code>.`,
         `Mengira hasil <code>generate</code> selalu sama tanpa mengatur <code>do_sample</code>.`]);

    R(72, `Basis data vektor menyimpan <i>embedding</i> (vektor angka dari teks) dan mencari yang paling mirip dengan kueri berdasarkan kedekatan makna.`,
        [`Alur: buat koleksi, tambah dokumen (beserta id unik), lalu <code>query</code> dengan teks.`,
         `Chroma mudah untuk pemakaian lokal; Qdrant dan Pinecone untuk skala besar.`,
         `Hasil kueri berupa dictionary; dokumen terdekat ada di <code>results["documents"][0]</code>.`],
        [`<code>chromadb.Client()</code> : klien basis data vektor.`,
         `<code>client.create_collection("dokumen")</code> : wadah dokumen.`,
         `<code>collection.add(documents=[...], ids=[...])</code> : menyimpan dokumen dan menghitung embedding-nya.`],
        `Tidak ada output cetak; koleksi berisi satu dokumen (Chroma tidak tersedia di browser)`,
        [`Memakai <code>id</code> ganda saat menambah dokumen.`,
         `Membandingkan embedding dari model berbeda.`,
         `Tidak menghapus koleksi lama sehingga hasil kueri tercampur.`]);

    R(73, `RAG (Retrieval-Augmented Generation) memberi LLM konteks dari dokumen eksternal: potong dokumen, simpan sebagai vektor, ambil potongan yang relevan untuk pertanyaan, lalu minta model menjawab berdasarkan potongan itu.`,
        [`<b>Chunking</b>: memecah dokumen panjang menjadi potongan kecil (<code>chunk_size</code>) dengan sedikit tumpang tindih (<code>chunk_overlap</code>).`,
         `<b>Retriever</b> mencari potongan paling relevan untuk sebuah kueri.`,
         `Prompt RAG menyuruh model menjawab hanya dari konteks yang diberikan.`],
        [`<code>RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)</code> : pemotong teks.`,
         `<code>splitter.split_text("Teks panjang...")</code> : menghasilkan list potongan.`],
        `Satu list berisi potongan teks (LangChain tidak tersedia di browser)`,
        [`Potongan terlalu besar sehingga konteks tidak fokus.`,
         `Tidak menginstruksikan model untuk hanya memakai konteks (jawaban mengarang).`,
         `Tidak menguji kualitas jawaban dengan pertanyaan yang jawabannya diketahui.`]);

    R(74, `Agen AI adalah LLM yang diberi peran, tujuan, dan alat sehingga bisa bekerja mandiri. Sistem multi-agen membagi tugas ke beberapa agen yang berkolaborasi.`,
        [`Agen CrewAI punya <code>role</code>, <code>goal</code>, dan <code>backstory</code>; <code>Task</code> berisi deskripsi, keluaran yang diharapkan, dan agen penanggung jawab.`,
         `<code>Crew(agents=[...], tasks=[...])</code> menyatukannya; <code>crew.kickoff()</code> menjalankan.`,
         `AutoGen memakai percakapan antar agen: <code>initiate_chat</code> memulai diskusi.`],
        [`<code>Agent(role='Peneliti', goal=..., backstory=...)</code> : mendefinisikan agen.`,
         `<code>Task(description=..., expected_output=..., agent=peneliti)</code> : tugas yang ditugaskan ke agen.`,
         `<code>Crew(agents=[peneliti], tasks=[tugas])</code> : tim siap dijalankan.`],
        `Objek <code>crew</code> terbentuk; menjalankannya butuh <code>kickoff()</code> dan kunci API (CrewAI tidak tersedia di browser)`,
        [`Peran dan tujuan terlalu samar sehingga hasil agen melantur.`,
         `Memberi agen alat tanpa batasan hak akses.`,
         `Tidak membatasi jumlah langkah sehingga biaya membengkak.`]);

    R(75, `Rekayasa prompt mengarahkan model tanpa melatih ulang (few-shot, chain-of-thought, role prompting). Fine-tuning melatih model dengan dataset contoh untuk perilaku khusus.`,
        [`<b>Few-shot</b>: beri beberapa contoh masukan-keluaran; <b>Chain-of-Thought</b>: minta model bernalar langkah demi langkah; <b>Role prompting</b>: tentukan peran ("Anda adalah ...").`,
         `Dataset fine-tuning berformat JSONL: satu objek JSON per baris, berisi daftar <code>messages</code> (system, user, assistant).`,
         `Evaluasi selalu membandingkan model dasar dan model hasil fine-tuning pada soal yang sama.`],
        [`<code>{"messages": [...]}</code> : satu contoh percakapan, satu baris.`,
         `<code>{"role": "system", ...}</code> : mengatur perilaku bot.`,
         `<code>{"role": "user", ...}</code> dan <code>{"role": "assistant", ...}</code> : contoh pertanyaan dan jawaban ideal.`],
        `Satu baris JSON yang valid untuk setiap contoh latihan`,
        [`Dataset sedikit dan tidak beragam sehingga model hanya menghafal.`,
         `Format JSONL yang rusak (koma berlebih atau objek terpotong).`,
         `Fine-tuning padahal prompt yang lebih baik sudah cukup.`]);

    /* ===== DEVOPS ===== */
    R(80, `Docker mengemas aplikasi beserta dependensinya ke dalam image sehingga berjalan sama di mana pun. Resepnya ditulis di berkas <code>Dockerfile</code>. Soal level ini dinilai dari isi teks.`,
        [`Urutan instruksi dasar: <code>FROM</code> (image dasar), <code>WORKDIR</code>, <code>COPY</code>, <code>RUN</code> (perintah saat build), <code>CMD</code> (perintah saat kontainer jalan).`,
         `Salin <code>requirements.txt</code> dan pasang dependensi <b>sebelum</b> menyalin kode agar layer tersimpan di cache.`,
         `Jalankan sebagai user non-root dan abaikan berkas yang tak perlu lewat <code>.dockerignore</code>.`],
        [`<code>FROM python:3.11-slim</code> : mulai dari image Python ringan.`,
         `<code>WORKDIR /app</code> : folder kerja di dalam kontainer.`,
         `<code>COPY requirements.txt .</code> lalu <code>RUN pip install ...</code> : pasang dependensi.`,
         `<code>COPY . .</code> : salin sisa kode.`,
         `<code>CMD [...]</code> : perintah awal kontainer.`],
        `<code>docker build -t app .</code> membuat image; <code>docker run -p 8000:8000 app</code> menjalankannya`,
        [`Menyalin seluruh kode sebelum <code>requirements.txt</code> (cache tidak efektif).`,
         `Menjalankan proses sebagai root.`,
         `Image penuh (<code>python:3.11</code>) padahal <code>-slim</code> cukup.`]);

    R(81, `Docker Compose menjalankan beberapa kontainer sekaligus (web, database, cache) dari satu berkas <code>docker-compose.yml</code>. Soal level ini dinilai dari isi teks.`,
        [`Layanan didefinisikan di bawah <code>services:</code>; tiap layanan punya <code>image</code> atau <code>build</code>, <code>ports</code>, <code>environment</code>.`,
         `<code>depends_on</code> mengatur urutan mulai; <code>volumes</code> menyimpan data agar tidak hilang saat kontainer mati.`,
         `Antar layanan saling memanggil lewat <b>nama layanan</b> sebagai hostname (<code>db</code>, <code>redis</code>).`],
        [`<code>services:</code> : daftar layanan.`,
         `<code>web:</code> + <code>build: .</code> : image dibangun dari Dockerfile lokal.`,
         `<code>ports: - "8000:8000"</code> : port host:kontainer.`,
         `<code>depends_on: - redis</code> : jalan setelah redis dimulai.`,
         `<code>redis: image: redis:alpine</code> : image resmi ringan.`],
        `<code>docker compose up -d</code> menjalankan semua layanan; <code>docker compose down</code> menghentikannya`,
        [`Memakai <code>localhost</code> sebagai host database di dalam kontainer (harus nama layanan).`,
         `Menaruh kata sandi langsung di berkas yang di-commit.`,
         `Tidak memakai volume sehingga data database hilang.`]);

    R(82, `GitHub Actions menjalankan pengujian dan build otomatis setiap ada perubahan kode (CI/CD). Alurnya ditulis dalam berkas YAML di <code>.github/workflows/</code>. Soal level ini dinilai dari isi teks.`,
        [`<code>on:</code> menentukan pemicu; <code>jobs:</code> berisi pekerjaan dengan <code>runs-on</code> dan daftar <code>steps</code>.`,
         `<code>uses:</code> memakai action siap pakai (<code>actions/checkout@v4</code>, <code>actions/setup-python@v5</code>); <code>run:</code> menjalankan perintah shell.`,
         `Urutan yang wajar: checkout, setup Python, pasang dependensi, lint, tes.`],
        [`<code>name: CI</code> : nama alur.`,
         `<code>on: [push]</code> : jalan setiap push.`,
         `<code>runs-on: ubuntu-latest</code> : mesin virtual Linux.`,
         `<code>actions/checkout@v4</code> : mengambil kode repositori.`,
         `<code>actions/setup-python@v5</code> + <code>python-version: '3.11'</code> : memasang Python.`],
        `Tab Actions di GitHub menampilkan centang hijau bila semua langkah berhasil`,
        [`Indentasi YAML salah (spasi, bukan tab).`,
         `Lupa langkah checkout sehingga kode tidak ada di runner.`,
         `Menaruh rahasia langsung di berkas alih-alih memakai GitHub Secrets.`]);

    R(83, `Structured logging mencatat log sebagai data terstruktur (pasangan kunci-nilai, biasanya JSON) sehingga mudah dicari dan dianalisis. Sentry menangkap error produksi secara real-time.`,
        [`<code>structlog</code>: <code>logger.info("peristiwa", user_id=123)</code> menyimpan konteks sebagai field, bukan menyambung teks.`,
         `Sentry: <code>sentry_sdk.init(dsn=...)</code>, <code>capture_exception(e)</code>, <code>capture_message(...)</code>, dan <code>set_user({...})</code> untuk konteks pengguna.`,
         `Pilih level log dengan tepat: <code>INFO</code> untuk kejadian normal, <code>WARNING</code> untuk hal mencurigakan, <code>ERROR</code> untuk kegagalan.`],
        [`<code>logger = structlog.get_logger()</code> : membuat logger terstruktur.`,
         `<code>logger.info("pengguna_login", user_id=123, status="sukses")</code> : nama peristiwa plus field konteks.`],
        `Satu baris log berisi <code>pengguna_login</code> beserta <code>user_id=123</code> dan <code>status=sukses</code> (structlog tidak tersedia di browser)`,
        [`Mencatat data sensitif (password, token) ke log.`,
         `Menyambung pesan dengan f-string sehingga field tidak bisa dicari.`,
         `Mengirim terlalu banyak log <code>DEBUG</code> ke produksi.`]);

    R(84, `Prometheus mengumpulkan metrik performa dengan memanggil endpoint <code>/metrics</code> aplikasi secara berkala. Aplikasi Python mengeksposnya lewat <code>prometheus_client</code>.`,
        [`<b>Counter</b> hanya naik (jumlah permintaan); <b>Gauge</b> bisa naik-turun (pengguna aktif); <b>Histogram</b> mencatat sebaran nilai (durasi).`,
         `Prometheus mengambil data sesuai <code>scrape_configs</code> di <code>prometheus.yml</code>; Grafana menampilkannya sebagai dashboard.`,
         `Aturan peringatan memakai <code>alert:</code> dan <code>expr:</code> (kondisi PromQL).`],
        [`<code>Counter('request_total', 'Total HTTP Requests')</code> : membuat metrik penghitung.`,
         `<code>REQUEST_COUNT.inc()</code> : menambah satu (dipanggil tiap permintaan).`,
         `<code>generate_latest()</code> : menghasilkan teks metrik untuk endpoint <code>/metrics</code>.`],
        `Endpoint <code>/metrics</code> menampilkan baris seperti <code>request_total 3.0</code> (prometheus_client tidak tersedia di browser)`,
        [`Memberi label dengan nilai yang sangat banyak (misalnya ID pengguna) sehingga metrik meledak.`,
         `Memakai Counter untuk nilai yang bisa turun (pakai Gauge).`,
         `Tidak membuat aturan peringatan untuk metrik penting.`]);

    R(87, `<code>boto3</code> adalah SDK resmi Python untuk layanan AWS. S3 adalah penyimpanan objek: file disimpan sebagai objek di dalam <i>bucket</i>.`,
        [`<code>boto3.client("s3")</code> membuat klien; operasi utama: <code>upload_file</code>, <code>download_file</code>, <code>list_objects_v2</code>, <code>delete_object</code>.`,
         `<b>Pre-signed URL</b> adalah tautan sementara untuk mengakses objek privat tanpa membuka bucket.`,
         `Tangkap <code>botocore.exceptions.ClientError</code>; aktifkan <b>Block Public Access</b> agar tidak ada kebocoran.`],
        [`<code>s3 = boto3.client('s3')</code> : klien S3 (kredensial dari lingkungan).`,
         `<code>s3.upload_file('lokal.txt', 'nama-bucket', 'remote.txt')</code> : berkas lokal, bucket tujuan, nama objek.`],
        `Tidak ada output cetak; objek <code>remote.txt</code> muncul di bucket (butuh akun AWS; tidak berjalan di browser)`,
        [`Menulis kunci akses AWS di kode.`,
         `Membuka bucket menjadi publik tanpa sengaja.`,
         `Tidak menangani <code>ClientError</code> saat izin kurang.`]);

    R(86, `Serverless menjalankan kode sebagai fungsi yang dipicu event, tanpa mengurus server; biaya hanya untuk waktu eksekusi. AWS Lambda memanggil fungsi handler yang menerima <code>event</code> dan <code>context</code>.`,
        [`Bentuk handler: <code>def lambda_handler(event, context):</code> yang mengembalikan dictionary berisi <code>statusCode</code> dan <code>body</code>.`,
         `<code>event</code> membawa data pemicu (permintaan HTTP dari API Gateway, objek baru di S3); izin diatur lewat IAM role.`,
         `<code>Mangum(app)</code> membungkus aplikasi FastAPI agar berjalan di Lambda.`],
        [`<code>def lambda_handler(event, context):</code> : titik masuk yang dipanggil AWS.`,
         `<code>'statusCode': 200</code> : kode respons HTTP.`,
         `<code>'body': 'Halo dari AWS Lambda!'</code> : isi respons berupa string.`],
        `Respons <code>{'statusCode': 200, 'body': 'Halo dari AWS Lambda!'}</code>`,
        [`Mengembalikan <code>body</code> berupa dictionary (harus string, mis. <code>json.dumps</code>).`,
         `Paket deployment terlalu besar sehingga <i>cold start</i> lambat.`,
         `Memberi IAM role izin terlalu luas.`]);

    R(85, `Infrastructure as Code (IaC) mendefinisikan infrastruktur cloud (server, storage, jaringan) sebagai kode yang bisa disimpan di Git, ditinjau, dan diulang. Pulumi memakai Python biasa.`,
        [`Sumber daya adalah objek Python (<code>aws.s3.Bucket(...)</code>); <code>pulumi.export(...)</code> menampilkan nilai keluaran.`,
         `Alur CLI: <code>pulumi stack init</code>, <code>pulumi preview</code> (lihat rencana), <code>pulumi up</code> (terapkan), <code>pulumi destroy</code> (hapus).`,
         `State menyimpan kondisi infrastruktur; simpan di backend terenkripsi, bukan di laptop.`],
        [`<code>import pulumi_aws as aws</code> : pustaka sumber daya AWS.`,
         `<code>aws.s3.Bucket("my-bucket", ...)</code> : mendeklarasikan sebuah bucket.`,
         `<code>pulumi.export("bucket_name", bucket.id)</code> : mengeluarkan id bucket.`],
        `Setelah <code>pulumi up</code>, bucket terbuat dan id-nya tampil di keluaran (butuh akun AWS; tidak berjalan di browser)`,
        [`Langsung <code>pulumi up</code> tanpa membaca <code>preview</code>.`,
         `Mengedit sumber daya manual di konsol sehingga state tidak sinkron.`,
         `Menyimpan state tanpa enkripsi.`]);

    R(88, `Kubernetes mengatur banyak kontainer di klaster. <b>Deployment</b> menjaga jumlah salinan (pod) aplikasi; <b>Service</b> memberi alamat tetap dan membagi lalu lintas. Soal level ini dinilai dari isi teks.`,
        [`Manifes YAML berisi <code>apiVersion</code>, <code>kind</code>, <code>metadata</code>, <code>spec</code>.`,
         `<code>replicas</code> menentukan jumlah pod; <code>selector</code> dan <code>labels</code> menghubungkan Deployment/Service ke pod yang tepat.`,
         `<code>kubectl apply -f</code>, <code>get pods</code>, <code>logs</code>, <code>delete -f</code> adalah perintah dasar.`],
        [`<code>kind: Deployment</code> : jenis objek.`,
         `<code>replicas: 3</code> : tiga pod berjalan bersamaan.`,
         `<code>selector: matchLabels: app: python</code> : memilih pod berlabel itu.`,
         `<code>containers: ... image: python-app:1.0</code> : image yang dijalankan.`,
         `<code>containerPort: 8000</code> : port aplikasi di dalam kontainer.`],
        `<code>kubectl get pods</code> menampilkan tiga pod berstatus <code>Running</code>`,
        [`Label di <code>selector</code> dan <code>template</code> tidak sama.`,
         `Memakai tag <code>latest</code> sehingga versi tak terkontrol.`,
         `Tidak mengatur batas CPU/memori kontainer.`]);

    /* ===== SECURITY & PERFORMANCE ===== */
    R(96, `Analisis statis memeriksa kode tanpa menjalankannya: <b>Bandit</b> mencari celah keamanan, <b>Ruff</b> mengecek kesalahan dan gaya, <b>Black</b> memformat otomatis. Soal level ini berupa perintah dan dinilai dari isi teks.`,
        [`<code>bandit -r .</code> memindai rekursif; temuan punya kode (mis. B307 untuk <code>eval</code>, B105 untuk password hardcoded).`,
         `<code>ruff check .</code> memeriksa; <code>ruff check --fix .</code> memperbaiki otomatis; <code>black .</code> memformat.`,
         `Pengaturan alat disimpan di <code>pyproject.toml</code>; jalankan semuanya di CI sebelum merge.`],
        [`<code># bandit -r .</code> : pindai seluruh proyek untuk celah keamanan.`,
         `<code># ruff check .</code> : cek kesalahan dan gaya.`],
        `Daftar temuan dengan kode (misalnya <code>B307</code>) atau pesan <code>No issues identified</code>`,
        [`Mengabaikan peringatan Bandit dengan <code>nosec</code> tanpa alasan.`,
         `Menjalankan alat hanya sesekali, bukan otomatis di CI.`,
         `Menganggap kode yang lolos analisis statis pasti aman.`]);

    R(91, `Profiling memori mencari tahu bagian kode yang memakai banyak RAM dan mendeteksi kebocoran memori (objek yang menumpuk padahal tak dipakai lagi). Modul bawaan: <code>tracemalloc</code>.`,
        [`<code>tracemalloc.start()</code> mulai melacak; <code>take_snapshot()</code> mengambil potret alokasi; <code>snapshot.statistics("lineno")</code> mengelompokkannya per baris kode.`,
         `Membandingkan dua snapshot (<code>compare_to</code>) menunjukkan apa yang bertambah antar waktu.`,
         `<code>get_traced_memory()</code> memberi memori saat ini dan puncak; <code>tracemalloc.stop()</code> menghentikan pelacakan.`],
        [`<code>tracemalloc.start()</code> : aktifkan pelacakan.`,
         `<code>snapshot = tracemalloc.take_snapshot()</code> : potret alokasi saat ini.`,
         `<code>snapshot.statistics('lineno')</code> : urutan baris yang paling banyak memakai memori.`,
         `<code>for stat in top_stats[:3]: print(stat)</code> : cetak tiga teratas.`],
        `Tiga baris yang menunjukkan lokasi kode dan jumlah memori yang dialokasikan`,
        [`Mengambil snapshot sebelum <code>start()</code> (kosong).`,
         `Membiarkan pelacakan menyala di produksi (memperlambat program).`,
         `Mengira memori yang dilaporkan sama persis dengan penggunaan proses di sistem operasi.`]);

    R(92, `Cython dan PyPy mempercepat Python. Cython mengompilasi kode (dengan tipe C statis) menjadi modul biner; PyPy adalah interpreter alternatif dengan JIT. Soal level ini dinilai dari isi teks.`,
        [`File Cython berekstensi <code>.pyx</code>; <code>cdef</code>/<code>cpdef</code> mendeklarasikan variabel dan fungsi bertipe C (<code>cpdef int kuadrat(int x)</code>).`,
         `Kompilasi lewat <code>setup.py</code> dengan <code>cythonize</code> lalu <code>python setup.py build_ext --inplace</code>.`,
         `Optimasi hanya untuk fungsi yang terbukti menjadi bottleneck CPU (ukur dulu dengan profiler).`],
        [`<code># cpdef int jumlah(int a, int b): ...</code> : fungsi dengan tipe C statis.`,
         `<code>return a + b</code> : berjalan jauh lebih cepat tanpa objek dinamis Python.`],
        `Modul biner hasil kompilasi yang bisa di-<code>import</code> seperti modul Python biasa`,
        [`Mengoptimasi sebelum mengukur.`,
         `Memakai objek Python dinamis di dalam loop yang dikompilasi sehingga tak ada percepatan.`,
         `Mengira PyPy kompatibel dengan semua ekstensi C.`]);

    R(94, `Ekstensi C memungkinkan fungsi ditulis dalam C dan dipanggil dari Python lewat CPython API. Prasyarat: kenal dasar C (fungsi, pointer, <code>#include</code>). Soal level ini dinilai dari isi teks.`,
        [`Berkas C memulai dengan <code>#include &lt;Python.h&gt;</code>.`,
         `Fungsi berbentuk <code>static PyObject* nama(PyObject* self, PyObject* args)</code>; argumen diurai dengan <code>PyArg_ParseTuple</code> dan hasil dibuat dengan <code>Py_BuildValue</code>.`,
         `Daftar fungsi dideklarasikan di <code>PyMethodDef</code>; modul diinisialisasi oleh <code>PyInit_namamodul</code>.`],
        [`<code>#include &lt;Python.h&gt;</code> : header CPython API.`,
         `<code>static PyObject* custom_func(...)</code> : fungsi yang bisa dipanggil dari Python.`],
        `Setelah dikompilasi, <code>import mymodule</code> membuat <code>mymodule.custom_func()</code> bisa dipanggil`,
        [`Lupa mengelola reference count (<code>Py_INCREF</code>/<code>Py_DECREF</code>) sehingga bocor atau crash.`,
         `Tidak memeriksa hasil <code>PyArg_ParseTuple</code>.`,
         `Memakai ekstensi C padahal Cython atau NumPy sudah cukup.`]);

    /* ===== ENTERPRISE MASTERY ===== */
    R(97, `Arsitektur microservices memecah aplikasi besar menjadi layanan kecil independen, masing-masing punya tugas dan databasenya sendiri, yang saling berkomunikasi lewat jaringan.`,
        [`Komunikasi sinkron memakai HTTP (REST); asinkron memakai message broker. Setiap layanan punya <b>database sendiri</b>.`,
         `<b>Circuit Breaker</b> memutus panggilan ke layanan yang terus gagal; <b>service discovery</b> membantu layanan menemukan alamat lainnya; API Gateway menjadi pintu masuk tunggal.`,
         `<b>Distributed tracing</b>: sertakan trace ID di tiap permintaan agar perjalanannya bisa dilacak lintas layanan.`],
        [`<code>app = FastAPI(title="UserService")</code> : satu layanan khusus pengguna.`,
         `<code>@app.get("/users/{id}")</code> : rute untuk mengambil pengguna.`,
         `<code>return {...}</code> : respons yang menyebut layanan asalnya.`],
        `Respons <code>{"user_id": 1, "service": "user-microservice"}</code> (FastAPI tidak tersedia di browser)`,
        [`Membagi database antar layanan sehingga tetap saling terikat.`,
         `Memecah terlalu kecil sebelum memahami batas domain.`,
         `Tidak menyediakan fallback saat layanan lain mati.`]);

    R(98, `Event-driven architecture membuat layanan berkomunikasi lewat kejadian (event) yang dikirim ke broker pesan (RabbitMQ, Kafka), bukan saling memanggil langsung.`,
        [`<b>Producer</b> menerbitkan pesan; <b>consumer</b> mengambilnya; antrean menampung pesan sampai diproses.`,
         `RabbitMQ lewat <code>pika</code>: <code>queue_declare</code>, <code>basic_publish</code>, <code>basic_consume</code>; Kafka lewat <code>KafkaProducer</code>/<code>KafkaConsumer</code>.`,
         `<b>Acknowledgment</b> (ack): consumer memberi tahu broker bahwa pesan berhasil diproses; tanpa ack, pesan dikirim ulang.`],
        [`<code>pika.BlockingConnection(...)</code> : koneksi ke RabbitMQ.`,
         `<code>channel.queue_declare(queue='task_queue')</code> : membuat antrean bila belum ada.`,
         `<code>channel.basic_publish(exchange='', routing_key='task_queue', body='Hello Event!')</code> : mengirim pesan ke antrean.`],
        `Pesan <code>Hello Event!</code> masuk ke antrean (butuh broker; tidak berjalan di browser)`,
        [`Mengirim ack sebelum pesan selesai diproses sehingga pesan hilang saat gagal.`,
         `Consumer tidak idempoten sehingga pesan ganda menghasilkan efek ganda.`,
         `Tidak menangani pesan yang terus gagal (butuh dead-letter queue).`]);

    R(99, `Pengujian integrasi menguji beberapa komponen bekerja bersama (API, database, cache, antrean) pada skenario bisnis nyata, berbeda dari unit test yang menguji satu fungsi.`,
        [`<code>pytest</code> dengan <code>TestClient</code> dan database uji terisolasi; <b>fixture</b> dengan <code>yield</code>: kode sebelum <code>yield</code> adalah setup, sesudahnya teardown.`,
         `Layanan eksternal diganti mock atau kontainer uji (<code>Testcontainers</code>) agar tes tidak menyentuh produksi.`,
         `Ukur cakupan kode dengan <code>pytest --cov</code> dan uji skenario gagal (rollback, token salah).`],
        [`<code>def test_enterprise_workflow(test_client, db_session):</code> : tes yang meminta dua fixture.`,
         `<code>test_client.post("/api/v1/orders", json={...})</code> : membuat order lewat API.`,
         `<code>assert response.status_code == 201</code> : memastikan order berhasil dibuat.`],
        `<code>pytest</code> menampilkan <code>1 passed</code> (butuh aplikasi nyata; tidak berjalan di browser)`,
        [`Tes yang saling bergantung pada data sisa tes lain.`,
         `Tidak membersihkan data uji setelah tes (teardown).`,
         `Hanya menguji jalur sukses.`]);

    R(100, `Capstone: merancang SaaS AI skala penuh dengan menggabungkan semua yang dipelajari: FastAPI, SQLAlchemy, Celery + Redis, RAG/LLM, Docker, Kubernetes, CI/CD, dan keamanan.`,
        [`Pisahkan tanggung jawab: API menerima permintaan, Celery mengerjakan tugas berat (LLM), Redis menjadi cache dan broker.`,
         `Seluruh stack dijalankan lokal dengan Docker Compose, lalu diterapkan ke klaster lewat manifes Kubernetes.`,
         `CI/CD menjalankan tes, pemindaian keamanan, dan build image otomatis; dokumentasi (README) menjelaskan arsitektur dan cara menjalankan.`],
        [`Komentar pertama : gambaran arsitektur keseluruhan.`,
         `Komentar kedua : urutan komponen dari backend sampai deployment.`],
        `Contoh ini hanya diagram dalam komentar; tidak ada output saat dijalankan`,
        [`Menggabungkan semua komponen tanpa batas tanggung jawab yang jelas.`,
         `Mengabaikan keamanan dan pengujian sampai terakhir.`,
         `Tidak mendokumentasikan arsitektur sehingga sulit diteruskan orang lain.`]);
})();
