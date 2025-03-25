
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
      
  // Calculate approx dimensions for responsive images with percentage width/height
  const [calculatedDimensions, setCalculatedDimensions] = useState({
    width: typeof width === 'number' ? width : 400,
    height: typeof height === 'number' ? height : 300
  });
  
  useEffect(() => {
    if (priority) {
      // Preload priority images
      const img = new Image();
      img.src = src;
    }
    
    // Try to determine actual image dimensions for percentage-based images
    if (typeof width === 'string' && width.includes('%') || typeof height === 'string' && height.includes('%')) {
      const img = new Image();
      img.onload = () => {
        setCalculatedDimensions({
          width: img.width || 400,
          height: img.height || 300
        });
      };
      img.src = src;
    }
  }, [priority, src, width, height]);

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
    
  // Determine final width and height attributes for the img tag
  const finalWidth = typeof width === 'number' ? width : calculatedDimensions.width;
  const finalHeight = typeof height === 'number' ? height : calculatedDimensions.height;

  return (
    <div className={cn("overflow-hidden relative", className)} style={{ width, height }}>
      {/* Placeholder div with same dimensions while image loads */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse" 
          style={{ width: '100%', height: '100%' }}
          aria-hidden="true"
        />
      )}
      
      {priority ? (
        // For priority images, don't use picture element to avoid delays
        <img
          src={src}
          alt={alt}
          width={finalWidth}
          height={finalHeight}
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
            width={finalWidth}
            height={finalHeight}
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
