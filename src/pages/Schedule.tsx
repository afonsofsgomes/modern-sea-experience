
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Helmet } from "react-helmet";
import { ScheduleTabs } from "@/components/schedule";

const Schedule = () => {
  return (
    <>
      <Helmet>
        <title>Sailing Schedule | SeaYou Maritime Services</title>
        <meta name="description" content="View our complete sailing schedule for all routes and services." />
      </Helmet>
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
