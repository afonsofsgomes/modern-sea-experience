
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

interface FacebookPixelProps {
  pixelId: string;
}

const FacebookPixel: React.FC<FacebookPixelProps> = ({ pixelId }) => {
  useEffect(() => {
    // Initialize Facebook Pixel when component mounts
    if (window.fbq) return;

    // Create fbq function
    window.fbq = function() {
      // @ts-ignore
      window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
    };

    // Initialize queue if not already initialized
    if (!window._fbq) window._fbq = window.fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];

    // Track PageView event on first load
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');

    // Track PageView on route change
    const handleRouteChange = () => {
      window.fbq('track', 'PageView');
    };

    // Add listener for route changes
    window.addEventListener('popstate', handleRouteChange);

    // Cleanup function
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [pixelId]);

  return (
    <Helmet>
      {/* Facebook Pixel Code */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </script>
      <noscript>
        {`
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1" alt="Facebook Pixel" />
        `}
      </noscript>
    </Helmet>
  );
};

export default FacebookPixel;

// Add TypeScript definitions for the fbq function
declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}
