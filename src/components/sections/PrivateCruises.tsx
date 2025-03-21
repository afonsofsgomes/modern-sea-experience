
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Animation variants
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const PrivateCruises = () => {
  const cruisesRef = useRef(null);
  const cruisesInView = useInView(cruisesRef, { once: true, amount: 0.2 });

  return (
    <section id="cruises" className="py-20 bg-white" ref={cruisesRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={cruisesInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
            Private Experiences
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-medium mb-6">
            Luxury Private Cruises
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base text-muted-foreground max-w-2xl mx-auto">
            Charter your own private vessel for an exclusive experience of Madeira's breathtaking coastline. Choose your perfect route.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="group relative rounded-lg overflow-hidden h-[500px]"
            initial={{ opacity: 0, x: -50 }}
            animate={cruisesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="South Coast Cruise" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-display mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">South Coast Cruise</h3>
              <p className="text-white/80 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">Explore the stunning southern coastline of Madeira with stops at secluded beaches and beautiful bays</p>
              <p className="text-white/90 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75"><strong>TUESDAY, SATURDAY, SUNDAY</strong> | Departing from Calheta</p>
              <Link to="/private-cruise" className="inline-block bg-secondary text-white font-medium py-2 px-4 rounded-md hover:bg-secondary/90 transition-colors max-w-max transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                Book South Coast Trip
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="group relative rounded-lg overflow-hidden h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={cruisesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="North Coast Cruise" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-display mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">North Coast Cruise</h3>
              <p className="text-white/80 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">Discover the dramatic cliffs and hidden caves of Madeira's rugged northern coastline</p>
              <p className="text-white/90 mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75"><strong>WEDNESDAY, THURSDAY, FRIDAY</strong> | Departing from Caniçal</p>
              <Link to="/private-cruise" className="inline-block bg-secondary text-white font-medium py-2 px-4 rounded-md hover:bg-secondary/90 transition-colors max-w-max transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                Book North Coast Trip
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
