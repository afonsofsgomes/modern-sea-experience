
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  PrivateCruiseHero,
  PrivateCruiseOptions,
  PrivateCruiseFeatures,
  PrivateCruiseBooking
} from "@/components/sections";
import { Coffee, Gift, MessageSquare, Star, Briefcase, Users, Ship, Cloud, CalendarDays, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PrivateCruise = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <PrivateCruiseHero />
        <PrivateCruiseOptions />
        <PrivateCruiseFeatures />
        
        {/* Corporate Events Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                  Business Solutions
                </span>
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
                  Corporate Events
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  Take your team building, client entertainment, or corporate celebrations to the next level with our maritime venues. Our vessels provide a distinctive setting for your business events with breathtaking views of Madeira's coastline.
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  From intimate executive meetings to large corporate retreats, we offer tailored packages that combine professional service with the unique charm of a sea experience.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {corporateFeatures.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{feature.title}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <Button size="lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>Request Corporate Package</Button>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1519834077329-9eccb16720dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Corporate event on yacht" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Group Bookings Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg relative">
                  <img 
                    src="https://images.unsplash.com/photo-1534970028765-db07030e942a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Group trip on boat" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                    <h3 className="text-xl font-medium mb-2 text-gray-900">Group Discounts</h3>
                    <p className="text-sm text-muted-foreground">
                      Enjoy special rates for groups of 10 or more on all our maritime experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                  Group Experiences
                </span>
                <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
                  Perfect for Groups & Events
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  Whether you're planning a school trip, family reunion, corporate team building, or a social club outing, our group booking service offers convenience, competitive rates, and personalized attention.
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  Our dedicated team will work with you to customize your maritime experience, ensuring a memorable event for all participants.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {groupFeatures.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <Button size="lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>Request Group Quote</Button>
                
                <div className="mt-6 bg-white p-6 rounded-lg shadow-sm md:hidden">
                  <h3 className="text-xl font-medium mb-2 text-gray-900">Group Discounts</h3>
                  <p className="text-sm text-muted-foreground">
                    Enjoy special rates for groups of 10 or more on all our maritime experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <PrivateCruiseBooking />
      </main>
      <Footer />
    </div>
  );
};

// Corporate Event Features
const corporateFeatures = [
  {
    icon: Briefcase,
    title: "Professional Environment"
  },
  {
    icon: Ship,
    title: "Unique Venue"
  },
  {
    icon: Users,
    title: "Team Building Activities"
  },
  {
    icon: MessageSquare,
    title: "Meeting Facilities"
  },
  {
    icon: Coffee,
    title: "Catering Options"
  },
  {
    icon: Cloud,
    title: "Unforgettable Views"
  },
  {
    icon: Gift,
    title: "Corporate Gifts Available"
  },
  {
    icon: Star,
    title: "VIP Experience"
  }
];

// Group Booking Features
const groupFeatures = [
  {
    icon: Users,
    title: "Special Group Rates",
    description: "Discounted prices for groups of 10 or more people"
  },
  {
    icon: CalendarDays,
    title: "Flexible Scheduling",
    description: "Options to accommodate your group's specific timing needs"
  },
  {
    icon: MapPin,
    title: "Custom Pickup Points",
    description: "Arrange convenient pickup locations for larger groups"
  },
  {
    icon: Clock,
    title: "Dedicated Booking Agent",
    description: "Personal assistance throughout the booking process"
  }
];

export default PrivateCruise;
