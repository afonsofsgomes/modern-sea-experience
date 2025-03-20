
import React from 'react';

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Get all tracked pages from localStorage
 */
export const getTrackedPages = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem('sitemap-pages') || '[]');
  } catch (error) {
    console.error('[SitemapUtils] Error getting tracked pages:', error);
    return [];
  }
};

/**
 * Generate sitemap URLs array from tracked pages
 */
export const generateSitemapUrls = (domain: string, additionalUrls: SitemapUrl[] = []): SitemapUrl[] => {
  // Get pages from localStorage
  const trackedPages = getTrackedPages();
  
  // Current date in YYYY-MM-DD format for lastmod
  const today = new Date().toISOString().split('T')[0];
  
  // Convert tracked pages to sitemap URLs
  const trackedUrls: SitemapUrl[] = trackedPages.map(path => ({
    loc: `https://${domain}${path}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: path === '/' ? 1.0 : 0.8
  }));
  
  // Combine with additional URLs
  return [...trackedUrls, ...additionalUrls];
};

/**
 * Generate sitemap XML content from URLs
 */
export const generateSitemapXml = (urls: SitemapUrl[]): string => {
  // Create URL elements with strict control over whitespace and line breaks
  const urlElements = urls.map(url => {
    let element = '  <url>\n';
    element += `    <loc>${url.loc}</loc>\n`;
    
    if (url.lastmod) {
      element += `    <lastmod>${url.lastmod}</lastmod>\n`;
    }
    
    if (url.changefreq) {
      element += `    <changefreq>${url.changefreq}</changefreq>\n`;
    }
    
    if (url.priority !== undefined) {
      element += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
    }
    
    element += '  </url>';
    return element;
  }).join('\n');

  // Ensure the XML declaration is the very first thing in the file with no preceding whitespace
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
};

/**
 * Component to display the generated sitemap (for development/debugging)
 */
export const SitemapViewer: React.FC<{ domain: string }> = ({ domain }) => {
  const trackedPages = getTrackedPages();
  
  if (trackedPages.length === 0) {
    return <div>No pages tracked yet. Visit more pages to populate the sitemap.</div>;
  }
  
  return (
    <div className="sitemap-viewer">
      <h2>Dynamic Sitemap</h2>
      <p>The following pages will be included in the sitemap:</p>
      <ul>
        {trackedPages.map(page => (
          <li key={page}>
            <code>https://{domain}{page}</code>
          </li>
        ))}
      </ul>
    </div>
  );
};
