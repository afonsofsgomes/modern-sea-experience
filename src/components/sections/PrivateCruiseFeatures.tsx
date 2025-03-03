
import { motion } from "framer-motion";

export const PrivateCruiseFeatures = () => {
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <motion.div 
            className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={featureVariants}
          >
            <div className="text-secondary mb-4">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z" stroke="currentColor" strokeWidth="3" />
                <path d="M40 25V40L50 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2 text-primary">Flexible Reschedules</h3>
            <p className="text-gray-600">Reschedule in advance without hassle.</p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={featureVariants}
          >
            <div className="text-secondary mb-4">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 25H20C17.2386 25 15 27.2386 15 30V50C15 52.7614 17.2386 55 20 55H60C62.7614 55 65 52.7614 65 50V30C65 27.2386 62.7614 25 60 25Z" stroke="currentColor" strokeWidth="3" />
                <path d="M30 40H50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M40 30V50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2 text-primary">Full Refund Option</h3>
            <p className="text-gray-600">Full refund available with cancellation insurance.</p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={featureVariants}
          >
            <div className="text-secondary mb-4">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 65C53.8071 65 65 53.8071 65 40C65 26.1929 53.8071 15 40 15C26.1929 15 15 26.1929 15 40C15 53.8071 26.1929 65 40 65Z" stroke="currentColor" strokeWidth="3" />
                <path d="M40 25V40H55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2 text-primary">Weather Safety Assurance</h3>
            <p className="text-gray-600">Rescheduling or refund for unfavorable weather conditions.</p>
          </motion.div>
          
          {/* Feature 4 */}
          <motion.div 
            className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={featureVariants}
          >
            <div className="text-secondary mb-4">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z" stroke="currentColor" strokeWidth="3" />
                <path d="M40 40C42.7614 40 45 37.7614 45 35C45 32.2386 42.7614 30 40 30C37.2386 30 35 32.2386 35 35C35 37.7614 37.2386 40 40 40Z" stroke="currentColor" strokeWidth="3" />
                <path d="M55 55C55 47.8203 48.2843 42 40 42C31.7157 42 25 47.8203 25 55" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2 text-primary">Secure Booking</h3>
            <p className="text-gray-600">Full encryption ensuring privacy and security.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
