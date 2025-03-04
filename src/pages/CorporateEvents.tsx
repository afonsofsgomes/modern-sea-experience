
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Coffee, Gift, MessageSquare, Star, Briefcase, Users, Ship, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CorporateEvents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-white/20 rounded-full mb-4">
              Business Solutions
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Corporate Events
            </h1>
            <p className="text-lg text-white/80">
              Elevate your corporate events with our premium maritime experiences
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Unique Venues
              </span>
              <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
                Unforgettable Corporate Experiences
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
              
              <Button size="lg">Request Corporate Package</Button>
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
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Corporate Solutions
            </span>
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              Event Types We Host
            </h2>
            <p className="text-muted-foreground">
              From team building to client entertainment, our vessels provide the perfect venue for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm h-full flex flex-col"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <event.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-gray-900">{event.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{event.description}</p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-900 font-medium">Perfect for:</p>
                  <ul className="mt-2 space-y-1">
                    {event.perfectFor.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              What Our Corporate Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">
                Ready to Plan Your Corporate Event?
              </h2>
              <p className="text-white/80 mb-8">
                Contact our dedicated corporate events team to discuss your requirements and create a tailored package for your business needs.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
              >
                Contact Corporate Team
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-6">Quick Inquiry Form</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input 
                    type="text" 
                    placeholder="Contact Person" 
                    className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <textarea 
                  placeholder="Brief description of your event requirements" 
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 h-32"
                ></textarea>
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

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

const eventTypes = [
  {
    icon: Briefcase,
    title: "Executive Meetings",
    description: "Host your important business meetings in a private, inspirational setting with all necessary amenities for productive discussions.",
    perfectFor: [
      "Board meetings",
      "Strategy sessions",
      "Executive retreats",
      "Management meetings"
    ]
  },
  {
    icon: Users,
    title: "Team Building Events",
    description: "Strengthen team relationships with specialized maritime activities designed to improve collaboration and communication.",
    perfectFor: [
      "Department outings",
      "Team challenges",
      "Collaborative activities",
      "Motivational events"
    ]
  },
  {
    icon: Gift,
    title: "Client Entertainment",
    description: "Impress your valued clients with a premium maritime experience that showcases the beauty of Madeira.",
    perfectFor: [
      "VIP client appreciation",
      "Relationship building",
      "Product launches",
      "Partnership celebrations"
    ]
  },
  {
    icon: MessageSquare,
    title: "Conferences & Seminars",
    description: "Our larger vessels can be configured for professional presentations and discussions with all necessary AV equipment.",
    perfectFor: [
      "Industry conferences",
      "Educational seminars",
      "Professional development",
      "Workshop sessions"
    ]
  },
  {
    icon: Star,
    title: "Corporate Celebrations",
    description: "Celebrate company milestones, achievements, and special occasions with a memorable maritime event.",
    perfectFor: [
      "Anniversary celebrations",
      "Achievement recognitions",
      "Holiday parties",
      "Company milestones"
    ]
  },
  {
    icon: Coffee,
    title: "Corporate Retreats",
    description: "Combine business with pleasure on a day or multi-day retreat that inspires creativity and fosters team bonding.",
    perfectFor: [
      "Annual planning sessions",
      "Corporate wellness",
      "Strategic retreats",
      "Leadership development"
    ]
  }
];

const testimonials = [
  {
    quote: "Organizing our annual executive retreat with SeaYou was a breeze. The team provided exceptional service, and the unique setting helped foster some of our most creative strategic discussions to date.",
    name: "Maria Silva",
    title: "HR Director",
    company: "Madeira Tech Solutions",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "We wanted to impress our international clients, and the private cruise along Madeira's coast was perfect. The professional crew, beautiful vessel, and stunning views created an unforgettable experience.",
    name: "João Ferreira",
    title: "Sales Director",
    company: "Global Imports Ltd",
    image: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  {
    quote: "Our team building day on SeaYou's vessel exceeded all expectations. The customized activities combined with the adventure of being at sea resulted in improved team cohesion that we continue to benefit from.",
    name: "Sophia Martins",
    title: "Team Lead",
    company: "Madeira Creative Agency",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export default CorporateEvents;
