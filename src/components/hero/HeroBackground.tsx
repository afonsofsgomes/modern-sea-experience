
import React from 'react';

interface HeroBackgroundProps {
  imageUrl: string;
  fallbackUrl?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  imageUrl,
  fallbackUrl = "https://extranet.seayou.pt/logos/logowhite.png"
}) => {
  return (
    <>
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-blue-900/60 z-0"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 z-[-1] bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${imageUrl})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.8)'
        }}
        aria-hidden="true"
      ></div>
    </>
  );
};
