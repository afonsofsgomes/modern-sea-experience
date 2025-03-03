
import { BokunWidget } from "@/components/BokunWidget";

export const PrivateCruiseBooking = () => {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-blue-900">
          Book Your Private Cruise
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <BokunWidget 
            isProductPage={true}
            productId="936700"
            bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
            className="min-h-[600px]" 
          />
        </div>
      </div>
    </section>
  );
};
