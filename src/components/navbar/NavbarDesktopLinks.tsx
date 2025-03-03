
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarLink } from "./NavbarLink";

interface NavbarDesktopLinksProps {
  onScrollToSection: (sectionId: string) => void;
  scrolled?: boolean;
}

export const NavbarDesktopLinks: React.FC<NavbarDesktopLinksProps> = ({ onScrollToSection, scrolled = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
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

  // Check if current hash matches one of our section IDs
  const currentHash = location.hash.replace('#', '');
  const isActiveSectionLink = (sectionId: string) => {
    if (isHomePage) {
      if (sectionId === 'home' && !currentHash) return true;
      return currentHash === sectionId;
    }
    return false;
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {/* Section links that scroll within home page or redirect to home page with hash */}
      {sectionLinks.map((link) => (
        <NavbarLink
          key={link.sectionId}
          label={link.label}
          sectionId={link.sectionId}
          onClick={onScrollToSection}
          scrolled={scrolled}
          isActive={isActiveSectionLink(link.sectionId)}
        />
      ))}
      
      {/* Divider */}
      <div className={`h-5 w-px ${scrolled ? 'bg-gray-300' : 'bg-white/30'}`}></div>
      
      {/* Page links that navigate to different pages */}
      {pageLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`text-sm font-medium hover-border-effect transition-colors ${
            location.pathname === link.path 
              ? 'text-secondary font-semibold' 
              : scrolled ? 'text-foreground' : 'text-white'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
