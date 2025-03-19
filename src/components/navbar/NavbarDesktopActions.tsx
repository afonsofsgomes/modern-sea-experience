
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavbarDesktopActionsProps {
  scrolled?: boolean;
}

export const NavbarDesktopActions: React.FC<NavbarDesktopActionsProps> = ({ scrolled = false }) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Link to="/booking">
        <Button variant="secondary" size="sm">
          Book Now
        </Button>
      </Link>
    </div>
  );
};
