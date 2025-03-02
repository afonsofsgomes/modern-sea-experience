
import { motion } from "framer-motion";

export const Newsletter = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Stay updated with SeaYou Madeira
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for special offers, new routes announcements, and seasonal promotions.
          </p>
          <motion.form 
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300"
              required
            />
            <motion.button 
              type="submit" 
              className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="relative z-10">Subscribe</span>
              <span className="absolute inset-0 h-full w-10 bg-white/20 skew-x-[20deg] transform -translate-x-32 group-hover:translate-x-40 transition-transform duration-700"></span>
            </motion.button>
          </motion.form>
          <p className="text-white/60 text-sm mt-4">
            By subscribing, you agree to receive marketing communications from SeaYou Madeira.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
