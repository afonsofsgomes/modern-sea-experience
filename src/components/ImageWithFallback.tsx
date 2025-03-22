
import { useState, useEffect } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
  alt: string;
  onLoad?: () => void;
}

export const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
  onLoad,
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Reset when src changes
    setImgSrc(src);
    setIsLoading(true);
    
    // Preload the image
    const img = new Image();
    img.src = src || '';
    img.onload = () => {
      setIsLoading(false);
      onLoad?.();
    };
    img.onerror = () => {
      console.log(`Image failed to load: ${src}, using fallback`);
      setImgSrc(fallbackSrc);
      setIsLoading(false);
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallbackSrc, onLoad]);
  
  return (
    <div className="relative">
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse" 
          aria-hidden="true"
        />
      )}
      <img
        src={imgSrc || src}
        alt={alt}
        onError={() => {
          if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
          }
        }}
        onLoad={() => {
          setIsLoading(false);
          onLoad?.();
        }}
        loading="eager" // Change to eager for critical images
        decoding="async"
        {...props}
      />
    </div>
  );
};
