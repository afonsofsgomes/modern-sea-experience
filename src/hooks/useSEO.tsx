import { useEffect } from 'react';

// Default OG image URL
const DEFAULT_OG_IMAGE = "https://extranet.seayou.pt/photos/og.png";

interface UseSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  jsonLd?: Record<string, any>;
  ogImage?: string;
}

export const useSEO = ({ title, description, keywords, jsonLd, ogImage = DEFAULT_OG_IMAGE }: UseSEOProps) => {
  useEffect(() => {
    // Ensure the OG image URL is absolute
    const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `https://seayou.pt${ogImage}`;
    
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
    if (absoluteOgImage) {
      // Update og:image
      const ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', absoluteOgImage);
      } else {
        const newOgImage = document.createElement('meta');
        newOgImage.setAttribute('property', 'og:image');
        newOgImage.content = absoluteOgImage;
        document.head.appendChild(newOgImage);
      }
      
      // Update og:image:url
      const ogImageUrlMeta = document.querySelector('meta[property="og:image:url"]');
      if (ogImageUrlMeta) {
        ogImageUrlMeta.setAttribute('content', absoluteOgImage);
      } else {
        const newOgImageUrl = document.createElement('meta');
        newOgImageUrl.setAttribute('property', 'og:image:url');
        newOgImageUrl.content = absoluteOgImage;
        document.head.appendChild(newOgImageUrl);
      }
      
      // Update og:image:secure_url
      const ogImageSecureUrlMeta = document.querySelector('meta[property="og:image:secure_url"]');
      if (ogImageSecureUrlMeta) {
        ogImageSecureUrlMeta.setAttribute('content', absoluteOgImage);
      } else {
        const newOgImageSecureUrl = document.createElement('meta');
        newOgImageSecureUrl.setAttribute('property', 'og:image:secure_url');
        newOgImageSecureUrl.content = absoluteOgImage;
        document.head.appendChild(newOgImageSecureUrl);
      }
      
      // Update image dimensions
      const widthMeta = document.querySelector('meta[property="og:image:width"]');
      if (widthMeta) {
        widthMeta.setAttribute('content', '800');
      } else {
        const newWidthMeta = document.createElement('meta');
        newWidthMeta.setAttribute('property', 'og:image:width');
        newWidthMeta.content = '800';
        document.head.appendChild(newWidthMeta);
      }
      
      const heightMeta = document.querySelector('meta[property="og:image:height"]');
      if (heightMeta) {
        heightMeta.setAttribute('content', '420');
      } else {
        const newHeightMeta = document.createElement('meta');
        newHeightMeta.setAttribute('property', 'og:image:height');
        newHeightMeta.content = '420';
        document.head.appendChild(newHeightMeta);
      }
      
      // Ensure Facebook-specific tags
      if (!document.querySelector('meta[property="fb:app_id"]')) {
        const appIdMeta = document.createElement('meta');
        appIdMeta.setAttribute('property', 'fb:app_id');
        appIdMeta.content = '1324423168329224';
        document.head.appendChild(appIdMeta);
      }
      
      // Also update Twitter image
      const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');
      if (twitterImageMeta) {
        twitterImageMeta.setAttribute('content', absoluteOgImage);
      } else {
        const newTwitterImage = document.createElement('meta');
        newTwitterImage.name = 'twitter:image';
        newTwitterImage.content = absoluteOgImage;
        document.head.appendChild(newTwitterImage);
      }
      
      // Add image type and alt for Facebook
      if (!document.querySelector('meta[property="og:image:type"]')) {
        const typeMeta = document.createElement('meta');
        typeMeta.setAttribute('property', 'og:image:type');
        typeMeta.content = 'image/png';
        document.head.appendChild(typeMeta);
      }
      
      if (!document.querySelector('meta[property="og:image:alt"]')) {
        const altMeta = document.createElement('meta');
        altMeta.setAttribute('property', 'og:image:alt');
        altMeta.content = 'SeaYou Madeira';
        document.head.appendChild(altMeta);
      }
    }

    // Add JSON-LD structured data if provided
    if (jsonLd) {
      let script = document.querySelector('#dynamic-jsonld') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = 'dynamic-jsonld';
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      if (jsonLd) {
        const script = document.querySelector('#dynamic-jsonld');
        if (script) {
          script.remove();
        }
      }
    };
  }, [title, description, keywords, jsonLd, ogImage]);
};
