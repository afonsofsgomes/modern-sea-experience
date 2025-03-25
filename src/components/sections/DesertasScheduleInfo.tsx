
import { Calendar, Clock, MapPin, Info } from "lucide-react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

export const DesertasScheduleInfo = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-4">
              Tour Information & Schedule
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about your Desertas Islands expedition
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
            <h3 className="text-xl font-medium flex items-center mb-4 text-blue-900">
              <Calendar className="mr-2 h-5 w-5 text-blue-700" />
              Weekly Schedule
            </h3>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-blue-50">
                    <TableHead className="font-medium">Days</TableHead>
                    <TableHead className="font-medium">Departure</TableHead>
                    <TableHead className="font-medium">Return</TableHead>
                    <TableHead className="font-medium">Duration</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Tuesdays</TableCell>
                    <TableCell>12:30</TableCell>
                    <TableCell>16:00</TableCell>
                    <TableCell>3.5 hours</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Saturdays</TableCell>
                    <TableCell>12:30</TableCell>
                    <TableCell>16:00</TableCell>
                    <TableCell>3.5 hours</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Sundays</TableCell>
                    <TableCell>12:30</TableCell>
                    <TableCell>16:00</TableCell>
                    <TableCell>3.5 hours</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <p className="mt-4 text-sm text-gray-600 italic">
              * Schedule is subject to change due to weather conditions or conservation requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium flex items-center mb-4 text-blue-900">
                  <MapPin className="mr-2 h-5 w-5 text-blue-700" />
                  Meeting Point
                </h3>
                <p className="mb-4 text-gray-700">
                  All tours depart from <strong>Caniçal Harbor</strong> on the eastern tip of Madeira.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    <span>Please arrive 30 minutes before departure for check-in</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    <span>Free parking is available at the harbor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    <span>GPS Coordinates: 32.7401° N, 16.7315° W</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium flex items-center mb-4 text-blue-900">
                  <Info className="mr-2 h-5 w-5 text-blue-700" />
                  Important Information
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    <span>Maximum capacity: 18 passengers per tour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    <span>The tour operates seasonally from May to October</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    <span>Tours may be cancelled due to adverse weather conditions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    <span>Bring sunscreen, hat, light jacket, and camera</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-700 mr-2">•</span>
                    <span>Not recommended for children under 8 years old</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
