
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const DesertasSchedule = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Desertas Islands Tour</h2>
      
      <div className="grid gap-8">
        <div>
          <h3 className="text-lg font-medium mb-3">Departure Schedule</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Tour Type</th>
                  <th className="border px-4 py-2 text-left">Days</th>
                  <th className="border px-4 py-2 text-left">Departure Time</th>
                  <th className="border px-4 py-2 text-left">Return Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Day Tour (8 hours)</td>
                  <td className="border px-4 py-2">Tuesday, Thursday</td>
                  <td className="border px-4 py-2">09:00</td>
                  <td className="border px-4 py-2">17:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Half-Day Tour (5 hours)</td>
                  <td className="border px-4 py-2">Monday, Wednesday, Friday</td>
                  <td className="border px-4 py-2">12:30</td>
                  <td className="border px-4 py-2">17:30</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Weekend Special (6 hours)</td>
                  <td className="border px-4 py-2">Saturday, Sunday</td>
                  <td className="border px-4 py-2">12:30</td>
                  <td className="border px-4 py-2">18:30</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Note: All tours depart from Funchal Marina. Please arrive 30 minutes before departure time.
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Button className="bg-green-600 hover:bg-green-700">
          <Link to="/desertas" className="flex items-center">
            Discover Desertas Islands <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
