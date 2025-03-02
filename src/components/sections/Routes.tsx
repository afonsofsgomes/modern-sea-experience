
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Anchor, Clock, Calendar, Ship } from "lucide-react";
import { Link } from "react-router-dom";

// Animation variants for staggered children
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

export const Routes = () => {
  // Refs for sections to animate on scroll
  const routesRef = useRef(null);
  // Check if sections are in view
  const routesInView = useInView(routesRef, { once: true, amount: 0.2 });

  return (
    <section id="routes" className="py-20" ref={routesRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={routesInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
            Our SeaBus Routes
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-medium mb-6">
            Fast & Comfortable Sea Connections
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base text-muted-foreground max-w-2xl mx-auto">
            Enjoy our reliable maritime transportation between Madeira's key destinations, 
            combining speed and comfort with breathtaking coastal views.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={routesInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ staggerChildren: 0.2, delayChildren: 0.5 }}
        >
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1675359220430-299ed4566518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Funchal Harbor" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Anchor className="w-5 h-5 text-primary mr-2" />
                <h3 className="font-display text-xl">Funchal ↔ Calheta</h3>
              </div>
              <p className="text-muted-foreground mb-4">Enjoy a 1h 15min scenic journey between Funchal and Calheta with departures at 10:15 on Wed, Thu, Fri.</p>
              <div className="flex justify-between text-sm">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 1h 15min</span>
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> Wed, Thu, Fri</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1602776253430-8eccdc064c33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Caniçal View" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Anchor className="w-5 h-5 text-primary mr-2" />
                <h3 className="font-display text-xl">Funchal ↔ Caniçal</h3>
              </div>
              <p className="text-muted-foreground mb-4">Quick 1-hour journey departing at 10:30 on Tue, Sat, Sun with beautiful ocean views and potential dolphin sightings.</p>
              <div className="flex justify-between text-sm">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 1h</span>
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> Tue, Sat, Sun</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Coastal Connection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Anchor className="w-5 h-5 text-primary mr-2" />
                <h3 className="font-display text-xl">Caniçal ↔ Calheta</h3>
              </div>
              <p className="text-muted-foreground mb-4">The longest journey at 2h 30min, connecting east and west Madeira with departures at 09:00 with a 17:00 return.</p>
              <div className="flex justify-between text-sm">
                <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 2h 30min</span>
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> All week</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={routesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link to="/seabus" className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-md hover:bg-primary/20 transition-colors">
            <Ship className="w-4 h-4 mr-2" /> View SeaBus Schedule & Book Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
