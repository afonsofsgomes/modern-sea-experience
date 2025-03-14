
import { BokunWidget } from "@/components/BokunWidget";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CalendarClock, Calendar, CalendarDays, Package, Gift, Star, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Switch } from "@/components/ui/switch";

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
              <h3 className="text-lg font-semibold mb-6 text-blue-900">Choose Your Pass Format</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Virtual Pass Card */}
                <div className="bg-white p-6 rounded-lg border border-blue-100 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-50 p-3 rounded-full mr-3">
                      <Smartphone className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-blue-900">Virtual Pass</h4>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-6 flex-grow">
                    <li>Instant delivery to your email</li>
                    <li>Easy access via your smartphone</li>
                    <li>QR code for quick scanning</li>
                    <li>Eco-friendly option</li>
                    <li>Free cancelation within 24 hours</li>
                  </ul>
                  
                  <div className="bg-blue-50 rounded-md p-3 text-center text-blue-800 font-medium">
                    Standard Price
                  </div>
                </div>
                
                {/* Physical Pass Card */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border-2 border-blue-300 flex flex-col h-full shadow-md relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-600 rotate-45 z-0"></div>
                  <Badge className="absolute right-3 top-3 bg-blue-600 z-10">PREMIUM</Badge>
                  
                  <div className="flex items-center mb-4 relative z-10">
                    <div className="bg-blue-100 p-3 rounded-full mr-3">
                      <Package className="h-6 w-6 text-blue-700" />
                    </div>
                    <h4 className="text-lg font-semibold text-blue-900">Physical Pass</h4>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-6 flex-grow relative z-10">
                    <li>Premium plastic card with personalization</li>
                    <li>Perfect as a gift (special gift packaging available)</li>
                    <li>Delivery to your hotel/accommodation in Madeira</li>
                    <li>Priority boarding on all routes</li>
                    <li>Free cancelation and route changes</li>
                    <li>Dedicated customer support</li>
                    <li>Souvenir to take home</li>
                  </ul>
                  
                  <div className="bg-blue-100 rounded-md p-3 text-center text-blue-800 font-medium relative z-10">
                    +€5.00 (Delivery Fee)
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-5 rounded-lg border border-blue-100 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <Gift className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-medium text-blue-900">Gift Option</h4>
                  </div>
                  <Switch id="gift-option" />
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Select this option to purchase a pass as a gift. For virtual passes, we'll provide a beautifully designed digital gift card. For physical passes, we'll include elegant gift packaging with your personal message.
                </p>
                <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-700">
                  <strong>Note:</strong> Gift options are only available for pre-paid passes and cannot be used with pay-as-you-go options.
                </div>
              </div>
              
              <div className="mb-6 bg-white p-5 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-900 mb-2">Physical Pass Delivery</h4>
                <p className="text-sm text-gray-600 mb-3">Physical passes can be delivered to your hotel or accommodation in Madeira for an additional fee of €5.00. Delivery is typically completed within 24 hours of purchase.</p>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-blue-900">Available delivery areas:</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Funchal</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Caniço</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Calheta</span>
                </div>
                <p className="text-xs text-gray-500">For delivery to other areas of Madeira, additional fees may apply. Please contact customer service for details.</p>
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
