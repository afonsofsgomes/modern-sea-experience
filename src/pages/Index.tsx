import React, { useEffect, useState, lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { PageHead, LocalBusinessSchema, StructuredData, BreadcrumbNav } from "@/components/SEO";
import TallyScript from "@/components/TallyScript";
import { AlertEmbed } from "@/components/AlertEmbed";
import { Routes } from "@/components/sections/Routes";
import { Destinations } from "@/components/sections/Destinations";
import { Testimonials } from "@/components/sections/Testimonials";
import { Newsletter } from "@/components/sections/Newsletter";

// Preload critical images right away
const HERO_IMAGE_URL = "https://extranet.seayou.pt/photos/bc.jpg";
const DEFAULT_OG_IMAGE = "https://extranet.seayou.pt/photos/9374361538.png";

// Create image preloader
(() => {
  if (typeof window !== 'undefined') {
    const preloadImages = [HERO_IMAGE_URL, DEFAULT_OG_IMAGE];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.fetchPriority = 'high';
    });
  }
})();

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Implement text updates only after initial render for better FCP
    let updateTimeout: number;
    const updateTextElements = () => {
      const elements = document.querySelectorAll('.text-to-update');
      elements.forEach(el => {
        if (el.textContent?.includes('Our SeaBus Catamaran')) {
          el.textContent = el.textContent.replace('Our SeaBus Catamaran', 'Our Catamaran');
        }
      });
    };
    
    // Use requestIdleCallback for non-critical work
    const runIdleTask = () => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          updateTextElements();
          setIsLoaded(true);
        }, { timeout: 2000 });
      } else {
        // Fallback for browsers without requestIdleCallback
        updateTimeout = window.setTimeout(() => {
          updateTextElements();
          setIsLoaded(true);
        }, 1000);
      }
    };
    
    // Use smaller timeout to ensure tasks run
    window.setTimeout(runIdleTask, 100);
    
    // Cleanup function
    return () => {
      if (updateTimeout) clearTimeout(updateTimeout);
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
        
        {/* Add preload directive for critical resources */}
        <link rel="preload" href={HERO_IMAGE_URL} as="image" fetchPriority="high" />
      </PageHead>
      <LocalBusinessSchema />
      <StructuredData data={breadcrumbSchema} />
      
      {/* Defer non-critical scripts for faster LCP */}
      {isLoaded && <TallyScript />}
      
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
