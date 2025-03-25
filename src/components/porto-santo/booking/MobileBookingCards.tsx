
import { 
  Compass, 
  Car, 
  Ship,
  Utensils,
  Fish,
  Binoculars,
  Palmtree
} from "lucide-react";
import { MobileExperienceCard } from "@/components/porto-santo/MobileExperienceCard";

export const MobileBookingCards = () => {
  return (
    <div className="space-y-6 mb-8">
      {/* Basic Experience - Mobile */}
      <MobileExperienceCard
        title="Basic Experience"
        subtitle="Self-guided exploration"
        description="Round-trip boat tour to Porto Santo's golden beaches. Explore at your own leisure."
        badgeText="Standard"
        badgeColor="blue"
        gradientFrom="blue"
        gradientTo="blue"
        features={[
          { icon: Compass, text: "Self-guided exploration" },
          { icon: Palmtree, text: "Full day on the golden beach" },
          { icon: Ship, text: "Round-trip boat tour" }
        ]}
        footer={
          <button
            onClick={() => {
              const bookingSection = document.getElementById('basic-booking');
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            See availability
          </button>
        }
      />
      
      {/* Half-Day Tour - Mobile */}
      <MobileExperienceCard
        title="Half-Day Tour"
        subtitle="Morning tour + leisure"
        description="Round-trip boat tour to Porto Santo + Guided van tour with stories of Porto Santo's Pirates history, followed by free time to enjoy the beaches and the island"
        badgeText="Popular"
        badgeColor="green"
        gradientFrom="green"
        gradientTo="green"
        features={[
          { icon: Car, text: "Guided island tour with pirate stories" },
          { icon: Binoculars, text: "Free time for beach & exploration" },
          { icon: Ship, text: "Round-trip boat tour" }
        ]}
        footer={
          <button 
            onClick={() => {
              const bookingSection = document.getElementById('half-day-booking');
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            See availability
          </button>
        }
      />
      
      {/* Full-Day Tour - Mobile - Coming Soon */}
      <MobileExperienceCard
        title="Full-Day Tour"
        subtitle="Complete experience"
        description="Complete island experience with guided tour, lunch, and activities."
        badgeText="Premium"
        badgeColor="purple"
        gradientFrom="purple"
        gradientTo="purple"
        features={[
          { icon: Car, text: "Guided island tour" },
          { icon: Utensils, text: "Traditional lunch included" },
          { icon: Fish, text: "Afternoon kayaking" },
          { icon: Ship, text: "Round-trip boat tour" }
        ]}
        footer={
          <div className="w-full bg-purple-200 text-purple-800 text-sm font-medium py-2 px-4 rounded-md text-center">
            Coming Soon
          </div>
        }
      />
    </div>
  );
};
