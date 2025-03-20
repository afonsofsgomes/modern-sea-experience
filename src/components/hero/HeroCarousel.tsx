
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { DestinationCard } from "./DestinationCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface HeroCarouselProps {
  destinations: Array<any>;
  fallbackImage: string;
}

export const HeroCarousel = ({ destinations, fallbackImage }: HeroCarouselProps) => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="max-w-6xl mx-auto px-1 sm:px-4 relative"
    >
      <Carousel 
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
          {destinations.map((destination, index) => (
            <CarouselItem key={destination.name} className="pl-1 sm:pl-2 md:pl-4 basis-1/2 sm:basis-1/2 lg:basis-1/3">
              <DestinationCard 
                destination={destination} 
                index={index} 
                fallbackImage={fallbackImage} 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2,
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="absolute left-[15%] top-1/2 -translate-y-1/2 z-10"
        >
          <CarouselPrevious className="sm:flex bg-white/30 text-white border-none hover:bg-white/50 h-8 w-8 sm:h-12 sm:w-12 shadow-md" />
        </motion.div>
        
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2,
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: "loop",
            delay: 1
          }}
          className="absolute right-[15%] top-1/2 -translate-y-1/2 z-10"
        >
          <CarouselNext className="sm:flex bg-white/30 text-white border-none hover:bg-white/50 h-8 w-8 sm:h-12 sm:w-12 shadow-md" />
        </motion.div>
      </Carousel>
      
      {/* Carousel indicators for mobile */}
      {isMobile && (
        <div className="flex justify-center mt-4 gap-1">
          {destinations.map((_, index) => (
            <div 
              key={index} 
              className="w-2 h-2 rounded-full bg-white/40"
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};
