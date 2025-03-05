
import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

export const FooterSocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="#"
        aria-label="Instagram"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href="#"
        aria-label="Facebook"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href="#"
        aria-label="Twitter"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Twitter className="h-5 w-5" />
      </a>
    </div>
  );
};
