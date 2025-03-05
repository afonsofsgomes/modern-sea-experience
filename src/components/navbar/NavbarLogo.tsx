
import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface NavbarLogoProps {
  scrolled?: boolean;
}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({ scrolled = false }) => {
  const navigate = useNavigate();
  
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="flex items-center">
      <Link
        to="/"
        className="hover:opacity-80 transition-opacity"
        onClick={handleLogoClick}
      >
        <img 
          src={scrolled ? "https://extranet.seayou.pt/logos/logoblack.png" : "https://extranet.seayou.pt/logos/logowhite.png"} 
          alt="SeaYou Logo" 
          className={`w-auto transition-all duration-300 ${scrolled ? "h-14" : "h-10"}`}
        />
      </Link>
    </div>
  );
};
