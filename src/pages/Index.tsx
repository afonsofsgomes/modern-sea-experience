
import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { 
  Routes, 
  Destinations,
  Testimonials, 
  Newsletter 
} from "@/components/sections";
import { PageHead, LocalBusinessSchema, StructuredData } from "@/components/SEO";
import TallyScript from "@/components/TallyScript";
import { AlertEmbed } from "@/components/AlertEmbed";

// Correct image URL that works
const HERO_IMAGE_URL = "https://extranet.seayou.pt/photos/bc.jpg";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Preload the hero image with direct approach - more efficient than using preconnect
    const preloadImage = new Image();
    preloadImage.src = HERO_IMAGE_URL;
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.text-to-update');
    elements.forEach(el => {
      if (el.textContent?.includes('Our SeaBus Catamaran')) {
        el.textContent = el.textContent.replace('Our SeaBus Catamaran', 'Our Catamaran');
      }
    });
  }, []);

  // Additional structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://seayou.pt/"
      }
    ]
  };

  return (
    <div className="relative">
      <PageHead 
        title="SeaYou Madeira - Boat Tours in Madeira"
        description="Discover Madeira's coastline with SeaYou's premium maritime experiences. Exclusive boat tours, private cruises, and unforgettable day trips to Porto Santo and Desertas."
        keywords="boat tours madeira, seayou, seabus, desertas tours, porto santo tours, private cruises, luxury boat tours, 1 day experience, madeira island boat tours, maritime tourism"
        canonicalUrl="https://seayou.pt/"
        ogImage="https://extranet.seayou.pt/photos/og.png"
      >
        <meta name="robots" content="index, follow" />
      </PageHead>
      <LocalBusinessSchema />
      <StructuredData data={breadcrumbSchema} />
      <TallyScript />
      
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>
      
      {/* Dedicated Alert Section - Prominently displayed after hero */}
      <section className="py-8 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-center text-xl font-semibold text-blue-700 mb-4">Service Alerts</h3>
            <p className="text-center text-gray-600 mb-6">Stay updated on weather conditions and service changes</p>
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
