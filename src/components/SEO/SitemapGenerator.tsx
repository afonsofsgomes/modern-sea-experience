
import React, { useEffect, useRef } from 'react';
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
  const previousPath = useRef<string>('');

  useEffect(() => {
    // Only run in production to avoid filling localStorage in development
    if (process.env.NODE_ENV !== 'production') return;
    
    // Don't track certain paths
    const excludePaths = [
      '/404',
      '/not-found',
      '/api/'
    ];
    
    const currentPath = location.pathname;
    
    // Skip if path hasn't changed or is excluded
    if (previousPath.current === currentPath || excludePaths.some(path => currentPath.startsWith(path))) {
      return;
    }
    
    // Update ref to current path
    previousPath.current = currentPath;

    // Use requestIdleCallback to defer non-critical work
    const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
    
    idleCallback(() => {
      try {
        // Get the current list of pages
        const visitedPages = JSON.parse(localStorage.getItem('sitemap-pages') || '[]');
        
        // Add the current path if it's not already in the list
        if (!visitedPages.includes(currentPath)) {
          // Limit the number of pages to prevent localStorage overflow
          if (visitedPages.length >= 100) {
            visitedPages.pop(); // Remove oldest entry
          }
          
          visitedPages.push(currentPath);
          localStorage.setItem('sitemap-pages', JSON.stringify(visitedPages));
        }
      } catch (error) {
        // Silent fail in production
        if (process.env.NODE_ENV !== 'production') {
          console.error('[SitemapGenerator] Error tracking page visit:', error);
        }
      }
    });
  }, [location.pathname, domain]);

  // This component doesn't render anything visible
  return null;
};

export default SitemapGenerator;
