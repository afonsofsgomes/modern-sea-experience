
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { DestinationCard } from "./DestinationCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
      {/* Slide hint animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ 
          duration: 3,
          times: [0, 0.5, 1],
          repeat: 2,
          delay: 1.5
        }}
        className="absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-black/30 to-transparent z-10 pointer-events-none flex items-center justify-start pl-1"
      >
        <ChevronLeft className="text-white h-8 w-8 drop-shadow-lg" />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ 
          duration: 3,
          times: [0, 0.5, 1],
          repeat: 2,
          delay: 3
        }}
        className="absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-black/30 to-transparent z-10 pointer-events-none flex items-center justify-end pr-1"
      >
        <ChevronRight className="text-white h-8 w-8 drop-shadow-lg" />
      </motion.div>

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
        
        <CarouselPrevious className="sm:flex bg-white/20 text-white border-none hover:bg-white/30 -left-3 sm:-left-6 lg:-left-10 h-8 w-8 sm:h-10 sm:w-10" />
        <CarouselNext className="sm:flex bg-white/20 text-white border-none hover:bg-white/30 -right-3 sm:-right-6 lg:-right-10 h-8 w-8 sm:h-10 sm:w-10" />
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
