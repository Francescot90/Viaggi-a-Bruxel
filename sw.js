/* Tiene il sito in memoria sul telefono: dopo la prima apertura
   funziona anche senza rete. */
var CACHE = 'bruxelles-v3';
var FILE = [
  './', 'index.html',
  'sabato.html', 'domenica.html', 'lunedi.html', 'martedi.html', 'mercoledi.html',
  'viaggio.html', 'pranzi.html', 'frasi.html', 'info.html', 'mappa.html',
  'css/style.css', 'js/main.js', 'js/luoghi.js'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return Promise.all(FILE.map(function (f) {
        return c.add(f).catch(function () { /* un file mancante non blocca il resto */ });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (k) {
      return Promise.all(k.filter(function (n) { return n !== CACHE; })
                          .map(function (n) { return caches.delete(n); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;

  e.respondWith(
    caches.match(e.request).then(function (hit) {
      if (hit) {
        /* aggiorna in sottofondo, ma intanto risponde subito */
        fetch(e.request).then(function (r) {
          if (r && r.ok) caches.open(CACHE).then(function (c) { c.put(e.request, r); });
        }).catch(function () {});
        return hit;
      }
      return fetch(e.request).then(function (r) {
        if (r && r.ok) {
          var copia = r.clone();
          caches.open(CACHE).then(function (c) { c.put(e.request, copia); });
        }
        return r;
      });
    })
  );
});
