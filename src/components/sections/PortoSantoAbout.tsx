
import { motion } from "framer-motion";
export const PortoSantoAbout = () => {
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-blue-900 rounded-full mb-4">
              Island Tour
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-blue-900">
              Porto Santo Island Tour
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              Visit the golden sands of Porto Santo Island with our exclusive 1-Day Island Tour. Enjoy a perfect boat tour to explore this beautiful island just a short journey from Madeira.
            </p>
            <p className="text-base text-muted-foreground mb-8">
              Our Porto Santo tours include guided options and flexible schedules to make your island hopping adventure memorable and hassle-free.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-gray-50 rounded-md p-6 flex-1 min-w-[160px]">
                <h3 className="text-3xl font-medium mb-2 text-blue-900">9km</h3>
                <p className="text-muted-foreground">Golden Beach</p>
              </div>
              <div className="bg-gray-50 rounded-md p-6 flex-1 min-w-[160px]">
                <h3 className="text-3xl font-medium mb-2 text-blue-900">1h*</h3>
                <p className="text-muted-foreground">Connection Time</p>
                <p className="text-xs text-muted-foreground mt-1">*Depends on weather, sea conditions, and operational factors</p>
              </div>
              <div className="bg-gray-50 rounded-md p-6 flex-1 min-w-[160px]">
                <h3 className="text-3xl font-medium mb-2 text-blue-900">Wed-Fri</h3>
                <p className="text-muted-foreground">09:00 - 17:00</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-md overflow-hidden shadow-lg">
              <img alt="Porto Santo Island" className="w-full h-full object-cover" src="https://extranet.seayou.pt/photos/pxo2.jpg" />
            </div>
            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-video bg-white/80 backdrop-blur-sm p-6 rounded-md shadow-lg">
              <h3 className="font-display text-lg mb-2 text-blue-900">Porto Santo Experience</h3>
              <p className="text-sm text-muted-foreground">
                Therapeutic sands, crystal waters, and tranquil atmosphere just a short journey away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
