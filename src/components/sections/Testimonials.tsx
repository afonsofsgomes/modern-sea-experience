
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

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

const tripAdvisorUrl = "https://www.tripadvisor.com/Attraction_Review-g1178726-d28508392-Reviews-SeaYou_Madeira-Calheta_Madeira_Madeira_Islands.html";

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
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-4">
            <img 
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" 
              alt="TripAdvisor Logo" 
              className="h-10" 
            />
          </motion.div>
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
            Latest Reviews from TripAdvisor
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
          <motion.p variants={itemVariants} className="text-muted-foreground mb-4">
            See what our guests have to say about their experience with us
          </motion.p>
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
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute top-4 right-4">
                <img 
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" 
                  alt="TripAdvisor" 
                  className="h-6" 
                />
              </div>
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
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href={tripAdvisorUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center"
                >
                  Read full review on TripAdvisor
                  <ExternalLink className="ml-1 w-3 h-3" />
                </a>
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
          <div className="mb-4 text-gray-600">
            <p>These reviews are real reviews from our TripAdvisor page.</p>
            <p className="text-sm">Updated periodically from our TripAdvisor profile.</p>
          </div>
          <a 
            href={tripAdvisorUrl} 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200 ease-in-out"
          >
            See All Reviews on TripAdvisor
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
