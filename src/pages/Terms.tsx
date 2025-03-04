
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | SeaYou Maritime Services</title>
        <meta name="description" content="Read our terms of service for using SeaYou's maritime transportation services." />
      </Helmet>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
              
              <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
                  <p className="text-gray-700">
                    These Terms of Service ("Terms") govern your use of the services offered by SeaYou ("we", "our", or "us"), including our website, mobile applications, and maritime transportation services. By accessing or using our services, you agree to be bound by these Terms.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Booking and Payment</h2>
                  <p className="text-gray-700 mb-3">
                    1. <strong>Booking Confirmation:</strong> Your booking is confirmed once you receive a confirmation email or ticket. You must present this confirmation when boarding.
                  </p>
                  <p className="text-gray-700 mb-3">
                    2. <strong>Payment:</strong> Full payment is required at the time of booking unless otherwise specified. We accept major credit cards and other payment methods specified on our booking platform.
                  </p>
                  <p className="text-gray-700 mb-3">
                    3. <strong>Prices and Taxes:</strong> All prices are in Euros and include applicable taxes unless otherwise stated. Additional fees may apply for special services or requests.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Cancellations and Refunds</h2>
                  <p className="text-gray-700 mb-3">
                    1. <strong>Cancellation by You:</strong>
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
                    <li>Cancellations made 72 hours or more before departure: 90% refund</li>
                    <li>Cancellations made 24-72 hours before departure: 50% refund</li>
                    <li>Cancellations made less than 24 hours before departure: No refund</li>
                  </ul>
                  
                  <p className="text-gray-700 mb-3">
                    2. <strong>Cancellation by Us:</strong> If we cancel a service due to weather conditions, technical issues, or other unforeseen circumstances, you will be offered:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
                    <li>Rebooking for another date</li>
                    <li>A full refund</li>
                    <li>A credit for future use, valid for 12 months</li>
                  </ul>
                  
                  <p className="text-gray-700">
                    3. <strong>Schedule Changes:</strong> We reserve the right to change departure times or routes due to weather conditions or operational requirements. We will make reasonable efforts to notify you of any changes.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Travel Requirements</h2>
                  <p className="text-gray-700 mb-3">
                    1. <strong>Boarding:</strong> Passengers must arrive at least 30 minutes before scheduled departure time. We reserve the right to deny boarding to late arrivals without refund.
                  </p>
                  <p className="text-gray-700 mb-3">
                    2. <strong>Identification:</strong> Valid government-issued photo identification is required for all adult passengers. For international routes, a valid passport may be required.
                  </p>
                  <p className="text-gray-700 mb-3">
                    3. <strong>Health and Mobility:</strong> Passengers are responsible for ensuring they are physically able to travel. Please inform us in advance of any special needs or requirements.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Passenger Conduct</h2>
                  <p className="text-gray-700 mb-3">
                    Passengers must:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Comply with crew instructions at all times</li>
                    <li>Refrain from disruptive, dangerous, or illegal behavior</li>
                    <li>Not bring dangerous or prohibited items aboard</li>
                    <li>Respect other passengers and crew members</li>
                    <li>Not smoke except in designated areas (if applicable)</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    We reserve the right to deny service or remove passengers who violate these rules without refund.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Liability</h2>
                  <p className="text-gray-700 mb-3">
                    1. <strong>Personal Belongings:</strong> We are not responsible for loss, damage, or theft of personal belongings. Passengers are responsible for their own property.
                  </p>
                  <p className="text-gray-700 mb-3">
                    2. <strong>Personal Injury:</strong> While we take all reasonable measures to ensure passenger safety, travel is at your own risk. Our liability is limited to the extent permitted by applicable law.
                  </p>
                  <p className="text-gray-700">
                    3. <strong>Force Majeure:</strong> We are not liable for delays, cancellations, or other issues caused by events beyond our reasonable control, including but not limited to weather conditions, natural disasters, government actions, or civil unrest.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Modifications to Terms</h2>
                  <p className="text-gray-700">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes indicates your acceptance of the updated Terms.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
                  <p className="text-gray-700">
                    These Terms are governed by the laws of Portugal. Any disputes arising from these Terms will be subject to the exclusive jurisdiction of the courts of Funchal, Madeira.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
                  <p className="text-gray-700">
                    If you have any questions about these Terms, please contact us at:
                  </p>
                  <p className="text-gray-700 mt-2">
                    Email: legal@seayou.pt<br />
                    Address: Funchal Marina, Madeira, Portugal
                  </p>
                </div>
                
                <div className="pt-3 text-sm text-gray-500">
                  Last Updated: May 1, 2023
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
