
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export const Newsletter = () => {
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
            
            <motion.div 
              className="bg-white/10 p-8 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium mb-6">Send us a Message</h3>
              
              <div className="w-full h-[480px] overflow-hidden rounded-md relative">
                <style>
                  {`
                  /* Hide Tally branding */
                  iframe[data-tally-src] + div[class*="Symbol"] {
                    display: none !important;
                    opacity: 0 !important;
                    visibility: hidden !important;
                    pointer-events: none !important;
                  }
                  iframe[data-tally-src] + div {
                    display: none !important;
                  }
                  /* Additional fallback in case the above selectors don't work */
                  .tally-symbol-button,
                  [class*="Symbol"],
                  [class*="tally"] [class*="Symbol"],
                  [class*="tally-"] {
                    display: none !important;
                    opacity: 0 !important;
                    visibility: hidden !important;
                    pointer-events: none !important;
                  }
                  
                  /* Make placeholders visible */
                  iframe {
                    color-scheme: light;
                  }
                  
                  /* Target the iframe content to make placeholders visible */
                  iframe::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                    z-index: -1;
                  }
                  `}
                </style>
                <iframe 
                  data-tally-src="https://tally.so/embed/mDM1Vj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0} 
                  title="Contact Form"
                  className="text-white"
                  style={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    colorScheme: "light"
                  }}
                ></iframe>
              </div>
              
              <p className="text-xs text-white/60 mt-4">
                This contact form is powered by a third-party service. Your information will be processed according to our privacy policy.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
