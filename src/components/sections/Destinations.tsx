
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Coffee, ShoppingBag, Wine, Camera, MapPin, Fish, Sun, Mountain, Utensils, Anchor, Palmtree, Bird } from "lucide-react";
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

const destinationData = [
  {
    name: "Funchal",
    image: "https://images.unsplash.com/photo-1593465678160-f99a8371fcf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Discover the vibrant capital of Madeira, with its historic old town, bustling markets, and delicious local cuisine. Enjoy a leisurely stroll along the promenade or take a cable car to Monte for panoramic views.",
    features: [
      { icon: <Coffee className="w-5 h-5 text-secondary" />, text: "Historic Old Town with cafés" },
      { icon: <ShoppingBag className="w-5 h-5 text-secondary" />, text: "Vibrant Farmers' Market" }
    ],
    link: "/seabus",
    buttonText: "Book SeaBus Journey"
  },
  {
    name: "Caniçal",
    image: "https://images.unsplash.com/photo-1596627116790-af6f46ddddcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Experience the beautiful fishing village of Caniçal, the gateway to the stunning Ponta de São Lourenço nature reserve. Enjoy fresh seafood in the local restaurants and hike along dramatic coastal trails.",
    features: [
      { icon: <MapPin className="w-5 h-5 text-secondary" />, text: "Ponta de São Lourenço trails" },
      { icon: <Fish className="w-5 h-5 text-secondary" />, text: "Fresh seafood restaurants" }
    ],
    link: "/seabus",
    buttonText: "Book SeaBus Journey"
  },
  {
    name: "Calheta",
    image: "https://images.unsplash.com/photo-1596804796855-9f5c0e2bed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Relax on Calheta's golden sandy beaches, one of the few on Madeira Island. Visit the rum distillery, art center, or simply enjoy the sun and calm waters of this charming coastal town.",
    features: [
      { icon: <Sun className="w-5 h-5 text-secondary" />, text: "Golden sand beaches" },
      { icon: <Utensils className="w-5 h-5 text-secondary" />, text: "Rum distillery tastings" }
    ],
    link: "/seabus",
    buttonText: "Book SeaBus Journey"
  },
  {
    name: "Desertas",
    image: "https://images.unsplash.com/photo-1622484211753-e69ce5d86f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Explore the uninhabited Desertas Islands, a nature reserve and sanctuary for rare species including the Mediterranean monk seal. These dramatic, rugged islands offer a glimpse of untouched natural beauty.",
    features: [
      { icon: <Bird className="w-5 h-5 text-secondary" />, text: "Rare seabirds and marine life" },
      { icon: <Anchor className="w-5 h-5 text-secondary" />, text: "Pristine natural reserves" }
    ],
    link: "/private-cruise",
    buttonText: "Book Private Cruise"
  },
  {
    name: "Porto Santo",
    image: "https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Discover Porto Santo's famous 9km golden beach, known for its therapeutic properties. This tranquil island offers the perfect escape with crystal-clear waters, golf courses, and a relaxed atmosphere.",
    features: [
      { icon: <Palmtree className="w-5 h-5 text-secondary" />, text: "9km of therapeutic golden beach" },
      { icon: <Sun className="w-5 h-5 text-secondary" />, text: "Calm, warm waters year-round" }
    ],
    link: "/porto-santo",
    buttonText: "Book Porto Santo Trip"
  }
];

export const Destinations = () => {
  const destinationsRef = useRef(null);
  const destinationsInView = useInView(destinationsRef, { once: true, amount: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={destinationsRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={destinationsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
            Explore Our Destinations
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-medium mb-6">
            What to Experience at Each Stop
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base text-muted-foreground max-w-2xl mx-auto">
            Discover amazing destinations around Madeira Island with our sea connections. Each location offers unique experiences and scenery.
          </motion.p>
        </motion.div>
        
        <div className="space-y-16">
          {destinationData.map((destination, index) => (
            <motion.div
              key={destination.name}
              initial={{ opacity: 0, y: 100 }}
              animate={destinationsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} rounded-2xl overflow-hidden shadow-xl bg-white`}
            >
              <div className="w-full lg:w-1/2 relative aspect-[16/9] lg:aspect-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-medium shadow-lg border border-white/20">
                    {destination.name}
                  </span>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-display font-medium mb-4">{destination.name}</h3>
                <p className="text-muted-foreground mb-6">{destination.description}</p>
                
                <div className="space-y-4 mb-8">
                  {destination.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mr-4">
                        {feature.icon}
                      </div>
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
                
                <Link to={destination.link} className="mt-auto">
                  <Button className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-white relative overflow-hidden group">
                    <span className="relative z-10">{destination.buttonText}</span>
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
