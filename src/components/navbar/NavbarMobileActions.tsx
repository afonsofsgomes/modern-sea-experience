
import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavbarMobileActionsProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const NavbarMobileActions: React.FC<NavbarMobileActionsProps> = ({ 
  isOpen, 
  toggleMenu 
}) => {
  return (
    <div className="md:hidden flex items-center space-x-4">
      <Link to="/booking">
        <Button variant="primary" size="sm">
          Book
        </Button>
      </Link>
      <button
        onClick={toggleMenu}
        className="p-2 rounded-full hover:bg-secondary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};
