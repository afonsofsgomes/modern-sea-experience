
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DesertasHero } from "@/components/sections/DesertasHero";
import { DesertasAbout } from "@/components/sections/DesertasAbout";
import { DesertasBooking } from "@/components/sections/DesertasBooking";
import { PageHead, TourSchema, StructuredData } from "@/components/SEO";
import { AlertEmbed } from "@/components/AlertEmbed";

const Desertas = () => {
  // Breadcrumb data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://seayou.pt/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Desertas Islands",
        "item": "https://seayou.pt/desertas"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead 
        title="Desertas Islands Adventure | Wildlife & Nature Tour | SeaYou"
        description="Explore the uninhabited Desertas Islands with SeaYou's wildlife focused tour. Observe rare species and pristine landscapes on this unforgettable Madeira adventure."
        keywords="Desertas Islands tour, Madeira wildlife tour, Desertas boat trip, uninhabited islands Madeira, nature excursion Madeira"
        canonicalUrl="https://seayou.pt/desertas"
        ogImage="https://extranet.seayou.pt/photos/desertas.jpg"
      >
        <meta name="robots" content="index, follow" />
      </PageHead>
      
      <TourSchema 
        name="Desertas Islands Wildlife Adventure"
        description="Visit the uninhabited Desertas Islands to observe rare wildlife and pristine natural landscapes with our specialized tour."
        image="https://extranet.seayou.pt/photos/desertas.jpg"
        price="85.00"
        duration="PT6H"
      />
      <StructuredData data={breadcrumbSchema} />
      
      <Navbar />
      
      <main className="flex-grow">
        <DesertasHero />
        
        {/* Alert banner placed in a white background section */}
        <div className="w-full bg-white py-4">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-center text-lg font-medium text-blue-700 mb-3">Service Alerts</h3>
              <AlertEmbed />
            </div>
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
