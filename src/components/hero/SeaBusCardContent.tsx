
import { ImageWithFallback } from "@/components/ImageWithFallback";

interface SeaBusCardContentProps {
  fallbackImage: string;
}

export const SeaBusCardContent = ({ fallbackImage }: SeaBusCardContentProps) => {
  return (
    <div className="flex flex-row h-full">
      {/* First city: Calheta */}
      <LocationImage 
        imageSrc="/images/calheta.jpg" 
        fallbackSrc={fallbackImage} 
        cityName="Calheta" 
        hasBorder={true} 
      />
      
      {/* Second city: Funchal (middle) */}
      <LocationImage 
        imageSrc="/images/funchal.jpg" 
        fallbackSrc={fallbackImage} 
        cityName="Funchal" 
        hasBorder={true} 
      />
      
      {/* Third city: Caniçal */}
      <LocationImage 
        imageSrc="/images/canical.jpg" 
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
  return (
    <div className={`w-1/3 h-full relative overflow-hidden ${hasBorder ? 'border-r border-white/10' : ''}`}>
      <ImageWithFallback 
        src={imageSrc}
        fallbackSrc={fallbackSrc}
        alt={cityName}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-1">
        <p className="text-white text-[10px] sm:text-xs font-medium text-center truncate">{cityName}</p>
      </div>
    </div>
  );
};
