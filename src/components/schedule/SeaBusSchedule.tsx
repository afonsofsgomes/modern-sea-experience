
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const SeaBusSchedule = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">SeaBus Routes</h2>
      
      <div className="grid gap-8">
        <div>
          <h3 className="text-lg font-medium mb-3">Tuesday, Saturday, Sunday</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Route</th>
                  <th className="border px-4 py-2 text-left">Departure</th>
                  <th className="border px-4 py-2 text-left">Return</th>
                  <th className="border px-4 py-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Calheta → Funchal</td>
                  <td className="border px-4 py-2">09:00</td>
                  <td className="border px-4 py-2">18:15</td>
                  <td className="border px-4 py-2">1h 15m</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Calheta → Caniçal</td>
                  <td className="border px-4 py-2">09:00</td>
                  <td className="border px-4 py-2">17:00</td>
                  <td className="border px-4 py-2">2h 30m</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Funchal → Caniçal</td>
                  <td className="border px-4 py-2">10:30</td>
                  <td className="border px-4 py-2">17:00</td>
                  <td className="border px-4 py-2">1h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Wednesday, Thursday, Friday</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2 text-left">Route</th>
                  <th className="border px-4 py-2 text-left">Departure</th>
                  <th className="border px-4 py-2 text-left">Return</th>
                  <th className="border px-4 py-2 text-left">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Caniçal → Funchal</td>
                  <td className="border px-4 py-2">09:00</td>
                  <td className="border px-4 py-2">18:30</td>
                  <td className="border px-4 py-2">1h</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Caniçal → Calheta</td>
                  <td className="border px-4 py-2">09:00</td>
                  <td className="border px-4 py-2">17:00</td>
                  <td className="border px-4 py-2">2h 30m</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Funchal → Calheta</td>
                  <td className="border px-4 py-2">10:15</td>
                  <td className="border px-4 py-2">17:00</td>
                  <td className="border px-4 py-2">1h 15m</td>
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
