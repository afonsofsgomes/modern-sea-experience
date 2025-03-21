
import { Users, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import GroupBookingDialog from "@/components/GroupBookingDialog";

interface GroupExperienceProps {
  title: string;
  description: string;
  image: string;
  badge: string;
  location: string;
  index: number;
}

export const GroupExperience = ({ 
  title, 
  description, 
  image, 
  badge, 
  location, 
  index 
}: GroupExperienceProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
    >
      <div className="aspect-[3/2] relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
            {badge}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2 text-gray-900">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2 text-primary" />
            <span>Customizable group size</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            <span>Flexible duration</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span>{location}</span>
          </div>
        </div>
        <GroupBookingDialog className="w-full">Inquire Now</GroupBookingDialog>
      </div>
    </motion.div>
  );
};

export default GroupExperience;
