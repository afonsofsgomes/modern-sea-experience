
import React, { useEffect, useRef, useState } from 'react';

interface HeroBackgroundProps {
  imageUrl: string;
  fallbackUrl?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  imageUrl,
  fallbackUrl = "https://extranet.seayou.pt/photos/9374361538.png"
}) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Optimize image loading with connection awareness
    const connectionType = (navigator as any).connection?.effectiveType || '4g';
    const isFastConnection = !['slow-2g', '2g', '3g'].includes(connectionType);
    
    if (imageUrl) {
      // Create image object for preloading
      const img = new Image();
      img.src = imageUrl;
      img.fetchPriority = 'high';
      
      // For fast connections, don't wait for onload
      if (isFastConnection && imageRef.current) {
        // Apply image immediately with a tiny delay
        setTimeout(() => {
          if (imageRef.current) {
            imageRef.current.style.backgroundImage = `url(${imageUrl})`;
            setImageLoaded(true);
          }
        }, 10);
      }
      
      // For all connections, ensure image is loaded correctly
      img.onload = () => {
        if (imageRef.current) {
          imageRef.current.style.backgroundImage = `url(${imageUrl})`;
          setImageLoaded(true);
        }
      };
      
      img.onerror = () => {
        // If error, use fallback
        if (imageRef.current && fallbackUrl) {
          imageRef.current.style.backgroundImage = `url(${fallbackUrl})`;
          setImageLoaded(true);
        }
      };
    }
  }, [imageUrl, fallbackUrl]);

  return (
    <>
      {/* Optimized overlay that doesn't depend on image loading */}
      <div className="absolute inset-0 bg-blue-900/40 z-10"></div>
      
      {/* Low quality image placeholder while loading */}
      <div 
        className="absolute inset-0 bg-blue-800 z-0"
        style={{ 
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
        aria-hidden="true"
      ></div>
      
      {/* Actual background image */}
      <div 
        ref={imageRef}
        className={`absolute inset-0 z-1 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          backgroundImage: `url(${fallbackUrl})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.8)'
        }}
        aria-hidden="true"
      ></div>
    </>
  );
};
