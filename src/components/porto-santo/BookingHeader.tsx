
import React from "react";
import { Ship, MapPin, AlertTriangle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export const BookingHeader: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10">
      <span className="inline-block py-1 px-3 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-4">
        Available Experiences
      </span>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-blue-900">
        Choose Your Perfect Porto Santo Day
      </h2>
      <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
        All experiences include round-trip boat tour from Marina da Quinta do Lorde (Caniçal) to Porto Santo.
      </p>
      
      <Alert className="bg-amber-50 border-amber-200 mb-8">
        <AlertTriangle className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-700 text-sm">
          Tours are subject to weather conditions and may be rescheduled with short notice.
        </AlertDescription>
      </Alert>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
        <div className="flex items-center gap-2">
          <Ship className="h-5 w-5 text-primary" />
          <span className="text-sm text-gray-600">2.5 hours sailing time</span>
        </div>
        <Separator orientation="vertical" className="h-6 hidden sm:block" />
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          <span className="text-sm text-gray-600">Departs from Caniçal</span>
        </div>
      </div>
    </div>
  );
};
