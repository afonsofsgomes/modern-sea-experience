
import { motion } from 'framer-motion';
import { DepartureItem } from './DepartureItem';

interface ScheduleCardProps {
  title: string;
  departures: Array<{
    departureTime: string;
    returnTime: string;
    origin: string;
    destination: string;
    duration: string;
  }>;
  initialAnimation?: {
    x: number;
  };
}

export const ScheduleCard = ({ title, departures, initialAnimation }: ScheduleCardProps) => {
  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 overflow-hidden"
      initial={{ opacity: 0, x: initialAnimation?.x || 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-medium mb-6 text-center py-3 bg-[#284083] rounded-md">
        {title}
      </h3>
      
      <div className="space-y-4">
        {departures.map((departure, index) => (
          <DepartureItem 
            key={`${departure.origin}-${departure.destination}-${index}`}
            departureTime={departure.departureTime}
            returnTime={departure.returnTime}
            origin={departure.origin}
            destination={departure.destination}
            duration={departure.duration}
          />
        ))}
      </div>
    </motion.div>
  );
};
