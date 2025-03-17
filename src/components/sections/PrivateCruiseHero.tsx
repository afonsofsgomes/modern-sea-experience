
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Clock, Compass, Wifi, Calendar } from "lucide-react";

export const PrivateCruiseHero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden bg-[#253D7F] pt-20 md:pt-28 pb-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
          alt="Private Cruise" 
          className="w-full h-full object-cover object-center opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#253D7F]/30 to-[#253D7F]/80" />
      </div>
      
      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white z-10 max-w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-2 md:mb-4 landscape:mt-24"
        >
          PRIVATE
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#E95543] text-white px-8 py-3 rounded-md mb-6 md:mb-8 text-xl"
        >
          CRUISE - SPECIAL REQUEST
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl max-w-3xl mb-8 md:mb-10"
        >
          Your Private Cruise
        </motion.p>
        
        {/* Icon Row with larger sizes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-8 md:mb-10"
        >
          <div className="flex flex-col items-center justify-center w-20 md:w-24">
            <div className="bg-white/20 p-3 md:p-4 rounded-full mb-2 md:mb-3 flex items-center justify-center w-14 h-14 md:w-16 md:h-16">
              <Clock className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <span className="text-sm md:text-base text-center font-medium">2.5h</span>
          </div>
          <div className="flex flex-col items-center justify-center w-20 md:w-24">
            <div className="bg-white/20 p-3 md:p-4 rounded-full mb-2 md:mb-3 flex items-center justify-center w-14 h-14 md:w-16 md:h-16">
              <Users className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <span className="text-sm md:text-base text-center font-medium">up to 12 PAX</span>
          </div>
          <div className="flex flex-col items-center justify-center w-20 md:w-24">
            <div className="bg-white/20 p-3 md:p-4 rounded-full mb-2 md:mb-3 flex items-center justify-center w-14 h-14 md:w-16 md:h-16">
              <Wifi className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <span className="text-sm md:text-base text-center font-medium">FREE WiFi</span>
          </div>
          <div className="flex flex-col items-center justify-center w-20 md:w-24">
            <div className="bg-white/20 p-3 md:p-4 rounded-full mb-2 md:mb-3 flex items-center justify-center w-14 h-14 md:w-16 md:h-16">
              <Calendar className="h-7 w-7 md:h-8 md:w-8" />
            </div>
            <span className="text-sm md:text-base text-center font-medium">REFRESHMENTS</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center w-full"
        >
          <Button 
            size="lg" 
            className="bg-[#E95543] hover:bg-[#E95543]/90 text-white text-lg px-10 py-4"
            onClick={scrollToBooking}
          >
            BOOK NOW
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
