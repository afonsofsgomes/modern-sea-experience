
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const PortoSantoSchedule = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Porto Santo Ferry</h2>
      
      <div className="grid gap-8">
        <div>
          <h3 className="text-lg font-medium mb-3">Funchal to Porto Santo</h3>
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
                  <td className="border px-4 py-2">Monday, Wednesday, Friday</td>
                  <td className="border px-4 py-2">08:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Saturday</td>
                  <td className="border px-4 py-2">08:00, 18:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Porto Santo to Funchal</h3>
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
                  <td className="border px-4 py-2">Tuesday, Thursday, Sunday</td>
                  <td className="border px-4 py-2">18:00</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Saturday</td>
                  <td className="border px-4 py-2">12:00, 22:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Button className="bg-red-500 hover:bg-red-600">
          <Link to="/porto-santo" className="flex items-center">
            Explore Porto Santo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
