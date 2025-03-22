
import { LucideIcon } from "lucide-react";

interface ExperienceFeatureProps {
  icon: LucideIcon;
  text: string;
  color: string;
}

export const ExperienceFeature = ({ icon: Icon, text, color }: ExperienceFeatureProps) => {
  return (
    <div className="flex items-start gap-3">
      <Icon className={`h-5 w-5 text-${color}-700 mt-0.5 flex-shrink-0`} />
      <span className="text-gray-700">{text}</span>
    </div>
  );
};
