
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SitemapGeneratorProps {
  domain: string;
}

/**
 * SitemapGenerator is a client-side component that helps with sitemap generation.
 * Note: In production, sitemaps should ideally be generated server-side.
 * This component can be used in development to track pages and help generate a static sitemap.
 */
const SitemapGenerator: React.FC<SitemapGeneratorProps> = ({ domain }) => {
  const location = useLocation();

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV === 'development') {
      console.log(`[SitemapGenerator] Page visited: ${location.pathname}`);
      
      // You could implement logic here to track visited pages
      // and generate a sitemap for reference
      
      // Example of tracking pageviews for sitemap generation
      const visitedPages = JSON.parse(localStorage.getItem('sitemap-pages') || '[]');
      if (!visitedPages.includes(location.pathname)) {
        visitedPages.push(location.pathname);
        localStorage.setItem('sitemap-pages', JSON.stringify(visitedPages));
        console.log(`[SitemapGenerator] Updated tracked pages: ${visitedPages.join(', ')}`);
      }
    }
  }, [location.pathname, domain]);

  // This component doesn't render anything visible
  return null;
};

export default SitemapGenerator;
