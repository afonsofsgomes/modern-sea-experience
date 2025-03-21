
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Map, Anchor, Ship, Navigation, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SeaBusMapImage = () => {
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={mapRef}
      className="py-12 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block py-1 px-3 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-3">
            SeaBus Network
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-blue-900">
            Discover Madeira by Sea
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our SeaBus connects the beautiful coastal cities of Madeira, providing a scenic and comfortable travel experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Map Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden shadow-lg col-span-1 lg:col-span-2"
          >
            <div className="relative aspect-[16/10] md:aspect-[16/9] w-full">
              <img 
                src="https://extranet.seayou.pt/photos/map-seabus-seayou.png" 
                alt="Map of SeaBus routes in Madeira" 
                className="w-full h-full object-cover" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80';
                }}
              />
            </div>

            <div className="bg-white p-4 rounded-b-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-center">
                  <Map className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-900">SeaBus Routes Network</span>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-lg">
                    <Anchor className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-xs text-blue-800">Funchal</span>
                  </div>
                  <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-lg">
                    <Ship className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-xs text-blue-800">Caniçal</span>
                  </div>
                  <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-lg">
                    <Anchor className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-xs text-blue-800">Calheta</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Route Information Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg p-6"
          >
            <div className="space-y-6">
              <div className="flex flex-col items-center sm:items-start">
                <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
                  <Ship className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Multiple Routes</h3>
                <p className="text-gray-600 text-center sm:text-left">
                  Connecting Funchal, Caniçal, and Calheta with spectacular coastal views
                </p>
              </div>
              
              <div className="flex flex-col items-center sm:items-start">
                <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
                  <Tag className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Affordable Pricing</h3>
                <p className="text-gray-600 text-center sm:text-left">
                  Roundtrips to/from Funchal at €39, Calheta↔Caniçal routes at €59
                </p>
              </div>
              
              <div className="flex flex-col items-center sm:items-start">
                <div className="bg-blue-600 text-white p-3 rounded-full mb-4">
                  <Navigation className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Flexible Schedule</h3>
                <p className="text-gray-600 text-center sm:text-left">
                  Departures Tuesday to Sunday with convenient timings to suit your plans
                </p>
              </div>
              
              <div className="mt-4 bg-white p-4 rounded-lg shadow-inner text-center">
                <p className="text-lg text-blue-900 font-medium">
                  Popular routes:
                </p>
                <p className="text-sm text-gray-700 my-2">
                  Funchal ↔ Caniçal | Funchal ↔ Calheta | Caniçal ↔ Calheta
                </p>
                <p className="text-xl font-bold text-red-500">
                  From €39
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-red-500 hover:bg-red-600 text-lg px-10"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Check Availability & Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};
