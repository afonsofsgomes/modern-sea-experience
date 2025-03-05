
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Destination {
  name: string;
  description: string;
  image: string;
}

interface DestinationsShowcaseProps {
  destinations: Destination[];
}

export const DestinationsShowcase = ({ destinations }: DestinationsShowcaseProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
            Top Picks
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
            Discover Madeira's Gems
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our curated selection of must-visit destinations around Madeira Island.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Button variant="secondary" size="sm" className="w-full">
                    Explore Tours
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-display font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>
                <p className="text-sm text-muted-foreground">{destination.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
