
import React, { useState, useEffect, useRef } from 'react';
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
  const imageRef = useRef<HTMLImageElement>(null);
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
    // Use IntersectionObserver to only process visible images
    if (typeof IntersectionObserver === 'undefined' || priority) {
      return;
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && imageRef.current) {
          // Only set src attribute when the image is in view
          if (imageRef.current.getAttribute('data-src')) {
            imageRef.current.src = imageRef.current.getAttribute('data-src') || '';
            imageRef.current.removeAttribute('data-src');
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '200px', // Load images 200px before they come into viewport
      threshold: 0.01
    });
    
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [priority]);

  // Fallback logic for when original image fails to load
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imgElement = e.currentTarget;
    
    // If this is the webp version that failed, switch to original
    if (imgElement.src.endsWith('.webp') && src) {
      imgElement.src = src;
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
          className="absolute inset-0 bg-gray-200" 
          style={{ width: '100%', height: '100%' }}
          aria-hidden="true"
        />
      )}
      
      {priority ? (
        // For priority images, don't use picture element to avoid delays
        <img
          ref={imageRef}
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
            ref={imageRef}
            src={loading === 'lazy' ? undefined : src}
            data-src={loading === 'lazy' ? src : undefined}
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
