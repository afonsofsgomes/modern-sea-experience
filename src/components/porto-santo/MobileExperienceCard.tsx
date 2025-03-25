
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface MobileExperienceCardProps {
  title: string;
  subtitle: string;
  description: string;
  badgeText: string;
  badgeColor: string;
  gradientFrom: string;
  gradientTo: string;
  features: Array<{
    icon: LucideIcon;
    text: string;
  }>;
  footer: ReactNode;
  className?: string;
}

export const MobileExperienceCard = ({
  title,
  subtitle,
  description,
  badgeText,
  badgeColor,
  gradientFrom,
  gradientTo,
  features,
  footer,
  className = "",
}: MobileExperienceCardProps) => {
  return (
    <div className={`bg-white border border-${badgeColor}-100 rounded-lg shadow-sm overflow-hidden ${className}`}>
      <div className={`bg-gradient-to-r from-${gradientFrom}-100 to-${gradientTo}-200 p-4`}>
        <div className="flex justify-between items-center">
          <div>
            <h3 className={`text-lg font-semibold text-${badgeColor}-800`}>{title}</h3>
            <p className={`text-sm text-${badgeColor}-600`}>{subtitle}</p>
          </div>
          <span className={`bg-${badgeColor}-100 text-${badgeColor}-800 text-xs font-semibold px-2 py-1 rounded-full`}>
            {badgeText}
          </span>
        </div>
      </div>
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="p-4 space-y-2">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex items-center gap-2">
              <Icon className={`h-4 w-4 text-${badgeColor}-700`} />
              <span className="text-xs text-gray-700">{feature.text}</span>
            </div>
          );
        })}
      </div>
      <div className="bg-gray-50 p-3">
        {footer}
      </div>
    </div>
  );
};
