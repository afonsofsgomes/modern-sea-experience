
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type FeatureType = {
  icon: React.ReactNode;
  text: string;
};

type StatType = {
  value: string;
  label: string;
};

type DestinationCardProps = {
  name: string;
  image: string;
  description: string;
  features: FeatureType[];
  link: string;
  buttonText: string;
  stats: StatType[];
  experience: string;
  experienceDesc: string;
  isOdd: boolean;
};

export const DestinationCard = ({
  name,
  image,
  description,
  features,
  link,
  buttonText,
  stats,
  experience,
  experienceDesc,
  isOdd
}: DestinationCardProps) => {
  // Map names to descriptions for image alt text
  const getImageDescription = (name: string) => {
    switch (name) {
      case "Caniçal":
        return "Ponta de São Lourenço";
      case "Calheta":
        return "Marina da Calheta";
      case "Porto Santo":
        return "Porto Santo Island";
      default:
        return name;
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row ${isOdd ? 'lg:flex-row-reverse' : ''}`}>
      <div className="w-full lg:w-1/2 relative aspect-video lg:aspect-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={getImageDescription(name)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80';
          }}
        />
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20">
          <span className="text-white text-base sm:text-xl font-medium drop-shadow-md">
            {getImageDescription(name)}
          </span>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col justify-center">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-medium">{experience}</h3>
          <p className="text-sm text-muted-foreground">{experienceDesc}</p>
        </div>
        
        <div className="my-5">
          <div className="h-px w-full bg-gradient-to-r from-secondary/50 to-transparent"></div>
        </div>
        
        <h4 className="text-lg font-medium mb-2">Highlights of {name}</h4>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 md:mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              className="bg-gray-50 rounded-md p-4 flex-1 min-w-[100px] hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h3 className="text-2xl font-medium mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary/10 flex items-center justify-center mr-3 flex-shrink-0">
                {feature.icon}
              </div>
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
        </div>
        
        <Link to={link} className="mt-auto flex justify-center">
          <Button size="lg" className="w-full sm:w-auto bg-secondary text-white relative overflow-hidden group shadow-lg shadow-secondary/25 hover:shadow-secondary/40 border-2 border-secondary/50 hover:scale-105 transition-all duration-300">
            <span className="relative z-10">{buttonText}</span>
            <div className="absolute -inset-0.5 bg-secondary/30 rounded-md blur opacity-0 group-hover:opacity-70 transition duration-300 group-hover:animate-pulse"></div>
          </Button>
        </Link>
      </div>
    </div>
  );
};
