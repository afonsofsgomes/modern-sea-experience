
import React from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavbarMobileActionsProps {
  isOpen: boolean;
  toggleMenu: () => void;
  scrolled?: boolean;
}

export const NavbarMobileActions: React.FC<NavbarMobileActionsProps> = ({ 
  isOpen, 
  toggleMenu,
  scrolled = false
}) => {
  return (
    <div className="md:hidden flex items-center space-x-2">
      <Link to="/booking">
        <Button variant="secondary" size="sm" className="px-5 py-2 text-sm font-medium">
          Book
        </Button>
      </Link>
      <button
        onClick={toggleMenu}
        className={`p-2 rounded-full ${scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'} transition-colors`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-white'}`} />
        ) : (
          <Menu className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-white'}`} />
        )}
      </button>
    </div>
  );
};
