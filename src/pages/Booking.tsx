
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BokunWidget } from "@/components/BokunWidget";
import { motion } from "framer-motion";

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

const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <motion.span variants={itemVariants} className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4 animate-slide-in">
                Book Now
              </motion.span>
              <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-display font-medium mb-6">
                Reserve Your Maritime Experience
              </motion.h1>
              <motion.p variants={itemVariants} className="text-base text-muted-foreground max-w-2xl mx-auto">
                Choose from our selection of seabus connections, private cruises, and Porto Santo tours. 
                Secure your booking instantly through our reservation system.
              </motion.p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <BokunWidget 
                productListId="83066"
                bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
                className="min-h-[600px]" 
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
