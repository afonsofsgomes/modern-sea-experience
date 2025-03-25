
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

// Production error handling
if (process.env.NODE_ENV === 'production') {
  // Disable console.log in production
  console.log = () => {};
  console.warn = () => {};
  console.error = (message) => {
    // You could send this to an error tracking service
    if (message && message.toString().includes('Fatal')) {
      // Critical errors could still be logged or sent to a service
    }
  };
}

// Create a root using createRoot API
const root = ReactDOM.createRoot(container);

// Render the app with explicit React import
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
