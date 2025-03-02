
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

// TripAdvisor real reviews
const reviews = [
  {
    name: "Craig H",
    country: "United Kingdom",
    rating: 5,
    text: "Great evening out whale watching, sunset tour. Antonio was brilliant, informative and very welcoming. Saw a pod of dolphins as well as being treated to a wonderful sunset. Great friendly service with cold beer, and a well managed boat. Highly recommended!",
    date: "September 2023",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
  },
  {
    name: "Lorraine P",
    country: "United Kingdom",
    rating: 5,
    text: "Amazing! We were in Calheta and wanted to see dolphins and whales. Antonio was so helpful when booking - he advised us when the best time would be. The trip was brilliant - we saw hundreds of dolphins and a mother whale with her baby. Antonio and his colleague Manuel were so enthusiastic about the sealife, Antonio gave a great commentary. The boat was really comfortable. Highly recommended!",
    date: "July 2023",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
  },
  {
    name: "Martin H",
    country: "United Kingdom",
    rating: 5,
    text: "Antonio and his shipmate spotted pilot whales and dolphins on our sunset cruise. Antonio makes a really good host and guide for these trips, I'd recommend SeaYou. We saw the whales, plus two different types of dolphins (including with a calf). Best of all, they're quite conservation minded and keep a good distance from the mammals without chasing them - more ethical.",
    date: "August 2023",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
  }
];

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
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex text-primary">
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
            </div>
            <span className="font-medium">5.0</span>
            <span className="text-muted-foreground">on TripAdvisor</span>
          </motion.div>
          <motion.a 
            href="https://www.tripadvisor.com/Attraction_Review-g1178726-d28508392-Reviews-SeaYou_Madeira-Calheta_Madeira_Madeira_Islands.html" 
            target="_blank" 
            rel="noopener noreferrer"
            variants={itemVariants}
            className="text-primary hover:underline inline-flex items-center"
          >
            View all reviews on TripAdvisor
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
        >
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="flex text-primary mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="italic text-muted-foreground mb-6 line-clamp-4">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.country}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={testimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="https://www.tripadvisor.com/Attraction_Review-g1178726-d28508392-Reviews-SeaYou_Madeira-Calheta_Madeira_Madeira_Islands.html#REVIEWS" 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200 ease-in-out"
          >
            Read More Reviews on TripAdvisor
          </a>
        </motion.div>
      </div>
    </section>
  );
};
