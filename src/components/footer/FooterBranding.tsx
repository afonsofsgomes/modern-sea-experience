
import React from "react";
import { Link } from "react-router-dom";
import { FooterSocialLinks } from "./FooterSocialLinks";

export const FooterBranding: React.FC = () => {
  return (
    <div className="col-span-1 md:col-span-1">
      <Link
        to="/"
        className="text-2xl font-display font-medium tracking-tight inline-block mb-6"
      >
        SeaYou
      </Link>
      <p className="text-base text-muted-foreground mb-6 max-w-xs">
        Seayou Madeira specializes in scenic boat tours, exclusive private cruises, and unforgettable maritime adventures. Explore Porto Santo on a one-day experience, discover the wild beauty of the Desertas Islands, or enjoy tailored adventures across Madeira's coastline.
      </p>
      <FooterSocialLinks />
    </div>
  );
};
