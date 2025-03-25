
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  PortoSantoHero,
  PortoSantoAbout,
  PortoSantoHighlights,
  PortoSantoBooking
} from "@/components/sections";
import { FAQSection } from "@/components/sections/FAQSection";
import { PageHead, TourSchema, StructuredData } from "@/components/SEO";
import { AlertEmbed } from "@/components/AlertEmbed";
import { AutoImageCarousel } from "@/components/AutoImageCarousel";

const PortoSanto = () => {
  // Carousel images for Porto Santo
  const portoSantoImages = [
    "https://extranet.seayou.pt/photos/products/pxo/1.jpg",
    "https://extranet.seayou.pt/photos/products/pxo/2.jpg",
    "https://extranet.seayou.pt/photos/products/pxo/3.jpg",
    "https://extranet.seayou.pt/photos/products/pxo/4.jpg",
    "https://extranet.seayou.pt/photos/products/pxo/5.jpg",
  ];

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

  // FAQ data for Porto Santo
  const portoSantoFAQs = [
    {
      question: "How long is the boat trip to Porto Santo?",
      answer: "The boat trip from Caniçal to Porto Santo takes approximately 1 hour each way. This time can vary depending on the sea conditions and operations, but you'll be able to enjoy the scenic views throughout the journey."
    },
    {
      question: "What should I bring for a day trip to Porto Santo?",
      answer: "We recommend bringing sunscreen, a hat, swimwear, a towel, water, and a light jacket or windbreaker for the boat journey. You may also want to bring some cash for food or souvenirs, although most places accept credit cards."
    },
    {
      question: "Are food and drinks included in the Porto Santo experiences?",
      answer: "None of the experiences currently includes food or drinks. Soon, the full-day tour (coming soon) will include a traditional lunch. You're welcome to bring your own snacks and water for all experiences."
    },
    {
      question: "Where does the boat depart from?",
      answer: "Marina da Quinta do Lorde - Madeira."
    },
    {
      question: "Is there an onboard bar?",
      answer: "Yes, there's an onboard bar with light refreshments and drinks."
    },
    {
      question: "Can I stay in Porto Santo and come back on a different day?",
      answer: "No, the tours are sold on a same-day roundtrip purpose, therefore, all passengers who go to Porto Santo must come back on the same day to Madeira."
    },
    {
      question: "Can we bring pets?",
      answer: "No, pets are not allowed on our Porto Santo experiences."
    },
    {
      question: "Is the golden beach of Porto Santo suitable for children?",
      answer: "Yes! Porto Santo's beach is perfect for families with children. The sand slopes gently into the sea, creating shallow waters near the shore, and the water is typically calm and clear, making it ideal for young swimmers."
    },
    {
      question: "What makes Porto Santo's sand special?",
      answer: "Porto Santo's sand is renowned for its therapeutic properties. Rich in minerals like calcium and magnesium, the sand is believed to help with various ailments, particularly rheumatic and orthopedic conditions. Many visitors enjoy sand therapy by burying parts of their body in the warm golden sand."
    },
    {
      question: "Can I explore the island on my own during the free time?",
      answer: "Absolutely! During your free time, you can explore the island at your leisure. There are taxis and car rental services available if you wish to venture further from the main beach area."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PageHead 
        title="Porto Santo Golden Island Day Trip | SeaYou Madeira"
        description="Experience the golden beaches of Porto Santo Island with SeaYou's 1-Day Experience. Enjoy a perfect day trip from Madeira to this therapeutic paradise."
        keywords="Porto Santo day trip, Porto Santo from Madeira, Porto Santo experience, golden beach Porto Santo, Porto Santo tour"
        canonicalUrl="https://seayou.pt/porto-santo"
        ogImage="https://extranet.seayou.pt/photos/pxo.jpg"
      >
        <meta name="robots" content="index, follow" />
      </PageHead>
      
      <TourSchema 
        name="Porto Santo Golden Island Experience"
        description="Experience the therapeutic golden sands of Porto Santo with our 1-Day Experience from Madeira."
        image="https://extranet.seayou.pt/photos/pxo.jpg"
        price="65.00"
        duration="PT2H30M"
        maxAttendeeCapacity={12}
      />
      <StructuredData data={breadcrumbSchema} />
      
      <Navbar />
      
      <main className="flex-grow">
        <PortoSantoHero />
        
        {/* Image Carousel Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-display font-medium mb-8 text-center text-blue-900">
                Porto Santo's Golden Beaches
              </h2>
              <AutoImageCarousel 
                images={portoSantoImages} 
                altPrefix="Porto Santo Island"
                className="mx-auto shadow-lg rounded-lg overflow-hidden"
                aspectRatio="wide"
                objectFit="contain"
              />
            </div>
          </div>
        </section>
        
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
        
        {/* FAQ Section */}
        <FAQSection 
          title="Porto Santo Experience FAQs"
          description="Common questions about our Porto Santo day trips and experiences."
          questions={portoSantoFAQs}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PortoSanto;
