
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

export const DesertasSchedule = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Desertas Islands Tour</h2>
      
      <div className="grid gap-8">
        <div>
          <h3 className="text-lg font-medium mb-3">Departure Schedule</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead>Days</TableHead>
                  <TableHead>Departure Time</TableHead>
                  <TableHead>Return Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Tuesdays, Saturdays, Sundays</TableCell>
                  <TableCell>12:30</TableCell>
                  <TableCell>16:00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Note: All Desertas Islands tours depart from Caniçal Harbor. Please arrive 30 minutes before departure time.
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
