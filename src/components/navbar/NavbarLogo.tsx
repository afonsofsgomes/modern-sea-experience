
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavbarLogoProps {
  scrolled?: boolean;
}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({ scrolled = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const whiteLogoUrl = "https://extranet.seayou.pt/logos/logowhite.png";
  const blackLogoUrl = "https://extranet.seayou.pt/logos/logoblack.png";
  
  return (
    <div className="flex items-center">
      <Link
        to="/"
        className="hover:opacity-80 transition-opacity"
      >
        <picture>
          <img 
            src={scrolled ? blackLogoUrl : whiteLogoUrl} 
            alt="SeaYou Logo" 
            className={`w-auto transition-all duration-300 ${scrolled ? "h-20" : "h-16"} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            width="150"
            height={scrolled ? "80" : "64"}
            fetchPriority="high"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
          />
        </picture>
      </Link>
    </div>
  );
};
