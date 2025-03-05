
import React from "react";
import { Link } from "react-router-dom";
import { FooterSocialLinks } from "./FooterSocialLinks";

export const FooterBranding: React.FC = () => {
  return (
    <div className="col-span-1 md:col-span-1">
      <Link
        to="/"
        className="text-xl font-display font-medium tracking-tight inline-block mb-6"
      >
        SeaYou
      </Link>
      <p className="text-muted-foreground mb-6 max-w-xs">
        Maritime tourism services in Madeira. Seabus connections, private cruises, and tours to Porto Santo.
      </p>
      <FooterSocialLinks />
    </div>
  );
};
