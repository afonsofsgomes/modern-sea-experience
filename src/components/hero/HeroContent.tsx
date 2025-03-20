import { motion } from "framer-motion";
import { LockKeyhole, Clock, MapPin, TicketCheck } from "lucide-react";

export const HeroContent = () => {
  return (
    <div className="text-center mb-8 md:mb-12 pt-8 sm:pt-10 md:pt-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3 sm:mb-4 max-w-4xl mx-auto"
      >
        Exclusive Sea Tours in Madeira
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-white/90 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-4 sm:mb-6 px-2"
      >
        Enjoy unforgettable adventures with private experiences, SeaBus connections, 
        tours to Desertas Island, and day trips to Porto Santo.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-10 mb-8 sm:mb-12 text-white/90"
      >
        <TrustIndicator icon={<LockKeyhole className="h-4 w-4 sm:h-5 sm:w-5" />} text="Secure Booking" />
        <TrustIndicator icon={<Clock className="h-4 w-4 sm:h-5 sm:w-5" />} text="24/7 Support" />
        <TrustIndicator icon={<MapPin className="h-4 w-4 sm:h-5 sm:w-5" />} text="Trusted on TripAdvisor" />
        <TrustIndicator icon={<TicketCheck className="h-4 w-4 sm:h-5 sm:w-5" />} text="Flexible Cancellation" />
      </motion.div>
    </div>
  );
};

interface TrustIndicatorProps {
  icon: React.ReactNode;
  text: string;
}

const TrustIndicator = ({ icon, text }: TrustIndicatorProps) => {
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <div className="bg-white/10 p-1.5 sm:p-2 rounded-full">
        {icon}
      </div>
      <span className="text-xs sm:text-sm">{text}</span>
    </div>
  );
};
