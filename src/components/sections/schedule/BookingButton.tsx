
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export const BookingButton = () => {
  return (
    <motion.div 
      className="text-center mt-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Link to="/seabus">
        <Button className="bg-white text-blue-900 hover:bg-white/90 transition-all duration-300 group">
          <span className="relative z-10">Book Your SeaBus Ticket</span>
          <div className="absolute -inset-0.5 bg-white/50 rounded-md blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
        </Button>
      </Link>
    </motion.div>
  );
};
