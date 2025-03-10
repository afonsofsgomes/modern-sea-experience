
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
          src="/lovable-uploads/c34d4041-df25-48dd-93ee-62f9d51a080d.jpg" 
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
          className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-2 md:mb-4 landscape:mt-24"
        >
          PRIVATE
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#E95543] text-white px-6 py-2 rounded-md mb-4 md:mb-6"
        >
          CRUISE - SPECIAL REQUEST
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mb-6 md:mb-8"
        >
          Your Private Cruise
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
            <span className="text-xs md:text-sm text-center">2-4h</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 md:w-20">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <Users className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm text-center">up to 12 PAX</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 md:w-20">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <Wifi className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm text-center">FREE WiFi</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 md:w-20">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <Calendar className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm text-center">REFRESHMENTS</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="bg-[#E95543] hover:bg-[#E95543]/90 text-white"
            onClick={scrollToBooking}
          >
            BOOK NOW
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
