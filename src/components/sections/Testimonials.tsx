
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

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

export const Testimonials = () => {
  const testimonialsRef = useRef(null);
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-white" ref={testimonialsRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
            What Our Customers Say
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-medium mb-6">
            Guest Experiences
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
        >
          <motion.div 
            className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex text-primary mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="italic text-muted-foreground mb-6">
              "The SeaBus to Calheta was an amazing way to travel. We saw dolphins along the way and the coastal views were incredible. Much better than taking the bus!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                  alt="Customer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">Richard T.</h4>
                <p className="text-sm text-muted-foreground">United Kingdom</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex text-primary mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="italic text-muted-foreground mb-6">
              "Our private sunset cruise was the highlight of our honeymoon. The crew was professional, the catering was excellent, and the sunset views were unforgettable."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                  alt="Customer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">Sophia M.</h4>
                <p className="text-sm text-muted-foreground">Germany</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="flex text-primary mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="italic text-muted-foreground mb-6">
              "The Porto Santo day trip was excellent value. The beach was pristine and the guided tour helped us discover spots we would have missed on our own. Highly recommended!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
                  alt="Customer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">Carlos A.</h4>
                <p className="text-sm text-muted-foreground">Spain</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
