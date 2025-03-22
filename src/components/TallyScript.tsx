
import { useEffect, useRef } from 'react';

export const TallyScript = () => {
  const scriptLoaded = useRef(false);
  const loadedEmbeds = useRef(false);

  useEffect(() => {
    // Avoid loading script multiple times
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    // Function to load embeds once Tally is available
    const loadEmbeds = () => {
      if (loadedEmbeds.current) return;
      
      if (typeof (window as any).Tally !== 'undefined') {
        console.log('Tally object found, loading embeds');
        (window as any).Tally.loadEmbeds();
        loadedEmbeds.current = true;
      } else {
        console.log('Tally object not found, setting iframes manually');
        // If Tally object is not available, manually set src on iframes
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe: HTMLIFrameElement) => {
          if (iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc;
            console.log('Manual iframe src set:', iframe.dataset.tallySrc);
          }
        });
        loadedEmbeds.current = true;
      }
    };
    
    // Create and inject the Tally script with defer attribute for performance
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.defer = true;
    
    // Set up callbacks
    script.onload = () => {
      console.log('Tally script loaded successfully');
      // Give a small delay to ensure Tally object is initialized
      setTimeout(loadEmbeds, 100);
    };
    
    script.onerror = () => {
      console.error('Failed to load Tally script');
      loadEmbeds(); // Still try to load iframes directly if script fails
    };
    
    // Add the script to the document body
    document.body.appendChild(script);
    console.log('Tally script added to document');
    
    // Create a timeout to ensure embeds are loaded even if onload doesn't fire
    const timeoutId = setTimeout(() => {
      console.log('Loading timeout reached');
      loadEmbeds();
    }, 3000);
    
    // Cleanup on component unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
};

export default TallyScript;
