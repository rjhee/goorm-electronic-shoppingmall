// self.addEventListener('fetch', (event) => {
//   const req = event.request;
//   const url = new URL(req.url);
//   if (url.origin === location.url) {
//     event.respondWith(cacheFirst(req));
//   } else {
//     event.respondWith(newtorkFirst(req));
//   }
// });

const _version = 'v1';
const cacheName = 'v1';
const cacheList = ['./images/offline.png', './offline.html'];

const log = (msg) => {
  console.log(`[ServiceWorker${_version}] ${msg}`);
};

// install
self.addEventListener('install', (event) => {
  log('INSTALL');
});

self.addEventListener('activate', (event) => {
  log('Activate');
});

self.addEventListener('fetch', (event) => {
  log('Fetch' + event.request.url);
});
