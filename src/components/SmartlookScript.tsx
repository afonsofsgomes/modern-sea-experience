
import { useEffect, useRef } from 'react';

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
  
  useEffect(() => {
    // Only load the script once
    if (scriptLoaded.current) {
      return;
    }
    
    scriptLoaded.current = true;
    
    // Initialize Smartlook with the correct typing
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
    
    // Initialize with project key
    window.smartlook('init', 'bd86f1dec9a6395d911d80e9ca09fe64590b04c1', { region: 'eu' });
    
    console.log('Smartlook analytics initialized');
    
    // No cleanup needed as we want Smartlook to persist throughout the session
  }, []);
  
  return null; // This component doesn't render anything
};

export default SmartlookScript;
