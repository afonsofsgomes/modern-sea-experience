
import { BokunWidget } from "@/components/BokunWidget";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const SeaBusBooking = () => {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-blue-900">
          Book Your SeaBus Experience
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-5xl mx-auto">
          <div className="mb-6 flex items-center justify-center">
            <div className="flex items-center bg-blue-50 rounded-full px-4 py-2">
              <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
              <span className="text-sm font-medium text-blue-800">Rated 5.0 by our customers</span>
            </div>
          </div>
          
          <BokunWidget 
            productId="978723"
            bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
            isCalendarWidget={true}
            className="min-h-[600px]" 
          />
        </div>
      </div>
    </section>
  );
};
