
import { BokunWidget } from "@/components/BokunWidget";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CalendarClock, Calendar, CalendarDays, Package, Gift, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SeaBusBooking = () => {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-blue-900">
          Book Your SeaBus Experience
        </h2>
        
        <Tabs defaultValue="single" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="single">Single Tickets</TabsTrigger>
              <TabsTrigger value="pass" className="relative">
                Passes
                <Badge className="absolute -top-2 -right-2 bg-blue-600 text-xs">New</Badge>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="single" className="mt-0">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <BokunWidget 
                isProductPage={true}
                productId="978723"
                bookingChannelUUID="51f490fc-f867-4e8b-a0d8-cf7730297dde"
                className="min-h-[600px]" 
              />
            </div>
          </TabsContent>
          
          <TabsContent value="pass" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "3-Day Pass",
                  description: "Unlimited SeaBus access for 3 consecutive days",
                  icon: <CalendarClock className="h-8 w-8 text-blue-600" />,
                  delay: 0.1
                },
                {
                  title: "Weekly Pass",
                  description: "Unlimited SeaBus access for 7 consecutive days",
                  icon: <Calendar className="h-8 w-8 text-blue-600" />,
                  delay: 0.2
                },
                {
                  title: "Monthly Pass",
                  description: "Unlimited SeaBus access for 30 consecutive days",
                  icon: <CalendarDays className="h-8 w-8 text-blue-600" />,
                  delay: 0.3
                }
              ].map((pass, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: pass.delay }}
                  className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:border-blue-200 transition-all"
                >
                  <div className="bg-blue-50 p-4 rounded-full inline-block mb-4">
                    {pass.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">{pass.title}</h3>
                  <p className="text-gray-600 mb-4">{pass.description}</p>
                  <div className="bg-gray-100 rounded-md p-4 text-center">
                    <span className="text-sm font-medium text-gray-500">Coming Soon</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto mb-10">
              <h3 className="text-lg font-semibold mb-4 text-blue-900">Pass Options</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-blue-100 flex items-center">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <Package className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Physical Pass</h4>
                    <p className="text-sm text-gray-600">Delivered to your door</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-blue-100 flex items-center">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <Gift className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Gift Option</h4>
                    <p className="text-sm text-gray-600">Perfect for friends & family</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-blue-100 flex items-center">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <Star className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">Premium Pass</h4>
                    <p className="text-sm text-gray-600">VIP privileges included</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6 bg-white p-4 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-900 mb-2">Physical Delivery</h4>
                <p className="text-sm text-gray-600 mb-3">Have your pass delivered to your hotel or accommodation in Madeira for an additional fee of €5.00. Delivery is typically completed within 24 hours of purchase.</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-blue-900">Available delivery areas:</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Funchal</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Caniço</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Calheta</span>
                </div>
              </div>
              
              <div className="mb-6 bg-white p-4 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-900 mb-2">Gift a Pass</h4>
                <p className="text-sm text-gray-600 mb-3">Purchase a pass as a gift for friends or family. We'll provide a beautifully designed digital gift card that you can send to the recipient, including a QR code for pass activation.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-900 mb-2">Premium Pass Benefits</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-3">
                  <li>Priority boarding on all routes</li>
                  <li>Access to exclusive premium lounge at Funchal terminal</li>
                  <li>Complimentary refreshments on board</li>
                  <li>Free cancelation and route changes</li>
                  <li>Dedicated customer support line</li>
                </ul>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Premium surcharge:</span> Additional €15.00 for 3-Day, €25.00 for Weekly, and €60.00 for Monthly passes
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold mb-2 text-blue-900">Pass Benefits</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Skip the queue with priority boarding</li>
                <li>Save money on multiple journeys</li>
                <li>Flexibility to change your travel plans</li>
                <li>Access to all SeaBus routes around Madeira</li>
                <li>Digital pass for convenient access</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
