import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { 
  Routes, 
  Destinations,
  Testimonials, 
  Newsletter 
} from "@/components/sections";
import { PageHead, LocalBusinessSchema, StructuredData, BreadcrumbNav } from "@/components/SEO";
import TallyScript from "@/components/TallyScript";
import { AlertEmbed } from "@/components/AlertEmbed";

// Correct image URL that works - preload this in head
const HERO_IMAGE_URL = "https://extranet.seayou.pt/photos/bc.jpg";
// Default OG image
const DEFAULT_OG_IMAGE = "https://extranet.seayou.pt/photos/9374361538.png";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Preload the hero image for better LCP
    const preloadImage = new Image();
    preloadImage.onload = () => {
      setIsLoaded(true);
    };
    preloadImage.src = HERO_IMAGE_URL;
    
    // Text updates
    const updateTextElements = () => {
      const elements = document.querySelectorAll('.text-to-update');
      elements.forEach(el => {
        if (el.textContent?.includes('Our SeaBus Catamaran')) {
          el.textContent = el.textContent.replace('Our SeaBus Catamaran', 'Our Catamaran');
        }
      });
    };
    
    // Run text updates after component mounts
    updateTextElements();
    
    // Cleanup function
    return () => {
      preloadImage.onload = null;
    };
  }, []);

  // Additional structured data for breadcrumbs - improves SEO
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
        ogImage={DEFAULT_OG_IMAGE}
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
      
      {/* Home page doesn't need visible breadcrumbs, but we'll keep the structured data for SEO */}
      <div className="hidden">
        <BreadcrumbNav 
          items={[]}
        />
      </div>
      
      {/* Dedicated Alert Section - Prominently displayed after hero */}
      <section className="py-8 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center text-xl font-semibold text-blue-700 mb-4">Service Alerts</h2>
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
