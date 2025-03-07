
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ReviewActionsProps {
  tripAdvisorUrl: string;
  inView: boolean;
}

export const ReviewActions = ({ tripAdvisorUrl, inView }: ReviewActionsProps) => {
  return (
    <motion.div 
      className="mt-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
  );
};
