
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { 
  Routes, 
  Destinations, 
  PrivateCruises, 
  PortoSantoTours, 
  Testimonials, 
  Newsletter 
} from "@/components/sections";
import { ProductShowcase } from "@/components/sections/ProductShowcase";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Product showcase items data
  const showcaseItems = [
    {
      title: "SeaBus Connections",
      description: "Fast & comfortable sea transportation with panoramic views between key destinations in Madeira.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      linkTo: "/seabus",
      stat1: { value: "1h", label: "Journey Time" },
      stat2: { value: "22", label: "Passengers" },
      stat3: { value: "Daily", label: "Departures" }
    },
    {
      title: "Porto Santo Golden Island",
      description: "Experience the therapeutic golden sands of Porto Santo with our dedicated ferry service.",
      image: "https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      linkTo: "/porto-santo",
      stat1: { value: "9km", label: "Golden Beach" },
      stat2: { value: "2.5h", label: "Journey Time" },
      stat3: { value: "Daily", label: "Departures" }
    },
    {
      title: "Private South Coast Cruise",
      description: "Explore Madeira's beautiful south coast with a private luxury cruise tailored to your preferences.",
      image: "https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      linkTo: "/private-cruise",
      stat1: { value: "4h", label: "Duration" },
      stat2: { value: "12", label: "Max Guests" },
      stat3: { value: "Luxury", label: "Experience" }
    },
    {
      title: "Private North Coast Cruise",
      description: "Discover the dramatic cliffs and hidden caves of Madeira's rugged northern coastline.",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      linkTo: "/private-cruise",
      stat1: { value: "4h", label: "Duration" },
      stat2: { value: "12", label: "Max Guests" },
      stat3: { value: "Unique", label: "Sights" }
    },
    {
      title: "Desertas Island Adventure",
      description: "Visit the uninhabited Desertas Islands to observe rare wildlife and pristine natural landscapes.",
      image: "https://images.unsplash.com/photo-1622484211753-e69ce5d86f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      linkTo: "/private-cruise",
      stat1: { value: "6h", label: "Duration" },
      stat2: { value: "12", label: "Max Guests" },
      stat3: { value: "Wildlife", label: "Focus" }
    }
  ];

  return (
    <div className="relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[100]"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      
      <div id="routes">
        <Routes />
      </div>
      <Destinations />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
              Our Experiences
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Discover Madeira by Sea
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully crafted sea experiences to make your visit to Madeira unforgettable
            </p>
          </div>
        </div>
      </div>
      
      {showcaseItems.map((item, index) => (
        <ProductShowcase
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          linkTo={item.linkTo}
          stat1={item.stat1}
          stat2={item.stat2}
          stat3={item.stat3}
          reversed={index % 2 !== 0}
        />
      ))}
      
      <div id="cruises">
        <PrivateCruises />
      </div>
      <div id="tours">
        <PortoSantoTours />
      </div>
      <div id="about">
        <Testimonials />
      </div>
      <div id="contact">
        <Newsletter />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
