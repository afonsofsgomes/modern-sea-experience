
import { 
  Compass, 
  Car, 
  Umbrella, 
  Ship,
  Utensils,
  Fish,
  Map,
  Binoculars,
  PalmTree
} from "lucide-react";
import { 
  BookingHeader, 
  ExperienceCard, 
  BookingFooter 
} from "@/components/porto-santo";
import { useIsMobile } from "@/hooks/use-mobile";
import { BokunWidget } from "@/components/BokunWidget";

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
            <div className="bg-white border border-blue-100 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">Basic Experience</h3>
                    <p className="text-sm text-blue-600">Self-guided exploration</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Standard
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm text-gray-600">Round-trip boat tour to Porto Santo's golden beaches. Explore at your own leisure.</p>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-blue-700" />
                  <span className="text-xs text-gray-700">Self-guided exploration</span>
                </div>
                <div className="flex items-center gap-2">
                  <PalmTree className="h-4 w-4 text-blue-700" />
                  <span className="text-xs text-gray-700">Full day on the golden beach</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ship className="h-4 w-4 text-blue-700" />
                  <span className="text-xs text-gray-700">Round-trip boat tour</span>
                </div>
              </div>
              <div className="bg-gray-50 p-3">
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
              </div>
            </div>
            
            {/* Half-Day Tour - Mobile */}
            <div className="bg-white border border-green-100 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-green-100 to-green-200 p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-green-800">Half-Day Tour</h3>
                    <p className="text-sm text-green-600">Morning tour + leisure</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm text-gray-600">Guided boat tour with local history, followed by free beach time.</p>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-green-700" />
                  <span className="text-xs text-gray-700">Guided island tour with history</span>
                </div>
                <div className="flex items-center gap-2">
                  <Binoculars className="h-4 w-4 text-green-700" />
                  <span className="text-xs text-gray-700">Free time for beach & exploration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ship className="h-4 w-4 text-green-700" />
                  <span className="text-xs text-gray-700">Round-trip boat tour</span>
                </div>
              </div>
              <div className="bg-gray-50 p-3">
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
              </div>
            </div>
            
            {/* Full-Day Tour - Mobile - Updated to remove Coming Soon overlay */}
            <div className="bg-white border border-purple-100 rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-purple-800">Full-Day Tour</h3>
                    <p className="text-sm text-purple-600">Complete experience</p>
                  </div>
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Premium
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm text-gray-600">Complete island experience with guided tour, lunch, and activities.</p>
              </div>
              <div className="p-4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Car className="h-4 w-4 text-purple-700" />
                  <span className="text-xs text-gray-700">Guided island tour</span>
                </div>
                <div className="flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-purple-700" />
                  <span className="text-xs text-gray-700">Traditional lunch included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Fish className="h-4 w-4 text-purple-700" />
                  <span className="text-xs text-gray-700">Afternoon kayaking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ship className="h-4 w-4 text-purple-700" />
                  <span className="text-xs text-gray-700">Round-trip boat tour</span>
                </div>
              </div>
              <div className="bg-gray-50 p-3">
                <button className="w-full bg-purple-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Desktop version - keep the original layout but update the Full-Day Tour
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
                { icon: PalmTree, text: "Full day on the golden beach" },
                { icon: Ship, text: "Round-trip boat tour" }
              ]}
              productId="982788"
              bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
            />
            
            {/* Half-Day Tour */}
            <ExperienceCard 
              title="Half-Day Tour"
              subtitle="Morning tour + afternoon leisure"
              description="Guided boat tour with stories of Porto Santo's history, followed by free time to enjoy the beaches."
              badge={{ text: "Popular", color: "green" }}
              gradient={{ from: "green", to: "green" }}
              icon={Map}
              features={[
                { icon: Car, text: "Guided island tour with local history" },
                { icon: Binoculars, text: "Free afternoon for beach & exploration" },
                { icon: Ship, text: "Round-trip boat tour" }
              ]}
              productId="985324"
              bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
            />
            
            {/* Full-Day Tour - Updated to show a join waitlist UI instead of Coming Soon overlay */}
            <ExperienceCard 
              title="Full-Day Tour"
              subtitle="Complete experience with activities"
              description="Complete island experience with guided boat tour, local lunch, and water activities."
              badge={{ text: "Premium", color: "purple" }}
              gradient={{ from: "purple", to: "purple" }}
              icon={Fish}
              features={[
                { icon: Car, text: "Guided island tour with pirate stories" },
                { icon: Utensils, text: "Traditional Porto Santo lunch included" },
                { icon: Fish, text: "Afternoon kayaking near pristine caves" },
                { icon: Ship, text: "Round-trip boat tour" }
              ]}
            />
          </div>
        )}
        
        {/* Booking Widgets - For mobile view these are linked from the card buttons */}
        {isMobile && (
          <div className="space-y-8">
            <div id="basic-booking" className="scroll-mt-4">
              <h3 className="text-lg font-semibold mb-3 text-blue-800">Basic Experience - Book Now</h3>
              <BokunWidget 
                isCalendarWidget={true}
                productId="982788"
                bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
                className="min-h-[350px]" 
              />
            </div>
            
            <div id="half-day-booking" className="scroll-mt-4">
              <h3 className="text-lg font-semibold mb-3 text-green-800">Half-Day Tour - Book Now</h3>
              <BokunWidget 
                isCalendarWidget={true}
                productId="985324"
                bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
                className="min-h-[350px]" 
              />
            </div>
          </div>
        )}
        
        <BookingFooter />
      </div>
    </section>
  );
};
