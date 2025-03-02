
import React from "react";
import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { NavbarLink } from "./NavbarLink";

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onScrollToSection: (sectionId: string) => void;
  onClose: () => void;
}

export const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({ 
  isOpen, 
  onScrollToSection,
  onClose
}) => {
  const navLinks = [
    { label: "Routes", sectionId: "routes" },
    { label: "Private Cruises", sectionId: "cruises" },
    { label: "Porto Santo Tours", sectionId: "tours" },
    { label: "About", sectionId: "about" },
    { label: "Contact", sectionId: "contact" }
  ];

  if (!isOpen) return null;

  const handleLinkClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-white pt-24 px-6 pb-6 md:hidden animate-fade-in">
      <div className="flex flex-col space-y-6">
        {navLinks.map((link) => (
          <NavbarLink
            key={link.sectionId}
            label={link.label}
            sectionId={link.sectionId}
            onClick={handleLinkClick}
            isMobile={true}
          />
        ))}
        <div className="flex items-center space-x-4 py-4">
          <button
            aria-label="Search"
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="User account"
            className="p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <User className="h-5 w-5" />
          </button>
        </div>
        <Link
          to="/booking"
          className="text-lg font-medium py-2 border-b border-gray-100"
          onClick={onClose}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};
