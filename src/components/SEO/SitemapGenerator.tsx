
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SitemapGeneratorProps {
  domain: string;
}

/**
 * SitemapGenerator is a client-side component that helps with sitemap generation.
 * It tracks page visits and stores them for dynamic sitemap generation.
 * 
 * In a production environment, this data can be used to:
 * 1. Generate a sitemap.xml file during build time
 * 2. Create an API endpoint that generates the sitemap dynamically
 */
const SitemapGenerator: React.FC<SitemapGeneratorProps> = ({ domain }) => {
  const location = useLocation();

  useEffect(() => {
    // Don't track certain paths
    const excludePaths = [
      '/404',
      '/not-found',
      '/api/'
    ];
    
    if (excludePaths.some(path => location.pathname.startsWith(path))) {
      return;
    }

    try {
      // Get the current list of pages
      const visitedPages = JSON.parse(localStorage.getItem('sitemap-pages') || '[]');
      const currentPath = location.pathname;
      
      // Add the current path if it's not already in the list
      if (!visitedPages.includes(currentPath)) {
        visitedPages.push(currentPath);
        localStorage.setItem('sitemap-pages', JSON.stringify(visitedPages));
        
        if (process.env.NODE_ENV === 'development') {
          console.log(`[SitemapGenerator] Added page to sitemap: ${currentPath}`);
          console.log(`[SitemapGenerator] Current sitemap pages: ${visitedPages.join(', ')}`);
        }
      }
    } catch (error) {
      console.error('[SitemapGenerator] Error tracking page visit:', error);
    }
  }, [location.pathname, domain]);

  // This component doesn't render anything visible
  return null;
};

export default SitemapGenerator;
