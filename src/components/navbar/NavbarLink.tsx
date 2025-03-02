
import React from "react";

interface NavbarLinkProps {
  label: string;
  sectionId: string;
  onClick: (sectionId: string) => void;
  isMobile?: boolean;
  scrolled?: boolean;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ 
  label, 
  sectionId, 
  onClick, 
  isMobile = false,
  scrolled = false
}) => {
  return (
    <button
      onClick={() => onClick(sectionId)}
      className={isMobile 
        ? "text-lg font-medium py-2 border-b border-gray-100" 
        : `text-sm font-medium hover-border-effect transition-colors ${scrolled ? 'text-foreground' : 'text-white'}`
      }
    >
      {label}
    </button>
  );
};
