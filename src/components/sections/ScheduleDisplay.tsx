import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const ScheduleDisplay = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tuesday, Saturday, Sunday Schedule */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-medium mb-6 text-center py-3 bg-[#284083] rounded-md">
              Tuesday, Saturday, Sunday
            </h3>
            
            <div className="space-y-4">
              <motion.div 
                className="bg-white/5 p-4 rounded-md hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="bg-blue-800 text-white text-sm py-1 px-2 rounded mr-2">09:00</span>
                    <span className="text-white/60 text-xs">Updated</span>
                  </div>
                  <div className="text-right">
                    <span className="bg-gray-200 text-blue-900 text-sm py-1 px-2 rounded">Return: 18:15</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <p>From: <strong>Calheta</strong> To: <strong>Funchal</strong></p>
                  <span className="ml-2 text-xs text-white/60">(1h 15m)</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 p-4 rounded-md hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="bg-blue-800 text-white text-sm py-1 px-2 rounded mr-2">09:00</span>
                    <span className="text-white/60 text-xs">Updated</span>
                  </div>
                  <div className="text-right">
                    <span className="bg-gray-200 text-blue-900 text-sm py-1 px-2 rounded">Return: 17:00</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <p>From: <strong>Calheta</strong> To: <strong>Caniçal</strong></p>
                  <span className="ml-2 text-xs text-white/60">(2h 30m)</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 p-4 rounded-md hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="bg-blue-800 text-white text-sm py-1 px-2 rounded mr-2">10:30</span>
                    <span className="text-white/60 text-xs">Updated</span>
                  </div>
                  <div className="text-right">
                    <span className="bg-gray-200 text-blue-900 text-sm py-1 px-2 rounded">Return: 17:00</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <p>From: <strong>Funchal</strong> To: <strong>Caniçal</strong></p>
                  <span className="ml-2 text-xs text-white/60">(1h)</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Wednesday, Thursday, Friday Schedule */}
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-medium mb-6 text-center py-3 bg-[#284083] rounded-md">
              Wednesday, Thursday, Friday
            </h3>
            
            <div className="space-y-4">
              <motion.div 
                className="bg-white/5 p-4 rounded-md hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="bg-blue-800 text-white text-sm py-1 px-2 rounded mr-2">09:00</span>
                    <span className="text-white/60 text-xs">Updated</span>
                  </div>
                  <div className="text-right">
                    <span className="bg-gray-200 text-blue-900 text-sm py-1 px-2 rounded">Return: 18:30</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <p>From: <strong>Caniçal</strong> To: <strong>Funchal</strong></p>
                  <span className="ml-2 text-xs text-white/60">(1h)</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 p-4 rounded-md hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="bg-blue-800 text-white text-sm py-1 px-2 rounded mr-2">09:00</span>
                    <span className="text-white/60 text-xs">Updated</span>
                  </div>
                  <div className="text-right">
                    <span className="bg-gray-200 text-blue-900 text-sm py-1 px-2 rounded">Return: 17:00</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <p>From: <strong>Caniçal</strong> To: <strong>Calheta</strong></p>
                  <span className="ml-2 text-xs text-white/60">(2h 30m)</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white/5 p-4 rounded-md hover:bg-white/10 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="bg-blue-800 text-white text-sm py-1 px-2 rounded mr-2">10:15</span>
                    <span className="text-white/60 text-xs">Updated</span>
                  </div>
                  <div className="text-right">
                    <span className="bg-gray-200 text-blue-900 text-sm py-1 px-2 rounded">Return: 17:00</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <p>From: <strong>Funchal</strong> To: <strong>Calheta</strong></p>
                  <span className="ml-2 text-xs text-white/60">(1h 15m)</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
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
      </div>
    </section>
  );
};
