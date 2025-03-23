
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

// Make sure these URLs are correct
const HERO_IMAGE_URL = "https://extranet.seayou.pt/photos/bc.jpeg";
const HERO_IMAGE_WEBP_URL = "https://extranet.seayou.pt/photos/bc.webp";
// Also try alternative file extensions
const HERO_IMAGE_JPG_URL = "https://extranet.seayou.pt/photos/bc.jpg";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Debug available files
    console.log('Index page - checking image availability');
    
    // Check each possible file extension
    [HERO_IMAGE_URL, HERO_IMAGE_WEBP_URL, HERO_IMAGE_JPG_URL].forEach(url => {
      const testImg = new Image();
      testImg.src = url;
      testImg.onload = () => console.log(`Image exists: ${url}`);
      testImg.onerror = () => console.log(`Image does NOT exist: ${url}`);
    });
    
    // Add preconnect for external resources
    const preconnectLinks = [
      { href: 'https://extranet.seayou.pt', crossOrigin: 'anonymous' },
      { href: 'https://cdn.gpteng.co', crossOrigin: 'anonymous' },
      { href: 'https://tally.so', crossOrigin: 'anonymous' }
    ];
    
    const dnsPrefetchLinks = [
      'https://extranet.seayou.pt',
      'https://cdn.gpteng.co',
      'https://tally.so'
    ];
    
    const createdLinks = [];
    
    // Add preconnect links
    preconnectLinks.forEach(link => {
      const preconnectLink = document.createElement('link');
      preconnectLink.rel = 'preconnect';
      preconnectLink.href = link.href;
      if (link.crossOrigin) {
        preconnectLink.crossOrigin = link.crossOrigin;
      }
      document.head.appendChild(preconnectLink);
      createdLinks.push(preconnectLink);
    });
    
    // Add dns-prefetch links
    dnsPrefetchLinks.forEach(href => {
      const dnsPrefetchLink = document.createElement('link');
      dnsPrefetchLink.rel = 'dns-prefetch';
      dnsPrefetchLink.href = href;
      document.head.appendChild(dnsPrefetchLink);
      createdLinks.push(dnsPrefetchLink);
    });
    
    // Try different image formats and file extensions
    const imageFormatsToTry = [
      { url: HERO_IMAGE_URL, type: 'image/jpeg' },
      { url: HERO_IMAGE_WEBP_URL, type: 'image/webp' },
      { url: HERO_IMAGE_JPG_URL, type: 'image/jpeg' }
    ];
    
    imageFormatsToTry.forEach(img => {
      const preloadImageLink = document.createElement('link');
      preloadImageLink.rel = 'preload';
      preloadImageLink.href = img.url;
      preloadImageLink.as = 'image';
      preloadImageLink.type = img.type;
      document.head.appendChild(preloadImageLink);
      createdLinks.push(preloadImageLink);
    });
    
    return () => {
      // Clean up all created links
      createdLinks.forEach(link => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      });
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
        <link rel="preload" href={HERO_IMAGE_URL} as="image" type="image/jpeg" />
        <link rel="preload" href={HERO_IMAGE_WEBP_URL} as="image" type="image/webp" />
        <link rel="preload" href={HERO_IMAGE_JPG_URL} as="image" type="image/jpeg" />
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
