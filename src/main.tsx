
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

// Create a root using createRoot API - remove StrictMode for production
const root = ReactDOM.createRoot(container);

// Render the app with explicit React import - not using StrictMode in production
// to avoid double rendering which impacts performance 
root.render(<App />);

// Log web vitals
setTimeout(reportWebVitals, 3000);
