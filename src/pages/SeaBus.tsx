
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  SeaBusHero, 
  SeaBusFeatures, 
  SeaBusBooking,
  ScheduleDisplay,
  SeaBusMapImage
} from "@/components/sections";
import { FAQSection } from "@/components/sections/FAQSection";
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
    },
    {
      question: "Can I bring luggage on the SeaBus?",
      answer: "Yes, passengers are allowed to bring a reasonable amount of luggage. There's dedicated storage space on board, but we recommend traveling light for comfort."
    },
    {
      question: "Do I need to book tickets in advance?",
      answer: "While you can purchase tickets at our terminals, we strongly recommend booking in advance, especially during peak tourist season, to guarantee your seat."
    },
    {
      question: "Are pets allowed on the SeaBus?",
      answer: "Small pets in appropriate carriers are permitted on board. Service animals are always welcome. Please inform us in advance if you'll be traveling with a pet."
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
      {/* We no longer need this since we're using the FAQSection component which includes FAQSchema */}
      {/* <FAQSchema questions={faqQuestions} /> */}
      <StructuredData data={breadcrumbSchema} />
      
      <Navbar />
      
      <main className="flex-grow">
        <SeaBusHero />
        <SeaBusMapImage />
        
        <div className="w-full bg-white py-4">
          <div className="container mx-auto px-4">
            <AlertEmbed />
          </div>
        </div>
        
        <ScheduleDisplay />
        <SeaBusFeatures />
        <SeaBusBooking />
        
        {/* FAQ Section */}
        <FAQSection 
          title="SeaBus Service FAQs"
          description="Find answers to common questions about our SeaBus marine connections."
          questions={faqQuestions}
        />
      </main>
      <Footer />
    </div>
  );
};

export default SeaBus;
