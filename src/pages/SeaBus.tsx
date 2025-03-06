
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  SeaBusHero, 
  SeaBusRoutes, 
  SeaBusFeatures, 
  SeaBusBooking,
  ScheduleDisplay
} from "@/components/sections";
import { MetaTags, TourSchema } from "@/components/SEO";

const SeaBus = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags 
        title="SeaBus Madeira - Fast Marine Connections | SeaYou"
        description="Experience fast and comfortable sea transportation around Madeira with SeaBus. Enjoy panoramic views and easy travel between key destinations. Book your tickets online!"
        keywords="SeaBus Madeira, sea transportation Madeira, Madeira ferry, boat connections Madeira, marine transport Madeira"
      />
      <TourSchema 
        name="SeaBus Madeira Connections"
        description="Fast and comfortable sea transportation with panoramic views between key destinations in Madeira."
        image="https://extranet.seayou.pt/photos/boat1.jpg"
        price="25.00"
        duration="PT1H"
      />
      
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
