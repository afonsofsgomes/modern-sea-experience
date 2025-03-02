
import React from "react";
import { NavbarLink } from "./NavbarLink";

interface NavbarDesktopLinksProps {
  onScrollToSection: (sectionId: string) => void;
  scrolled?: boolean;
}

export const NavbarDesktopLinks: React.FC<NavbarDesktopLinksProps> = ({ onScrollToSection, scrolled = false }) => {
  const navLinks = [
    { label: "Routes", sectionId: "routes" },
    { label: "Private Cruises", sectionId: "cruises" },
    { label: "Porto Santo Tours", sectionId: "tours" },
    { label: "About", sectionId: "about" },
    { label: "Contact", sectionId: "contact" }
  ];

  return (
    <nav className="hidden md:flex items-center space-x-10">
      {navLinks.map((link) => (
        <NavbarLink
          key={link.sectionId}
          label={link.label}
          sectionId={link.sectionId}
          onClick={onScrollToSection}
        />
      ))}
    </nav>
  );
};
