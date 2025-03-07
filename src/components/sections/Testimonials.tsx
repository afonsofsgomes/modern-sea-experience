
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ExternalLink, Shield, Coffee, Award } from "lucide-react";

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
    name: "Ana",
    country: "Portugal",
    rating: 5,
    text: "An excellent way to start the day and explore a bit of Madeira's stunning coastline. The staff is very friendly and welcoming, always making sure you have a great experience.",
    date: "September 2023",
    link: "https://www.tripadvisor.com/ShowUserReviews-g1178726-d28508392-r992739462-SeaYou_Madeira-Calheta_Madeira_Madeira_Islands.html"
  },
  {
    name: "Anne T",
    country: "UK",
    rating: 5,
    text: "A day to remember. We went from Canical to Calheta on the new Seabus. It was absolutely wonderful, we loved every minute.",
    date: "July 2023",
    link: "https://www.tripadvisor.com/ShowUserReviews-g1178726-d28508392-r992438674-SeaYou_Madeira-Calheta_Madeira_Madeira_Islands.html"
  },
  {
    name: "Lauren",
    country: "UK",
    rating: 5,
    text: "What an amazing experience! Highly recommended. We literally got the best of both worlds we had a super chilled glide out to enjoy the sunset and even stopped for a swim.",
    date: "August 2023",
    link: "https://www.tripadvisor.com/ShowUserReviews-g1178726-d28508392-r977114675-SeaYou_Madeira-Calheta_Madeira_Madeira_Islands.html"
  }
];

const tripAdvisorUrl = "https://www.tripadvisor.com/Attraction_Review-g1178726-d28508392-Reviews-SeaYou_Madeira-Calheta_Madeira_Madeira_Islands.html";

// Company values
const companyValues = [
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Safety First",
    description: "Our boat is equipped with modern safety equipment and our crew is trained in first aid and emergency procedures."
  },
  {
    icon: <Coffee className="w-10 h-10 text-primary" />,
    title: "Hospitality",
    description: "Your comfort is our priority. We go the extra mile to ensure you experience Madeira in the most enjoyable and comfortable way. Relax and explore with ease, knowing every detail is taken care of!"
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Local Expertise",
    description: "Our team consists of local captains and sailors who have extensive knowledge of Madeira's waters and places of interest on land. Just ask us."
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
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-medium mb-6">
            About SeaYou Madeira
          </motion.h2>
          <motion.p variants={itemVariants} className="text-muted-foreground mb-10">
            SeaYou Madeira is a premier maritime tour operator based in Calheta, Madeira Island. 
            Founded with a passion for the ocean and marine life, we specialize in creating 
            unforgettable sea experiences for visitors to our beautiful island.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={testimonialsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {companyValues.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-4">
            <img 
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" 
              alt="TripAdvisor Logo" 
              className="h-10" 
            />
          </motion.div>
          <motion.span variants={itemVariants} className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
            Reviews from TripAdvisor
          </motion.span>
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
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.country}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href={review.link}
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
