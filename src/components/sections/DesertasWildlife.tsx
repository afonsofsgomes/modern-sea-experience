
import { motion } from "framer-motion";
import { Binoculars, Fish, Bird, Shell } from "lucide-react";

export const DesertasWildlife = () => {
  const wildlifeItems = [
    {
      icon: <Bird className="h-8 w-8 text-blue-600" />,
      title: "Seabirds",
      description: "Home to important colonies of Cory's shearwaters, Bulwer's petrels, and other seabird species that nest in the cliffs and slopes."
    },
    {
      icon: <Fish className="h-8 w-8 text-blue-600" />,
      title: "Marine Life",
      description: "The waters around the islands are rich in biodiversity, including dolphins, whales, and various fish species in the crystal-clear waters."
    },
    {
      icon: <Shell className="h-8 w-8 text-blue-600" />,
      title: "Mediterranean Monk Seal",
      description: "One of the world's rarest marine mammals, the critically endangered monk seal finds sanctuary in the Desertas Islands."
    },
    {
      icon: <Binoculars className="h-8 w-8 text-blue-600" />,
      title: "Desertas Wolf Spider",
      description: "This critically endangered endemic species is found nowhere else in the world except on the Desertas Islands."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Discover Unique Wildlife
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The Desertas Islands are a sanctuary for several rare and endemic species. 
            During your journey, keep your eyes open for these remarkable creatures:
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {wildlifeItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-5 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium mb-3 text-blue-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-sm bg-blue-50 rounded-lg p-4 text-blue-800">
            <strong>Conservation Note:</strong> The Desertas Islands are a protected nature reserve. 
            Our visits follow strict guidelines to ensure minimal disturbance to wildlife. 
            Sightings are not guaranteed and depend on natural wildlife behavior.
          </p>
        </div>
      </div>
    </section>
  );
};
