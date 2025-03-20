
import { useEffect } from 'react';

interface UseSEOProps {
  title?: string;
  description?: string;
  jsonLd?: Record<string, any>;
}

export const useSEO = ({ title, description, jsonLd }: UseSEOProps) => {
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

    // Add JSON-LD structured data if provided
    if (jsonLd) {
      let script = document.querySelector('#dynamic-jsonld');
      if (!script) {
        script = document.createElement('script');
        script.id = 'dynamic-jsonld';
        script.type = 'application/ld+json';
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
  }, [title, description, jsonLd]);
};
