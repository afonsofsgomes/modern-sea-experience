
// Service Worker for SeaYou Madeira PWA
const CACHE_NAME = 'seayou-pwa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/src/main.tsx',
  '/src/index.css',
  'https://extranet.seayou.pt/logos/logowhite.png',
  'https://extranet.seayou.pt/logos/favicon.ico',
  'https://extranet.seayou.pt/logos/apple-touch-icon.png',
  'https://extranet.seayou.pt/logos/android-chrome-192x192.png',
  'https://extranet.seayou.pt/logos/android-chrome-512x512.png',
  'https://extranet.seayou.pt/photos/bc.jpg',
  'https://extranet.seayou.pt/photos/9374361538.png'
];

// Install service worker and cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('Failed to cache resources:', err);
      })
  );
});

// Activate and clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// Fetch resources from cache first, then network
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin) && 
      !event.request.url.startsWith('https://extranet.seayou.pt')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if found
        if (response) {
          return response;
        }
        
        // Clone the request to use it in multiple places
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest)
          .then(response => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response to use it in multiple places
            const responseToCache = response.clone();
            
            // Add response to cache for future use
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          })
          .catch(err => {
            console.error('Fetch failed:', err);
            // Optional: return a custom offline page
            // return caches.match('/offline.html');
          });
      })
  );
});

// Handle push notifications
self.addEventListener('push', event => {
  const title = 'SeaYou Madeira';
  const options = {
    body: event.data.text() || 'New notification from SeaYou Madeira',
    icon: 'https://extranet.seayou.pt/logos/android-chrome-192x192.png',
    badge: 'https://extranet.seayou.pt/logos/favicon.ico'
  };
  
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('https://seayou.pt')
  );
});
