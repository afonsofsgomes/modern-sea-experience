
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface GroupFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const GroupFeature = ({ icon: Icon, title, description, index }: GroupFeatureProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-start"
    >
      <div className="bg-primary/10 p-2 rounded-full mr-3">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

export default GroupFeature;
