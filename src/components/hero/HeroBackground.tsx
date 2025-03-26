
import React, { useEffect, useRef } from 'react';

interface HeroBackgroundProps {
  imageUrl: string;
  fallbackUrl?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  imageUrl,
  fallbackUrl = "https://extranet.seayou.pt/photos/9374361538.png"
}) => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Preload the image with high priority
    if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;
      img.fetchPriority = 'high';
      img.onload = () => {
        // Once loaded, apply it to the background div with no transition
        if (imageRef.current) {
          imageRef.current.style.backgroundImage = `url(${imageUrl})`;
        }
      };
      img.onerror = () => {
        // If error, use fallback
        if (imageRef.current && fallbackUrl) {
          imageRef.current.style.backgroundImage = `url(${fallbackUrl})`;
        }
      };
    }
  }, [imageUrl, fallbackUrl]);

  return (
    <>
      {/* Overlay to soften the background with a light blue tint */}
      <div className="absolute inset-0 bg-blue-900/40 z-10"></div>
      
      {/* Background image - with inline style for faster initial render */}
      <div 
        ref={imageRef}
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `url(${imageUrl || fallbackUrl})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.8)'
        }}
        aria-hidden="true"
      ></div>
    </>
  );
};
