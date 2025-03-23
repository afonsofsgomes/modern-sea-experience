
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
import { useEffect, useRef, useState } from "react";

interface HeroCarouselProps {
  destinations: Array<any>;
  fallbackImage: string;
}

export const HeroCarousel = ({ destinations, fallbackImage }: HeroCarouselProps) => {
  const isMobile = useIsMobile();
  const apiRef = useRef<any>(null);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  
  // Auto-scroll functionality - Optimized to pause when not in viewport
  useEffect(() => {
    // If auto-scroll is paused, don't set up the interval
    if (autoScrollPaused) return;
    
    // Use requestIdleCallback (or fallback to setTimeout) to schedule work when the main thread is idle
    const idleCallback = 'requestIdleCallback' in window ? 
      window.requestIdleCallback : 
      (callback: () => void) => setTimeout(callback, 1);
    
    const scrollNext = () => {
      idleCallback(() => {
        if (apiRef.current && !userInteracted) {
          apiRef.current.scrollNext();
        }
      });
    };
    
    const interval = setInterval(scrollNext, 6000); // Auto-scroll every 6 seconds
    
    return () => {
      clearInterval(interval);
      if ('cancelIdleCallback' in window) {
        (window as any).cancelIdleCallback(idleCallback);
      }
    };
  }, [autoScrollPaused, userInteracted]);
  
  // Optimize animations to reduce main thread work
  const handleUserInteraction = () => {
    setUserInteracted(true);
    setAutoScrollPaused(true);
    
    // Resume auto-scrolling after 15 seconds of inactivity
    const timer = setTimeout(() => {
      setAutoScrollPaused(false);
      setUserInteracted(false);
    }, 15000);
    
    return () => clearTimeout(timer);
  };

  // Fixed animation variants with properly typed repeatType
  const buttonAnimation = {
    animate: { 
      opacity: [0.7, 1, 0.7],
      transition: { 
        duration: 3,
        times: [0, 0.5, 1],
        repeat: Infinity,
        repeatType: "loop" as const // Explicitly typed as "loop"
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="max-w-6xl mx-auto px-1 sm:px-4 relative"
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
        
        {/* Simplified animation for navigation buttons with fixed type */}
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
};
