
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
import { useEffect, useRef, useState, useCallback } from "react";

interface HeroCarouselProps {
  destinations: Array<any>;
  fallbackImage: string;
}

export const HeroCarousel = ({ destinations, fallbackImage }: HeroCarouselProps) => {
  const isMobile = useIsMobile();
  const apiRef = useRef<any>(null);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const interactionTimerRef = useRef<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([0, 1, 2]);
  
  // Update visible items when currentIndex changes
  useEffect(() => {
    const newVisibleItems = [];
    const length = destinations.length;
    
    // Include current item and more surrounding items for better performance
    for (let i = -2; i <= 4; i++) {
      // Handle wrapping around for loop effect
      const index = (currentIndex + i + length) % length;
      if (!newVisibleItems.includes(index)) {
        newVisibleItems.push(index);
      }
    }
    
    setVisibleItems(newVisibleItems);
  }, [currentIndex, destinations.length]);
  
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
  
  // Auto-scroll functionality with performance optimizations
  useEffect(() => {
    // If auto-scroll is paused, don't set up the interval
    if (autoScrollPaused) return;
    
    const interval = setInterval(() => {
      if (apiRef.current) {
        apiRef.current.scrollNext();
        setCurrentIndex((prev) => (prev + 1) % destinations.length);
      }
    }, 6000); // Auto-scroll every 6 seconds for a slow pace
    
    // Clean up interval on unmount or when paused state changes
    return () => clearInterval(interval);
  }, [autoScrollPaused, destinations.length]);
  
  // Function to pause auto-scrolling temporarily when user interacts
  const handleUserInteraction = useCallback(() => {
    setAutoScrollPaused(true);
    
    // Clear any existing timer
    if (interactionTimerRef.current) {
      window.clearTimeout(interactionTimerRef.current);
    }
    
    // Resume auto-scrolling after 15 seconds of inactivity
    interactionTimerRef.current = window.setTimeout(() => {
      setAutoScrollPaused(false);
    }, 15000);
  }, []);
  
  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (interactionTimerRef.current) {
        window.clearTimeout(interactionTimerRef.current);
      }
    };
  }, []);

  // Handle carousel slide change
  const handleSlideChange = useCallback(() => {
    if (apiRef.current && typeof apiRef.current.selectedScrollSnap === 'function') {
      const index = apiRef.current.selectedScrollSnap();
      setCurrentIndex(index);
    }
    handleUserInteraction();
  }, [handleUserInteraction]);

  // Force update on window resize to fix any rendering issues
  useEffect(() => {
    const handleResize = () => {
      if (apiRef.current) {
        apiRef.current.reInit();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        }}
        className="w-full"
        setApi={(api) => {
          apiRef.current = api;
        }}
        onSelect={() => {
          handleSlideChange();
        }}
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
        
        {/* Left/Previous button */}
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
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10"
          onClick={handleUserInteraction}
        >
          <CarouselPrevious className="sm:flex bg-white/30 text-white border-none hover:bg-white/50 h-8 w-8 sm:h-12 sm:w-12 shadow-md" />
        </motion.div>
        
        {/* Right/Next button */}
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
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10"
          onClick={handleUserInteraction}
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
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/40'} transition-colors`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};
