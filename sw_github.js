// 缓存版本号
const CACHE_VERSION = 'xiaobangyang-v1.1-github';
const CACHE_NAME = 'xiaobangyang-static-' + CACHE_VERSION;

// 需要缓存的核心静态资源 - 适配GitHub Pages路径
const baseUrl = '/bangyang';
const urlsToCache = [
  baseUrl + '/',
  baseUrl + '/index.html',
  baseUrl + '/styles.css',
  baseUrl + '/script.js',
  baseUrl + '/manifest.json',
  // 缓存所有PWA图标
  baseUrl + '/images/android-launchericon-48-48.png',
  baseUrl + '/images/android-launchericon-72-72.png',
  baseUrl + '/images/android-launchericon-96-96.png',
  baseUrl + '/images/android-launchericon-144-144.png',
  baseUrl + '/images/android-launchericon-192-192.png',
  baseUrl + '/images/android-launchericon-512-512.png',
  baseUrl + '/images/180.png',
  baseUrl + '/images/192.png',
  baseUrl + '/images/512.png'
];

// 安装事件 - 缓存核心资源
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing service worker for GitHub Pages...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell for GitHub Pages');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('[Service Worker] Failed to cache app shell for GitHub Pages:', error);
      })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating service worker for GitHub Pages...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // 删除不是当前缓存版本的所有缓存
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache for GitHub Pages:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // 立即接管所有页面的控制权
  return self.clients.claim();
});

// 获取事件 - 实现缓存策略
self.addEventListener('fetch', event => {
  // 对于非GET请求，直接发送网络请求
  if (event.request.method !== 'GET') {
    return;
  }
  
  // 检查请求是否属于我们的应用路径
  const url = new URL(event.request.url);
  if (url.pathname.startsWith('/bangyang/')) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          // 如果在缓存中找到响应，则返回它
          if (cachedResponse) {
            console.log('[Service Worker] Returning cached response for:', event.request.url);
            return cachedResponse;
          }
          
          // 否则发起网络请求
          console.log('[Service Worker] Fetching from network:', event.request.url);
          return fetch(event.request)
            .then(response => {
              // 对于重要的核心资源，我们也可以缓存它们
              if (event.request.destination === 'document' || 
                  event.request.destination === 'script' || 
                  event.request.destination === 'style') {
                // 克隆响应以供缓存使用
                const responseToCache = response.clone();
                
                caches.open(CACHE_NAME)
                  .then(cache => {
                    cache.put(event.request, responseToCache);
                  });
              }
              
              return response;
            })
            .catch(error => {
              console.error('[Service Worker] Network request failed:', error);
              // 如果是页面请求且无法从网络获取，则返回离线索引页面
              if (event.request.destination === 'document') {
                return caches.match(baseUrl + '/index.html');
              }
            });
        })
    );
  }
});

// 消息事件 - 可用于从页面向Service Worker发送消息
self.addEventListener('message', event => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});