
import React from "react";
import { Link } from "react-router-dom";

export const FooterCompany: React.FC = () => {
  return (
    <div>
      <h3 className="font-medium text-lg mb-4">Company</h3>
      <ul className="space-y-3">
        <li>
          <Link
            to="/#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/careers"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Careers
          </Link>
        </li>
      </ul>
    </div>
  );
};
