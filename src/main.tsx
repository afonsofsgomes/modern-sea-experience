
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

// Get the root element
const container = document.getElementById('root');

// Ensure the root element exists
if (!container) {
  throw new Error('Root element not found');
}

// Remove the initial loader immediately after React hydration
const removeLoader = () => {
  const loader = document.querySelector('.initial-loader');
  if (loader) {
    // Safe type check before accessing style property
    if (loader instanceof HTMLElement) {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        loader.remove();
      }, 300);
    } else {
      // Fallback if not an HTMLElement
      loader.remove();
    }
  }
};

// Create a root using createRoot API - remove StrictMode for production
const root = ReactDOM.createRoot(container);

// Render the app with explicit React import - not using StrictMode in production
// to avoid double rendering which impacts performance 
root.render(<App />);

// Remove loader after React has hydrated the app
requestAnimationFrame(removeLoader);

// Log web vitals
setTimeout(reportWebVitals, 3000);

// Disable Vite HMR websocket in production to avoid failed connection errors
if (import.meta.env.PROD) {
  // This will prevent Vite from trying to establish WebSocket connections in production
  // @ts-ignore - Ignore type error since we're deliberately disabling a Vite internal feature
  if (typeof import.meta.hot !== 'undefined') {
    // @ts-ignore
    import.meta.hot.decline();
  }
}
