
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Get the root element
const container = document.getElementById('root');

// Ensure the root element exists
if (!container) {
  throw new Error('Root element not found');
}

// Create a root using createRoot API
const root = ReactDOM.createRoot(container);

// Performance metric logging - move to after render to not block initial paint
const reportWebVitals = () => {
  requestIdleCallback(() => {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const paintMetrics = performance.getEntriesByType('paint');
      if (paintMetrics.length > 0) {
        paintMetrics.forEach(metric => {
          console.info(`${metric.name}: ${Math.round(metric.startTime)}ms`);
        });
      }
    }
  });
};

// Remove the initial loader with fade-out animation
const removeLoader = () => {
  const loader = document.querySelector('.initial-loader');
  if (loader && loader instanceof HTMLElement) {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      loader.remove();
    }, 300);
  }
};

// Render the app
root.render(<App />);

// Perform non-critical operations after initial render
window.addEventListener('load', () => {
  // Remove loader after page is fully loaded
  removeLoader();
  // Report metrics only after page is loaded
  reportWebVitals();
  
  // Disable Vite HMR websocket in production to avoid failed connection errors
  if (import.meta.env.PROD) {
    // This will prevent Vite from trying to establish WebSocket connections in production
    // @ts-ignore - Ignore type error since we're deliberately disabling a Vite internal feature
    if (typeof import.meta.hot !== 'undefined') {
      // @ts-ignore
      import.meta.hot.decline();
    }
  }
});
