
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DestinationCard, MultiDestinationCard, destinationData } from "@/components/destinations";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const Destinations = () => {
  const destinationsRef = useRef(null);
  const destinationsInView = useInView(destinationsRef, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={destinationsRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-10 md:mb-16"
          initial="hidden"
          animate={destinationsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-3 md:mb-4">
            Discover Madeira by Sea
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-4 md:mb-6">
            Explore Our Destinations & Experiences
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully crafted sea experiences to make your visit to Madeira unforgettable, each location offers unique experiences and scenery.
          </motion.p>
        </motion.div>
        
        <div className="space-y-12 md:space-y-24">
          {destinationData.map((destination, index) => (
            <motion.div
              key={destination.experience || destination.name}
              initial={{ opacity: 0, y: 100 }}
              animate={destinationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl bg-white"
            >
              {destination.multipleDestinations && destination.destinations ? (
                <MultiDestinationCard 
                  {...destination} 
                />
              ) : (
                <DestinationCard 
                  {...destination} 
                  image={destination.image || ''}
                  description={destination.description || ''}
                  features={destination.features || []}
                  isOdd={index % 2 !== 0}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
