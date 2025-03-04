import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Wifi } from "lucide-react";

export const SeaBusHero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[60vh] md:h-[75vh] overflow-hidden bg-blue-900 pt-16 md:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
          alt="Ocean Wave"
          className="w-full h-full object-cover object-center opacity-70"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-900/80" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white z-10 max-w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-2 md:mb-4"
        >
          SEA BUS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mb-6 md:mb-8"
        >
          Your hop-on hop-off boat tour in Madeira Island
        </motion.p>

        {/* Icon Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-8"
        >
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2">
              <Clock className="h-4 w-4 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm">9:30 - 17:00</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2">
              <Users className="h-4 w-4 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm">up to 22 PAX</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2">
              <MapPin className="h-4 w-4 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm">Funchal</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2">
              <Wifi className="h-4 w-4 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm">FREE WiFi</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-2 md:p-3 rounded-full mb-1 md:mb-2">
              <Calendar className="h-4 w-4 md:h-6 md:w-6" />
            </div>
            <span className="text-xs md:text-sm">Everyday</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button size="lg" onClick={scrollToBooking}>Book your SeaBus</Button>
        </motion.div>
      </div>
    </section>
  );
};
