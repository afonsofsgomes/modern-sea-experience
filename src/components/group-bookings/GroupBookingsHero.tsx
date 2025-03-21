
import { motion } from "framer-motion";

export const GroupBookingsHero = () => {
  return (
    <section className="pt-32 pb-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-white/20 rounded-full mb-4">
            For Groups
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Group Bookings
          </h1>
          <p className="text-lg text-white/80">
            Special rates and personalized service for groups of all sizes
          </p>
        </div>
      </div>
    </section>
  );
};

export default GroupBookingsHero;
