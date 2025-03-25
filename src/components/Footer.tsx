
import React from "react";
import { FooterBranding } from "./footer/FooterBranding";
import { FooterServices } from "./footer/FooterServices";
import { FooterCompany } from "./footer/FooterCompany";
import { FooterContact } from "./footer/FooterContact";
import { FooterCopyright } from "./footer/FooterCopyright";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <FooterBranding />
          <FooterServices />
          <FooterCompany />
          <FooterContact />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};
