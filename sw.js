// Service Worker Asas untuk PWA Install
const CACHE_NAME = 'ketick-seo-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  'icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
