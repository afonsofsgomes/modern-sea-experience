
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance metric logging
const reportWebVitals = () => {
  if ('performance' in window && 'getEntriesByType' in performance) {
    const paintMetrics = performance.getEntriesByType('paint');
    if (paintMetrics.length > 0) {
      paintMetrics.forEach(metric => {
        console.info(`${metric.name}: ${Math.round(metric.startTime)}ms`);
      });
    }
  }
};

// Register service worker for PWA functionality
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/serviceWorker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
          
          // Monitor for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              console.log('New service worker is being installed');
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  const shouldUpdate = window.confirm(
                    'New version available! Click OK to update and refresh the page.'
                  );
                  
                  if (shouldUpdate) {
                    // Send message to SW to skip waiting
                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                    window.location.reload();
                  }
                }
              });
            }
          });
          
          // Check for updates periodically (every 30 minutes)
          setInterval(() => {
            console.log('Checking for service worker updates...');
            registration.update().catch(err => {
              console.error('Error updating service worker:', err);
            });
          }, 30 * 60 * 1000);
        })
        .catch(error => {
          console.error('ServiceWorker registration failed: ', error);
        });
        
      // When a new service worker is activated, reload the page once
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          console.log('New service worker controller, reloading page');
          window.location.reload();
        }
      });
    });
  }
};

// Remove the initial loader
const removeLoader = () => {
  const removeLoaderElement = () => {
    const loader = document.querySelector('.initial-loader');
    if (loader && loader instanceof HTMLElement) {
      // Type assertion to HTMLElement to safely access style property
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        if (loader.parentNode) {
          loader.parentNode.removeChild(loader);
        }
      }, 300);
    }
  };

  // Try immediately and also after a short delay to ensure it's removed
  removeLoaderElement();
  setTimeout(removeLoaderElement, 1000);
};

// Initialize PWA
registerServiceWorker();

// Get the root element
const container = document.getElementById('root');

// Ensure the root element exists
if (!container) {
  throw new Error('Root element not found');
}

// Create a root using createRoot API
const root = ReactDOM.createRoot(container);

// Render the app
root.render(<App />);

// Remove loader
removeLoader();

// Log web vitals
setTimeout(reportWebVitals, 3000);

// Disable Vite HMR completely
if (import.meta.hot) {
  // Use only the methods that are available in the TypeScript definitions
  import.meta.hot.dispose(() => {});
  // Mark the module as "accepting no updates"
  import.meta.hot.accept(() => {
    console.log('HMR update rejected');
  });
  // Use any other available method to prevent updates
  if ('invalidate' in import.meta.hot) {
    (import.meta.hot as any).invalidate();
  }
}
