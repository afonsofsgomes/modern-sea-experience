
import { motion } from "framer-motion";
import { Sun, Droplets, Shirt, Camera, Utensils, DollarSign } from "lucide-react";

export const PortoSantoPreparation = () => {
  const preparationItems = [
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Sun Protection",
      description: "Bring sunscreen (SPF 30+), sunglasses, and a hat to protect yourself from the strong sun on Porto Santo's beach."
    },
    {
      icon: <Shirt className="h-6 w-6" />,
      title: "Beach Essentials",
      description: "Pack swimwear, a beach towel, and comfortable sandals or flip-flops for walking on the golden sand."
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Hydration",
      description: "Bring a refillable water bottle to stay hydrated during your day on the island, especially if you plan to explore beyond the beach."
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Photography Gear",
      description: "Don't forget your camera or phone to capture the stunning landscapes and crystal-clear waters of Porto Santo."
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Food & Drink",
      description: "Consider bringing snacks for the boat journey. There are restaurants and cafés in Porto Santo, but they may be busy during peak times."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Money",
      description: "Bring cash and cards for purchases on the island. While many places accept cards, some smaller vendors might prefer cash."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
            Prepare for Your Island Adventure
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Make the most of your Porto Santo experience with these helpful tips
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {preparationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 flex space-x-4"
            >
              <div className="bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 text-blue-700">
                {item.icon}
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="border border-amber-200 bg-amber-50 rounded-lg p-4 text-amber-800 text-sm">
            <p className="font-medium mb-2">Health & Safety Reminder</p>
            <p>
              The sea journey to Porto Santo can sometimes be choppy depending on weather conditions. 
              If you're prone to motion sickness, consider taking appropriate medication before the tour. 
              The tour is not recommended for pregnant women or people with serious mobility issues. 
              Remember to stay hydrated and protect yourself from the sun while enjoying the golden beach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
