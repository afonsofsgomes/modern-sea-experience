
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { itemVariants } from "./animation-variants";

interface TripAdvisorRatingProps {
  inView: boolean;
}

export const TripAdvisorRating = ({ inView }: TripAdvisorRatingProps) => {
  return (
    <>
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
    </>
  );
};
