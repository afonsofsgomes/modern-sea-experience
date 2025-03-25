
import { 
  Compass, 
  Car, 
  Umbrella, 
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
                  <Palmtree className="h-4 w-4 text-blue-700" />
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
            
            {/* Full-Day Tour - Mobile - Updated to show Coming Soon instead of Join Waitlist */}
            <div className="bg-white border border-purple-100 rounded-lg shadow-sm overflow-hidden relative">
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
                <div className="w-full bg-purple-200 text-purple-800 text-sm font-medium py-2 px-4 rounded-md text-center">
                  Coming Soon
                </div>
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
            
            {/* Full-Day Tour - Updated to show Coming Soon message */}
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
                
                <div className="flex justify-center items-center h-[300px] bg-purple-50 rounded-lg">
                  <div className="text-center px-6">
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">Coming Soon</h3>
                    <p className="text-sm text-purple-600">
                      We're preparing an unforgettable full-day experience for you. Stay tuned!
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
