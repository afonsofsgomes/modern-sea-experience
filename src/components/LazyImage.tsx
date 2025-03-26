
import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  placeholderSrc?: string;
  alt: string;
}

export const LazyImage = ({
  src,
  placeholderSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23cccccc" /%3E%3C/svg%3E',
  alt,
  className,
  width = "400",
  height = "300",
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate webp URL if the image is a JPEG or PNG
  const hasExtension = src.includes('.');
  const imageType = hasExtension ? src.split('.').pop()?.toLowerCase() : null;
  const webpSrc = 
    hasExtension && (imageType === 'jpg' || imageType === 'jpeg' || imageType === 'png') 
      ? src.substring(0, src.lastIndexOf('.')) + '.webp' 
      : null;

  useEffect(() => {
    // Check if browser supports IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers
      setIsInView(true);
      return;
    }
    
    // Using Intersection Observer API for better performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Load images 200px before they come into view
        threshold: 0.01
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Calculate numeric dimensions
  const numericWidth = typeof width === 'string' ? parseInt(width, 10) || 400 : width;
  const numericHeight = typeof height === 'string' ? parseInt(height, 10) || 300 : height;
  
  // Check for connection speed to adjust loading strategy
  const connectionType = (navigator as any).connection?.effectiveType || '4g';
  const isFastConnection = !['slow-2g', '2g'].includes(connectionType);

  return (
    <div 
      className="relative overflow-hidden" 
      style={{ background: '#f5f5f5', width, height }} 
      ref={containerRef}
      aria-busy={!isLoaded}
    >
      {/* Placeholder image shown until the main image loads */}
      {!isLoaded && (
        <img
          src={placeholderSrc}
          alt=""
          className={className}
          style={{ filter: 'blur(5px)' }}
          width={numericWidth}
          height={numericHeight}
          aria-hidden="true"
          {...props}
        />
      )}
      
      {/* Main image, only loaded when in viewport */}
      {(isInView || isFastConnection) && (
        <picture>
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            width={numericWidth}
            height={numericHeight}
            loading="lazy"
            className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={handleLoad}
            decoding="async"
            fetchPriority={isInView ? "auto" : "low"}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};
