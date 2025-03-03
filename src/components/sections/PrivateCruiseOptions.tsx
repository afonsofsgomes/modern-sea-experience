
import { Button } from "@/components/ui/button";

export const PrivateCruiseOptions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-blue-900">
          Private Cruise Options
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sunset Cruise */}
          <div className="group relative rounded-lg overflow-hidden h-[500px] shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Sunset Cruise" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-display mb-2">Sunset Cruises</h3>
              <p className="text-white/80 mb-4">Experience the magic of Madeira's sunset from the sea with champagne and canapés</p>
              <p className="text-white text-2xl font-bold mb-4">From 350€</p>
              <Button
                className="bg-red-500 hover:bg-red-600 text-white max-w-max"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Now
              </Button>
            </div>
          </div>
          
          {/* Whale Watching */}
          <div className="group relative rounded-lg overflow-hidden h-[500px] shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1511161631409-96a2525fab62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
              alt="Whale Watching" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-display mb-2">Whale & Dolphin Watching</h3>
              <p className="text-white/80 mb-4">Private tours to discover Madeira's diverse marine life with experienced guides</p>
              <p className="text-white text-2xl font-bold mb-4">From 450€</p>
              <Button
                className="bg-red-500 hover:bg-red-600 text-white max-w-max"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Now
              </Button>
            </div>
          </div>
          
          {/* Coastal Tour */}
          <div className="group relative rounded-lg overflow-hidden h-[500px] shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Coastal Tour" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-display mb-2">Coastal Exploration</h3>
              <p className="text-white/80 mb-4">Discover hidden caves, majestic cliffs and pristine beaches along Madeira's coastline</p>
              <p className="text-white text-2xl font-bold mb-4">From 400€</p>
              <Button
                className="bg-red-500 hover:bg-red-600 text-white max-w-max"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Now
              </Button>
            </div>
          </div>
          
          {/* Custom Charter */}
          <div className="group relative rounded-lg overflow-hidden h-[500px] shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" 
              alt="Custom Charter" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl font-display mb-2">Custom Charter</h3>
              <p className="text-white/80 mb-4">Customize your own private cruise experience with our luxury vessel</p>
              <p className="text-white text-2xl font-bold mb-4">From 500€</p>
              <Button
                className="bg-red-500 hover:bg-red-600 text-white max-w-max"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
