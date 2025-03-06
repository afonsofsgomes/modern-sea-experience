
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  PortoSantoHero, 
  PortoSantoAbout, 
  PortoSantoHighlights, 
  PortoSantoTours, 
  PortoSantoBooking 
} from "@/components/sections";
import { MetaTags, TourSchema, WebPageSchema } from "@/components/SEO";
import { Helmet } from "react-helmet";
import { ImagePreload } from "@/components/ImagePreload";

const PortoSanto = () => {
  // Critical images to preload
  const criticalImages = [
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags 
        title="Porto Santo Day Trip - Golden Island Excursion | SeaYou"
        description="Experience Porto Santo's stunning 9km golden beach with our convenient day trips from Madeira. Book your ferry tickets and explore the Golden Island."
        keywords="Porto Santo ferry, Porto Santo beach, day trip Porto Santo, golden beach Madeira, ferry Madeira to Porto Santo"
      />
      <Helmet>
        <link rel="canonical" href="https://seayou.pt/porto-santo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seayou.pt/porto-santo" />
        <meta property="og:title" content="Porto Santo Day Trip - Golden Island Excursion | SeaYou" />
        <meta property="og:description" content="Experience Porto Santo's stunning 9km golden beach with our convenient day trips from Madeira." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Porto Santo Day Trip - Golden Island Excursion" />
        <meta name="twitter:description" content="Experience Porto Santo's stunning 9km golden beach with SeaYou." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" />
      </Helmet>
      <TourSchema 
        name="Porto Santo Day Trip"
        description="Full day excursion to Porto Santo island featuring the famous 9km golden beach with therapeutic properties."
        image="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        price="80.00"
        duration="PT10H"
        startLocation="Funchal"
        endLocation="Funchal"
        availability="https://schema.org/InStock"
      />
      <WebPageSchema 
        title="Porto Santo Day Trip - Golden Island Excursion"
        description="Experience Porto Santo's stunning 9km golden beach with our convenient day trips from Madeira."
        image="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        type="TouristAttraction"
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
        <PortoSantoTours />
        <PortoSantoBooking />
      </main>
      <Footer />
    </div>
  );
};

export default PortoSanto;
