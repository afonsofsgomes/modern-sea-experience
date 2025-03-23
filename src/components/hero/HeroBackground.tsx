
import React, { useState } from 'react';

interface HeroBackgroundProps {
  imageUrl: string;
}

export const HeroBackground = ({ imageUrl }: HeroBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  return (
    <div className="absolute inset-0 z-0">
      {error && (
        <div className="absolute inset-0 bg-blue-900 flex items-center justify-center">
          <p className="text-white text-opacity-70">Image could not be loaded</p>
        </div>
      )}
      
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      )}
      
      {!error && (
        <img 
          src={imageUrl} 
          alt="Background" 
          className={`w-full h-full object-cover object-bottom transition-opacity duration-300 ${isLoaded ? 'opacity-60' : 'opacity-0'}`}
          fetchPriority="high"
          decoding="async"
          loading="eager"
          width="1920"
          height="1080"
          sizes="100vw"
          onLoad={() => {
            console.log('Hero background image loaded successfully');
            setIsLoaded(true);
          }}
          onError={(e) => {
            console.error(`Error loading hero background image: ${imageUrl}`);
            setError(true);
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-[#253D7F]/40 to-[#253D7F]/90" />
    </div>
  );
};
