
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  PortoSantoHero,
  PortoSantoAbout,
  PortoSantoHighlights,
  PortoSantoBooking
} from "@/components/sections";
import { MetaTags, TourSchema, WebPageSchema } from "@/components/SEO";
import { ImagePreload } from "@/components/ImagePreload";

const PortoSanto = () => {
  // Critical images to preload
  const criticalImages = [
    "https://extranet.seayou.pt/photos/pxo.jpg"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags 
        title="Porto Santo Golden Island Day Trip | SeaYou Madeira"
        description="Experience the golden beaches of Porto Santo Island with SeaYou's dedicated ferry service. Enjoy a perfect day trip from Madeira to this therapeutic paradise."
        keywords="Porto Santo ferry, Porto Santo from Madeira, Porto Santo day trip, golden beach Porto Santo, Porto Santo tour"
      />
      <TourSchema 
        name="Porto Santo Golden Island Experience"
        description="Experience the therapeutic golden sands of Porto Santo with our dedicated ferry service from Madeira."
        image="https://extranet.seayou.pt/photos/pxo.jpg"
        price="65.00"
        duration="PT2H30M"
      />
      <WebPageSchema 
        title="Porto Santo Golden Island Day Trip"
        description="Experience the golden beaches of Porto Santo Island with SeaYou's dedicated ferry service."
        image="https://extranet.seayou.pt/photos/pxo.jpg"
        type="ItemPage"
        breadcrumbs={[
          { name: "Home", url: "https://seayou.pt/" },
          { name: "Porto Santo", url: "https://seayou.pt/porto-santo" }
        ]}
      />
      <ImagePreload images={criticalImages} highPriority={true} />
      
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
