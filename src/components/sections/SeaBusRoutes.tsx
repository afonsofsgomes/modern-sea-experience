
import { Button } from "@/components/ui/button";
import { Ship, Navigation, Tag } from "lucide-react";
import { motion } from "framer-motion";

export const SeaBusRoutes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-blue-900">
            Discover Madeira by Sea
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
                  <Ship className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Multiple Routes</h3>
                <p className="text-gray-600 text-center">
                  Connecting Funchal, Caniçal, and Calheta with spectacular coastal views
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
                  <Tag className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Pricing</h3>
                <p className="text-gray-600 text-center">
                  Roundtrips to/from Funchal at €39, Calheta↔Caniçal routes at €59
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
                  <Navigation className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Flexible Schedule</h3>
                <p className="text-gray-600 text-center">
                  Departures Tuesday to Sunday with convenient timings to suit your plans
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-inner mb-8">
              <p className="text-lg text-blue-900 font-medium mb-3">
                Explore our popular routes:
              </p>
              <p className="text-gray-700 mb-4">
                Funchal ↔ Caniçal | Funchal ↔ Calheta | Caniçal ↔ Calheta
              </p>
              <p className="text-2xl font-bold text-red-500">
                From €39 for Funchal routes, €59 for Caniçal↔Calheta
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-lg px-10"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Check Availability & Book Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
