
// Service Worker for SeaYou Madeira PWA
const CACHE_NAME = 'seayou-pwa-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html',
  '/src/main.tsx',
  '/src/index.css',
  'https://extranet.seayou.pt/logos/logowhite.png',
  'https://extranet.seayou.pt/logos/favicon.ico',
  'https://extranet.seayou.pt/logos/apple-touch-icon.png',
  'https://extranet.seayou.pt/logos/icons/icon-48x48.png',
  'https://extranet.seayou.pt/logos/icons/icon-72x72.png',
  'https://extranet.seayou.pt/logos/icons/icon-96x96.png',
  'https://extranet.seayou.pt/logos/icons/icon-128x128.png',
  'https://extranet.seayou.pt/logos/icons/icon-144x144.png',
  'https://extranet.seayou.pt/logos/icons/icon-152x152.png',
  'https://extranet.seayou.pt/logos/icons/icon-192x192.png',
  'https://extranet.seayou.pt/logos/icons/icon-256x256.png',
  'https://extranet.seayou.pt/logos/icons/icon-384x384.png',
  'https://extranet.seayou.pt/logos/icons/icon-512x512.png',
  'https://extranet.seayou.pt/photos/bc.jpg',
  'https://extranet.seayou.pt/photos/9374361538.png'
];

// Install service worker and cache assets
self.addEventListener('install', event => {
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
  
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
  // Take control of all clients immediately
  event.waitUntil(clients.claim());
  
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
  // Handle navigation requests (HTML documents) with a network-first strategy
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          return caches.match('/offline.html');
        })
    );
    return;
  }
  
  // Skip cross-origin requests that aren't in our allowed domains
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
            
            // If the request is for an image, return a default image
            if (event.request.destination === 'image') {
              return caches.match('https://extranet.seayou.pt/logos/logowhite.png');
            }
            
            // Return the offline page for HTML requests
            if (event.request.destination === 'document') {
              return caches.match('/offline.html');
            }
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

// Listen for messages from the client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
