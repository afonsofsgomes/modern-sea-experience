
import React from 'react';

interface HeroBackgroundProps {
  imageUrl: string;
  fallbackUrl?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  imageUrl,
  fallbackUrl = "https://extranet.seayou.pt/logos/logowhite.png"
}) => {
  const [bgImage, setBgImage] = React.useState(imageUrl);
  
  React.useEffect(() => {
    // Test if the image loads correctly
    const img = new Image();
    img.onerror = () => {
      console.warn(`Hero background image failed to load: ${imageUrl}, using fallback`);
      setBgImage(fallbackUrl);
    };
    img.src = imageUrl;
    
    return () => {
      img.onerror = null;
    };
  }, [imageUrl, fallbackUrl]);

  return (
    <>
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-blue-900/60 z-0"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${bgImage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.8)'
        }}
        aria-hidden="true"
      ></div>
    </>
  );
};
