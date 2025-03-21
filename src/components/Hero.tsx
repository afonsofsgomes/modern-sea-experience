
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

export const Hero = () => {
  return (
    <section className="relative bg-[#253D7F] py-12 sm:py-16 md:py-20 min-h-[90vh] flex items-center">
      <HeroBackground imageUrl="https://images.unsplash.com/photo-1628413283166-a7666966d26b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

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
