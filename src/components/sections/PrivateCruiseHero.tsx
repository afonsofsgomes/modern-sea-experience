
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const PrivateCruiseHero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  return (
    <section 
      ref={heroRef}
      className="relative h-[70vh] lg:h-[80vh] bg-gray-900 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://extranet.seayou.pt/photos/charters/private_pta-s-lourenco.jpg" 
          alt="Private Cruise in Madeira" 
          className="w-full h-full object-cover opacity-70"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1517816428104-797678c7cf0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-5">
                Calheta or Caniçal
              </span>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white drop-shadow-lg">
                Private Cruise
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
                Experience the beauty of Madeira from the sea with your private luxury catamaran charter
              </p>
              
              <a
                href="#booking"
                className="inline-block bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg"
              >
                Book Your Private Experience
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
