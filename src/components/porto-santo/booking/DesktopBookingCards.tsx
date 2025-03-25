
import { 
  Compass, 
  Car, 
  Ship,
  Map,
  Binoculars,
  Palmtree
} from "lucide-react";
import { ExperienceCard } from "@/components/porto-santo/ExperienceCard";
import { FullDayComingSoonCard } from "./FullDayComingSoonCard";

export const DesktopBookingCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
      {/* Basic Experience */}
      <ExperienceCard 
        title="Basic Experience"
        subtitle="Self-guided island exploration"
        description="Round-trip boat tour to Porto Santo's golden beaches. Explore the island at your own leisure."
        badge={{ text: "Standard", color: "blue" }}
        gradient={{ from: "blue", to: "blue" }}
        icon={Ship}
        features={[
          { icon: Compass, text: "Self-guided exploration of Porto Santo" },
          { icon: Palmtree, text: "Full day on the golden beach" },
          { icon: Ship, text: "Round-trip boat tour" }
        ]}
        productId="982788"
        bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
      />
      
      {/* Half-Day Tour */}
      <ExperienceCard 
        title="Half-Day Tour"
        subtitle="Morning tour + afternoon leisure"
        description="Round-trip boat tour to Porto Santo + Guided van tour with stories of Porto Santo's Pirates history, followed by free time to enjoy the beaches and the island"
        badge={{ text: "Popular", color: "green" }}
        gradient={{ from: "green", to: "green" }}
        icon={Map}
        features={[
          { icon: Car, text: "Guided island tour with pirate stories" },
          { icon: Binoculars, text: "Free afternoon for beach & exploration" },
          { icon: Ship, text: "Round-trip boat tour" }
        ]}
        productId="985324"
        bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
      />
      
      {/* Full-Day Tour - Coming Soon */}
      <FullDayComingSoonCard />
    </div>
  );
};
