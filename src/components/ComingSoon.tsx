
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Timer } from "lucide-react";
import { PageHead } from "@/components/SEO";

export const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PageHead 
        title="Coming Soon - Desertas Islands Tours | SeaYou Madeira"
        description="We're preparing our exciting Desertas Islands tours. Check back soon for our wildlife and nature adventures to this pristine archipelago."
        keywords="Desertas Islands tours coming soon, Madeira boat tours, SeaYou new experiences"
      />
      
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-blue-900">
              Desertas Islands Tours Coming Soon
            </h1>
            
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <Timer className="w-12 h-12 text-blue-600" />
              </div>
              <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-spin-slow opacity-75"></div>
            </div>
            
            <p className="text-xl text-gray-700 mb-8">
              We're preparing an unforgettable experience to the pristine Desertas Islands. 
              Check back soon for our exclusive wildlife and nature adventures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg">
                <Link to="/">
                  Back to Homepage
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/porto-santo">
                  Explore Porto Santo Tours
                </Link>
              </Button>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg max-w-lg mx-auto">
              <h3 className="flex items-center justify-center text-lg font-medium text-blue-800 mb-3">
                <Calendar className="w-5 h-5 mr-2" />
                Want to be notified?
              </h3>
              <p className="text-blue-700 mb-4">
                Leave your email and we'll let you know when our Desertas Islands tours are available.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow rounded-md border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500"
                />
                <Button type="submit">
                  Notify Me
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComingSoon;
