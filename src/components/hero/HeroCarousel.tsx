
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
import { useEffect, useRef, useState, memo, useCallback } from "react";

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
  const timeoutRef = useRef<number | null>(null);
  
  // Use intersection observer to optimize performance by only auto-scrolling when visible
  useEffect(() => {
    if (autoScrollPaused) return;
    
    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1, rootMargin: '100px' }
    );
    
    // Observe the carousel container
    const carouselElement = document.querySelector('.carousel-container');
    if (carouselElement) {
      observer.observe(carouselElement);
    }
    
    // Use requestAnimationFrame for smoother performance
    let rafId = 0;
    let lastScrollTime = 0;
    const SCROLL_INTERVAL = 6000;
    
    const scrollLoop = (timestamp: number) => {
      if (!lastScrollTime) lastScrollTime = timestamp;
      
      const elapsed = timestamp - lastScrollTime;
      
      if (elapsed > SCROLL_INTERVAL) {
        lastScrollTime = timestamp;
        if (isVisibleRef.current && !userInteracted && apiRef.current) {
          apiRef.current.scrollNext();
        }
      }
      
      rafId = requestAnimationFrame(scrollLoop);
    };
    
    // Start animation loop with lower priority
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        rafId = requestAnimationFrame(scrollLoop);
      });
    } else {
      rafId = requestAnimationFrame(scrollLoop);
    }
    
    // Clean up
    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [autoScrollPaused, userInteracted]);
  
  // Optimize interaction handler
  const handleUserInteraction = useCallback(() => {
    if (userInteracted) return;
    
    setUserInteracted(true);
    setAutoScrollPaused(true);
    
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    
    // Resume auto-scrolling after inactivity
    timeoutRef.current = window.setTimeout(() => {
      setAutoScrollPaused(false);
      setUserInteracted(false);
      timeoutRef.current = null;
    }, 15000);
  }, [userInteracted]);
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Simplified animation for better performance
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
