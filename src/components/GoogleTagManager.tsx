
import React from 'react';
import { Helmet } from 'react-helmet';

interface GoogleTagManagerProps {
  id: string;
}

export const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({ id }) => {
  return (
    <>
      <Helmet>
        {/* Google Tag Manager Script */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${id}');`}
        </script>
      </Helmet>
      
      {/* Google Tag Manager NoScript (placed after the opening body tag) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${id}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
};

export default GoogleTagManager;
