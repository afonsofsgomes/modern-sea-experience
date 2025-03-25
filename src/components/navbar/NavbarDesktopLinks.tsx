
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarLink } from "./NavbarLink";
import { Badge } from "@/components/ui/badge";

interface NavbarDesktopLinksProps {
  onScrollToSection: (sectionId: string) => void;
  scrolled?: boolean;
  activeSection?: string;
}

export const NavbarDesktopLinks: React.FC<NavbarDesktopLinksProps> = ({ 
  onScrollToSection, 
  scrolled = false,
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
    { label: "Private Cruise", path: "/private-cruise" },
    { label: "Porto Santo", path: "/porto-santo" },
    { 
      label: "Desertas Islands", 
      path: "#", // Changed from "/desertas" to "#" to prevent navigation
      soon: true 
    }
  ];

  // Check if current section is active
  const isActiveSectionLink = (sectionId: string) => {
    if (isHomePage) {
      return activeSection === sectionId;
    }
    return false;
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {/* Section links that scroll within home page or redirect to home page with hash */}
      {sectionLinks.map((link) => {
        return (
          <NavbarLink
            key={link.sectionId}
            label={link.label}
            sectionId={link.sectionId}
            onClick={onScrollToSection}
            scrolled={scrolled}
            isActive={isActiveSectionLink(link.sectionId)}
          />
        );
      })}
      
      {/* Divider */}
      <div className={`h-5 w-px ${scrolled ? 'bg-gray-300' : 'bg-white/30'}`}></div>
      
      {/* Page links that navigate to different pages */}
      {pageLinks.map((link) => (
        <div key={link.path} className="relative flex items-center">
          <Link
            to={link.path}
            className={`text-sm font-medium hover-border-effect transition-colors ${
              location.pathname === link.path 
                ? 'text-secondary font-semibold' 
                : scrolled ? 'text-foreground' : 'text-white'
            }`}
            onClick={link.soon ? (e) => e.preventDefault() : undefined}
          >
            {link.label}
          </Link>
          {link.soon && (
            <Badge 
              variant="outline" 
              className="ml-2 text-xs py-0 px-1.5 h-5 bg-amber-100 text-amber-800 border-amber-200"
            >
              Soon
            </Badge>
          )}
        </div>
      ))}
    </nav>
  );
};
