
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
import { useEffect, useRef, useState, memo } from "react";

interface HeroCarouselProps {
  destinations: Array<any>;
  fallbackImage: string;
}

// Memoize the component to prevent unnecessary re-renders
export const HeroCarousel = memo(({ destinations, fallbackImage }: HeroCarouselProps) => {
  const isMobile = useIsMobile();
  const apiRef = useRef<any>(null);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const isVisibleRef = useRef(true);
  
  // Optimize auto-scroll functionality with IntersectionObserver
  useEffect(() => {
    // If auto-scroll is paused, don't set up the interval
    if (autoScrollPaused) return;
    
    // Create intersection observer to detect when carousel is visible
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    
    // Observe the carousel container
    const carouselElement = document.querySelector('.carousel-container');
    if (carouselElement) {
      observer.observe(carouselElement);
    }
    
    // Only scroll when visible and user hasn't interacted
    const interval = setInterval(() => {
      if (isVisibleRef.current && !userInteracted && apiRef.current) {
        apiRef.current.scrollNext();
      }
    }, 6000);
    
    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [autoScrollPaused, userInteracted]);
  
  // Optimize user interaction handler
  const handleUserInteraction = () => {
    if (userInteracted) return; // Prevent unnecessary state updates
    
    setUserInteracted(true);
    setAutoScrollPaused(true);
    
    // Resume auto-scrolling after 15 seconds of inactivity
    const timer = setTimeout(() => {
      setAutoScrollPaused(false);
      setUserInteracted(false);
    }, 15000);
    
    return () => clearTimeout(timer);
  };

  // Simplified animation with better performance
  const buttonAnimation = {
    animate: { 
      opacity: [0.7, 1, 0.7],
      transition: { 
        duration: 3,
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="max-w-6xl mx-auto px-1 sm:px-4 relative carousel-container"
      onClick={handleUserInteraction}
      onMouseEnter={handleUserInteraction}
      onTouchStart={handleUserInteraction}
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
        
        {/* Simplified navigation buttons with fixed type */}
        <motion.div
          variants={buttonAnimation}
          animate="animate"
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10"
        >
          <CarouselPrevious className="sm:flex bg-white/30 text-white border-none hover:bg-white/50 h-8 w-8 sm:h-12 sm:w-12 shadow-md" />
        </motion.div>
        
        <motion.div
          variants={buttonAnimation}
          animate="animate"
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10"
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
});

HeroCarousel.displayName = 'HeroCarousel';
