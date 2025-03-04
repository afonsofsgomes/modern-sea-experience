
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | SeaYou Maritime Services</title>
        <meta name="description" content="Learn about how we use cookies on our website." />
      </Helmet>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
              
              <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-3">What Are Cookies</h2>
                  <p className="text-gray-700">
                    Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies enhance your browsing experience by allowing the website to remember your preferences and actions.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">How We Use Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    We use cookies for a variety of purposes, including:
                  </p>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="essential">
                      <AccordionTrigger className="text-lg font-medium">Essential Cookies</AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies.</p>
                        <p className="mt-2"><strong>Examples:</strong> Session cookies, authentication cookies</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="performance">
                      <AccordionTrigger className="text-lg font-medium">Performance Cookies</AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the way our website works.</p>
                        <p className="mt-2"><strong>Examples:</strong> Google Analytics, hotjar, clickstream data</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="functional">
                      <AccordionTrigger className="text-lg font-medium">Functional Cookies</AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
                        <p className="mt-2"><strong>Examples:</strong> Language preferences, location information</p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="targeting">
                      <AccordionTrigger className="text-lg font-medium">Targeting Cookies</AccordionTrigger>
                      <AccordionContent className="text-gray-700">
                        <p>These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other websites.</p>
                        <p className="mt-2"><strong>Examples:</strong> Social media sharing buttons, advertising cookies</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Third-Party Cookies</h2>
                  <p className="text-gray-700">
                    In addition to our own cookies, we may also use various third-party cookies to report usage statistics and deliver advertisements. These third-party cookies may include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1 mt-3">
                    <li>Google Analytics (for website traffic analysis)</li>
                    <li>Social media platforms (for sharing and interaction)</li>
                    <li>Payment processors (for secure transactions)</li>
                    <li>Advertising networks (for personalized content)</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Managing Your Cookie Preferences</h2>
                  <p className="text-gray-700 mb-3">
                    Most web browsers allow you to manage your cookie preferences. You can:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Delete cookies from your device</li>
                    <li>Block cookies by activating the setting on your browser that allows you to refuse all or some cookies</li>
                    <li>Set your browser to notify you when you receive a cookie</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our website, and some services may not function properly.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Browser Settings</h2>
                  <p className="text-gray-700 mb-3">
                    Here are links to instructions on how to manage cookies in common web browsers:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Changes to Our Cookie Policy</h2>
                  <p className="text-gray-700">
                    We may update our Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date. Please check back regularly to stay informed about our use of cookies.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
                  <p className="text-gray-700">
                    If you have any questions about our Cookie Policy, please contact us at:
                  </p>
                  <p className="text-gray-700 mt-2">
                    Email: privacy@seayou.pt<br />
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

export default Cookies;
