
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { 
  Routes, 
  Destinations,
  Testimonials, 
  Newsletter 
} from "@/components/sections";
import { MetaTags, LocalBusinessSchema } from "@/components/SEO";
import TallyScript from "@/components/TallyScript";
import { AlertEmbed } from "@/components/AlertEmbed";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.text-to-update');
    elements.forEach(el => {
      if (el.textContent?.includes('Our SeaBus Catamaran')) {
        el.textContent = el.textContent.replace('Our SeaBus Catamaran', 'Our Catamaran');
      }
    });
  }, []);

  return (
    <div className="relative">
      <MetaTags 
        title="SeaYou Madeira - Maritime Tourism & Sea Transport Services"
        description="Discover Madeira's coastline with SeaYou's premium maritime experiences. Fast SeaBus connections, private cruises, and Porto Santo tours. Book your sea adventure today!"
        keywords="Madeira sea transportation, maritime tourism Madeira, SeaBus Madeira, private cruises Madeira, Porto Santo ferry, boat tours Madeira"
      />
      <LocalBusinessSchema />
      <TallyScript />
      
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>
      
      {/* Dedicated Alert Section */}
      <section className="py-6 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-center text-lg font-medium text-blue-700 mb-3">Service Alerts</h3>
            <AlertEmbed />
          </div>
        </div>
      </section>
      
      <div id="routes">
        <Routes />
      </div>
      
      <div id="destinations">
        <Destinations />
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
