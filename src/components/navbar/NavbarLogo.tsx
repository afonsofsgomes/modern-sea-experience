
import React from "react";
import { Link } from "react-router-dom";
import { OptimizedImage } from "@/components/OptimizedImage";

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
        <OptimizedImage 
          src={scrolled ? "https://extranet.seayou.pt/logos/logoblack.png" : "https://extranet.seayou.pt/logos/logowhite.png"} 
          alt="SeaYou Logo" 
          className={`w-auto transition-all duration-300 ${scrolled ? "h-14" : "h-10"}`}
          width={160}
          height={scrolled ? 56 : 40}
          loading="eager"
          priority={true}
        />
      </Link>
    </div>
  );
};
