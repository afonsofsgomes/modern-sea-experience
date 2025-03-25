
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
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
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
  objectFit = 'cover',
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const hasExtension = typeof src === 'string' && src.includes('.');
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
  }, [priority, src]);

  // Fallback logic for when original image fails to load
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imgElement = e.currentTarget;
    
    // If this is the webp version that failed, switch to original
    if (imgElement.src.endsWith('.webp') && src) {
      console.warn(`WebP image failed to load: ${imgElement.src}, falling back to original`);
      imgElement.src = src;
    } else {
      console.warn(`Image failed to load: ${src}`);
    }
  };

  const objectFitClass = 
    objectFit === 'contain' ? 'object-contain' :
    objectFit === 'fill' ? 'object-fill' :
    objectFit === 'none' ? 'object-none' :
    objectFit === 'scale-down' ? 'object-scale-down' :
    'object-cover';

  return (
    <div className={cn("overflow-hidden", className)} style={{ width, height }}>
      {priority ? (
        // For priority images, don't use picture element to avoid delays
        <img
          src={src}
          alt={alt}
          width={typeof width === 'number' ? width : undefined}
          height={typeof height === 'number' ? height : undefined}
          className={cn(`w-full h-full ${objectFitClass} transition-opacity duration-300`, 
            isLoaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          fetchPriority="high"
          decoding="async"
        />
      ) : (
        <picture>
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={src}
            alt={alt}
            width={typeof width === 'number' ? width : undefined}
            height={typeof height === 'number' ? height : undefined}
            loading={loading}
            sizes={sizes}
            className={cn(`w-full h-full ${objectFitClass} transition-opacity duration-300`, 
              isLoaded ? "opacity-100" : "opacity-0")}
            onLoad={() => setIsLoaded(true)}
            onError={handleError}
            decoding="async"
          />
        </picture>
      )}
    </div>
  );
};
