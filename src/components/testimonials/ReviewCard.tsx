
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { Review } from "./types";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <motion.div 
      className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 relative"
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
  );
};
