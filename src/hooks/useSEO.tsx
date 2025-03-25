
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
