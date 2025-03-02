
import React from "react";
import { Link } from "react-router-dom";

export const NavbarLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link
        to="/"
        className="text-2xl font-display font-medium tracking-tight hover:opacity-80 transition-opacity"
      >
        SeaYou
      </Link>
    </div>
  );
};
