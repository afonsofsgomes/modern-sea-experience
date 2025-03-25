
import React from 'react';
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

// Direct image URL that works
const HERO_BACKGROUND_IMAGE = "https://extranet.seayou.pt/photos/bc.jpg";
// Default image
const DEFAULT_IMAGE = "https://extranet.seayou.pt/photos/og.png";

export const Hero = () => {
  return (
    <section className="relative bg-[#253D7F] py-12 sm:py-16 md:py-20 min-h-[90vh] flex items-center">
      <HeroBackground 
        imageUrl={HERO_BACKGROUND_IMAGE}
        fallbackUrl={DEFAULT_IMAGE}
      />

      <div className="container mx-auto px-4 relative z-10">
        <HeroContent />
        <HeroCarousel 
          destinations={orderedDestinationData} 
          fallbackImage={DEFAULT_IMAGE} 
        />
      </div>
    </section>
  );
};
