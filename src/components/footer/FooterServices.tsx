
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

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
        <li className="flex items-center">
          <span className="text-muted-foreground cursor-not-allowed">Desertas Islands</span>
          <Badge 
            variant="outline" 
            className="ml-2 text-xs py-0 px-1.5 h-5 bg-amber-100 text-amber-800 border-amber-200"
          >
            Soon
          </Badge>
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
