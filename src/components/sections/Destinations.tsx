
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
            Discover amazing destinations around Madeira Island with our sea connections. Each location offers unique experiences and scenery.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16"
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
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <Coffee className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Visit the historic Old Town with cafés</p>
                </div>
                <div className="flex items-start">
                  <ShoppingBag className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Explore the vibrant Farmers' Market</p>
                </div>
              </div>
              <Link to="/seabus" className="block w-full">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  Book SeaBus Journey
                </Button>
              </Link>
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
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Hike the Ponta de São Lourenço trails</p>
                </div>
                <div className="flex items-start">
                  <Fish className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Sample fresh seafood in local restaurants</p>
                </div>
              </div>
              <Link to="/seabus" className="block w-full">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  Book SeaBus Journey
                </Button>
              </Link>
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
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <Sun className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Enjoy golden sand beaches</p>
                </div>
                <div className="flex items-start">
                  <Utensils className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Visit the rum distillery for tastings</p>
                </div>
              </div>
              <Link to="/seabus" className="block w-full">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  Book SeaBus Journey
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Desertas */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1622484211753-e69ce5d86f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Desertas Island" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-display font-medium mb-4 text-center">Desertas</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <Bird className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Observe rare seabirds and marine life</p>
                </div>
                <div className="flex items-start">
                  <Anchor className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Experience pristine natural reserves</p>
                </div>
              </div>
              <Link to="/private-cruise" className="block w-full">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  Book Private Cruise
                </Button>
              </Link>
            </div>
          </motion.div>
          
          {/* Porto Santo */}
          <motion.div variants={itemVariants} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-60 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Porto Santo" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-display font-medium mb-4 text-center">Porto Santo</h3>
              <div className="space-y-3 mb-4">
                <div className="flex items-start">
                  <Palmtree className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Relax on 9km of therapeutic golden beach</p>
                </div>
                <div className="flex items-start">
                  <Sun className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">Enjoy the calm, warm waters year-round</p>
                </div>
              </div>
              <Link to="/porto-santo" className="block w-full">
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  Book Porto Santo Trip
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
