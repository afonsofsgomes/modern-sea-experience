
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface StatProps {
  value: string;
  label: string;
}

interface ProductShowcaseProps {
  title: string;
  description: string;
  image: string;
  linkTo: string;
  stat1: StatProps;
  stat2: StatProps;
  stat3: StatProps;
  reversed?: boolean;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  title,
  description,
  image,
  linkTo,
  stat1,
  stat2,
  stat3,
  reversed = false
}) => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Replace the journey stats for the SeaBus Connections specifically
  const displayStat1 = title === "SeaBus Connections" ? { value: "1-2h", label: "Journey Time" } : stat1;
  const displayStat2 = title === "SeaBus Connections" ? { value: "18", label: "Passengers" } : stat2;
  const displayStat3 = title === "SeaBus Connections" ? { value: "Daily*", label: "Departures" } : stat3;
  
  // Customize stats for Porto Santo
  if (title === "Porto Santo") {
    displayStat1.value = "1h";
    displayStat1.label = "Connection Time";
    displayStat3.value = "Wed-Fri";
    displayStat3.label = "Departures";
  }
  
  // Custom message for Limited Availability section
  const limitedAvailabilityMessage = title === "SeaBus Connections" 
    ? "Enhance your SeaBus journey by combining it with hiking trails, local tours, or restaurant visits at each destination."
    : "Book early to secure your preferred date and time for this popular experience.";
  
  const limitedAvailabilityTitle = title === "SeaBus Connections" 
    ? "Experience Suggestions" 
    : "Limited Availability";

  return (
    <section className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:grid-flow-dense' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: reversed ? 30 : -30 }}
            transition={{ duration: 0.7 }}
            className={reversed ? 'lg:col-start-2' : ''}
          >
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
              Featured Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              {title}
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.div 
                className="bg-white rounded-md p-6 flex-1 min-w-[160px] hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-3xl font-medium mb-2">{displayStat1.value}</h3>
                <p className="text-muted-foreground">{displayStat1.label}</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-md p-6 flex-1 min-w-[160px] hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-3xl font-medium mb-2">{displayStat2.value}</h3>
                <p className="text-muted-foreground">{displayStat2.label}</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-md p-6 flex-1 min-w-[160px] hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h3 className="text-3xl font-medium mb-2">{displayStat3.value}</h3>
                <p className="text-muted-foreground">{displayStat3.label}</p>
              </motion.div>
            </div>
            {title === "SeaBus Connections" && (
              <p className="text-xs text-muted-foreground mb-6">* With exception of Monday</p>
            )}
            <Link to={linkTo}>
              <Button className="bg-secondary hover:bg-secondary/90 text-white relative overflow-hidden group">
                <span className="relative z-10">Explore {title}</span>
                <div className="absolute -inset-0.5 bg-secondary/30 rounded-md blur opacity-0 group-hover:opacity-70 transition duration-300 group-hover:animate-pulse"></div>
              </Button>
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: reversed ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: reversed ? -30 : 30 }}
            transition={{ duration: 0.7 }}
            className={`relative ${reversed ? 'lg:col-start-1' : ''}`}
          >
            <div className="aspect-square rounded-md overflow-hidden">
              <img 
                src={image}
                alt={title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <motion.div 
              className="absolute -bottom-8 -left-8 w-2/3 aspect-video glass-card p-6 rounded-md"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="font-display text-lg mb-2">{limitedAvailabilityTitle}</h3>
              <p className="text-sm text-muted-foreground">
                {limitedAvailabilityMessage}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
