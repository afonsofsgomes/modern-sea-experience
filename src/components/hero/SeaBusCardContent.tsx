
import { ImageWithFallback } from "@/components/ImageWithFallback";

interface SeaBusCardContentProps {
  fallbackImage: string;
}

export const SeaBusCardContent = ({ fallbackImage }: SeaBusCardContentProps) => {
  return (
    <div className="flex h-full">
      {/* Cities arranged horizontally instead of vertically */}
      <LocationImage 
        imageSrc="https://extranet.seayou.pt/photos/Calheta.jpg" 
        fallbackSrc={fallbackImage} 
        cityName="Calheta" 
        hasBorder={true} 
      />
      
      <LocationImage 
        imageSrc="https://extranet.seayou.pt/photos/Funchal.jpg" 
        fallbackSrc={fallbackImage} 
        cityName="Funchal" 
        hasBorder={true} 
      />
      
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
  return (
    <div className={`h-full w-1/3 relative overflow-hidden ${hasBorder ? 'border-r border-white/10' : ''}`}>
      <ImageWithFallback 
        src={imageSrc}
        fallbackSrc={fallbackSrc}
        alt={cityName}
        className="w-full h-full object-cover"
        onLoad={() => {
          // Force the browser to render the image immediately
          window.dispatchEvent(new Event('resize'));
        }}
      />
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent py-2">
        <p className="text-white text-[8px] sm:text-xs font-medium text-center truncate drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{cityName}</p>
      </div>
    </div>
  );
};
