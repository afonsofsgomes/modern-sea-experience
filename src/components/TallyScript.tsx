
import { useEffect, useRef } from 'react';

export const TallyScript = () => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Only load the script once
    if (scriptLoaded.current || document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      return;
    }

    scriptLoaded.current = true;

    // Create and inject the Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.defer = true;
    
    // Function to load embeds once Tally is available
    const loadEmbeds = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        console.log('Tally object found, loading embeds');
        (window as any).Tally.loadEmbeds();
      } else {
        // If Tally object is not available, manually set src on iframes
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe: HTMLIFrameElement) => {
          if (iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc;
          }
        });
      }
    };
    
    // Set up callbacks
    script.onload = () => {
      // Immediately trigger load instead of waiting
      loadEmbeds();
    };
    
    script.onerror = () => {
      loadEmbeds(); // Still try to load iframes directly if script fails
    };
    
    // Add the script to the document
    document.body.appendChild(script);
    
    // Inject a style tag to ensure Tally forms are visible while loading
    const styleTag = document.createElement('style');
    styleTag.textContent = `
      /* Set initial dimensions for iframe placeholders */
      iframe[data-tally-src]:not([src]) {
        min-height: 500px;
        background: rgba(255, 255, 255, 0.1);
        width: 100%;
        display: block;
        border: 1px solid rgba(0, 0, 0, 0.05);
      }
      
      /* Improve placeholder visibility in iframes */
      iframe[data-tally-src] {
        background: rgba(255, 255, 255, 0.05) !important;
      }
      
      /* This targets the iframe content when possible */
      @media (prefers-color-scheme: dark) {
        input::placeholder, textarea::placeholder {
          color: rgba(255, 255, 255, 0.6) !important;
          opacity: 1 !important;
        }
      }
    `;
    document.head.appendChild(styleTag);
    
    // Run loadEmbeds immediately as a fallback
    setTimeout(loadEmbeds, 100);
    
    // Additional fallback - try once more after a shorter delay
    const finalTimeout = setTimeout(loadEmbeds, 500);
    
    // Cleanup on component unmount
    return () => {
      // We don't remove the script as it might be needed by other components
      // But we can remove our custom style and clear timeouts
      if (document.head.contains(styleTag)) {
        document.head.removeChild(styleTag);
      }
      clearTimeout(finalTimeout);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TallyScript;
