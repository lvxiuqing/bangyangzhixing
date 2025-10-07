// 缓存名称
const CACHE_NAME = 'xiaobangyang-v1.0';
// 需要缓存的文件
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/images/android-launchericon-192-192.png',
  '/images/android-launchericon-512-512.png'
];

// 安装事件 - 缓存文件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 获取事件 - 从缓存提供文件或网络请求
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果在缓存中找到响应，则返回它
        if (response) {
          return response;
        }
        // 否则发起网络请求
        return fetch(event.request);
      })
  );
});