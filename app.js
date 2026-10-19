/* =====================================================================
   PYTHON ODYSSEY - app.js (logika aplikasi)
   Kurikulum (levelsData) dipisah ke curriculum.js dan harus dimuat lebih dulu.
   ===================================================================== */

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
    const TEXT_LEVELS = new Set([52, 80, 81, 82, 88, 92, 94, 96, 114, 118, 125, 137]);
    // Level 1-48 memakai kata kunci Python murni: isi string diabaikan saat cek struktur
    // (kecuali L12 format-spec dan L23 mode file yang memang berada di dalam string).
    const STRING_BLIND_LEVELS = new Set(Array.from({ length: 48 }, function (_, i) { return i + 1; })
        .filter(function (n) { return n !== 12 && n !== 23; }).concat([101, 102, 103, 104, 105, 106]));
    // Library yang memang tidak tersedia di browser. ImportError lain = salah ketik, bukan keterbatasan.
    const UNAVAILABLE_LIBS = new RegExp("^(torch|tensorflow|transformers|fastapi|uvicorn|starlette|alembic|passlib|jwt|celery|redis|pyspark|airflow|great_expectations|gx|deltalake|delta|scrapy|openai|anthropic|langchain\\w*|llama_index|chromadb|qdrant_client|crewai\\w*|autogen|sentry_sdk|structlog|prometheus_client|pulumi\\w*|boto3|botocore|bcrypt|defusedxml|pika|kafka|pytest|mangum|dotenv|pydantic_settings|Cython|memory_profiler|locust|testcontainers|pybreaker|numba|seaborn|plotly|ollama|pyarrow|psycopg2|pymysql)$");
    // Hasil cetak yang wajib muncul (kunci: "level-indeksSoal")
    const EXPECT = {
        "2-0": /\b24(\.0)?\b/, "2-1": /\b48\b/, "2-2": /\b81\b/, "2-3": /\b1\b/, "2-4": /\b53000\b/,
        "2-5": /\b5\b/, "2-6": /\b85(\.0)?\b/, "2-7": /\b60\b/, "2-8": /\b7200\b/, "2-9": /\b110\b/,
        "4-0": /sudah punya ktp/i, "4-1": /tidak lulus/i, "4-2": /hemat dulu/i, "4-3": /genap/i, "4-4": /demam/i,
        "4-5": /habis/i, "4-6": /terlalu ngebut/i, "4-7": /belum memenuhi/i, "4-8": /malam hari/i, "4-9": /hadiah utama/i,
        "5-0": /sejuk/i, "5-2": /berhenti/i, "5-3": /siang/i, "5-4": /kerusakan berat/i, "5-5": /rabu/i,
        "5-6": /diskon 20%/i, "5-7": /biaya sedang/i, "5-8": /full akses/i, "5-9": /anak-anak/i
    };

    // Urutan angka yang harus muncul di output (angka lain boleh ada di antaranya)
    function SEQ() { return new RegExp("(?:^|\\D)" + Array.prototype.join.call(arguments, "\\D+") + "(?:\\D|$)"); }
    Object.assign(EXPECT, {
        "3-0": /saya membeli 5 buah apel/i, "3-1": /halo rian, profesi anda programmer/i, "3-2": /suhu di bandung saat ini 22 derajat/i,
        "3-3": /hari ini adalah hari senin tanggal 15/i, "3-4": /total uang anda 50000 rupiah/i, "3-5": /belajar bahasa pem\w*gram\w* python/i,
        "3-6": /suara kucing adalah meow/i, "3-7": /samsung[\s\S]*3000000|3000000[\s\S]*samsung/i, "3-9": /buku rekomendasi: belajar coding/i,
        "6-0": SEQ(2, 4, 6, 8), "6-1": SEQ(1, 2, 3, 4, 5), "6-2": SEQ(5, 4, 3, 2, 1), "6-3": SEQ(5, 10, 15, 20),
        "6-4": /(halo python[\s\S]*){4}/i, "6-5": SEQ(1, 3, 5, 7, 9), "6-6": /p[\s\S]*y[\s\S]*t[\s\S]*h[\s\S]*o[\s\S]*n/i,
        "6-7": SEQ(1, 4, 9, 16), "6-8": SEQ(12, 13, 14, 15, 16, 17), "6-9": /(loading\.\.\.[\s\S]*){3}/i,
        "7-0": /3\D+2\D+1[\s\S]*mulai!/i, "7-1": SEQ(1, 2, 3, 4), "7-2": SEQ(1, 2, 4, 8), "7-3": SEQ(2, 4, 6),
        "7-4": /(ulangi[\s\S]*){3}/i, "7-6": /(^|\D)10(\D|$)/, "7-7": SEQ(5, 3, 1), "7-8": SEQ(10, 20, 30), "7-9": SEQ(1, 4, 9)
    });
    // Tes perilaku: dijalankan di Python setelah kode murid (namespace sama). AssertionError = jawaban salah.
    const CHECKS = {};
    function typed(list) {
        return list.map(function (p) {
            return "assert type(" + p[0] + ").__name__ == '" + p[1] + "', '" + p[0] + " harus bertipe " + p[1] + "'" +
                (p[2] ? "\nassert " + p[0] + " is " + p[2] + ", '" + p[0] + " harus bernilai " + p[2] + "'" : "");
        }).join("\n");
    }
    [[["nama_depan", "str"], ["tinggi_badan", "float"]], [["tahun_lahir", "int"], ["kota_asal", "str"]], [["sudah_menikah", "bool", "False"]],
     [["berat_badan", "float"], ["nama_panggilan", "str"]], [["jumlah_saudara", "int"], ["hobi", "str"]], [["suhu_badan", "float"]],
     [["nomor_sepatu", "int"], ["status_siswa", "bool", "True"]], [["email_pengguna", "str"], ["skor_ujian", "float"]],
     [["kode_akses", "int"], ["akses_admin", "bool", "False"]], [["nama_hewan", "str"], ["jumlah_kaki", "int"]]
    ].forEach(function (list, i) { CHECKS["1-" + i] = typed(list); });
    [["umur", 18], ["nilai_ujian", 65], ["uang", 40000], ["angka", 10], ["suhu", 38], ["stok", 0], ["kecepatan", 90], ["tinggi", 155], ["jam", 21], ["poin", 120]]
        .forEach(function (p, i) { CHECKS["4-" + i] = "assert " + p[0] + " == " + p[1] + ", '" + p[0] + " harus bernilai " + p[1] + " sesuai soal'"; });

    // Level 1, 2, 3, dan 6 disusun ulang (kesulitan bertingkat): EXPECT/CHECKS lama dihapus; tiap soal membawa expect/check sendiri.
    [EXPECT, CHECKS].forEach(function (m) { Object.keys(m).forEach(function (k) { if (/^(1|2|3|6)-\d+$/.test(k)) delete m[k]; }); });


    // Token pemanggilan (mis. .add(), json.dumps(), TaskGroup()) yang disebut soal: jawaban lemah wajib memuat sebagian besar.
    function apiTokens(text) {
        const out = [], seen = Object.create(null);
        const re = /(?:^|[^\w])((?:[A-Za-z_]\w*\.)*[A-Za-z_]\w*)\(/g;
        const skip = /^(contoh|misal|mis|dst|yaitu|atau|dan|dengan|untuk|buat|cetak|lalu|jika|maka)$/i;
        let m;
        while ((m = re.exec(text)) && out.length < 4) {
            const last = m[1].split(".").pop();
            if (last.length < 3 || skip.test(last) || seen[last]) continue;
            seen[last] = 1;
            out.push(last);
        }
        return out;
    }
    // Istilah kunci dari soal/petunjuk (nama berunderscore, bertitik, CamelCase, atau dalam kutip) untuk soal uraian.
    function keyTerms(text) {
        const out = [], seen = Object.create(null);
        const re = /['"]([^'"\n]{3,30})['"]|\b([A-Za-z_][\w.]*)\b/g;
        let m;
        while ((m = re.exec(text)) && out.length < 6) {
            const w = (m[1] || m[2] || "").trim();
            if (w.length < 4) continue;
            const codey = m[1] || /[_.]/.test(w) || /[a-z][A-Z]/.test(w) || /^[A-Z]{2,}$/.test(w) || /^[A-Z][a-z]+[A-Z]/.test(w);
            const k = w.toLowerCase();
            if (!codey || seen[k]) continue;
            seen[k] = 1;
            out.push(k);
        }
        return out;
    }
    function textNeedOk(code, task) {
        if (!task.textNeed || !task.textNeed.length) return true;
        const low = code.toLowerCase();
        const hit = task.textNeed.filter(function (w) { return low.indexOf(w) !== -1; }).length;
        return hit >= Math.min(2, task.textNeed.length);
    }
    function apiOk(code, task) {
        if (!task.apiNeed || !task.apiNeed.length) return true;
        const need = Math.ceil(task.apiNeed.length / 2);
        const hit = task.apiNeed.filter(function (w) { return new RegExp("(^|[^A-Za-z0-9_])" + w + "([^A-Za-z0-9_]|$)").test(code); }).length;
        return hit >= need;
    }

    // Glosarium: istilah yang muncul di materi dijelaskan otomatis di bagian "Istilah" tiap level.
    const GLOSSARY = [
        ["lazy evaluation", "evaluasi malas: nilai baru dihitung saat benar-benar diminta, bukan di muka. Hemat memori."],
        ["idempoten", "operasi yang hasilnya sama walau dijalankan berkali-kali (mis. memproses pesan yang sama dua kali tidak menggandakan efeknya)."],
        ["cold start", "jeda awal ketika fungsi serverless dijalankan pertama kali setelah lama tidak dipakai (lingkungannya perlu disiapkan dulu)."],
        ["bottleneck", "bagian program yang paling lambat dan menahan kecepatan keseluruhan."],
        ["race condition", "bug saat dua thread mengubah data bersama bersamaan sehingga hasilnya bergantung pada siapa yang lebih dulu."],
        ["call stack", "tumpukan pemanggilan fungsi: setiap pemanggilan baru ditaruh di atas, dan dibongkar dari atas saat fungsi selesai."],
        ["immutable", "tidak bisa diubah setelah dibuat (int, str, tuple). Lawannya mutable (list, dict, set)."],
        ["mutable", "bisa diubah di tempat setelah dibuat (list, dict, set)."],
        ["iterator", "objek yang memberi nilai satu per satu lewat next(); dipakai di belakang layar oleh for."],
        ["iterable", "apa pun yang bisa diulang dengan for (list, string, range, generator)."],
        ["coroutine", "fungsi async yang bisa dijeda dengan await lalu dilanjutkan, tanpa memblokir tugas lain."],
        ["thread", "jalur eksekusi dalam satu proses; beberapa thread berbagi memori yang sama."],
        ["gil", "Global Interpreter Lock: di CPython hanya satu thread yang menjalankan bytecode pada satu waktu."],
        ["i/o", "input/output: menunggu jaringan, file, atau disk. Waktu tunggu inilah yang bisa dimanfaatkan thread/asyncio."],
        ["pickle", "format biner Python untuk menyimpan objek; jangan membuka pickle dari sumber tak tepercaya."],
        ["wrapper", "fungsi pembungkus yang menambah perilaku sebelum/sesudah fungsi aslinya dipanggil."],
        ["dependensi", "objek/pustaka lain yang dibutuhkan sebuah class atau program agar bisa bekerja."],
        ["loosely coupled", "komponen saling bergantung seminimal mungkin sehingga mudah diganti dan diuji."],
        ["mock", "objek palsu pengganti dependensi asli saat pengujian."],
        ["fixture", "kode persiapan (dan pembersihan) yang disuntikkan otomatis ke fungsi tes oleh pytest."],
        ["endpoint", "alamat URL pada API yang menerima permintaan dan membalas respons."],
        ["middleware", "kode perantara yang mencegat setiap permintaan/respons sebelum sampai ke tujuan."],
        ["orm", "Object-Relational Mapper: memetakan class Python ke tabel database sehingga data dikelola sebagai objek."],
        ["migrasi", "perubahan struktur tabel database yang dicatat berversi supaya bisa diterapkan atau dibatalkan."],
        ["cache", "penyimpanan sementara hasil yang mahal dihitung agar permintaan berikutnya lebih cepat."],
        ["ttl", "Time-To-Live: lama data cache boleh hidup sebelum kedaluwarsa."],
        ["broker", "perantara pesan (Redis, RabbitMQ, Kafka) yang menampung dan meneruskan pesan antar program."],
        ["jwt", "JSON Web Token: token bertanda tangan yang membuktikan identitas pengguna pada tiap permintaan."],
        ["hash", "sidik jari satu arah dari data; tidak bisa dikembalikan ke data aslinya."],
        ["salt", "teks acak yang ditambahkan sebelum hashing agar dua password sama menghasilkan hash berbeda."],
        ["embedding", "daftar angka (vektor) yang mewakili makna sebuah teks; teks mirip menghasilkan vektor berdekatan."],
        ["overfitting", "model terlalu hafal data latih sehingga buruk pada data baru."],
        ["tensor", "array multidimensi (seperti array NumPy) yang bisa dihitung di GPU dan dilacak turunannya."],
        ["gradien", "turunan yang menunjukkan ke arah mana bobot model harus digeser untuk mengurangi kesalahan."],
        ["dag", "Directed Acyclic Graph: kumpulan langkah berurutan tanpa putaran balik."],
        ["etl", "Extract (ambil), Transform (olah), Load (simpan): alur dasar pipeline data."],
        ["vektorisasi", "mengerjakan operasi ke seluruh array sekaligus oleh kode C, bukan loop Python per elemen."],
        ["serverless", "kode dijalankan sebagai fungsi yang dipicu event tanpa mengelola server sendiri."],
        ["kontainer", "paket terisolasi berisi aplikasi beserta dependensinya sehingga berjalan sama di mana pun."],
        ["replika", "salinan identik sebuah aplikasi yang berjalan bersamaan untuk berbagi beban."],
        ["linter", "alat yang memeriksa kode tanpa menjalankannya untuk menemukan salah tulis dan gaya buruk."],
        ["xss", "Cross-Site Scripting: penyerang menyisipkan skrip lewat input yang ditampilkan tanpa di-escape."],
        ["csrf", "Cross-Site Request Forgery: situs lain memaksa browser pengguna mengirim permintaan tanpa sepengetahuannya."],
        ["sql injection", "penyerang menyisipkan perintah SQL lewat input; dicegah dengan query berparameter."]
    ];
    function glossaryFor(text) {
        const low = text.toLowerCase().replace(/<[^>]*>/g, " ");
        return GLOSSARY.filter(function (g) {
            return new RegExp("(^|[^a-z0-9])" + g[0].replace(/[.*+?^${}()|[\]\\\/]/g, "\\$&") + "([^a-z0-9]|$)").test(low);
        }).slice(0, 6);
    }
    const PHASE_PREREQ = {
        "Professional": "Prasyarat: fondasi Python (fungsi, class, exception, file) dari fase Beginner sampai Expert.",
        "Architecture": "Prasyarat: OOP (class, pewarisan, dunder method) dan tes dasar dengan assert.",
        "Data Engineering": "Prasyarat: fondasi Python, list/dict/comprehension, dan baca-tulis file. Pandas dan NumPy diperkenalkan di awal fase.",
        "Web API": "Prasyarat: fungsi, class, dictionary/JSON, dan konsep HTTP dasar (Level HTTP &amp; REST).",
        "AI Engineering": "Prasyarat: list/dict, fungsi, class, dan dasar NumPy. Matematika yang dipakai cukup perkalian dan penjumlahan.",
        "DevOps": "Prasyarat: dasar terminal dan Git. Soal berupa berkas konfigurasi sehingga dinilai dari isi teks.",
        "Security & Performance": "Prasyarat: fungsi, class, exception, dan dasar jaringan (socket). Soal pustaka eksternal dinilai dari struktur kode.",
        "Enterprise Mastery": "Prasyarat: seluruh fase Web API dan DevOps. Level ini menggabungkan keduanya."
    };

    // Petunjuk tingkat 1: pertanyaan penuntun (tanpa kode). Tingkat 2 baru memberi hint asli, tingkat 3 contoh materi.
    function conceptHint(task, lvl) {
        const t = (task.task + " " + (lvl.title || "")).toLowerCase();
        const q = [];
        if (/rekursi|recurs/.test(t)) q.push("Apa kasus dasarnya (kondisi berhenti)? Lalu bagaimana soal bisa dikecilkan satu langkah pada pemanggilan berikutnya?");
        else if (/closure|nonlocal|fungsi dalam|bersarang/.test(t)) q.push("Variabel mana yang harus diingat fungsi dalam? Siapa yang menyimpannya, dan apa yang dikembalikan fungsi luar: fungsinya atau hasilnya?");
        else if (/\bwhile\b/.test(t)) q.push("Apa nilai awalnya, kapan kondisi menjadi salah, dan baris mana yang mengubah nilai agar loop akhirnya berhenti?");
        else if (/\bfor\b|perulangan|loop|range/.test(t)) q.push("Apa yang berubah di tiap putaran, dan berapa kali perulangan harus berjalan? Tulis dulu daftar nilai yang diharapkan.");
        else if (/class|objek|atribut|method/.test(t)) q.push("Data apa yang disimpan objek (atribut) dan apa yang bisa dilakukannya (method)? Apa yang diterima __init__?");
        else if (/dekorator|decorator|wrapper/.test(t)) q.push("Fungsi apa yang dibungkus, perilaku tambahan apa yang disisipkan, dan apa yang harus di-return oleh dekorator dan wrapper?");
        else if (/fungsi|def |return/.test(t)) q.push("Apa masukan (parameter) fungsi ini dan apa yang harus dikembalikan? Sudahkah fungsinya dipanggil dan hasilnya dicetak?");
        else if (/list|tuple|set|dictionary|kunci/.test(t)) q.push("Struktur data apa yang paling cocok untuk data ini, dan operasi mana (tambah, hapus, ambil) yang diminta soal?");
        else if (/format|f-string|string|teks|huruf/.test(t)) q.push("Teks apa yang harus tampil persis, dan bagian mana yang berasal dari variabel atau hitungan?");
        else if (/test|assert|pytest|uji/.test(t)) q.push("Apa yang harus selalu benar dari fungsi ini? Tulis satu masukan dan hasil yang kamu harapkan sebelum menulis assert.");
        else if (/jika|if |kondisi|bandingkan/.test(t)) q.push("Kondisi apa yang diperiksa, dan apa yang tercetak untuk tiap kemungkinan (benar dan salah)?");
        else q.push("Pecah soal menjadi langkah kecil: apa yang harus dibuat, apa yang harus diproses, dan apa yang harus dicetak?");
        const toks = apiTokens(task.task);
        q.push("Cari di tab Materi/Alat bantu istilah yang disebut soal" + (toks.length ? " (" + toks.join(", ") + ")" : "") + " dan baca contohnya.");
        return task.hint0 ? task.hint0 : q.join(" ");
    }

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
            t.expect = EXPECT[lvl.id + "-" + i] || t.expect || null;
            t.check = CHECKS[lvl.id + "-" + i] || t.check || null;
            t.needsIn = !!t.needsIn || vsrc.indexOf("\\bin\\b") !== -1;
            t.noStrings = STRING_BLIND_LEVELS.has(lvl.id);
            const lengthOnly = /^\s*c\s*=>\s*c\.length\s*>\s*\d+\s*$/.test(vsrc);
            t.minChars = (lengthOnly && !TEXT_LEVELS.has(lvl.id)) ? 25 : 6; // soal uraian wajib dijawab dengan beberapa kalimat/baris
            if (!t.noAuto && !t.expect && !t.check && !t.forceText && !TEXT_LEVELS.has(lvl.id) && /^\s*c\s*=>\s*(!?c\.includes\([^)]*\)\s*(&&|\|\|)?\s*)+$/.test(vsrc) && !/[\/]/.test(vsrc.replace(/"[^"]*"|'[^']*'/g, ""))) {
                t.weak = true;
                if (t.minStmt === undefined) t.minStmt = 2;
                t.apiNeed = apiTokens(t.task);
            }
            if (lengthOnly && !t.forceText) t.textNeed = keyTerms(t.task + " " + (t.hint || ""));
            if (TEXT_LEVELS.has(lvl.id) || lengthOnly || (lvl.id === 85 && i >= 5 && i <= 8)) t.mode = "text";
            if (t.forceText) { t.mode = "text"; t.minChars = Math.max(t.minChars, 15); }
        });
        lvl.xp = xpForLevel(lvl.no);
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
            "import warnings",
            "warnings.filterwarnings('ignore', message='FigureCanvasAgg is non-interactive.*')",
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
            "        await r",
            "def _info(code):",
            "    t = ast.parse(code)",
            "    used = {n.id for n in ast.walk(t) if isinstance(n, ast.Name) and isinstance(n.ctx, ast.Load)} | {n.attr for n in ast.walk(t) if isinstance(n, ast.Attribute)}",
            "    fn = (ast.FunctionDef, ast.AsyncFunctionDef)",
            "    unused = [n.name for n in t.body if isinstance(n, fn) and not n.decorator_list and not n.name.startswith('_') and not n.name.startswith('test') and n.name not in used]",
            "    cond = (ast.Compare, ast.BoolOp, ast.UnaryOp)",
            "    tif = [n.lineno for n in ast.walk(t) if isinstance(n, ast.If) and (not any(isinstance(x, cond) for x in ast.walk(n.test)) or (isinstance(n.test, ast.Compare) and isinstance(n.test.left, ast.Constant) and all(isinstance(c, ast.Constant) for c in n.test.comparators)))]",
            "    twh = [n.lineno for n in ast.walk(t) if isinstance(n, ast.While) and isinstance(n.test, ast.Constant)]",
            "    cin = any(isinstance(n, ast.Compare) and any(isinstance(o, (ast.In, ast.NotIn)) for o in n.ops) for n in ast.walk(t))",
            "    nst = sum(1 for n in ast.walk(t) if isinstance(n, ast.stmt))",
            "    loops = (ast.For, ast.While, ast.If)",
            "    emp = [n.lineno for n in ast.walk(t) if isinstance(n, loops) and len(n.body) == 1 and isinstance(n.body[0], ast.Pass)]",
            "    return {'unused': unused, 'trivialIf': tif, 'trivialWhile': twh, 'cmpIn': cin, 'nstmt': nst, 'emptyBody': emp}"
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
            if (ev.data.preload) {   // pra-muat paket dari import pada kode contoh (tanpa menjalankannya)
                await ready;
                if (pyodide) { try { await pyodide.loadPackagesFromImports(ev.data.preload); } catch (e) { /* abaikan */ } }
                return;
            }
            const id = ev.data.id;
            const code = ev.data.code;
            const stdin = ev.data.stdin || [];
            const check = ev.data.check || null;
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
                let info = null;
                try { const ip = pyodide.globals.get("_info")(code); info = ip.toJs({ dict_converter: Object.fromEntries }); ip.destroy(); } catch (e) { /* abaikan */ }
                if (check) {
                    try { pyodide.runPython(check, { globals: g }); }
                    catch (ce) {
                        const cm = String((ce && ce.message) || ce).trim().split("\n").pop();
                        postMessage({ type: "result", id: id, status: "checkfail", message: cm, info: info });
                        return;
                    }
                }
                postMessage({ type: "result", id: id, status: "ok", info: info });
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
                info: m.info || null,
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
                worker.postMessage({ id: job.id, code: code, stdin: stdin, check: (hooks && hooks.check) || null });
            });
        }

        const preloaded = new Set();
        function preload(key, code) {
            if (state !== "ready" || current || !worker || preloaded.has(key) || !/^\s*(import|from)\s+\w/m.test(code)) return;
            preloaded.add(key);
            worker.postMessage({ preload: code });
        }

        return {
            start: start,
            run: run,
            preload: preload,
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
        settings: { lockOrder: false, dailyGoal: 3, track: "all" },
        activity: {}   // { "2026-10-17": jumlahSoalSelesai }
    };

    let storageWarned = false;

    function serialize() {
        const done = {};
        Object.keys(state.done).forEach(function (id) {
            done[id] = Array.from(state.done[id]).sort(function (a, b) { return a - b; });
        });
        return {
            version: 2,
            savedAt: Date.now(),
            done: done,
            drafts: state.drafts,
            settings: state.settings,
            activity: state.activity,
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
        if (window.OdysseyCloud) window.OdysseyCloud.markDirty(); // sinkron ke Supabase (jika login)
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
        const rg = raw.settings && raw.settings.dailyGoal;
        state.settings.dailyGoal = [1, 3, 5, 10].indexOf(rg) !== -1 ? rg : 3;
        const rt = raw.settings && raw.settings.track;
        state.settings.track = (typeof rt === "string" && Object.prototype.hasOwnProperty.call(TRACKS, rt)) ? rt : "all";
        const act = {};
        if (raw.activity && typeof raw.activity === "object") {
            Object.keys(raw.activity).forEach(function (k) {
                if (/^\d{4}-\d{2}-\d{2}$/.test(k) && Number.isInteger(raw.activity[k]) && raw.activity[k] > 0) act[k] = raw.activity[k];
            });
        }
        state.activity = act;
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
    // Jalur belajar: fondasi (Beginner-Advanced) selalu tampil; level lanjutan menyesuaikan jalur.
    const FOUNDATION = new Set(["Beginner", "Intermediate", "Advanced"]);
    const TRACKS = {
        all: { label: "Semua level", ids: null },
        data: { label: "Data & Analitik", ids: [113, 112, 126, 59, 60, 66, 62, 65, 63, 61, 64, 67, 68, 134, 119, 69] },
        backend: { label: "Backend & API", ids: [49, 50, 79, 113, 51, 52, 57, 56, 89, 53, 90, 54, 55, 58, 135, 118, 80, 81, 82, 83, 84, 88, 138, 97, 98, 99, 139] },
        ai: { label: "AI Engineering", ids: [112, 126, 119, 69, 76, 77, 70, 127, 71, 78, 72, 73, 74, 75, 136] }
    };
    Object.keys(TRACKS).forEach(function (k) { TRACKS[k].set = TRACKS[k].ids ? new Set(TRACKS[k].ids) : null; });
    function inTrack(lvl) {
        const t = TRACKS[state.settings.track] || TRACKS.all;
        return !t.set || FOUNDATION.has(lvl.category) || t.set.has(lvl.id);
    }
    function visibleLevels() { return levelsData.filter(inTrack); }
    function prevVisible(lvl) {
        const v = visibleLevels(), i = v.indexOf(lvl);
        return i > 0 ? v[i - 1] : null;
    }
    function isLocked(lvl) {
        if (!state.settings.lockOrder) return false;
        const p = prevVisible(lvl);
        return !!p && !isLevelComplete(p);
    }
    function firstUndone(lvl) {
        for (let i = 0; i < lvl.tasks.length; i++) if (!isTaskDone(lvl, i)) return i;
        return 0;
    }
    function ensureUnlocked() {
        if (!isLocked(currentLevel())) return;
        const vis = visibleLevels();
        const target = vis.find(function (l) { return !isLevelComplete(l); }) || vis[0] || levelsData[0];
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
        const sk = $("streak-text");
        if (sk) {
            sk.textContent = streak() + " hari";
            sk.title = "Target harian: " + (state.activity[dayKey()] || 0) + " / " + state.settings.dailyGoal + " soal";
        }
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
        ].join(" "), String(lvl.no));

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
                toast("Selesaikan Level " + (prevVisible(lvl) || { no: lvl.no - 1 }).no + " dulu untuk membuka level ini.", "warn");
                return;
            }
            closeSidebar();
            goTo(lvl.id, firstUndone(lvl));
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
                return inTrack(lvl) && (!q || (lvl.no + " " + lvl.category + " " + lvl.shortTitle).toLowerCase().indexOf(q) !== -1);
            });
            if (!matches.length) return;
            const groupVis = group.levels.filter(inTrack);
            const doneLevels = groupVis.filter(isLevelComplete).length;
            const header = el("div", "sticky top-0 z-10 bg-slate-900/95 backdrop-blur-sm flex justify-between items-center px-2 py-1.5 text-[10px] uppercase tracking-wider font-bold text-slate-400");
            header.append(el("span", "text-indigo-400", group.category), el("span", "", doneLevels + "/" + groupVis.length));
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

    let hlMode = "python";
    let errorLine = 0; // baris yang menyebabkan error (0 = tidak ada), disorot di nomor baris
    function updateLineNumbers() {
        const editor = $("code-input");
        const count = editor.value.split("\n").length;
        const nums = $("line-numbers");
        const key = count + ":" + errorLine;
        if (nums.dataset.key !== key) {
            const frag = document.createDocumentFragment();
            for (let i = 1; i <= count; i++) frag.appendChild(el("div", i === errorLine ? "ln ln-err" : "ln", String(i)));
            nums.replaceChildren(frag);
            nums.dataset.key = key;
        }
        nums.scrollTop = editor.scrollTop;
        renderHighlight();
    }
    function lineFromMessage(msg) {
        const re = /File "<exec>", line (\d+)/g;
        let last = null, x;
        while ((x = re.exec(msg))) last = x[1];
        if (!last) { const m = /\(baris (\d+)\)/.exec(msg); if (m) last = m[1]; }
        return last ? parseInt(last, 10) : 0;
    }
    function markErrorLine(n) {
        const editor = $("code-input");
        const total = editor.value.split("\n").length;
        errorLine = (n >= 1 && n <= total) ? n : 0;
        updateLineNumbers();
        if (errorLine) {
            editor.scrollTop = Math.max(0, (errorLine - 3) * 22);
            $("line-numbers").scrollTop = editor.scrollTop;
            syncHighlightScroll();
        }
    }

    function showPlaceholder(text) {
        const out = $("code-output");
        out.replaceChildren(el("span", "text-slate-500", text));
        out.dataset.ph = "1";
    }

    function setGrading(kind) {
        const b = $("badge-grading");
        if (!b) return;
        const map = {
            run: ["▶ Dinilai dengan menjalankan kode", "border-emerald-500/30 text-emerald-300 bg-emerald-500/10"],
            text: ["📝 Dinilai dari isi teks jawaban", "border-amber-500/30 text-amber-300 bg-amber-500/10"],
            limited: ["🧩 Library tak tersedia di browser: dinilai dari struktur kode", "border-amber-500/30 text-amber-300 bg-amber-500/10"]
        };
        b.textContent = map[kind][0];
        b.className = "text-[11px] font-semibold px-2.5 py-1 rounded-full border " + map[kind][1];
    }

    /* ------------------------------------------------------------------
       Pemformat teks materi, alat bantu, dan soal.
       Hanya mengubah TAMPILAN (data di curriculum.js tidak disentuh), sehingga
       berlaku otomatis untuk semua level dan tidak memengaruhi penilaian.
       ------------------------------------------------------------------ */
    /*FMT-START*/
    const ABBR_RE = /(?:^|[\s(>])(mis|dst|dll|dsb|dkk|yg|dgn|cth|no|spt|tsb|vs|jml)$/i;
    const FMT_TAGS = ["code", "b", "i"];
    function tagsBalanced(s) {
        return FMT_TAGS.every(function (t) {
            return (s.match(new RegExp("<" + t + "[ >]", "g")) || []).length === (s.match(new RegExp("</" + t + ">", "g")) || []).length;
        });
    }
    function plainLen(s) { return s.replace(/<[^>]*>/g, "").length; }
    function fmtBackticks(s) { return s.replace(/`([^`<>\n]+)`/g, "<code>$1</code>"); }

    /* Pecah teks menjadi kalimat tanpa memotong di dalam <code>/<b>/<i>, singkatan (mis., dst.), atau entitas HTML.
       opts.semi: titik koma yang diikuti <code>/<b> juga memisahkan (dipakai untuk daftar alat bantu).
       opts.strip: buang tanda baca penutup di tiap potongan. */
    function splitSentences(s, opts) {
        opts = opts || {};
        const out = [], re = /([.;!?])\s+(?=<code>|<b>|[A-Z])/g;
        let last = 0, m;
        while ((m = re.exec(s))) {
            const chunk = s.slice(last, m.index + 1);
            if (!tagsBalanced(chunk)) continue;
            if (m[1] === ";") {
                if (!opts.semi || !/^<(code|b)>/.test(s.slice(re.lastIndex)) || /&\w+;$/.test(chunk)) continue;
            } else if (m[1] === "." && ABBR_RE.test(s.slice(0, m.index))) continue;
            out.push(s.slice(last, m.index + (opts.strip ? 0 : 1)));
            last = re.lastIndex;
        }
        out.push(s.slice(last));
        return out.map(function (x) { return (opts.strip ? x.replace(/[;.]\s*$/, "") : x).trim(); }).filter(Boolean);
    }
    /* Pecah butir panjang yang memakai pemisah " | " (di luar <code>). */
    function splitPipes(s) {
        const out = [];
        let last = 0, i;
        while ((i = s.indexOf(" | ", last)) !== -1) {
            if (!tagsBalanced(s.slice(last, i))) { i = s.indexOf(" | ", i + 3); if (i === -1) break; }
            if (tagsBalanced(s.slice(last, i))) { out.push(s.slice(last, i)); last = i + 3; } else break;
        }
        out.push(s.slice(last));
        return out.filter(function (x) { return x.trim(); });
    }
    /* "Aturan nama: huruf..." -> frasa sebelum titik dua dicetak tebal agar mudah dipindai. */
    function leadify(li) {
        const m = /^([^<:\n]{2,38}):\s+([\s\S]+)$/.exec(li);
        return m ? '<b class="lead">' + m[1] + "</b>: " + m[2] : li;
    }
    /* Satu butir bisa memuat banyak hal. Bila beberapa kalimatnya diawali istilah tebal
       (mis. "<b>int</b> = ...", "<b>float</b> = ..."), tiap istilah menjadi butir sendiri;
       selain itu kalimat pertama jadi butir utama dan kalimat berikutnya baris pendukung di bawahnya. */
    function bulletItems(x) {
        const sents = splitSentences(x);
        if (sents.length < 2) return ["<li>" + leadify(x) + "</li>"];
        if (sents.filter(function (t) { return /^<(b|code)>/.test(t); }).length >= 2) {
            return sents.map(function (t) { return "<li>" + t + "</li>"; });
        }
        return ["<li>" + leadify(sents[0]) + sents.slice(1).map(function (t) { return '<span class="sub">' + leadify(t) + "</span>"; }).join("") + "</li>"];
    }
    function secTitle(t) {
        t = t.trim();
        if (/^definisi konsep/i.test(t)) return "Konsep";
        if (/^poin penting/i.test(t)) return "Poin penting";
        return t;
    }

    /* Daftar alat bantu: satu istilah per butir (dipecah dari baris, ';' dan kalimat). */
    function toolItems(html) {
        const out = [];
        fmtBackticks(html).split("<br>").forEach(function (seg) {
            seg = seg.trim();
            if (seg) splitSentences(seg, { semi: true, strip: true }).forEach(function (x) { out.push(x); });
        });
        return out;
    }

    /* Soal: kutipan, pemanggilan fungsi, dan nama variabel disorot sebagai kode; tiap kalimat di barisnya sendiri. */
    const TASK_TOKEN = new RegExp([
        "(?:\\b[fFrRbB])?'[^'\\n]{1,90}'",
        '(?:\\b[fFrRbB])?"[^"\\n]{1,90}"',
        "\\.?[A-Za-z_]\\w*(?:\\.\\w+)*\\([^()\\n]*\\)",
        "__\\w+__",
        "@[A-Za-z_][\\w.]*",
        "\\b[a-z]+(?:_[a-z0-9]+)+\\b"
    ].join("|"), "g");
    function renderTask(text) {
        const s = String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            .replace(TASK_TOKEN, function (m) { return "<code>" + m + "</code>"; });
        return splitSentences(s).map(function (line, i) {
            let cls = "task-line";
            if (i > 0 && /^(Cetak|Tampilkan|Hasilnya|Output|Hasil)\b/.test(line)) cls += " task-out";
            if (i === 0) line = line.replace(/^([A-Z][A-Za-z ]{2,18}):\s/, '<b class="task-label">$1:</b> ');
            return '<p class="' + cls + '">' + line + "</p>";
        }).join("");
    }

    /* Pecah teks materi menjadi bagian terstruktur: judul (.sec), paragraf, dan daftar poin (ul.pts).
       Bagian "Baca contoh baris demi baris" dan "Contoh & output" dipindah ke tab Contoh. */
    function lessonParts(html) {
        const h = fmtBackticks(html)
            .replace(/<span class="sec">([^<]*)<\/span>/g, "<br>\u0001$1\u0001<br>")
            .replace(/(^|<br>)\s*<b>([^<]{2,70}?)\s*:\s*<\/b>\s*:?\s*/g, function (m, a, t) { return "<br>\u0001" + t + "\u0001<br>"; });
        const out = { materi: "", contoh: "" };
        let target = "materi", ul = null, kind = "";
        function flush() {
            if (ul) { out[target] += '<ul class="pts' + (kind ? " " + kind : "") + '">' + ul.join("") + "</ul>"; ul = null; }
        }
        h.split("<br>").forEach(function (seg) {
            seg = seg.trim();
            if (!seg) return;
            if (seg.charAt(0) === "\u0001") {
                flush();
                const t = secTitle(seg.replace(/\u0001/g, ""));
                target = /baris demi baris|contoh\s*(&amp;|&)?\s*output/i.test(t) ? "contoh" : "materi";
                kind = /kesalahan/i.test(t) ? "warn" : "";
                out[target] += '<span class="sec' + (kind ? " sec-warn" : "") + '">' + t + "</span>";
                return;
            }
            if (seg.slice(0, 2) === "\u2022 ") {
                splitPipes(seg.slice(2)).forEach(function (x) { bulletItems(x.trim()).forEach(function (li) { (ul = ul || []).push(li); }); });
                return;
            }
            flush();
            (plainLen(seg) > 230 ? splitSentences(seg) : [seg]).forEach(function (p) { out[target] += "<p>" + p + "</p>"; });
        });
        flush();
        return out;
    }
    /*FMT-END*/

    /* Tab Contoh: kode berwarna seperti editor + nomor baris + penjelasan baris demi baris */
    function renderExample(lvl, notesHtml) {
        const isText = TEXT_LEVELS.has(lvl.id);
        $("level-example").firstElementChild.innerHTML = isText ? escHtml(lvl.example) : highlightPython(lvl.example);
        $("example-ln").textContent = lvl.example.split("\n").map(function (_, i) { return i + 1; }).join("\n");
        $("example-file").textContent = isText ? "contoh.txt" : "contoh.py";
        const n = $("example-notes");
        const imp = (lvl.example.match(/^\s*(?:from|import)\s+([A-Za-z_]\w*)/gm) || []).map(function (x) { return x.replace(/^\s*(from|import)\s+/, ""); });
        const blocked = imp.filter(function (m) { return UNAVAILABLE_LIBS.test(m); });
        const note = (blocked.length && !isText) ? '<p class="ex-note">🧩 Contoh ini memakai <code>' + blocked.join("</code>, <code>") + '</code> yang tidak tersedia di browser. Baca sebagai <b>contoh tampilan</b>; hasil di komentar bawah kode adalah gambaran keluaran aslinya.</p>' : "";
        n.innerHTML = note + notesHtml; // konten kurikulum milik aplikasi (tepercaya)
        n.classList.toggle("hidden", !(note + notesHtml));
    }

    function renderLevel() {
        const lvl = currentLevel();
        const task = currentTask();
        $("bg-level-watermark").textContent = lvl.no < 10 ? "0" + lvl.no : String(lvl.no);
        $("badge-category").textContent = lvl.category;
        $("badge-xp").textContent = "+" + taskXp(lvl) + " XP / soal";
        $("badge-subtask").textContent = "Soal " + (state.taskIndex + 1) + " dari " + lvl.tasks.length;
        setGrading(task.mode === "text" ? "text" : "run");
        $("level-title").textContent = lvl.title;
        const parts = lvl.desc.split(/(?:<br><br>)?<b>Alat bantu yang dipakai di soal:<\/b>\s*/);
        const lz = lessonParts(parts[0]);
        const gl = glossaryFor(parts[0]);
        const pre = PHASE_PREREQ[lvl.category];
        $("level-desc").innerHTML = (pre && lz.materi.indexOf("Prasyarat:") === -1 ? '<p class="prereq">' + pre + "</p>" : "") + lz.materi +
            (gl.length ? '<span class="sec">Istilah</span><ul class="pts">' + gl.map(function (g) { return "<li><b class=\"lead\">" + g[0] + "</b>: " + g[1] + "</li>"; }).join("") + "</ul>" : ""); // konten milik aplikasi (tepercaya)
        const tb = $("level-tools");
        if (parts[1]) {
            tb.innerHTML = '<div class="tools-title">🧰 Alat bantu yang dipakai di soal</div><p class="tools-sub">Istilah yang muncul di soal, dijelaskan singkat.</p><ul class="tools-list">' +
                toolItems(parts[1]).map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>";
            tb.dataset.has = "1";
        } else { tb.innerHTML = ""; tb.dataset.has = ""; }
        renderExample(lvl, lz.contoh);
        if (!TEXT_LEVELS.has(lvl.id)) PyEngine.preload(lvl.id, lvl.example);   // numpy/pandas/dll. diunduh di latar belakang
        $("level-task").innerHTML = renderTask(task.task);   // teks soal milik aplikasi; di-escape lalu disorot

        const editor = $("code-input");
        editor.value = state.drafts[draftKey()] || "";
        hlMode = task.mode === "text" ? "text" : "python";
        extraInput = [];
        errorLine = 0;
        updateLineNumbers();
        const isText = task.mode === "text";
        $("file-label").textContent = isText ? "jawaban.txt" : "main.py";
        editor.placeholder = isText ? "# Tulis perintah / konfigurasi / catatan jawaban di sini..." : "# Tulis kode Python solusi kamu di sini...";
        showPlaceholder(isText
            ? "// Soal ini berupa teks/konfigurasi: tidak dijalankan sebagai Python. Klik Periksa Jawaban untuk menilai isinya."
            : "// Output program akan muncul di sini setelah dijalankan...");
        renderDots();
        setTab(currentTab);
    }

    /* ---------- Tab Materi / Contoh / Latihan ---------- */
    let currentTab = "materi";
    function setTab(t) {
        currentTab = t;
        document.querySelectorAll("[data-pane]").forEach(function (n) {
            const show = n.dataset.pane === t && (n.id !== "level-tools" || !!n.dataset.has);
            n.classList.toggle("hidden", !show);
        });
        document.querySelectorAll("[data-tab]").forEach(function (b) {
            const on = b.dataset.tab === t;
            b.setAttribute("aria-selected", String(on));
            b.className = "px-4 py-2 text-sm font-semibold rounded-lg border transition " +
                (on ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500");
        });
    }

    /* ---------- Streak harian ---------- */
    function dayKey(d) { d = d || new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
    function streak() {
        const d = new Date();
        if (!state.activity[dayKey(d)]) d.setDate(d.getDate() - 1);
        let n = 0;
        while (state.activity[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
        return n;
    }

    function renderAll() {
        renderHeader();
        renderSidebar();
        renderLevel();
        $("opt-lock").checked = state.settings.lockOrder;
        $("track-select").value = state.settings.track;
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
        currentTab = levelChanged ? "materi" : "latihan";
        renderAll();
        saveSoon();
        if (levelChanged) {
            const active = $("level-list").querySelector('[aria-current="true"]');
            if (active) active.scrollIntoView({ block: "nearest" });
        }
        // HP & tablet: layar sempit, jadi bawa pembaca ke awal materi/soal setelah pindah
        if (window.matchMedia && window.matchMedia("(max-width: 1023px)").matches) {
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const t = $("level-title");
            if (t) t.scrollIntoView({ block: "start", behavior: reduce ? "auto" : "smooth" });
        }
    }

    function goNext() {
        const lvl = currentLevel();
        const n = lvl.tasks.length;
        for (let k = 1; k <= n; k++) {
            const i = (state.taskIndex + k) % n;
            if (!isTaskDone(lvl, i)) { goTo(lvl.id, i); return; }
        }
        const next = visibleLevels().find(function (l) { return l.no > lvl.no; });
        if (next && !isLocked(next)) { goTo(next.id, firstUndone(next)); return; }
        if (next) { toast("Level berikutnya masih terkunci. Selesaikan semua soal level ini dulu.", "warn"); return; }
        if (completedLevelCount() === levelsData.length) { showFinish(); return; }
        const pending = visibleLevels().find(function (l) { return !isLevelComplete(l) && !isLocked(l); });
        if (pending) { toast("Ini level terakhir. Pindah ke level yang belum selesai.", "info"); goTo(pending.id, firstUndone(pending)); }
    }

    /* ---------- Sidebar mobile ---------- */
    function openSidebar() {
        $("sidebar").classList.add("mobile-open");
        document.body.style.overflow = "hidden";
        $("btn-menu").setAttribute("aria-expanded", "true");
        $("level-search").focus({ preventScroll: true });
    }
    function closeSidebar() {
        const sb = $("sidebar");
        if (!sb.classList.contains("mobile-open")) return;
        sb.classList.remove("mobile-open");
        document.body.style.overflow = "";
        $("btn-menu").setAttribute("aria-expanded", "false");
    }

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

    async function runAndRender(code, check, opts) {
        // Jika murid pindah soal selagi kode jalan, jangan tulis output ke soal yang baru.
        const lid = state.levelId, tix = state.taskIndex;
        const same = function () { return lid === state.levelId && tix === state.taskIndex; };
        outPending("Menjalankan kode Python…");
        markErrorLine(0);
        let started = false;
        let figures = 0;
        function begin() { if (!started) { started = true; outClear(); } }
        const baseStdin = getStdin().length ? getStdin() : (currentTask().stdin || []);
        const res = await PyEngine.run(code, baseStdin.concat(opts && opts.interactive ? extraInput : []), {
            check: check,
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
        if (opts && opts.interactive && res.status === "error" && res.errType === "EOFError" && /isi kolom Input/.test(res.message)) {
            promptForInput(code);   // program minta input lagi: tampilkan kolom ketik di terminal
            return res;
        }
        renderResult(res);
        return res;
    }

    const ERR_ID = {
        NameError: "Nama/variabel belum dibuat atau salah ketik. Pastikan ejaannya sama persis dan variabel dibuat sebelum dipakai.",
        SyntaxError: "Tata tulis kode salah: periksa tanda kurung, kutip, titik dua (:) di akhir if/for/def, dan tanda sama dengan.",
        IndentationError: "Indentasi (spasi menjorok) tidak sesuai. Isi blok if/for/def/class harus menjorok 4 spasi.",
        TabError: "Indentasi mencampur Tab dan spasi. Pakai spasi saja.",
        TypeError: "Tipe data tidak cocok untuk operasi ini (mis. teks + angka) atau jumlah argumen fungsi salah.",
        ValueError: "Nilainya tidak bisa diproses (mis. int('abc')). Periksa isi data yang dikonversi.",
        IndexError: "Indeks di luar batas list/string. Ingat indeks dimulai dari 0.",
        KeyError: "Kunci dictionary tidak ditemukan. Periksa ejaan kunci atau pakai .get().",
        ZeroDivisionError: "Terjadi pembagian dengan nol.",
        AttributeError: "Objek ini tidak punya atribut/method tersebut. Periksa ejaan dan tipe objeknya.",
        ModuleNotFoundError: "Modul tidak ditemukan. Periksa ejaan import-nya.",
        ImportError: "Nama yang diimpor tidak ada di modul itu.",
        RecursionError: "Fungsi memanggil dirinya terlalu dalam. Pastikan ada kasus dasar yang menghentikan rekursi.",
        AssertionError: "Pernyataan assert tidak terpenuhi: hasil kode belum sesuai harapan."
    };
    function explainError(type, msg) {
        const base = ERR_ID[type];
        if (!base) return "";
        const re = /File "<exec>", line (\d+)/g;
        let last = null, x;
        while ((x = re.exec(msg))) last = x[1];
        if (!last) { const s = /\(baris (\d+)\)/.exec(msg); if (s) last = s[1]; }
        return "💬 " + base + (last ? " Periksa baris " + last + " di editor." : "");
    }

    function renderResult(res) {
        switch (res.status) {
            case "ok":
                if (!res.hasOutput) outLine("✔ Program selesai tanpa output. Gunakan print() untuk menampilkan hasil.", CLS.dim);
                else outLine("\n✔ Selesai (" + res.ms + " ms)", CLS.dim);
                break;
            case "syntax":
                markErrorLine(lineFromMessage(res.message));
                outLine("Kode belum bisa dijalankan karena kesalahan sintaks:", CLS.bad);
                outLine(res.message, CLS.err);
                outLine(explainError(res.message.split(":")[0], res.message), CLS.warn);
                break;
            case "checkfail":
                outLine((res.chunks.length ? "\n" : "") + "✘ Kode berjalan, tetapi hasilnya belum sesuai soal: " + res.message, CLS.err);
                break;
            case "error":
                markErrorLine(lineFromMessage(res.message));
                outLine((res.chunks.length ? "\n" : "") + res.message, CLS.err);
                if (explainError(res.errType, res.message)) outLine("\n" + explainError(res.errType, res.message), CLS.warn);
                break;
            case "timeout":
                outLine("\n⏱ " + (res.reason === "outlimit"
                    ? "Program dihentikan karena output terlalu banyak."
                    : "Program dihentikan karena berjalan lebih dari " + (EXEC_LIMIT_MS / 1000) + " detik (mungkin ada loop yang tidak pernah berhenti)."), CLS.warn);
                break;
            case "limited":
                setGrading("limited");
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
        extraInput = [];
        try { await runAndRender(code, null, { interactive: true }); } finally { setBusy(false); }
    }

    // Pencocokan kata utuh: "if" tidak lagi cocok dengan "elif"/"diff", "for" dengan "format", "*" dengan "**".
    class Src extends String {
        includes(x) {
            const s = String(this);
            if (typeof x === "string") {
                if (/^\w+$/.test(x)) return new RegExp("(^|\\W)" + x + "(\\W|$)").test(s);
                if (x === "*") return /(^|[^*])\*(?!\*)/.test(s);
                if (x === "/") return /(^|[^/])\/(?!\/)/.test(s);
            }
            return String.prototype.includes.call(s, x);
        }
    }
    function runValidator(task, lvl, src) {
        try {
            if (task.validate(new Src(src))) return true;
            // Validator level 78+ ditulis huruf kecil; kode murid (mis. AutoTokenizer) dicek tanpa peka huruf besar/kecil.
            return lvl.id >= 78 && lvl.id <= 100 && !!task.validate(new Src(src.toLowerCase()));
        } catch (e) { return false; }
    }

    function structureOk(code, task, lvl) {
        if (task.mode === "text") {
            // Teks apa adanya: tanda # bermakna di Dockerfile/YAML/C, jadi komentar tidak dibuang.
            return runValidator(task, lvl, code) && code.replace(/\s+/g, "").length >= (task.minChars || 6) && textNeedOk(code, task);
        }
        // Komentar dibuang; untuk level 1-48 isi string juga dikosongkan agar print("def return") tidak lolos.
        const stripped = stripPyComments(code, !!task.noStrings);
        return runValidator(task, lvl, stripped) && apiOk(stripPyComments(code, false), task);
    }

    function judge(code, task, lvl, res) {
        const norm = function (x) { return String(x).replace(/\s+/g, " ").trim().toLowerCase(); };
        const nc = norm(code);
        if (nc === norm(lvl.example) || (task.mode === "text" ? nc.indexOf(norm(task.task)) !== -1 : nc === norm(task.task))) {
            return { pass: false, reason: "Jawaban sama dengan contoh materi atau teks soal. Tulis jawabanmu sendiri sesuai instruksi." };
        }
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
            case "checkfail":
                return { pass: false, reason: "Kode berjalan, tetapi hasilnya belum sesuai soal: " + res.message };
            case "timeout":
                return { pass: false, reason: "Kode tidak selesai tepat waktu (cek apakah ada loop yang tidak pernah berhenti)." };
            case "ok": {
                if (!structOk) return { pass: false, reason: "Kode berjalan tanpa error, tetapi " + notMatching.charAt(0).toLowerCase() + notMatching.slice(1) };
                const inf = res.info;
                if (inf) {
                    if (!task.skipUnused && /(cetak|print|tampilkan|uji|panggil)/i.test(task.task) && inf.unused && inf.unused.length) return { pass: false, reason: "Fungsi " + inf.unused.join(", ") + " dibuat tetapi tidak pernah dipakai. Panggil fungsinya (dan cetak hasilnya jika diminta) agar bisa diperiksa." };
                    if ((lvl.id === 4 || lvl.id === 5) && inf.trivialIf && inf.trivialIf.length) return { pass: false, reason: "Kondisi if harus berupa perbandingan atau logika (mis. umur >= 17), bukan sekadar nilai variabel atau konstanta." };
                    if (task.needsIn && !inf.cmpIn) return { pass: false, reason: "Soal ini meminta operator keanggotaan: pakai 'in' dalam perbandingan (mis. 'kucing' in hewan), bukan 'for ... in'." };
                    if (inf.emptyBody && inf.emptyBody.length && !task.allowPass) return { pass: false, reason: "Ada perulangan/percabangan yang isinya hanya 'pass' (baris " + inf.emptyBody.join(", ") + "). Isi blok dengan kode yang benar-benar mengerjakan soal." };
                    if (task.minStmt && inf.nstmt < task.minStmt) return { pass: false, reason: "Jawabanmu terlalu singkat untuk soal ini (minimal " + task.minStmt + " pernyataan kode). Lengkapi langkah-langkah yang diminta soal." };
                    if (lvl.id === 7 && inf.trivialWhile && inf.trivialWhile.length) return { pass: false, reason: "Kondisi while tidak boleh konstanta; pakai kondisi yang berubah (mis. i <= 3)." };
                }
                const stdout = res.chunks.filter(function (c) { return c.stream === "stdout"; }).map(function (c) { return c.text; }).join("");
                const anyOut = res.figures > 0 || res.chunks.some(function (c) { return c.text.trim() !== ""; });
                if (task.needsStdout && !res.hasOutput) return { pass: false, reason: "Kode berjalan, tetapi tidak menampilkan output. Pastikan memakai print() dan, jika membuat fungsi, memanggilnya." };
                if (task.needsAnyOutput && !anyOut) return { pass: false, reason: "Soal meminta hasil dicetak, tetapi program tidak menampilkan apa pun. Gunakan print() dan panggil fungsi yang kamu buat." };
                if (task.expect && !task.expect.test(stdout)) return { pass: false, reason: "Program berjalan, tetapi hasil yang dicetak belum sesuai dengan yang diminta soal. Cek lagi nilai dan teks yang dicetak.\n\nOutput kamu:\n" + (stdout.trim().slice(0, 200) || "(kosong)") + (task.expect.want ? "\n\nOutput yang diharapkan:\n" + task.expect.want.join("\n") : "") };
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
        const dk = dayKey();
        state.activity[dk] = (state.activity[dk] || 0) + 1;
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
            try { res = await runAndRender(code, task.check); } finally { setBusy(false); }
        }

        // Murid mungkin berpindah soal selagi kode berjalan; jangan beri kredit ke soal yang salah.
        if (lvl.id !== state.levelId || idx !== state.taskIndex) return;

        const verdict = judge(code, task, lvl, res);
        outLine("", CLS.dim);
        if (!verdict.pass) {
            fails[draftKey()] = (fails[draftKey()] || 0) + 1;
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
            const todayN = state.activity[dayKey()] || 0;
            if (todayN === state.settings.dailyGoal) {
                outLine("🎯 Target harian tercapai! (" + todayN + " soal hari ini)", CLS.ok);
                toast("🎯 Target harian tercapai!", "success", 4500);
            }
            if (result.levelCompleted) {
                confetti();
                outLine("🏆 Level " + lvl.no + " tuntas! Bonus +" + result.bonus + " XP", CLS.ok);
                outLine(nextLevelText(lvl), CLS.info);
                toast("🏆 Level " + lvl.no + " tuntas! Bonus +" + result.bonus + " XP", "success", 4500);
                const grp = categoryGroups.find(function (g) { return g.category === lvl.category; });
                if (grp && grp.levels.every(isLevelComplete)) toast("🏅 Lencana fase " + lvl.category + " diraih!", "success", 6000);
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

    const hintTier = {}, fails = {};
    function onHint() {
        const out = $("code-output");
        if (out.dataset.ph) outClear(); else outLine("", CLS.dim);
        const k = draftKey();
        const t = (hintTier[k] || 0) + 1;
        const task = currentTask(), lvl = currentLevel();
        if (t === 1) {
            hintTier[k] = 1;
            outLine("💡 Petunjuk 1/3 (pertanyaan penuntun, tanpa kode):", "text-amber-400 font-semibold");
            outLine(conceptHint(task, lvl), CLS.info);
            outLine("Klik Petunjuk lagi untuk arah teknis.", CLS.dim);
        } else if (t === 2) {
            hintTier[k] = 2;
            outLine("💡 Petunjuk 2/3 (arah teknis):", "text-amber-400 font-semibold");
            outLine(task.hint, CLS.info);
            outLine("Petunjuk 3 (kerangka dari contoh materi) terbuka setelah 2 kali Periksa Jawaban yang belum tepat.", CLS.dim);
        } else if ((fails[k] || 0) >= 2) {
            hintTier[k] = 3;
            outLine("💡 Petunjuk 3/3 (kerangka dari contoh materi, sesuaikan dengan soal):", "text-amber-400 font-semibold");
            outLine(lvl.example, CLS.info);
            outLine("Masih bingung? Baca ulang Materi dan Alat bantu di tab Materi.", CLS.dim);
            if (t > 3) { setTab("materi"); window.scrollTo({ top: 0, behavior: "smooth" }); }
        } else {
            outLine("🔒 Petunjuk 3 terbuka setelah 2 kali Periksa Jawaban yang belum tepat (sudah " + (fails[k] || 0) + "). Coba dulu ya.", CLS.warn);
        }
    }

    /* ---------- Pencapaian: konfeti, kalender, lencana, sertifikat, mode Ulangi ---------- */
    function confetti() {
        if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const cv = el("canvas");
        cv.style.cssText = "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:200";
        cv.width = window.innerWidth; cv.height = window.innerHeight;
        document.body.appendChild(cv);
        const cx = cv.getContext("2d"), cols = ["#6366f1", "#22d3ee", "#fbbf24", "#34d399", "#fb7185"];
        const ps = Array.from({ length: 120 }, function () {
            return { x: Math.random() * cv.width, y: -20 - Math.random() * cv.height * 0.4, vx: Math.random() * 4 - 2, vy: Math.random() * 3 + 2,
                     s: Math.random() * 6 + 4, c: cols[Math.floor(Math.random() * cols.length)], r: Math.random() * 6 };
        });
        let f = 0;
        (function step() {
            cx.clearRect(0, 0, cv.width, cv.height);
            ps.forEach(function (p) {
                p.x += p.vx; p.y += p.vy; p.vy += 0.03; p.r += 0.1;
                cx.fillStyle = p.c; cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r);
                cx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.6); cx.restore();
            });
            if (++f < 180) requestAnimationFrame(step); else cv.remove();
        })();
    }

    function calendarEl() {
        const wrap = el("div");
        wrap.appendChild(el("p", "text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2", "Aktivitas 20 minggu terakhir"));
        const grid = el("div");
        grid.style.cssText = "display:grid;grid-template-rows:repeat(7,12px);grid-auto-flow:column;grid-auto-columns:12px;gap:3px;overflow-x:auto;padding-bottom:4px";
        const today = new Date(); today.setHours(0, 0, 0, 0);
        const start = new Date(today); start.setDate(start.getDate() - start.getDay() - 19 * 7);
        for (const d = new Date(start); d <= today; d.setDate(d.getDate() + 1)) {
            const k = dayKey(d), n = state.activity[k] || 0;
            const c = el("span");
            c.style.cssText = "border-radius:3px;background:" + (n === 0 ? "#1e293b" : n < 2 ? "#3730a3" : n < 4 ? "#4f46e5" : n < 8 ? "#818cf8" : "#c7d2fe");
            c.title = k + ": " + n + " soal";
            grid.appendChild(c);
        }
        wrap.appendChild(grid);
        return wrap;
    }

    function makeCertificate(phase) {
        const nama = (window.prompt("Nama yang dicetak di sertifikat:", "") || "").trim();
        if (!nama) return;
        const cv = el("canvas"); cv.width = 1200; cv.height = 800;
        const x = cv.getContext("2d");
        x.fillStyle = "#020617"; x.fillRect(0, 0, 1200, 800);
        x.strokeStyle = "#6366f1"; x.lineWidth = 6; x.strokeRect(30, 30, 1140, 740);
        x.strokeStyle = "#22d3ee"; x.lineWidth = 2; x.strokeRect(48, 48, 1104, 704);
        x.textAlign = "center";
        x.fillStyle = "#a5b4fc"; x.font = "700 28px sans-serif"; x.fillText("PYTHON ODYSSEY", 600, 140);
        x.fillStyle = "#ffffff"; x.font = "800 60px sans-serif"; x.fillText("Sertifikat Penyelesaian", 600, 240);
        x.fillStyle = "#94a3b8"; x.font = "400 26px sans-serif"; x.fillText("diberikan kepada", 600, 320);
        x.fillStyle = "#fcd34d"; x.font = "800 64px sans-serif"; x.fillText(nama.slice(0, 40), 600, 410);
        x.fillStyle = "#94a3b8"; x.font = "400 26px sans-serif"; x.fillText("yang telah menuntaskan seluruh level pada fase", 600, 490);
        x.fillStyle = "#67e8f9"; x.font = "800 52px sans-serif"; x.fillText(phase, 600, 570);
        x.fillStyle = "#94a3b8"; x.font = "400 22px sans-serif";
        x.fillText(new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }) + "  ·  " + totalXp().toLocaleString("id-ID") + " XP", 600, 680);
        cv.toBlob(function (blob) {
            const url = URL.createObjectURL(blob), a = el("a");
            a.href = url; a.download = "sertifikat-" + phase.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".png";
            document.body.appendChild(a); a.click(); a.remove();
            setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
        });
    }

    function repeatRandom() {
        const pool = [];
        levelsData.forEach(function (l) { (state.done[l.id] || new Set()).forEach(function (i) { pool.push([l.id, i]); }); });
        if (!pool.length) { toast("Belum ada soal yang selesai untuk diulang.", "warn"); return; }
        const p = pool[Math.floor(Math.random() * pool.length)];
        $("stats-dialog").close();
        goTo(p[0], p[1]);
        setTab("latihan");
        toast("🔁 Mode Ulangi: soal acak dari yang sudah kamu selesaikan (tanpa XP tambahan).", "info", 4500);
    }

    const BADGE_ICON = {
        "Beginner": "🌱", "Intermediate": "🔧", "Advanced": "🚀", "Expert": "🧠", "Professional": "💼", "Architecture": "🏛️",
        "Data Engineering": "📊", "Web API": "🌐", "AI Engineering": "🤖", "DevOps": "⚙️", "Security & Performance": "🛡️", "Enterprise Mastery": "👑"
    };

    function nextLevelText(lvl) {
        const nx = visibleLevels().find(function (l) { return l.no > lvl.no; });
        let t = nx
            ? "👉 Selanjutnya: Level " + nx.no + " (" + nx.shortTitle + ")" + (nx.category !== lvl.category ? ", fase baru: " + nx.category : "") + "."
            : "🎓 Ini level terakhir pada jalur yang kamu pilih.";
        const grp = categoryGroups.find(function (g) { return g.category === lvl.category; });
        if (lvl.category === "Advanced" && state.settings.track === "all" && grp && grp.levels.every(isLevelComplete)) {
            t += "\n🧭 Fondasi tuntas! Tentukan arah belajarmu lewat menu “Jalur belajar” di sidebar (Data, Backend, atau AI).";
        }
        return t;
    }

    function goalEl() {
        const wrap = el("div");
        const goal = state.settings.dailyGoal, n = state.activity[dayKey()] || 0;
        wrap.appendChild(el("p", "text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2", "Target harian"));
        const bar = el("div", "h-2 rounded bg-slate-800 overflow-hidden");
        const fill = el("div", "h-full " + (n >= goal ? "bg-emerald-400" : "bg-indigo-400"));
        fill.style.width = Math.min(100, Math.round((n / goal) * 100)) + "%";
        bar.appendChild(fill);
        wrap.append(bar, el("p", "text-sm text-slate-300 mt-2", (n >= goal ? "🎯 Target tercapai: " : "") + n + " / " + goal + " soal hari ini"));
        const row = el("div", "flex flex-wrap items-center gap-2 mt-3");
        row.appendChild(el("span", "text-xs text-slate-400", "Atur target:"));
        [1, 3, 5, 10].forEach(function (v) {
            const b = el("button", "text-xs px-2.5 py-1 rounded-lg border transition " +
                (v === goal ? "bg-indigo-600 border-indigo-500 text-white" : "bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500"), v + " soal");
            b.type = "button";
            b.setAttribute("aria-pressed", String(v === goal));
            b.addEventListener("click", function () { state.settings.dailyGoal = v; saveNow(); renderHeader(); renderStats(); });
            row.appendChild(b);
        });
        wrap.appendChild(row);
        return wrap;
    }

    function badgesEl() {
        const wrap = el("div");
        wrap.appendChild(el("p", "text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2", "Lencana fase"));
        const grid = el("div", "grid grid-cols-3 sm:grid-cols-4 gap-2");
        categoryGroups.forEach(function (g) {
            const done = g.levels.filter(isLevelComplete).length, full = done === g.levels.length;
            const tile = el("div", "rounded-xl border p-2 text-center flex flex-col items-center gap-1 " +
                (full ? "border-amber-500/40 bg-amber-500/10" : "border-slate-800 bg-slate-950"));
            const icon = el("div", "text-3xl leading-none", BADGE_ICON[g.category] || "🏅");
            icon.setAttribute("aria-hidden", "true");
            icon.style.filter = full ? "none" : "grayscale(1)";
            icon.style.opacity = full ? "1" : "0.35";
            tile.append(icon,
                el("p", "text-[11px] font-semibold " + (full ? "text-slate-100" : "text-slate-400"), g.category),
                el("p", "text-[10px] text-slate-400", full ? "Diraih ✔" : done + "/" + g.levels.length));
            if (full) {
                const b = el("button", "mt-1 text-[10px] px-2 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold", "🎓 Sertifikat");
                b.type = "button";
                b.addEventListener("click", function () { makeCertificate(g.category); });
                tile.appendChild(b);
            }
            tile.setAttribute("aria-label", g.category + (full ? ", lencana diraih" : ", " + done + " dari " + g.levels.length + " level"));
            grid.appendChild(tile);
        });
        wrap.appendChild(grid);
        return wrap;
    }

    /* ---------- Jalur belajar: pilih jalur + tes penempatan ---------- */
    function setTrack(v) {
        saveDraftNow();
        state.settings.track = Object.prototype.hasOwnProperty.call(TRACKS, v) ? v : "all";
        const vis = visibleLevels();
        if (vis.indexOf(currentLevel()) === -1) {
            const t = vis.find(function (l) { return !isLevelComplete(l); }) || vis[0];
            state.levelId = t.id;
            state.taskIndex = firstUndone(t);
            currentTab = "materi";
        }
        ensureUnlocked();
        saveNow();
        renderAll();
        toast("Jalur: " + TRACKS[state.settings.track].label + " (" + visibleLevels().length + " level)", "info", 3000);
    }

    const PLACEMENT = [
        { g: "Beginner", q: "print(type(3.0))", o: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "Error"], a: 1 },
        { g: "Beginner", q: "print(7 // 2, 7 % 2)", o: ["3.5 1", "3 1", "4 1", "3 0"], a: 1 },
        { g: "Beginner", q: "for i in range(3):\n    print(i)", o: ["0 1 2 3", "1 2 3", "0 1 2", "1 2"], a: 2 },
        { g: "Intermediate", q: "def f(x, y=2):\n    return x * y\n\nprint(f(3))", o: ["6", "3", "Error", "5"], a: 0 },
        { g: "Intermediate", q: "d = {\"a\": 1}\nprint(d.get(\"b\", 0))", o: ["None", "KeyError", "0", "1"], a: 2 },
        { g: "Intermediate", q: "print([x * x for x in range(4) if x % 2 == 0])", o: ["[0, 4]", "[0, 1, 4, 9]", "[1, 9]", "[0, 2]"], a: 0 },
        { g: "Advanced", q: "Apa yang dilakukan blok  with open('a.txt') as f:  ?", o: ["Menghapus file setelah dibaca", "Menutup file otomatis saat blok selesai", "Mengunci file selamanya", "Membaca file lebih cepat"], a: 1 },
        { g: "Advanced", q: "Method khusus apa yang dipakai print(objek) untuk menghasilkan teks?", o: ["__init__", "__len__", "__str__", "__call__"], a: 2 },
        { g: "Advanced", q: "Kata kunci yield di dalam sebuah fungsi membuat fungsi itu menjadi...", o: ["Dekorator", "Generator", "Kelas", "Konstanta"], a: 1 }
    ];

    function openPlacement() {
        const body = $("placement-body");
        const intro = el("p", "text-sm text-slate-300", "Jawab 9 soal pilihan ganda (tanpa menjalankan kode). Hasilnya hanya rekomendasi titik mulai: tidak memberi XP dan tidak menandai level selesai.");
        const form = el("div", "space-y-3");
        PLACEMENT.forEach(function (q, i) {
            const box = el("fieldset", "border border-slate-800 rounded-xl p-3");
            box.appendChild(el("legend", "px-1 text-xs font-bold text-indigo-300", (i + 1) + ". " + q.g));
            box.appendChild(el("pre", "code-font text-sm text-cyan-300 whitespace-pre-wrap mb-2", q.q));
            q.o.forEach(function (opt, j) {
                const lab = el("label", "flex items-center gap-2 text-sm text-slate-300 py-0.5 cursor-pointer");
                const r = el("input", "accent-indigo-500");
                r.type = "radio"; r.name = "pl" + i; r.value = String(j);
                lab.append(r, el("span", "code-font", opt));
                box.appendChild(lab);
            });
            form.appendChild(box);
        });
        const result = el("div", "text-sm text-slate-200");
        result.setAttribute("role", "status");
        const go = el("button", "px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm", "Lihat hasil");
        go.type = "button";
        go.addEventListener("click", function () {
            const answers = PLACEMENT.map(function (q, i) {
                const c = body.querySelector('input[name="pl' + i + '"]:checked');
                return c ? Number(c.value) : -1;
            });
            if (answers.indexOf(-1) !== -1) {
                result.replaceChildren(el("p", "text-amber-300", "Jawab semua soal dulu ya (" + answers.filter(function (a) { return a !== -1; }).length + "/9 terjawab)."));
                return;
            }
            const score = { Beginner: 0, Intermediate: 0, Advanced: 0 };
            PLACEMENT.forEach(function (q, i) { if (answers[i] === q.a) score[q.g]++; });
            let target = "Beginner";
            if (score.Beginner === 3) {
                target = "Intermediate";
                if (score.Intermediate === 3) {
                    target = "Advanced";
                    if (score.Advanced === 3) target = "Expert";
                }
            }
            const lvl = levelsData.find(function (l) { return l.category === target; });
            const total = score.Beginner + score.Intermediate + score.Advanced;
            const box = el("div", "bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2");
            box.appendChild(el("p", "font-bold text-slate-100", "Skor " + total + "/9 (Beginner " + score.Beginner + "/3, Intermediate " + score.Intermediate + "/3, Advanced " + score.Advanced + "/3)"));
            box.appendChild(el("p", "text-slate-300", target === "Beginner"
                ? "Mulailah dari awal supaya fondasinya kuat: Level " + lvl.no + " (" + lvl.shortTitle + ")."
                : "Kamu sudah menguasai fase sebelum " + target + ". Rekomendasi mulai: Level " + lvl.no + " (" + lvl.shortTitle + ")."));
            const b = el("button", "px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm", "Mulai dari Level " + lvl.no);
            b.type = "button";
            b.addEventListener("click", function () { $("placement-dialog").close(); goTo(lvl.id, firstUndone(lvl)); });
            box.appendChild(b);
            result.replaceChildren(box);
        });
        body.replaceChildren(intro, form, go, result);
        $("placement-dialog").showModal();
    }

    function renderStats() {
        const body = $("stats-body");
        const sum = el("div", "grid grid-cols-3 gap-3");
        [["🔥 Streak", streak() + " hari"], ["📅 Hari aktif", Object.keys(state.activity).length + " hari"], ["✅ Soal hari ini", String(state.activity[dayKey()] || 0)]].forEach(function (s) {
            const b = el("div", "bg-slate-950 border border-slate-800 rounded-xl p-3 text-center");
            b.append(el("p", "text-[11px] text-slate-400", s[0]), el("p", "text-base font-bold text-slate-100", s[1]));
            sum.appendChild(b);
        });
        const ph = badgesEl();
                const rb = el("button", "w-full px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm border border-slate-700", "🔁 Ulangi soal acak dari yang sudah selesai");
        rb.type = "button"; rb.addEventListener("click", repeatRandom);
        body.replaceChildren(sum, goalEl(), calendarEl(), ph, rb);
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

    /* ---------- Editor: pewarnaan sintaks (overlay), kurung otomatis, bilah simbol, input() interaktif ---------- */
    /*HL-PURE-START*/
    const PY_KW = "and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield";
    const PY_BI = "print|len|range|input|int|float|str|bool|list|dict|set|tuple|type|sum|min|max|abs|round|sorted|enumerate|zip|map|filter|open|isinstance|super|self|cls";
    const HL_PARTS = [
        /(?:[rRbBfFuU]{1,2})?(?:"""[\s\S]*?(?:"""|$)|'''[\s\S]*?(?:'''|$))/,
        /#[^\n]*/,
        /(?:[rRbBfFuU]{1,2})?(?:"(?:\\.|[^"\\\n])*"?|'(?:\\.|[^'\\\n])*'?)/,
        /@[A-Za-z_][\w.]*/,
        new RegExp("\\b(?:" + PY_KW + ")\\b"),
        /\b(?:True|False|None)\b/,
        new RegExp("\\b(?:" + PY_BI + ")\\b"),
        /\b\d+(?:\.\d+)?\b/
    ];
    const HL_CLS = ["hl-s", "hl-c", "hl-s", "hl-d", "hl-k", "hl-k", "hl-b", "hl-n"];
    const HL_RE = new RegExp(HL_PARTS.map(function (r) { return "(" + r.source + ")"; }).join("|"), "g");
    function escHtml(t) { return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
    function highlightPython(src) {
        let out = "", last = 0, m;
        HL_RE.lastIndex = 0;
        while ((m = HL_RE.exec(src))) {
            if (m[0] === "") { HL_RE.lastIndex++; continue; }
            let k = 1;
            while (m[k] === undefined) k++;
            out += escHtml(src.slice(last, m.index)) + '<span class="' + HL_CLS[k - 1] + '">' + escHtml(m[0]) + "</span>";
            last = HL_RE.lastIndex;
        }
        return out + escHtml(src.slice(last));
    }
    /*HL-PURE-END*/

    function renderHighlight() {
        const pre = $("code-hl");
        if (!pre) return;
        const v = $("code-input").value;
        pre.innerHTML = (hlMode === "python" ? highlightPython(v) : escHtml(v)) + "\n ";
        syncHighlightScroll();
    }
    function syncHighlightScroll() {
        const pre = $("code-hl"), editor = $("code-input");
        if (!pre) return;
        pre.style.transform = "translate(" + (-editor.scrollLeft) + "px," + (-editor.scrollTop) + "px)";
        const band = $("hl-errband");
        if (band) {
            band.style.display = errorLine ? "block" : "none";
            band.style.top = (12 + (errorLine - 1) * 22 - editor.scrollTop) + "px";
        }
    }

    const PAIRS = { "(": ")", "[": "]", "{": "}", '"': '"', "'": "'" };

    function setupSymbolBar() {
        const bar = $("symbol-bar");
        if (!bar) return;
        const editor = $("code-input");
        const items = [
            { l: "Tab", tab: true }, { l: "( )", i: "()", b: 1 }, { l: "[ ]", i: "[]", b: 1 }, { l: "{ }", i: "{}", b: 1 },
            { l: '" "', i: '""', b: 1 }, { l: "' '", i: "''", b: 1 }, { l: ":", i: ":" }, { l: "=", i: " = " }, { l: "#", i: "#" },
            { l: "_", i: "_" }, { l: "+", i: " + " }, { l: "-", i: " - " }, { l: "*", i: " * " }, { l: "/", i: " / " }, { l: "%", i: " % " },
            { l: ",", i: ", " }, { l: ".", i: "." }, { l: "<", i: " < " }, { l: ">", i: " > " }, { l: "!", i: "!" }, { l: "\\", i: "\\" }
        ];
        items.forEach(function (it) {
            const b = el("button", "", it.l);
            b.type = "button";
            b.setAttribute("aria-label", it.tab ? "Sisipkan indentasi" : "Sisipkan " + it.l);
            b.addEventListener("mousedown", function (e) { e.preventDefault(); }); // jaga fokus & keyboard HP tetap terbuka
            b.addEventListener("click", function () {
                editor.focus({ preventScroll: true });
                if (it.tab) {
                    const s = editor.selectionStart, v = editor.value;
                    const col = s - (v.lastIndexOf("\n", s - 1) + 1);
                    insertText(editor, " ".repeat(INDENT.length - (col % INDENT.length)));
                    return;
                }
                insertText(editor, it.i);
                if (it.b) { const p = editor.selectionEnd - it.b; editor.setSelectionRange(p, p); }
            });
            bar.appendChild(b);
        });
    }

    let extraInput = [];   // input() yang diketik murid langsung di terminal (program dijalankan ulang dengan input terkumpul)
    function promptForInput(code) {
        const out = $("code-output");
        if (!extraInput.length) out.appendChild(el("span", "block text-xs text-slate-500 mt-1", "⌨ Program menunggu input. Ketik lalu tekan Enter (program dijalankan ulang dari awal dengan input yang sudah terkumpul)."));
        const form = el("form", "flex items-center gap-2 mt-1");
        const inp = el("input", "flex-1 min-w-0 bg-slate-900 border border-slate-700 focus:border-indigo-500 rounded-lg px-2 py-1 code-font text-sm text-slate-100 focus:outline-none");
        inp.type = "text"; inp.autocomplete = "off"; inp.spellcheck = false;
        inp.setAttribute("aria-label", "Ketik input untuk program lalu tekan Enter");
        const btn = el("button", "text-xs px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold", "Kirim");
        btn.type = "submit";
        form.append(el("span", "text-cyan-300", "›"), inp, btn);
        form.addEventListener("submit", async function (ev) {
            ev.preventDefault();
            if (busy) return;
            extraInput.push(inp.value);
            setBusy(true);
            try { await runAndRender(code, null, { interactive: true }); } finally { setBusy(false); }
        });
        out.appendChild(form);
        out.scrollTop = out.scrollHeight;
        inp.focus({ preventScroll: true });
    }

    /*AC-START*/
    /* ---------- Saran kode (autocomplete): Tab menerima, panah memilih, Esc menutup ---------- */
    const AC_WORDS = (PY_KW + "|" + PY_BI).split("|").concat(["True", "False", "None", "__init__", "__str__", "__repr__", "__len__", "__name__"]);
    const AC_MEMBERS = ["append", "extend", "insert", "remove", "pop", "sort", "reverse", "index", "count", "keys", "values", "items", "get", "update", "add", "discard", "join", "split", "strip", "lstrip", "rstrip", "upper", "lower", "title", "replace", "find", "startswith", "endswith", "format", "encode", "decode", "copy", "clear"];
    let acItems = [], acSel = 0, acPrefix = "", acCharW = 0;
    function charWidth() {
        if (!acCharW) {
            try { const c = document.createElement("canvas").getContext("2d"); c.font = "14px 'Fira Code', ui-monospace, monospace"; acCharW = c.measureText("M").width; } catch (e) { /* abaikan */ }
            if (!acCharW) acCharW = 8.4;
        }
        return acCharW;
    }
    function acOpen() { const p = $("ac-pop"); return !!p && !p.hidden; }
    function acClose() { const p = $("ac-pop"); if (p) p.hidden = true; acItems = []; }
    function acRender() {
        const p = $("ac-pop");
        p.replaceChildren();
        acItems.forEach(function (w, i) {
            const b = el("div", "ac-item" + (i === acSel ? " on" : ""), w);
            b.setAttribute("role", "option");
            b.addEventListener("mousedown", function (e) { e.preventDefault(); acSel = i; acAccept(); });
            p.appendChild(b);
        });
    }
    function acCandidates(v, s) {
        const before = v.slice(0, s);
        const m = /[A-Za-z_]\w*$/.exec(before);
        if (!m || m[0].length < 2) return null;
        const lineBefore = before.slice(before.lastIndexOf("\n") + 1);
        if (/#/.test(lineBefore) || (lineBefore.match(/"/g) || []).length % 2 || (lineBefore.match(/'/g) || []).length % 2) return null;
        const prefix = m[0], low = prefix.toLowerCase();
        let pool;
        if (before.charAt(m.index - 1) === ".") pool = AC_MEMBERS;
        else {
            const own = Object.create(null);
            (v.match(/[A-Za-z_]\w{2,}/g) || []).forEach(function (w) { own[w] = 1; });
            delete own[prefix];
            pool = Object.keys(own).concat(AC_WORDS);
        }
        const seen = Object.create(null);
        const items = pool.filter(function (w) {
            if (seen[w] || w === prefix || w.toLowerCase().indexOf(low) !== 0) return false;
            return (seen[w] = true);
        }).sort(function (a, b) { return a.length - b.length || (a < b ? -1 : 1); }).slice(0, 6);
        return items.length ? { prefix: prefix, items: items, row: before.split("\n").length - 1, col: before.length - before.lastIndexOf("\n") - 1 - prefix.length } : null;
    }
    function acUpdate(ev) {
        const p = $("ac-pop"), editor = $("code-input");
        if (!p || hlMode !== "python" || (ev && /^delete/.test(ev.inputType || "")) || editor.selectionStart !== editor.selectionEnd) { acClose(); return; }
        const r = acCandidates(editor.value, editor.selectionStart);
        if (!r) { acClose(); return; }
        acItems = r.items; acSel = 0; acPrefix = r.prefix;
        acRender();
        p.hidden = false;
        let top = 12 + (r.row + 1) * 22 - editor.scrollTop;
        if (top + p.offsetHeight > editor.clientHeight) top = 12 + r.row * 22 - editor.scrollTop - p.offsetHeight;
        p.style.top = Math.max(0, top) + "px";
        p.style.left = Math.max(0, 16 + r.col * charWidth() - editor.scrollLeft) + "px";
    }
    function acAccept() {
        const editor = $("code-input"), w = acItems[acSel];
        if (!w) { acClose(); return; }
        const s = editor.selectionStart;
        acClose();
        editor.setSelectionRange(s - acPrefix.length, s);
        insertText(editor, w);
    }
    /*AC-END*/

    function setupEditor() {
        const editor = $("code-input");
        editor.closest(".editor-wrap").classList.add("hl-on");
        let tabEscaped = false;

        editor.addEventListener("input", function () {
            errorLine = 0;
            updateLineNumbers();
            saveDraftNow();
            saveSoon();
        });
        editor.addEventListener("input", function (ev) { acUpdate(ev); });
        editor.addEventListener("blur", acClose);
        editor.addEventListener("click", acClose);
        editor.addEventListener("scroll", function () { $("line-numbers").scrollTop = editor.scrollTop; syncHighlightScroll(); acClose(); });

        editor.addEventListener("keydown", function (e) {
            const v = editor.value;
            const s = editor.selectionStart;
            const en = editor.selectionEnd;
            const mod = e.ctrlKey || e.metaKey;

            if (acOpen()) {
                if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                    e.preventDefault();
                    acSel = (acSel + (e.key === "ArrowDown" ? 1 : acItems.length - 1)) % acItems.length;
                    acRender();
                    return;
                }
                if (e.key === "Tab" && !mod && !e.altKey && !e.shiftKey) { e.preventDefault(); acAccept(); return; }
                if (e.key === "Escape") { e.preventDefault(); acClose(); return; }
                if (/^(Enter|ArrowLeft|ArrowRight|Home|End|PageUp|PageDown)$/.test(e.key)) acClose();
            }
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

            if (!mod && !e.altKey && e.key.length === 1 && ")]}\"'".indexOf(e.key) !== -1 && s === en && v[s] === e.key) {
                e.preventDefault();                      // ketik penutup yang sudah ada: lompati saja
                editor.setSelectionRange(s + 1, s + 1);
                return;
            }
            if (!mod && !e.altKey && PAIRS[e.key] !== undefined) {
                const k = e.key, prev = v[s - 1] || "", next = v[en] || "";
                if (s !== en) {                          // bungkus teks terpilih
                    e.preventDefault();
                    insertText(editor, k + v.slice(s, en) + PAIRS[k]);
                    editor.setSelectionRange(s + 1, en + 1);
                    return;
                }
                const isQuote = k === '"' || k === "'";
                const prefix = /(^|[^\w])[rRbBfFuU]{1,2}$/.test(v.slice(0, s));
                if (isQuote && /\w/.test(prev) && !prefix) return;   // apostrof (don't) atau bagian kata
                if (next === "" || /[\s)\]},:;]/.test(next)) {
                    e.preventDefault();
                    insertText(editor, k + PAIRS[k]);
                    editor.setSelectionRange(s + 1, s + 1);
                    return;
                }
            }

            if (e.key === "Enter" && !mod && !e.shiftKey && !e.altKey && s === en) {
                e.preventDefault();
                const lineStart = v.lastIndexOf("\n", s - 1) + 1;
                const before = v.slice(lineStart, s);
                const indent = before.match(/^[ \t]*/)[0];
                const opensBlock = stripPyComments(before).trimEnd().endsWith(":");
                const pc = v[s - 1], nc = v[s];
                if (pc && "([{".indexOf(pc) !== -1 && nc === PAIRS[pc]) {   // Enter di antara kurung: buka baris di tengah
                    insertText(editor, "\n" + indent + INDENT + "\n" + indent);
                    const pos = s + 1 + indent.length + INDENT.length;
                    editor.setSelectionRange(pos, pos);
                    return;
                }
                let base = indent;
                if (!opensBlock && hlMode === "python" && /^\s*(return|pass|break|continue|raise)\b/.test(stripPyComments(before)) && /^ +$/.test(indent) && indent.length >= INDENT.length) {
                    base = indent.slice(0, indent.length - INDENT.length);   // setelah return/pass/break/...: mundur satu tingkat
                }
                insertText(editor, "\n" + base + (opensBlock ? INDENT : ""));
                return;
            }

            if (e.key === "Backspace" && !mod && !e.altKey && s === en && s > 0 && PAIRS[v[s - 1]] !== undefined && v[s] === PAIRS[v[s - 1]]) {
                e.preventDefault();                      // hapus pasangan kosong: () [] {} "" ''
                editor.setSelectionRange(s - 1, s + 1);
                if (!document.execCommand("delete")) {
                    editor.setRangeText("", s - 1, s + 1, "end");
                    editor.dispatchEvent(new Event("input", { bubbles: true }));
                }
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
        state.activity = {};
        state.levelId = 1;
        state.taskIndex = 0;
        try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* abaikan */ }
        renderAll();
        toast("Progress direset.", "info");
        if (window.OdysseyCloud) window.OdysseyCloud.markDirty(true);
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
    // Angka level/soal dihitung dari levelsData (tidak ditulis manual di HTML)
    function renderCounts() {
        const nL = levelsData.length.toLocaleString("id-ID"), nT = TOTAL_TASKS.toLocaleString("id-ID");
        document.title = "Python Odyssey - " + nL + " Level Belajar Python";
        const set = function (id, t) { const n = $(id); if (n) n.textContent = t; };
        set("tagline", nL + " level · " + nT + " soal · Python asli di browser");
        set("map-title", "Peta Kurikulum (" + nL + " Level)");
    }

    function init() {
        loadState();
        renderCounts();
        ensureUnlocked();
        setupEditor();
        setupSymbolBar();
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

        $("btn-stats").addEventListener("click", function () { renderStats(); $("stats-dialog").showModal(); });
        $("btn-stats-close").addEventListener("click", function () { $("stats-dialog").close(); });
        $("btn-run-example").addEventListener("click", async function () {
            if (busy) return;
            if (TEXT_LEVELS.has(currentLevel().id)) { toast("Contoh level ini berupa konfigurasi/perintah, tidak dijalankan.", "warn"); return; }
            setBusy(true);
            extraInput = [];
            try { await runAndRender(currentLevel().example, null, { interactive: true }); } finally { setBusy(false); }
            $("code-output").scrollIntoView({ block: "nearest", behavior: "smooth" });
        });
        document.querySelectorAll("[data-tab]").forEach(function (b) { b.addEventListener("click", function () { setTab(b.dataset.tab); }); });
        $("level-search").addEventListener("input", debounce(renderSidebar, 150));
        $("opt-lock").addEventListener("change", function (e) {
            state.settings.lockOrder = e.target.checked;
            ensureUnlocked();
            saveNow();
            renderAll();
        });
        $("btn-menu").addEventListener("click", openSidebar);
        $("btn-close-sidebar").addEventListener("click", closeSidebar);
        // Tablet: laci level tidak menutupi layar penuh, jadi ketuk di luar laci untuk menutup
        document.addEventListener("click", function (e) {
            const sb = $("sidebar");
            if (sb.classList.contains("mobile-open") && window.innerWidth >= 640 &&
                !sb.contains(e.target) && !$("btn-menu").contains(e.target)) closeSidebar();
        });
        // Layar diputar / jendela dilebarkan sampai mode desktop: tutup mode overlay
        if (window.matchMedia) {
            const mq = window.matchMedia("(min-width: 1024px)");
            const onMq = function (e) { if (e.matches) closeSidebar(); };
            if (mq.addEventListener) mq.addEventListener("change", onMq); else if (mq.addListener) mq.addListener(onMq);
        }
        $("btn-export").addEventListener("click", exportProgress);
        $("btn-import").addEventListener("click", function () { $("import-file").click(); });
        $("import-file").addEventListener("change", function (e) {
            importProgress(e.target.files[0]);
            e.target.value = "";
        });
        $("btn-reset").addEventListener("click", resetProgress);
        $("track-select").addEventListener("change", function (e) { setTrack(e.target.value); });
        $("btn-placement").addEventListener("click", openPlacement);
        $("btn-placement-close").addEventListener("click", function () { $("placement-dialog").close(); });
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

    // API untuk cloud.js (Supabase): baca/terapkan progress tanpa memicu sinkron berulang
    window.OdysseyApp = {
        serialize: function () { saveDraftNow(); return serialize(); },
        apply: function (raw) {
            state.levelId = 1; state.taskIndex = 0;
            applyData(raw);
            ensureUnlocked();
            try { localStorage.setItem(STORAGE_KEY, JSON.stringify(serialize())); } catch (e) { /* abaikan */ }
            renderAll();
        }
    };

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
