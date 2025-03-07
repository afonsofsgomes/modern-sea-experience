
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill out all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-form", {
        body: {
          name,
          email,
          message,
          newsletter: subscribe
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      toast.success("Message sent successfully. We'll contact you soon!");
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
      setSubscribe(false);
    } catch (error) {
      console.error("Error sending contact form:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#253D7F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Contact Us
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Have questions or ready to book your sea adventure? Get in touch with our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              className="bg-white/10 p-8 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium mb-6">Get In Touch</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-white/80">+351 291 123 456</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80">info@seayoumadeira.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-white/80">Marina of Calheta, Madeira Island, Portugal</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Working Hours</h4>
                <p className="text-white/80">Monday to Sunday: 9:00 AM - 7:00 PM</p>
                <p className="text-white/80">Available for bookings year-round</p>
              </div>
            </motion.div>
            
            <motion.form 
              onSubmit={handleSubmit}
              className="bg-white/10 p-8 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium mb-6">Send us a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Enter your name" 
                    className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="Enter your email" 
                    className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    placeholder="Tell us about your inquiry" 
                    className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    className="mr-2 h-4 w-4 bg-white/5 border border-white/20 rounded"
                    checked={subscribe}
                    onChange={(e) => setSubscribe(e.target.checked)}
                  />
                  <label htmlFor="newsletter" className="text-sm">Subscribe to our newsletter for special offers</label>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-[#E95543] text-white font-medium px-6 py-3 rounded-md hover:bg-[#E95543]/90 transition-colors relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  disabled={isSubmitting}
                >
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <span className="absolute inset-0 h-full w-10 bg-white/20 skew-x-[20deg] transform -translate-x-32 group-hover:translate-x-40 transition-transform duration-700"></span>
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
