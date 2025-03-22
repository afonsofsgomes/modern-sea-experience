
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  PrivateCruiseHero,
  PrivateCruiseOptions,
  PrivateCruiseFeatures,
  PrivateCruiseBooking,
  PrivateCruiseInfo
} from "@/components/sections";
import { FAQSection } from "@/components/sections/FAQSection";
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

  // FAQ data for Private Cruise
  const privateCruiseFAQs = [
    {
      question: "How many people can join a private cruise?",
      answer: "Our private cruises can accommodate up to 18 guests comfortably."
    },
    {
      question: "Can we customize the route for our private cruise?",
      answer: "Yes! While we offer suggested north and south coast routes, we're happy to customize your journey based on your preferences, weather conditions, and time constraints. Please contact us in advance and let us know your wishes!"
    },
    {
      question: "Are food and drinks included on private cruises?",
      answer: "We provide complimentary water, soft drinks, and local Madeira wine on all private cruises. Light snacks are also included. Full meal catering can be arranged for an additional fee with advance notice."
    },
    {
      question: "Can we stop for swimming during the cruise?",
      answer: "Absolutely! Weather and sea conditions permitting, we can make stops at secluded bays for swimming and snorkeling. We can provide snorkeling equipment for guests, subject to availability."
    },
    {
      question: "What happens if the weather is bad on our booked date?",
      answer: "Your safety is our priority. If weather conditions are unsuitable for sailing, we'll contact you to reschedule for another day during your stay or provide a full refund if rescheduling isn't possible."
    },
    {
      question: "Is the private cruise suitable for children and elderly passengers?",
      answer: "Yes, our cruises are designed to be enjoyed by guests of all ages. Our crew is experienced in assisting passengers with different mobility needs, and safety measures are in place for children, including appropriately sized life jackets."
    }
  ];

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
        
        {/* FAQ Section */}
        <FAQSection 
          title="Private Cruise FAQs"
          description="Everything you need to know about our private cruise."
          questions={privateCruiseFAQs}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PrivateCruise;
