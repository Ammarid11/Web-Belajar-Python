# Rencana Peningkatan Kualitas: Python Odyssey

Dokumen ini dibuat dari membaca kode `index.html`, `app.js`, `cloud.js`, dan `style.css`. Belum ada yang diuji langsung di browser, jadi temuan performa (ukuran, waktu muat) perlu diukur dulu dengan Lighthouse sebelum dikerjakan.

**Cara baca:** tiap butir diberi **Dampak** (seberapa terasa bagi pelajar/pemilik) dan **Usaha** (seberapa lama dikerjakan). Prioritas ada di bagian paling bawah.

---

## 1. Kualitas belajar (inti produk)

**Status pengerjaan bagian 1** (✅ selesai · 🟡 sebagian · ⬜ belum)

| Butir | Status | Ringkasan |
|---|---|---|
| 1.1 Penilaian jawaban | 🟡 | Harness uji ada dan lulus untuk 143 dari 1.256 soal (seluruh fase Beginner); 11 celah penilaian terdokumentasi |
| 1.2 Petunjuk & umpan balik | 🟡 | Petunjuk 3 tingkat, penjelasan error, baris error disorot di editor, "Output kamu" + "Output yang diharapkan" (untuk soal berpola baris); belum ada solusi penuh |
| 1.3 Struktur halaman | ✅ | Tab Materi/Contoh/Latihan, kotak alat bantu, tombol Jalankan contoh |
| 1.4 Motivasi & retensi | ✅ | Streak, kalender, konfeti, mode Ulangi, sertifikat, target harian, koleksi lencana ikon |
| 1.5 Jalur belajar | ✅ | Tes penempatan, jalur Data/Backend/AI, rekomendasi "lanjut ke mana" |

Berkas yang berubah: `app.js`, `index.html`, `cloud.js`; baru: `tests/` dan `.github/workflows/test.yml`. Semua belum diuji langsung di browser (hanya pengecekan sintaks dan `node tests/run.js`).

### 1.1 Penilaian jawaban masih mudah dikelabui
> **Status: 🟡 sebagian.**
> - ✅ Skrip uji `tests/run.js` (Node + Python lokal, memakai logika penilaian yang sama dengan `app.js`) dan workflow CI `.github/workflows/test.yml`.
> - ✅ Solusi referensi dan contoh salah untuk **Level id 1, 2, 3, 6, 103, 104, 105, 106** (80 soal, 160 pemeriksaan, semuanya lulus). Datanya ada di `tests/data.js`.
> - ✅ Fase **Beginner tuntas**: solusi referensi dan contoh salah untuk **Level id 4, 5, 7, 9, 12, 120, 128** (63 soal: 63 solusi lulus, 63 contoh salah gagal). Berkas: `tests/beginner-data.js`, `tests/beginner-run.js`, `tests/py_runner.py`. Harness ini mengambil logika penilaian (`jt`, `Tt`, praproses soal) dan setup Python langsung dari teks `app.js`, jadi otomatis ikut berubah bila `app.js` berubah. Jalankan: `node tests/beginner-run.js` (`--explain` menampilkan alasan penolakan, `--strict` menggagalkan bila ada celah). Kontrol negatif (`print("x")`, `x = 1`, dst.) lolos di 0 soal.
> - ✅ Ditemukan **11 celah** (jawaban salah yang masih lolos), tercatat sebagai `gap` di data: Level 9 (6 soal: tidak ada `expect`/`check`; mis. `len(buah)` tanpa `print` lolos karena kata "mencetak" tak dikenali sebagai tuntutan output), Level 5 soal 2 dan Level 7 soal 6 (tanpa `expect`), Level 12 soal 1 (nilai yang diformat tak diperiksa), Level 4 soal 1 (`if 1 == 1` lolos pemeriksa kondisi konstan), Level 128 soal 1 (total ditulis langsung). Cara menutupnya: tambah `check` (tes perilaku) atau `expect` pada soal terkait, lalu pindahkan entri `gap` ke `bad` (harness akan memberi tahu bila gap sudah tertutup).
> - ⬜ Sisa sekitar 1.113 soal belum punya solusi referensi. Prioritas berikutnya: fase Intermediate (Level id 8, 110, 107, 125, 10, 11, 16, 15, ...).
> - ⬜ Soal bermode teks (Docker, Kubernetes, CI/CD, dll.) belum didukung runner.
> - ⬜ Solusi disimpan di berkas terpisah, bukan sebagai properti `solution`/`wrong[]` di tiap soal seperti usulan awal.
> - ⬜ Menaikkan soal berbasis regex menjadi tes perilaku (`check`) belum dilakukan.
- **Temuan:** banyak soal dinilai dengan regex atau kata kunci (`c.includes("def")`), dan soal bermode teks lolos hanya bila memuat pola tertentu. Sebagian jawaban asal-asalan yang kebetulan memuat kata kunci bisa lolos, dan jawaban benar dengan gaya penulisan berbeda bisa ditolak.
- **Perbaikan:**
  - Beri tiap soal sebuah **solusi referensi** (`solution`) dan **contoh jawaban salah** (`wrong[]`).
  - Buat skrip uji (Node + Pyodide, jalan di CI) yang memastikan: solusi referensi **lulus**, semua contoh salah **gagal**. Ini mencegah regresi tiap kali kurikulum diubah.
  - Naikkan soal berbasis regex menjadi tes perilaku (`check`) bila memungkinkan.
