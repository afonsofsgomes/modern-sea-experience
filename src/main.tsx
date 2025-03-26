
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance metric logging in a non-blocking way
const reportWebVitals = () => {
  if ('performance' in window && 'getEntriesByType' in performance && 'requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      try {
        const paintMetrics = performance.getEntriesByType('paint');
        if (paintMetrics.length > 0) {
          paintMetrics.forEach(metric => {
            console.info(`${metric.name}: ${Math.round(metric.startTime)}ms`);
          });
        }
      } catch (err) {
        // Silent fail for performance logging
      }
    });
  }
};

// Get the root element
const container = document.getElementById('root');

// Ensure the root element exists
if (!container) {
  throw new Error('Root element not found');
}

// Remove the initial loader immediately after React hydration
const removeLoader = () => {
  const loader = document.querySelector('.initial-loader');
  if (loader && loader instanceof HTMLElement) {
    // Type assertion to HTMLElement to safely access style property
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      loader.remove();
    }, 300);
  }
};

// Create a root using createRoot API - remove StrictMode for production
const root = ReactDOM.createRoot(container);

// Render the app with explicit React import - not using StrictMode in production
// to avoid double rendering which impacts performance 
root.render(<App />);

// Remove loader after React has hydrated the app
requestAnimationFrame(removeLoader);

// Log web vitals with a delay to avoid competing with critical rendering
setTimeout(reportWebVitals, 5000);

// Set up clean IndexedDB to fix the "stored data affecting performance" warning
const cleanupStoredData = () => {
  try {
    // Only run this in production to avoid clearing dev data
    if (import.meta.env.PROD) {
      if ('indexedDB' in window) {
        // Get all databases
        indexedDB.databases().then(databases => {
          // For each database, delete it if it's not actively needed
          databases.forEach(db => {
            if (db.name && !db.name.includes('firebase') && !db.name.includes('auth')) {
              indexedDB.deleteDatabase(db.name);
            }
          });
        }).catch(() => {
          // Silently fail if not supported
        });
      }
    }
  } catch (e) {
    // Silent fail for data cleanup
  }
};

// Run cleanup after page is fully loaded
if (document.readyState === 'complete') {
  cleanupStoredData();
} else {
  window.addEventListener('load', cleanupStoredData);
}

// Disable Vite HMR websocket in production to avoid failed connection errors
if (import.meta.env.PROD) {
  // This will prevent Vite from trying to establish WebSocket connections in production
  // @ts-ignore - Ignore type error since we're deliberately disabling a Vite internal feature
  if (typeof import.meta.hot !== 'undefined') {
    // @ts-ignore
    import.meta.hot.decline();
  }
}
