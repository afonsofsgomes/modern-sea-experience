
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const PortoSantoTours = () => {
  const toursRef = useRef(null);
  const toursInView = useInView(toursRef, { once: true, amount: 0.2 });

  return (
    <section id="tours" className="py-24 bg-gray-50" ref={toursRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={toursInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
              Island Hopping
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Porto Santo Golden Island
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              Experience the therapeutic golden sands of Porto Santo with our dedicated ferry service. Our comfortable vessels make the journey part of your vacation.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              Choose from day trips with guided tours or transport-only options for those who prefer to explore independently. Special packages available for overnight stays.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div 
                className="bg-white rounded-md p-6 flex-1 min-w-[160px] hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-3xl font-medium mb-2">9km</h3>
                <p className="text-muted-foreground">Golden Beach</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-md p-6 flex-1 min-w-[160px] hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-3xl font-medium mb-2">2h</h3>
                <p className="text-muted-foreground">Round-Sea Trip Time</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-md p-6 flex-1 min-w-[160px] hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-3xl font-medium mb-2">Wed-Fri</h3>
                <p className="text-muted-foreground">Departures</p>
              </motion.div>
            </div>
            <div className="mt-8">
              <Link to="/porto-santo">
                <Button className="relative overflow-hidden group">
                  <span className="relative z-10">Explore Porto Santo Options</span>
                  <div className="absolute -inset-0.5 bg-primary/30 rounded-md blur opacity-0 group-hover:opacity-70 transition duration-300 group-hover:animate-soft-pulse"></div>
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={toursInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-square rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Porto Santo Golden Beach" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <motion.div 
              className="absolute -bottom-8 -left-8 w-2/3 aspect-video glass-card p-6 rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={toursInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="font-display text-lg mb-2">Health & Wellness</h3>
              <p className="text-sm text-muted-foreground">
                Porto Santo's sands are known for their therapeutic properties, perfect for natural spa treatments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
