
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AlertCircle, CheckCircle, Shield, LifeBuoy, Heart, Eye, UserCheck, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SafetyMeasures = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-white/20 rounded-full mb-4">
              Your Safety Matters
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Safety is Our Priority
            </h1>
            <p className="text-lg text-white/80">
              At SeaYou, we maintain the highest safety standards in all aspects of our operations to ensure a secure and enjoyable experience.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Core Safety Measures
            </span>
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              How We Ensure Your Safety
            </h2>
            <p className="text-muted-foreground">
              Our comprehensive safety protocols cover every aspect of your journey with us, from vessel maintenance to crew training and emergency procedures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyMeasures.map((measure, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 border border-gray-100"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <measure.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">{measure.title}</h3>
                <p className="text-muted-foreground">{measure.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center mb-10">
              <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Safety Protocols
              </span>
              <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
                Our Safety Procedures
              </h2>
            </div>
            
            <div className="space-y-6">
              {safetyProcedures.map((procedure, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{procedure.title}</h3>
                    <p className="text-muted-foreground">{procedure.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-100 rounded-lg p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2 text-gray-900">Emergency Response Protocol</h3>
                <p className="text-muted-foreground mb-4">
                  While we maintain rigorous safety standards, we are also prepared for emergencies. Our crew is trained to respond quickly and efficiently to any situation that may arise during your journey.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  {emergencyResponses.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-md border border-red-100">
                      <p className="font-medium text-gray-900 mb-1">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              Travel With Confidence
            </h2>
            <p className="text-white/80 mb-8">
              Book your maritime experience with SeaYou and enjoy peace of mind knowing that your safety is our highest priority.
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

const safetyMeasures = [
  {
    icon: Shield,
    title: "Vessel Safety",
    description: "Regular inspections and maintenance of all vessels to exceed maritime safety standards."
  },
  {
    icon: UserCheck,
    title: "Crew Training",
    description: "All crew members undergo rigorous safety training and regular certification updates."
  },
  {
    icon: LifeBuoy,
    title: "Safety Equipment",
    description: "Full complement of life-saving equipment on board, regularly tested and inspected."
  },
  {
    icon: Eye,
    title: "Weather Monitoring",
    description: "Continuous monitoring of weather and sea conditions before and during voyages."
  },
  {
    icon: Heart,
    title: "Medical Preparedness",
    description: "First aid equipment and trained personnel available on all vessels."
  },
  {
    icon: Thermometer,
    title: "Health Protocols",
    description: "Enhanced cleaning and sanitization measures throughout our fleet."
  }
];

const safetyProcedures = [
  {
    title: "Pre-Departure Safety Briefing",
    description: "Before each journey, passengers receive a comprehensive safety briefing covering emergency procedures and the location of safety equipment."
  },
  {
    title: "Crew Safety Drills",
    description: "Our crew regularly conducts safety drills to ensure readiness for any situation that may arise during your journey."
  },
  {
    title: "Vessel Maintenance Protocol",
    description: "Each vessel undergoes both daily checks and scheduled comprehensive maintenance to ensure all systems are functioning optimally."
  },
  {
    title: "Passenger Capacity Control",
    description: "We strictly adhere to passenger capacity limits to ensure comfort and safety during all journeys."
  },
  {
    title: "Safety Equipment Inspection",
    description: "Life jackets, life rafts, and other safety equipment are regularly inspected and maintained to international standards."
  }
];

const emergencyResponses = [
  {
    title: "First Response",
    description: "Immediate assessment and response by trained crew members"
  },
  {
    title: "Communication",
    description: "Constant contact with maritime authorities"
  },
  {
    title: "Medical Assistance",
    description: "First aid and coordination with medical services"
  },
  {
    title: "Evacuation",
    description: "Well-practiced evacuation procedures when necessary"
  }
];

export default SafetyMeasures;
