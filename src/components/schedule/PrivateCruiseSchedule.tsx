
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

export const PrivateCruiseSchedule = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Private Cruises</h2>
      
      <div className="grid gap-8">
        <div>
          <h3 className="text-lg font-medium mb-3">South Coast Cruise</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead>Days</TableHead>
                  <TableHead>Departure From</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Tuesday, Saturday, Sunday</TableCell>
                  <TableCell>Calheta</TableCell>
                  <TableCell>13:00 - 15:30</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-medium mb-3">North Coast Cruise</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead>Days</TableHead>
                  <TableHead>Departure From</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Wednesday, Thursday, Friday</TableCell>
                  <TableCell>Caniçal</TableCell>
                  <TableCell>13:00 - 15:30</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Link to="/private-cruise" className="flex items-center">
            Explore Private Cruises <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
