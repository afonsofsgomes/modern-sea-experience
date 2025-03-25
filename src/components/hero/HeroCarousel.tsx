
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

// Memoize the destination card to prevent unnecessary re-renders
const MemoizedDestinationCard = memo(DestinationCard);

interface HeroCarouselProps {
  destinations: Array<any>;
  fallbackImage: string;
}

export const HeroCarousel = ({ destinations, fallbackImage }: HeroCarouselProps) => {
  const isMobile = useIsMobile();
  const apiRef = useRef<any>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Use IntersectionObserver to only auto-scroll when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
          // Pause auto-scroll when not in viewport
          if (!entry.isIntersecting) {
            setAutoScrollPaused(true);
          } else if (!userInteracted) {
            setAutoScrollPaused(false);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    
    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, [userInteracted]);
  
  // Auto-scroll functionality - Optimized to only run when visible and not paused
  useEffect(() => {
    if (autoScrollPaused || !isVisible) return;
    
    // Schedule scrolling for idle periods
    let scrollTimerId: number;
    const scheduleScroll = () => {
      scrollTimerId = window.setTimeout(() => {
        if (apiRef.current && !userInteracted && isVisible) {
          apiRef.current.scrollNext();
        }
        scheduleScroll();
      }, 6000); // Auto-scroll every 6 seconds
    };
    
    scheduleScroll();
    
    return () => {
      window.clearTimeout(scrollTimerId);
    };
  }, [autoScrollPaused, userInteracted, isVisible]);
  
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

  return (
    <div
      ref={carouselRef}
      className="max-w-6xl mx-auto px-1 sm:px-4 relative opacity-0 animate-fade-in"
      style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
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
              <MemoizedDestinationCard 
                destination={destination} 
                index={index} 
                fallbackImage={fallbackImage} 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 opacity-70 hover:opacity-100 transition-opacity">
          <CarouselPrevious className="sm:flex bg-white/30 text-white border-none hover:bg-white/50 h-8 w-8 sm:h-12 sm:w-12 shadow-md" />
        </div>
        
        <div className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 opacity-70 hover:opacity-100 transition-opacity">
          <CarouselNext className="sm:flex bg-white/30 text-white border-none hover:bg-white/50 h-8 w-8 sm:h-12 sm:w-12 shadow-md" />
        </div>
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
    </div>
  );
};
