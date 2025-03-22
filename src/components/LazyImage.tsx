
import { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  placeholderSrc?: string;
  alt: string;
  fetchPriority?: 'high' | 'low' | 'auto';
}

export const LazyImage = ({
  src,
  placeholderSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f3f4f6" /%3E%3C/svg%3E',
  alt,
  className,
  fetchPriority = 'auto',
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Use Intersection Observer API for better performance than scroll events
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers that don't support IntersectionObserver
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Load images 200px before they enter viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // For images that are important but not top priority, preload when in view
  useEffect(() => {
    if (isInView && fetchPriority === 'high' && !isLoaded) {
      const img = new Image();
      img.src = src;
    }
  }, [isInView, fetchPriority, src, isLoaded]);

  return (
    <div 
      className="relative overflow-hidden" 
      style={{ background: '#f5f5f5' }} 
      ref={imgRef}
    >
      {/* Placeholder image shown until the main image loads */}
      {!isLoaded && (
        <img
          src={placeholderSrc}
          alt=""
          className={className}
          style={{ filter: 'blur(8px)', transform: 'scale(1.05)' }}
          aria-hidden="true"
          {...props}
        />
      )}
      
      {/* Main image, only loaded when in viewport */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: 'opacity 0.4s ease' }}
          onLoad={handleLoad}
          fetchPriority={fetchPriority}
          decoding="async"
          {...props}
        />
      )}
    </div>
  );
};
