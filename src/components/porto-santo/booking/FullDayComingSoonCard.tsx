
import { 
  Car, 
  Ship,
  Utensils,
  Fish,
} from "lucide-react";
import { ComingSoonContent } from "@/components/porto-santo/ComingSoonContent";

export const FullDayComingSoonCard = () => {
  return (
    <div className="bg-white border-0 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl relative">
      <div className="h-36 sm:h-48 bg-gradient-to-r from-purple-100 to-purple-300 relative overflow-hidden">
        <Fish className="absolute right-6 bottom-6 h-20 w-20 text-white/30" />
        <div className="absolute inset-0 bg-white/5"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-2xl font-bold text-gray-800">Full-Day Tour</h3>
          <p className="text-gray-700 text-sm mt-1">Complete experience with activities</p>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
              Premium
            </span>
          </div>
          <h4 className="text-lg font-semibold mb-3">1-Day Porto Santo Experience</h4>
          <p className="text-gray-600 mb-4">
            Complete island experience with guided boat tour, local lunch, and water activities.
          </p>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <Car className="h-5 w-5 text-purple-600 flex-shrink-0" />
            <span className="text-gray-700">Guided island tour with pirate stories</span>
          </div>
          <div className="flex items-center gap-3">
            <Utensils className="h-5 w-5 text-purple-600 flex-shrink-0" />
            <span className="text-gray-700">Traditional Porto Santo lunch included</span>
          </div>
          <div className="flex items-center gap-3">
            <Fish className="h-5 w-5 text-purple-600 flex-shrink-0" />
            <span className="text-gray-700">Afternoon kayaking near pristine caves</span>
          </div>
          <div className="flex items-center gap-3">
            <Ship className="h-5 w-5 text-purple-600 flex-shrink-0" />
            <span className="text-gray-700">Round-trip boat tour</span>
          </div>
        </div>
        
        <ComingSoonContent />
      </div>
    </div>
  );
};
