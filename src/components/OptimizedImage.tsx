
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  priority?: boolean;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  fallbackSrc?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  width = "100%",
  height = "auto",
  className,
  loading = 'lazy',
  sizes = '100vw',
  priority = false,
  onError,
  fallbackSrc = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);
  const hasExtension = src.includes('.');
  const imageType = hasExtension ? src.split('.').pop()?.toLowerCase() : null;
  
  // Generate webp URL if the image is a JPEG or PNG
  const webpSrc = 
    hasExtension && (imageType === 'jpg' || imageType === 'jpeg' || imageType === 'png') 
      ? src.substring(0, src.lastIndexOf('.')) + '.webp' 
      : null;

  useEffect(() => {
    if (priority) {
      // Preload priority images
      const img = new Image();
      img.src = src;
    }
    
    // Reset image source when src prop changes
    setImgSrc(src);
    setIsLoaded(false);
  }, [priority, src]);

  // Fallback logic for when original image fails to load
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Failed to load image: ${imgSrc}`);
    const imgElement = e.currentTarget;
    
    // If this is the webp version that failed, switch to original
    if (imgElement.src.endsWith('.webp') && webpSrc) {
      imgElement.src = src;
      return; // Early return to allow the original format to try loading
    }
    
    // If original format fails, use fallback image
    if (imgSrc !== fallbackSrc) {
      console.log(`Using fallback image for: ${imgSrc}`);
      setImgSrc(fallbackSrc);
    }

    // Call the provided onError handler if it exists
    if (onError) {
      onError(e);
    }
  };

  return (
    <div className={cn("overflow-hidden", className)} style={{ width, height }}>
      {priority ? (
        // For priority images, don't use picture element to avoid delays
        <img
          src={imgSrc}
          alt={alt}
          width={typeof width === 'number' ? width : undefined}
          height={typeof height === 'number' ? height : undefined}
          className={cn("w-full h-full object-cover transition-opacity duration-300", 
            isLoaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setImgSrc === fallbackSrc ? null : setIsLoaded(true)}
          onError={handleError}
          fetchPriority="high"
          decoding="async"
        />
      ) : (
        <picture>
          {webpSrc && imgSrc === src && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={imgSrc}
            alt={alt}
            width={typeof width === 'number' ? width : undefined}
            height={typeof height === 'number' ? height : undefined}
            loading={loading}
            sizes={sizes}
            className={cn("w-full h-full object-cover transition-opacity duration-300", 
              isLoaded ? "opacity-100" : "opacity-0")}
            onLoad={() => imgSrc === fallbackSrc ? null : setIsLoaded(true)}
            onError={handleError}
            decoding="async"
          />
        </picture>
      )}
    </div>
  );
};
