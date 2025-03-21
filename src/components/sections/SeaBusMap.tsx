
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Map as MapIcon, Ship } from "lucide-react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Map configuration
const ROUTE_POINTS = [
  { city: "Funchal", coordinates: [32.6471, 16.9108] },
  { city: "Caniçal", coordinates: [32.7411, 16.7352] },
  { city: "Calheta", coordinates: [32.7183, 17.1744] }
];

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

export const SeaBusMap = () => {
  const sectionRef = useRef(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapKey, setMapKey] = useState('');

  // Set up input for Mapbox token
  useEffect(() => {
    // Check if token is in local storage
    const storedToken = localStorage.getItem('mapbox_token');
    if (storedToken) {
      setMapKey(storedToken);
    }
  }, []);

  // Initialize map when API key is available
  useEffect(() => {
    if (!mapKey || !mapContainerRef.current || mapLoaded) return;

    try {
      // Initialize Mapbox
      mapboxgl.accessToken = mapKey;
      
      // Create the map
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/outdoors-v12',
        center: [32.7505, 16.9667], // Center on Madeira
        zoom: 9,
        projection: 'mercator'
      });

      // Handle map loading
      map.on('load', () => {
        setMapLoaded(true);

        // Add markers for each city
        ROUTE_POINTS.forEach(point => {
          // Create a custom marker element
          const markerEl = document.createElement('div');
          markerEl.className = 'flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full shadow-lg';
          markerEl.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/></svg>';
          
          // Add popup
          const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<strong>${point.city}</strong><p>SeaBus stop</p>`);
          
          // Add marker to map
          new mapboxgl.Marker(markerEl)
            .setLngLat(point.coordinates)
            .setPopup(popup)
            .addTo(map);
        });

        // Add route lines
        map.addSource('route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [
                ROUTE_POINTS[0].coordinates, // Funchal
                ROUTE_POINTS[1].coordinates, // Caniçal
                ROUTE_POINTS[2].coordinates, // Calheta
                ROUTE_POINTS[0].coordinates  // Back to Funchal to complete the loop
              ]
            }
          }
        });

        map.addLayer({
          id: 'route',
          type: 'line',
          source: 'route',
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#0369a1',
            'line-width': 3,
            'line-dasharray': [2, 2]
          }
        });
      });

      // Add navigation controls
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
      
      // Cleanup
      return () => {
        map.remove();
      };
    } catch (error) {
      console.error("Error initializing map:", error);
    }
  }, [mapKey, mapLoaded]);

  // Save token to localStorage
  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const token = formData.get('mapbox_token') as string;
    
    if (token) {
      localStorage.setItem('mapbox_token', token);
      setMapKey(token);
      form.reset();
    }
  };

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
          <div className="relative h-[400px] md:h-[500px]">
            {!mapKey ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-blue-50">
                <MapIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-medium text-blue-900 mb-4">Enter your Mapbox public token</h3>
                <p className="text-gray-600 text-sm mb-4 text-center max-w-md">
                  To display the interactive map, please enter your Mapbox public token. 
                  You can get a free token by signing up at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">mapbox.com</a>.
                </p>
                <form onSubmit={handleTokenSubmit} className="w-full max-w-md">
                  <div className="flex items-center border-b border-blue-500 py-2">
                    <input 
                      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                      type="text" 
                      name="mapbox_token"
                      placeholder="pk.eyJ1IjoieW91..." 
                      aria-label="Mapbox token"
                      required
                    />
                    <button 
                      className="flex-shrink-0 bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" 
                      type="submit"
                    >
                      Set Token
                    </button>
                  </div>
                </form>
              </div>
            ) : !mapLoaded ? (
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
              </div>
            ) : null}
            
            {/* Map element */}
            <div ref={mapContainerRef} className="w-full h-full"></div>
          </div>

          <div className="bg-white p-4 rounded-b-xl">
            <div className="flex items-center justify-center mb-2">
              <MapIcon className="h-5 w-5 text-blue-600 mr-2" />
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
