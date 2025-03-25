
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | SeaYou Maritime Services</title>
        <meta name="description" content="Read our privacy policy to understand how we handle your personal information." />
      </Helmet>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              
              <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
                <div>
                  <p className="text-gray-700">
                    This Privacy Policy explains how Joy4Rent, Lda (hereinafter referred to as the "Company", "we", "our", or "us") collects, uses, discloses, and protects your personal data in accordance with Portuguese law and the General Data Protection Regulation (GDPR). By using our services, including booking maritime experiences, you agree to the terms of this Privacy Policy.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">1. Personal Data Collection</h2>
                  <p className="text-gray-700 mb-3">
                    1.1 Types of Data Collected:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
                    <li>We collect the following personal data: names, email addresses, phone numbers, and payment details (held by our third-party payment processor, Stripe).</li>
                    <li>We also collect IP addresses automatically when you interact with our website, online booking services, or marketing tools.</li>
                    <li>Additionally, we may collect health information if you voluntarily disclose it to us for safety purposes.</li>
                  </ul>
                  
                  <p className="text-gray-700 mb-3">
                    1.2 Methods of Data Collection:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
                    <li>Data is collected through online bookings, in-store bookings, information shared by resellers, and website cookies.</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">2. Purpose of Data Collection</h2>
                  <p className="text-gray-700 mb-3">
                    2.1 We collect personal data for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
                    <li>Booking Processing: To manage and confirm your bookings.</li>
                    <li>Marketing: To send promotional materials, newsletters, and personalized offers.</li>
                    <li>Customer Service: To provide support and respond to your inquiries.</li>
                    <li>Safety and Legal Obligations: To comply with legal and maritime authority requirements for safety purposes.</li>
                  </ul>
                  
                  <p className="text-gray-700 mb-3">
                    2.2 We use analytical tools like Facebook Pixel to personalize services and target advertising.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">3. Third-Party Sharing</h2>
                  <p className="text-gray-700 mb-3">
                    3.1 Sharing of Data:
                  </p>
                  <p className="text-gray-700 mb-3">
                    We may share personal data with third parties in the following situations:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
                    <li>Service Providers: Partners who provide additional services requested by the customer.</li>
                    <li>Insurance Providers: To ensure that all customers have appropriate insurance coverage in the event of an incident.</li>
                    <li>Payment Processors: Such as Stripe, to securely handle your payments.</li>
                    <li>Marketing Platforms: To deliver newsletters and keep customers updated (only if the customer opts in).</li>
                  </ul>
                  
                  <p className="text-gray-700 mb-3">
                    3.2 We only share the minimum necessary data and ensure that third parties comply with applicable privacy laws.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">4. Legal Basis for Processing</h2>
                  <p className="text-gray-700 mb-3">
                    4.1 Customer Consent:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
                    <li>Upon visiting our website, you will be asked to consent to the use of cookies.</li>
                    <li>By purchasing tickets or services, the customer consents to the terms of this Privacy Policy and our Terms and Conditions.</li>
                  </ul>
                  
                  <p className="text-gray-700 mb-3">
                    4.2 Contractual and Legal Obligations:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
                    <li>We process data as necessary to provide services and comply with legal obligations, including retaining data for maritime authorities.</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">5. Data Retention</h2>
                  <p className="text-gray-700 mb-3">
                    5.1 We retain personal data for the duration of the customer relationship.
                  </p>
                  <p className="text-gray-700 mb-3">
                    5.2 After the relationship ends, data may be retained during the period allowed by regulations.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">6. Customer Rights</h2>
                  <p className="text-gray-700 mb-3">
                    6.1 Rights of Access, Rectification, and Deletion:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
                    <li>Customers have the right to access, correct, or request the deletion of their personal data. Deletion requests will only be fulfilled when the customer relationship has ended or is about to end.</li>
                  </ul>
                  
                  <p className="text-gray-700 mb-3">
                    6.2 How to Exercise These Rights:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-3">
                    <li>Requests for data access, rectification, or deletion can be submitted via email to: support@seayou.pt.</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">7. Security Measures</h2>
                  <p className="text-gray-700 mb-3">
                    7.1 We implement a range of security measures, including encryption, firewalls, secure storage, and access control, to protect personal data.
                  </p>
                  <p className="text-gray-700 mb-3">
                    7.2 These security measures are managed by third-party partners to ensure compliance with industry standards.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">8. International Data Transfers</h2>
                  <p className="text-gray-700 mb-3">
                    8.1 We may transfer personal data outside the European Union when using third-party tools.
                  </p>
                  <p className="text-gray-700 mb-3">
                    8.2 The only data transferred includes names, email addresses, and phone numbers. We ensure that such transfers are conducted with high standards of data protection and choose our partners carefully.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">9. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-700 mb-3">
                    9.1 We use cookies and tracking technologies like Meta Pixel to collect data for analytics and user preferences.
                  </p>
                  <p className="text-gray-700 mb-3">
                    9.2 Third-party partners may also track activity on our website to improve services and understand customer needs. All collected data is encrypted.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">10. Children's Privacy</h2>
                  <p className="text-gray-700 mb-3">
                    10.1 We do not collect personal information directly from children.
                  </p>
                  <p className="text-gray-700 mb-3">
                    10.2 Bookings and services must be made by a legal adult, and all personal information is provided by the responsible adult.
                  </p>
                  <p className="text-gray-700 mb-3">
                    10.3 Children cannot book services without the presence and approval of a legal guardian.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">11. Camera Surveillance</h2>
                  <p className="text-gray-700 mb-3">
                    11.1 For the safety of our customers and crew, our vessels are equipped with security cameras that record all trips.
                  </p>
                  <p className="text-gray-700 mb-3">
                    11.2 Customers are informed of video surveillance through visible signs onboard. By booking, customers consent to being recorded during the trip.
                  </p>
                  <p className="text-gray-700 mb-3">
                    11.3 Video recordings may be used for insurance purposes or to protect the Company's legal interests. We retain the footage only for the time period allowed by Portuguese law and GDPR regulations.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">12. Changes to the Privacy Policy</h2>
                  <p className="text-gray-700 mb-3">
                    12.1 The Company reserves the right to update this Privacy Policy at any time without prior notification.
                  </p>
                  <p className="text-gray-700 mb-3">
                    12.2 Updates will be posted on our website, and the last updated date will be provided. Customers can access the Privacy Policy and Terms and Conditions at any time via our website.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">13. Contact Information</h2>
                  <p className="text-gray-700 mb-3">
                    13.1 If you have any questions regarding this Privacy Policy, please contact us at info@seayou.pt.
                  </p>
                  <p className="text-gray-700 mb-3">
                    13.2 All privacy-related inquiries will be handled directly by our administration team, ensuring a prompt and thorough response.
                  </p>
                </div>
                
                <div className="pt-3 text-sm text-gray-500">
                  Last Updated: May 10, 2023
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

export default PrivacyPolicy;
