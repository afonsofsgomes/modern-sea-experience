
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

export const PortoSantoSchedule = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Porto Santo 1-Day Experience</h2>
      
      <div className="grid gap-8">
        <div>
          <h3 className="text-lg font-medium mb-3">Caniçal to Porto Santo</h3>
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
                  <TableCell>Wednesday, Thursday, Friday</TableCell>
                  <TableCell>09:00</TableCell>
                  <TableCell>17:00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
