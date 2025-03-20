
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  PrivateCruiseHero,
  PrivateCruiseOptions,
  PrivateCruiseFeatures,
  PrivateCruiseBooking,
  PrivateCruiseInfo
} from "@/components/sections";
import { AlertEmbed } from "@/components/AlertEmbed";

const PrivateCruise = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <PrivateCruiseHero />
        <PrivateCruiseOptions />
        
        {/* Alert banner placed in a white background section */}
        <div className="w-full bg-white py-4">
          <div className="container mx-auto px-4">
            <AlertEmbed />
          </div>
        </div>
        
        <PrivateCruiseFeatures />
        <PrivateCruiseInfo />
        <PrivateCruiseBooking />
      </main>
      <Footer />
    </div>
  );
};

export default PrivateCruise;
