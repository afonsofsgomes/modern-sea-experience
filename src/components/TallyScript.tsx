
import { useEffect, useRef } from 'react';

export const TallyScript = () => {
  const scriptLoaded = useRef(false);
  const loadTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // Only load the script once and after main content
    if (scriptLoaded.current || document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      return;
    }

    // Defer Tally loading until after critical content
    const loadTally = () => {
      scriptLoaded.current = true;

      // Create and inject the Tally script
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.defer = true;
      
      // Function to load embeds once Tally is available
      const loadEmbeds = () => {
        // Find all Tally iframes
        const tallyFrames = document.querySelectorAll('iframe[data-tally-src]:not([src])');
        
        if (typeof (window as any).Tally !== 'undefined') {
          (window as any).Tally.loadEmbeds();
        } else if (tallyFrames.length > 0) {
          // If Tally object is not available, manually set src on iframes
          tallyFrames.forEach((iframe: HTMLIFrameElement) => {
            if (iframe.dataset.tallySrc) {
              iframe.src = iframe.dataset.tallySrc;
            }
          });
        }
      };
      
      // Set up callbacks
      script.onload = loadEmbeds;
      script.onerror = loadEmbeds; // Still try to load iframes directly if script fails
      
      // Add the script to the document
      document.body.appendChild(script);
      
      // Fallback timeout to ensure iframes load
      loadTimeoutRef.current = window.setTimeout(loadEmbeds, 2000);
    };
    
    // Defer loading until main content is interactive
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadTally, { timeout: 3000 });
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      loadTimeoutRef.current = window.setTimeout(loadTally, 2000);
    }
    
    // Cleanup on component unmount
    return () => {
      if (loadTimeoutRef.current !== null) {
        window.clearTimeout(loadTimeoutRef.current);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TallyScript;
