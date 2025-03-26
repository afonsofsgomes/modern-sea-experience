
import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageLoaderProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty' | 'color';
  placeholderColor?: string;
}

export const OptimizedImageLoader: React.FC<OptimizedImageLoaderProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  placeholderColor = '#f3f4f6', // default light gray
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  
  // Determine if webp version might be available
  const hasExtension = src.includes('.');
  const ext = hasExtension ? src.split('.').pop()?.toLowerCase() : null;
  const webpSrc = (ext === 'jpg' || ext === 'jpeg' || ext === 'png') 
    ? src.substring(0, src.lastIndexOf('.')) + '.webp' 
    : null;
  
  useEffect(() => {
    // Use Intersection Observer for non-priority images
    if (!priority && 'IntersectionObserver' in window && elementRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            if (imageRef.current) {
              imageRef.current.loading = 'eager'; // Change to eager once in viewport
              imageRef.current.src = src; // Set src when in viewport
            }
            observer.disconnect();
          }
        },
        { rootMargin: '200px' } // Load when within 200px of viewport
      );
      
      observer.observe(elementRef.current);
      
      return () => {
        observer.disconnect();
      };
    }
    
    // For priority images, just set the image src directly
    if (priority && imageRef.current) {
      imageRef.current.src = src;
    }
  }, [src, priority]);
  
  return (
    <div 
      ref={elementRef}
      className={`relative overflow-hidden ${className}`} 
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundColor: placeholder === 'color' ? placeholderColor : 'transparent',
            backgroundImage: placeholder === 'blur' ? `url(${src}?quality=10&width=50)` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: placeholder === 'blur' ? 'blur(20px)' : 'none',
          }}
          aria-hidden="true"
        />
      )}
      
      {/* Actual image */}
      <picture className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          ref={imageRef}
          alt={alt}
          src={priority ? src : undefined} // Only set src initially for priority images
          width={width}
          height={height}
          className={`w-full h-full object-cover ${className}`}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
        />
      </picture>
    </div>
  );
};
