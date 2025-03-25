
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

// Render the app with StrictMode for better development experience
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