- **Dampak:** tinggi · **Usaha:** sedang-besar

### 1.2 Petunjuk bertingkat dan umpan balik yang menjelaskan
> **Status: 🟡 sebagian.**
> - ✅ Petunjuk 3 tingkat: arah umum, kerangka dari contoh materi, lalu baca ulang materi (terbuka setelah 2 kali periksa jawaban belum tepat).
> - ✅ Error umum Python dijelaskan dalam bahasa Indonesia beserta nomor baris; nomor baris yang bermasalah kini disorot merah di gutter editor dan editor menggulir ke baris itu (hilang saat mengetik/menjalankan ulang).
> - ✅ Saat output tidak cocok, tampil "Output kamu" dan "Output yang diharapkan". Output yang diharapkan hanya muncul untuk soal yang polanya berupa daftar baris persis (sekitar 50 soal); soal berpola regex belum punya teks harapan yang ramah dibaca.
> - ⬜ Tingkat 3 berupa solusi penuh belum ada, karena butuh solusi referensi per soal (lihat 1.1).
- **Temuan:** satu petunjuk statis per soal; pesan gagal sering generik ("belum memenuhi instruksi").
- **Perbaikan:**
  - Petunjuk 3 tingkat: arah umum → kerangka kode → solusi (solusi baru terbuka setelah N percobaan).
  - Tampilkan **output yang diharapkan vs output kamu** saat tes perilaku gagal.
  - Terjemahkan error umum Python ke penjelasan Indonesia: `NameError` → "variabel belum dibuat / salah ketik", `IndentationError`, `TypeError`, dst., beserta nomor baris yang disorot di editor.
- **Dampak:** tinggi · **Usaha:** sedang

### 1.3 Struktur halaman materi
> **Status: ✅ selesai.** Tab Materi, Contoh, Latihan; kotak "Alat bantu yang dipakai di soal" dirender sendiri lewat `#level-tools`; tombol "▶ Jalankan contoh" (tidak aktif untuk level berisi konfigurasi/perintah).
- **Temuan:** materi, contoh, alat bantu, dan soal tersusun memanjang; materi panjang (HTML dalam satu `<p>`) menyulitkan dibaca di HP.
- **Perbaikan:**
  - Pisahkan jadi tab/langkah: **Materi → Contoh → Latihan**.
  - Render blok "Alat bantu yang dipakai di soal" sebagai komponen sendiri (kotak `.tools-box` sudah ada di CSS dan `#level-tools` di HTML, tetapi isinya sekarang ditempel ke dalam `desc`).
  - Tombol "Jalankan contoh" langsung di kotak contoh.
