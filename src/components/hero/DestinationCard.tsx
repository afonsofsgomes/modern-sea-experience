
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SeaBusCardContent } from "./SeaBusCardContent";

export interface DestinationCardProps {
  destination: {
    name: string;
    image: string;
    experienceDesc: string;
    stats: Array<{ label: string; value: string }>;
    link: string;
    buttonText: string;
    destinations?: Array<{
      name: string;
      image: string;
    }>;
  };
  index: number;
  fallbackImage: string;
}

export const DestinationCard = ({ destination, index, fallbackImage }: DestinationCardProps) => {
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
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </>
          )}
          <h3 className="absolute bottom-0 left-0 p-3 sm:p-4 text-white font-bold text-base sm:text-xl">{destination.name}</h3>
        </div>
        <CardContent className="p-3 sm:p-4 text-white flex flex-col h-[calc(100%-9rem)] sm:h-[calc(100%-12rem)]">
          <p className="text-xs sm:text-sm mb-2 sm:mb-4 flex-grow line-clamp-2 sm:line-clamp-3">{destination.experienceDesc}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 sm:gap-2">
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
              className="text-[10px] sm:text-xs whitespace-nowrap px-2 sm:px-3 py-1 sm:py-2"
            >
              <Link to={destination.link}>{destination.buttonText}</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
