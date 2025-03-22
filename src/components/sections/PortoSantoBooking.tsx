
import { BokunWidget } from "@/components/BokunWidget";
import { ArrowRight, CalendarDays, Car, Clock, Compass, Fish, MapPin, Sailboat, Sunrise, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const PortoSantoBooking = () => {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-blue-900 rounded-full mb-4">
            Book Now
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-blue-900">
            Porto Santo Experiences
          </h2>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose your perfect Porto Santo adventure from our carefully crafted experiences.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6 md:p-8 text-center mb-12 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Schedule Information</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-4">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-blue-700" />
              <p className="font-medium">WEDNESDAY, THURSDAY, FRIDAY</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-700" />
              <p className="font-medium">Departure: 09:00 | Return: 17:00</p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-700" />
              <p className="font-medium">Caniçal Harbor</p>
            </div>
          </div>
        </div>
        
        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Basic Experience */}
          <Card className="bg-white border-0 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 relative overflow-hidden">
              <Sailboat className="absolute right-6 bottom-6 h-20 w-20 text-white/20" />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-bold text-white">Basic Experience</h3>
                <p className="text-white/90 text-sm mt-1">Self-guided island exploration</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Standard</span>
                </div>
                <h4 className="text-lg font-semibold mb-3">1-Day Porto Santo Experience</h4>
                <p className="text-gray-600 mb-4">
                  Round-trip transportation to Porto Santo's golden beaches. Explore the island at your own leisure.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Compass className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Self-guided exploration of Porto Santo</span>
                </div>
                <div className="flex items-start gap-3">
                  <Sunrise className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Full day on the golden beach</span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-blue-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Round-trip boat transportation</span>
                </div>
              </div>
              
              <BokunWidget 
                isCalendarWidget={true}
                productId="982788"
                bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
                className="min-h-[300px]" 
              />
            </CardContent>
          </Card>
          
          {/* Card 2: Half-Day Tour */}
          <Card className="bg-white border-0 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-green-500 to-green-700 relative overflow-hidden">
              <Car className="absolute right-6 bottom-6 h-20 w-20 text-white/20" />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-bold text-white">Half-Day Tour</h3>
                <p className="text-white/90 text-sm mt-1">Morning tour + afternoon leisure</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
                </div>
                <h4 className="text-lg font-semibold mb-3">1-Day Experience + Half-Day Tour</h4>
                <p className="text-gray-600 mb-4">
                  Morning guided tour with stories of Porto Santo's history, followed by free time to enjoy the beaches.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Morning guided island tour with local history</span>
                </div>
                <div className="flex items-start gap-3">
                  <Compass className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Free afternoon for beach & exploration</span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Round-trip boat transportation</span>
                </div>
              </div>
              
              <BokunWidget 
                isCalendarWidget={true}
                productId="985324"
                bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
                className="min-h-[300px]" 
              />
            </CardContent>
          </Card>
          
          {/* Card 3: Full-Day Tour (Coming Soon) */}
          <Card className="bg-white border-0 shadow-lg rounded-xl overflow-hidden transition-all duration-300 relative">
            <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center">
              <span className="bg-red-500 text-white font-bold py-2 px-6 rounded-full text-sm mb-4">Coming Soon</span>
              <p className="text-center text-gray-700 max-w-[80%]">Our Full Day Guided Experience will be available soon!</p>
            </div>
            <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-700 relative overflow-hidden">
              <Fish className="absolute right-6 bottom-6 h-20 w-20 text-white/20" />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-bold text-white">Full-Day Tour</h3>
                <p className="text-white/90 text-sm mt-1">Complete experience with activities</p>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Premium</span>
                </div>
                <h4 className="text-lg font-semibold mb-3">1-Day Experience + Full-Day Tour</h4>
                <p className="text-gray-600 mb-4">
                  Complete island experience with guided tour, local lunch, and water activities.
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Morning guided island tour with pirate stories</span>
                </div>
                <div className="flex items-start gap-3">
                  <Utensils className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Traditional Porto Santo lunch included</span>
                </div>
                <div className="flex items-start gap-3">
                  <Fish className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Afternoon kayaking near pristine caves</span>
                </div>
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-purple-700 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Round-trip boat transportation</span>
                </div>
              </div>
              
              <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-lg">
                <p className="text-gray-500">Booking available soon</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-2">
            All experiences include round-trip transportation from Funchal to Porto Santo.
          </p>
          <p className="text-gray-500 text-sm">
            By booking, you agree to our <a href="/terms" className="text-blue-600 hover:underline">terms and conditions</a>.
          </p>
        </div>
      </div>
    </section>
  );
};
