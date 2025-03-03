
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Coffee, ShoppingBag, Wine, Camera, MapPin, Fish, Sun, Mountain, Utensils, Anchor, Palmtree, Bird } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" ref={destinationsRef}>
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
            Discover amazing destinations around Madeira Island with our sea connections. Each location offers unique experiences and scenery.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {/* Funchal */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={destinationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative h-[400px] overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1593465678160-f99a8371fcf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Funchal" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-xl">
                <h3 className="text-2xl font-display text-white mb-3">Funchal</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                      <Coffee className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-sm text-white/90">Historic Old Town with cafés</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                      <ShoppingBag className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-sm text-white/90">Vibrant Farmers' Market</p>
                  </div>
                </div>
                <Link to="/seabus" className="block">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white relative overflow-hidden group">
                    <span className="relative z-10">Book SeaBus Journey</span>
                    <div className="absolute -inset-0.5 bg-secondary/30 rounded-md blur opacity-0 group-hover:opacity-70 transition duration-300 group-hover:animate-pulse"></div>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Caniçal */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={destinationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative h-[400px] overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1596627116790-af6f46ddddcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Caniçal" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-xl">
                <h3 className="text-2xl font-display text-white mb-3">Caniçal</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                      <MapPin className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-sm text-white/90">Ponta de São Lourenço trails</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                      <Fish className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-sm text-white/90">Fresh seafood restaurants</p>
                  </div>
                </div>
                <Link to="/seabus" className="block">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white relative overflow-hidden group">
                    <span className="relative z-10">Book SeaBus Journey</span>
                    <div className="absolute -inset-0.5 bg-secondary/30 rounded-md blur opacity-0 group-hover:opacity-70 transition duration-300 group-hover:animate-pulse"></div>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Calheta */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={destinationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative h-[400px] overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1596804796855-9f5c0e2bed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Calheta" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-xl">
                <h3 className="text-2xl font-display text-white mb-3">Calheta</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                      <Sun className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-sm text-white/90">Golden sand beaches</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                      <Utensils className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-sm text-white/90">Rum distillery tastings</p>
                  </div>
                </div>
                <Link to="/seabus" className="block">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white relative overflow-hidden group">
                    <span className="relative z-10">Book SeaBus Journey</span>
                    <div className="absolute -inset-0.5 bg-secondary/30 rounded-md blur opacity-0 group-hover:opacity-70 transition duration-300 group-hover:animate-pulse"></div>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Desertas */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={destinationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative h-[400px] overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1622484211753-e69ce5d86f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Desertas Island" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-xl">
                <h3 className="text-2xl font-display text-white mb-3">Desertas</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                      <Bird className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-sm text-white/90">Rare seabirds and marine life</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                      <Anchor className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-sm text-white/90">Pristine natural reserves</p>
                  </div>
                </div>
                <Link to="/private-cruise" className="block">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white relative overflow-hidden group">
                    <span className="relative z-10">Book Private Cruise</span>
                    <div className="absolute -inset-0.5 bg-secondary/30 rounded-md blur opacity-0 group-hover:opacity-70 transition duration-300 group-hover:animate-pulse"></div>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Porto Santo */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={destinationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group relative h-[400px] overflow-hidden rounded-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Porto Santo" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-xl">
                <h3 className="text-2xl font-display text-white mb-3">Porto Santo</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                      <Palmtree className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-sm text-white/90">9km of therapeutic golden beach</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                      <Sun className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-sm text-white/90">Calm, warm waters year-round</p>
                  </div>
                </div>
                <Link to="/porto-santo" className="block">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white relative overflow-hidden group">
                    <span className="relative z-10">Book Porto Santo Trip</span>
                    <div className="absolute -inset-0.5 bg-secondary/30 rounded-md blur opacity-0 group-hover:opacity-70 transition duration-300 group-hover:animate-pulse"></div>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
