
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, CalendarDays, Clock, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import GroupBookingDialog from "@/components/GroupBookingDialog";
import TallyScript from "@/components/TallyScript";

const GroupBookings = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-white/20 rounded-full mb-4">
              For Groups
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Group Bookings
            </h1>
            <p className="text-lg text-white/80">
              Special rates and personalized service for groups of all sizes
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              
              <GroupBookingDialog size="lg">Request Group Quote</GroupBookingDialog>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://extranet.seayou.pt/photos/private1.jpg" 
                  alt="Group trip on boat" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <h3 className="text-xl font-medium mb-2 text-gray-900">Group Discounts</h3>
                <p className="text-sm text-muted-foreground">
                  Enjoy special rates for groups of 10 or more on all our maritime experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Group Packages
            </span>
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              Popular Group Experiences
            </h2>
            <p className="text-muted-foreground">
              Choose from our most popular group packages or contact us for a custom experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {groupPackages.map((pkg, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="aspect-[3/2] relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {pkg.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 text-gray-900">{pkg.title}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      <span>Customizable group size</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>Flexible duration</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{pkg.location}</span>
                    </div>
                  </div>
                  <GroupBookingDialog className="w-full">Inquire Now</GroupBookingDialog>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
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
      
      <Footer />
    </div>
  );
};

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

const groupPackages = [
  {
    title: "School Group Adventure",
    description: "Educational and fun maritime experiences tailored for school groups with special educational content.",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Educational",
    location: "Multiple routes available"
  },
  {
    title: "Corporate Team Building",
    description: "Build stronger teams while enjoying the beautiful waters around Madeira with customized activities.",
    image: "https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Team Building",
    location: "Private cruise options"
  },
  {
    title: "Family Reunion Package",
    description: "Create lasting memories with a special maritime experience for your family gathering.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Family",
    location: "Custom routes available"
  }
];

export default GroupBookings;
