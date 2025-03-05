
import { EyeOff, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface BlogSidebarProps {
  tags: string[];
}

export const BlogSidebar = ({ tags }: BlogSidebarProps) => {
  return (
    <div className="lg:col-span-1 space-y-8">
      {/* Newsletter Signup */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-primary/10 to-primary/30 p-6 rounded-xl"
      >
        <h3 className="text-xl font-display font-semibold mb-3 text-gray-900">
          Get Madeira Travel Tips
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Subscribe to our newsletter for exclusive travel tips, special offers, and insider information about Madeira.
        </p>
        <form className="space-y-3">
          <Input 
            type="email" 
            placeholder="Your email address" 
            className="bg-white/80 backdrop-blur-sm"
          />
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <EyeOff className="h-3 w-3" />
            <span>We respect your privacy. No spam, ever.</span>
          </div>
          <Button className="w-full">Subscribe</Button>
        </form>
      </motion.div>
      
      {/* Popular Tags */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-gray-50 p-6 rounded-xl"
      >
        <h3 className="text-xl font-medium mb-4 text-gray-900">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="inline-block py-1 px-3 text-xs font-medium bg-white text-gray-700 rounded-full border border-gray-200 cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
      
      {/* Travel Planning Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative overflow-hidden bg-white border border-primary/20 rounded-xl shadow-lg"
      >
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="p-6 relative z-10">
          <h3 className="text-xl font-display font-semibold mb-3 text-gray-900">
            Plan Your Madeira Adventure
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Need help planning your perfect Madeira trip? Our travel experts are here to assist you.
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-center text-sm">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                <span className="text-primary text-xs">✓</span>
              </div>
              Personalized itineraries
            </li>
            <li className="flex items-center text-sm">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                <span className="text-primary text-xs">✓</span>
              </div>
              Hidden gem recommendations
            </li>
            <li className="flex items-center text-sm">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                <span className="text-primary text-xs">✓</span>
              </div>
              Booking assistance
            </li>
          </ul>
          <Button className="w-full">
            Get Free Consultation
          </Button>
        </div>
      </motion.div>
      
      {/* Featured Destination */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        <div className="relative aspect-[4/3]">
          <img 
            src="https://images.unsplash.com/photo-1591971737391-cd19dae9f337?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Porto Santo Island" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-display font-semibold mb-1">Porto Santo Island</h3>
            <p className="text-sm text-white/80 mb-3">Golden beaches & tranquil waters</p>
            <Button size="sm" variant="secondary" className="w-full">
              Explore Tours
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
