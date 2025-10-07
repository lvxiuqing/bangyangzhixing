// 缓存版本号 - 更新版本号以清除旧缓存
const CACHE_VERSION = 'xiaobangyang-v1.2';
const CACHE_NAME = 'xiaobangyang-static-' + CACHE_VERSION;

// 需要缓存的核心静态资源
// 修复GitHub Pages路径问题
const isGitHubPages = self.location.hostname === 'lvxiuqing.github.io';
const baseUrl = isGitHubPages ? '/bangyang' : '';

// 在GitHub Pages上使用绝对路径，在本地使用相对路径
const urlsToCache = isGitHubPages ? [
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
] : [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  // 缓存所有PWA图标
  '/images/android-launchericon-48-48.png',
  '/images/android-launchericon-72-72.png',
  '/images/android-launchericon-96-96.png',
  '/images/android-launchericon-144-144.png',
  '/images/android-launchericon-192-192.png',
  '/images/android-launchericon-512-512.png',
  '/images/180.png',
  '/images/192.png',
  '/images/512.png'
];

// 安装事件 - 缓存核心资源
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing service worker...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('[Service Worker] Failed to cache app shell:', error);
      })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating service worker...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // 删除不是当前缓存版本的所有缓存
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
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
              return caches.match('/index.html');
            }
          });
      })
  );
});

// 消息事件 - 可用于从页面向Service Worker发送消息
self.addEventListener('message', event => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});