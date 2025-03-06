
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { getFallbackImage } from '@/lib/imageFallback';
import { getResponsiveImageUrl, ensureHttps } from '@/lib/imageUtils';
import { useImageError } from '@/context/ImageErrorContext';

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
  const [imageSrc, setImageSrc] = useState<string>('');
  const [usedFallback, setUsedFallback] = useState(false);
  const { reportError } = useImageError();
  
  // Initialize with optimized URL
  useEffect(() => {
    // Ensure HTTPS and apply responsive sizing
    const optimizedSrc = getResponsiveImageUrl(ensureHttps(src), width);
    setImageSrc(optimizedSrc);
    setUsedFallback(false);
    setIsLoaded(false);
  }, [src, width]);
  
  const hasExtension = imageSrc.includes('.');
  const imageType = hasExtension ? imageSrc.split('.').pop()?.toLowerCase() : null;
  
  // Generate webp URL if the image is a JPEG or PNG
  const webpSrc = 
    hasExtension && (imageType === 'jpg' || imageType === 'jpeg' || imageType === 'png') 
      ? imageSrc.substring(0, imageSrc.lastIndexOf('.')) + '.webp' 
      : null;

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = imageSrc;
    }
  }, [priority, imageSrc]);

  // Fallback logic for when image fails to load
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Failed to load image: ${imageSrc}`);
    const imgElement = e.currentTarget;
    
    // If this is the webp version that failed, switch to original
    if (imgElement.src.endsWith('.webp') && webpSrc) {
      imgElement.src = imageSrc;
      return;
    }
    
    // If original source failed and we haven't used a fallback yet
    if (!usedFallback) {
      // Report the error
      reportError(imageSrc, `OptimizedImage(${alt})`);
      
      const fallbackSrc = getFallbackImage(imageSrc);
      console.log(`Using fallback image: ${fallbackSrc}`);
      setImageSrc(fallbackSrc);
      setUsedFallback(true);
    }
  };

  return (
    <div className={cn("overflow-hidden", className)} style={{ width, height }}>
      {priority ? (
        // For priority images, don't use picture element to avoid delays
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={cn("w-full h-full object-cover transition-opacity duration-300", 
            isLoaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
        />
      ) : (
        <picture>
          {webpSrc && !usedFallback && <source srcSet={webpSrc} type="image/webp" />}
          <img
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            sizes={sizes}
            className={cn("w-full h-full object-cover transition-opacity duration-300", 
              isLoaded ? "opacity-100" : "opacity-0")}
            onLoad={() => setIsLoaded(true)}
            onError={handleError}
          />
        </picture>
      )}
    </div>
  );
};
