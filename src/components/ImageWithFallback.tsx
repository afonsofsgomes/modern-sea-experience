
import { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
  alt: string;
  width?: number;
  height?: number;
}

export const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
  width = 800,
  height = 600,
  className,
  loading = 'lazy',
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Generate WebP version of the source if it's jpg or png
  const hasExtension = typeof src === 'string' && src.includes('.');
  const imageType = hasExtension ? src?.split('.').pop()?.toLowerCase() : null;
  const webpSrc = hasExtension && (imageType === 'jpg' || imageType === 'jpeg' || imageType === 'png') 
    ? src?.substring(0, src.lastIndexOf('.')) + '.webp' 
    : null;
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <picture>
        {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
        <img
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading={loading}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            console.log(`Image failed to load: ${src}, using fallback`);
            setImgSrc(fallbackSrc);
          }}
          {...props}
        />
      </picture>
    </div>
  );
};
