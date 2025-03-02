
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { Ship, Anchor, MapPin, Calendar, Clock, Users, Star, Compass, Sun, Coffee, Utensils, Camera, Mountain, Fish, Wine, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { BokunWidget } from "@/components/BokunWidget";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[100]"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <Navbar />
      <Hero />
      
      {/* Destinations/Routes Section */}
      <section id="routes" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
              Our SeaBus Routes
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Fast & Comfortable Sea Connections
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Enjoy our reliable maritime transportation between Madeira's key destinations, 
              combining speed and comfort with breathtaking coastal views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1675359220430-299ed4566518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Funchal Harbor" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Anchor className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-display text-xl">Funchal ↔ Calheta</h3>
                </div>
                <p className="text-muted-foreground mb-4">Enjoy a 1h 15min scenic journey between Funchal and Calheta with departures at 10:15 on Wed, Thu, Fri.</p>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 1h 15min</span>
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> Wed, Thu, Fri</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1602776253430-8eccdc064c33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Caniçal View" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Anchor className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-display text-xl">Funchal ↔ Caniçal</h3>
                </div>
                <p className="text-muted-foreground mb-4">Quick 1-hour journey departing at 10:30 on Tue, Sat, Sun with beautiful ocean views and potential dolphin sightings.</p>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 1h</span>
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> Tue, Sat, Sun</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Coastal Connection" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Anchor className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-display text-xl">Caniçal ↔ Calheta</h3>
                </div>
                <p className="text-muted-foreground mb-4">The longest journey at 2h 30min, connecting east and west Madeira with departures at 09:00 with a 17:00 return.</p>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> 2h 30min</span>
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> All week</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/seabus" className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-md hover:bg-primary/20 transition-colors">
              <Ship className="w-4 h-4 mr-2" /> View SeaBus Schedule & Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
              Explore Our Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              What to Experience at Each Stop
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Make the most of your SeaBus journey by exploring these amazing destinations along Madeira's beautiful coastline.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Funchal */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593465678160-f99a8371fcf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Funchal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-medium mb-4 text-center">Funchal</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Coffee className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">Visit the historic Old Town with its painted doors and traditional cafés</p>
                  </div>
                  <div className="flex items-start">
                    <ShoppingBag className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">Explore the vibrant Mercado dos Lavradores (Farmers' Market)</p>
                  </div>
                  <div className="flex items-start">
                    <Wine className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">Tour the famous Madeira wine cellars and enjoy tastings</p>
                  </div>
                  <div className="flex items-start">
                    <Camera className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">Take the cable car to Monte for panoramic city views</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Caniçal */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596627116790-af6f46ddddcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Caniçal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-medium mb-4 text-center">Caniçal</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">Hike the dramatic Ponta de São Lourenço peninsula trails</p>
                  </div>
                  <div className="flex items-start">
                    <Fish className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">Sample fresh seafood at traditional fishing village restaurants</p>
                  </div>
                  <div className="flex items-start">
                    <Camera className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">Visit the Whale Museum to learn about Madeira's whaling history</p>
                  </div>
                  <div className="flex items-start">
                    <Sun className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">Relax on Prainha, a unique black sand volcanic beach</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Calheta */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596804796855-9f5c0e2bed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Calheta" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-medium mb-4 text-center">Calheta</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Sun className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">Enjoy golden sand beaches - rare in volcanic Madeira</p>
                  </div>
                  <div className="flex items-start">
                    <Utensils className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">Visit the sugar cane factory and rum distillery for tastings</p>
                  </div>
                  <div className="flex items-start">
                    <Mountain className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">Explore nearby levada walks with stunning ocean views</p>
                  </div>
                  <div className="flex items-start">
                    <Camera className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <p className="text-sm">Visit Casa das Mudas Arts Centre for contemporary exhibitions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/seabus">
              <Button>Plan Your SeaBus Journey Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Booking Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
              Quick Booking
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Book Your Maritime Experience
            </h2>
            <p className="text-muted-foreground">
              Browse our available services and secure your spot instantly
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <BokunWidget 
              productListId="83066"
              bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
              className="min-h-[500px]" 
            />
          </div>
        </div>
      </section>

      {/* Schedule Display */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-white/20 rounded-full mb-4">
              Our SeaBus Schedule
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              DEPARTURES
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Plan your journey with our convenient schedule. All times shown are local.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tuesday, Saturday, Sunday Schedule */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-medium mb-6 text-center py-3 bg-[#284083] rounded-md">
                Tuesday, Saturday, Sunday
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="bg-blue-800 text-white text-sm py-1 px-2 rounded mr-2">09:00</span>
                      <span className="text-white/60 text-xs">Updated</span>
                    </div>
                    <div className="text-right">
                      <span className="bg-gray-200 text-blue-900 text-sm py-1 px-2 rounded">Return: 18:15</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p>From: <strong>Calheta</strong> To: <strong>Funchal</strong></p>
                    <span className="ml-2 text-xs text-white/60">(1h 15m)</span>
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="bg-blue-800 text-white text-sm py-1 px-2 rounded mr-2">09:00</span>
                      <span className="text-white/60 text-xs">Updated</span>
                    </div>
                    <div className="text-right">
                      <span className="bg-gray-200 text-blue-900 text-sm py-1 px-2 rounded">Return: 17:00</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p>From: <strong>Calheta</strong> To: <strong>Caniçal</strong></p>
                    <span className="ml-2 text-xs text-white/60">(2h 30m)</span>
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="bg-blue-800 text-white text-sm py-1 px-2 rounded mr-2">10:30</span>
                      <span className="text-white/60 text-xs">Updated</span>
                    </div>
                    <div className="text-right">
                      <span className="bg-gray-200 text-blue-900 text-sm py-1 px-2 rounded">Return: 17:00</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p>From: <strong>Funchal</strong> To: <strong>Caniçal</strong></p>
                    <span className="ml-2 text-xs text-white/60">(1h)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Wednesday, Thursday, Friday Schedule */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-medium mb-6 text-center py-3 bg-[#284083] rounded-md">
                Wednesday, Thursday, Friday
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="bg-blue-800 text-white text-sm py-1 px-2 rounded mr-2">09:00</span>
                      <span className="text-white/60 text-xs">Updated</span>
                    </div>
                    <div className="text-right">
                      <span className="bg-gray-200 text-blue-900 text-sm py-1 px-2 rounded">Return: 18:30</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p>From: <strong>Caniçal</strong> To: <strong>Funchal</strong></p>
                    <span className="ml-2 text-xs text-white/60">(1h)</span>
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="bg-blue-800 text-white text-sm py-1 px-2 rounded mr-2">09:00</span>
                      <span className="text-white/60 text-xs">Updated</span>
                    </div>
                    <div className="text-right">
                      <span className="bg-gray-200 text-blue-900 text-sm py-1 px-2 rounded">Return: 17:00</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p>From: <strong>Caniçal</strong> To: <strong>Calheta</strong></p>
                    <span className="ml-2 text-xs text-white/60">(2h 30m)</span>
                  </div>
                </div>
                
                <div className="bg-white/5 p-4 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className="bg-blue-800 text-white text-sm py-1 px-2 rounded mr-2">10:15</span>
                      <span className="text-white/60 text-xs">Updated</span>
                    </div>
                    <div className="text-right">
                      <span className="bg-gray-200 text-blue-900 text-sm py-1 px-2 rounded">Return: 17:00</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p>From: <strong>Funchal</strong> To: <strong>Calheta</strong></p>
                    <span className="ml-2 text-xs text-white/60">(1h 15m)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/seabus">
              <Button className="bg-white text-blue-900 hover:bg-white/90">
                Book Your SeaBus Ticket
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Private Cruises Section */}
      <section id="cruises" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
              Private Experiences
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Luxury Private Cruises
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Charter your own private vessel for celebrations, marine life watching, or to discover Madeira's hidden coastal gems with your own itinerary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-lg overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1599232144917-85754060bf02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" 
                alt="Sunset Cruise" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-display mb-2">Sunset & Celebration Cruises</h3>
                <p className="text-white/80 mb-4">Perfect for anniversaries, birthdays, or romantic evenings with gourmet catering options</p>
                <Link to="/private-cruise" className="inline-block bg-white text-foreground font-medium py-2 px-4 rounded-md hover:bg-white/90 transition-colors max-w-max">
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="group relative rounded-lg overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1517783999520-f068d7431a60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Whale Watching" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-display mb-2">Marine Life Expeditions</h3>
                <p className="text-white/80 mb-4">Private tours with marine biologists to observe dolphins, whales, and sea turtles in their natural habitat</p>
                <Link to="/private-cruise" className="inline-block bg-white text-foreground font-medium py-2 px-4 rounded-md hover:bg-white/90 transition-colors max-w-max">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Porto Santo Tours */}
      <section id="tours" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
                Island Hopping
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                Porto Santo Golden Island
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                Experience the therapeutic golden sands of Porto Santo with our dedicated ferry service. Our comfortable vessels make the journey part of your vacation.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                Choose from day trips with guided tours or transport-only options for those who prefer to explore independently. Special packages available for overnight stays.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-md p-6 flex-1 min-w-[160px]">
                  <h3 className="text-3xl font-medium mb-2">9km</h3>
                  <p className="text-muted-foreground">Golden Beach</p>
                </div>
                <div className="bg-white rounded-md p-6 flex-1 min-w-[160px]">
                  <h3 className="text-3xl font-medium mb-2">2.5h</h3>
                  <p className="text-muted-foreground">Journey Time</p>
                </div>
                <div className="bg-white rounded-md p-6 flex-1 min-w-[160px]">
                  <h3 className="text-3xl font-medium mb-2">Daily</h3>
                  <p className="text-muted-foreground">Departures</p>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/porto-santo">
                  <Button>Explore Porto Santo Options</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586276393635-5ecd8a851acc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Porto Santo Golden Beach" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-2/3 aspect-video glass-card p-6 rounded-md">
                <h3 className="font-display text-lg mb-2">Health & Wellness</h3>
                <p className="text-sm text-muted-foreground">
                  Porto Santo's sands are known for their therapeutic properties, perfect for natural spa treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
              What Our Customers Say
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Guest Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex text-primary mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="italic text-muted-foreground mb-6">
                "The SeaBus to Calheta was an amazing way to travel. We saw dolphins along the way and the coastal views were incredible. Much better than taking the bus!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                    alt="Customer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Richard T.</h4>
                  <p className="text-sm text-muted-foreground">United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex text-primary mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="italic text-muted-foreground mb-6">
                "Our private sunset cruise was the highlight of our honeymoon. The crew was professional, the catering was excellent, and the sunset views were unforgettable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                    alt="Customer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Sophia M.</h4>
                  <p className="text-sm text-muted-foreground">Germany</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex text-primary mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="italic text-muted-foreground mb-6">
                "The Porto Santo day trip was excellent value. The beach was pristine and the guided tour helped us discover spots we would have missed on our own. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                    alt="Customer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Carlos A.</h4>
                  <p className="text-sm text-muted-foreground">Spain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Stay updated with SeaYou Madeira
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for special offers, new routes announcements, and seasonal promotions.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/60 text-sm mt-4">
              By subscribing, you agree to receive marketing communications from SeaYou Madeira.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
