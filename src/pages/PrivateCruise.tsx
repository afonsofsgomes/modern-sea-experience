
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
      
      {/* Alert banner for weather and tour disruptions */}
      <div className="w-full bg-white shadow-md">
        <AlertEmbed />
      </div>
      
      <main className="flex-grow">
        <PrivateCruiseHero />
        <PrivateCruiseOptions />
        <PrivateCruiseFeatures />
        <PrivateCruiseInfo />
        <PrivateCruiseBooking />
      </main>
      <Footer />
    </div>
  );
};

export default PrivateCruise;
