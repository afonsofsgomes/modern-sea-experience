
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
        <picture>
          <img 
            src={scrolled ? "https://extranet.seayou.pt/logos/logoblack.png" : "https://extranet.seayou.pt/logos/logowhite.png"} 
            alt="SeaYou Logo" 
            className={`w-auto transition-all duration-300 ${scrolled ? "h-20" : "h-16"}`}
            width="150"
            height={scrolled ? "80" : "64"}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </Link>
    </div>
  );
};
