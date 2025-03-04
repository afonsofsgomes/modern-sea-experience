
import { Button } from "@/components/ui/button";

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
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="flex flex-col items-center justify-center space-y-6">
              <p className="text-lg font-medium">Ready to explore the pristine Desertas Islands?</p>
              <p className="text-center text-muted-foreground">
                Due to conservation measures and limited capacity, we recommend booking this experience well in advance.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
                Contact Us for Availability
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                * This expedition operates seasonally and is weather dependent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
