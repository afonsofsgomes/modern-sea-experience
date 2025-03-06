
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  SeaBusHero, 
  SeaBusRoutes, 
  SeaBusFeatures, 
  SeaBusBooking,
  ScheduleDisplay
} from "@/components/sections";
import { MetaTags, TourSchema, FAQSchema, WebPageSchema } from "@/components/SEO";
import { Helmet } from "react-helmet";
import { ImagePreload } from "@/components/ImagePreload";

const SeaBus = () => {
  // Critical images to preload
  const criticalImages = [
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    "https://extranet.seayou.pt/photos/boat1.jpg"
  ];

  // FAQ data for structured data
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

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags 
        title="SeaBus Madeira - Fast Marine Connections | SeaYou"
        description="Experience fast and comfortable sea transportation around Madeira with SeaBus. Enjoy panoramic views and easy travel between key destinations. Book your tickets online!"
        keywords="SeaBus Madeira, sea transportation Madeira, Madeira ferry, boat connections Madeira, marine transport Madeira"
      />
      <Helmet>
        <link rel="canonical" href="https://seayou.pt/seabus" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seayou.pt/seabus" />
        <meta property="og:title" content="SeaBus Madeira - Fast Marine Connections | SeaYou" />
        <meta property="og:description" content="Experience fast and comfortable sea transportation around Madeira with SeaBus. Enjoy panoramic views and easy travel between key destinations." />
        <meta property="og:image" content="https://extranet.seayou.pt/photos/boat1.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SeaBus Madeira - Fast Marine Connections" />
        <meta name="twitter:description" content="Fast sea transportation around Madeira Island with panoramic views." />
        <meta name="twitter:image" content="https://extranet.seayou.pt/photos/boat1.jpg" />
      </Helmet>
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
      <WebPageSchema 
        title="SeaBus Madeira - Fast Marine Connections"
        description="Experience fast and comfortable sea transportation around Madeira with SeaBus. Enjoy panoramic views and easy travel."
        image="https://extranet.seayou.pt/photos/boat1.jpg"
        type="ItemPage"
        breadcrumbs={[
          { name: "Home", url: "https://seayou.pt/" },
          { name: "SeaBus", url: "https://seayou.pt/seabus" }
        ]}
      />
      <ImagePreload images={criticalImages} highPriority={true} />
      
      <Navbar />
      <main className="flex-grow">
        <SeaBusHero />
        <SeaBusRoutes />
        <ScheduleDisplay />
        <SeaBusFeatures />
        <SeaBusBooking />
      </main>
      <Footer />
    </div>
  );
};

export default SeaBus;
