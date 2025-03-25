
import React from "react";
import { Clock, Ship, Award, Umbrella, Binoculars } from "lucide-react";
import { ExperienceCard } from "@/components/porto-santo/ExperienceCard";

export const PortoSantoTours = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block py-1 px-3 text-xs font-medium bg-blue-100 text-blue-900 rounded-full mb-4">
            Experiences
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-blue-900">
            Porto Santo Day Trips
          </h2>
          <p className="text-base text-muted-foreground">
            All experiences include round-trip boat tour from Marina da Quinta do Lorde (Caniçal) to Porto Santo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Full-day Experience */}
          <ExperienceCard
            title="Full Day on Golden Beach"
            subtitle="Relaxation & Leisure"
            description="Enjoy a full day at Porto Santo's famous 9km golden beach. Swim in crystal clear waters and experience the therapeutic properties of the sand."
            features={[
              { icon: Clock, text: "8:00 AM - 6:30 PM" },
              { icon: Ship, text: "1 hour boat ride each way" },
              { icon: Umbrella, text: "Full day on the beach" },
              { icon: Award, text: "Includes audio guide" }
            ]}
            badge={{
              text: "Most Popular",
              color: "blue"
            }}
            gradient={{
              from: "blue",
              to: "blue"
            }}
            icon={Umbrella}
            productId="14f7e6e4-cff0-4ee4-aaba-2b8a8f48ad82"
            bookingChannelUUID="d9265611-23d5-4c75-997d-0cb5c76a70fe"
          />
          
          {/* Free Afternoon Experience */}
          <ExperienceCard
            title="Free Afternoon for Beach & Exploration"
            subtitle="Self-Guided Experience"
            description="Arrive at Porto Santo at 11:30 AM and have the afternoon free to explore the island at your own pace before returning at 4:30 PM."
            features={[
              { icon: Clock, text: "11:30 AM - 4:30 PM" },
              { icon: Ship, text: "1 hour boat ride each way" },
              { icon: Binoculars, text: "Free time for exploration" },
              { icon: Award, text: "Beach & town nearby" }
            ]}
            badge={{
              text: "Flexible",
              color: "green"
            }}
            gradient={{
              from: "green",
              to: "green"
            }}
            icon={Binoculars}
            isComingSoon={true}
          />
        </div>
      </div>
    </section>
  );
};
