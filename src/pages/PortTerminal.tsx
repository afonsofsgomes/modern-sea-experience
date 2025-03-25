
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageHead } from "@/components/SEO";

const PortTerminal = () => {
  return (
    <>
      <PageHead
        title="Port Terminal | SeaYou Madeira - Boat Tours in Madeira"
        description="Information about our port terminal facilities and services in Madeira for boat tours and maritime experiences."
        keywords="boat tours madeira, seayou terminal, maritime services madeira, port terminal funchal"
        ogImage="https://extranet.seayou.pt/photos/og.png"
      />
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Port Terminal</h1>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
                <div className="p-8">
                  <h2 className="text-2xl font-semibold mb-4">Funchal Port Terminal</h2>
                  <p className="text-gray-600 mb-6">
                    Our main terminal is located in the heart of Funchal, providing convenient access to all our maritime services. The terminal features modern facilities and amenities to ensure a comfortable experience for all passengers.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Terminal Facilities</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Waiting areas with comfortable seating</li>
                        <li>• Ticketing and customer service counters</li>
                        <li>• Café and refreshment options</li>
                        <li>• Restroom facilities</li>
                        <li>• Free Wi-Fi</li>
                        <li>• Luggage storage</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Terminal Hours</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Monday - Friday: 7:00 AM - 8:00 PM</li>
                        <li>• Saturday: 8:00 AM - 7:00 PM</li>
                        <li>• Sunday: 9:00 AM - 6:00 PM</li>
                        <li>• Holiday hours may vary</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-medium mb-2">Location</h3>
                  <p className="text-gray-600 mb-6">
                    The terminal is located at Pontinha Port, Funchal, Madeira. It is easily accessible by public transportation or private vehicle with parking available nearby.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-semibold mb-4">Terminal Directions</h2>
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">By Bus</h3>
                    <p className="text-gray-600">
                      Several public bus routes stop near the port terminal. Routes 1, 3, and 4 provide direct service to the terminal entrance.
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">By Car</h3>
                    <p className="text-gray-600">
                      Follow signs to "Porto do Funchal" or "Terminal Marítimo". Paid parking is available in the nearby parking structure.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">From the Airport</h3>
                    <p className="text-gray-600">
                      The terminal is approximately 20 minutes by car from Madeira Airport. Taxi services and airport shuttles are readily available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PortTerminal;
