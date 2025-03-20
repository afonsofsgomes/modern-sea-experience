
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  PortoSantoHero,
  PortoSantoAbout,
  PortoSantoHighlights,
  PortoSantoBooking
} from "@/components/sections";
import { PageHead, TourSchema, StructuredData } from "@/components/SEO";
import { AlertEmbed } from "@/components/AlertEmbed";

const PortoSanto = () => {
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
        "name": "Porto Santo",
        "item": "https://seayou.pt/porto-santo"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead 
        title="Porto Santo Golden Island Day Trip | SeaYou Madeira"
        description="Experience the golden beaches of Porto Santo Island with SeaYou's dedicated ferry service. Enjoy a perfect day trip from Madeira to this therapeutic paradise."
        keywords="Porto Santo ferry, Porto Santo from Madeira, Porto Santo day trip, golden beach Porto Santo, Porto Santo tour"
        canonicalUrl="https://seayou.pt/porto-santo"
        ogImage="https://extranet.seayou.pt/photos/pxo.jpg"
      >
        <meta name="robots" content="index, follow" />
      </PageHead>
      
      <TourSchema 
        name="Porto Santo Golden Island Experience"
        description="Experience the therapeutic golden sands of Porto Santo with our dedicated ferry service from Madeira."
        image="https://extranet.seayou.pt/photos/pxo.jpg"
        price="65.00"
        duration="PT2H30M"
      />
      <StructuredData data={breadcrumbSchema} />
      
      <Navbar />
      
      <main className="flex-grow">
        <PortoSantoHero />
        <PortoSantoAbout />
        
        {/* Alert banner placed in a white background section */}
        <div className="w-full bg-white py-4">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-center text-lg font-medium text-blue-700 mb-3">Service Alerts</h3>
              <AlertEmbed />
            </div>
          </div>
        </div>
        
        <PortoSantoHighlights />
        <PortoSantoBooking />
      </main>
      <Footer />
    </div>
  );
};

export default PortoSanto;
