
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
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'async' | 'sync' | 'auto';
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
  fetchPriority = 'auto',
  decoding = 'async',
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(priority);
  const hasExtension = src.includes('.');
  const imageType = hasExtension ? src.split('.').pop()?.toLowerCase() : null;
  
  // Generate webp URL if the image is a JPEG or PNG
  const webpSrc = 
    hasExtension && (imageType === 'jpg' || imageType === 'jpeg' || imageType === 'png') 
      ? src.substring(0, src.lastIndexOf('.')) + '.webp' 
      : null;

  // Generate low-quality image placeholder URL for blur-up effect
  const placeholderSrc = hasExtension 
    ? src.substring(0, src.lastIndexOf('.')) + '-small.jpg' 
    : null;

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = src;
      if (webpSrc) {
        const webpImg = new Image();
        webpImg.src = webpSrc;
      }
    }
  }, [priority, src, webpSrc]);

  // Fallback logic for when image fails to load
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Failed to load image: ${src}`);
    const imgElement = e.currentTarget;
    
    // If this is the webp version that failed, switch to original
    if (imgElement.src.endsWith('.webp') && webpSrc) {
      imgElement.src = src;
    }
  };

  return (
    <div 
      className={cn("overflow-hidden relative", className)} 
      style={{ width, height, backgroundColor: "#f3f4f6" }}
    >
      {priority ? (
        // For priority images, don't use picture element to avoid delays
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn("w-full h-full object-cover transition-opacity duration-300", 
            isLoaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          fetchPriority="high"
          decoding={decoding}
        />
      ) : (
        <>
          {/* Low-quality placeholder image for blur-up effect */}
          {!isLoaded && placeholderSrc && (
            <img 
              src={placeholderSrc}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-sm scale-105 opacity-50"
              aria-hidden="true"
            />
          )}
          
          <picture>
            {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading={loading}
              sizes={sizes}
              className={cn("w-full h-full object-cover transition-opacity duration-300", 
                isLoaded ? "opacity-100" : "opacity-0")}
              onLoad={() => setIsLoaded(true)}
              onError={handleError}
              fetchPriority={fetchPriority}
              decoding={decoding}
            />
          </picture>
        </>
      )}
    </div>
  );
};
