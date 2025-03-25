
import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Check, X } from "lucide-react";

export const PrivateCruiseBooking = () => {
  const isMobile = useIsMobile();
  const bookingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Check if URL has a hash that matches the booking section
    if (window.location.hash === '#booking' && bookingRef.current) {
      // Add a small delay to ensure the widget is loaded
      setTimeout(() => {
        bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);
  
  return (
    <section id="booking" className="py-20 bg-white" ref={bookingRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-blue-900">
          Book Your Private Cruise
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Inclusions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">What's Included</h3>
            <ul className="space-y-3">
              {[
                "Wi-Fi Onboard",
                "Exclusive Use of the Vessel",
                "Professional Crew or Guide",
                "Welcome Kit: Includes a welcome drink and some local finger-food",
                "Insurance Coverage",
                "Safety Equipment",
                "Onboard Bar for purchases"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Exclusions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">What's Not Included</h3>
            <ul className="space-y-3">
              {[
                "Meals and Drinks: Bar snacks are available for purchase, but not included in the package.",
                "Custom Requests: Any additional services outside the standard offering is subject to extra costs.",
                "Transfer Service - Transfer service it's not included, but it can be provided - contact us in order to book yours!"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Booking Notes */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Booking Information</h3>
            <p className="text-gray-700 mb-4">
              While it's possible to purchase tickets onboard, we strongly recommend booking in advance, especially during peak tourist season, to guarantee your seat.
            </p>
            <p className="text-gray-700">
              All private cruises are subject to availability and weather conditions. We'll contact you if there are any changes to your booking.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div 
            className="bokunWidget w-full min-h-[600px]" 
            data-src="https://widgets.bokun.io/online-sales/51f490fc-f867-4e8b-a0d8-cf7730297dde/experience-calendar/936700"
          ></div>
          <noscript>Please enable javascript in your browser to book</noscript>
        </div>
      </div>
    </section>
  );
};
