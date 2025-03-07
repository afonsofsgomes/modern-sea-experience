
import { motion } from "framer-motion";
import { Shield, Coffee, Award } from "lucide-react";

// Company values
const companyValues = [
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Safety First",
    description: "Our boat is equipped with modern safety equipment and our crew is trained in first aid and emergency procedures."
  },
  {
    icon: <Coffee className="w-10 h-10 text-primary" />,
    title: "Hospitality",
    description: "Your comfort is our priority. We go the extra mile to ensure you experience Madeira in the most enjoyable and comfortable way. Relax and explore with ease, knowing every detail is taken care of!"
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Local Expertise",
    description: "Our team consists of local captains and sailors who have extensive knowledge of Madeira's waters and places of interest on land. Just ask us."
  }
];

interface CompanyValuesProps {
  inView: boolean;
}

export const CompanyValues = ({ inView }: CompanyValuesProps) => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {companyValues.map((value, index) => (
        <div key={index} className="bg-gray-50 p-6 rounded-lg">
          <div className="flex justify-center mb-4">
            {value.icon}
          </div>
          <h3 className="text-xl font-medium mb-2">{value.title}</h3>
          <p className="text-muted-foreground">{value.description}</p>
        </div>
      ))}
    </motion.div>
  );
};
