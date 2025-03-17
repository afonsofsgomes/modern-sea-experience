
import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

export const FooterSocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.instagram.com/seayou.madeira"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href="https://www.facebook.com/seayou.madeira"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href="https://twitter.com/seayou_madeira"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Twitter className="h-5 w-5" />
      </a>
    </div>
  );
};
