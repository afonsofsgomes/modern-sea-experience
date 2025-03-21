
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import {
  GroupBookingsHero,
  GroupIntroSection,
  GroupExperiencesSection,
  QuoteRequestSection
} from "@/components/group-bookings";

const GroupBookings = () => {
  // Set SEO metadata
  useSEO({
    title: "Group Bookings | Sea You - Madeira Maritime Experiences",
    description: "Special rates and personalized service for groups of all sizes with customized maritime experiences in Madeira.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Group Bookings",
      "description": "Maritime experiences for groups with special rates and personalized service in Madeira.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Sea You",
        "telephone": "+351 913 514 961",
        "email": "support@seayou.pt"
      },
      "serviceType": "Maritime Experiences"
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <GroupBookingsHero />
      <GroupIntroSection />
      <GroupExperiencesSection />
      <QuoteRequestSection />
      <Footer />
    </div>
  );
};

export default GroupBookings;
