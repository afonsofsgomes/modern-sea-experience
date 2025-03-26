
import React from "react";
import { Link } from "react-router-dom";

interface NavbarLogoProps {
  scrolled?: boolean;
}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({ scrolled = false }) => {
  // Preload both logos immediately to avoid flashing during scroll
  const whiteLogoUrl = "https://extranet.seayou.pt/logos/logowhite.png";
  const blackLogoUrl = "https://extranet.seayou.pt/logos/logoblack.png";
  
  return (
    <div className="flex items-center">
      <Link
        to="/"
        className="hover:opacity-80 transition-opacity"
      >
        <picture>
          {/* Use source tags to provide webp if supported */}
          <source 
            srcSet={scrolled ? blackLogoUrl.replace('.png', '.webp') : whiteLogoUrl.replace('.png', '.webp')} 
            type="image/webp" 
          />
          <img 
            src={scrolled ? blackLogoUrl : whiteLogoUrl} 
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
