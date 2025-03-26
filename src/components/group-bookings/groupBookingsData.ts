
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
    image: "https://extranet.seayou.pt/photos/products/groups/schools.jpg",
    badge: "Educational",
    location: "Multiple routes available"
  },
  {
    title: "Corporate Team Building",
    description: "Build stronger teams while enjoying the beautiful waters around Madeira with customized activities.",
    image: "https://extranet.seayou.pt/photos/products/groups/corporate.jpg",
    badge: "Team Building",
    location: "Private cruise options"
  },
  {
    title: "Family Reunion Package",
    description: "Create lasting memories with a special maritime experience for your family gathering.",
    image: "https://extranet.seayou.pt/photos/products/groups/family.jpg",
    badge: "Family",
    location: "Custom routes available"
  }
];
