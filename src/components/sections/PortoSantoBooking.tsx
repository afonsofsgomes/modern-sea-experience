
import { 
  Compass, 
  Car, 
  Ship,
  Utensils,
  Fish,
  Map,
  Binoculars,
  Palmtree
} from "lucide-react";
import { 
  BookingHeader, 
  ExperienceCard, 
  BookingFooter 
} from "@/components/porto-santo";
import { useIsMobile } from "@/hooks/use-mobile";
import { BokunWidget } from "@/components/BokunWidget";
import { MobileExperienceCard } from "@/components/porto-santo/MobileExperienceCard";
import { MobileBookingSection } from "@/components/porto-santo/MobileBookingSection";
import { ComingSoonContent } from "@/components/porto-santo/ComingSoonContent";

export const PortoSantoBooking = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="booking" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <BookingHeader />
        
        {/* Experience Cards - Compact mobile view */}
        {isMobile ? (
          <div className="space-y-6 mb-8">
            {/* Basic Experience - Mobile */}
            <MobileExperienceCard
              title="Basic Experience"
              subtitle="Self-guided exploration"
              description="Round-trip boat tour to Porto Santo's golden beaches. Explore at your own leisure."
              badgeText="Standard"
              badgeColor="blue"
              gradientFrom="blue"
              gradientTo="blue"
              features={[
                { icon: Compass, text: "Self-guided exploration" },
                { icon: Palmtree, text: "Full day on the golden beach" },
                { icon: Ship, text: "Round-trip boat tour" }
              ]}
              footer={
                <button
                  onClick={() => {
                    const bookingSection = document.getElementById('basic-booking');
                    if (bookingSection) {
                      bookingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  See availability
                </button>
              }
            />
            
            {/* Half-Day Tour - Mobile */}
            <MobileExperienceCard
              title="Half-Day Tour"
              subtitle="Morning tour + leisure"
              description="Round-trip boat tour to Porto Santo + Guided van tour with stories of Porto Santo's Pirates history, followed by free time to enjoy the beaches and the island"
              badgeText="Popular"
              badgeColor="green"
              gradientFrom="green"
              gradientTo="green"
              features={[
                { icon: Car, text: "Guided island tour with pirate stories" },
                { icon: Binoculars, text: "Free time for beach & exploration" },
                { icon: Ship, text: "Round-trip boat tour" }
              ]}
              footer={
                <button 
                  onClick={() => {
                    const bookingSection = document.getElementById('half-day-booking');
                    if (bookingSection) {
                      bookingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  See availability
                </button>
              }
            />
            
            {/* Full-Day Tour - Mobile - Coming Soon */}
            <MobileExperienceCard
              title="Full-Day Tour"
              subtitle="Complete experience"
              description="Complete island experience with guided tour, lunch, and activities."
              badgeText="Premium"
              badgeColor="purple"
              gradientFrom="purple"
              gradientTo="purple"
              features={[
                { icon: Car, text: "Guided island tour" },
                { icon: Utensils, text: "Traditional lunch included" },
                { icon: Fish, text: "Afternoon kayaking" },
                { icon: Ship, text: "Round-trip boat tour" }
              ]}
              footer={
                <div className="w-full bg-purple-200 text-purple-800 text-sm font-medium py-2 px-4 rounded-md text-center">
                  Coming Soon
                </div>
              }
            />
          </div>
        ) : (
          // Desktop version
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Basic Experience */}
            <ExperienceCard 
              title="Basic Experience"
              subtitle="Self-guided island exploration"
              description="Round-trip boat tour to Porto Santo's golden beaches. Explore the island at your own leisure."
              badge={{ text: "Standard", color: "blue" }}
              gradient={{ from: "blue", to: "blue" }}
              icon={Ship}
              features={[
                { icon: Compass, text: "Self-guided exploration of Porto Santo" },
                { icon: Palmtree, text: "Full day on the golden beach" },
                { icon: Ship, text: "Round-trip boat tour" }
              ]}
              productId="982788"
              bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
            />
            
            {/* Half-Day Tour */}
            <ExperienceCard 
              title="Half-Day Tour"
              subtitle="Morning tour + afternoon leisure"
              description="Round-trip boat tour to Porto Santo + Guided van tour with stories of Porto Santo's Pirates history, followed by free time to enjoy the beaches and the island"
              badge={{ text: "Popular", color: "green" }}
              gradient={{ from: "green", to: "green" }}
              icon={Map}
              features={[
                { icon: Car, text: "Guided island tour with pirate stories" },
                { icon: Binoculars, text: "Free afternoon for beach & exploration" },
                { icon: Ship, text: "Round-trip boat tour" }
              ]}
              productId="985324"
              bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
            />
            
            {/* Full-Day Tour - Coming Soon */}
            <div className="bg-white border-0 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl relative">
              <div className="h-36 sm:h-48 bg-gradient-to-r from-purple-100 to-purple-300 relative overflow-hidden">
                <Fish className="absolute right-6 bottom-6 h-20 w-20 text-white/30" />
                <div className="absolute inset-0 bg-white/5"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <h3 className="text-2xl font-bold text-gray-800">Full-Day Tour</h3>
                  <p className="text-gray-700 text-sm mt-1">Complete experience with activities</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Premium
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">1-Day Porto Santo Experience</h4>
                  <p className="text-gray-600 mb-4">
                    Complete island experience with guided boat tour, local lunch, and water activities.
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Car className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Guided island tour with pirate stories</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Utensils className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Traditional Porto Santo lunch included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Fish className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Afternoon kayaking near pristine caves</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Ship className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">Round-trip boat tour</span>
                  </div>
                </div>
                
                <ComingSoonContent />
              </div>
            </div>
          </div>
        )}
        
        {/* Booking Widgets - For mobile view these are linked from the card buttons */}
        {isMobile && (
          <div className="space-y-8">
            <MobileBookingSection
              id="basic-booking"
              title="Basic Experience - Book Now"
              color="blue"
              productId="982788"
              bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
            />
            
            <MobileBookingSection
              id="half-day-booking"
              title="Half-Day Tour - Book Now"
              color="green"
              productId="985324"
              bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
            />
          </div>
        )}
        
        <BookingFooter />
      </div>
    </section>
  );
};
