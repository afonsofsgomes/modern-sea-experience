
import { BokunWidget } from "@/components/BokunWidget";

export const DesertasBooking = () => {
  return (
    <section id="booking" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-full">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Book Your Desertas Islands Adventure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Experience the natural beauty and wildlife of the Desertas Islands with our guided expedition
          </p>
          
          {/* Bokun Widget Calendar */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <BokunWidget 
              productId="999795"
              isCalendarWidget={true}
              className="mt-4"
            />
            <p className="text-sm text-muted-foreground mt-6">
              * This expedition operates seasonally and is weather dependent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
