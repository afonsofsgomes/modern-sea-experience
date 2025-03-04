
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Anchor, BarChart, Ship, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const OurFleet = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Our Vessels
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
              Our Maritime Fleet
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover our modern and comfortable vessels designed for your maritime experience in Madeira.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {fleetItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 mb-20 last:mb-0`}
            >
              <div className="flex-1">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                  {item.category}
                </span>
                <h2 className="text-3xl font-display font-bold mb-4 text-gray-900">{item.name}</h2>
                <p className="text-muted-foreground mb-6">
                  {item.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {item.specs.map((spec, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-md">
                      <p className="text-sm text-muted-foreground">{spec.label}</p>
                      <p className="text-lg font-medium text-gray-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Always Safe
            </span>
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              Safety & Comfort First
            </h2>
            <p className="text-muted-foreground">
              All our vessels are regularly inspected and maintained to the highest safety standards. Our experienced crew ensures your safety and comfort throughout your journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {safetyFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Ready to Experience Our Fleet?
            </h2>
            <p className="text-white/80 mb-8">
              Book your maritime experience with us today and discover the beauty of Madeira from the sea.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.location.href = '/booking'}
            >
              Book Now
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const fleetItems = [
  {
    name: "SeaBus Voyager",
    category: "SeaBus",
    description: "Our flagship passenger ferry connects key locations around Madeira with speed and comfort. The Voyager features panoramic windows for spectacular views during your journey.",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    specs: [
      { label: "Capacity", value: "150 PAX" },
      { label: "Speed", value: "25 knots" },
      { label: "Length", value: "35 meters" },
      { label: "Built", value: "2020" },
      { label: "Amenities", value: "WiFi, AC" },
      { label: "Service", value: "Daily" }
    ],
    features: [
      "Panoramic Windows", 
      "Comfortable Seating", 
      "Onboard Refreshments", 
      "Accessibility Features", 
      "Air Conditioning", 
      "Luggage Storage"
    ]
  },
  {
    name: "Golden Horizon",
    category: "Porto Santo Ferry",
    description: "Designed for the longer journey to Porto Santo, this comfortable vessel ensures a smooth ride across open waters with all the amenities needed for a pleasant journey.",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    specs: [
      { label: "Capacity", value: "200 PAX" },
      { label: "Speed", value: "22 knots" },
      { label: "Length", value: "45 meters" },
      { label: "Built", value: "2019" },
      { label: "Amenities", value: "Lounge, Café" },
      { label: "Service", value: "Daily" }
    ],
    features: [
      "Stability System", 
      "Café Service", 
      "Outdoor Viewing Deck", 
      "Entertainment", 
      "WiFi Connection", 
      "Reclining Seats"
    ]
  },
  {
    name: "Azure Explorer",
    category: "Private Cruise",
    description: "Our luxury yacht for private cruises offers an exclusive experience with premium amenities and personalized service for your special occasions or corporate events.",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    specs: [
      { label: "Capacity", value: "12 PAX" },
      { label: "Speed", value: "30 knots" },
      { label: "Length", value: "22 meters" },
      { label: "Built", value: "2021" },
      { label: "Amenities", value: "Premium" },
      { label: "Service", value: "On Demand" }
    ],
    features: [
      "Luxury Interiors", 
      "Sun Deck", 
      "Premium Refreshments", 
      "Sound System", 
      "Swimming Platform", 
      "Professional Crew"
    ]
  }
];

const safetyFeatures = [
  {
    icon: Shield,
    title: "Certified Safety",
    description: "All vessels meet or exceed international maritime safety standards and certifications."
  },
  {
    icon: Anchor,
    title: "Experienced Crew",
    description: "Our captains and crew members have extensive experience in Madeiran waters."
  },
  {
    icon: Ship,
    title: "Regular Maintenance",
    description: "Rigorous maintenance schedules ensure all equipment is in optimal condition."
  },
  {
    icon: BarChart,
    title: "Weather Monitoring",
    description: "Advanced systems to monitor sea and weather conditions for safe passages."
  }
];

export default OurFleet;