- **Dampak:** tinggi · **Usaha:** sedang

### 1.4 Motivasi dan retensi
> **Status: ✅ selesai.**
> - ✅ Streak harian (header), kalender aktivitas gaya GitHub (20 minggu), konfeti saat level tuntas, mode Ulangi (soal acak dari yang sudah selesai, tanpa XP), sertifikat tuntas fase (unduh PNG). Semua ada di dialog "📊 Pencapaian". Data aktivitas ikut tersinkron ke cloud.
> - ✅ Lencana per fase: koleksi kartu ikon (abu-abu bila terkunci, berwarna + tombol sertifikat bila diraih) di dialog Pencapaian.
> - ✅ Target harian (1/3/5/10 soal, default 3): progres di dialog Pencapaian, tooltip pada streak, toast saat tercapai. Disimpan di `settings.dailyGoal` dan ikut sinkron ke cloud.
- **Ide:** streak harian, target harian, lencana (badge) per fase, animasi naik level/konfeti, kalender aktivitas gaya GitHub, mode **Ulangi** (soal acak dari level yang sudah selesai), dan sertifikat tuntas fase yang bisa dibagikan.
- **Dampak:** tinggi · **Usaha:** sedang

### 1.5 Jalur belajar
> **Status: ✅ selesai.**
> - ✅ Tes penempatan (tombol "🧭 Tes penempatan" di sidebar): 9 soal pilihan ganda, hasilnya rekomendasi titik mulai (tidak memberi XP dan tidak menandai level selesai).
> - ✅ Pilihan jalur (Semua level / Data & Analitik / Backend & API / AI Engineering): fondasi Beginner-Advanced selalu tampil, level lanjutan menyesuaikan jalur. Mode "Kunci level berurutan" mengikuti urutan jalur. Disimpan di `settings.track`.
> - ✅ Rekomendasi "lanjut ke mana" saat level tuntas (level berikutnya pada jalur; ajakan memilih jalur saat fase Advanced tuntas).
> - 🟡 Daftar level per jalur adalah penilaian saya (konstanta `TRACKS` di `app.js`), silakan disesuaikan.
- **Ide:** tes penempatan singkat (lewati Beginner bila sudah mahir), jalur "Data Science" / "Backend" / "AI" yang memilih subset level, dan rekomendasi "lanjut ke mana" di akhir tiap level.
- **Dampak:** sedang-tinggi · **Usaha:** sedang

---

## 2. Editor kode

