
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, Clock, Compass, Beer, Ship } from "lucide-react";
import GroupBookingDialog from "@/components/GroupBookingDialog";

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
          src="https://extranet.seayou.pt/photos/private2.jpg" 
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
          className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-2 md:mb-4 landscape:mt-12 sm:landscape:mt-16 md:landscape:mt-24"
        >
          Private Cruise
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white/20 text-white px-6 py-2 rounded-full mb-6 md:mb-8 text-sm md:text-base font-light tracking-wide backdrop-blur-sm"
        >
          Calheta or Caniçal
        </motion.div>
        
        {/* Icon Row with fixed sizes similar to SeaBus hero */}
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
            <span className="text-xs md:text-sm text-center">2.30h</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 md:w-20">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <Users className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm text-center">18 pax</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 md:w-20">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <Compass className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm text-center">South/North</span>
          </div>
          <div className="flex flex-col items-center justify-center w-16 md:w-20">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2 flex items-center justify-center w-10 h-10 md:w-12 md:h-12">
              <Beer className="h-5 w-5 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm text-center">Bar</span>
          </div>
        </motion.div>
        
        {/* Price Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-[#E95543]/90 text-white px-5 py-2 rounded-lg mb-5 backdrop-blur-sm shadow-md"
        >
          <div className="flex items-center justify-center gap-2">
            <span className="font-bold text-base md:text-lg">60€ per person</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
            <span className="text-sm md:text-base">Minimum 4 people</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="landscape:mb-8"
        >
          <Button 
            size="lg" 
            className="bg-[#E95543] hover:bg-[#E95543]/90 text-white"
            onClick={scrollToBooking}
          >
            Book Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
