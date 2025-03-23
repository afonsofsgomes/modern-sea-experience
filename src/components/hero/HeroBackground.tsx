
import React, { useState, useEffect } from 'react';

interface HeroBackgroundProps {
  imageUrl: string;
}

export const HeroBackground = ({ imageUrl }: HeroBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(imageUrl);
  
  // Generate webp URL if the image is a JPEG or PNG
  const hasExtension = imageUrl.includes('.');
  const imageType = hasExtension ? imageUrl.split('.').pop()?.toLowerCase() : null;
  const webpSrc = 
    hasExtension && (imageType === 'jpg' || imageType === 'jpeg' || imageType === 'png') 
      ? imageUrl.substring(0, imageUrl.lastIndexOf('.')) + '.webp' 
      : null;
  
  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => {
      console.error(`Failed to load image: ${imageUrl}`);
      // If we have a fallback, we could set it here
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageUrl]);

  return (
    <div className="absolute inset-0 z-0">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      )}
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img 
          src={imageSrc} 
          alt="Background" 
          className={`w-full h-full object-cover object-bottom transition-opacity duration-300 ${isLoaded ? 'opacity-60' : 'opacity-0'}`}
          fetchPriority="high"
          decoding="async"
          loading="eager"
          width="1920"
          height="1080"
          sizes="100vw"
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            console.error(`Error loading image: ${imageSrc}`);
            // If this is the webp version that failed, try the original
            if (e.currentTarget.src.endsWith('.webp') && webpSrc) {
              setImageSrc(imageUrl);
            }
          }}
        />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from-[#253D7F]/40 to-[#253D7F]/90" />
    </div>
  );
};