> **Status bagian 2: 🟡 sebagian (tinggal CodeMirror 6)** (dikerjakan tanpa dependensi baru; belum diuji di browser)
> - ✅ **Pewarnaan sintaks:** lapisan overlay di belakang `<textarea>` (kata kunci, string termasuk f-string dan triple-quote, komentar, angka, builtin, dekorator). Soal bermode teks (Docker, YAML, dll.) tidak diwarnai.
> - ✅ **Pasangan otomatis:** `()`, `[]`, `{}`, `""`, `''` (lompati penutup, bungkus teks terpilih, Backspace menghapus pasangan kosong, Enter di antara kurung membuka baris tengah).
> - ✅ **Indentasi cerdas:** setelah `:` menjorok; setelah `return/pass/break/continue/raise` mundur satu tingkat.
> - ✅ **Penyorotan baris error:** gutter dan pita merah di atas baris yang bermasalah.
> - ✅ **Mobile:** bilah simbol (`Tab ( ) [ ] { } " ' : = # _ + - * / % , . < > ! \`) dan tombol Jalankan/Periksa menempel di bawah layar (hanya layar < 768 px). Pintasan `Ctrl+Enter`, `Ctrl+Shift+Enter`, `Tab` dipertahankan.
> - ✅ **`input()` interaktif:** bila kolom Input kosong dan program meminta input, terminal menampilkan kolom ketik. Cara kerjanya: program dijalankan ulang dari awal dengan input yang sudah terkumpul (worker tidak bisa menunggu input secara sinkron tanpa header cross-origin isolation), jadi program yang acak/bergantung waktu bisa berbeda tiap putaran. Penilaian (Periksa Jawaban) tetap memakai input otomatis soal.
> - ⬜ **CodeMirror 6:** belum. Butuh toolchain (bagian 3, Vite) atau CDN module yang tidak bisa diuji di sini. Saat bagian 3 dikerjakan, overlay ini bisa diganti CodeMirror tanpa mengubah logika penilaian.
> - ✅ **Saran kode:** muncul setelah 2 huruf (kata kunci, builtin, nama yang sudah ada di kode, dan method umum setelah titik). `Tab` menerima, panah memilih, `Esc` menutup; `Enter` tetap pindah baris. Tidak muncul di komentar/string dan soal bermode teks.
> - ✅ Animasi ketik dan animasi CSS di halaman login dijeda saat tab tidak aktif (butir ini sebenarnya milik bagian 6).

- **Temuan:** editor memakai `<textarea>` dengan nomor baris. Tidak ada pewarnaan sintaks, pasangan kurung otomatis, atau saran kode.
- **Perbaikan:** ganti dengan **CodeMirror 6** (ringan, ramah mobile) yang memberi syntax highlighting, auto-close bracket, indent cerdas, dan penyorotan baris error. Pertahankan pintasan yang sudah ada (`Ctrl+Enter`, `Ctrl+Shift+Enter`, `Tab`).
- **Mobile:** tambahkan bilah tombol di atas keyboard (`Tab`, `( ) [ ] { } " : =`), karena mengetik simbol di HP adalah titik gesek terbesar. Jadikan tombol Run/Periksa menempel di bawah layar.
- **`input()`:** daripada kolom stdin terpisah, tampilkan prompt interaktif di terminal.
- **Dampak:** tinggi · **Usaha:** sedang

---

## 3. Performa dan teknis

> **Status bagian 3: 🟡 sebagian** (diuji: `node --check`, `npm test`, `npm run check`; belum diuji di browser: service worker, pra-muat paket, build Tailwind)
> - ✅ **Angka level/soal dinamis:** `index.html` dan `cloud.js` menghitung dari `levelsData`. Meta description sengaja umum ("lebih dari 100 level") karena crawler tidak menjalankan JS.
> - ✅ **Debounce pencarian:** 150 ms pada kolom cari level.
> - ✅ **Kurikulum dipisah dari logika:** `curriculum.js` (398 KB) dan `app.js` (63 KB). `index.html` memuat `curriculum.js` lebih dulu.
> - ✅ **Service worker `sw.js`** (ditulis ulang agar terbaca):
>   - Kerangka aplikasi (`index.html`, `app.js`, `cloud.js`): network-first dengan batas waktu 4 detik, lalu jatuh ke cache. Jaringan lemot tidak lagi menggantung.
>   - `curriculum.js`, `tailwind.css`, `style.css`: stale-while-revalidate, jadi muat cepat dari cache dan diperbarui di latar belakang.
>   - Pyodide (URL berversi): cache-first. Supabase tidak disentuh.
>   - Pemasangan memakai `Promise.allSettled`, jadi satu berkas 404 tidak menggagalkan seluruh cache. Cache `odyssey-shell-*` dan `odyssey-pyodide-*` versi lama dibersihkan saat aktivasi. Konstanta `VERSION` yang tidak terpakai dihapus.
>   - **Aturan rilis:** naikkan `SHELL` di `sw.js` (mis. `odyssey-shell-v4`) setiap kali `app.js` dan `curriculum.js` berubah bersamaan, supaya keduanya selalu serasi.
> - ✅ **Tailwind statis:** `tailwind.css` (v3.4.17) dimuat lewat `<link>`; CDN dihapus; `tailwind.css` ada di `SHELL_FILES`. `tailwind.config.js` kini ikut memindai `curriculum.js` (saat ini tidak ada kelas Tailwind di sana, jadi hasil build tidak berubah). Jalankan ulang `npm run css` bila menambah kelas baru. Berkas `tailwind.css` yang ada belum dibangun ulang di lingkungan ini.
> - ✅ **Pra-muat paket:** saat level dibuka dan mesin Python siap, `import` pada kode contoh diunduh di latar belakang. Perbaikan: saat mesin berubah ke `ready` (mis. setelah editor pertama kali difokuskan), level yang sedang aktif langsung di-pra-muat. Sebelumnya level yang dibuka sebelum mesin siap terlewat selamanya. Belum diuji dengan Pyodide asli.
> - ✅ **Skrip `npm run min` dihapus.** Skrip itu tidak dipakai di mana pun dan, bila dijalankan, mengganti nama variabel di `app.js` sehingga `tests/beginner-run.js` (yang memotong teks `app.js` lewat nama hasil minify seperti `xe`, `tt`, `jt`) rusak. Diganti `npm test` (`node tests/beginner-run.js`).
> - ⬜ **Kompresi hosting:** belum dicek. `curriculum.js` jadi ±117 KB dengan gzip. Cek header `content-encoding` di DevTools pada hosting sungguhan.
> - ⬜ **Pengukuran Lighthouse:** belum ada angka dasar. Jalankan sebelum mengerjakan optimasi berikutnya.
> - ⬜ **Render ulang sidebar hanya item yang berubah:** belum. `Te()` masih membangun ulang seluruh daftar (cukup cepat untuk 139 item; dikerjakan bila Lighthouse menunjukkan masalah).
> - ⬜ **Pecah kurikulum per fase:** tidak bisa dilakukan secara mekanis. Validator berupa fungsi/regex dan tambalan lintas fase (`e()`, `fx()`, urutan, materi) mengubah level saat `curriculum.js` dijalankan. Prasyaratnya adalah butir berikutnya.
> - 🟡 **Data terstruktur satu sumber per level:** baru `tools/check-curriculum.js` (`npm run check`): 139 level, 1.256 soal, skema lolos. Memindahkan tiap level ke satu berkas data belum dikerjakan; paling pas digabung dengan butir 1.1.
> - ⬜ **Toolchain (Vite + ESLint + Prettier + Vitest):** belum diputuskan. Ini prasyarat untuk CodeMirror 6 (bagian 2), pecah kurikulum, dan nama berkas berhash. `app.js` dan `cloud.js` di repo saat ini hanya ada dalam bentuk minify; simpan sumber terbaca sebelum mengubah logikanya.

| Temuan di kode | Perbaikan | Status | Dampak | Usaha |
|---|---|---|---|---|
| ~~`app.js` ±518 KB berisi seluruh kurikulum~~ | Kurikulum sudah dipisah (`curriculum.js`); sisanya pecah per fase + kompresi | 🟡 | Tinggi | Sedang |
| ~~Tailwind lewat Play CDN~~ | `tailwind.css` statis | ✅ | Tinggi | Kecil |
| Pyodide (~10 MB) diunduh ulang bila cache dibuang | Service worker + pra-muat paket | ✅ (belum diuji di browser) | Sedang | Sedang |
| `renderSidebar()` membangun ulang 139 item | Debounce 150 ms sudah ada; render parsial belum | 🟡 | Rendah | Kecil |
| `curriculum.js` berisi banyak tambalan berlapis | Data terstruktur satu sumber per level, skema tervalidasi | 🟡 | Tinggi (jangka panjang) | Besar |
| ~~Angka "139 level · 1.256 soal" manual~~ | Dihitung dari `levelsData` | ✅ | Rendah | Kecil |

**Rekomendasi toolchain:** Vite + ESLint + Prettier, dan Vitest untuk logika non-UI. Dengan begitu satu perintah menghasilkan situs produksi yang sudah diminify.

---

## 4. Keamanan dan privasi

- **Supabase RLS:** kunci anon di `cloud.js` memang aman diletakkan di browser, **asalkan** tabel `progress` memakai Row Level Security (hanya pemilik baris yang boleh baca/tulis). `schema.sql` tidak ada di proyek yang kubaca, jadi pastikan kebijakannya benar dan simpan `schema.sql` di repo.
- **SRI dan CSP:** (⬜ SRI belum dipasang: hash harus dihitung dari berkas asli, lihat perintah `openssl` di catatan rilis) skrip dari CDN (Supabase, Tailwind) dimuat tanpa atribut `integrity`. Tambahkan SRI untuk skrip yang versinya dikunci, dan header **Content-Security-Policy** di hosting. Bila Tailwind dibangun statis (bagian 3), CDN Tailwind hilang dari daftar.
- **Kata sandi tidak konsisten:** ✅ validasi di `cloud.js` kini menolak yang di bawah 8 karakter (sama dengan teks bantuan). ⬜ Atur juga minimum 8 di pengaturan Auth Supabase (Authentication > Policies), karena validasi di browser mudah dilewati.
- **Anti-penyalahgunaan:** aktifkan CAPTCHA (hCaptcha/Turnstile) untuk pendaftaran di Supabase, dan batasi laju percobaan masuk.
- **Hapus akun dan data:** tambah tombol "Hapus akun & data saya" dan "Unduh data saya" di menu akun, plus halaman Kebijakan Privasi singkat. Ini penting bila pengguna dari Indonesia (UU PDP).
- **Ukuran data sinkron:** draf kode ikut dikirim ke cloud dalam satu kolom JSON. Batasi ukuran/jumlah draf atau simpan draf hanya lokal supaya baris tidak membengkak.
- **Integritas XP:** semua penilaian berjalan di browser, sehingga progress bisa dimanipulasi lewat DevTools. Tidak masalah untuk belajar pribadi, tetapi **jangan** membuat papan peringkat publik tanpa verifikasi sisi server (Supabase Edge Function).
- **Dampak:** tinggi · **Usaha:** kecil-sedang

---

## 5. Aksesibilitas dan UX

- **Kontras:** ✅ selesai (`slate-500/600` menjadi `slate-400`, label 9 px dan 10 px menjadi 11 px, placeholder editor dicerahkan). Temuan awal: banyak teks memakai `text-slate-500` di latar gelap (mis. petunjuk pintasan, label kecil `text-[9px]`); naikkan ke `slate-400` ke atas dan ukuran minimal 11-12 px.
- **Terminal output:** ✅ ringkasan hasil kini diumumkan lewat region `#sr-status` (`aria-live="polite"`) terpisah. Temuan awal: `aria-live="off"` membuat pembaca layar tidak mengumumkan hasil. Umumkan ringkasan hasil ("Benar, +10 XP" / "Belum tepat") lewat region `aria-live="polite"` terpisah.
- **Modal login:** pasang jebakan fokus (focus trap) dan kembalikan fokus ke tombol pemicu saat ditutup.
- **Tema terang:** sekarang hanya gelap (`color-scheme: dark`). Tambah pengalih tema dan hormati `prefers-color-scheme`.
- **Pintasan dan navigasi cepat:** palet perintah `Ctrl+K` untuk lompat ke level mana pun; bantuan pintasan (`?`).
- **Status error jaringan:** pesan jelas dan tombol "Coba lagi" saat Pyodide gagal dimuat (sebagian sudah ada, perluas ke Supabase).
- **Dampak:** sedang · **Usaha:** kecil-sedang

---

## 6. Halaman login dan onboarding

- Tampilkan **halaman pendaftaran/landing** singkat sebelum langsung menutup layar dengan formulir; ajak mencoba satu soal dulu ("coba tanpa akun"), lalu minta daftar setelah soal pertama selesai (konversi biasanya lebih tinggi).
- Tambah **magic link / OTP email** sebagai alternatif kata sandi.
- Beri indikator "ingat saya" yang jelas, dan pesan galat yang spesifik per kasus (sebagian sudah ada di `ERR`).
- Pertahankan animasi editor, tetapi jeda otomatis saat tab tidak aktif (`document.hidden`) untuk menghemat baterai. ✅ *(sudah: `cloud.js` + `style.css`)*
- **Dampak:** sedang · **Usaha:** kecil-sedang

---

## 7. Observabilitas dan kualitas kode

- **Pemantauan error:** pasang Sentry (atau `window.onerror` + endpoint log sederhana) untuk tahu error nyata di perangkat pengguna.
- **Analitik ramah privasi** (Plausible/Umami): lihat level dan soal tempat orang paling sering berhenti atau gagal. Soal dengan tingkat gagal sangat tinggi biasanya validatornya terlalu ketat atau petunjuknya kurang.
- **Pengujian:** unit test untuk `merge()` di `cloud.js` (penggabungan progress lokal dan cloud) dan `applyData`; e2e Playwright untuk alur: buka → ketik jawaban → periksa → XP naik → refresh → progress bertahan.
- **CI:** jalankan lint, tes kurikulum (bagian 1.1), dan build di tiap push.
- **`.gitignore`:** tambahkan entri standar (`node_modules/`, `.env`, `dist/`) dan pastikan berkas cadangan/zip tidak ikut repo.
- **Dampak:** tinggi (jangka panjang) · **Usaha:** sedang

---

## 8. SEO, berbagi, dan PWA

- ✅ `og:title`, `og:description`, `og:type`, `og:locale`, dan `twitter:card` sudah ada. ⬜ `og:image` dan `og:url` belum (butuh gambar 1200x630 dan alamat situs final). Rencana awal: tambah `og:title`, `og:description`, `og:image`, dan `twitter:card` agar tautan tampil menarik saat dibagikan.
- `manifest.webmanifest` + ikon + service worker agar bisa **dipasang di layar utama** dan sebagian materi terbaca offline.
- Halaman publik per level (URL yang bisa dibagikan, mis. `#/level/12`) agar guru atau teman bisa mengirim tautan langsung ke soal.
- **Dampak:** sedang · **Usaha:** kecil-sedang

---

## 9. Ide fitur lanjutan (setelah fondasi rapi)

- Penilaian uraian/konfigurasi oleh model bahasa lewat Supabase Edge Function, untuk level Docker, Kubernetes, CI/CD yang sekarang hanya dicek regex. Perlu batas pemakaian dan biaya.
- Mode kelas: guru membuat kelas, melihat progress murid, dan memberi tugas.
- Komunitas: papan peringkat (setelah verifikasi sisi server), komentar per soal, atau berbagi solusi setelah soal selesai.
- Mode proyek: mini-proyek yang menghasilkan berkas nyata yang bisa diunduh.

---

## Urutan pengerjaan yang disarankan

| Tahap | Isi | Perkiraan |
|---|---|---|
| **1. Menang cepat** | Build Tailwind statis; angka level/soal dinamis; samakan aturan kata sandi; debounce pencarian; kontras dan `aria-live`; meta OG; cek RLS Supabase | 1-2 hari |
| **2. Fondasi kualitas** | Vite + ESLint; pecah `app.js` per fase; skrip uji kurikulum (solusi referensi vs jawaban salah); Sentry | 3-5 hari |
| **3. Pengalaman belajar** | CodeMirror 6 + bilah simbol mobile; petunjuk 3 tingkat; terjemahan error; tab Materi/Contoh/Latihan | 1-2 minggu |
| **4. Retensi** | Streak, lencana, kalender aktivitas, mode Ulangi, sertifikat fase | 1-2 minggu |
| **5. Pertumbuhan** | PWA offline, halaman landing, magic link, hapus akun, analitik | 1-2 minggu |
| **6. Lanjutan** | Penilaian AI, mode kelas, papan peringkat terverifikasi | sesuai kebutuhan |

**Kalau hanya bisa mengerjakan tiga hal:** (1) skrip uji kurikulum, karena menjaga kualitas 1.256 soal; (2) CodeMirror dan bilah simbol mobile, karena paling terasa saat dipakai; (3) toolchain build dan pemecahan kurikulum per fase, karena paling mempercepat pemuatan (Tailwind statis dan pemisahan `curriculum.js` sudah selesai).
