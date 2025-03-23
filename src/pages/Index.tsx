
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
    
    // Preload the hero image with direct approach
    const preloadImage = new Image();
    preloadImage.src = HERO_IMAGE_URL;
    console.log('Preloading hero image:', HERO_IMAGE_URL);
    
    // Add preconnect for external resource
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://extranet.seayou.pt';
    preconnectLink.crossOrigin = 'anonymous';
    document.head.appendChild(preconnectLink);
    
    return () => {
      if (document.head.contains(preconnectLink)) {
        document.head.removeChild(preconnectLink);
      }
    };
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
        title="SeaYou Madeira - Maritime Tourism & Sea Transport Services"
        description="Discover Madeira's coastline with SeaYou's premium maritime experiences. Fast SeaBus connections, private cruises, and Porto Santo tours. Book your sea adventure today!"
        keywords="Madeira sea transportation, maritime tourism Madeira, SeaBus Madeira, private cruises Madeira, Porto Santo ferry, boat tours Madeira"
        canonicalUrl="https://seayou.pt/"
      >
        <meta name="robots" content="index, follow" />
        <link rel="preload" href={HERO_IMAGE_URL} as="image" />
        {/* Add direct style preload to ensure image is fetched early */}
        <style>
          {`
            .hero-bg-preload {
              background-image: url(${HERO_IMAGE_URL});
              position: absolute;
              width: 1px;
              height: 1px;
              opacity: 0.01;
            }
          `}
        </style>
      </PageHead>
      <LocalBusinessSchema />
      <StructuredData data={breadcrumbSchema} />
      <TallyScript />
      
      {/* Hidden element to force preload */}
      <div className="hero-bg-preload" aria-hidden="true"></div>
      
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
