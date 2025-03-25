
import { Clock, Ship, Users, Euro } from "lucide-react";
import { motion } from "framer-motion";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

export const PrivateCruiseInfo = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto">
          <h3 className="text-2xl font-medium mb-4 text-center text-[#253D7F]">Important Information</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-6">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <Clock className="h-10 w-10 text-[#E95543] mb-2" />
              <p className="font-medium">Duration</p>
              <p>2.5 hours</p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Users className="h-10 w-10 text-[#E95543] mb-2" />
              <p className="font-medium">Capacity</p>
              <p>Up to 18 passengers</p>
              <p className="text-sm text-gray-600">Minimum 4 passengers</p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Euro className="h-10 w-10 text-[#E95543] mb-2" />
              <p className="font-medium">Price</p>
              <p>60€ per person</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="mb-6 overflow-x-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-medium text-center mb-3">Schedule</p>
            <div className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[#253D7F]/5">
                    <TableHead className="text-[#253D7F] font-medium py-3 px-4 whitespace-nowrap">Route</TableHead>
                    <TableHead className="text-[#253D7F] font-medium py-3 px-4 whitespace-nowrap">Days</TableHead>
                    <TableHead className="text-[#253D7F] font-medium py-3 px-4 whitespace-nowrap">Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-gray-50 transition-colors">
                    <TableCell className="font-medium py-3 px-4 whitespace-nowrap">North Coast</TableCell>
                    <TableCell className="py-3 px-4 whitespace-nowrap">Tuesday, Saturday, Sunday</TableCell>
                    <TableCell className="py-3 px-4 whitespace-nowrap">13:00 - 15:30</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-gray-50 transition-colors">
                    <TableCell className="font-medium py-3 px-4 whitespace-nowrap">South Coast</TableCell>
                    <TableCell className="py-3 px-4 whitespace-nowrap">Wednesday, Thursday, Friday</TableCell>
                    <TableCell className="py-3 px-4 whitespace-nowrap">13:00 - 15:30</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </motion.div>
          
          <p className="text-center text-gray-600 px-2 sm:px-4">All private cruises from Calheta or Caniçal depart at 13:00.</p>
        </div>
      </div>
    </section>
  );
};
