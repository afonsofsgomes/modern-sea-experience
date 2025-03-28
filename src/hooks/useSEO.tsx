
import { useEffect } from 'react';

// Default OG image URL
const DEFAULT_OG_IMAGE = "https://extranet.seayou.pt/photos/9374361538.png";

interface UseSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  jsonLd?: Record<string, any>;
  ogImage?: string;
}

export const useSEO = ({ title, description, keywords, jsonLd, ogImage = DEFAULT_OG_IMAGE }: UseSEOProps) => {
  useEffect(() => {
    // Update document title if provided
    if (title) {
      document.title = title;
    }

    // Update meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = description;
        document.head.appendChild(newMetaDescription);
      }
    }
    
    // Update meta keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const newMetaKeywords = document.createElement('meta');
        newMetaKeywords.name = 'keywords';
        newMetaKeywords.content = keywords;
        document.head.appendChild(newMetaKeywords);
      }
    }

    // Update OG image if provided
    if (ogImage) {
      const ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', ogImage);
      } else {
        const newOgImage = document.createElement('meta');
        newOgImage.setAttribute('property', 'og:image');
        newOgImage.content = ogImage;
        document.head.appendChild(newOgImage);
      }
      
      // Also update Twitter image
      const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');
      if (twitterImageMeta) {
        twitterImageMeta.setAttribute('content', ogImage);
      } else {
        const newTwitterImage = document.createElement('meta');
        newTwitterImage.name = 'twitter:image';
        newTwitterImage.content = ogImage;
        document.head.appendChild(newTwitterImage);
      }
    }

    // Ensure PWA meta tags are properly set
    const ensurePWAMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Set PWA meta tags
    ensurePWAMeta('theme-color', '#253D7F');
    ensurePWAMeta('apple-mobile-web-app-capable', 'yes');
    ensurePWAMeta('mobile-web-app-capable', 'yes');
    ensurePWAMeta('apple-mobile-web-app-status-bar-style', 'black-translucent');
    ensurePWAMeta('apple-mobile-web-app-title', title || 'SeaYou Madeira');
    ensurePWAMeta('application-name', title || 'SeaYou Madeira');

    // Ensure favicons are properly set
    const ensureFavicon = (rel: string, href: string, type?: string, sizes?: string) => {
      let link = document.querySelector(`link[rel="${rel}"]${sizes ? `[sizes="${sizes}"]` : ''}`) as HTMLLinkElement | null;
      
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        if (type) link.setAttribute('type', type);
        if (sizes) link.setAttribute('sizes', sizes);
        document.head.appendChild(link);
      }
      
      if (link.href !== href) {
        link.href = href;
      }
    };
    
    // Set all necessary favicon and app icons
    ensureFavicon('icon', 'https://extranet.seayou.pt/logos/favicon.ico', 'image/x-icon');
    ensureFavicon('shortcut icon', 'https://extranet.seayou.pt/logos/favicon.ico', 'image/x-icon');
    ensureFavicon('apple-touch-icon', 'https://extranet.seayou.pt/logos/apple-touch-icon.png', undefined, '180x180');
    ensureFavicon('icon', 'https://extranet.seayou.pt/logos/android-chrome-192x192.png', 'image/png', '192x192');
    ensureFavicon('icon', 'https://extranet.seayou.pt/logos/android-chrome-512x512.png', 'image/png', '512x512');
    
    // Ensure manifest link
    const ensureManifest = () => {
      let link = document.querySelector('link[rel="manifest"]') as HTMLLinkElement | null;
      
      if (!link) {
        link = document.createElement('link');
        link.rel = 'manifest';
        document.head.appendChild(link);
      }
      
      if (link.href !== '/manifest.json') {
        link.href = '/manifest.json';
      }
    };
    
    ensureManifest();

    // Add JSON-LD structured data if provided
    if (jsonLd) {
      let script = document.querySelector('#dynamic-jsonld') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = 'dynamic-jsonld';
        // Use setAttribute method instead of directly setting the type property
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      // Clean up JSON-LD when component unmounts
      if (jsonLd) {
        const script = document.querySelector('#dynamic-jsonld');
        if (script) {
          script.remove();
        }
      }
    };
  }, [title, description, keywords, jsonLd, ogImage]);
};
