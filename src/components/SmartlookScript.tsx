
import { useEffect, useRef } from 'react';

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
    
    // Initialize Smartlook
    window.smartlook || (function(d) {
      const o = window.smartlook = function() { 
        o.api.push(arguments);
      };
      o.api = [];
      const h = d.getElementsByTagName('head')[0];
      const c = d.createElement('script');
      c.async = true;
      c.type = 'text/javascript';
      c.charset = 'utf-8';
      c.src = 'https://web-sdk.smartlook.com/recorder.js';
      h.appendChild(c);
    })(document);
    
    // Initialize with project key
    window.smartlook?.('init', 'bd86f1dec9a6395d911d80e9ca09fe64590b04c1', { region: 'eu' });
    
    console.log('Smartlook analytics initialized');
    
    // No cleanup needed as we want Smartlook to persist throughout the session
  }, []);
  
  return null; // This component doesn't render anything
};

export default SmartlookScript;
