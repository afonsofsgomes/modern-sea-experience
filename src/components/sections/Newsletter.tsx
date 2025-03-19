import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
export const Newsletter = () => {
  const [iframeHeight, setIframeHeight] = useState(276);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Function to handle iframe resize messages from Tally
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only accept messages from Tally domain
      if (event.origin !== "https://tally.so") return;
      try {
        const data = JSON.parse(event.data);
        if (data.type === "tally-resize") {
          console.log("Received tally-resize event with height:", data.height);
          setIframeHeight(data.height);
        }
      } catch (e) {
        // Silent fail if not a valid JSON message
      }
    };
    window.addEventListener("message", handleMessage);

    // Manual trigger to set iframe src if not already set
    setTimeout(() => {
      document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe: HTMLIFrameElement) => {
        if (iframe.dataset.tallySrc) {
          iframe.src = iframe.dataset.tallySrc;
          console.log("Manual iframe src set:", iframe.dataset.tallySrc);
        }
      });
    }, 1000);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  return <section id="contact" className="py-20 bg-[#253D7F] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-4xl mx-auto" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.3
      }} transition={{
        duration: 0.7
      }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Contact Us
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Have questions or ready to book your sea adventure? Get in touch with our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div className="bg-white/10 p-8 rounded-lg" initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            amount: 0.3
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <h3 className="text-xl font-medium mb-6">Get In Touch</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-white/80">+351 913 514 961</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white/80">support@seayou.pt</p>
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
                <p className="text-white/80">Tuesday to Sunday: 9:00 AM - 7:00 PM</p>
                <p className="text-white/80">Available for bookings year-round</p>
              </div>
            </motion.div>
            
            <motion.div className="bg-white/10 p-8 rounded-lg" initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            amount: 0.3
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }}>
              <h3 className="text-xl font-medium mb-6">Send us a Message</h3>
              
              <div className="tally-form-container">
                <div className="bg-white/5 backdrop-blur-sm rounded-md overflow-hidden">
                  <iframe ref={iframeRef} src="https://tally.so/embed/mDM1Vj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height={iframeHeight} frameBorder="0" marginHeight={0} marginWidth={0} title="Contact form" style={{
                  minHeight: "276px"
                }}></iframe>
                </div>
              </div>
              
              <p className="text-xs text-white/60 mt-4">
                Your information will be processed according to our privacy policy.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        /* These styles help improve the form elements inside the iframe */
        .tally-form-container {
          /* Override any conflicting styles */
          font-family: inherit;
          color-scheme: light;
        }
        
        /* Make iframe content background white for better readability */
        iframe[src*="tally.so"] {
          background-color: #FFFFFF !important;
        }
        
        /* Target Tally form fields to ensure white background and readable text */
        /* These will apply if the iframe content allows style inheritance */
        :root {
          --tally-form-background: #FFFFFF !important;
          --tally-input-background: #FFFFFF !important;
        }
      `}</style>
    </section>;
};