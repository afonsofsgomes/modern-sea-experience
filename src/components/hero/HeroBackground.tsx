
import React, { useState, useEffect } from 'react';

interface HeroBackgroundProps {
  imageUrl: string;
}

export const HeroBackground = ({ imageUrl }: HeroBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(imageUrl);
  const [error, setError] = useState(false);
  
  // Log the image URL for debugging
  console.log('Hero background image URL:', imageUrl);
  
  // Generate webp URL if the image is a JPEG or PNG
  const hasExtension = imageUrl.includes('.');
  const imageType = hasExtension ? imageUrl.split('.').pop()?.toLowerCase() : null;
  console.log('Image type detected:', imageType);
  
  // Support both .jpg and .jpeg extensions for WebP conversion
  const webpSrc = 
    hasExtension && (imageType === 'jpg' || imageType === 'jpeg' || imageType === 'png') 
      ? imageUrl.substring(0, imageUrl.lastIndexOf('.')) + '.webp' 
      : null;
  
  console.log('WebP version URL:', webpSrc);
  
  // Preload the image
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
    
    // Try to load the WebP version first if available
    if (webpSrc) {
      const webpImg = new Image();
      webpImg.src = webpSrc;
      webpImg.onload = () => {
        console.log('WebP image loaded successfully');
        setImageSrc(webpSrc);
        setIsLoaded(true);
      };
      webpImg.onerror = () => {
        console.log('WebP image failed to load, falling back to original format');
        // If WebP fails, try the original format
        const originalImg = new Image();
        originalImg.src = imageUrl;
        originalImg.onload = () => {
          console.log('Original image loaded successfully');
          setImageSrc(imageUrl);
          setIsLoaded(true);
        };
        originalImg.onerror = () => {
          console.error(`Failed to load both WebP and original image: ${imageUrl}`);
          setError(true);
        };
      };
    } else {
      // If no WebP version, just load the original
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        console.log('Original image loaded successfully');
        setIsLoaded(true);
      };
      img.onerror = () => {
        console.error(`Failed to load image: ${imageUrl}`);
        setError(true);
      };
    }
  }, [imageUrl, webpSrc]);

  return (
    <div className="absolute inset-0 z-0">
      {error && (
        <div className="absolute inset-0 bg-blue-900 flex items-center justify-center">
          <p className="text-white text-opacity-70">Image could not be loaded</p>
        </div>
      )}
      
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      )}
      
      {!error && (
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
            onLoad={() => {
              console.log('Image onLoad event triggered');
              setIsLoaded(true);
            }}
            onError={(e) => {
              console.error(`Error loading image: ${imageSrc}`);
              setError(true);
            }}
          />
        </picture>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#253D7F]/40 to-[#253D7F]/90" />
    </div>
  );
};
