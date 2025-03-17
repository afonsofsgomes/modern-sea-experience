
import React from "react";
import { Link } from "react-router-dom";

interface NavbarLogoProps {
  scrolled?: boolean;
}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({ scrolled = false }) => {
  return (
    <div className="flex items-center">
      <Link
        to="/"
        className="hover:opacity-80 transition-opacity"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = '/';
        }}
      >
        <img 
          src="/logo.png" 
          alt="SeaYou Logo" 
          className={`w-auto transition-all duration-300 ${scrolled ? "h-20" : "h-16"}`}
        />
      </Link>
    </div>
  );
};
