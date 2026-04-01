const CACHE_NAME = 'syntro-cache-v1';
const assets = [
  './',
  './index.html',        // Tu GPSSYNTRO.html renombrado
  './logo.png',          // El logo que subiremos como archivo
  './leaflet.css',
  './leaflet.js',
  './turf.min.js',
  './proj4.js',
  './togeojson.js'       // ¡Indispensable para procesar los KML!
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});