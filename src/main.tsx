
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance optimized loading
const startApp = () => {
  // Get the root element
  const container = document.getElementById('root');

  // Ensure the root element exists
  if (!container) {
    throw new Error('Root element not found');
  }

  // Remove the initial loader
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

  // Create root and render app
  const root = ReactDOM.createRoot(container);
  root.render(<App />);

  // Remove loader after hydration, using requestAnimationFrame for better timing
  requestAnimationFrame(removeLoader);
};

// Optimize startup sequence
if (document.readyState === 'loading') {
  // If the document is still loading, wait for it to be ready
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  // If DOMContentLoaded has already fired, start immediately
  startApp();
}

// Clean up IndexedDB to improve performance
if ('indexedDB' in window && window.location.hostname !== 'localhost') {
  try {
    const request = window.indexedDB.open('cleanup-db', 1);
    request.onsuccess = () => {
      const db = request.result;
      db.close();
      // Get all databases and delete unnecessary ones
      if ('databases' in indexedDB) {
        indexedDB.databases().then(dbs => {
          dbs.forEach(db => {
            if (db.name && !db.name.includes('firebase') && !db.name.includes('auth')) {
              indexedDB.deleteDatabase(db.name);
            }
          });
        }).catch(() => {/* Ignore errors */});
      }
    };
  } catch (e) {
    // Silent fail
  }
}
