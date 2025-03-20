
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScheduleTabs } from "@/components/schedule";
import { PageHead, StructuredData } from "@/components/SEO";

const Schedule = () => {
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
        "name": "Schedule",
        "item": "https://seayou.pt/schedule"
      }
    ]
  };

  return (
    <>
      <PageHead
        title="Sailing Schedule | SeaYou Maritime Services"
        description="View our complete sailing schedule for all SeaYou routes and services. Plan your journey with up-to-date timetables for SeaBus, Porto Santo and Desertas Islands."
        keywords="SeaYou schedule, Madeira boat timetable, SeaBus schedule, Porto Santo ferry times, Desertas Islands tour times"
        canonicalUrl="https://seayou.pt/schedule"
      >
        <meta name="robots" content="index, follow" />
      </PageHead>
      <StructuredData data={breadcrumbSchema} />
      
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Sailing Schedule</h1>
            <ScheduleTabs />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Schedule;
