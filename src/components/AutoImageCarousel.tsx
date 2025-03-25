
import React, { useEffect, useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { OptimizedImage } from "@/components/OptimizedImage";
import { cn } from "@/lib/utils";

interface AutoImageCarouselProps {
  images: string[];
  altPrefix: string;
  className?: string;
  autoplaySpeed?: number; // in milliseconds
  showControls?: boolean;
  aspectRatio?: "square" | "video" | "wide";
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

export const AutoImageCarousel = ({
  images,
  altPrefix,
  className,
  autoplaySpeed = 5000, // default 5 seconds per slide
  showControls = true,
  aspectRatio = "video",
  objectFit = "contain", // Changed default from "cover" to "contain" to prevent cropping
}: AutoImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  
  // Calculate aspect ratio class
  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/7]",
  }[aspectRatio];

  // Automatic rotation of slides
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, autoplaySpeed);
    
    return () => clearInterval(interval);
  }, [api, autoplaySpeed]);

  // When the carousel api changes slides
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    // Initial setup
    setCurrentIndex(api.selectedScrollSnap());
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const moveToIndex = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  // Function to handle image loading errors
  const handleImageError = (index: number) => {
    console.error(`Failed to load image at index ${index}:`, images[index]);
  };

  return (
    <div className={cn("w-full relative", className)}>
      <Carousel 
        className={cn("w-full", className)}
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className={cn("overflow-hidden rounded-lg", aspectRatioClass)}>
                <OptimizedImage
                  src={image}
                  alt={`${altPrefix} - Image ${index + 1}`}
                  className={`w-full h-full object-${objectFit} transition-transform duration-500 hover:scale-105`}
                  priority={index === 0}
                  onError={() => handleImageError(index)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {showControls && (
          <>
            <CarouselPrevious className="absolute left-4 z-10" />
            <CarouselNext className="absolute right-4 z-10" />
          </>
        )}
      </Carousel>
      
      {/* Slide indicators */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => moveToIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === currentIndex ? "w-6 bg-primary" : "w-2 bg-primary/30"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
