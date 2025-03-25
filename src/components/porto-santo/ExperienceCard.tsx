
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
  
  // Pastel gradient background map
  const gradientMap: Record<string, string> = {
    blue: "from-blue-100 to-blue-300",
    green: "from-green-100 to-green-300",
    purple: "from-purple-100 to-purple-300",
  };
  
  const cardGradient = gradientMap[gradient.from] || "from-blue-100 to-blue-300";
  
  return (
    <Card className={`bg-white border-0 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 relative`}>
      <div className={`h-36 sm:h-48 bg-gradient-to-r ${cardGradient} relative overflow-hidden`}>
        <Icon className="absolute right-6 bottom-6 h-20 w-20 text-white/30" />
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-700 text-sm mt-1">{subtitle}</p>
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
        
        {productId && bookingChannelUUID ? (
          <BokunWidget 
            isCalendarWidget={true}
            productId={productId}
            bookingChannelUUID={bookingChannelUUID}
            className="min-h-[300px]" 
          />
        ) : (
          <div className="h-[300px] flex items-center justify-center bg-gray-100 rounded-lg">
            <p className="text-gray-500">Coming soon - Join our waitlist</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
