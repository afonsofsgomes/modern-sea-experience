
import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface SitemapGeneratorProps {
  domain: string;
}

const SitemapGenerator: React.FC<SitemapGeneratorProps> = ({ domain }) => {
  const [sitemapGenerated, setSitemapGenerated] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    // This is just to show in the console that the component is working
    // In a production environment, you would generate the sitemap server-side
    if (!sitemapGenerated && process.env.NODE_ENV === 'development') {
      console.log(`Sitemap would be generated for ${domain} in production environment`);
      console.log(`Current path: ${location.pathname}`);
      setSitemapGenerated(true);
    }
  }, [domain, location.pathname, sitemapGenerated]);

  // This is a client-side component that doesn't render anything visible
  return null;
};

export default SitemapGenerator;
