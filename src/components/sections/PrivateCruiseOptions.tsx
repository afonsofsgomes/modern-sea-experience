
import { Button } from "@/components/ui/button";

export const PrivateCruiseOptions = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("booking");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-[#253D7F]">
          Private Cruise Options
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Private North Coast Cruise */}
          <div className="group relative rounded-lg overflow-hidden h-[500px] shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Private North Coast Cruise" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-display mb-2">Private North Coast Cruise</h3>
              <p className="text-white/80 mb-2">Discover the raw beauty of the North Coast from the comfort and privacy of our catamaran</p>
              <p className="text-white/90 mb-2 font-semibold">TUESDAY, SATURDAY, SUNDAY | 13:00 - 15:30</p>
              <p className="text-white text-2xl font-bold mb-4">From 243.60€</p>
              <div className="flex justify-center w-full">
                <Button
                  className="bg-[#E95543] hover:bg-[#E95543]/90 text-white"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
          
          {/* Private South Coast Cruise */}
          <div className="group relative rounded-lg overflow-hidden h-[500px] shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Private South Coast Cruise" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-display mb-2">Private South Coast Cruise</h3>
              <p className="text-white/80 mb-2">Sail to the sunniest part of Madeira and experience the island's southern charm</p>
              <p className="text-white/90 mb-2 font-semibold">WEDNESDAY, THURSDAY, FRIDAY | 13:00 - 15:30</p>
              <p className="text-white text-2xl font-bold mb-4">From 243.60€</p>
              <div className="flex justify-center w-full">
                <Button
                  className="bg-[#E95543] hover:bg-[#E95543]/90 text-white"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
          
          {/* Coastal Exploration (formerly Corporate Events) */}
          <div className="group relative rounded-lg overflow-hidden h-[500px] shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Coastal Exploration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-display mb-2">Coastal Exploration</h3>
              <p className="text-white/80 mb-4">Discover hidden caves, majestic cliffs and pristine beaches along Madeira's coastline</p>
              <div className="flex justify-center w-full">
                <Button
                  className="bg-[#E95543] hover:bg-[#E95543]/90 text-white"
                  onClick={scrollToContact}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          
          {/* Custom Charter */}
          <div className="group relative rounded-lg overflow-hidden h-[500px] shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Custom Charter" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-display mb-2">Custom Charter</h3>
              <p className="text-white/80 mb-4">Nothing seems to fit your needs? No problem! Let's discuss and find a tailor-made cruise experience just for you. Whether it's a romantic getaway or a corporate retreat, we'll create the perfect journey on the water.</p>
              <div className="flex justify-center w-full">
                <Button
                  className="bg-[#E95543] hover:bg-[#E95543]/90 text-white"
                  onClick={scrollToContact}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p>All private cruises depart at 13:00 and return at 15:30.</p>
        </div>
      </div>
    </section>
  );
};
