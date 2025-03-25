
import { useEffect } from 'react';

interface UseSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  jsonLd?: Record<string, any>;
}

export const useSEO = ({ title, description, keywords, jsonLd }: UseSEOProps) => {
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
  }, [title, description, keywords, jsonLd]);
};
