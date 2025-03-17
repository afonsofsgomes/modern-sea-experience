
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  PrivateCruiseHero,
  PrivateCruiseOptions,
  PrivateCruiseFeatures,
  PrivateCruiseBooking
} from "@/components/sections";
import { Clock, Ship, Users } from "lucide-react";
import { motion } from "framer-motion";

const PrivateCruise = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PrivateCruiseHero />
        <PrivateCruiseOptions />
        <PrivateCruiseFeatures />
        
        {/* Note about all private cruises */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto">
              <h3 className="text-2xl font-medium mb-4 text-center text-[#253D7F]">Important Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-6">
                <div className="flex flex-col items-center">
                  <Clock className="h-10 w-10 text-[#E95543] mb-2" />
                  <p className="font-medium">Duration</p>
                  <p>2.5 hours</p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="h-10 w-10 text-[#E95543] mb-2" />
                  <p className="font-medium">Capacity</p>
                  <p>Up to 12 passengers</p>
                </div>
                <div className="flex flex-col items-center">
                  <Ship className="h-10 w-10 text-[#E95543] mb-2" />
                  <p className="font-medium">Departure Time</p>
                  <p>13:00</p>
                </div>
              </div>
              <p className="text-center text-gray-600">All private cruises from Calheta or Caniçal depart at 13:00.</p>
            </div>
          </div>
        </section>
        
        <PrivateCruiseBooking />
      </main>
      <Footer />
    </div>
  );
};

export default PrivateCruise;
