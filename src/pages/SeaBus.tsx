
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  SeaBusHero, 
  SeaBusFeatures, 
  SeaBusBooking,
  ScheduleDisplay,
  SeaBusMapImage,
  SeaBusGallery
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
      answer: "Journey times vary by route. Funchal to Calheta or Caniçal takes approximately 1 hour, while Calheta to Caniçal takes about 2 hours."
    },
    {
      question: "Are there refreshments available on board?",
      answer: "Yes, light refreshments and beverages are available for purchase on all SeaBus journeys."
    },
    {
      question: "Is the SeaBus service wheelchair accessible?",
      answer: "Yes, our SeaBus vessels are designed to accommodate wheelchair users with accessible facilities and boarding assistance. Please note that the bathroom on the boat is not wheelchair accessible, therefore wheelchair users should use the restrooms before entering the boat."
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
      answer: "As much as we love pets, we do not allow them on the boat, unless it's a service animal, properly trained. However, on our private tours, you can bring your friend!"
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
        title="SeaBus Madeira - Fast Marine Tours | SeaYou"
        description="Experience fast and comfortable boat tours around Madeira with SeaBus. Enjoy panoramic views and easy travel between key destinations. Book your tickets online!"
        keywords="SeaBus Madeira, boat tours Madeira, Madeira boat trips, marine excursions Madeira, seabus boat tours, coastal tours Madeira"
        canonicalUrl="https://seayou.pt/seabus"
        ogImage="https://extranet.seayou.pt/photos/boat1.jpg"
      >
        <meta name="robots" content="index, follow" />
      </PageHead>
      
      <TourSchema 
        name="SeaBus Madeira Tours"
        description="Fast and comfortable boat tours with panoramic views between key destinations in Madeira."
        image="https://extranet.seayou.pt/photos/boat1.jpg"
        price="25.00"
        duration="PT1H"
        startLocation="Funchal"
        endLocation="Caniçal"
        availability="https://schema.org/InStock"
      />
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
        <SeaBusGallery />
        <SeaBusBooking />
        
        {/* FAQ Section */}
        <FAQSection 
          title="SeaBus Service FAQs"
          description="Find answers to common questions about our SeaBus connections."
          questions={faqQuestions}
        />
      </main>
      <Footer />
    </div>
  );
};

export default SeaBus;
