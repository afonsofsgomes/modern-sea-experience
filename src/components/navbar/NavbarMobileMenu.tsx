
import React from "react";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NavbarLink } from "./NavbarLink";

interface NavbarMobileMenuProps {
  isOpen: boolean;
  onScrollToSection: (sectionId: string) => void;
  onClose: () => void;
  activeSection?: string;
}

export const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({ 
  isOpen, 
  onScrollToSection,
  onClose,
  activeSection = 'home'
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  // Section links within the home page - updated to match homepage sections
  const sectionLinks = [
    { label: "Home", sectionId: "home" },
    { label: "Boat", sectionId: "routes" },
    { label: "Destinations", sectionId: "destinations" },
    { label: "About", sectionId: "about" },
    { label: "Contact", sectionId: "contact" }
  ];
  
  // Page links to separate pages
  const pageLinks = [
    { label: "SeaBus", path: "/seabus" },
    { label: "Private Cruises", path: "/private-cruise" },
    { label: "Porto Santo", path: "/porto-santo" },
    { label: "Desertas Islands", path: "/desertas" }
  ];

  if (!isOpen) return null;

  // Check if current section is active
  const isActiveSectionLink = (sectionId: string) => {
    if (isHomePage) {
      return activeSection === sectionId;
    }
    return false;
  };

  const handleLinkClick = (sectionId: string) => {
    onScrollToSection(sectionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden" style={{ height: '100vh', overflow: 'auto', top: 0, position: 'fixed' }}>
      <div className="flex flex-col h-full">
        <div className="flex-none px-4 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-500 uppercase">Main Navigation</h3>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {/* Section links that scroll within home page */}
          <div className="flex flex-col space-y-1 mb-6">
            {sectionLinks.map((link) => {
              return (
                <NavbarLink
                  key={link.sectionId}
                  label={link.label}
                  sectionId={link.sectionId}
                  onClick={handleLinkClick}
                  isMobile={true}
                  isActive={isActiveSectionLink(link.sectionId)}
                />
              );
            })}
          </div>
          
          {/* Section heading for pages */}
          <h3 className="text-sm font-medium text-gray-500 uppercase mb-4">Our Services</h3>
          
          {/* Page links that navigate to different pages */}
          <div className="flex flex-col space-y-1 mb-6">
            {pageLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium py-3 border-b border-gray-100 block ${
                  location.pathname === link.path ? 'text-primary font-semibold' : ''
                }`}
                onClick={onClose}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <Link
            to="/booking"
            className="text-lg font-medium py-2 border-b border-gray-100 block w-full text-center bg-secondary text-white rounded-md mt-4 p-3"
            onClick={onClose}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};
