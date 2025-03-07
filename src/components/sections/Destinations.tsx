
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Coffee, ShoppingBag, Wine, Camera, MapPin, Fish, Sun, Mountain, Utensils, Anchor, Palmtree, Bird, Trees, Route, Sunset, Waves, Ship, Flag } from "lucide-react";
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
    name: "SeaBus Connections",
    multipleDestinations: true,
    destinations: [
      {
        name: "Funchal",
        image: "https://extranet.seayou.pt/photos/Funchal.jpg",
        description: "Discover the vibrant capital of Madeira, with its historic old town, bustling markets, and delicious local cuisine. Enjoy a leisurely stroll along the promenade or take a cable car to Monte for panoramic views.",
        features: [
          { icon: <Coffee className="w-5 h-5 text-secondary" />, text: "Historic Old Town with cafés" },
          { icon: <ShoppingBag className="w-5 h-5 text-secondary" />, text: "Vibrant Farmers' Market" },
          { icon: <Trees className="w-5 h-5 text-secondary" />, text: "Tropical gardens and parks" },
          { icon: <Camera className="w-5 h-5 text-secondary" />, text: "CR7 Museum & cable car" }
        ],
      },
      {
        name: "Caniçal",
        image: "https://extranet.seayou.pt/photos/Canical.jpg",
        description: "Experience the beautiful fishing village of Caniçal, the gateway to the stunning Ponta de São Lourenço nature reserve. Enjoy fresh seafood in the local restaurants and hike along dramatic coastal trails.",
        features: [
          { icon: <MapPin className="w-5 h-5 text-secondary" />, text: "Ponta de São Lourenço trails" },
          { icon: <Fish className="w-5 h-5 text-secondary" />, text: "Fresh seafood restaurants" },
          { icon: <Anchor className="w-5 h-5 text-secondary" />, text: "Whale Museum" },
          { icon: <Ship className="w-5 h-5 text-secondary" />, text: "Working fishing harbor" }
        ],
      },
      {
        name: "Calheta",
        image: "https://extranet.seayou.pt/photos/Calheta.jpg",
        description: "Relax on Calheta's golden sandy beach, one of the few on Madeira Island. Visit the rum distillery, art center, or simply enjoy the sun and calm waters of this charming coastal town.",
        features: [
          { icon: <Sun className="w-5 h-5 text-secondary" />, text: "Golden sand beach" },
          { icon: <Utensils className="w-5 h-5 text-secondary" />, text: "Rum distillery tastings" },
          { icon: <Camera className="w-5 h-5 text-secondary" />, text: "Casa das Mudas Art Center" },
          { icon: <Sunset className="w-5 h-5 text-secondary" />, text: "Beautiful sunset views" }
        ],
      }
    ],
    link: "/seabus",
    buttonText: "Book SeaBus Journey",
    stats: [
      { value: "1h", label: "Journey Time" },
      { value: "22", label: "Passengers" },
      { value: "Daily", label: "Departures" }
    ],
    experience: "SeaBus Connections",
    experienceDesc: "Fast & comfortable sea transportation with panoramic views between key destinations in Madeira."
  },
  {
    name: "Caniçal",
    image: "https://extranet.seayou.pt/photos/Canical.jpg",
    description: "Experience the beautiful fishing village of Caniçal, the gateway to the stunning Ponta de São Lourenço nature reserve. Enjoy fresh seafood in the local restaurants and hike along dramatic coastal trails.",
    features: [
      { icon: <MapPin className="w-5 h-5 text-secondary" />, text: "Ponta de São Lourenço trails" },
      { icon: <Fish className="w-5 h-5 text-secondary" />, text: "Fresh seafood restaurants" },
      { icon: <Waves className="w-5 h-5 text-secondary" />, text: "Volcanic Beaches" },
      { icon: <Ship className="w-5 h-5 text-secondary" />, text: "Starting point to visit Desertas island" }
    ],
    link: "/private-cruise",
    buttonText: "Book Private Cruise",
    stats: [
      { value: "4h", label: "Duration" },
      { value: "12", label: "Max Guests" },
      { value: "Unique", label: "Sights" }
    ],
    experience: "Private North Coast Cruise",
    experienceDesc: "Discover the dramatic cliffs and hidden caves of Madeira's rugged northern coastline."
  },
  {
    name: "Calheta",
    image: "https://extranet.seayou.pt/photos/Calheta.jpg",
    description: "Relax on Calheta's golden sandy beach, one of the few on Madeira Island. Visit the rum distillery, art center, or simply enjoy the sun and calm waters of this charming coastal town.",
    features: [
      { icon: <Sun className="w-5 h-5 text-secondary" />, text: "Golden sand beach" },
      { icon: <Utensils className="w-5 h-5 text-secondary" />, text: "Rum distillery tastings" },
      { icon: <Route className="w-5 h-5 text-secondary" />, text: "Levadas: Rabaçal, 25 Fontes" },
      { icon: <Sunset className="w-5 h-5 text-secondary" />, text: "Beautiful sunset point" }
    ],
    link: "/private-cruise",
    buttonText: "Book Private Cruise",
    stats: [
      { value: "4h", label: "Duration" },
      { value: "12", label: "Max Guests" },
      { value: "Luxury", label: "Experience" }
    ],
    experience: "Private South Coast Cruise",
    experienceDesc: "Explore Madeira's beautiful south coast with a private luxury cruise tailored to your preferences."
  },
  {
    name: "Desertas",
    image: "https://extranet.seayou.pt/photos/desertas.jpg",
    description: "Explore the uninhabited Desertas Islands, a nature reserve and sanctuary for rare species including the Mediterranean monk seal. These dramatic, rugged islands offer a glimpse of untouched natural beauty.",
    features: [
      { icon: <Bird className="w-5 h-5 text-secondary" />, text: "Rare seabirds and marine life" },
      { icon: <Anchor className="w-5 h-5 text-secondary" />, text: "Pristine natural reserves" },
      { icon: <Waves className="w-5 h-5 text-secondary" />, text: "Volcanic Beaches" },
      { icon: <Mountain className="w-5 h-5 text-secondary" />, text: "Natural Deep caves" }
    ],
    link: "/desertas",
    buttonText: "Book Desertas Adventure",
    stats: [
      { value: "6h", label: "Duration" },
      { value: "12", label: "Max Guests" },
      { value: "Wildlife", label: "Focus" }
    ],
    experience: "Desertas Island Adventure",
    experienceDesc: "Visit the uninhabited Desertas Islands to observe rare wildlife and pristine natural landscapes."
  },
  {
    name: "Porto Santo",
    image: "https://extranet.seayou.pt/photos/pxo.jpg",
    description: "Discover Porto Santo's famous 9km golden beach, known for its therapeutic properties. This tranquil island offers the perfect escape with crystal-clear waters, golf courses, and a relaxed atmosphere.",
    features: [
      { icon: <Waves className="w-5 h-5 text-secondary" />, text: "9km of therapeutic golden beach" },
      { icon: <Sun className="w-5 h-5 text-secondary" />, text: "Calm, warm waters year-round" },
      { icon: <Flag className="w-5 h-5 text-secondary" />, text: "Championship golf course" },
      { icon: <Palmtree className="w-5 h-5 text-secondary" />, text: "European Maldives" }
    ],
    link: "/porto-santo",
    buttonText: "Book Porto Santo Trip",
    stats: [
      { value: "9km", label: "Golden Beach" },
      { value: "2.5h", label: "Journey Time" },
      { value: "Daily", label: "Departures" }
    ],
    experience: "Porto Santo Golden Island",
    experienceDesc: "Experience the therapeutic golden sands of Porto Santo with our dedicated ferry service."
  }
];

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
              {destination.multipleDestinations ? (
                <div className="flex flex-col">
                  <div className="hidden md:grid md:grid-cols-3 gap-0">
                    {destination.destinations.map((dest, idx) => (
                      <div key={dest.name} className="relative aspect-video">
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
                        <img 
                          src={dest.image} 
                          alt={dest.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80';
                          }}
                        />
                        <div className="absolute bottom-4 left-4 z-20">
                          <span className="px-3 py-1 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-medium shadow-lg border border-white/20">
                            {dest.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="md:hidden">
                    {destination.destinations.map((dest, idx) => (
                      <div key={dest.name} className="mb-6">
                        <div className="relative aspect-video mb-4">
                          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
                          <img 
                            src={dest.image} 
                            alt={dest.name}
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80';
                            }}
                          />
                          <div className="absolute bottom-4 left-4 z-20">
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-medium shadow-lg border border-white/20">
                              {dest.name}
                            </span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="text-lg font-medium mb-3">Highlights of {dest.name}</h4>
                          <p className="text-sm text-muted-foreground mb-4">{dest.description}</p>
                          <div className="grid grid-cols-2 gap-3">
                            {dest.features.map((feature, i) => (
                              <div key={i} className="flex items-center">
                                <div className="w-7 h-7 rounded-full bg-secondary/10 flex items-center justify-center mr-2 flex-shrink-0">
                                  {feature.icon}
                                </div>
                                <span className="text-xs">{feature.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium">{destination.experience}</h3>
                      <p className="text-sm text-muted-foreground">{destination.experienceDesc}</p>
                      
                      <div className="my-5">
                        <div className="h-px w-full bg-gradient-to-r from-secondary/50 to-transparent"></div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        {destination.stats.map((stat, idx) => (
                          <motion.div 
                            key={idx}
                            className="bg-gray-50 rounded-md p-4 flex-1 min-w-[100px] hover:shadow-md transition-shadow duration-300"
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <h3 className="text-2xl font-medium mb-1">{stat.value}</h3>
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
                        {destination.destinations.map((dest) => (
                          <div key={dest.name} className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-lg font-medium mb-3">Highlights of {dest.name}</h4>
                            <p className="text-sm text-muted-foreground mb-4">{dest.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {dest.features.map((feature, i) => (
                                <div key={i} className="flex items-center">
                                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mr-3 flex-shrink-0">
                                    {feature.icon}
                                  </div>
                                  <span className="text-sm">{feature.text}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Link to={destination.link} className="mt-auto">
                        <Button size="lg" className="w-full sm:w-auto bg-secondary text-white relative overflow-hidden group shadow-lg shadow-secondary/25 hover:shadow-secondary/40 border-2 border-secondary/50 hover:scale-105 transition-all duration-300">
                          <span className="relative z-10">{destination.buttonText}</span>
                          <div className="absolute -inset-0.5 bg-secondary/30 rounded-md blur opacity-0 group-hover:opacity-70 transition duration-300 group-hover:animate-pulse"></div>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="w-full lg:w-1/2 relative aspect-video lg:aspect-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80';
                      }}
                    />
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
                      <span className="px-3 py-1 sm:px-4 sm:py-2 bg-secondary/80 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium shadow-lg">
                        {destination.experience}
                      </span>
                    </div>
                    <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20">
                      <span className="px-3 py-1 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-medium shadow-lg border border-white/20">
                        {destination.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col justify-center">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium">{destination.experience}</h3>
                      <p className="text-sm text-muted-foreground">{destination.experienceDesc}</p>
                    </div>
                    
                    <div className="my-5">
                      <div className="h-px w-full bg-gradient-to-r from-secondary/50 to-transparent"></div>
                    </div>
                    
                    <h4 className="text-lg font-medium mb-2">Highlights of {destination.name}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 md:mb-6">{destination.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      {destination.stats.map((stat, idx) => (
                        <motion.div 
                          key={idx}
                          className="bg-gray-50 rounded-md p-4 flex-1 min-w-[100px] hover:shadow-md transition-shadow duration-300"
                          whileHover={{ y: -5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <h3 className="text-2xl font-medium mb-1">{stat.value}</h3>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {destination.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary/10 flex items-center justify-center mr-3 flex-shrink-0">
                            {feature.icon}
                          </div>
                          <span className="text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to={destination.link} className="mt-auto">
                      <Button size="lg" className="w-full sm:w-auto bg-secondary text-white relative overflow-hidden group shadow-lg shadow-secondary/25 hover:shadow-secondary/40 border-2 border-secondary/50 hover:scale-105 transition-all duration-300">
                        <span className="relative z-10">{destination.buttonText}</span>
                        <div className="absolute -inset-0.5 bg-secondary/30 rounded-md blur opacity-0 group-hover:opacity-70 transition duration-300 group-hover:animate-pulse"></div>
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
