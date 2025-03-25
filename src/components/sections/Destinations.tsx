
import React from "react";
import { Link } from "react-router-dom";
import { Ship, PalmtreeIcon, Anchor } from "lucide-react";

interface DestinationCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  icon: React.ComponentType<any>;
  gradient: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({
  title,
  description,
  image,
  link,
  icon: Icon,
  gradient
}) => {
  return (
    <Link to={link} className="relative block rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center opacity-80"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-75`}></div>
      </div>
      <div className="relative p-6 flex flex-col items-start justify-end h-64">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 mb-3">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-white opacity-90">{description}</p>
      </div>
    </Link>
  );
};

export const Destinations = () => {
  return (
    <section id="destinations" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
            Explore Our Destinations
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the beauty of Madeira with our exclusive boat tours
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* SeaBus Card */}
          <DestinationCard
            title="SeaBus Catamaran"
            description="Experience the thrill of coastal exploration on our SeaBus Catamaran, offering daily routes."
            image="/lovable-uploads/4916a25d-a9c9-4401-855f-3959288a908b.jpg"
            link="/seabus"
            icon={Ship}
            gradient="from-blue-500/90 to-blue-700/90"
          />
          
          {/* Porto Santo Card */}
          <DestinationCard
            title="Porto Santo Island"
            description="Embark on a day trip to Porto Santo, known for its golden beaches and tranquil atmosphere."
            image="/lovable-uploads/990a9965-8959-4196-852a-481849549943.jpg"
            link="/porto-santo"
            icon={PalmtreeIcon}
            gradient="from-yellow-500/90 to-yellow-700/90"
          />
          
          {/* Private Cruise Card - replace Desertas with this */}
          <DestinationCard
            title="Private Cruises"
            description="Charter our vessels for exclusive private experiences along Madeira's stunning coastline."
            image="/lovable-uploads/55bd04ea-d807-46c1-ba3e-b6e118ffc695.jpg"
            link="/private-cruise"
            icon={Anchor}
            gradient="from-green-500/90 to-green-700/90"
          />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Explore the best of Madeira's coast with SeaYou - Book your adventure today!
          </p>
        </div>
      </div>
    </section>
  );
};
