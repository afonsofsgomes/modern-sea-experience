
import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { 
  Routes, 
  Destinations, 
  QuickBooking, 
  ScheduleDisplay, 
  PrivateCruises, 
  PortoSantoTours, 
  Testimonials, 
  Newsletter 
} from "@/components/sections";

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
      
      <Routes />
      <Destinations />
      <QuickBooking />
      <ScheduleDisplay />
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
