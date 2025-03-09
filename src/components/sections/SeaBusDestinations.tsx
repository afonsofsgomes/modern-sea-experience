
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Coffee, Wine, Mountain, Camera, Anchor, Route, Sun, Fish, Waves, Ship, Clock, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

const seabusDestinationsData = [
  {
    name: "Funchal",
    image: "https://extranet.seayou.pt/photos/Funchal.jpg",
    description: "As Madeira's vibrant capital, Funchal offers incredible experiences from traditional markets to botanical gardens. Wander through the Old Town with its painted doors, take the Monte cable car for panoramic views, or sample local delicacies at the Farmers' Market.",
    features: [
      { icon: <Coffee className="w-5 h-5 text-secondary" />, text: "Monte Cable Car Experience" },
      { icon: <Wine className="w-5 h-5 text-secondary" />, text: "Madeira Wine Tasting" },
      { icon: <Mountain className="w-5 h-5 text-secondary" />, text: "Old Town Exploration" },
      { icon: <Camera className="w-5 h-5 text-secondary" />, text: "CR7 Museum" }
    ],
    travelTime: "1h - 1h 30m",
    departuresPerDay: "Tue-Sun"
  },
  {
    name: "Caniçal",
    image: "https://extranet.seayou.pt/photos/Canical.jpg",
    description: "Nestled on Madeira's eastern tip, Caniçal offers a unique blend of maritime heritage and natural wonders. Visit the Whale Museum, explore the dramatic Ponta de São Lourenço peninsula, or enjoy freshly caught seafood at one of the local restaurants overlooking the harbor.",
    features: [
      { icon: <Anchor className="w-5 h-5 text-secondary" />, text: "Whale Museum" },
      { icon: <Route className="w-5 h-5 text-secondary" />, text: "Ponta de São Lourenço Hikes" },
      { icon: <Ship className="w-5 h-5 text-secondary" />, text: "Working Fishing Harbor" },
      { icon: <Fish className="w-5 h-5 text-secondary" />, text: "Fresh Seafood Restaurants" }
    ],
    travelTime: "1h - 1h 15m",
    departuresPerDay: "Tue-Sun"
  },
  {
    name: "Calheta",
    image: "https://extranet.seayou.pt/photos/Calheta.jpg",
    description: "Home to one of Madeira's few golden sandy beaches, Calheta is perfect for relaxation and outdoor activities. Visit the contemporary arts center, enjoy water sports in the marina, or tour the historic sugar cane factory and rum distillery for a taste of local tradition.",
    features: [
      { icon: <Sun className="w-5 h-5 text-secondary" />, text: "Man-made Sandy Beach" },
      { icon: <Waves className="w-5 h-5 text-secondary" />, text: "Marina & Water Sports" },
      { icon: <Wine className="w-5 h-5 text-secondary" />, text: "Sugar Cane Factory & Rum" },
      { icon: <Camera className="w-5 h-5 text-secondary" />, text: "Casa das Mudas Arts Center" }
    ],
    travelTime: "1h 15m - 2h",
    departuresPerDay: "Tue-Sun"
  }
];

export const SeaBusDestinations = () => {
  const destinationsRef = useRef(null);
  const destinationsInView = useInView(destinationsRef, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={destinationsRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          animate={destinationsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-3">
            SeaBus Connections
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-display font-medium mb-4">
            Explore Our Destinations
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Discover the unique charm of each SeaBus destination around Madeira, with convenient daily connections and breathtaking coastal views.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {seabusDestinationsData.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 50 }}
              animate={destinationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={`SeaBus destination: ${destination.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80';
                  }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {destination.name}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <div className="bg-primary/10 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <p className="text-xs font-medium">Travel: <span className="text-primary">{destination.travelTime}</span></p>
                  </div>
                  <div className="bg-primary/10 rounded-lg px-3 py-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <p className="text-xs font-medium">Days: <span className="text-primary">{destination.departuresPerDay}</span></p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-5">{destination.description}</p>
                
                <h3 className="font-medium text-base mb-3">Location Highlights</h3>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
                  {destination.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="text-xs">{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-2 mb-4">
                  <div className="flex items-center gap-2 bg-secondary/10 rounded-lg px-3 py-1.5">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-medium">Maximum 18 passengers</span>
                  </div>
                </div>
                
                <Link to="/schedule" className="mt-auto block">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white text-sm relative overflow-hidden group">
                    <span className="relative z-10">View Schedule</span>
                    <div className="absolute -inset-0.5 bg-secondary/30 rounded-md blur opacity-0 group-hover:opacity-70 transition duration-300 group-hover:animate-pulse"></div>
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
