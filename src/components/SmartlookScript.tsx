
import React, { useEffect, useRef } from 'react';

// Properly define the Smartlook global types
declare global {
  interface Window {
    smartlook?: {
      (action: string, ...args: any[]): void;
      api: any[];
    };
  }
}

export const SmartlookScript = () => {
  const scriptLoaded = useRef(false);
  const initialized = useRef(false);
  
  useEffect(() => {
    // Only load the script once
    if (scriptLoaded.current) {
      return;
    }
    
    // Use requestIdleCallback to defer non-critical initialization
    const initSmartlook = () => {
      // Don't load Smartlook in development to avoid console warnings
      if (process.env.NODE_ENV === 'development') {
        return;
      }
      
      // Set a flag in localStorage to prevent multiple initializations
      const smartlookInitialized = localStorage.getItem('smartlook_initialized');
      if (smartlookInitialized === 'true') {
        return;
      }
      
      // Initialize Smartlook only if not already initialized
      if (!window.smartlook || !initialized.current) {
        // Create the smartlook function with proper typing if it doesn't exist
        if (!window.smartlook) {
          // Create the smartlook function with proper typing
          const smartlook = function(action: string, ...args: any[]) {
            smartlook.api.push(arguments);
          };
          
          // Add the api property to the function
          smartlook.api = [];
          
          // Assign it to window
          window.smartlook = smartlook;
          
          // Create and add the script element
          const head = document.getElementsByTagName('head')[0];
          const script = document.createElement('script');
          script.async = true;
          script.type = 'text/javascript';
          script.charset = 'utf-8';
          script.src = 'https://web-sdk.smartlook.com/recorder.js';
          head.appendChild(script);
        }
        
        // Initialize with project key after a delay
        setTimeout(() => {
          try {
            window.smartlook && window.smartlook('init', 'bd86f1dec9a6395d911d80e9ca09fe64590b04c1', { region: 'eu' });
            initialized.current = true;
            localStorage.setItem('smartlook_initialized', 'true');
          } catch (error) {
            console.error('Error initializing Smartlook:', error);
          }
        }, 5000); // Significant delay to ensure core content loads first
      }
    };
    
    // Use requestIdleCallback to defer non-critical initialization
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(initSmartlook, { timeout: 5000 });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(initSmartlook, 5000);
    }
    
    scriptLoaded.current = true;
  }, []);
  
  return null; // This component doesn't render anything
};

export default SmartlookScript;
