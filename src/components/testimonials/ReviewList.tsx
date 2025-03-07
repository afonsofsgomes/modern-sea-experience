
import { motion } from "framer-motion";
import { ReviewCard } from "./ReviewCard";
import { containerVariants } from "./animation-variants";
import { Review } from "./types";

interface ReviewListProps {
  reviews: Review[];
  inView: boolean;
}

export const ReviewList = ({ reviews, inView }: ReviewListProps) => {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
    >
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </motion.div>
  );
};
