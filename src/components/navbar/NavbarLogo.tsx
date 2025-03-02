
import React from "react";
import { Link } from "react-router-dom";

export const NavbarLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link
        to="/"
        className="hover:opacity-80 transition-opacity"
      >
        <img 
          src="https://extranet.seayou.pt/logos/logowhite.png" 
          alt="SeaYou Logo" 
          className="h-10 w-auto"
        />
      </Link>
    </div>
  );
};
