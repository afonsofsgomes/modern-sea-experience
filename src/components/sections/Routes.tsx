
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, GaugeCircle, Ship, Waves, Wifi, Coffee, Smartphone, Sun } from "lucide-react";

// Animation variants for staggered children
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};
const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};
export const Routes = () => {
  // Refs for sections to animate on scroll
  const routesRef = useRef(null);
  // Check if sections are in view
  const routesInView = useInView(routesRef, {
    once: true,
    amount: 0.2
  });
  return <section id="routes" className="py-20" ref={routesRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-3xl mx-auto text-center mb-16" initial="hidden" animate={routesInView ? "visible" : "hidden"} variants={containerVariants}>
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
            Our SeaBus Catamaran
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-medium mb-6">
            Comfortable & Modern Vessel
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect combination of speed, comfort, and reliability with our modern catamaran designed for smooth sailing across Madeira's beautiful waters.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="rounded-lg overflow-hidden h-full flex items-center justify-center"
            initial={{
              opacity: 0,
              x: -30
            }} 
            animate={routesInView ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: -30
            }} 
            transition={{
              duration: 0.8
            }}
          >
            <img 
              alt="SeaBus Catamaran - Modern maritime transportation vessel in Madeira" 
              className="w-auto h-full max-h-[600px] object-cover rounded-lg shadow-lg" 
              src="https://extranet.seayou.pt/photos/boat1.jpg?quality=85&width=800" 
              srcSet="https://extranet.seayou.pt/photos/boat1.jpg?quality=85&width=400 400w, 
                      https://extranet.seayou.pt/photos/boat1.jpg?quality=85&width=800 800w, 
                      https://extranet.seayou.pt/photos/boat1.jpg?quality=85&width=1200 1200w"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              width="800"
              height="600"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
                console.log('Catamaran image failed to load, using fallback');
              }}
            />
          </motion.div>

          <motion.div initial="hidden" animate={routesInView ? "visible" : "hidden"} variants={containerVariants} className="grid grid-cols-2 gap-4 h-full">
            <motion.div variants={itemVariants} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
              <GaugeCircle className="w-10 h-10 text-secondary mb-3" />
              <h3 className="font-medium mb-1">Twin 400 HP</h3>
              <p className="text-sm text-muted-foreground">Powerful engines</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
              <Ship className="w-10 h-10 text-secondary mb-3" />
              <h3 className="font-medium mb-1">12m Length</h3>
              <p className="text-sm text-muted-foreground">Spacious vessel</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
              <Waves className="w-10 h-10 text-secondary mb-3" />
              <h3 className="font-medium mb-1">4.3m Beam</h3>
              <p className="text-sm text-muted-foreground">Stable platform</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
              <Shield className="w-10 h-10 text-secondary mb-3" />
              <h3 className="font-medium mb-1">Type 4 - MT</h3>
              <p className="text-sm text-muted-foreground">Safety certified</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
              <Wifi className="w-10 h-10 text-secondary mb-3" />
              <h3 className="font-medium mb-1">Free WiFi</h3>
              <p className="text-sm text-muted-foreground">Stay connected</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
              <Coffee className="w-10 h-10 text-secondary mb-3" />
              <h3 className="font-medium mb-1">Refreshments</h3>
              <p className="text-sm text-muted-foreground">Bar service</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
              <Smartphone className="w-10 h-10 text-secondary mb-3" />
              <h3 className="font-medium mb-1">Phone Charging</h3>
              <p className="text-sm text-muted-foreground">Stay powered</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center text-center">
              <Sun className="w-10 h-10 text-secondary mb-3" />
              <h3 className="font-medium mb-1">Solar Panels</h3>
              <p className="text-sm text-muted-foreground">Eco-friendly power</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
