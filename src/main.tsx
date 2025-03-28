
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
          
          // Check for updates (once after 10 seconds)
          setTimeout(() => {
            registration.update().catch(err => {
              console.error('Error updating service worker:', err);
            });
          }, 10000);
        })
        .catch(error => {
          console.error('ServiceWorker registration failed: ', error);
        });
        
      // Only reload the page once when a new service worker takes control
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
  const loader = document.querySelector('.initial-loader');
  if (loader && loader instanceof HTMLElement) {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      if (loader.parentNode) {
        loader.parentNode.removeChild(loader);
      }
    }, 300);
  }
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
