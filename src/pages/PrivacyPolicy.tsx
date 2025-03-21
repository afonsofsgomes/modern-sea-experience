
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
                  <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
                  <p className="text-gray-700">
                    SeaYou ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our services, website, or mobile applications.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
                  <p className="text-gray-700 mb-3">
                    We collect information that you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Create an account or profile</li>
                    <li>Make a booking or purchase</li>
                    <li>Contact our customer service</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Complete surveys or provide feedback</li>
                  </ul>
                  
                  <p className="text-gray-700 mt-3 mb-3">
                    This information may include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Name and contact details (email, phone, address)</li>
                    <li>Payment information</li>
                    <li>Travel preferences and requirements</li>
                    <li>Passport or ID information (for certain services)</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
                  <p className="text-gray-700 mb-3">
                    We use your information for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Process your bookings and payments</li>
                    <li>Provide customer support</li>
                    <li>Send you service updates and notifications</li>
                    <li>Improve our services and develop new features</li>
                    <li>Personalize your experience</li>
                    <li>Comply with legal obligations</li>
                    <li>Detect and prevent fraud</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Sharing Your Information</h2>
                  <p className="text-gray-700 mb-3">
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Service providers who perform services on our behalf</li>
                    <li>Payment processors to complete transactions</li>
                    <li>Business partners when necessary to provide our services</li>
                    <li>Government authorities when required by law</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
                  <p className="text-gray-700 mb-3">
                    Depending on your location, you may have certain rights regarding your personal data, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Accessing your personal information</li>
                    <li>Correcting inaccurate information</li>
                    <li>Requesting deletion of your information</li>
                    <li>Objecting to certain uses of your information</li>
                    <li>Withdrawing consent</li>
                    <li>Data portability</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, loss, or alteration. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
                  <p className="text-gray-700">
                    We use cookies and similar technologies to improve your browsing experience, analyze site traffic, and personalize content. You can manage your cookie preferences through your browser settings. For more information, please see our <a href="/cookies" className="text-blue-600 hover:underline">Cookie Policy</a>.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
                  <p className="text-gray-700">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <p className="text-gray-700 mt-2">
                    Email: support@seayou.pt<br />
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

export default PrivacyPolicy;
