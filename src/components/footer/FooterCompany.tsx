
import React from "react";
import { Link } from "react-router-dom";

export const FooterCompany: React.FC = () => {
  return (
    <div>
      <h3 className="font-medium text-lg mb-4">Company</h3>
      <ul className="space-y-3">
        <li>
          <Link
            to="/port-terminal"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Port Terminal
          </Link>
        </li>
        <li>
          <Link
            to="/partners"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Partners
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
        <li>
          <Link
            to="/privacy-policy"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link
            to="/terms"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms & Conditions
          </Link>
        </li>
        <li>
          <Link
            to="/cookies"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Cookies
          </Link>
        </li>
      </ul>
    </div>
  );
};
