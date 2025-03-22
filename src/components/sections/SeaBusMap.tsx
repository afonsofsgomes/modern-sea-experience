
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Map } from "lucide-react";

// Static data for image gallery
const IMAGE_GALLERY = [
  {
    src: "https://extranet.seayou.pt/photos/Funchal.jpg",
    alt: "Funchal SeaBus Tour",
    caption: "Scenic views of Funchal's coast",
    width: 800,
    height: 600
  },
  {
    src: "https://extranet.seayou.pt/photos/Canical.jpg",
    alt: "Caniçal SeaBus Tour",
    caption: "Exploring the eastern shores",
    width: 800,
    height: 600
  },
  {
    src: "https://extranet.seayou.pt/photos/Calheta.jpg",
    alt: "Calheta SeaBus Tour",
    caption: "Beautiful Calheta coast",
    width: 800,
    height: 600
  },
  {
    src: "https://extranet.seayou.pt/photos/boat1.jpg",
    alt: "SeaBus Experience",
    caption: "Comfortable journey between destinations",
    width: 800,
    height: 600
  }
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

        {/* Static Map Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative bg-blue-50 rounded-xl overflow-hidden shadow-lg mb-12"
        >
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-t-lg">
            <picture>
              <source 
                srcSet="/lovable-uploads/59a41830-d3fd-4eb5-9899-3154e727fcdb.png" 
                type="image/png" 
                width="1200" 
                height="800"
              />
              <img 
                src="/lovable-uploads/59a41830-d3fd-4eb5-9899-3154e727fcdb.png" 
                alt="SeaBus Routes Map"
                className="w-full h-full object-cover"
                width="1200" 
                height="800"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Fallback to a simple styled div if image fails to load
                  target.parentElement?.classList.add('bg-blue-100');
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <div class="bg-blue-600 text-white p-3 rounded-full mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                      </div>
                      <h3 class="text-xl font-bold text-blue-900 mb-2">SeaBus Routes</h3>
                      <p class="text-blue-700">Connecting Funchal, Caniçal, and Calheta</p>
                    </div>
                  `;
                }}
              />
            </picture>
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
                <picture>
                  <source
                    srcSet={image.src.replace('.jpg', '.webp')}
                    type="image/webp"
                  />
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    width={image.width}
                    height={image.height}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                </picture>
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
