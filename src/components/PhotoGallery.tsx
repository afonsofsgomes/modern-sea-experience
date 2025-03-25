
import React, { useState } from 'react';
import { OptimizedImage } from './OptimizedImage';
import { AspectRatio } from './ui/aspect-ratio';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface PhotoGalleryProps {
  images: string[];
  altPrefix: string;
  className?: string;
}

export const PhotoGallery = ({ images, altPrefix, className }: PhotoGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
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

  return (
    <section className={`py-8 md:py-12 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-display font-medium text-center mb-8">Photo Gallery</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedImage(index)}
                >
                  <AspectRatio ratio={4/3}>
                    <OptimizedImage
                      src={image}
                      alt={`${altPrefix} - Photo ${index + 1}`}
                      className="w-full h-full"
                      objectFit="cover"
                    />
                  </AspectRatio>
                </div>
              </DialogTrigger>
              
              {selectedImage === index && (
                <DialogContent className="sm:max-w-3xl max-h-[90vh] p-0 bg-black/95">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <button 
                      onClick={closeModal}
                      className="absolute top-2 right-2 z-50 text-white bg-black/50 rounded-full p-1 hover:bg-black/70 transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                    
                    <button 
                      onClick={handlePrevious}
                      className="absolute left-2 z-40 text-white bg-black/50 rounded-full p-1 hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                      <OptimizedImage
                        src={image}
                        alt={`${altPrefix} - Photo ${index + 1}`}
                        className="max-h-[80vh] w-auto"
                        objectFit="contain"
                        priority={true}
                      />
                    </div>
                    
                    <button 
                      onClick={handleNext}
                      className="absolute right-2 z-40 text-white bg-black/50 rounded-full p-1 hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
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
