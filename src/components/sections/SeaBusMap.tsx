
import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Map, Ship } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { LazyImage } from '@/components/LazyImage';

// Image gallery for the section
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

// Route points with proper coordinates
const ROUTE_POINTS = [
  { city: "Funchal", coordinates: [-16.9108, 32.6471] as [number, number] },
  { city: "Caniçal", coordinates: [-16.7352, 32.7411] as [number, number] },
  { city: "Calheta", coordinates: [-17.1744, 32.7183] as [number, number] }
];

export const SeaBusMap = () => {
  const sectionRef = useRef(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const mapboxTokenRef = useRef("pk.eyJ1IjoiYWZvbnNvZ29tZXMiLCJhIjoiY201Z25pYnNwMDhmdDJrczdiOHN0Mm1uOCJ9.QH70VSahz9ZRgfhZ8cDJIA");
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [mapboxLoaded, setMapboxLoaded] = useState(false);

  // Load Mapbox on demand only when section is in view
  const loadMapbox = useCallback(async () => {
    if (mapboxLoaded) return Promise.resolve();
    
    try {
      // Dynamically import mapbox-gl
      const mapboxgl = await import('mapbox-gl');
      await import('mapbox-gl/dist/mapbox-gl.css');
      
      setMapboxLoaded(true);
      return mapboxgl.default;
    } catch (error) {
      console.error("Failed to load Mapbox:", error);
      toast({
        title: "Map Loading Error",
        description: "Failed to load the map. Please try again later.",
        variant: "destructive",
      });
      return null;
    }
  }, [mapboxLoaded]);

  // Initialize map when component is in view and mapbox is loaded
  useEffect(() => {
    if (!isInView) return;
    
    setIsMapVisible(true);
    
    if (!mapContainerRef.current || mapLoaded) return;
    
    const initMap = async () => {
      const mapboxgl = await loadMapbox();
      if (!mapboxgl || !mapContainerRef.current) return;
      
      try {
        // Initialize Mapbox
        mapboxgl.accessToken = mapboxTokenRef.current;
        
        console.log("Initializing map with token:", mapboxTokenRef.current);
        
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/outdoors-v12',
          center: [-16.9667, 32.7505] as [number, number], // Center on Madeira
          zoom: 9,
          attributionControl: false, // We'll add this manually for better control
          logoPosition: 'bottom-right',
          maxZoom: 12,
          minZoom: 8,
          trackResize: true
        });
        
        mapRef.current = map;

        // Handle map loading
        map.on('load', () => {
          console.log("Map loaded successfully");
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
          
          // Add attribution control in a better position
          map.addControl(new mapboxgl.AttributionControl({
            compact: true
          }), 'bottom-right');
        });

        map.on('error', (e) => {
          console.error("Mapbox error:", e);
          toast({
            title: "Map Error",
            description: "There was an error rendering the map.",
            variant: "destructive",
          });
        });

        // Add navigation controls
        map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');
        
        // Optimize rendering
        map.on('idle', () => {
          if (!map.isMoving()) {
            // Reduce update frequency when idle to save resources
            map.triggerRepaint();
          }
        });
      } catch (error) {
        console.error("Error initializing map:", error);
        toast({
          title: "Map Initialization Error",
          description: "Failed to initialize the map.",
          variant: "destructive",
        });
      }
    };
    
    initMap();
    
    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [isInView, mapLoaded, loadMapbox]);

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
          {/* Mapbox Map with a placeholder until loaded */}
          <div className="relative h-[400px] md:h-[500px]">
            {isMapVisible ? (
              <>
                <div ref={mapContainerRef} className="absolute inset-0 rounded-lg" />
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-2"></div>
                      <div className="text-blue-600">Loading map...</div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              // Static map placeholder until interactive map is needed
              <div className="absolute inset-0 bg-blue-50 flex items-center justify-center">
                <img 
                  src="https://extranet.seayou.pt/photos/map-seabus-seayou.png"
                  alt="SeaBus Routes Map"
                  className="object-cover h-full w-full opacity-60"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-blue-800 font-medium">Loading interactive map...</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white p-4 rounded-b-xl">
            <div className="flex items-center justify-center mb-2">
              <Map className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-900">SeaBus Routes Network</span>
            </div>
            <p className="text-xs text-gray-500 text-center max-w-xl mx-auto">
              Our SeaBus connects the main coastal cities of Madeira, providing a scenic and comfortable alternative to road travel.
            </p>
          </div>
        </motion.div>

        {/* Image Gallery with lazy loading */}
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
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  placeholderSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e2e8f0' /%3E%3C/svg%3E"
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
