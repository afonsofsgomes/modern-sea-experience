
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  PortoSantoHero,
  PortoSantoAbout,
  PortoSantoHighlights,
  PortoSantoBooking
} from "@/components/sections";

const PortoSanto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PortoSantoHero />
        <PortoSantoAbout />
        <PortoSantoHighlights />
        <PortoSantoBooking />
      </main>
      <Footer />
    </div>
  );
};

export default PortoSanto;
