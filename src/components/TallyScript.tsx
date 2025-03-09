
import { useEffect } from 'react';

export const TallyScript = () => {
  useEffect(() => {
    const loadTally = () => {
      const d = document;
      const w = "https://tally.so/widgets/embed.js";
      
      const v = function() {
        if (typeof (window as any).Tally !== 'undefined') {
          (window as any).Tally.loadEmbeds();
        } else {
          d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e: HTMLElement) {
            if (e instanceof HTMLIFrameElement && e.dataset.tallySrc) {
              e.src = e.dataset.tallySrc;
            }
          });
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
    
    loadTally();
    
    // Add event listener for route changes to reload embeds when navigating
    const handleRouteChange = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        setTimeout(() => {
          (window as any).Tally.loadEmbeds();
        }, 100);
      }
    };
    
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  return null;
};
