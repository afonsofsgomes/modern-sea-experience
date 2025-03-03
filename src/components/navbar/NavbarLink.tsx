
import React from "react";

interface NavbarLinkProps {
  label: string;
  sectionId: string;
  onClick: (sectionId: string) => void;
  isMobile?: boolean;
  scrolled?: boolean;
  isActive?: boolean;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ 
  label, 
  sectionId, 
  onClick, 
  isMobile = false,
  scrolled = false,
  isActive = false
}) => {
  return (
    <button
      onClick={() => onClick(sectionId)}
      className={isMobile 
        ? `text-lg font-medium py-3 border-b border-gray-100 w-full text-left block ${isActive ? 'text-primary font-semibold' : ''}` 
        : `text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary ${
            isActive 
              ? 'text-primary font-semibold after:scale-x-100' 
              : `after:scale-x-0 after:origin-center after:transition-transform hover:after:scale-x-100 ${
                  scrolled ? 'text-foreground' : 'text-white'
                }`
          }`
      }
    >
      {label}
    </button>
  );
};
