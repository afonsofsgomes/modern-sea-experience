
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="relative py-20 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1527824404775-dce343118ebc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Ready to Explore Madeira?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Book your unforgettable journey with SeaYou and discover all that Madeira has to offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="rounded-full px-8">
                Book Now
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 border-white text-white hover:bg-white/20">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
