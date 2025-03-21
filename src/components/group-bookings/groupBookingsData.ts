
import { Users, CalendarDays, Clock, MapPin } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface GroupFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const groupFeatures: GroupFeature[] = [
  {
    icon: Users,
    title: "Special Group Rates",
    description: "Discounted prices for groups of 10 or more people"
  },
  {
    icon: CalendarDays,
    title: "Flexible Scheduling",
    description: "Options to accommodate your group's specific timing needs"
  },
  {
    icon: MapPin,
    title: "Custom Pickup Points",
    description: "Arrange convenient pickup locations for larger groups"
  },
  {
    icon: Clock,
    title: "Dedicated Booking Agent",
    description: "Personal assistance throughout the booking process"
  }
];

interface GroupPackage {
  title: string;
  description: string;
  image: string;
  badge: string;
  location: string;
}

export const groupPackages: GroupPackage[] = [
  {
    title: "School Group Adventure",
    description: "Educational and fun maritime experiences tailored for school groups with special educational content.",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Educational",
    location: "Multiple routes available"
  },
  {
    title: "Corporate Team Building",
    description: "Build stronger teams while enjoying the beautiful waters around Madeira with customized activities.",
    image: "https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Team Building",
    location: "Private cruise options"
  },
  {
    title: "Family Reunion Package",
    description: "Create lasting memories with a special maritime experience for your family gathering.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "Family",
    location: "Custom routes available"
  }
];
