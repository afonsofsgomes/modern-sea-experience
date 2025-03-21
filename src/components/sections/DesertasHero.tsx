
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, Users, Wifi, Calendar, Binoculars } from "lucide-react";

export const DesertasHero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-green-900 pt-20 md:pt-28 pb-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/fd11f644-1594-4d22-a02d-78fa2310f4e6.png" 
          alt="Desertas Islands" 
          className="w-full h-full object-cover object-center opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 to-green-900/80" />
      </div>
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white z-10 max-w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-2 md:mb-4 landscape:mt-24"
        >
          DESERTAS ISLANDS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mb-6 md:mb-8"
        >
          Explore the untouched nature and wildlife
        </motion.p>
        
        {/* Icon Row with fixed sizes and better alignment */}
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
            <span className="text-xs md:text-sm text-center">6h</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 md:w-20">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <Users className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm text-center">up to 18 PAX</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 md:w-20">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <Binoculars className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm text-center">Wildlife</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 md:w-20">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <Calendar className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm text-center">Seasonal</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={scrollToBooking}
          >
            BOOK NOW
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
