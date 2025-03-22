
import { useEffect } from 'react';

export const TallyScript = () => {
  useEffect(() => {
    // Safety check to prevent duplicate script injection
    if (document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      return;
    }

    // Create and inject the Tally script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    
    // Function to load embeds once Tally is available
    const loadEmbeds = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        console.log('Tally object found, loading embeds');
        (window as any).Tally.loadEmbeds();
      } else {
        console.log('Tally object not found, setting iframes manually');
        // If Tally object is not available, manually set src on iframes
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe: HTMLIFrameElement) => {
          if (iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc;
            console.log('Manual iframe src set:', iframe.dataset.tallySrc);
          }
        });
      }
    };
    
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
    
    // Add the script to the document
    document.body.appendChild(script);
    console.log('Tally script added to document');
    
    // Also inject a style tag to override Tally styles for better visibility
    const styleTag = document.createElement('style');
    styleTag.textContent = `
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
    
    // Run loadEmbeds immediately in case the script is already loaded
    // And also as a fallback in case the onload event doesn't fire
    setTimeout(loadEmbeds, 500);
    
    // Additional fallback - try again after a longer delay
    setTimeout(loadEmbeds, 2000);
    
    // Cleanup on component unmount
    return () => {
      // We don't remove the script as it might be needed by other components
      // But we can remove our custom style
      if (document.head.contains(styleTag)) {
        document.head.removeChild(styleTag);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TallyScript;
