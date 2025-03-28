
import React from "react";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { TikTokIcon } from "../icons/TikTokIcon";
import { WhatsAppWidget } from "../WhatsAppWidget";

export const FooterSocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-4 items-center">
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
      <a
        href="https://www.tiktok.com/@seayou.pt"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <TikTokIcon className="h-5 w-5" />
      </a>
      <a
        href="https://www.youtube.com/@seayou.madeira"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <Youtube className="h-5 w-5" />
      </a>
      <WhatsAppWidget whatsappLink="https://api.whatsapp.com/message/POVZQIDMQYJGD1" />
    </div>
  );
};
