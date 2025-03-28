
import React from 'react';

interface HeroBackgroundProps {
  imageUrl: string;
  fallbackUrl?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  imageUrl,
  fallbackUrl = "https://extranet.seayou.pt/photos/9374361538.png"
}) => {
  return (
    <>
      {/* Overlay to soften the background with a light blue tint */}
      <div className="absolute inset-0 bg-blue-900/40 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${imageUrl || "https://extranet.seayou.pt/photos/bc.jpg"})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.8)'
        }}
        aria-hidden="true"
      ></div>
    </>
  );
};
