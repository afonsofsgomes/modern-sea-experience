
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const DesertasFloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth"
      });
      toast({
        title: "Scrolled to booking section",
        description: "You can now book your Desertas Islands adventure",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col space-y-4">
      <Button
        size="lg"
        className="rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-6"
        onClick={scrollToBooking}
      >
        Book Now
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white w-10 h-10 p-0 flex items-center justify-center self-end shadow-md"
        onClick={scrollToTop}
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  );
};
