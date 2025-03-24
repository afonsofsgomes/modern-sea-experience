
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ChevronRight,
  Users
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { useState } from "react";
import GroupBookingDialog from "@/components/GroupBookingDialog";

export const PrivateCruiseOptions = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const cruiseOptions = [
    {
      id: 1,
      title: "North Coast Cruise",
      description: "Discover the raw beauty of the North Coast from the comfort and privacy of our catamaran",
      days: "WEDNESDAY, THURSDAY, FRIDAY",
      time: "13:00 - 15:30",
      location: "Departing from Caniçal",
      price: "60€ per person",
      minPeople: "Minimum 4 passengers",
      image: "https://extranet.seayou.pt/photos/pta-s-lourenco2.jpg",
      buttonAction: () => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }),
      useContactForm: false
    },
    {
      id: 2,
      title: "South Coast Cruise",
      description: "Sail to the sunniest part of Madeira and experience the island's southern charm",
      days: "TUESDAY, SATURDAY, SUNDAY",
      time: "13:00 - 15:30",
      location: "Departing from Calheta",
      price: "60€ per person",
      minPeople: "Minimum 4 passengers",
      image: "https://extranet.seayou.pt/photos/south.jpg",
      buttonAction: () => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }),
      useContactForm: false
    },
    {
      id: 3,
      title: "Coastal Exploration",
      description: "Discover hidden caves, majestic cliffs and pristine beaches along Madeira's coastline",
      custom: true,
      image: "https://extranet.seayou.pt/photos/coastal.jpg",
      useContactForm: true
    },
    {
      id: 4,
      title: "Custom Charter",
      description: "Nothing seems to fit your needs? Let's discuss and find a tailor-made cruise experience just for you.",
      custom: true,
      image: "https://extranet.seayou.pt/photos/custom.jpg",
      useContactForm: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-[#253D7F]">
            Private Cruise Options
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of exclusive private cruises, each offering a unique way to experience Madeira's stunning coastlines
          </p>
          <div className="mt-4 inline-block bg-[#E95543]/10 text-[#E95543] px-4 py-2 rounded-lg font-medium">
            <span className="flex items-center justify-center">
              <Users className="h-4 w-4 mr-2" />
              60€ per person • Minimum 4 passengers required
            </span>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cruiseOptions.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard(option.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${option.image})` }}
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <Card className="relative h-full bg-transparent border-0 overflow-hidden shadow-xl backdrop-blur-sm text-white">
                <div className="absolute inset-0 bg-black/30 rounded-xl"></div>
                <CardHeader className="relative">
                  <CardTitle className="text-2xl md:text-3xl font-display">{option.title}</CardTitle>
                  <CardDescription className="text-white/90 text-base mt-2">{option.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="relative">
                  {!option.custom && (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-5 w-5 opacity-75" />
                        <span>{option.days}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-5 w-5 opacity-75" />
                        <span>{option.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-5 w-5 opacity-75" />
                        <span>{option.location}</span>
                      </div>
                      <div className="mt-4">
                        <div className="text-xl font-bold">{option.price}</div>
                        <div className="text-sm font-medium text-white/90 flex items-center">
                          <Users className="h-4 w-4 mr-1 opacity-75" />
                          {option.minPeople}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="relative pt-3">
                  {option.useContactForm ? (
                    <GroupBookingDialog 
                      buttonProps={{
                        className: `relative overflow-hidden group transition-all duration-200 ease-in-out ${
                          hoveredCard === option.id 
                            ? 'bg-white text-[#253D7F]' 
                            : 'bg-[#E95543] hover:bg-[#E95543]/90 text-white'
                        }`
                      }}
                    >
                      <span className="relative z-10 flex items-center">
                        Contact Us
                        <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                          hoveredCard === option.id ? 'translate-x-1' : ''
                        }`} />
                      </span>
                    </GroupBookingDialog>
                  ) : (
                    <Button
                      className={`relative overflow-hidden group transition-all duration-200 ease-in-out ${
                        hoveredCard === option.id 
                          ? 'bg-white text-[#253D7F]' 
                          : 'bg-[#E95543] hover:bg-[#E95543]/90 text-white'
                      }`}
                      onClick={option.buttonAction}
                    >
                      <span className="relative z-10 flex items-center">
                        Book Now
                        <ChevronRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                          hoveredCard === option.id ? 'translate-x-1' : ''
                        }`} />
                      </span>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-600 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm"
        >
          <p>All scheduled private cruises depart at 13:00 and return at 15:30. Custom timing available upon request.</p>
        </motion.div>
      </div>
    </section>
  );
};
