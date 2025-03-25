
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DesertasHero } from "@/components/sections/DesertasHero";
import { DesertasAbout } from "@/components/sections/DesertasAbout";
import { DesertasItinerary } from "@/components/sections/DesertasItinerary";
import { DesertasWildlife } from "@/components/sections/DesertasWildlife";
import { DesertasScheduleInfo } from "@/components/sections/DesertasScheduleInfo";
import { DesertasPreparation } from "@/components/sections/DesertasPreparation";
import { DesertasBooking } from "@/components/sections/DesertasBooking";
import { DesertasGallery } from "@/components/sections/DesertasGallery";
import { DesertasGroupBooking } from "@/components/sections/DesertasGroupBooking";
import { DesertasFloatingCTA } from "@/components/sections/DesertasFloatingCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHead, TourSchema, StructuredData, BreadcrumbNav } from "@/components/SEO";
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

  // FAQ data for Desertas
  const desertasFAQs = [
    {
      question: "What wildlife might we see on the Desertas Islands tour?",
      answer: "The Desertas Islands are home to several unique species, including the endangered Desertas large wolf spider, the rare monk seal, various seabirds like Cory's shearwaters and Bulwer's petrels, and many endemic plant species. Marine life like dolphins and whales may also be spotted during the boat journey."
    },
    {
      question: "Is there any walking or hiking involved in the Desertas tour?",
      answer: "Yes, the tour includes a guided walk on Deserta Grande, the main island. The terrain can be uneven, so comfortable walking shoes are recommended. The walk is moderate in difficulty but can be adjusted based on group capabilities."
    },
    {
      question: "Can we swim at the Desertas Islands?",
      answer: "Depending on sea conditions and time constraints, there may be opportunities for swimming in the crystal-clear waters around the islands. This is subject to the guide's discretion and weather conditions on the day."
    },
    {
      question: "Are meals included in the Desertas Islands tour?",
      answer: "No, meals are not included in the standard tour package. We recommend bringing your own snacks or you can purchase refreshments and snacks onboard. Water is provided."
    },
    {
      question: "What should I bring for the Desertas Islands tour?",
      answer: "We recommend bringing sunscreen, a hat, sunglasses, a light jacket or windbreaker, comfortable walking shoes, a camera, binoculars if you have them for wildlife spotting, and a small backpack. Water bottles will be provided."
    },
    {
      question: "Is the Desertas Islands tour suitable for children?",
      answer: "The tour is suitable for children ages 8 and up who are comfortable on boats. Keep in mind that the journey involves a few hours at sea and limited facilities on the islands. For younger children, we recommend our shorter coastal cruises instead."
    }
  ];

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
        
        {/* Add breadcrumbs below hero */}
        <div className="bg-white py-4">
          <div className="container mx-auto px-4">
            <BreadcrumbNav 
              items={[
                { label: 'Desertas Islands', path: '/desertas', isCurrentPage: true }
              ]}
            />
          </div>
        </div>
        
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
        <DesertasItinerary />
        <DesertasGroupBooking />
        <DesertasWildlife />
        <DesertasGallery />
        <DesertasScheduleInfo />
        <DesertasPreparation />
        <DesertasBooking />
        
        {/* FAQ Section */}
        <FAQSection 
          title="Desertas Islands Tour FAQs"
          description="Essential information about our wildlife and nature adventures to the Desertas Islands."
          questions={desertasFAQs}
        />
        
        {/* Floating CTA Button */}
        <DesertasFloatingCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Desertas;
