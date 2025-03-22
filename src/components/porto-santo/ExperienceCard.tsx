
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { BokunWidget } from "@/components/BokunWidget";
import { ExperienceFeature } from "./ExperienceFeature";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: Array<{
    icon: LucideIcon;
    text: string;
  }>;
  badge: {
    text: string;
    color: string;
  };
  gradient: {
    from: string;
    to: string;
  };
  icon: LucideIcon;
  productId?: string;
  bookingChannelUUID?: string;
  isComingSoon?: boolean;
}

export const ExperienceCard = ({
  title,
  subtitle,
  description,
  features,
  badge,
  gradient,
  icon: Icon,
  productId,
  bookingChannelUUID,
  isComingSoon = false,
}: ExperienceCardProps) => {
  const colorMap: Record<string, string> = {
    blue: "blue",
    green: "green",
    purple: "purple",
  };
  
  const badgeColor = colorMap[badge.color] || "blue";
  const iconColor = colorMap[badge.color] || "blue";
  
  return (
    <Card className={`bg-white border-0 shadow-lg rounded-xl overflow-hidden transition-all duration-300 ${isComingSoon ? '' : 'hover:shadow-xl transform hover:-translate-y-1'} relative`}>
      {isComingSoon && (
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center">
          <span className="bg-red-500 text-white font-bold py-2 px-6 rounded-full text-sm mb-4">Coming Soon</span>
          <p className="text-center text-gray-700 max-w-[80%]">Our Full Day Guided Experience will be available soon!</p>
        </div>
      )}
      <div className={`h-48 bg-gradient-to-r from-${gradient.from}-500 to-${gradient.to}-700 relative overflow-hidden`}>
        <Icon className="absolute right-6 bottom-6 h-20 w-20 text-white/20" />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-white/90 text-sm mt-1">{subtitle}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className={`bg-${badgeColor}-100 text-${badgeColor}-800 text-xs font-semibold px-3 py-1 rounded-full`}>
              {badge.text}
            </span>
          </div>
          <h4 className="text-lg font-semibold mb-3">1-Day Porto Santo Experience</h4>
          <p className="text-gray-600 mb-4">
            {description}
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <ExperienceFeature 
              key={index}
              icon={feature.icon}
              text={feature.text}
              color={iconColor}
            />
          ))}
        </div>
        
        {isComingSoon ? (
          <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-lg">
            <p className="text-gray-500">Booking available soon</p>
          </div>
        ) : (
          <BokunWidget 
            isCalendarWidget={true}
            productId={productId}
            bookingChannelUUID={bookingChannelUUID}
            className="min-h-[300px]" 
          />
        )}
      </CardContent>
    </Card>
  );
};
