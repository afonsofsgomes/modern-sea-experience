
import React from "react";
import { Link } from "react-router-dom";

export const FooterServices: React.FC = () => {
  return (
    <div>
      <h3 className="font-medium text-lg mb-4">Services</h3>
      <ul className="space-y-3">
        <li>
          <Link
            to="/seabus#routes"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Seabus Routes
          </Link>
        </li>
        <li>
          <Link
            to="/private-cruise"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Private Cruises
          </Link>
        </li>
        <li>
          <Link
            to="/porto-santo"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Porto Santo Tours
          </Link>
        </li>
        <li>
          <Link
            to="/group-bookings"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Group Bookings
          </Link>
        </li>
      </ul>
    </div>
  );
};
