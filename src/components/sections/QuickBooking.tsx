
import { motion } from "framer-motion";
import { BokunWidget } from "@/components/BokunWidget";

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

export const QuickBooking = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
            Quick Booking
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-medium mb-6">
            Book Your Maritime Experience
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground">
            Browse our available services and secure your spot instantly
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <BokunWidget 
            productListId="83066"
            bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
            className="min-h-[500px]" 
          />
        </motion.div>
      </div>
    </section>
  );
};
