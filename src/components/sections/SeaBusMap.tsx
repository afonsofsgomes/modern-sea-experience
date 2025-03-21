
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Map, Ship } from "lucide-react";

const IMAGE_GALLERY = [
  {
    src: "https://extranet.seayou.pt/photos/Funchal.jpg",
    alt: "Funchal SeaBus Tour",
    caption: "Scenic views of Funchal's coast"
  },
  {
    src: "https://extranet.seayou.pt/photos/Canical.jpg",
    alt: "Caniçal SeaBus Tour",
    caption: "Exploring the eastern shores"
  },
  {
    src: "https://extranet.seayou.pt/photos/Calheta.jpg",
    alt: "Calheta SeaBus Tour",
    caption: "Beautiful Calheta coast"
  },
  {
    src: "https://extranet.seayou.pt/photos/boat1.jpg",
    alt: "SeaBus Experience",
    caption: "Comfortable journey between destinations"
  }
];

const ROUTE_POINTS = [
  { city: "Funchal", coordinates: { x: "55%", y: "60%" } },
  { city: "Caniçal", coordinates: { x: "75%", y: "52%" } },
  { city: "Calheta", coordinates: { x: "35%", y: "58%" } }
];

export const SeaBusMap = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block py-1 px-3 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-3">
            Sea Connections
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-blue-900">
            Discovering Madeira by Sea
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the stunning coastline of Madeira with our SeaBus connections between Funchal, Caniçal, and Calheta.
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative bg-blue-50 rounded-xl overflow-hidden shadow-lg mb-12"
        >
          <div className="relative h-[400px] md:h-[500px] p-4">
            {/* Map Image */}
            <img
              src="https://extranet.seayou.pt/photos/madeira-map.jpg"
              alt="Madeira Island Map"
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1577724822078-0bce7823a41c?q=80&w=2574&auto=format&fit=crop';
              }}
            />

            {/* Map Overlay */}
            <div className="absolute inset-0 bg-blue-900/10 rounded-lg"></div>

            {/* Route Path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d={`M ${ROUTE_POINTS[0].coordinates.x} ${ROUTE_POINTS[0].coordinates.y} 
                   L ${ROUTE_POINTS[1].coordinates.x} ${ROUTE_POINTS[1].coordinates.y} 
                   L ${ROUTE_POINTS[2].coordinates.x} ${ROUTE_POINTS[2].coordinates.y} 
                   L ${ROUTE_POINTS[0].coordinates.x} ${ROUTE_POINTS[0].coordinates.y}`}
                fill="none"
                stroke="#0369a1"
                strokeWidth="0.8"
                strokeDasharray="1 1"
                className={`transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  strokeDashoffset: isInView ? 0 : 200,
                  transition: 'stroke-dashoffset 2s ease-in-out'
                }}
              />
            </svg>

            {/* City Markers */}
            {ROUTE_POINTS.map((point, index) => (
              <div
                key={point.city}
                className="absolute"
                style={{
                  left: point.coordinates.x,
                  top: point.coordinates.y,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-blue-600 text-white p-2 rounded-full shadow-md">
                    <Ship className="h-5 w-5" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-sm whitespace-nowrap">
                    <span className="text-xs font-medium">{point.city}</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-b-xl">
            <div className="flex items-center justify-center mb-2">
              <Map className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-900">SeaBus Routes Network</span>
            </div>
            <p className="text-xs text-gray-500 text-center max-w-xl mx-auto">
              Our SeaBus connects the main coastal cities of Madeira, providing a scenic and comfortable alternative to road travel. Enjoy breathtaking views while traveling between destinations.
            </p>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {IMAGE_GALLERY.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
