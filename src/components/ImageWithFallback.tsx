
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
  }, [src]);
  
  const handleError = () => {
    console.log(`Image failed to load: ${imgSrc}, using fallback`);
    setImgSrc(fallbackSrc);
  };
  
  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };
  
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
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  );
};
