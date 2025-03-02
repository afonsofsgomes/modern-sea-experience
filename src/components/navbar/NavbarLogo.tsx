
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
      >
        <img 
          src={scrolled ? "https://extranet.seayou.pt/logos/logocolor.png" : "https://extranet.seayou.pt/logos/logowhite.png"} 
          alt="SeaYou Logo" 
          className={`w-auto transition-all duration-300 ${scrolled ? "h-14" : "h-10"}`}
        />
      </Link>
    </div>
  );
};
