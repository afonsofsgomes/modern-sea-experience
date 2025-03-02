
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Coffee, ShoppingBag, Wine, Camera, MapPin, Fish, Sun, Mountain, Utensils } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

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

export const Destinations = () => {
  const destinationsRef = useRef(null);
  const destinationsInView = useInView(destinationsRef, { once: true, amount: 0.2 });

  return (
    <section className="py-16 bg-gray-50" ref={destinationsRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={destinationsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
            Explore Our Destinations
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-medium mb-6">
            What to Experience at Each Stop
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base text-muted-foreground max-w-2xl mx-auto">
            Make the most of your SeaBus journey by exploring these amazing destinations along Madeira's beautiful coastline.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate={destinationsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Funchal */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1593465678160-f99a8371fcf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Funchal" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-display font-medium mb-4 text-center">Funchal</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Coffee className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Visit the historic Old Town with its painted doors and traditional cafés</p>
                </div>
                <div className="flex items-start">
                  <ShoppingBag className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Explore the vibrant Mercado dos Lavradores (Farmers' Market)</p>
                </div>
                <div className="flex items-start">
                  <Wine className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Tour the famous Madeira wine cellars and enjoy tastings</p>
                </div>
                <div className="flex items-start">
                  <Camera className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Take the cable car to Monte for panoramic city views</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Caniçal */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1596627116790-af6f46ddddcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Caniçal" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-display font-medium mb-4 text-center">Caniçal</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Hike the dramatic Ponta de São Lourenço peninsula trails</p>
                </div>
                <div className="flex items-start">
                  <Fish className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Sample fresh seafood at traditional fishing village restaurants</p>
                </div>
                <div className="flex items-start">
                  <Camera className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Visit the Whale Museum to learn about Madeira's whaling history</p>
                </div>
                <div className="flex items-start">
                  <Sun className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Relax on Prainha, a unique black sand volcanic beach</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Calheta */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1596804796855-9f5c0e2bed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Calheta" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-display font-medium mb-4 text-center">Calheta</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Sun className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Enjoy golden sand beaches - rare in volcanic Madeira</p>
                </div>
                <div className="flex items-start">
                  <Utensils className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Visit the sugar cane factory and rum distillery for tastings</p>
                </div>
                <div className="flex items-start">
                  <Mountain className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Explore nearby levada walks with stunning ocean views</p>
                </div>
                <div className="flex items-start">
                  <Camera className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Visit Casa das Mudas Arts Centre for contemporary exhibitions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={destinationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link to="/seabus">
            <Button className="relative group">
              <span className="relative z-10">Plan Your SeaBus Journey Now</span>
              <div className="absolute -inset-0.5 bg-primary rounded-md opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
