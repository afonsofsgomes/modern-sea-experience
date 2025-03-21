
import { Send } from "lucide-react";
import TallyScript from "@/components/TallyScript";

export const QuoteRequestSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Contact Us
              </span>
              <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
                Request a Group Quote
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form with your group details and one of our dedicated group coordinators will contact you within 24 hours with a customized proposal.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-medium mb-4">Group Booking Process</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <p className="text-muted-foreground">Submit your group inquiry with details about your group size and preferences</p>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <p className="text-muted-foreground">Receive a customized quote from our group coordinator</p>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <p className="text-muted-foreground">Confirm your booking with a deposit</p>
                  </li>
                  <li className="flex">
                    <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <p className="text-muted-foreground">Enjoy your customized maritime experience!</p>
                  </li>
                </ol>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Send className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Direct Contact</p>
                  <p className="text-muted-foreground">support@seayou.pt | +351 913 514 961</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="h-[600px] w-full">
                <iframe 
                  data-tally-src="https://tally.so/r/wAyZZe?transparentBackground=1" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  title="Group Booking Inquiry"
                  className="border-none"
                />
              </div>
              <TallyScript />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestSection;
