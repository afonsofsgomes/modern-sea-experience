
// Service Worker for SeaYou Madeira PWA
const CACHE_NAME = 'seayou-pwa-v5'; // Increased version to force cache refresh
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html',
  '/src/main.tsx',
  '/src/index.css'
  // Removed external URLs from initial cache list to avoid CORS issues
];

// Install service worker and cache assets
self.addEventListener('install', event => {
  console.log('Service Worker installing');
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opening cache...');
        return cache.addAll(urlsToCache)
          .then(() => console.log('Initial caching complete'))
          .catch(err => {
            console.error('Failed to cache initial resources:', err);
            // Continue installation even if some resources fail to cache
            return Promise.resolve();
          });
      })
  );
});

// Activate and clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating');
  // Take control of all clients immediately
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
    ])
  );
});

// Fetch resources
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Handle navigation requests (HTML documents) with a network-first strategy
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          console.log('Navigate request failed, falling back to offline page');
          return caches.match('/offline.html');
        })
    );
    return;
  }

  // Don't handle requests that aren't HTTP/HTTPS
  if (!event.request.url.startsWith('http')) {
    return;
  }
  
  // Handle cross-origin requests differently
  const isSameOrigin = event.request.url.startsWith(self.location.origin);
  
  if (isSameOrigin) {
    // For same-origin requests, use a network-first strategy
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache successful responses
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              })
              .catch(err => console.error('Error caching response:', err));
          }
          return response;
        })
        .catch(() => {
          console.log('Same-origin fetch failed, checking cache for:', event.request.url);
          return caches.match(event.request);
        })
    );
  } else {
    // For cross-origin requests, use a cache-first strategy to avoid CORS issues
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            console.log('Using cached cross-origin response for:', event.request.url);
            return cachedResponse;
          }
          
          // If not in cache, try fetching but don't cache the result (to avoid CORS issues)
          return fetch(event.request, { mode: 'no-cors' })
            .then(response => {
              // Don't cache opaque responses as they can't be properly reused
              if (response.type === 'opaque') {
                console.log('Received opaque response for:', event.request.url);
                return response;
              }
              
              // For non-opaque responses, we can cache them
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  console.log('Caching cross-origin response for:', event.request.url);
                  cache.put(event.request, responseToCache);
                })
                .catch(err => console.error('Error caching cross-origin response:', err));
              
              return response;
            })
            .catch(error => {
              console.error('Cross-origin fetch failed:', error);
              
              // Return a fallback for images
              if (event.request.destination === 'image') {
                return new Response(
                  '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f0f0f0"/><text x="100" y="100" font-family="sans-serif" font-size="12" text-anchor="middle" fill="#333">Image not available</text></svg>',
                  { 
                    headers: { 'Content-Type': 'image/svg+xml' } 
                  }
                );
              }
              
              // Return empty response for other resources
              return new Response('Resource not available', { 
                status: 503,
                headers: { 'Content-Type': 'text/plain' }
              });
            });
        })
    );
  }
});

// Handle push notifications
self.addEventListener('push', event => {
  const title = 'SeaYou Madeira';
  const options = {
    body: event.data ? event.data.text() : 'New notification from SeaYou Madeira',
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
    console.log('Skip waiting message received');
    self.skipWaiting();
  }
});
