
import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
  alt: string;
}

export const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
  className,
  width = 400,
  height = 300,
  fetchPriority, // We'll handle this properly
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Generate webp URL if the image is a JPEG or PNG
  const hasExtension = typeof imgSrc === 'string' && imgSrc.includes('.');
  const imageType = hasExtension ? imgSrc.split('.').pop()?.toLowerCase() : null;
  const webpSrc = 
    hasExtension && (imageType === 'jpg' || imageType === 'jpeg' || imageType === 'png') 
      ? imgSrc.substring(0, imgSrc.lastIndexOf('.')) + '.webp' 
      : null;
  
  // Force reload image if src prop changes
  // This is important to ensure the component reacts to prop changes
  if (src !== imgSrc && !isLoaded) {
    setImgSrc(src);
  }
  
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
          loading="lazy"
          {...fetchpriorityAttr}
          {...props}
        />
      </picture>
    </div>
  );
};
