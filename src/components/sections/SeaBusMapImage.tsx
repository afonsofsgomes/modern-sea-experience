
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Map, Anchor, Ship } from "lucide-react";

export const SeaBusMapImage = () => {
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={mapRef}
      className="py-16 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block py-1 px-3 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-3">
            SeaBus Route Map
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-blue-900">
            Our Coastal Connections
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our SeaBus connects the beautiful coastal cities of Madeira, providing a scenic and comfortable travel experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-xl overflow-hidden shadow-lg"
        >
          <div className="relative aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/8] w-full">
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

          <div className="bg-white p-5 rounded-b-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center">
                <Map className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-900">SeaBus Routes Network</span>
              </div>
              
              <div className="flex flex-wrap gap-4">
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
            
            <p className="text-xs text-gray-500 mt-4">
              Our SeaBus connects the main coastal cities of Madeira, providing a scenic and comfortable alternative to road travel.
              Enjoy breathtaking views of the coastline while traveling between destinations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
