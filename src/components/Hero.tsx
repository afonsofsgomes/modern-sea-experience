
import React, { useEffect } from 'react';
import { destinationData } from "@/components/destinations/DestinationData";
import { 
  HeroBackground, 
  HeroContent, 
  HeroCarousel 
} from "@/components/hero";

// Ordering the destinations as specified and adding ratings - all at 5.0
const orderedDestinationData = [
  // 1. SeaBus
  {...destinationData.find(d => d.name === "SeaBus Connections"), rating: 5.0},
  // 2. Porto Santo
  {...destinationData.find(d => d.name === "Porto Santo"), rating: 5.0},
  // 3. Desertas
  {...destinationData.find(d => d.name === "Desertas"), rating: 5.0},
  // 4. Caniçal
  {...destinationData.find(d => d.name === "Caniçal"), rating: 5.0},
  // 5. Calheta
  {...destinationData.find(d => d.name === "Calheta"), rating: 5.0},
].filter(Boolean); // Filter out any undefined values

// Fallback images for when the primary images fail to load
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80";

// Background image URL - Make sure it's correctly formatted and accessible
const HERO_BACKGROUND_IMAGE = "https://extranet.seayou.pt/photos/bc.jpeg";

console.log('Hero component - Background image URL:', HERO_BACKGROUND_IMAGE);

export const Hero = () => {
  // Check if the image is accessible
  useEffect(() => {
    // Test the image url
    const testImage = new Image();
    testImage.src = HERO_BACKGROUND_IMAGE;
    testImage.onload = () => console.log('Hero background image is accessible');
    testImage.onerror = () => console.error('Hero background image is NOT accessible:', HERO_BACKGROUND_IMAGE);
    
    // Directly test the webp version too
    const webpUrl = HERO_BACKGROUND_IMAGE.replace('.jpeg', '.webp');
    const testWebp = new Image();
    testWebp.src = webpUrl;
    testWebp.onload = () => console.log('WebP version is accessible:', webpUrl);
    testWebp.onerror = () => console.error('WebP version is NOT accessible:', webpUrl);
    
    // Try alternative extensions
    const jpgUrl = HERO_BACKGROUND_IMAGE.replace('.jpeg', '.jpg');
    const testJpg = new Image();
    testJpg.src = jpgUrl;
    testJpg.onload = () => console.log('JPG version is accessible:', jpgUrl);
    testJpg.onerror = () => console.error('JPG version is NOT accessible:', jpgUrl);
    
    // Preload images for better performance
    const preloadImages = [
      HERO_BACKGROUND_IMAGE,
      HERO_BACKGROUND_IMAGE.replace('.jpeg', '.webp')
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.fetchPriority = "high";
    });
  }, []);
  
  return (
    <section className="relative bg-[#253D7F] py-12 sm:py-16 md:py-20 min-h-[90vh] flex items-center">
      <HeroBackground imageUrl={HERO_BACKGROUND_IMAGE} />

      <div className="container mx-auto px-4 relative z-10">
        <HeroContent />
        <HeroCarousel 
          destinations={orderedDestinationData} 
          fallbackImage={FALLBACK_IMAGE} 
        />
      </div>
    </section>
  );
};
