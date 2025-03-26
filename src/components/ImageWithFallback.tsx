
import React, { useState, useEffect, useRef, memo } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
  alt: string;
}

export const ImageWithFallback = memo(({
  src,
  fallbackSrc,
  alt,
  className,
  width = 400,
  height = 300,
  fetchPriority,
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Generate webp URL if the image is a JPEG or PNG
  const hasExtension = typeof src === 'string' && src.includes('.');
  const imageType = hasExtension ? src.split('.').pop()?.toLowerCase() : null;
  const webpSrc = 
    hasExtension && (imageType === 'jpg' || imageType === 'jpeg' || imageType === 'png') 
      ? src.substring(0, src.lastIndexOf('.')) + '.webp' 
      : null;
  
  // Initialize image source
  useEffect(() => {
    // For high priority images, set src immediately
    if (fetchPriority === 'high') {
      setImgSrc(src);
    }
  }, [src, fetchPriority]);
  
  // Use intersection observer for lazy loading
  useEffect(() => {
    // Skip for priority images - they're loaded eagerly
    if (fetchPriority === 'high' || isLoaded) return;
    
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Create new observer with optimized settings
    observerRef.current = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && imgRef.current) {
        // Set the src only when the image comes into view
        setImgSrc(src);
        
        // Stop observing once src is set
        observerRef.current?.disconnect();
      }
    }, {
      rootMargin: '200px',  // Load images 200px before they enter viewport
      threshold: 0.01
    });
    
    // Start observing the image
    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }
    
    return () => {
      observerRef.current?.disconnect();
    };
  }, [src, isLoaded, fetchPriority]);
  
  // Calculate numeric dimensions
  const numericWidth = typeof width === 'string' ? parseInt(width, 10) || 400 : width;
  const numericHeight = typeof height === 'string' ? parseInt(height, 10) || 300 : height;
  
  // Convert fetchPriority to lowercase to avoid React warnings
  const fetchpriorityAttr = fetchPriority ? { fetchpriority: fetchPriority.toLowerCase() } : {};
  
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200" aria-hidden="true" />
      )}
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          ref={imgRef}
          src={imgSrc}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            console.log(`Image failed to load: ${imgSrc}, using fallback`);
            setImgSrc(fallbackSrc);
          }}
          width={numericWidth}
          height={numericHeight}
          decoding="async"
          loading={fetchPriority === 'high' ? 'eager' : 'lazy'}
          {...fetchpriorityAttr}
          {...props}
        />
      </picture>
    </div>
  );
});

ImageWithFallback.displayName = 'ImageWithFallback';
