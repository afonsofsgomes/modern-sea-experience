
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const DesertasAbout = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Experience the Uninhabited Desertas Islands
            </h2>
            <p className="text-lg text-muted-foreground">
              A wildlife sanctuary and unique natural reserve
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              The Desertas Islands are a small archipelago located about 25 km southeast of Madeira, consisting of three islands: Ilhéu Chão, Deserta Grande, and Bugio. These uninhabited islands are a nature reserve and home to rare species, including the critically endangered Desertas wolf spider and the Mediterranean monk seal.
            </p>
            
            <p>
              Our guided expedition offers a rare opportunity to visit this protected natural sanctuary and observe its unique wildlife in their natural habitat, all while enjoying the breathtaking landscapes and pristine waters surrounding the islands.
            </p>
            
            <h3 className="mt-8 mb-4 text-xl font-medium">What to Expect</h3>
            
            <ul className="space-y-2">
              <li>Opportunities to spot rare wildlife including seabirds, marine life, and endemic species</li>
              <li>Snorkeling in crystal clear waters</li>
              <li>Snacks and refreshments available for purchase</li>
              <li>Environmental conservation briefing</li>
            </ul>
            
            <p className="mt-8 italic">
              Note: As a protected nature reserve, our visits follow strict guidelines to minimize environmental impact. Group sizes are limited and certain areas may be restricted depending on conservation needs and weather conditions.
            </p>
            
            <div className="text-center mt-10">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={scrollToBooking}
              >
                Reserve Your Spot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
