
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  SeaBusHero, 
  SeaBusRoutes, 
  SeaBusFeatures, 
  SeaBusBooking,
  ScheduleDisplay,
  SeaBusMapImage
} from "@/components/sections";
import { SeaBusDestinations } from "@/components/sections/SeaBusDestinations";
import { PageHead, TourSchema, FAQSchema, StructuredData } from "@/components/SEO";
import { AlertEmbed } from "@/components/AlertEmbed";

const SeaBus = () => {
  const faqQuestions = [
    {
      question: "What is the SeaBus service in Madeira?",
      answer: "SeaBus is a fast and comfortable sea transportation service connecting key destinations around Madeira Island, offering panoramic views during your journey."
    },
    {
      question: "How long does the SeaBus journey take?",
      answer: "Journey times vary by route. Funchal to Caniçal takes approximately 1 hour, while Funchal to Calheta takes about 1 hour and 15 minutes."
    },
    {
      question: "Are there refreshments available on board?",
      answer: "Yes, light refreshments and beverages are available for purchase on all SeaBus journeys."
    },
    {
      question: "Is the SeaBus service wheelchair accessible?",
      answer: "Yes, our SeaBus vessels are designed to accommodate wheelchair users with accessible facilities and boarding assistance."
    }
  ];

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
        "name": "SeaBus",
        "item": "https://seayou.pt/seabus"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead 
        title="SeaBus Madeira - Fast Marine Connections | SeaYou"
        description="Experience fast and comfortable sea transportation around Madeira with SeaBus. Enjoy panoramic views and easy travel between key destinations. Book your tickets online!"
        keywords="SeaBus Madeira, sea transportation Madeira, Madeira ferry, boat connections Madeira, marine transport Madeira"
        canonicalUrl="https://seayou.pt/seabus"
        ogImage="https://extranet.seayou.pt/photos/boat1.jpg"
      >
        <meta name="robots" content="index, follow" />
      </PageHead>
      
      <TourSchema 
        name="SeaBus Madeira Connections"
        description="Fast and comfortable sea transportation with panoramic views between key destinations in Madeira."
        image="https://extranet.seayou.pt/photos/boat1.jpg"
        price="25.00"
        duration="PT1H"
        startLocation="Funchal"
        endLocation="Caniçal"
        availability="https://schema.org/InStock"
      />
      <FAQSchema questions={faqQuestions} />
      <StructuredData data={breadcrumbSchema} />
      
      <Navbar />
      
      <main className="flex-grow">
        <SeaBusHero />
        <SeaBusRoutes />
        
        <div className="w-full bg-white py-4">
          <div className="container mx-auto px-4">
            <AlertEmbed />
          </div>
        </div>
        
        <SeaBusDestinations />
        <SeaBusMapImage />
        <ScheduleDisplay />
        <SeaBusFeatures />
        <SeaBusBooking />
      </main>
      <Footer />
    </div>
  );
};

export default SeaBus;
