
import { Coffee, ShoppingBag, Wine, Camera, MapPin, Fish, Sun, Mountain, Utensils, Anchor, Palmtree, Bird, Trees, Route, Sunset, Waves, Ship, Flag, Clock, Users, Calendar, CableCar, Eye } from "lucide-react";

export type FeatureType = {
  icon: React.ReactNode;
  text: string;
};

export type StatType = {
  value: string;
  label: string;
};

export type SubDestinationType = {
  name: string;
  image: string;
  description: string;
  features: FeatureType[];
};

export type DestinationType = {
  name: string;
  image?: string;
  description?: string;
  features?: FeatureType[];
  link: string;
  buttonText: string;
  stats: StatType[];
  experience: string;
  experienceDesc: string;
  multipleDestinations?: boolean;
  destinations: SubDestinationType[]; // Changed from optional to required to match MultiDestinationCardProps
};

export const destinationData: DestinationType[] = [
  {
    name: "SeaBus Connections",
    multipleDestinations: true,
    destinations: [
      {
        name: "Funchal",
        image: "https://extranet.seayou.pt/photos/Funchal.jpg",
        description: "Discover the vibrant capital of Madeira, with its historic old town, bustling markets, and delicious local cuisine. Enjoy a leisurely stroll along the promenade or take a cable car to Monte for panoramic views.",
        features: [
          { icon: <Coffee className="w-5 h-5 text-secondary" />, text: "Historic Old Town with cafés" },
          { icon: <ShoppingBag className="w-5 h-5 text-secondary" />, text: "Vibrant Farmers' Market" },
          { icon: <Trees className="w-5 h-5 text-secondary" />, text: "Tropical gardens and parks" },
          { icon: <CableCar className="w-5 h-5 text-secondary" />, text: "Monte Cable Car Experience" }
        ],
      },
      {
        name: "Caniçal",
        image: "https://extranet.seayou.pt/photos/Canical.jpg",
        description: "Experience the beautiful fishing village of Caniçal, the gateway to the stunning Ponta de São Lourenço nature reserve. Enjoy fresh seafood in the local restaurants and hike along dramatic coastal trails.",
        features: [
          { icon: <MapPin className="w-5 h-5 text-secondary" />, text: "Ponta de São Lourenço trails" },
          { icon: <Fish className="w-5 h-5 text-secondary" />, text: "Fresh seafood restaurants" },
          { icon: <Anchor className="w-5 h-5 text-secondary" />, text: "Whale Museum" },
          { icon: <Ship className="w-5 h-5 text-secondary" />, text: "Working fishing harbor" }
        ],
      },
      {
        name: "Calheta",
        image: "https://extranet.seayou.pt/photos/Calheta.jpg",
        description: "Relax on Calheta's golden sandy beach, one of the few on Madeira Island. Visit the rum distillery, art center, or simply enjoy the sun and calm waters of this charming coastal town.",
        features: [
          { icon: <Sun className="w-5 h-5 text-secondary" />, text: "Golden sand beach" },
          { icon: <Utensils className="w-5 h-5 text-secondary" />, text: "Rum distillery tastings" },
          { icon: <Camera className="w-5 h-5 text-secondary" />, text: "Casa das Mudas Art Center" },
          { icon: <Sunset className="w-5 h-5 text-secondary" />, text: "Beautiful sunset views" }
        ],
      }
    ],
    link: "/seabus",
    buttonText: "Book SeaBus Journey",
    stats: [
      { value: "1-2h", label: "Journey Time" },
      { value: "18", label: "Passengers" },
      { value: "Tue-Sun", label: "Departures" }
    ],
    experience: "SeaBus Connections",
    experienceDesc: "Fast and comfortable sea transportation with panoramic views between key destinations in Madeira."
  },
  {
    name: "Caniçal",
    image: "https://extranet.seayou.pt/photos/pta-s-lourenco.jpg",
    description: "Discover the raw beauty of the North Coast from the comfort and privacy of our catamaran. Sail along dramatic volcanic cliffs, marvel at the iconic Ponta de São Lourenço Lighthouse, and dive into crystal-clear waters surrounded by breathtaking scenery. An unforgettable experience, where nature's greatness meets total relaxation.",
    features: [
      { icon: <Eye className="w-5 h-5 text-secondary" />, text: "Stunning Views" },
      { icon: <Waves className="w-5 h-5 text-secondary" />, text: "Crystal Waters" },
      { icon: <Mountain className="w-5 h-5 text-secondary" />, text: "Caves and Volcanic Beaches" },
      { icon: <Users className="w-5 h-5 text-secondary" />, text: "Comfort of Privacy" }
    ],
    link: "/private-cruise",
    buttonText: "Book Private Cruise",
    stats: [
      { value: "2.30h", label: "Duration" },
      { value: "18", label: "Max Guests" },
      { value: "13:00", label: "Departure Time" }
    ],
    experience: "Private North Coast Cruise",
    experienceDesc: "Discover the dramatic cliffs and hidden caves of Madeira's rugged northern coastline.",
    destinations: [] // Added empty destinations array to satisfy DestinationType
  },
  {
    name: "Calheta",
    image: "https://extranet.seayou.pt/photos/calheta-prd.jpg",
    description: "Sail to the sunniest part of Madeira and experience the island's southern charm. Glide past small waterfalls, famous banana plantations, and picturesque villages. And for a truly unique moment, take a refreshing dip near a secluded beach, accessible only by boat – a hidden gem that could be yours alone.",
    features: [
      { icon: <Sun className="w-5 h-5 text-secondary" />, text: "Charming Coastal Villages" },
      { icon: <Waves className="w-5 h-5 text-secondary" />, text: "Crystal Waters" },
      { icon: <Route className="w-5 h-5 text-secondary" />, text: "Secluded Beaches" },
      { icon: <Ship className="w-5 h-5 text-secondary" />, text: "Comfort of Privacy" }
    ],
    link: "/private-cruise",
    buttonText: "Book Private Cruise",
    stats: [
      { value: "2.30h", label: "Duration" },
      { value: "18", label: "Max Guests" },
      { value: "13:00", label: "Departure Time" }
    ],
    experience: "Private South Coast Cruise",
    experienceDesc: "Explore Madeira's beautiful south western coast with a private cruise tailored to your preferences.",
    destinations: [] // Added empty destinations array to satisfy DestinationType
  },
  {
    name: "Desertas",
    image: "https://extranet.seayou.pt/photos/desertas.jpg",
    description: "Explore the uninhabited Desertas Islands, a nature reserve and sanctuary for rare species including the Mediterranean monk seal. These dramatic, rugged islands offer a glimpse of untouched natural beauty.",
    features: [
      { icon: <Bird className="w-5 h-5 text-secondary" />, text: "Rare seabirds and marine life" },
      { icon: <Anchor className="w-5 h-5 text-secondary" />, text: "Pristine natural reserves" },
      { icon: <Waves className="w-5 h-5 text-secondary" />, text: "Volcanic Beaches" },
      { icon: <Mountain className="w-5 h-5 text-secondary" />, text: "Natural Caves" }
    ],
    link: "/desertas",
    buttonText: "Book Desertas Adventure",
    stats: [
      { value: "3.30h", label: "Duration" },
      { value: "18", label: "Max Guests" },
      { value: "12:30", label: "Departure Time" }
    ],
    experience: "Desertas Island Adventure",
    experienceDesc: "Visit the uninhabited Desertas Islands to observe rare wildlife and pristine natural landscapes.",
    destinations: [] // Added empty destinations array to satisfy DestinationType
  },
  {
    name: "Porto Santo",
    image: "https://extranet.seayou.pt/photos/pxo.jpg",
    description: "Discover Porto Santo's famous 9km golden beach, known for its therapeutic properties. This tranquil island offers the perfect escape with crystal-clear waters, golf courses, and a relaxed atmosphere.",
    features: [
      { icon: <Waves className="w-5 h-5 text-secondary" />, text: "9km of therapeutic golden beach" },
      { icon: <Sun className="w-5 h-5 text-secondary" />, text: "Calm, warm waters year-round" },
      { icon: <Flag className="w-5 h-5 text-secondary" />, text: "Championship golf course" },
      { icon: <Palmtree className="w-5 h-5 text-secondary" />, text: "European Maldives" }
    ],
    link: "/porto-santo",
    buttonText: "Book Porto Santo 1-Day Experience",
    stats: [
      { value: "1h", label: "Connection Time" },
      { value: "12", label: "Max Guests" },
      { value: "Wed-Fri", label: "Departures" }
    ],
    experience: "Porto Santo Golden Island",
    experienceDesc: "Experience the therapeutic golden sands of Porto Santo in one day.",
    destinations: [] // Added empty destinations array to satisfy DestinationType
  }
];
