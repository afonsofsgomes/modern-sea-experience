
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const SeaBusSchedule = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">SeaBus Routes</h2>
      
      <div className="grid gap-8">
        <div>
          <h3 className="text-lg font-medium mb-3">Funchal to Caniçal</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Days</th>
                  <th className="border px-4 py-2 text-left">Departure Times</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Monday - Friday</td>
                  <td className="border px-4 py-2">07:00, 09:30, 12:00, 14:30, 17:00, 19:30</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Saturday</td>
                  <td className="border px-4 py-2">08:00, 11:00, 14:00, 17:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Sunday</td>
                  <td className="border px-4 py-2">09:00, 13:00, 17:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Caniçal to Funchal</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Days</th>
                  <th className="border px-4 py-2 text-left">Departure Times</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Monday - Friday</td>
                  <td className="border px-4 py-2">08:15, 10:45, 13:15, 15:45, 18:15, 20:45</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Saturday</td>
                  <td className="border px-4 py-2">09:30, 12:30, 15:30, 18:30</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Sunday</td>
                  <td className="border px-4 py-2">11:00, 15:00, 19:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Link to="/seabus" className="flex items-center">
            View SeaBus Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
