
import { motion } from "framer-motion";
import { Sun, Droplets, Shirt, Camera, Utensils, DollarSign } from "lucide-react";

export const DesertasPreparation = () => {
  const preparationItems = [
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Sun Protection",
      description: "Bring sunscreen (SPF 30+), sunglasses, and a hat to protect yourself from the strong maritime sun."
    },
    {
      icon: <Shirt className="h-6 w-6" />,
      title: "Comfortable Clothing",
      description: "Wear light, comfortable clothes and bring a light jacket or windbreaker as it can get breezy at sea."
    },
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Swimming Gear",
      description: "If you plan to swim or snorkel, bring your swimwear and a towel. Basic snorkeling gear is provided."
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Camera Equipment",
      description: "Don't forget your camera to capture the unique landscapes and wildlife. A waterproof case is recommended."
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Food & Drink",
      description: "While water is provided, you may want to bring additional snacks. Snacks are also available for purchase."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Payment Methods",
      description: "Bring cash for any additional purchases on board. Credit cards may not be accepted during the tour."
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
            Prepare for Your Adventure
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Make the most of your Desertas Islands experience with these helpful tips
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
              <div className="bg-green-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 text-green-700">
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
              The sea journey can sometimes be choppy. If you're prone to motion sickness, 
              consider taking appropriate medication before the tour. 
              The tour is not recommended for pregnant women or people with serious back problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
