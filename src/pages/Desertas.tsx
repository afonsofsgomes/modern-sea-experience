
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DesertasHero } from "@/components/sections/DesertasHero";
import { DesertasAbout } from "@/components/sections/DesertasAbout";
import { DesertasBooking } from "@/components/sections/DesertasBooking";
import { MetaTags, TourSchema } from "@/components/SEO";
import { AlertEmbed } from "@/components/AlertEmbed";

const Desertas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags 
        title="Desertas Islands Adventure | Wildlife & Nature Tour | SeaYou"
        description="Explore the uninhabited Desertas Islands with SeaYou's wildlife focused tour. Observe rare species and pristine landscapes on this unforgettable Madeira adventure."
        keywords="Desertas Islands tour, Madeira wildlife tour, Desertas boat trip, uninhabited islands Madeira, nature excursion Madeira"
      />
      <TourSchema 
        name="Desertas Islands Wildlife Adventure"
        description="Visit the uninhabited Desertas Islands to observe rare wildlife and pristine natural landscapes with our specialized tour."
        image="https://extranet.seayou.pt/photos/desertas.jpg"
        price="85.00"
        duration="PT6H"
      />
      
      <Navbar />
      
      <main className="flex-grow">
        <DesertasHero />
        
        {/* Alert banner placed in a white background section */}
        <div className="w-full bg-white py-4">
          <div className="container mx-auto px-4">
            <AlertEmbed />
          </div>
        </div>
        
        <DesertasAbout />
        <DesertasBooking />
      </main>
      <Footer />
    </div>
  );
};

export default Desertas;
