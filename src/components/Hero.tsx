
// Updating import path to use lowercase button
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Ship, Wifi } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative h-[85vh] md:h-[90vh] overflow-hidden bg-blue-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sea"
          className="w-full h-full object-cover object-bottom opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-900/80" />
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 whitespace-nowrap"
        >
          YOUR NEXT ADVENTURE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl max-w-3xl mb-8"
        >
          Discover breathtaking sea routes and unforgettable experiences with
          SeaYou.
        </motion.p>

        {/* Icon Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-8"
        >
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-2">
              <Ship className="h-6 w-6" />
            </div>
            <span className="text-sm">Daily Routes</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-2">
              <Clock className="h-6 w-6" />
            </div>
            <span className="text-sm">9:00 - 18:00</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-2">
              <MapPin className="h-6 w-6" />
            </div>
            <span className="text-sm">Funchal</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-2">
              <Wifi className="h-6 w-6" />
            </div>
            <span className="text-sm">Free WiFi</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/booking">
            <Button size="lg">Book Your Trip</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
