
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Ship, Clock, MapPin, Sun, ArrowRight, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const PrivateCruiseOptions = () => {
  const [activeRoute, setActiveRoute] = useState<'north' | 'south'>('north');
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
            Customizable Tours
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Your Perfect Private Cruise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose between our North and South coast routes or create your own custom itinerary. Our private cruises offer the ultimate in flexible, personalized touring.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {/* North Route */}
          <div>
            <motion.div 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${activeRoute === 'north' ? 'ring-2 ring-primary' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="North Coast Route" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white mb-1">North Coast Experience</h3>
                  <p className="text-white/90 text-sm">Explore caves, waterfalls & dramatic cliffs</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Discover the wild beauty of Madeira's north coast with our exclusive private cruise. Sail past impressive cliffs, explore hidden caves, and spot dolphins in their natural habitat.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Ship className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">Exclusive Boat</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">2.5-8 Hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">Porto Moniz</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">Up to 18 Pax</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Sun className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">Swimming Stops</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">€60</div>
                    <div className="text-sm text-gray-500">per passenger</div>
                  </div>
                  <Link to="#booking">
                    <Button variant="outline" className="flex gap-1 items-center">
                      Book This Route <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* South Route */}
          <div>
            <motion.div 
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${activeRoute === 'south' ? 'ring-2 ring-primary' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1591971737242-fea16a4f3bad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="South Coast Route" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-xl font-bold text-white mb-1">South Coast Experience</h3>
                  <p className="text-white/90 text-sm">Sunshine, calm waters & scenic beaches</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Cruise along Madeira's sunny south coast in complete privacy. Enjoy calm seas, beautiful towns, and secluded swimming spots with your friends and family.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Ship className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">Exclusive Boat</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">2.5-8 Hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">Funchal</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">Up to 18 Pax</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Sun className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-600">Swimming Stops</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">€60</div>
                    <div className="text-sm text-gray-500">per passenger</div>
                  </div>
                  <Link to="#booking">
                    <Button variant="outline" className="flex gap-1 items-center">
                      Book This Route <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
