
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TestimonialHeading,
  CompanyValues,
  TripAdvisorRating,
  ReviewList,
  ReviewActions,
  reviews,
  tripAdvisorUrl,
  containerVariants
} from "@/components/testimonials";

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
          <TestimonialHeading inView={testimonialsInView} />
          <CompanyValues inView={testimonialsInView} />
          <TripAdvisorRating inView={testimonialsInView} />
        </motion.div>

        <ReviewList reviews={reviews} inView={testimonialsInView} />
        <ReviewActions tripAdvisorUrl={tripAdvisorUrl} inView={testimonialsInView} />
      </div>
    </section>
  );
};
