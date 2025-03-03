
import React from "react";
import { Search, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  // Section links within the home page
  const sectionLinks = [
    { label: "Home", sectionId: "home" },
    { label: "Routes", sectionId: "routes" },
    { label: "About", sectionId: "about" },
    { label: "Contact", sectionId: "contact" }
  ];
  
  // Page links to separate pages
  const pageLinks = [
    { label: "SeaBus", path: "/seabus" },
    { label: "Private Cruises", path: "/private-cruise" },
    { label: "Porto Santo", path: "/porto-santo" }
  ];

  if (!isOpen) return null;

  const handleLinkClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-white pt-24 px-6 pb-6 md:hidden animate-fade-in">
      <div className="flex flex-col space-y-6">
        {/* Home link - always visible */}
        {!isHome && (
          <Link
            to="/"
            className="text-lg font-medium py-2 border-b border-gray-100 w-full text-left"
            onClick={onClose}
          >
            Home
          </Link>
        )}
        
        {/* Section heading - only on homepage */}
        {isHome && (
          <>
            <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">Main Navigation</h3>
            
            {/* Section links that scroll within home page */}
            {sectionLinks.map((link) => (
              <NavbarLink
                key={link.sectionId}
                label={link.label}
                sectionId={link.sectionId}
                onClick={handleLinkClick}
                isMobile={true}
              />
            ))}
          </>
        )}
        
        {/* Section heading for pages */}
        <h3 className="text-sm font-medium text-gray-500 uppercase pt-4 mb-2">Our Services</h3>
        
        {/* Page links that navigate to different pages */}
        {pageLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-lg font-medium py-2 border-b border-gray-100 ${location.pathname === link.path ? 'text-primary' : ''}`}
            onClick={onClose}
          >
            {link.label}
          </Link>
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
