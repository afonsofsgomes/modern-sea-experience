
import { CalendarDays, Clock, MapPin } from "lucide-react";

export const BookingHeader = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-blue-900 rounded-full mb-4">
          Book Now
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-blue-900">
          Porto Santo Experiences
        </h2>
        <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
          Choose your perfect Porto Santo adventure from our carefully crafted experiences.
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-6 md:p-8 text-center mb-12 shadow-sm">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Schedule Information</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-blue-700" />
            <p className="font-medium">WEDNESDAY, THURSDAY, FRIDAY</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-700" />
            <p className="font-medium">Departure: 09:00 | Return: 17:00</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-700" />
            <p className="font-medium">Caniçal Harbor</p>
          </div>
        </div>
      </div>
    </>
  );
};
