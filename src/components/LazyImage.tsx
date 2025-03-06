
import { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  placeholderSrc?: string;
  alt: string;
}

export const LazyImage = ({
  src,
  placeholderSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23cccccc" /%3E%3C/svg%3E',
  alt,
  className,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
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

  return (
    <div className="relative overflow-hidden" style={{ background: '#f5f5f5' }} ref={imgRef}>
      {/* Placeholder image shown until the main image loads */}
      {!isLoaded && (
        <img
          src={placeholderSrc}
          alt=""
          className={className}
          style={{ filter: 'blur(10px)' }}
          {...props}
        />
      )}
      
      {/* Main image, only loaded when in viewport */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: 'opacity 0.3s' }}
          onLoad={handleLoad}
          {...props}
        />
      )}
    </div>
  );
};
