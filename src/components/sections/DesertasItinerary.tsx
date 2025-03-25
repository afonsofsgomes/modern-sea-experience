
import { MapPin, Clock, LocateFixed, Info, CheckCircle2, XCircle, Binoculars } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const DesertasItinerary = () => {
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
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
              Your Desertas Islands Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience a full day expedition to this protected natural sanctuary
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Itinerary Timeline */}
            <div className="relative border-l-2 border-green-600 pl-8 py-2 ml-4 md:ml-8 space-y-10">
              <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-[9px] top-0"></div>
              
              <div className="relative">
                <span className="flex items-center text-green-700 font-medium mb-2">
                  <Clock className="w-5 h-5 mr-2" /> 12:30 - Departure
                </span>
                <h3 className="text-xl font-medium mb-2">Setting Sail from Caniçal Harbor</h3>
                <p className="text-gray-600">
                  After a brief safety briefing, we'll depart from Caniçal Harbor on our comfortable vessel. Enjoy the coastline views of Madeira as we make our way to the Desertas Islands.
                </p>
              </div>
              
              <div className="relative">
                <span className="flex items-center text-green-700 font-medium mb-2">
                  <Clock className="w-5 h-5 mr-2" /> 13:45 - Arrival
                </span>
                <h3 className="text-xl font-medium mb-2">Approaching Deserta Grande</h3>
                <p className="text-gray-600">
                  As we approach the islands, keep your eyes open for dolphins and seabirds. Our expert guides will provide fascinating insights about the unique ecosystem of the islands.
                </p>
              </div>
              
              <div className="relative">
                <span className="flex items-center text-green-700 font-medium mb-2">
                  <Clock className="w-5 h-5 mr-2" /> 14:00 - Exploration
                </span>
                <h3 className="text-xl font-medium mb-2">Wildlife Observation & Snorkeling</h3>
                <p className="text-gray-600">
                  Weather and conservation requirements permitting, we'll have the opportunity to disembark at authorized landing points. Alternatively, we'll cruise closely around the islands, observing wildlife and enjoying snorkeling in crystal-clear waters.
                </p>
              </div>
              
              <div className="relative">
                <span className="flex items-center text-green-700 font-medium mb-2">
                  <Clock className="w-5 h-5 mr-2" /> 15:30 - Return Journey
                </span>
                <h3 className="text-xl font-medium mb-2">Heading Back to Madeira</h3>
                <p className="text-gray-600">
                  As we make our return journey, reflect on the day's adventures while our crew serves refreshments. Our guides will answer any remaining questions about the unique ecosystem you've experienced.
                </p>
              </div>
              
              <div className="relative">
                <span className="flex items-center text-green-700 font-medium mb-2">
                  <Clock className="w-5 h-5 mr-2" /> 16:00 - Arrival
                </span>
                <h3 className="text-xl font-medium mb-2">Return to Caniçal Harbor</h3>
                <p className="text-gray-600">
                  We'll arrive back at Caniçal Harbor, concluding our Desertas Islands expedition.
                </p>
              </div>
              
              <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-[9px] bottom-0"></div>
            </div>
            
            {/* What's Included & Excluded */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <Card className="border-green-100">
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center text-green-800">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" /> 
                    What's Included
                  </CardTitle>
                  <CardDescription>Your expedition package includes:</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Round-trip boat transportation from Caniçal Harbor</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Expert guides with knowledge of local wildlife and ecology</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Basic snorkeling equipment (mask and snorkel)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Water and light refreshments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Marine life viewing opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Environmental conservation briefing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-red-100">
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center text-red-800">
                    <XCircle className="w-5 h-5 mr-2 text-red-600" /> 
                    What's Not Included
                  </CardTitle>
                  <CardDescription>Please note these are not included:</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Meals (snacks and refreshments available for purchase)</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Transportation to and from Caniçal Harbor</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Advanced snorkeling or diving equipment</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Personal expenses</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 mr-2 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Gratuities (optional)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Added CTA Button */}
            <div className="text-center mt-10">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={scrollToBooking}
              >
                Secure Your Expedition
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
