
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Schedule = () => {
  return (
    <>
      <Helmet>
        <title>Sailing Schedule | SeaYou Maritime Services</title>
        <meta name="description" content="View our complete sailing schedule for all routes and services." />
      </Helmet>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Sailing Schedule</h1>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="seabus" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="seabus">SeaBus</TabsTrigger>
                  <TabsTrigger value="porto-santo">Porto Santo</TabsTrigger>
                  <TabsTrigger value="desertas">Desertas</TabsTrigger>
                </TabsList>
                
                <TabsContent value="seabus" className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-6">SeaBus Routes</h2>
                  
                  <div className="grid gap-8">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Funchal to Caniçal</h3>
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
                              <td className="border px-4 py-2">Monday - Friday</td>
                              <td className="border px-4 py-2">07:00, 09:30, 12:00, 14:30, 17:00, 19:30</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2">Saturday</td>
                              <td className="border px-4 py-2">08:00, 11:00, 14:00, 17:00</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2">Sunday</td>
                              <td className="border px-4 py-2">09:00, 13:00, 17:00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Caniçal to Funchal</h3>
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
                              <td className="border px-4 py-2">Monday - Friday</td>
                              <td className="border px-4 py-2">08:15, 10:45, 13:15, 15:45, 18:15, 20:45</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2">Saturday</td>
                              <td className="border px-4 py-2">09:30, 12:30, 15:30, 18:30</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2">Sunday</td>
                              <td className="border px-4 py-2">11:00, 15:00, 19:00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="porto-santo" className="bg-white rounded-lg shadow-md p-6">
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
                </TabsContent>
                
                <TabsContent value="desertas" className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-semibold mb-6">Desertas Islands Tour</h2>
                  
                  <div className="grid gap-8">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Departure Schedule</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border px-4 py-2 text-left">Tour Type</th>
                              <th className="border px-4 py-2 text-left">Days</th>
                              <th className="border px-4 py-2 text-left">Departure Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border px-4 py-2">Day Tour (8 hours)</td>
                              <td className="border px-4 py-2">Tuesday, Thursday</td>
                              <td className="border px-4 py-2">09:00</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2">Half-Day Tour (5 hours)</td>
                              <td className="border px-4 py-2">Monday, Wednesday, Friday</td>
                              <td className="border px-4 py-2">10:00</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2">Weekend Special (6 hours)</td>
                              <td className="border px-4 py-2">Saturday, Sunday</td>
                              <td className="border px-4 py-2">09:30</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="mt-4 text-sm text-gray-600">
                        Note: All tours depart from Funchal Marina. Please arrive 30 minutes before departure time.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="bg-blue-50 rounded-lg p-6 mt-8">
                <h2 className="text-xl font-semibold mb-3">Important Information</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Schedule subject to change based on weather conditions and operational requirements.</li>
                  <li>• Please arrive at least 30 minutes prior to scheduled departure time.</li>
                  <li>• For the latest updates on schedule changes or cancellations, please contact our customer service.</li>
                  <li>• Special holiday schedules will be announced on our website and at the terminal.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Schedule;
