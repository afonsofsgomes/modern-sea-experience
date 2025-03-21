
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Ship } from "lucide-react";

export const FooterContact: React.FC = () => {
  return (
    <div>
      <h3 className="font-medium text-lg mb-4">Contact Us</h3>
      <ul className="space-y-3">
        <li>
          <a
            href="mailto:support@seayou.pt"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
          >
            <Mail className="h-4 w-4 mr-2" /> support@seayou.pt
          </a>
        </li>
        <li>
          <a
            href="tel:+351291000000"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
          >
            <Phone className="h-4 w-4 mr-2" /> +351 291 000 000
          </a>
        </li>
        <li>
          <Link
            to="/schedule"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
          >
            <Ship className="h-4 w-4 mr-2" /> Schedule Information
          </Link>
        </li>
      </ul>
    </div>
  );
};
