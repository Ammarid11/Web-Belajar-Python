/* =====================================================================
   PYTHON ODYSSEY - cloud.js
   Login Supabase + hybrid storage:
   - localStorage tetap jadi penyimpanan utama (cepat, jalan offline)
   - bila sudah login, progress disinkronkan ke tabel `progress` di Supabase
   Isi dua konstanta di bawah (Supabase > Project Settings > API), lalu jalankan schema.sql.
   ===================================================================== */
(function () {
    "use strict";

    const SUPABASE_URL = "https://qdgupymvlpjxczktxftl.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkZ3VweW12bHBqeGN6a3R4ZnRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk4Mzg5MzcsImV4cCI6MjEwNTQxNDkzN30.xLrTQbrrminl1eL7MGJtK2yWOpFf2s5IWb2jl9WJ8ZQ"; // kunci anon/publishable (aman di browser berkat RLS)

    const TABLE = "progress";
    const STORAGE_KEY = "pythonOdyssey.v2";
    const OWNER_KEY = "pythonOdyssey.owner";
    const GUEST_KEY = "pythonOdyssey.guest";
    const urlOk = /^https:\/\/[\w-]+\.supabase\.co/.test(SUPABASE_URL) && SUPABASE_ANON_KEY.indexOf("YOUR-") !== 0;

    let sb = null, user = null, dirty = false, pushing = false, timer = null, status = "local";
    let lastSync = null, lastRemoteAt = 0;
    const $ = function (id) { return document.getElementById(id); };
    const app = function () { return window.OdysseyApp; };
    const EMPTY = function () { return { version: 2, savedAt: 0, done: {}, drafts: {}, settings: { lockOrder: false } }; };

    /* ---------- Status di header ---------- */
    const LABEL = {
        local: "💾 Lokal", guest: "👤 Masuk", sync: "⏳ Menyinkronkan…",
        synced: "☁ Tersinkron", error: "⚠ Gagal sinkron"
    };
    /* Tombol Ekspor / Impor / Reset hanya untuk peran tester dan admin.
       Peran dibaca dari app_metadata.role (hanya bisa diubah lewat SQL/dashboard, bukan oleh pengguna). */
    const PRIVILEGED = ["tester", "admin"];
    function applyRoleUI() {
        const role = user && user.app_metadata && user.app_metadata.role;
        const show = PRIVILEGED.indexOf(String(role || "").trim().toLowerCase()) !== -1;
        ["btn-export", "btn-import", "btn-reset"].forEach(function (id) {
            const b = $(id);
            if (b) b.hidden = !show;
        });
    }
    function setStatus(s) {
        status = s;
        applyRoleUI();
        if (s === "synced") lastSync = new Date();
        const b = $("btn-account");
        if (b) b.textContent = LABEL[s] + (user && s !== "sync" ? " · " + nameOf().split("@")[0] : "");
        const lo = $("btn-logout");
        if (lo) lo.hidden = !user;
        const lb = $("btn-leaderboard");
        if (lb) lb.hidden = !user;
        const pb = $("btn-profile");
        if (pb) pb.hidden = !user;
    }

    /* ---------- Merge: gabungkan progress lokal & cloud tanpa kehilangan soal selesai ---------- */
    // a = lokal, b = cloud. serialize() selalu memberi savedAt = Date.now(), jadi data lokal
    // SELALU tampak lebih baru dan menimpa posisi/draf/pengaturan dari cloud. Karena itu pemenang
    // ditentukan eksplisit: preferB = true saat login di perangkat/akun yang baru (cloud menang).
    function merge(a, b, preferB) {
        const newer = preferB ? b : a;
        const older = preferB ? a : b;
        const done = {};
        [a, b].forEach(function (s) {
            Object.keys(s.done || {}).forEach(function (id) {
                done[id] = Array.from(new Set((done[id] || []).concat(s.done[id])));
            });
        });
        return {
            version: 2, savedAt: Math.max(a.savedAt || 0, b.savedAt || 0), done: done,
            drafts: Object.assign({}, older.drafts, newer.drafts),
            settings: newer.settings || older.settings, last: newer.last || older.last,
            activity: (function () {
                const r = Object.assign({}, a.activity || {});
                Object.keys(b.activity || {}).forEach(function (k) { r[k] = Math.max(r[k] || 0, b.activity[k]); });
                return r;
            })()
        };
    }

    /* ---------- Sinkronisasi ---------- */
    async function pull() {
        const r = await sb.from(TABLE).select("data, updated_at").eq("user_id", user.id).maybeSingle();
        if (r.error) throw r.error;
        return r.data || null; // { data, updated_at }
    }
    async function push(data) {
        const r = await sb.from(TABLE).upsert({ user_id: user.id, data: data, updated_at: new Date().toISOString() }, { onConflict: "user_id" }).select("updated_at").maybeSingle();
        if (r.error) throw r.error;
        if (r.data) lastRemoteAt = Date.parse(r.data.updated_at) || lastRemoteAt;
    }

    async function syncOnLogin() {
        setStatus("sync");
        try {
            let local = app().serialize();
            const prev = localStorage.getItem(OWNER_KEY);
            if (prev && prev !== user.id) local = EMPTY(); // data lokal milik akun lain: jangan dicampur
            const row = await pull();
            const cloud = row ? row.data : null;
            if (row) lastRemoteAt = Date.parse(row.updated_at) || 0;
            const merged = cloud ? merge(local, cloud, prev !== user.id) : local;
            localStorage.setItem(OWNER_KEY, user.id);
            app().apply(merged);
            await push(merged);
            setStatus("synced");
            ensureProfile();
        } catch (e) {
            console.error(e);
            setStatus("error");
            schedule(15000);
        }
    }

    function schedule(ms) { clearTimeout(timer); timer = setTimeout(flush, ms); }
    async function flush() {
        if (!user || pushing || !dirty) return;
        pushing = true; dirty = false; setStatus("sync");
        try { await push(app().serialize()); setStatus("synced"); }
        catch (e) { console.error(e); dirty = true; setStatus("error"); schedule(15000); }
        finally { pushing = false; if (dirty && status !== "error") schedule(2500); }
    }
    // Tunggu push yang sedang berjalan, lalu paksa kirim sisa perubahan.
    async function flushNow() {
        clearTimeout(timer);
        while (pushing) await new Promise(function (r) { setTimeout(r, 120); });
        dirty = true;
        await flush();
    }
    // Perangkat lain mungkin sudah menyimpan yang lebih baru. Hanya diterapkan bila
    // tidak ada perubahan lokal yang belum terkirim (jadi Reset tetap berlaku).
    async function refreshFromCloud() {
        if (!user || dirty || pushing || status === "error") return;
        try {
            const row = await pull();
            if (!row || dirty || pushing) return;
            const t = Date.parse(row.updated_at) || 0;
            if (t > lastRemoteAt) {
                lastRemoteAt = t;
                app().apply(Object.assign(EMPTY(), row.data));
                setStatus("synced");
            }
        } catch (e) { console.error(e); }
    }
    function markDirty(now) {
        if (!user) return;
        dirty = true;
        schedule(now ? 0 : 2500);
    }

    /* ---------- UI Login / Akun ---------- */
    const ERR = {
        "Invalid login credentials": "Email atau kata sandi salah. Periksa lagi, atau pakai “Lupa kata sandi?”.",
        "Email not confirmed": "Email belum dikonfirmasi. Klik tautan konfirmasi di kotak masuk emailmu.",
        "User already registered": "Email ini sudah terdaftar. Pindah ke tab Masuk.",
        "Password should be at least 6 characters": "Kata sandi minimal 6 karakter."
    };
    const ICON = {
        google: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.4 14.4a7.2 7.2 0 0 1 0-4.8V6.5H1.4a12 12 0 0 0 0 11l4-3.1z"/><path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.4 6.5l4 3.1C6.3 6.9 8.9 4.8 12 4.8z"/></svg>',
        github: '<svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>'
    };
    const errText = function (e) {
        const m = (e && e.message) || "";
        if (/provider is not enabled/i.test(m)) return "Login dengan penyedia ini belum diaktifkan di Supabase (Authentication > Providers).";
        return ERR[m] || ("Tidak bisa melanjutkan: " + (m || "coba lagi sebentar lagi") + ".");
    };
    // Akun GitHub bisa saja tanpa email publik, jadi jangan bergantung pada user.email
    function nameOf() {
        const m = user.user_metadata || {};
        return user.email || m.user_name || m.preferred_username || m.name || "akun";
    }
    function providerName() {
        const pv = (user.app_metadata && user.app_metadata.provider) || "email";
        return { google: "Google", github: "GitHub", email: "Email" }[pv] || pv;
    }
    const REDUCE = function () { return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches); };

    let typingTimer = null, escHandler = null;

    function mk(tag, cls, text) {
        const n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text !== undefined) n.textContent = text;
        return n;
    }

    function closeAuth() {
        clearInterval(typingTimer);
        if (escHandler) { document.removeEventListener("keydown", escHandler); escHandler = null; }
        const r = $("auth-root");
        if (r) { r.replaceChildren(); r.className = ""; }
    }

    /* Panel kiri: merek + demo ketikan kode (hanya dekorasi, disembunyikan dari pembaca layar) */
    function hl(line) {
        const esc = line.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return esc.replace(
            /(#.*$)|(f?"[^"]*"?|f?'[^']*'?)|\b(def|return|for|in|if|elif|else|class|import|from|while)\b|\b(print|range|len|input|self)\b|\b(\d+)\b/g,
            function (m, c, s, k, b, n) {
                return c ? '<span class="c">' + c + "</span>"
                    : s ? '<span class="s">' + s + "</span>"
                    : k ? '<span class="k">' + k + "</span>"
                    : b ? '<span class="b">' + b + "</span>"
                    : '<span class="n">' + n + "</span>";
            });
    }

    const DEMOS = [
        { file: "main.py", code: ["def sapa(nama):", '    return f"Halo, {nama}!"', "", 'print(sapa("kamu"))'],
          out: ["Halo, kamu!", "✔ Soal selesai  +10 XP"] },
        { file: "loop.py", code: ["for i in range(1, 4):", '    print("Level", i, "✔")'],
          out: ["Level 1 ✔", "Level 2 ✔", "Level 3 ✔", "🏆 Rank naik: Coder"] },
        { file: "hero.py", code: ["class Hero:", "    def __init__(self, xp=0):", "        self.xp = xp", "    def naik(self):", "        self.xp += 10", "", "h = Hero()", "h.naik()", 'print("XP:", h.xp)'],
          out: ["XP: 10", "✔ Soal selesai  +10 XP"] }
    ];

    function typeDemo(body) {
        const term = body.parentNode;
        const fileEl = term.querySelector(".auth-file");
        let d = 0, pos = 0, outN = 0, phase = "type";
        const text = function () { return DEMOS[d].code.join("\n"); };

        function draw() {
            const typed = text().slice(0, pos).split("\n");
            let html = typed.map(function (ln, i) {
                return '<span class="l">' + hl(ln) + (i === typed.length - 1 ? '<span class="auth-caret"></span>' : "") + "</span>";
            }).join("");
            if (outN > 0) {
                html += '<span class="o-box">' + DEMOS[d].out.slice(0, outN).map(function (t) {
                    return '<span class="o">' + t + "</span>";
                }).join("") + "</span>";
            }
            body.innerHTML = html;
        }
        function tick(ms, fn) {
            typingTimer = setTimeout(function () {
                if (!body.isConnected) return;
                if (document.hidden) { tick(500, fn); return; } // tab tidak aktif: tahan animasi ketik, hemat baterai
                fn();
            }, ms);
        }
        function step() {
            const total = text().length;
            if (phase === "type") {
                if (pos < total) {
                    const ch = text()[pos++];
                    draw();
                    tick(ch === "\n" ? 280 : 35 + Math.random() * 65, step);
                } else { phase = "run"; tick(500, step); }
            } else if (phase === "run") {
                term.classList.add("running");
                if (outN < DEMOS[d].out.length) {
                    tick(outN === 0 ? 900 : 480, function () { outN++; draw(); step(); });
                } else {
                    term.classList.remove("running");
                    phase = "hold"; tick(2800, step);
                }
            } else if (phase === "hold") {
                outN = 0; phase = "erase"; draw(); step();
            } else { // erase
                pos = Math.max(0, pos - 4); draw();
                if (pos === 0) {
                    d = (d + 1) % DEMOS.length;
                    fileEl.textContent = DEMOS[d].file;
                    phase = "type"; tick(450, step);
                } else tick(16, step);
            }
        }

        fileEl.textContent = DEMOS[0].file;
        // Animasi ketik tetap jalan walau OS memakai "reduce motion" (kecil & dekoratif); gerakan besar dimatikan lewat CSS.
        draw();
        tick(700, step);
    }

    function brandPanel() {
        const p = mk("aside", "auth-brand");
        p.append(mk("div", "auth-orb o1"), mk("div", "auth-orb o2"), mk("div", "auth-grid"));
        const logo = mk("div", "auth-logo");
        logo.append(mk("span", "auth-logo-mark", "🐍"), mk("span", "", "Python Odyssey"));
        const top = mk("div", "auth-brand-top");
        top.append(logo,
            mk("h2", "auth-headline", "Belajar Python dengan menulis kode, bukan sekadar membaca."),
            mk("p", "auth-sub", "Editor dan mesin Python asli berjalan langsung di browsermu. Masuk agar progress ikut ke mana pun kamu belajar."));
        const term = mk("div", "auth-term");
        term.setAttribute("aria-hidden", "true");
        const bar = mk("div", "auth-term-bar");
        bar.append(mk("i"), mk("i"), mk("i"), mk("span", "auth-file", "main.py"), mk("b", "auth-run", "▶ Run"));
        term.append(bar, mk("pre", "auth-term-body"),
            mk("span", "auth-chip c1", "⚡ +10 XP"), mk("span", "auth-chip c2", "🎖️ Level naik"));
        const facts = mk("ul", "auth-facts");
        const nLevel = typeof levelsData !== "undefined" ? levelsData.length : 0;
        const nSoal = typeof levelsData !== "undefined" ? levelsData.reduce(function (n, l) { return n + l.tasks.length; }, 0) : 0;
        [[nLevel ? nLevel.toLocaleString("id-ID") : "100+", "level"], [nSoal ? nSoal.toLocaleString("id-ID") : "1.000+", "soal"], ["0", "instalasi"]].forEach(function (f) {
            const li = mk("li"); li.append(mk("strong", "", f[0]), mk("span", "", f[1])); facts.appendChild(li);
        });
        p.append(top, term, facts);
        return p;
    }

    function strength(pw) {
        let s = 0;
        if (pw.length >= 8) s++;
        if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) s++;
        if (/\d/.test(pw)) s++;
        if (/[^A-Za-z0-9]/.test(pw) || pw.length >= 12) s++;
        return pw ? Math.max(1, s) : 0;
    }

    /* Panel kanan: formulir */
    function formPanel(view, forced) {
        const T = {
            login: ["Selamat datang kembali", "Masuk untuk melanjutkan belajar dari level terakhirmu."],
            register: ["Buat akun gratis", "Progress yang sudah ada di perangkat ini ikut tersimpan ke akunmu."],
            reset: ["Atur ulang kata sandi", "Masukkan emailmu. Kami kirim tautan untuk membuat kata sandi baru."],
            recovery: ["Buat kata sandi baru", "Masukkan kata sandi baru untuk akunmu."]
        }[view];
        const wrap = mk("section", "auth-form-wrap");
        if (!forced) {
            const x = mk("button", "auth-close", "✕");
            x.type = "button"; x.setAttribute("aria-label", "Tutup"); x.addEventListener("click", closeAuth);
            wrap.appendChild(x);
        }
        const box = mk("div", "auth-form");
        const title = mk("h1", "auth-title", T[0]); title.id = "auth-title";
        box.append(title, mk("p", "auth-lead", T[1]));

        if (view === "login" || view === "register") {
            const tabs = mk("div", "auth-tabs");
            tabs.setAttribute("role", "tablist");
            [["login", "Masuk"], ["register", "Daftar"]].forEach(function (t) {
                const b = mk("button", "auth-tab" + (t[0] === view ? " on" : ""), t[1]);
                b.type = "button"; b.setAttribute("role", "tab"); b.setAttribute("aria-selected", String(t[0] === view));
                b.addEventListener("click", function () { if (t[0] !== view) showAuth(t[0], forced); });
                tabs.appendChild(b);
            });
            box.appendChild(tabs);
        }

        const form = mk("form", "auth-formel");
        form.noValidate = true;

        function field(id, type, label, auto, opts) {
            opts = opts || {};
            const w = mk("div", "auth-field");
            const row = mk("div", "auth-label-row");
            const l = mk("label", "", label); l.htmlFor = id;
            row.appendChild(l);
            if (opts.extra) row.appendChild(opts.extra);
            const i = mk("input", "auth-input");
            i.id = id; i.type = type; i.autocomplete = auto; i.required = true;
            if (type === "email") { i.inputMode = "email"; i.spellcheck = false; i.placeholder = "nama@email.com"; }
            w.appendChild(row);
            if (opts.toggle) {
                const pw = mk("div", "auth-pw");
                const t = mk("button", "auth-toggle", "Tampilkan");
                t.type = "button"; t.setAttribute("aria-pressed", "false");
                t.addEventListener("click", function () {
                    const show = i.type === "password";
                    i.type = show ? "text" : "password";
                    t.textContent = show ? "Sembunyikan" : "Tampilkan";
                    t.setAttribute("aria-pressed", String(show));
                });
                pw.append(i, t); w.appendChild(pw);
            } else w.appendChild(i);
            form.appendChild(w);
            return i;
        }

        const email = view === "recovery" ? null : field("auth-email", "email", "Email", "email");
        let forgot = null;
        if (view === "login") {
            forgot = mk("button", "auth-link", "Lupa kata sandi?");
            forgot.type = "button"; forgot.addEventListener("click", function () { showAuth("reset", forced); });
        }
        const pass = view === "reset" ? null : field("auth-pass", "password",
            view === "recovery" ? "Kata sandi baru" : "Kata sandi",
            view === "login" ? "current-password" : "new-password", { toggle: true, extra: forgot });

        if (pass && view !== "login") {
            const meter = mk("div", "auth-meter"); meter.append(mk("i"), mk("i"), mk("i"), mk("i"));
            const hint = mk("p", "auth-hint", "Gunakan minimal 8 karakter, campur huruf besar, kecil, dan angka.");
            pass.parentNode.parentNode.append(meter, hint);
            pass.addEventListener("input", function () {
                const s = strength(pass.value);
                meter.dataset.l = String(s);
                hint.textContent = s === 0 ? "Gunakan minimal 8 karakter, campur huruf besar, kecil, dan angka."
                    : ["", "Masih lemah. Tambah panjang dan variasi.", "Cukup. Tambah huruf besar atau angka.", "Kuat.", "Sangat kuat."][s];
            });
        }

        const msg = mk("div", "auth-msg");
        msg.setAttribute("role", "alert");
        function say(text, kind, action) {
            msg.className = "auth-msg" + (kind ? " " + kind : "");
            msg.replaceChildren();
            if (!text) return;
            msg.appendChild(mk("span", "", text));
            if (action) msg.appendChild(action);
        }

        const go = mk("button", "auth-btn");
        go.type = "submit";
        go.append(mk("span", "auth-spin"), mk("span", "", { login: "Masuk", register: "Buat akun", reset: "Kirim tautan", recovery: "Simpan kata sandi" }[view]));
        const busy = function (b) { go.disabled = b; go.classList.toggle("busy", b); };
        form.append(go, msg);

        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            if (email && !email.checkValidity()) { say("Masukkan alamat email yang valid.", "bad"); email.focus(); return; }
            if (pass && !pass.value) { say("Kata sandi belum diisi.", "bad"); pass.focus(); return; }
            if ((view === "register" || view === "recovery") && pass.value.length < 6) { say("Kata sandi minimal 6 karakter.", "bad"); pass.focus(); return; }
            const em = email ? email.value.trim() : "";
            busy(true); say("");
            try {
                if (view === "login") {
                    const r = await sb.auth.signInWithPassword({ email: em, password: pass.value });
                    if (r.error) throw r.error;
                } else if (view === "register") {
                    const r = await sb.auth.signUp({ email: em, password: pass.value, options: { emailRedirectTo: location.origin + location.pathname } });
                    if (r.error) throw r.error;
                    if (!r.data.session) say("Akun dibuat. Kami mengirim tautan konfirmasi ke " + em + ". Klik tautannya, lalu masuk.", "ok");
                } else if (view === "reset") {
                    const r = await sb.auth.resetPasswordForEmail(em, { redirectTo: location.origin + location.pathname });
                    if (r.error) throw r.error;
                    say("Tautan dikirim ke " + em + ". Cek kotak masuk (dan folder spam).", "ok");
                } else {
                    const r = await sb.auth.updateUser({ password: pass.value });
                    if (r.error) throw r.error;
                    say("Kata sandi diperbarui.", "ok"); setTimeout(closeAuth, 1200);
                }
            } catch (err) {
                let act = null;
                if (err && err.message === "Email not confirmed") {
                    act = mk("button", "auth-link", "Kirim ulang email konfirmasi");
                    act.type = "button";
                    act.addEventListener("click", async function () {
                        const r = await sb.auth.resend({ type: "signup", email: em });
                        say(r.error ? errText(r.error) : "Email konfirmasi dikirim ulang.", r.error ? "bad" : "ok");
                    });
                }
                say(errText(err), "bad", act);
            }
            busy(false);
        });
        if (view === "login" || view === "register") {
            const social = mk("div", "auth-social");
            const btns = [];
            [["google", "Google"], ["github", "GitHub"]].forEach(function (pv) {
                const b = mk("button", "auth-oauth");
                b.type = "button";
                b.setAttribute("aria-label", (view === "login" ? "Masuk" : "Daftar") + " dengan " + pv[1]);
                const ico = mk("span", "auth-ico");
                ico.innerHTML = ICON[pv[0]]; // konstanta SVG milik aplikasi (tepercaya)
                b.append(ico, mk("span", "", pv[1]));
                b.addEventListener("click", async function () {
                    btns.forEach(function (x) { x.disabled = true; });
                    say("");
                    try {
                        const r = await sb.auth.signInWithOAuth({
                            provider: pv[0],
                            options: {
                                redirectTo: location.origin + location.pathname,
                                // Tanpa ini, Google langsung memakai akun yang masih aktif di browser (akun A),
                                // sehingga "ganti ke akun B" sebenarnya masuk lagi sebagai A.
                                queryParams: { prompt: "select_account" }
                            }
                        });
                        if (r.error) throw r.error;
                        // sukses: browser dialihkan ke Google/GitHub, lalu kembali ke halaman ini
                    } catch (err) {
                        say(errText(err), "bad");
                        btns.forEach(function (x) { x.disabled = false; });
                    }
                });
                btns.push(b);
                social.appendChild(b);
            });
            box.append(social, mk("div", "auth-or", "atau pakai email"));
        }
        box.appendChild(form);

        if (view === "reset") {
            const back = mk("button", "auth-link auth-back", "← Kembali ke Masuk");
            back.type = "button"; back.addEventListener("click", function () { showAuth("login", forced); });
            box.appendChild(back);
        }
        if (forced && (view === "login" || view === "register")) {
            box.appendChild(mk("div", "auth-or", "atau"));
            const guest = mk("button", "auth-ghost", "Lanjut tanpa akun");
            guest.type = "button";
            guest.addEventListener("click", function () { localStorage.setItem(GUEST_KEY, "1"); setStatus("guest"); closeAuth(); });
            box.append(guest, mk("p", "auth-note", "Tanpa akun, progress hanya tersimpan di browser ini. Kamu bisa masuk kapan saja lewat tombol di pojok atas."));
        } else if (view === "login" || view === "register") {
            box.appendChild(mk("p", "auth-note", "Progress tersimpan di perangkat ini dan di cloud. Hanya akunmu yang bisa membacanya."));
        }
        wrap.appendChild(box);
        return wrap;
    }

    /* Menu akun (setelah login) */
    function accountModal() {
        const back = mk("div", "auth-modal-back");
        back.addEventListener("click", function (e) { if (e.target === back) closeAuth(); });
        const card = mk("div", "auth-card");
        card.setAttribute("role", "dialog"); card.setAttribute("aria-modal", "true"); card.setAttribute("aria-label", "Akun");
        const head = mk("div", "auth-acc-head");
        const who = mk("div", "auth-acc-who");
        who.append(mk("strong", "", nameOf()), mk("span", "", "Masuk lewat " + providerName()));
        head.append(mk("div", "auth-avatar", (nameOf()[0] || "?").toUpperCase()), who);
        const st = mk("p", "auth-acc-status");
        const dot = mk("span", "auth-dot " + status);
        const label = { synced: "Tersinkron", sync: "Menyinkronkan…", error: "Belum tersinkron, akan dicoba lagi", guest: "Belum tersinkron", local: "Belum tersinkron" }[status];
        st.append(dot, document.createTextNode(label + (lastSync && status === "synced" ? " · " + lastSync.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) : "")));
        const msg = mk("p", "auth-note");
        msg.setAttribute("role", "status");
        const sync = mk("button", "auth-btn", "Sinkronkan sekarang");
        sync.type = "button";
        sync.addEventListener("click", async function () {
            sync.disabled = true; await flushNow();
            msg.textContent = status === "synced" ? "Progress sudah tersinkron." : "Gagal sinkron. Akan dicoba lagi otomatis.";
            sync.disabled = false;
            if (status === "synced") { dot.className = "auth-dot synced"; }
        });
        const out = mk("button", "auth-ghost danger", "Keluar");
        out.type = "button"; out.addEventListener("click", signOut);
        const close = mk("button", "auth-link auth-back", "Tutup");
        close.type = "button"; close.addEventListener("click", closeAuth);
        const lbBtn = mk("button", "auth-ghost", "🏆 Papan peringkat");
        lbBtn.type = "button"; lbBtn.addEventListener("click", function () { showLeaderboard("semua"); });
        const pfBtn = mk("button", "auth-ghost", "👤 Profil saya");
        pfBtn.type = "button"; pfBtn.addEventListener("click", showProfile);
        card.append(head, st, sync, pfBtn, lbBtn, out, msg, close);
        back.appendChild(card);
        return back;
    }

    function ensureLogoutBtn() {
        if ($("btn-logout") || !$("btn-account")) return;
        const b = mk("button", "text-xs font-semibold px-3 py-2 rounded-xl border border-rose-900/50 text-rose-300 bg-rose-950/30 hover:bg-rose-900/50 transition", "⎋ Keluar");
        b.id = "btn-logout"; b.type = "button"; b.hidden = !user;
        b.addEventListener("click", signOut);
        $("btn-account").insertAdjacentElement("afterend", b);
    }

    function showAuth(view, forced) {
        clearInterval(typingTimer);
        let root = $("auth-root");
        if (!root) { root = document.createElement("div"); root.id = "auth-root"; document.body.appendChild(root); }
        if (escHandler) { document.removeEventListener("keydown", escHandler); escHandler = null; }
        if (!forced) {
            escHandler = function (e) { if (e.key === "Escape") closeAuth(); };
            document.addEventListener("keydown", escHandler);
        }
        if (view === "account") {
            root.className = "modal";
            root.replaceChildren(accountModal());
        } else {
            root.className = "";
            const shell = mk("div", "auth-shell");
            shell.setAttribute("role", "dialog"); shell.setAttribute("aria-modal", "true"); shell.setAttribute("aria-labelledby", "auth-title");
            const brand = brandPanel();
            shell.append(brand, formPanel(view, forced));
            root.replaceChildren(shell);
            typeDemo(brand.querySelector(".auth-term-body"));
        }
        const first = root.querySelector("input, .auth-btn");
        if (first) first.focus({ preventScroll: true });
    }

    async function signOut() {
        if (!window.confirm("Keluar? Progress di perangkat ini akan dihapus (tetap aman di cloud dan kembali saat kamu masuk lagi).")) return;
        await flushNow();
        if (status === "error") { toast("Progress belum tersinkron; coba lagi setelah online agar tidak hilang."); return; }
        await sb.auth.signOut();
        user = null;
        try { localStorage.removeItem(OWNER_KEY); localStorage.removeItem(STORAGE_KEY); } catch (e) { /* abaikan */ }
        app().apply(EMPTY());
        setStatus("guest");
        showAuth("login", true);
    }
    function toast(t) { window.alert(t); }

    /* ---------- Leaderboard & profil ---------- */
    function openModal(card, label) {
        let root = $("auth-root");
        if (!root) { root = document.createElement("div"); root.id = "auth-root"; document.body.appendChild(root); }
        clearInterval(typingTimer);
        if (escHandler) document.removeEventListener("keydown", escHandler);
        escHandler = function (e) { if (e.key === "Escape") closeAuth(); };
        document.addEventListener("keydown", escHandler);
        const back = mk("div", "auth-modal-back");
        back.addEventListener("click", function (e) { if (e.target === back) closeAuth(); });
        card.setAttribute("role", "dialog"); card.setAttribute("aria-modal", "true"); card.setAttribute("aria-label", label);
        back.appendChild(card);
        root.className = "modal";
        root.replaceChildren(back);
    }

    async function showLeaderboard(periode) {
        if (!user) { showAuth("login"); return; }
        periode = periode === "minggu" ? "minggu" : "semua";
        const ticket = ++lbTicket;

        const card = mk("div", "auth-card lb-card");
        const head = mk("div", "lb-head");
        const x = mk("button", "lb-x", "✕");
        x.type = "button"; x.setAttribute("aria-label", "Tutup"); x.addEventListener("click", closeAuth);
        head.append(mk("h2", "lb-title", "🏆 Papan peringkat"), x);

        const tabs = mk("div", "auth-tabs");
        tabs.setAttribute("role", "tablist");
        [["semua", "Semua waktu"], ["minggu", "7 hari terakhir"]].forEach(function (t) {
            const b = mk("button", "auth-tab" + (t[0] === periode ? " on" : ""), t[1]);
            b.type = "button"; b.setAttribute("role", "tab"); b.setAttribute("aria-selected", String(t[0] === periode));
            b.addEventListener("click", function () { if (t[0] !== periode) showLeaderboard(t[0]); });
            tabs.appendChild(b);
        });

        const body = mk("div", "lb-body");
        body.setAttribute("aria-busy", "true");
        const skel = mk("ol", "lb-list");
        for (let i = 0; i < 5; i++) skel.appendChild(mk("li", "lb-row lb-skel"));
        body.appendChild(skel);

        const meBar = mk("p", "lb-me"); meBar.setAttribute("role", "status");
        const settings = mk("details", "lb-settings");
        settings.appendChild(mk("summary", "", "Profil & privasi"));
        const note = mk("p", "lb-note", "Pengguna lain hanya melihat nama tampilan dan jumlah soal. Akun dengan lonjakan skor tak wajar disembunyikan otomatis.");
        card.append(head, tabs, body, meBar, settings, note);
        openModal(card, "Papan peringkat");

        try {
            const res = await Promise.all([
                sb.rpc("leaderboard", { periode: periode, limit_n: 20 }),
                sb.rpc("leaderboard_saya", { periode: periode }),
                sb.from("profiles").select("display_name, show_on_leaderboard").eq("user_id", user.id).maybeSingle()
            ]);
            if (ticket !== lbTicket) return; // pengguna sudah pindah tab/menutup
            res.forEach(function (r) { if (r.error) throw r.error; });
            const rows = res[0].data || [], me = (res[1].data || [])[0], prof = res[2].data;

            body.removeAttribute("aria-busy");
            body.replaceChildren();
            if (!rows.length) {
                const empty = mk("div", "lb-empty");
                empty.append(mk("strong", "", periode === "minggu" ? "Belum ada yang menyelesaikan soal dalam 7 hari terakhir." : "Papan peringkat masih kosong."),
                             mk("span", "", "Aktifkan tampil di papan peringkat lewat Profil & privasi, lalu selesaikan satu soal."));
                body.appendChild(empty);
            } else {
                const max = Math.max(1, rows[0].soal);
                body.appendChild(podiumEl(rows.slice(0, 3)));
                const list = mk("ol", "lb-list");
                list.start = 4;
                rows.slice(3).forEach(function (r) { list.appendChild(lbRow(r, max)); });
                if (me && !rows.some(function (r) { return r.ini_saya; })) {
                    list.appendChild(mk("li", "lb-gap", "…"));
                    list.appendChild(lbRow({ peringkat: me.peringkat, display_name: (prof && prof.display_name) || "Kamu", soal: me.soal, ini_saya: true }, max));
                }
                if (list.children.length) body.appendChild(list);
            }

            const onBoard = !!(prof && prof.show_on_leaderboard && prof.display_name);
            if (me) meBar.textContent = "Peringkatmu #" + me.peringkat + " dari " + me.total_peserta + " peserta · " + nf(me.soal) + " soal.";
            else if (!onBoard) meBar.textContent = "Kamu belum tampil di papan peringkat. Atur di Profil & privasi.";
            else meBar.textContent = periode === "minggu" ? "Selesaikan satu soal untuk masuk peringkat 7 hari terakhir." : "Selesaikan satu soal untuk masuk peringkat.";
            settings.appendChild(profileForm(prof, periode));
            settings.open = !onBoard;
        } catch (e) {
            if (ticket !== lbTicket) return;
            console.error(e);
            body.removeAttribute("aria-busy");
            const missing = e && (e.code === "PGRST202" || /could not find the function/i.test(e.message || ""));
            const err = mk("div", "lb-empty");
            err.append(mk("strong", "", "Papan peringkat belum bisa dimuat."),
                       mk("span", "", missing ? "Fungsi database belum ada. Jalankan leaderboard_upgrade.sql di Supabase SQL Editor." : "Periksa koneksi internet, lalu coba lagi."));
            const retry = mk("button", "auth-ghost", "Coba lagi");
            retry.type = "button"; retry.addEventListener("click", function () { showLeaderboard(periode); });
            err.appendChild(retry);
            body.replaceChildren(err);
        }
    }

    let lbTicket = 0;
    const MEDAL = { 1: "🥇", 2: "🥈", 3: "🥉" };
    const NAME_RE = /^[\p{L}\p{N}][\p{L}\p{N} ._-]{0,28}[\p{L}\p{N}]$/u;

    // Nickname bawaan: nama dari Google/GitHub, kalau tidak ada pakai bagian depan email
    function suggestName() {
        const m = user.user_metadata || {};
        let s = m.user_name || m.preferred_username || m.full_name || m.name || (user.email || "").split("@")[0] || "";
        s = s.normalize("NFKC").replace(/[^\p{L}\p{N} ._-]/gu, "").replace(/\s+/g, " ").trim().slice(0, 30)
             .replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, "");
        return NAME_RE.test(s) ? s : "";
    }

    // Buat profil sekali saat pertama login; kalau nama bentrok, tambahkan angka
    async function ensureProfile() {
        try {
            const r = await sb.from("profiles").select("user_id, display_name").eq("user_id", user.id).maybeSingle();
            if (r.error || (r.data && r.data.display_name)) return;
            const base = suggestName();
            if (!base) return;
            for (let i = 0; i < 4; i++) {
                const name = i === 0 ? base : base.slice(0, 26) + (100 + Math.floor(Math.random() * 900));
                const w = await sb.from("profiles").upsert(
                    { user_id: user.id, display_name: name, show_on_leaderboard: false },
                    { onConflict: "user_id" });
                if (!w.error) return;
                if (w.error.code !== "23505") return; // selain nama kembar: berhenti
            }
        } catch (e) { console.error(e); }
    }
    function nf(n) { return Number(n).toLocaleString("id-ID"); }

    function podiumEl(top) {
        const wrap = mk("div", "lb-podium");
        wrap.setAttribute("role", "list");
        [1, 0, 2].forEach(function (i) { // juara 1 di tengah
            const r = top[i];
            if (!r) return;
            const b = mk("div", "lb-pod p" + (i + 1) + (r.ini_saya ? " me" : ""));
            b.setAttribute("role", "listitem");
            b.append(mk("span", "lb-medal", MEDAL[r.peringkat] || "#" + r.peringkat),
                     mk("strong", "lb-pname", r.display_name),
                     mk("span", "lb-pts", nf(r.soal) + " soal"));
            wrap.appendChild(b);
        });
        return wrap;
    }

    function lbRow(r, max) {
        const li = mk("li", "lb-row" + (r.ini_saya ? " me" : ""));
        const rank = mk("span", "lb-rank", "#" + r.peringkat);
        rank.setAttribute("aria-label", "Peringkat " + r.peringkat);
        const mid = mk("span", "lb-mid");
        const bar = mk("span", "lb-bar"), fill = mk("i");
        fill.style.width = Math.max(4, Math.round((r.soal / max) * 100)) + "%";
        bar.appendChild(fill);
        mid.append(mk("span", "lb-name", r.display_name + (r.ini_saya ? " (kamu)" : "")), bar);
        li.append(rank, mid, mk("span", "lb-score", nf(r.soal) + " soal"));
        return li;
    }

    function profileForm(prof, periode, onSaved) {
        const f = mk("form", "lb-form");
        f.noValidate = true;
        const lab = mk("label", "", "Nama di papan peringkat"); lab.htmlFor = "lb-name";
        const name = mk("input", "auth-input");
        name.id = "lb-name"; name.maxLength = 30; name.autocomplete = "nickname"; name.placeholder = "2–30 huruf, angka, spasi, titik, - atau _";
        name.value = (prof && prof.display_name) || suggestName();
        const sw = mk("label", "lb-switch");
        const cb = mk("input"); cb.type = "checkbox"; cb.checked = !!(prof && prof.show_on_leaderboard);
        sw.append(cb, mk("span", "", "Tampilkan saya di papan peringkat"));
        const msg = mk("p", "lb-msg"); msg.setAttribute("role", "alert");
        const go = mk("button", "auth-btn", "Simpan"); go.type = "submit";
        f.append(lab, name, sw, go, msg);

        f.addEventListener("submit", async function (e) {
            e.preventDefault();
            const n = name.value.trim().replace(/\s+/g, " ");
            if (cb.checked && !NAME_RE.test(n)) {
                msg.textContent = "Nama harus 2–30 karakter: huruf, angka, spasi, titik, - atau _.";
                name.focus(); return;
            }
            go.disabled = true; msg.textContent = "";
            const r = await sb.from("profiles").upsert({
                user_id: user.id, display_name: n || null, show_on_leaderboard: cb.checked && !!n
            }, { onConflict: "user_id" });
            go.disabled = false;
            if (r.error) {
                msg.textContent = r.error.code === "23505" ? "Nama itu sudah dipakai. Coba nama lain."
                    : r.error.code === "23514" ? "Nama itu tidak diperbolehkan. Pakai nama lain."
                    : "Gagal menyimpan. Coba lagi sebentar lagi.";
                return;
            }
            if (onSaved) onSaved(n); else showLeaderboard(periode);
        });
        return f;
    }

    /* ---------- Profil: nickname, privasi, dan akun tertaut (bind) ---------- */
    function pfSection(title, hint) {
        const sec = mk("section", "pf-sec");
        sec.appendChild(mk("h3", "pf-h", title));
        if (hint) sec.appendChild(mk("p", "pf-hint", hint));
        return sec;
    }

    async function loadIdentities() {
        try {
            const r = await sb.auth.getUserIdentities();
            if (!r.error && r.data && r.data.identities) return r.data.identities;
        } catch (e) { console.error(e); }
        return (user && user.identities) || [];
    }

    function identityDetail(i) {
        const d = (i && i.identity_data) || {};
        return d.email || d.user_name || d.preferred_username || d.name || "";
    }

    // Daftar metode masuk yang bisa ditautkan ke akun ini
    function bindSection(identities, rerender, say) {
        const sec = pfSection("Akun tertaut", "Tautkan beberapa metode masuk ke satu akun supaya progress dan nickname yang sama bisa dipakai lewat Google, GitHub, atau email.");
        const list = mk("ul", "pf-list");
        const only = identities.length < 2;

        function row(provider, label, iconHtml) {
            const ident = identities.find(function (i) { return i.provider === provider; });
            const li = mk("li", "pf-row");
            const ico = mk("span", "auth-ico");
            if (iconHtml) ico.innerHTML = iconHtml; else ico.textContent = "✉"; // konstanta SVG milik aplikasi (tepercaya)
            const txt = mk("span", "pf-rowtxt");
            txt.append(mk("strong", "", label), mk("span", "", ident ? (identityDetail(ident) || "Terhubung") : "Belum terhubung"));
            const btn = mk("button", ident ? "auth-ghost pf-btn" : "auth-btn pf-btn", ident ? "Lepas" : "Hubungkan");
            btn.type = "button";
            if (ident) {
                if (only) { btn.disabled = true; btn.title = "Sisakan minimal satu metode masuk"; }
                btn.addEventListener("click", async function () {
                    if (!window.confirm("Lepas " + label + " dari akun ini?")) return;
                    btn.disabled = true;
                    const r = await sb.auth.unlinkIdentity(ident);
                    if (r.error) { say(errText(r.error), true); btn.disabled = false; return; }
                    say(label + " dilepas.", false);
                    rerender();
                });
            } else if (provider !== "email") {
                btn.addEventListener("click", async function () {
                    btn.disabled = true;
                    const options = { redirectTo: location.origin + location.pathname };
                    if (provider === "google") options.queryParams = { prompt: "select_account" };
                    const r = await sb.auth.linkIdentity({ provider: provider, options: options });
                    if (r.error) {
                        say(/manual linking/i.test(r.error.message || "")
                            ? "Penautan akun belum diaktifkan di Supabase (Authentication > Sign In / Providers > Allow manual linking)."
                            : errText(r.error), true);
                        btn.disabled = false;
                    } // sukses: browser dialihkan ke penyedia login lalu kembali ke halaman ini
                });
            } else {
                btn.addEventListener("click", function () { form.hidden = !form.hidden; if (!form.hidden) em.focus(); });
            }
            li.append(ico, txt, btn);
            return li;
        }

        // Form tautan email + kata sandi
        const form = mk("form", "pf-emailform");
        form.hidden = true; form.noValidate = true;
        const em = mk("input", "auth-input");
        em.type = "email"; em.autocomplete = "email"; em.placeholder = "nama@email.com"; em.value = user.email || "";
        const pw = mk("input", "auth-input");
        pw.type = "password"; pw.autocomplete = "new-password"; pw.placeholder = "Kata sandi baru (min. 6 karakter)";
        const go = mk("button", "auth-btn", "Simpan email & kata sandi");
        go.type = "submit";
        form.append(em, pw, go);
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            if (!em.checkValidity() || !em.value.trim()) { say("Masukkan alamat email yang valid.", true); em.focus(); return; }
            if (pw.value.length < 6) { say("Kata sandi minimal 6 karakter.", true); pw.focus(); return; }
            go.disabled = true;
            const attrs = { password: pw.value };
            if (em.value.trim() !== user.email) attrs.email = em.value.trim();
            const r = await sb.auth.updateUser(attrs);
            go.disabled = false;
            if (r.error) { say(errText(r.error), true); return; }
            pw.value = "";
            say(attrs.email ? "Cek " + attrs.email + " untuk mengonfirmasi email baru." : "Kata sandi disimpan. Kamu bisa masuk dengan email dan kata sandi.", false);
            rerender();
        });

        list.append(row("google", "Google", ICON.google), row("github", "GitHub", ICON.github), row("email", "Email & kata sandi", ""));
        sec.append(list, form);
        return sec;
    }

    async function showProfile() {
        if (!user) { showAuth("login"); return; }
        const card = mk("div", "auth-card lb-card");
        const head = mk("div", "lb-head");
        const x = mk("button", "lb-x", "✕");
        x.type = "button"; x.setAttribute("aria-label", "Tutup"); x.addEventListener("click", closeAuth);
        head.append(mk("h2", "lb-title", "👤 Profil"), x);

        const idb = mk("div", "auth-acc-head");
        const avatar = mk("div", "auth-avatar", (nameOf()[0] || "?").toUpperCase());
        const who = mk("div", "auth-acc-who");
        const whoName = mk("strong", "", nameOf());
        who.append(whoName, mk("span", "", user.email || ("Masuk lewat " + providerName())));
        idb.append(avatar, who);

        const body = mk("div", "pf-body");
        body.setAttribute("aria-busy", "true");
        body.appendChild(mk("p", "pf-hint", "Memuat profil…"));
        const msg = mk("p", "pf-msg"); msg.setAttribute("role", "status");
        card.append(head, idb, body, msg);
        openModal(card, "Profil");

        function say(t, bad) { msg.textContent = t; msg.className = "pf-msg" + (bad ? " bad" : t ? " ok" : ""); }

        try {
            const res = await Promise.all([
                sb.from("profiles").select("display_name, show_on_leaderboard").eq("user_id", user.id).maybeSingle(),
                loadIdentities()
            ]);
            if (!card.isConnected) return; // pengguna sudah menutup / pindah menu
            if (res[0].error) throw res[0].error;
            let prof = res[0].data;
            if (prof && prof.display_name) { whoName.textContent = prof.display_name; avatar.textContent = prof.display_name[0].toUpperCase(); }

            const nick = pfSection("Nickname & privasi", "Nickname ini juga dipakai sebagai nama di papan peringkat.");
            nick.appendChild(profileForm(prof, null, function (n) {
                prof = { display_name: n || null, show_on_leaderboard: prof && prof.show_on_leaderboard };
                whoName.textContent = n || nameOf();
                avatar.textContent = (n || nameOf())[0].toUpperCase();
                say("Profil disimpan.", false);
            }));

            const bindBox = mk("div");
            async function rerender() {
                const ids = await loadIdentities();
                if (!card.isConnected) return;
                bindBox.replaceChildren(bindSection(ids, rerender, say));
                refreshUser();
            }
            bindBox.appendChild(bindSection(res[1], rerender, say));

            body.removeAttribute("aria-busy");
            body.replaceChildren(nick, bindBox);
        } catch (e) {
            console.error(e);
            body.removeAttribute("aria-busy");
            body.replaceChildren(mk("p", "pf-hint", "Profil belum bisa dimuat. Periksa koneksi internet, lalu coba lagi."));
        }
    }

    function ensureProfileBtn() {
        if ($("btn-profile") || !$("btn-account")) return;
        const b = mk("button", "text-xs font-semibold px-3 py-2 rounded-xl border border-indigo-900/50 text-indigo-300 bg-indigo-950/30 hover:bg-indigo-900/50 transition", "👤 Profil");
        b.id = "btn-profile"; b.type = "button"; b.hidden = !user;
        b.addEventListener("click", showProfile);
        $("btn-account").insertAdjacentElement("afterend", b);
    }

    function ensureLeaderboardBtn() {
        if ($("btn-leaderboard") || !$("btn-account")) return;
        const b = mk("button", "text-xs font-semibold px-3 py-2 rounded-xl border border-amber-900/50 text-amber-300 bg-amber-950/30 hover:bg-amber-900/50 transition", "🏆 Peringkat");
        b.id = "btn-leaderboard"; b.type = "button"; b.hidden = !user;
        b.addEventListener("click", function () { showLeaderboard("semua"); });
        $("btn-account").insertAdjacentElement("afterend", b);
    }

    /* ---------- Sesi ---------- */
    // Ambil data pengguna terbaru dari server: app_metadata.role yang diubah lewat SQL/dashboard
    // tidak ada di sesi yang tersimpan di browser sampai token diperbarui.
    async function refreshUser() {
        if (!user) return;
        try {
            const r = await sb.auth.getUser();
            if (r.data && r.data.user && r.data.user.id === user.id) { user = r.data.user; applyRoleUI(); }
        } catch (e) { console.error(e); }
    }

    function startSession(session) {
        if (!session) return;
        if (user && user.id === session.user.id) { user = session.user; applyRoleUI(); return; }
        user = session.user;
        localStorage.removeItem(GUEST_KEY);
        closeAuth();
        syncOnLogin();
        refreshUser();
    }

    async function init() {
        const badge = $("btn-account");
        const configured = urlOk && !!window.supabase;
        if (!configured) {
            setStatus("local");
            badge.addEventListener("click", function () {
                window.alert("Cloud belum aktif. Isi SUPABASE_URL dan SUPABASE_ANON_KEY di cloud.js, lalu jalankan schema.sql di Supabase.");
            });
            return;
        }
        sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
        window.OdysseyCloud = { markDirty: markDirty };
        ensureLogoutBtn();
        ensureLeaderboardBtn();
        ensureProfileBtn();
        badge.addEventListener("click", function () { if (user) showAuth("account"); else showAuth("login"); });
        window.addEventListener("online", function () { if (dirty) flush(); else refreshFromCloud(); });
        document.addEventListener("visibilitychange", function () {
            const r = $("auth-root");
            if (r) r.classList.toggle("paused", document.hidden);
            if (document.visibilityState === "hidden" && dirty) flush();
            else if (document.visibilityState === "visible") { refreshFromCloud(); refreshUser(); }
        });

        sb.auth.onAuthStateChange(function (ev, session) {
            setTimeout(function () {
                console.debug("[auth]", ev, session ? session.user.id : null);
                if (ev === "PASSWORD_RECOVERY") showAuth("recovery");
                else if ((ev === "SIGNED_IN" || ev === "INITIAL_SESSION" || ev === "TOKEN_REFRESHED") && session) startSession(session);
                else if (ev === "SIGNED_OUT") { user = null; setStatus("guest"); }
            }, 0);
        });
        // Kembali dari Google/GitHub: token / kode / error bisa ada di query maupun hash URL
        const q = new URLSearchParams(location.search);
        new URLSearchParams(location.hash.slice(1)).forEach(function (v, k) { q.set(k, v); });
        const returning = !!(q.get("access_token") || q.get("code") || q.get("error") || q.get("error_description"));
        const urlError = q.get("error_description") || q.get("error");
        if (urlError) window.alert("Login gagal: " + urlError.replace(/\+/g, " "));
        let r = await sb.auth.getSession();
        if (!(r.data && r.data.session) && q.get("access_token") && q.get("refresh_token")) {
            // Jaring pengaman: pasang sesi manual bila deteksi otomatis dari URL gagal
            const s = await sb.auth.setSession({ access_token: q.get("access_token"), refresh_token: q.get("refresh_token") });
            if (!s.error && s.data && s.data.session) r = { data: { session: s.data.session } };
            else console.error("[auth] setSession gagal", s.error);
        }
        if (returning) history.replaceState(null, "", location.pathname);
        if (r.data && r.data.session) startSession(r.data.session);
        else {
            setStatus("guest");
            if (returning && !urlError) window.alert("Login belum berhasil: sesi tidak terbentuk setelah kembali dari penyedia login. Periksa Site URL dan Redirect URLs di Supabase, lalu coba lagi.");
            if (returning || !localStorage.getItem(GUEST_KEY)) showAuth("login", true);
        }
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
    else init();
})();
