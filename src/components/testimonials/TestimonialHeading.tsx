
import { motion } from "framer-motion";
import { itemVariants } from "./animation-variants";

interface TestimonialHeadingProps {
  inView: boolean;
}

export const TestimonialHeading = ({ inView }: TestimonialHeadingProps) => {
  return (
    <>
      <motion.h2 
        variants={itemVariants} 
        className="text-3xl md:text-4xl font-display font-medium mb-6"
      >
        About SeaYou Madeira
      </motion.h2>
      <motion.p 
        variants={itemVariants} 
        className="text-muted-foreground mb-10"
      >
        SeaYou Madeira is a premier maritime tour operator based in Calheta, Madeira Island. 
        Founded with a passion for the ocean and marine life, we specialize in creating 
        unforgettable sea experiences for visitors to our beautiful island.
      </motion.p>
    </>
  );
};
