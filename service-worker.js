// self.addEventListener('fetch', (event) => {
//   const req = event.request;
//   const url = new URL(req.url);
//   if (url.origin === location.url) {
//     event.respondWith(cacheFirst(req));
//   } else {
//     event.respondWith(newtorkFirst(req));
//   }
// });

const CACHE_NAME = 'cache-v1';
const FILES_TO_CACHE = [
  './images/offline.png',
  './offline.html',
  './images/icon/favicon.ico',
];

// 상술한 파일 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

// CACHE_NAME이 변경되면 오래된 캐시 삭제
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (CACHE_NAME !== key) return caches.delete(key);
        })
      )
    )
  );
});

// 요청에 실패하면 오프라인 페이지 표시
self.addEventListener('fetch', (event) => {
  if ('navigate' !== event.request.mode) return;

  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(CACHE_NAME).then((cache) => cache.match('./offline.html'))
    )
  );
});
