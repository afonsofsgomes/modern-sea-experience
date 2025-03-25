
import React from "react";
import { Link } from "react-router-dom";

export const FooterCopyright: React.FC = () => {
  return (
    <div className="border-t border-gray-200 mt-16 pt-8 pb-0 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} SeaYou. All rights reserved.
      </p>
      <div className="flex space-x-6 mt-4 md:mt-0 mb-0">
        <Link
          to="/privacy-policy"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          to="/terms"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Terms of Service
        </Link>
      </div>
    </div>
  );
};
