
import { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
  alt: string;
}

export const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
  ...props
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  
  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => {
        console.log(`Image failed to load: ${src}, using fallback`);
        setImgSrc(fallbackSrc);
      }}
      {...props}
    />
  );
};
