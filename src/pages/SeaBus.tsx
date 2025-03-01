
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BokunWidget } from "@/components/BokunWidget";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Anchor, Map, Calendar, Users, Wifi, Compass, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SeaBus = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-blue-900">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" 
              alt="SeaBus" 
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
              SEABUS
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-red-500 text-white px-6 py-2 rounded-md mb-6"
            >
              CALHETA↔FUNCHAL↔CANIÇAL
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl max-w-3xl mb-8"
            >
              Your Sea Connection
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
                  <Compass className="h-6 w-6" />
                </div>
                <span className="text-sm">Inter-city</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-full mb-2">
                  <Users className="h-6 w-6" />
                </div>
                <span className="text-sm">up to 12 PAX</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-full mb-2">
                  <Wifi className="h-6 w-6" />
                </div>
                <span className="text-sm">FREE WiFi</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white/20 p-3 rounded-full mb-2">
                  <Calendar className="h-6 w-6" />
                </div>
                <span className="text-sm">BAR</span>
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
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                BOOK NOW
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Routes Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-blue-900">
              Roundtrips
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Route Card 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-4 text-blue-900">
                    Funchal → Caniçal → Funchal
                  </h3>
                  <p className="text-4xl font-bold text-red-500 mb-6">39€</p>
                  <Button 
                    className="w-full bg-red-500 hover:bg-red-600"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
              
              {/* Route Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-4 text-blue-900">
                    Funchal → Calheta → Funchal
                  </h3>
                  <p className="text-4xl font-bold text-red-500 mb-6">39€</p>
                  <Button 
                    className="w-full bg-red-500 hover:bg-red-600"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
              
              {/* Route Card 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-4 text-blue-900">
                    Caniçal → Funchal → Caniçal
                  </h3>
                  <p className="text-4xl font-bold text-red-500 mb-6">39€</p>
                  <Button 
                    className="w-full bg-red-500 hover:bg-red-600"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
              
              {/* Route Card 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-4 text-blue-900">
                    Caniçal → Calheta → Caniçal
                  </h3>
                  <p className="text-4xl font-bold text-red-500 mb-6">59€</p>
                  <Button 
                    className="w-full bg-red-500 hover:bg-red-600"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
              
              {/* Route Card 5 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-4 text-blue-900">
                    Calheta → Caniçal → Calheta
                  </h3>
                  <p className="text-4xl font-bold text-red-500 mb-6">59€</p>
                  <Button 
                    className="w-full bg-red-500 hover:bg-red-600"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
              
              {/* Route Card 6 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-4 text-blue-900">
                    Calheta → Funchal → Calheta
                  </h3>
                  <p className="text-4xl font-bold text-red-500 mb-6">39€</p>
                  <Button 
                    className="w-full bg-red-500 hover:bg-red-600"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    BOOK NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-red-500 mb-4">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M40 25V40L50 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-blue-900">Flexible Reschedules</h3>
                <p className="text-gray-600">Reschedule in advance without hassle.</p>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-red-500 mb-4">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60 25H20C17.2386 25 15 27.2386 15 30V50C15 52.7614 17.2386 55 20 55H60C62.7614 55 65 52.7614 65 50V30C65 27.2386 62.7614 25 60 25Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M30 40H50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M40 30V50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-blue-900">Full Refund Option</h3>
                <p className="text-gray-600">Full refund available with cancellation insurance.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-red-500 mb-4">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 65C53.8071 65 65 53.8071 65 40C65 26.1929 53.8071 15 40 15C26.1929 15 15 26.1929 15 40C15 53.8071 26.1929 65 40 65Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M40 25V40H55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-blue-900">Weather Safety Assurance</h3>
                <p className="text-gray-600">Rescheduling or refund for unfavorable weather conditions.</p>
              </div>
              
              {/* Feature 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="text-red-500 mb-4">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M40 40C42.7614 40 45 37.7614 45 35C45 32.2386 42.7614 30 40 30C37.2386 30 35 32.2386 35 35C35 37.7614 37.2386 40 40 40Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M55 55C55 47.8203 48.2843 42 40 42C31.7157 42 25 47.8203 25 55" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 text-blue-900">Secure Booking</h3>
                <p className="text-gray-600">Full encryption ensuring privacy and security.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Widget Section */}
        <section id="booking" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-blue-900">
              Book Your SeaBus Experience
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <BokunWidget 
                isProductPage={true}
                productId="978723"
                bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
                className="min-h-[600px]" 
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SeaBus;
