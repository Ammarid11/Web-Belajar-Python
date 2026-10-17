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
    const configured = /^https:\/\/[\w-]+\.supabase\.co/.test(SUPABASE_URL) && SUPABASE_ANON_KEY.indexOf("YOUR-") !== 0 && !!window.supabase;

    let sb = null, user = null, dirty = false, pushing = false, timer = null, status = "local";
    let lastSync = null;
    const $ = function (id) { return document.getElementById(id); };
    const app = function () { return window.OdysseyApp; };
    const EMPTY = function () { return { version: 2, savedAt: 0, done: {}, drafts: {}, settings: { lockOrder: false } }; };

    /* ---------- Status di header ---------- */
    const LABEL = {
        local: "💾 Lokal", guest: "👤 Masuk", sync: "⏳ Menyinkronkan…",
        synced: "☁ Tersinkron", error: "⚠ Gagal sinkron"
    };
    function setStatus(s) {
        status = s;
        if (s === "synced") lastSync = new Date();
        const b = $("btn-account");
        if (b) b.textContent = LABEL[s] + (user && s !== "sync" ? " · " + nameOf().split("@")[0] : "");
        const lo = $("btn-logout");
        if (lo) lo.hidden = !user;
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
            settings: newer.settings || older.settings, last: newer.last || older.last
        };
    }

    /* ---------- Sinkronisasi ---------- */
    async function pull() {
        const r = await sb.from(TABLE).select("data").eq("user_id", user.id).maybeSingle();
        if (r.error) throw r.error;
        return r.data ? r.data.data : null;
    }
    async function push(data) {
        const r = await sb.from(TABLE).upsert({ user_id: user.id, data: data, updated_at: new Date().toISOString() }, { onConflict: "user_id" });
        if (r.error) throw r.error;
    }

    async function syncOnLogin() {
        setStatus("sync");
        try {
            let local = app().serialize();
            const prev = localStorage.getItem(OWNER_KEY);
            if (prev && prev !== user.id) local = EMPTY(); // data lokal milik akun lain: jangan dicampur
            const cloud = await pull();
            const merged = cloud ? merge(local, cloud, prev !== user.id) : local;
            localStorage.setItem(OWNER_KEY, user.id);
            app().apply(merged);
            await push(merged);
            setStatus("synced");
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
            typingTimer = setTimeout(function () { if (body.isConnected) fn(); }, ms);
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
        [["139", "level"], ["1.256", "soal"], ["0", "instalasi"]].forEach(function (f) {
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
            sync.disabled = true; dirty = true; await flush();
            msg.textContent = status === "synced" ? "Progress sudah tersinkron." : "Gagal sinkron. Akan dicoba lagi otomatis.";
            sync.disabled = false;
            if (status === "synced") { dot.className = "auth-dot synced"; }
        });
        const out = mk("button", "auth-ghost danger", "Keluar");
        out.type = "button"; out.addEventListener("click", signOut);
        const close = mk("button", "auth-link auth-back", "Tutup");
        close.type = "button"; close.addEventListener("click", closeAuth);
        card.append(head, st, sync, out, msg, close);
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
        dirty = true; await flush();
        if (status === "error") { toast("Progress belum tersinkron; coba lagi setelah online agar tidak hilang."); return; }
        await sb.auth.signOut();
        user = null;
        try { localStorage.removeItem(OWNER_KEY); localStorage.removeItem(STORAGE_KEY); } catch (e) { /* abaikan */ }
        app().apply(EMPTY());
        setStatus("guest");
        showAuth("login", true);
    }
    function toast(t) { window.alert(t); }

    /* ---------- Sesi ---------- */
    function startSession(session) {
        if (!session || (user && user.id === session.user.id)) return;
        user = session.user;
        localStorage.removeItem(GUEST_KEY);
        closeAuth();
        syncOnLogin();
    }

    async function init() {
        const badge = $("btn-account");
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
        badge.addEventListener("click", function () { if (user) showAuth("account"); else showAuth("login"); });
        window.addEventListener("online", function () { if (dirty) flush(); });
        document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden" && dirty) flush(); });

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
