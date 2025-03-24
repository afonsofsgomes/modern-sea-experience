
import { 
  Compass, 
  Car, 
  Umbrella, 
  Ship,
  Utensils,
  Fish,
  Map
} from "lucide-react";
import { 
  BookingHeader, 
  ExperienceCard, 
  BookingFooter 
} from "@/components/porto-santo";

export const PortoSantoBooking = () => {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <BookingHeader />
        
        {/* Experience Cards */}
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
              { icon: Umbrella, text: "Full day on the golden beach" },
              { icon: Ship, text: "Round-trip boat tour" }
            ]}
            productId="982788"
            bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
          />
          
          {/* Half-Day Tour */}
          <ExperienceCard 
            title="Half-Day Tour"
            subtitle="Morning tour + afternoon leisure"
            description="Guided boat tour with stories of Porto Santo's history, followed by free time to enjoy the beaches."
            badge={{ text: "Popular", color: "green" }}
            gradient={{ from: "green", to: "green" }}
            icon={Map}
            features={[
              { icon: Car, text: "Guided island tour with local history" },
              { icon: Umbrella, text: "Free afternoon for beach & exploration" },
              { icon: Ship, text: "Round-trip boat tour" }
            ]}
            productId="985324"
            bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
          />
          
          {/* Full-Day Tour (Coming Soon) */}
          <ExperienceCard 
            title="Full-Day Tour"
            subtitle="Complete experience with activities"
            description="Complete island experience with guided boat tour, local lunch, and water activities."
            badge={{ text: "Premium", color: "purple" }}
            gradient={{ from: "purple", to: "purple" }}
            icon={Fish}
            features={[
              { icon: Car, text: "Guided island tour with pirate stories" },
              { icon: Utensils, text: "Traditional Porto Santo lunch included" },
              { icon: Fish, text: "Afternoon kayaking near pristine caves" },
              { icon: Ship, text: "Round-trip boat tour" }
            ]}
            isComingSoon={true}
          />
        </div>
        
        <BookingFooter />
      </div>
    </section>
  );
};
