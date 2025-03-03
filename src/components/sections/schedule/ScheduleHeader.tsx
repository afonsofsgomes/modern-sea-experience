
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './animation-utils';

export const ScheduleHeader = () => {
  return (
    <motion.div 
      className="max-w-3xl mx-auto text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.span variants={itemVariants} className="inline-block py-1 px-3 text-xs font-medium bg-white/20 rounded-full mb-4">
        Our SeaBus Schedule
      </motion.span>
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-medium mb-6">
        DEPARTURES
      </motion.h2>
      <motion.p variants={itemVariants} className="text-white/80 max-w-2xl mx-auto">
        Plan your journey with our convenient schedule. All times shown are local.
      </motion.p>
    </motion.div>
  );
};
