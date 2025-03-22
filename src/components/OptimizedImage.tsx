
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  priority?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  sizes = '100vw',
  priority = false,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const hasExtension = src.includes('.');
  const imageType = hasExtension ? src.split('.').pop()?.toLowerCase() : null;
  
  // Generate webp URL if the image is a JPEG or PNG
  const webpSrc = 
    hasExtension && (imageType === 'jpg' || imageType === 'jpeg' || imageType === 'png') 
      ? src.substring(0, src.lastIndexOf('.')) + '.webp' 
      : null;

  // Determine dimensions with fallbacks
  const imgWidth = width || 800;
  const imgHeight = height || Math.round(imgWidth * 0.75); // 4:3 aspect ratio fallback

  useEffect(() => {
    if (priority) {
      // Preload priority images
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = webpSrc || src;
      link.type = webpSrc ? 'image/webp' : undefined;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src, webpSrc]);

  // Fallback logic for when original image fails to load
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Failed to load image: ${src}`);
    const imgElement = e.currentTarget;
    
    // If this is the webp version that failed, switch to original
    if (imgElement.src.endsWith('.webp') && webpSrc) {
      imgElement.src = src;
    }
  };

  return (
    <div className={cn("overflow-hidden", className)} style={{ width, height }}>
      {priority ? (
        // For priority images, use preload and eager loading
        <picture>
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={src}
            alt={alt}
            width={imgWidth}
            height={imgHeight}
            className={cn("w-full h-full object-cover transition-opacity duration-300", 
              isLoaded ? "opacity-100" : "opacity-0")}
            onLoad={() => setIsLoaded(true)}
            onError={handleError}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
        </picture>
      ) : (
        <picture>
          {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={src}
            alt={alt}
            width={imgWidth}
            height={imgHeight}
            loading={loading}
            sizes={sizes}
            className={cn("w-full h-full object-cover transition-opacity duration-300", 
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
