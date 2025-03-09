
import { motion } from 'framer-motion';

interface ScheduleDepartureProps {
  departureTime: string;
  returnTime: string;
  origin: string;
  destination: string;
  duration: string;
}

export const ScheduleDeparture = ({ 
  departureTime, 
  returnTime, 
  origin, 
  destination, 
  duration 
}: ScheduleDepartureProps) => {
  return (
    <motion.div 
      className="bg-white/5 p-4 rounded-md hover:bg-white/10 transition-colors duration-300"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="bg-blue-800 text-white text-sm py-1 px-2 rounded mr-2">{departureTime}</span>
          <span className="text-white/60 text-xs">Updated</span>
        </div>
        <div className="text-right">
          <span className="bg-gray-200 text-blue-900 text-sm py-1 px-2 rounded">Return: {returnTime}</span>
        </div>
      </div>
      <div className="flex items-center">
        <p>From: <strong>{origin}</strong> To: <strong>{destination}</strong></p>
        <span className="ml-2 text-xs text-white/60">({duration})</span>
      </div>
    </motion.div>
  );
};
