
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, CalendarDays } from "lucide-react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const DesertasSchedule = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Desertas Islands Tour</h2>
        <Badge className="bg-amber-500 text-white">Coming Soon</Badge>
      </div>
      
      <div className="grid gap-8">
        <div>
          <h3 className="text-lg font-medium mb-3">Planned Schedule</h3>
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
            Note: All Desertas Islands tours will depart from Caniçal Harbor. Please arrive 30 minutes before departure time.
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <div className="bg-gray-100 py-3 px-4 rounded-md inline-flex items-center gap-3">
          <Clock className="h-5 w-5 text-amber-600" />
          <span className="text-gray-700">Stay tuned for our upcoming Desertas tours</span>
        </div>
      </div>
    </div>
  );
};
