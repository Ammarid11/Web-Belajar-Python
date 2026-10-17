/* Service worker Python Odyssey.
 * - Kerangka aplikasi: network-first dengan batas waktu (offline tetap jalan, jaringan lemot tidak menggantung).
 * - curriculum.js, tailwind.css, style.css: stale-while-revalidate (cepat dari cache, diperbarui di latar belakang).
 * - Pyodide (URL berversi): cache-first.
 * - Supabase tidak disentuh.
 * Naikkan SHELL setiap kali app.js dan curriculum.js berubah bersamaan, agar keduanya selalu serasi. */
const SHELL = "odyssey-shell-v4";
const PYO = "odyssey-pyodide-v1";
const NETWORK_TIMEOUT_MS = 4000;
const SHELL_FILES = ["./", "index.html", "tailwind.css", "style.css", "curriculum.js", "app.js", "cloud.js"];
const SWR_FILE = /\/(curriculum\.js|tailwind\.css|style\.css)$/;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL)
      .then((cache) => Promise.allSettled(SHELL_FILES.map((file) => cache.add(file))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names
        .filter((name) =>
          (name.startsWith("odyssey-shell-") && name !== SHELL) ||
          (name.startsWith("odyssey-pyodide-") && name !== PYO))
        .map((name) => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

const cacheable = (res) => res && (res.status === 200 || res.type === "opaque");

function store(cacheName, request, res) {
  if (!cacheable(res)) return Promise.resolve();
  const copy = res.clone();
  return caches.open(cacheName).then((cache) => cache.put(request, copy));
}

function fallback(request) {
  return caches.match(request).then((hit) => {
    if (hit) return hit;
    if (request.mode === "navigate") return caches.match("index.html").then((p) => p || caches.match("./"));
    return undefined;
  });
}

function networkFirst(event, cacheName) {
  const request = event.request;
  const network = fetch(request).then((res) => {
    event.waitUntil(store(cacheName, request, res));
    return res;
  });
  network.catch(() => {}); // cegah peringatan bila jaringan gagal setelah cache sudah dipakai
  const timeout = new Promise((resolve) => setTimeout(() => resolve(null), NETWORK_TIMEOUT_MS))
    .then(() => fallback(request));
  // Cache menang hanya bila jaringan lebih lambat dari batas waktu atau gagal; selain itu jaringan yang dipakai.
  return Promise.race([network, timeout.then((hit) => hit || network)])
    .catch(() => fallback(request).then((hit) => hit || Promise.reject(new Error("offline"))));
}

function staleWhileRevalidate(event, cacheName) {
  const request = event.request;
  const refresh = fetch(request).then((res) => store(cacheName, request, res).then(() => res));
  event.waitUntil(refresh.catch(() => {}));
  return caches.match(request).then((hit) => hit || refresh);
}

function cacheFirst(event, cacheName) {
  const request = event.request;
  return caches.match(request).then((hit) => hit || fetch(request).then((res) => {
    event.waitUntil(store(cacheName, request, res));
    return res;
  }));
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || request.headers.has("range")) return;
  const url = new URL(request.url);
  if (/\.supabase\.co$/.test(url.hostname)) return;

  if (url.origin === self.location.origin) {
    event.respondWith(SWR_FILE.test(url.pathname) ? staleWhileRevalidate(event, SHELL) : networkFirst(event, SHELL));
  } else if (url.hostname === "cdn.jsdelivr.net" && url.pathname.startsWith("/pyodide/")) {
    event.respondWith(cacheFirst(event, PYO));
  } else if (/^(cdn\.jsdelivr\.net|fonts\.googleapis\.com|fonts\.gstatic\.com)$/.test(url.hostname)) {
    event.respondWith(networkFirst(event, SHELL));
  }
});
