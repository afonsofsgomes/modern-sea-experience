
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BriefcaseBusiness, Compass, Heart, Ship, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
              Careers at SeaYou
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our passionate team and become part of Madeira's premier maritime tourism company.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                Our Culture
              </span>
              <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
                Why Work With Us
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                At SeaYou, we're passionate about providing exceptional maritime experiences while fostering a supportive and dynamic workplace. Our team consists of dedicated professionals who share a love for the ocean and a commitment to customer service excellence.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                We value innovation, teamwork, and personal growth, offering competitive benefits and opportunities for advancement in a unique and exciting industry.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {companyValues.map((value, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Team at work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                <h3 className="text-xl font-medium mb-2 text-gray-900">Join Our Crew</h3>
                <p className="text-sm text-muted-foreground">
                  Become part of a team that's passionate about providing exceptional maritime experiences in Madeira.
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
              Open Positions
            </span>
            <h2 className="text-3xl font-display font-bold mb-6 text-gray-900">
              Current Job Openings
            </h2>
            <p className="text-muted-foreground">
              Explore our current opportunities and find a role where you can grow and contribute to our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {jobOpenings.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-medium mb-1">{job.title}</h3>
                    <p className="text-muted-foreground">{job.location}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    job.type === "Full-time" 
                      ? "bg-green-100 text-green-800" 
                      : job.type === "Part-time"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-orange-100 text-orange-800"
                  }`}>
                    {job.type}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.requirements.map((req, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 text-xs rounded-full text-gray-800">
                      {req}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              No Suitable Position?
            </h2>
            <p className="text-white/80 mb-8">
              We're always looking for talented individuals. Send us your CV and tell us why you'd be a great addition to our team.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
            >
              Send Open Application
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const companyValues = [
  {
    icon: Heart,
    title: "Passion for Service",
    description: "We're dedicated to creating exceptional experiences for our guests."
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Working together to achieve common goals and support each other."
  },
  {
    icon: Compass,
    title: "Innovation",
    description: "Constantly seeking new ways to improve our services and operations."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Striving for the highest standards in all aspects of our work."
  }
];

const jobOpenings = [
  {
    title: "Maritime Captain",
    location: "Funchal, Madeira",
    type: "Full-time",
    description: "We're looking for experienced captains to join our growing fleet, responsible for safe navigation and providing exceptional guest experiences.",
    requirements: ["Maritime License", "5+ Years Experience", "English Fluency", "Customer Service"]
  },
  {
    title: "Customer Service Representative",
    location: "Funchal Marina Office",
    type: "Full-time",
    description: "Join our front-line team handling bookings, inquiries, and ensuring our guests receive top-notch service from the moment they contact us.",
    requirements: ["Customer Service", "Multilingual", "Problem Solving", "MS Office"]
  },
  {
    title: "Marine Engineer",
    location: "Funchal, Madeira",
    type: "Full-time",
    description: "Responsible for maintaining our fleet in optimal condition, troubleshooting issues, and ensuring all vessels meet safety standards.",
    requirements: ["Marine Engineering", "Technical Skills", "Troubleshooting", "Safety Compliance"]
  },
  {
    title: "Seasonal Crew Member",
    location: "Various Locations, Madeira",
    type: "Seasonal",
    description: "Join our crew during the high season to assist with onboard operations, guest services, and ensuring a safe and enjoyable journey.",
    requirements: ["Customer Service", "Maritime Interest", "Teamwork", "Flexibility"]
  },
  {
    title: "Marketing Specialist",
    location: "Funchal Office",
    type: "Part-time",
    description: "Help promote our services through digital marketing, content creation, and developing strategic partnerships to attract new customers.",
    requirements: ["Digital Marketing", "Content Creation", "Social Media", "Analytics"]
  },
  {
    title: "Operations Manager",
    location: "Funchal, Madeira",
    type: "Full-time",
    description: "Oversee daily operations, coordinate schedules, manage staff, and ensure efficient service delivery across all our maritime experiences.",
    requirements: ["Management Experience", "Maritime Knowledge", "Organization", "Leadership"]
  }
];

export default Careers;
