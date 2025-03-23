
import React from 'react';

interface HeroBackgroundProps {
  imageUrl: string;
}

export const HeroBackground = ({ imageUrl }: HeroBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Blue fallback background in case image doesn't load */}
      <div className="absolute inset-0 bg-blue-900"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          opacity: 0.6
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#253D7F]/40 to-[#253D7F]/90" />
    </div>
  );
};
