
import { useState, useEffect, useRef } from "react";

interface SeaBusCardContentProps {
  fallbackImage: string;
}

export const SeaBusCardContent = ({ fallbackImage }: SeaBusCardContentProps) => {
  return (
    <div className="flex flex-row h-full">
      {/* First city: Calheta */}
      <LocationImage 
        imageSrc="https://extranet.seayou.pt/photos/Calheta.jpg" 
        fallbackSrc={fallbackImage} 
        cityName="Calheta" 
        hasBorder={true} 
      />
      
      {/* Second city: Funchal (middle) */}
      <LocationImage 
        imageSrc="https://extranet.seayou.pt/photos/Funchal.jpg" 
        fallbackSrc={fallbackImage} 
        cityName="Funchal" 
        hasBorder={true} 
      />
      
      {/* Third city: Caniçal */}
      <LocationImage 
        imageSrc="https://extranet.seayou.pt/photos/Canical.jpg" 
        fallbackSrc={fallbackImage} 
        cityName="Caniçal" 
        hasBorder={false} 
      />
    </div>
  );
};

interface LocationImageProps {
  imageSrc: string;
  fallbackSrc: string;
  cityName: string;
  hasBorder: boolean;
}

const LocationImage = ({ imageSrc, fallbackSrc, cityName, hasBorder }: LocationImageProps) => {
  const [imgSrc, setImgSrc] = useState(imageSrc);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  // Preload image to prevent layout shifts
  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      if (imgRef.current) {
        setImgSrc(imageSrc);
        setIsLoaded(true);
      }
    };
    img.onerror = () => {
      if (imgRef.current) {
        console.log(`Failed to load image: ${imageSrc}, using fallback`);
        setImgSrc(fallbackSrc);
      }
    };
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [imageSrc, fallbackSrc]);

  return (
    <div className={`w-1/3 h-full relative overflow-hidden ${hasBorder ? 'border-r border-white/10' : ''}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img 
        ref={imgRef}
        src={imgSrc}
        alt={cityName}
        className={`w-full h-full object-cover object-center scale-125 transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        width="200"
        height="150"
        fetchPriority="high"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          console.log(`Failed to load image: ${imgSrc}, using fallback`);
          setImgSrc(fallbackSrc);
        }}
      />
      <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 py-3">
        <p className="text-white text-[8px] sm:text-xs font-medium text-center truncate drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{cityName}</p>
      </div>
    </div>
  );
};
