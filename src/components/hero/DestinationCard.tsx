
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SeaBusCardContent } from "./SeaBusCardContent";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

export interface DestinationCardProps {
  destination: {
    name: string;
    image: string;
    experienceDesc: string;
    stats: Array<{ label: string; value: string }>;
    link: string;
    buttonText: string;
    rating?: number; // Optional rating field
    destinations?: Array<{
      name: string;
      image: string;
    }>;
  };
  index: number;
  fallbackImage: string;
  isVisible?: boolean; // Add this prop to optimize rendering
}

export const DestinationCard = ({ destination, index, fallbackImage, isVisible = true }: DestinationCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [shouldRender, setShouldRender] = useState(isVisible);
  
  // Handle visibility changes for performance optimization
  useEffect(() => {
    if (isVisible && !shouldRender) {
      setShouldRender(true);
    }
  }, [isVisible, shouldRender]);
  
  // If not visible and not yet rendered, return placeholder
  if (!shouldRender) {
    return (
      <div className="h-full">
        <Card className="overflow-hidden border-none shadow-lg h-full bg-white/10 backdrop-blur-sm">
          <div className="h-36 sm:h-48 bg-gray-700/50 animate-pulse"></div>
          <div className="p-3 sm:p-4">
            <div className="h-4 w-3/4 bg-white/20 rounded mb-2"></div>
            <div className="h-8 w-full bg-white/10 rounded"></div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="overflow-hidden border-none shadow-lg h-full bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
        <div className="relative h-36 sm:h-48">
          {/* Special rendering for SeaBus with 3 destinations */}
          {destination.name === "SeaBus Connections" ? (
            <SeaBusCardContent fallbackImage={fallbackImage} />
          ) : (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-700/50 animate-pulse"></div>
              )}
              <img 
                src={destination.image} 
                alt={destination.name} 
                className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </>
          )}
          {/* Moved title position for SeaBus card specifically */}
          <h3 className={`absolute ${destination.name === "SeaBus Connections" ? "top-0 pt-1" : "bottom-0"} left-0 p-3 sm:p-4 text-white font-bold text-base sm:text-xl bg-black/40 ${destination.name === "SeaBus Connections" ? "w-full text-center rounded-t-lg" : ""}`}>
            {destination.name}
          </h3>
        </div>
        <CardContent className="p-3 sm:p-4 text-white flex flex-col h-[calc(100%-9rem)] sm:h-[calc(100%-12rem)]">
          <p className="text-xs sm:text-sm mb-2 sm:mb-4 flex-grow line-clamp-2 sm:line-clamp-3">{destination.experienceDesc}</p>
          
          {/* Rating display */}
          {destination.rating && (
            <div className="flex items-center mb-2">
              <div className="flex text-yellow-400 mr-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${i < Math.floor(destination.rating || 0) ? 'fill-yellow-400' : ''}`} 
                  />
                ))}
              </div>
              <span className="text-[10px] sm:text-xs">{destination.rating.toFixed(1)}</span>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <div className="hidden sm:flex items-center gap-1 sm:gap-2">
              <div className="bg-white/20 rounded p-1 text-[10px] sm:text-xs">
                {destination.stats[0].value}
              </div>
              <div className="bg-white/20 rounded p-1 text-[10px] sm:text-xs">
                {destination.stats[1].value}
              </div>
            </div>
            <Button 
              size="sm" 
              variant="secondary" 
              className="text-[10px] sm:text-xs whitespace-nowrap px-2 sm:px-3 py-1 sm:py-2 w-full sm:w-auto min-w-0 truncate"
            >
              <Link to={destination.link} className="truncate block w-full">
                {destination.buttonText}
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
