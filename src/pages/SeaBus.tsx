
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  SeaBusHero, 
  SeaBusRoutes, 
  SeaBusFeatures, 
  SeaBusBooking,
  ScheduleDisplay
} from "@/components/sections";

const SeaBus = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <SeaBusHero />
        <SeaBusRoutes />
        <ScheduleDisplay />
        <SeaBusFeatures />
        <SeaBusBooking />
      </main>
      <Footer />
    </div>
  );
};

export default SeaBus;
