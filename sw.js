var CACHE_NAME = 'sw-v1';
var urlsToCache = [
  '/',
  '/style.css',
  '/app.js'
];

self.addEventListener('install', function(e) {
  console.log('sw install event');

  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('sw fetch event');

  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) {
        return response;
      }

      return fetch(e.request);
    })
  );
});
