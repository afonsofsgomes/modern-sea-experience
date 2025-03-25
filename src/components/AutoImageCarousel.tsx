
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
  objectFit = "contain", // Default is "contain" to prevent cropping
}: AutoImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(images.length).fill(false));
  
  // Calculate aspect ratio class
  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[16/7]",
  }[aspectRatio];

  // Filter out failed images
  const validImages = images.filter((_, index) => !failedImages.has(index));

  // Automatic rotation of slides
  useEffect(() => {
    if (!api || validImages.length <= 1) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, autoplaySpeed);
    
    return () => clearInterval(interval);
  }, [api, autoplaySpeed, validImages.length]);

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
    setFailedImages(prev => {
      const updated = new Set(prev);
      updated.add(index);
      return updated;
    });
  };

  // Function to handle image loading success
  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  // If no valid images, show a message
  if (validImages.length === 0) {
    return (
      <div className={cn("w-full flex items-center justify-center p-8 bg-gray-100 rounded-lg", aspectRatioClass, className)}>
        <p className="text-gray-500 text-center">No images available</p>
      </div>
    );
  }

  // If images are still loading, show a loading state
  const allImagesLoaded = imagesLoaded.some(loaded => loaded);

  return (
    <div className={cn("w-full relative", className)}>
      {!allImagesLoaded && (
        <div className={cn("absolute inset-0 flex items-center justify-center bg-gray-100", aspectRatioClass)}>
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <Carousel 
        className={cn("w-full", className)}
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {validImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className={cn("overflow-hidden rounded-lg", aspectRatioClass)}>
                <OptimizedImage
                  src={image}
                  alt={`${altPrefix} - Image ${index + 1}`}
                  className={`w-full h-full object-${objectFit} transition-transform duration-500 hover:scale-105`}
                  priority={index === 0}
                  onError={() => handleImageError(index)}
                  onLoad={() => handleImageLoad(index)}
                  fallbackSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {showControls && validImages.length > 1 && (
          <>
            <CarouselPrevious className="absolute left-4 z-10" />
            <CarouselNext className="absolute right-4 z-10" />
          </>
        )}
      </Carousel>
      
      {/* Slide indicators - only show if multiple images */}
      {validImages.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {validImages.map((_, index) => (
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
      )}
    </div>
  );
};
