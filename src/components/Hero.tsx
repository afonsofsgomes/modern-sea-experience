
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, LockKeyhole, TicketCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { destinationData } from "@/components/destinations/DestinationData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Hero = () => {
  return (
    <section className="relative bg-[#253D7F] py-16 sm:py-20 md:py-24 min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1628413283166-a7666966d26b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Sea" 
          className="w-full h-full object-cover object-bottom opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#253D7F]/40 to-[#253D7F]/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Text Content */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 max-w-4xl mx-auto"
          >
            Exclusive Sea Tours in Madeira
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-6"
          >
            Enjoy unforgettable adventures with private experiences, SeaBus connections, 
            tours to Desertas Island, and day trips to Porto Santo.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 text-white/90"
          >
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-full">
                <LockKeyhole className="h-5 w-5" />
              </div>
              <span className="text-sm">Secure Booking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-full">
                <Clock className="h-5 w-5" />
              </div>
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-full">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="text-sm">Trusted on TripAdvisor</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-2 rounded-full">
                <TicketCheck className="h-5 w-5" />
              </div>
              <span className="text-sm">Flexible Cancellation</span>
            </div>
          </motion.div>
        </div>

        {/* Featured Experiences Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-6xl mx-auto px-4"
        >
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {destinationData.map((destination, index) => (
                <CarouselItem key={destination.name} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.1 + (index * 0.1) 
                    }}
                    whileHover={{ y: -10 }}
                    className="h-full"
                  >
                    <Card className="overflow-hidden border-none shadow-lg h-full bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                      <div className="relative h-48">
                        <img 
                          src={destination.image} 
                          alt={destination.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <h3 className="absolute bottom-0 left-0 p-4 text-white font-bold text-xl">{destination.name}</h3>
                      </div>
                      <CardContent className="p-4 text-white flex flex-col h-[calc(100%-12rem)]">
                        <p className="text-sm mb-4 flex-grow line-clamp-3">{destination.experienceDesc}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="bg-white/20 rounded p-1 text-xs">
                              {destination.stats[0].value}
                            </div>
                            <div className="bg-white/20 rounded p-1 text-xs">
                              {destination.stats[1].value}
                            </div>
                          </div>
                          <Button 
                            size="sm" 
                            variant="secondary" 
                            className="text-xs whitespace-nowrap"
                            asChild
                          >
                            <Link to={destination.link}>{destination.buttonText}</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-white/20 text-white border-none hover:bg-white/30" />
              <CarouselNext className="bg-white/20 text-white border-none hover:bg-white/30" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
