
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  PrivateCruiseHero,
  PrivateCruiseOptions,
  PrivateCruiseFeatures,
  PrivateCruiseBooking,
  PrivateCruiseInfo
} from "@/components/sections";
import { PageHead, TourSchema, StructuredData } from "@/components/SEO";
import { AlertEmbed } from "@/components/AlertEmbed";

const PrivateCruise = () => {
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
        "name": "Private Cruise",
        "item": "https://seayou.pt/private-cruise"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead 
        title="Private Yacht Cruises in Madeira Island | SeaYou"
        description="Explore Madeira's stunning coastline with a private luxury yacht cruise. Choose between north and south coast routes for an unforgettable experience."
        keywords="private cruise Madeira, yacht charter Madeira, luxury boat tour, private boat Madeira, exclusive sailing Madeira"
        canonicalUrl="https://seayou.pt/private-cruise"
        ogImage="https://extranet.seayou.pt/photos/pta-s-lourenco.jpg"
      >
        <meta name="robots" content="index, follow" />
      </PageHead>
      
      <TourSchema 
        name="Private Luxury Catamaran Experience"
        description="Custom private cruises along Madeira's beautiful coastline with your own dedicated crew."
        image="https://extranet.seayou.pt/photos/pta-s-lourenco.jpg"
        price="450.00"
        duration="PT2H30M"
      />
      <StructuredData data={breadcrumbSchema} />
      
      <Navbar />
      
      <main className="flex-grow">
        <PrivateCruiseHero />
        <PrivateCruiseOptions />
        
        {/* Alert banner placed in a white background section */}
        <div className="w-full bg-white py-4">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-center text-lg font-medium text-blue-700 mb-3">Service Alerts</h3>
              <AlertEmbed />
            </div>
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
