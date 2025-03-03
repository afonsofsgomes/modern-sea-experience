import { motion } from "framer-motion";
export const PortoSantoAbout = () => {
  return <section className="py-20 bg-white">
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
              <img alt="Porto Santo Island" className="w-full h-full object-cover" src="/lovable-uploads/c34d4041-df25-48dd-93ee-62f9d51a080d.jpg" />
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
    </section>;
};