
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { Anchor, Map, Calendar, Users } from "lucide-react";

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
              Our Routes
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Regular Seabus Connections
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Fast and reliable maritime connections between Funchal, Calheta, and Caniçal. Travel in comfort while enjoying Madeira's stunning coastline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516415555649-15f2d69e7877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Funchal Harbor" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Anchor className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-display text-xl">Funchal - Calheta</h3>
                </div>
                <p className="text-muted-foreground mb-4">Daily connections between Funchal and Calheta, offering a scenic alternative to road travel.</p>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> Daily</span>
                  <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> 120 passengers</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534426824805-1176ef30ef76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                  alt="Caniçal View" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Anchor className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-display text-xl">Funchal - Caniçal</h3>
                </div>
                <p className="text-muted-foreground mb-4">Regular seabus service connecting Funchal to Caniçal, with stunning coastal views.</p>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> Mon-Sat</span>
                  <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> 120 passengers</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                  alt="Coastal Connection" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Anchor className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-display text-xl">Calheta - Caniçal</h3>
                </div>
                <p className="text-muted-foreground mb-4">Direct connection between Calheta and Caniçal, bypassing Funchal for faster travel.</p>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> Wed & Sun</span>
                  <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> 120 passengers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="#schedule" className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-md hover:bg-primary/20 transition-colors">
              <Calendar className="w-4 h-4 mr-2" /> View Full Schedule
            </a>
          </div>
        </div>
      </section>

      {/* Private Cruises Section */}
      <section id="cruises" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
              Private Experiences
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Exclusive Private Cruises
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Charter your own private cruise for special occasions, whale watching, or simply to enjoy the beauty of Madeira's coastline in privacy and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-lg overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" 
                alt="Sunset Cruise" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-display mb-2">Sunset Cruises</h3>
                <p className="text-white/80 mb-4">Experience the magic of Madeira's sunset from the sea with champagne and canapés</p>
                <a href="#book-cruise" className="inline-block bg-white text-foreground font-medium py-2 px-4 rounded-md hover:bg-white/90 transition-colors max-w-max">
                  Book Now
                </a>
              </div>
            </div>
            
            <div className="group relative rounded-lg overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1511161631409-96a2525fab62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                alt="Whale Watching" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-display mb-2">Whale & Dolphin Watching</h3>
                <p className="text-white/80 mb-4">Private tours to discover Madeira's diverse marine life with experienced guides</p>
                <a href="#book-cruise" className="inline-block bg-white text-foreground font-medium py-2 px-4 rounded-md hover:bg-white/90 transition-colors max-w-max">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Porto Santo Tours */}
      <section id="tours" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
                Island Hopping
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                Porto Santo Island Tours
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                Visit the golden sands of Porto Santo Island with our comfortable ferry service. Enjoy a day trip or stay longer to explore this beautiful island just a short journey from Madeira.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                Our Porto Santo tours include transportation, guided options, and flexible schedules to make your island hopping experience memorable and hassle-free.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-50 rounded-md p-6 flex-1 min-w-[160px]">
                  <h3 className="text-3xl font-medium mb-2">9km</h3>
                  <p className="text-muted-foreground">Golden Beach</p>
                </div>
                <div className="bg-gray-50 rounded-md p-6 flex-1 min-w-[160px]">
                  <h3 className="text-3xl font-medium mb-2">2.5h</h3>
                  <p className="text-muted-foreground">Journey Time</p>
                </div>
                <div className="bg-gray-50 rounded-md p-6 flex-1 min-w-[160px]">
                  <h3 className="text-3xl font-medium mb-2">Daily</h3>
                  <p className="text-muted-foreground">Departures</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Porto Santo Island" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-2/3 aspect-video glass-card p-6 rounded-md">
                <h3 className="font-display text-lg mb-2">Porto Santo Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Therapeutic sands, crystal waters, and tranquil atmosphere just a boat ride away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map with Routes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
              Our Routes
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Maritime Route Map
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Explore our routes connecting key destinations across Madeira and Porto Santo.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative aspect-[16/9] bg-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1577105103492-6b8def23dec4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Madeira Map with Routes" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg max-w-lg text-center">
                  <h3 className="text-xl font-display mb-4">Interactive Route Map Coming Soon</h3>
                  <p className="text-muted-foreground mb-4">We're developing an interactive map to help you plan your sea journeys around Madeira and to Porto Santo.</p>
                  <a href="#contact" className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                    <Map className="w-4 h-4 mr-2" /> Get Route Information
                  </a>
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
              Stay updated with SeaYou
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for special offers, schedule updates, and information about new routes and services.
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
              By subscribing, you agree to receive marketing communications from SeaYou.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
