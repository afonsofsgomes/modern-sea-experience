
import { useEffect } from 'react';

export const TallyScript = () => {
  useEffect(() => {
    const loadTally = () => {
      const d = document;
      const w = "https://tally.so/widgets/embed.js";
      
      const v = function() {
        if (typeof (window as any).Tally !== 'undefined') {
          (window as any).Tally.loadEmbeds();
          
          // Add observer to hide Tally branding after the iframe loads
          setTimeout(hideTallyBranding, 1000);
        } else {
          d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e: HTMLElement) {
            if (e instanceof HTMLIFrameElement && e.dataset.tallySrc) {
              e.src = e.dataset.tallySrc;
            }
          });
          
          // Add observer to hide Tally branding after the iframe loads
          setTimeout(hideTallyBranding, 1000);
        }
      };
      
      if (typeof (window as any).Tally !== 'undefined') {
        v();
      } else if (d.querySelector('script[src="' + w + '"]') === null) {
        const s = d.createElement("script");
        s.src = w;
        s.onload = v;
        s.onerror = v;
        d.body.appendChild(s);
      }
    };
    
    const hideTallyBranding = () => {
      // Add CSS to hide Tally branding elements
      const style = document.createElement('style');
      style.textContent = `
        /* Hide Tally branding */
        iframe[data-tally-src] + div[class*="Symbol"],
        iframe[data-tally-src] + div,
        .tally-symbol-button,
        [class*="Symbol"],
        [class*="tally"] [class*="Symbol"],
        [class*="tally-"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
      `;
      document.head.appendChild(style);
      
      // Try to find and remove Tally branding elements
      const tallyElements = document.querySelectorAll('[class*="Symbol"], [class*="tally-"], .tally-symbol-button');
      tallyElements.forEach(el => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    };
    
    loadTally();
    
    // Add event listener for route changes to reload embeds when navigating
    const handleRouteChange = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        setTimeout(() => {
          (window as any).Tally.loadEmbeds();
          hideTallyBranding();
        }, 100);
      }
    };
    
    window.addEventListener('popstate', handleRouteChange);
    
    // Initial hide attempt
    setTimeout(hideTallyBranding, 1000);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  return null;
};
