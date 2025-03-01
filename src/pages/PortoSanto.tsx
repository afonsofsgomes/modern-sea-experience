
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BokunWidget } from "@/components/BokunWidget";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Clock, Users, Wifi, Calendar } from "lucide-react";

const PortoSanto = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-blue-900">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Porto Santo" 
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-900/80" />
          </div>
          
          {/* Hero Content */}
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-display font-bold mb-4"
            >
              PORTO SANTO
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-red-500 text-white px-6 py-2 rounded-md mb-6"
            >
              1-DAY EXPERIENCE
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl max-w-3xl mb-8"
            >
              Discover the Golden Island
            </motion.p>
            
            {/* Icon Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-8 mb-8"
            >
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-full mb-2">
                  <Clock className="h-6 w-6" />
                </div>
                <span className="text-sm">1h</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-full mb-2">
                  <Users className="h-6 w-6" />
                </div>
                <span className="text-sm">up to 12 PAX</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-full mb-2">
                  <Calendar className="h-6 w-6" />
                </div>
                <span className="text-sm">9:30h</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-full mb-2">
                  <Wifi className="h-6 w-6" />
                </div>
                <span className="text-sm">FREE WiFi</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg"
              >
                COMING SOON
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* About Porto Santo Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-blue-900 rounded-full mb-4">
                  Island Hopping
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-blue-900">
                  Porto Santo Island Tour
                </h2>
                <p className="text-base text-muted-foreground mb-6">
                  Visit the golden sands of Porto Santo Island with our comfortable ferry service. Enjoy a day trip or stay longer to explore this beautiful island just a short journey from Madeira.
                </p>
                <p className="text-base text-muted-foreground mb-8">
                  Our Porto Santo tours include transportation, guided options, and flexible schedules to make your island hopping experience memorable and hassle-free.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gray-50 rounded-md p-6 flex-1 min-w-[160px]">
                    <h3 className="text-3xl font-medium mb-2 text-blue-900">9km</h3>
                    <p className="text-muted-foreground">Golden Beach</p>
                  </div>
                  <div className="bg-gray-50 rounded-md p-6 flex-1 min-w-[160px]">
                    <h3 className="text-3xl font-medium mb-2 text-blue-900">2.5h</h3>
                    <p className="text-muted-foreground">Journey Time</p>
                  </div>
                  <div className="bg-gray-50 rounded-md p-6 flex-1 min-w-[160px]">
                    <h3 className="text-3xl font-medium mb-2 text-blue-900">Soon</h3>
                    <p className="text-muted-foreground">Launching</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-md overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1586500036065-8395181e4e64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Porto Santo Island" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-2/3 aspect-video bg-white/80 backdrop-blur-sm p-6 rounded-md shadow-lg">
                  <h3 className="font-display text-lg mb-2 text-blue-900">Porto Santo Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Therapeutic sands, crystal waters, and tranquil atmosphere just a boat ride away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Porto Santo Highlights */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-blue-900 rounded-full mb-4">
                Island Attractions
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-blue-900">
                Porto Santo Highlights
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Discover what makes Porto Santo a must-visit destination during your stay in Madeira.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Highlight 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" 
                    alt="Golden Beach" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 text-blue-900">9km Golden Beach</h3>
                  <p className="text-muted-foreground">Known for its therapeutic properties and pristine golden sands stretching for miles.</p>
                </div>
              </div>
              
              {/* Highlight 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552353617-f0bc93b0fddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80" 
                    alt="Water Sports" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 text-blue-900">Water Sports Paradise</h3>
                  <p className="text-muted-foreground">Perfect conditions for windsurfing, kitesurfing, and paddleboarding in crystal clear waters.</p>
                </div>
              </div>
              
              {/* Highlight 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-60 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1543836282-501d561b9ab7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Golf Course" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 text-blue-900">Championship Golf</h3>
                  <p className="text-muted-foreground">World-class 18-hole golf course designed by Severiano Ballesteros with stunning ocean views.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Coming Soon Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-blue-900 rounded-full mb-4">
                Coming Soon
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-blue-900">
                Porto Santo Service Launch
              </h2>
              <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're excited to announce that our Porto Santo service will be launching soon. Sign up to be notified when bookings open and receive a special discount on your first trip.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-red-500 hover:bg-red-600 text-white font-medium"
                >
                  Notify Me
                </Button>
              </form>
              <p className="text-gray-500 text-sm mt-4">
                By subscribing, you agree to receive marketing communications from SeaYou.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortoSanto;
