
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DesertasHero } from "@/components/sections/DesertasHero";
import { DesertasAbout } from "@/components/sections/DesertasAbout";
import { DesertasBooking } from "@/components/sections/DesertasBooking";

const Desertas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DesertasHero />
        <DesertasAbout />
        <DesertasBooking />
      </main>
      <Footer />
    </div>
  );
};

export default Desertas;
