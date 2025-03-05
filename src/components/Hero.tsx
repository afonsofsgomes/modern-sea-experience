
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Ship, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  return <section className="relative h-[85vh] md:h-[90vh] overflow-hidden bg-[#253D7F]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1628413283166-a7666966d26b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sea" className="w-full h-full object-cover object-bottom opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#253D7F]/30 to-[#253D7F]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 max-w-4xl leading-tight pt-16 sm:pt-0 whitespace-normal sm:whitespace-nowrap"
        >
          Exclusive Sea Tours in Madeira
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.1 }} 
          className="text-base sm:text-lg md:text-xl max-w-3xl mb-6 md:mb-8 px-2"
        >
          Enjoy unforgettable adventures with private experiences, SeaBus connections, tours to Desertas Island, and day trips to Porto Santo.
        </motion.p>

        {/* Icon Row - Fixed alignment issues */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mb-8 w-full max-w-lg mx-auto"
        >
          <div className="flex flex-col items-center justify-center h-24">
            <div className="bg-white/20 p-3 rounded-full mb-2 flex items-center justify-center w-12 h-12">
              <Ship className="h-6 w-6" />
            </div>
            <span className="text-xs sm:text-sm text-center">Secure<br />Bookings</span>
          </div>
          <div className="flex flex-col items-center justify-center h-24">
            <div className="bg-white/20 p-3 rounded-full mb-2 flex items-center justify-center w-12 h-12">
              <Clock className="h-6 w-6" />
            </div>
            <span className="text-xs sm:text-sm text-center">24/7<br />Support</span>
          </div>
          <div className="flex flex-col items-center justify-center h-24">
            <div className="bg-white/20 p-3 rounded-full mb-2 flex items-center justify-center w-12 h-12">
              <MapPin className="h-6 w-6" />
            </div>
            <span className="text-xs sm:text-sm text-center">Trusted by<br />TripAdvisor</span>
          </div>
          <div className="flex flex-col items-center justify-center h-24">
            <div className="bg-white/20 p-3 rounded-full mb-2 flex items-center justify-center w-12 h-12">
              <Wifi className="h-6 w-6" />
            </div>
            <span className="text-xs sm:text-sm text-center">Flexible<br />Cancellations</span>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.3 }} 
          className="flex flex-wrap justify-center gap-3 w-full max-w-lg px-2"
        >
          <div className="flex flex-row justify-center gap-2 w-full">
            <Link to="/seabus" className="flex-1">
              <Button size="lg" variant="primary" className="w-full text-xs sm:text-sm h-10 whitespace-nowrap">SeaBus</Button>
            </Link>
            <Link to="/porto-santo" className="flex-1">
              <Button size="lg" variant="primary" className="w-full text-xs sm:text-sm h-10 whitespace-nowrap">Porto Santo</Button>
            </Link>
            <Link to="/private-cruise" className="flex-1">
              <Button size="lg" variant="primary" className="w-full text-xs sm:text-sm h-10 whitespace-nowrap">Private Cruises</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>;
};
