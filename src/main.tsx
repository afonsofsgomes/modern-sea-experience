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

// Handle service worker updates
const handleServiceWorkerUpdates = () => {
  if ('serviceWorker' in navigator) {
    // Send a message to the service worker to skip waiting and activate new version
    const refreshPage = () => {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
      }
    };

    // When a new service worker is found, refresh the page
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });

    // Refresh the page to activate new service worker if one is waiting
    refreshPage();
  }
};

// Register service worker for PWA functionality
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/serviceWorker.js')
        .then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
          
          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  console.log('New content is available; please refresh.');
                }
              });
            }
          });
        })
        .catch(error => {
          console.error('ServiceWorker registration failed: ', error);
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
handleServiceWorkerUpdates();

// Get the root element
const container = document.getElementById('root');

// Ensure the root element exists
if (!container) {
  throw new Error('Root element not found');
}

// Create a root using createRoot API - remove StrictMode for production
const root = ReactDOM.createRoot(container);

// Render the app with explicit React import - not using StrictMode in production
// to avoid double rendering which impacts performance 
root.render(<App />);

// Remove loader immediately and after a short delay to ensure it's gone
removeLoader();

// Log web vitals
setTimeout(reportWebVitals, 3000);

// Disable Vite HMR completely
if (import.meta.hot) {
  import.meta.hot.decline();
  // Prevent any HMR-related operations
  import.meta.hot.dispose(() => {});
  // Invalidate the module to prevent updates
  import.meta.hot.invalidate();
}
