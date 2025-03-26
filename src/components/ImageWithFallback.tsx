
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
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Generate webp URL if the image is a JPEG or PNG
  const hasExtension = typeof imgSrc === 'string' && imgSrc.includes('.');
  const imageType = hasExtension ? imgSrc.split('.').pop()?.toLowerCase() : null;
  const webpSrc = 
    hasExtension && (imageType === 'jpg' || imageType === 'jpeg' || imageType === 'png') 
      ? imgSrc.substring(0, imgSrc.lastIndexOf('.')) + '.webp' 
      : null;
  
  // Use intersection observer for lazy loading
  useEffect(() => {
    // Only set up observer if image isn't already loaded
    if (isLoaded) return;
    
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Create new observer
    observerRef.current = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && imgRef.current) {
        // Set the real src when the image comes into view
        if (imgRef.current.src !== imgSrc && imgRef.current.dataset.src) {
          imgRef.current.src = imgRef.current.dataset.src;
        }
        // Stop observing once loaded
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
  }, [imgSrc, isLoaded]);
  
  // Force reload image if src prop changes
  useEffect(() => {
    if (src !== imgSrc && !isLoaded) {
      setImgSrc(src);
    }
  }, [src, imgSrc, isLoaded]);
  
  // Calculate numeric dimensions
  const numericWidth = typeof width === 'string' ? parseInt(width, 10) || 400 : width;
  const numericHeight = typeof height === 'string' ? parseInt(height, 10) || 300 : height;
  
  // Convert fetchPriority to lowercase to avoid React warnings
  const fetchpriorityAttr = fetchPriority ? { fetchpriority: fetchPriority.toLowerCase() } : {};
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />
      )}
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          ref={imgRef}
          src={fetchPriority === 'high' ? imgSrc : undefined}
          data-src={imgSrc} // Store the real src for lazy loading
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
