
import { motion } from 'framer-motion';

export const ScheduleNotice = () => {
  return (
    <motion.div 
      className="text-center mt-6 text-white/80 text-sm"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <p>Please note: No SeaBus services operate on Mondays</p>
    </motion.div>
  );
};
