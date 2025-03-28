
// Service Worker for SeaYou Madeira PWA
const CACHE_NAME = 'seayou-pwa-v6'; // Increased version to force cache refresh
const APP_SHELL = [
  '/',
  '/index.html',
  '/manifest.json',
  '/offline.html'
];

// Install service worker and cache app shell assets only
self.addEventListener('install', event => {
  console.log('Service Worker installing');
  self.skipWaiting(); // Force the waiting service worker to become active
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opening cache...');
        return cache.addAll(APP_SHELL)
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
  
  event.waitUntil(
    Promise.all([
      self.clients.claim(), // Take control of clients immediately
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

// Helper function to determine if a request should be handled 
function shouldHandleRequest(request) {
  // Skip non-GET requests
  if (request.method !== 'GET') return false;
  
  // Skip non-HTTP/HTTPS requests
  if (!request.url.startsWith('http')) return false;

  // Skip font requests and external scripts that are causing issues
  if (request.url.includes('fonts.googleapis.com') || 
      request.url.includes('fonts.gstatic.com') ||
      request.url.includes('optangineer.js') ||
      request.url.includes('cdn.opteng.co')) {
    return false;
  }

  return true;
}

// Fetch resources: Network first for HTML and same-origin requests
self.addEventListener('fetch', event => {
  // Skip requests we don't want to handle
  if (!shouldHandleRequest(event.request)) {
    return;
  }
  
  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;
  
  // Handle HTML navigation requests specially - always go to network first
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            // Make a copy to store in cache (only for same origin)
            if (isSameOrigin) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseToCache);
              });
            }
            return response;
          }
          throw new Error('Navigation fetch failed');
        })
        .catch(() => {
          console.log('Navigate request failed, falling back to offline page');
          return caches.match('/offline.html');
        })
    );
    return;
  }
  
  // For same-origin requests, use network-first with fallback to cache
  if (isSameOrigin) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Only cache successful responses
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              })
              .catch(err => {
                console.error('Error caching response:', err);
              });
          }
          return response;
        })
        .catch(() => {
          console.log('Same-origin fetch failed, using cache for:', event.request.url);
          return caches.match(event.request);
        })
    );
  } 
  // For cross-origin requests, use cache-first to avoid CORS issues
  else {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          // If not cached, attempt fetch but don't cache opaque responses
          return fetch(event.request)
            .then(response => {
              // Return the response without caching opaque responses
              return response;
            })
            .catch(error => {
              console.error('Cross-origin fetch failed:', error);
              // Return empty response for failed requests
              return new Response('Resource unavailable', { 
                status: 503, 
                headers: { 'Content-Type': 'text/plain' } 
              });
            });
        })
    );
  }
});

// Handle messages from the client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('Skip waiting message received');
    self.skipWaiting();
  }
});

// Simple push notification handler
self.addEventListener('push', event => {
  const title = 'SeaYou Madeira';
  const options = {
    body: event.data ? event.data.text() : 'New notification from SeaYou Madeira',
    icon: '/favicon.ico'
  };
  
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});
