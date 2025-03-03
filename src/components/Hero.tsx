
// Updating import path to use lowercase button
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
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }} className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-4 whitespace-normal max-w-4xl">
          Exclusive Sea Tours & Experiences in Madeira
        </motion.h1>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className="text-xl max-w-3xl mb-8">
          Enjoy unforgettable adventures with private experiences, SeaBus connections, tours to Desertas Island, and day trips to Porto Santo. Book securely with 24/7 support.
        </motion.p>

        {/* Icon Row */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-2">
              <Ship className="h-6 w-6" />
            </div>
            <span className="text-sm">Secure<br />Bookings</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-2">
              <Clock className="h-6 w-6" />
            </div>
            <span className="text-sm">24/7<br />Support</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-2">
              <MapPin className="h-6 w-6" />
            </div>
            <span className="text-sm">Trusted by<br />TripAdvisor</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-2">
              <Wifi className="h-6 w-6" />
            </div>
            <span className="text-sm">Flexible<br />Cancellations</span>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="flex flex-wrap justify-center gap-4">
          <Link to="/seabus">
            <Button size="lg" className="min-w-32 bg-secondary hover:bg-secondary/90 text-white">SeaBus</Button>
          </Link>
          <Link to="/porto-santo">
            <Button size="lg" className="min-w-32 bg-secondary hover:bg-secondary/90 text-white">Porto Santo</Button>
          </Link>
          <Link to="/private-cruise">
            <Button size="lg" className="min-w-32 bg-secondary hover:bg-secondary/90 text-white">Private Cruises</Button>
          </Link>
        </motion.div>
      </div>
    </section>;
};
