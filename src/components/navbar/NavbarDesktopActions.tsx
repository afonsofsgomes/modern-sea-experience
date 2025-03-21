
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface NavbarDesktopActionsProps {
  scrolled?: boolean;
}

export const NavbarDesktopActions: React.FC<NavbarDesktopActionsProps> = ({ scrolled = false }) => {
  const location = useLocation();
  
  // Check if current page is a product page
  const isProductPage = [
    "/private-cruise", 
    "/seabus", 
    "/porto-santo", 
    "/desertas"
  ].includes(location.pathname);
  
  const handleBookClick = (e: React.MouseEvent) => {
    if (isProductPage) {
      e.preventDefault();
      const bookingSection = document.getElementById("booking");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link to={isProductPage ? "#booking" : "/booking"} onClick={handleBookClick}>
        <Button variant="secondary" size="md" className="text-base px-6 py-2.5">
          Book Now
        </Button>
      </Link>
    </div>
  );
};
