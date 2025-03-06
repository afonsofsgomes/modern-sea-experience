
import { useEffect } from 'react';

interface UseSEOProps {
  title?: string;
  description?: string;
}

export const useSEO = ({ title, description }: UseSEOProps) => {
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

    return () => {
      // No cleanup needed as we don't want to revert the changes
    };
  }, [title, description]);
};
