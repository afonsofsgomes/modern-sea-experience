
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { DestinationCard } from "./DestinationCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import { CarouselControls } from "./CarouselControls";
import { CarouselIndicators } from "./CarouselIndicators";
import { useCarouselController } from "@/hooks/use-carousel-controller";

interface HeroCarouselProps {
  destinations: Array<any>;
  fallbackImage: string;
}

export const HeroCarousel = ({ destinations, fallbackImage }: HeroCarouselProps) => {
  const isMobile = useIsMobile();
  const { 
    apiRef, 
    currentIndex, 
    visibleItems, 
    handleUserInteraction, 
    handleSlideChange 
  } = useCarouselController({ itemsCount: destinations.length });
  
  // Preload all images initially for better UX
  useEffect(() => {
    const preloadAllImages = () => {
      destinations.forEach(destination => {
        if (destination && destination.image) {
          const img = new Image();
          img.src = destination.image;
        }
      });
    };
    
    preloadAllImages();
  }, [destinations]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="max-w-6xl mx-auto px-1 sm:px-4 relative"
      onClick={handleUserInteraction}
      onKeyDown={handleUserInteraction}
    >
      <Carousel 
        opts={{
          align: "start",
          loop: true,
          dragFree: false,
          containScroll: "trimSnaps",
          duration: 25, // Controls the animation speed
        }}
        className="w-full"
        setApi={(api) => {
          apiRef.current = api;
        }}
        onSelect={handleSlideChange}
      >
        <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
          {destinations.map((destination, index) => (
            <CarouselItem 
              key={destination.name} 
              className="pl-1 sm:pl-2 md:pl-4 basis-1/2 sm:basis-1/2 lg:basis-1/3"
            >
              <DestinationCard 
                destination={destination} 
                index={index} 
                fallbackImage={fallbackImage} 
                isVisible={visibleItems.includes(index)} 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselControls onInteraction={handleUserInteraction} />
      </Carousel>
      
      {/* Carousel indicators for mobile */}
      {isMobile && (
        <CarouselIndicators 
          totalItems={destinations.length}
          currentIndex={currentIndex}
        />
      )}
    </motion.div>
  );
};
