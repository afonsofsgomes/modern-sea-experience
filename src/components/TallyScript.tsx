
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
          setTimeout(improveFormVisibility, 1000);
        } else {
          d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function(e: HTMLElement) {
            if (e instanceof HTMLIFrameElement && e.dataset.tallySrc) {
              e.src = e.dataset.tallySrc;
            }
          });
          
          // Add observer to hide Tally branding after the iframe loads
          setTimeout(hideTallyBranding, 1000);
          setTimeout(improveFormVisibility, 1000);
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
    
    const improveFormVisibility = () => {
      // Add CSS to make form fields more visible
      const style = document.createElement('style');
      style.textContent = `
        /* Improve visibility of form elements */
        iframe[data-tally-src] {
          background-color: rgba(255, 255, 255, 0.05) !important;
          color-scheme: light !important;
        }
        
        /* Attempt to inject styles into the iframe */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `;
      document.head.appendChild(style);
      
      // Try to access iframe content and modify styles
      try {
        const iframes = document.querySelectorAll('iframe[data-tally-src]');
        iframes.forEach(iframe => {
          if (iframe instanceof HTMLIFrameElement) {
            // Set iframe attributes
            iframe.style.colorScheme = 'light';
            iframe.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            
            // Try to access the iframe content if from same origin
            try {
              const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
              if (iframeDocument) {
                const iframeStyle = iframeDocument.createElement('style');
                iframeStyle.textContent = `
                  input, textarea, select {
                    color: #FFFFFF !important;
                    background-color: rgba(255, 255, 255, 0.1) !important;
                  }
                  ::placeholder {
                    color: rgba(255, 255, 255, 0.7) !important;
                    opacity: 1 !important;
                  }
                `;
                iframeDocument.head.appendChild(iframeStyle);
              }
            } catch (e) {
              // Cross-origin restrictions likely prevented access
              console.log("Could not access iframe content due to cross-origin restrictions");
            }
          }
        });
      } catch (e) {
        console.log("Error modifying iframe styles:", e);
      }
    };
    
    loadTally();
    
    // Add event listener for route changes to reload embeds when navigating
    const handleRouteChange = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        setTimeout(() => {
          (window as any).Tally.loadEmbeds();
          hideTallyBranding();
          improveFormVisibility();
        }, 100);
      }
    };
    
    window.addEventListener('popstate', handleRouteChange);
    
    // Initial hide and improve attempts
    setTimeout(hideTallyBranding, 1000);
    setTimeout(improveFormVisibility, 1000);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
  
  return null;
};
