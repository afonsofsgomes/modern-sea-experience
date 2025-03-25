
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
      
      // Add image dimensions and type for Facebook
      if (!document.querySelector('meta[property="og:image:width"]')) {
        const widthMeta = document.createElement('meta');
        widthMeta.setAttribute('property', 'og:image:width');
        widthMeta.content = '1200';
        document.head.appendChild(widthMeta);
      }
      
      if (!document.querySelector('meta[property="og:image:height"]')) {
        const heightMeta = document.createElement('meta');
        heightMeta.setAttribute('property', 'og:image:height');
        heightMeta.content = '630';
        document.head.appendChild(heightMeta);
      }
      
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
