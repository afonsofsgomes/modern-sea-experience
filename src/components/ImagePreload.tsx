
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

interface ImagePreloadProps {
  images: string[];
  highPriority?: boolean;
}

export const ImagePreload = ({ images, highPriority = false }: ImagePreloadProps) => {
  // For highest priority images, use useEffect to preload them immediately
  useEffect(() => {
    if (highPriority) {
      images.forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc;
      });
    }
  }, [images, highPriority]);

  return (
    <Helmet>
      {images.map((imageSrc, index) => (
        <link 
          key={index}
          rel="preload" 
          as="image" 
          href={imageSrc} 
          fetchPriority={highPriority ? "high" : "auto"}
        />
      ))}
    </Helmet>
  );
};
