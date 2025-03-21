
import { BokunWidget } from "@/components/BokunWidget";

export const PortoSantoBooking = () => {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-blue-900 rounded-full mb-4">
            Book Now
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-blue-900">
            Porto Santo Experiences
          </h2>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose from our available Porto Santo packages. Book instantly to secure your spot.
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 text-center mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Schedule Information</h3>
          <p className="text-lg font-medium text-blue-800 mb-2">WEDNESDAY, THURSDAY, FRIDAY</p>
          <p className="text-gray-700 mb-4">Departure: 09:00 | Return: 17:00</p>
          <p className="text-sm text-gray-600">All Porto Santo experiences depart from Caniçal Harbor.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Porto Santo Just Tour */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Porto Santo 1-Day Experience</h3>
            <p className="text-muted-foreground mb-4">Self-guided tour with transportation to Porto Santo's golden beaches.</p>
            <div className="bg-blue-50 text-blue-800 py-2 px-3 rounded text-sm font-medium mb-6">Just Tour</div>
            <BokunWidget 
              isCalendarWidget={true}
              productId="982788"
              bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
              className="min-h-[450px]" 
            />
          </div>
          
          {/* Porto Santo Half Day Guided Experience */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Porto Santo 1-Day Experience</h3>
            <p className="text-muted-foreground mb-4">Morning guided tour with free afternoon to explore beaches at your leisure.</p>
            <div className="bg-green-50 text-green-800 py-2 px-3 rounded text-sm font-medium mb-6">Half Day Guided</div>
            <BokunWidget 
              isCalendarWidget={true}
              productId="985324"
              bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
              className="min-h-[450px]" 
            />
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-blue-900 mb-2">Full Day Guided Tour</h3>
            <p className="text-muted-foreground">Complete island tour with professional guide and activities included.</p>
            <div className="inline-block bg-red-50 text-red-800 py-2 px-3 rounded text-sm font-medium mt-4">Coming Soon</div>
          </div>
          <p className="text-center text-muted-foreground">
            Our Full Day Guided Tour option will be available soon. Please check back later or contact us for more information.
          </p>
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 text-sm mt-4">
            All tours include round-trip transportation from Funchal to Porto Santo.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            By booking, you agree to our terms and conditions.
          </p>
        </div>
      </div>
    </section>
  );
};
