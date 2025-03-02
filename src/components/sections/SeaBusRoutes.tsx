
// Updating import path to use lowercase button
import { Button } from "@/components/ui/button";

export const SeaBusRoutes = () => {
  return (
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
  );
};
