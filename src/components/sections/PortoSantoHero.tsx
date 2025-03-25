
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, Users, Wifi, Calendar, Info, Timer, ChevronDown } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

export const PortoSantoHero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-blue-900 pt-20 md:pt-28 pb-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://extranet.seayou.pt/photos/pxo_visit_madeira.jpg" 
          alt="Porto Santo Golden Beach Boat Tour" 
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Photo Credits - Fixed for mobile */}
      <div className="absolute bottom-3 right-3 z-20">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                className="p-2 bg-black/50 rounded-full hover:bg-black/60 transition-colors"
                type="button"
                aria-label="Photo credits"
                onClick={() => {}} // Empty handler to make it tappable on mobile
              >
                <Info className="h-4 w-4 text-white/90" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" className="bg-black/80 text-white border-0 text-xs">
              <p>Photo: <a href="https://visitmadeira.com/pt/onde-ir/porto-santo/porto-santo/" 
                 target="_blank" rel="noopener noreferrer" 
                 className="underline hover:text-blue-200">Visit Madeira</a>
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white z-10 max-w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-2 md:mb-4 landscape:mt-24"
        >
          PORTO SANTO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mb-6 md:mb-8"
        >
          Discover the Golden Island
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-8"
        >
          <div className="flex flex-col items-center justify-center w-16 md:w-20">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <Clock className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm text-center">1h</span>
          </div>
          
          <div className="flex flex-col items-center justify-center w-16 md:w-20">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <Users className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm text-center">12 PAX</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 md:w-20">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <Calendar className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm text-center">9:30h</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 md:w-20">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <Wifi className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm text-center">FREE WiFi</span>
          </div>
        </motion.div>
        
        {/* Paradise in 1 hour highlight - repositioned between highlights and CTA button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-6 md:mb-8"
        >
          <div className="flex items-center gap-2 bg-yellow-300 text-blue-900 px-4 py-2 rounded-full shadow-md mx-auto inline-flex">
            <Timer className="h-4 w-4 animate-pulse" />
            <span className="text-sm font-medium">Yes, that's right, paradise in just 1 hour!</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-2"
        >
          <Button 
            size="lg" 
            className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2"
            onClick={scrollToBooking}
          >
            BOOK NOW <ChevronDown className="h-4 w-4 animate-bounce" />
          </Button>
          <span className="text-xs text-white/80">Limited spots available</span>
        </motion.div>
      </div>
    </section>
  );
};
