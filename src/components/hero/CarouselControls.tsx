
import { motion } from "framer-motion";
import { CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselControlsProps {
  onInteraction: () => void;
}

export const CarouselControls = ({ onInteraction }: CarouselControlsProps) => {
  return (
    <>
      {/* Left/Previous button */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2,
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10"
        onClick={onInteraction}
      >
        <CarouselPrevious className="sm:flex bg-white/30 text-white border-none hover:bg-white/50 h-8 w-8 sm:h-12 sm:w-12 shadow-md" />
      </motion.div>
      
      {/* Right/Next button */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2,
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "loop",
          delay: 1
        }}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10"
        onClick={onInteraction}
      >
        <CarouselNext className="sm:flex bg-white/30 text-white border-none hover:bg-white/50 h-8 w-8 sm:h-12 sm:w-12 shadow-md" />
      </motion.div>
    </>
  );
};
