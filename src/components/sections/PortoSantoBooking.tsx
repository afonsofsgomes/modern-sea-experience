
import { BokunWidget } from "@/components/BokunWidget";

export const PortoSantoBooking = () => {
  return (
    <section className="py-20 bg-white">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Porto Santo 1-Day Experience</h3>
            <BokunWidget 
              isProductPage={true}
              productId="982788"
              bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
              className="min-h-[450px]" 
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Porto Santo 1-Day Experience + Half Day Tour</h3>
            <BokunWidget 
              isProductPage={true}
              productId="985324"
              bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
              className="min-h-[450px]" 
            />
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-500 text-sm mt-4">
            By booking, you agree to our terms and conditions.
          </p>
        </div>
      </div>
    </section>
  );
};
