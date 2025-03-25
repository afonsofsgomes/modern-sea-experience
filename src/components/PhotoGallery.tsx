
import React, { useState, useEffect } from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface PhotoGalleryProps {
  images: string[];
  altPrefix: string;
  className?: string;
}

export const PhotoGallery = ({ images, altPrefix, className }: PhotoGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  // Reset touch states when dialog closes
  useEffect(() => {
    if (selectedImage === null) {
      setTouchStart(null);
      setTouchEnd(null);
    }
  }, [selectedImage]);
  
  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };
  
  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };

  // Mobile touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart || !touchEnd) return;
    
    // Minimum swipe distance (in pixels)
    const minSwipeDistance = 50;
    const distance = touchStart - touchEnd;
    
    // If the swipe distance is greater than the minimum, navigate
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swiped left, go to next image
        if (selectedImage !== null) {
          setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
        }
      } else {
        // Swiped right, go to previous image
        if (selectedImage !== null) {
          setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
        }
      }
    }
    
    // Prevent any default behavior
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <section className={`py-8 md:py-12 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-display font-medium text-center mb-8">Photo Gallery</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <Dialog key={index} open={selectedImage === index} onOpenChange={(open) => {
              if (!open) setSelectedImage(null);
              else setSelectedImage(index);
            }}>
              <DialogTrigger asChild>
                <div 
                  className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedImage(index)}
                >
                  <AspectRatio ratio={3/4}>
                    <img
                      src={image}
                      alt={`${altPrefix} - Photo ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </AspectRatio>
                </div>
              </DialogTrigger>
              
              {selectedImage === index && (
                <DialogContent 
                  className="sm:max-w-3xl max-h-[90vh] p-0 bg-black/95" 
                  onPointerDownOutside={(e) => e.preventDefault()}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        closeModal();
                      }}
                      className="absolute top-2 right-2 z-50 text-white bg-black/50 rounded-full p-1 hover:bg-black/70 transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                    
                    {/* Only show buttons on desktop */}
                    {!isMobile && (
                      <>
                        <button 
                          onClick={handlePrevious}
                          className="absolute left-2 z-40 text-white bg-black/50 rounded-full p-1 hover:bg-black/70 transition-colors"
                          onPointerDown={(e) => e.stopPropagation()}
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        
                        <button 
                          onClick={handleNext}
                          className="absolute right-2 z-40 text-white bg-black/50 rounded-full p-1 hover:bg-black/70 transition-colors"
                          onPointerDown={(e) => e.stopPropagation()}
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>
                      </>
                    )}
                    
                    <div 
                      className="w-full h-full flex items-center justify-center overflow-hidden" 
                      onClick={(e) => e.stopPropagation()}
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                    >
                      <img
                        src={images[selectedImage]}
                        alt={`${altPrefix} - Photo ${selectedImage + 1}`}
                        className="max-h-[80vh] w-auto"
                        loading="eager"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};
