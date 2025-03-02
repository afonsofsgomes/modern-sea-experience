
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Ship, Anchor, MapPin } from "lucide-react";

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 z-10" />
        <img
          src="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Boat sailing along Madeira's coastline"
          className={`object-cover w-full h-full transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          loading="eager"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-[calc(100vh-80px)] flex items-center">
        <motion.div 
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden"
          >
            <span className="inline-block py-1 px-3 text-xs font-medium bg-white/20 backdrop-blur-sm rounded-full mb-4 animate-slide-in">
              Premium Maritime Services in Madeira
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white mb-6 leading-tight"
          >
            Discover Madeira's Beauty from the Sea
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-base md:text-lg text-white/90 mb-8 max-w-lg"
          >
            Experience our comfortable SeaBus connections, private yacht charters, and unforgettable Porto Santo tours with expert local guides.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/booking">
              <div className="relative inline-block">
                <Button size="lg" className="w-full sm:w-auto relative z-10 bg-primary hover:bg-primary/90 transition-colors duration-300">
                  Book Your Journey
                </Button>
                <div className="absolute -inset-0.5 bg-primary/50 rounded-md blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-soft-pulse"></div>
              </div>
            </Link>
            <div className="flex gap-2">
              <Link to="/seabus">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 w-full sm:w-auto transition-all duration-300"
                >
                  <Anchor className="h-5 w-5 mr-2 animate-wave" />
                  SeaBus
                </Button>
              </Link>
              <Link to="/private-cruise">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 w-full sm:w-auto transition-all duration-300"
                >
                  <Ship className="h-5 w-5 mr-2 animate-float" />
                  Cruises
                </Button>
              </Link>
              <Link to="/porto-santo">
                <Button
                  variant="ghost"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 w-full sm:w-auto transition-all duration-300"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Porto Santo
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
};
