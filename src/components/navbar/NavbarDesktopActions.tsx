
import React from "react";
import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const NavbarDesktopActions: React.FC = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <button
        aria-label="Search"
        className="p-2 rounded-full hover:bg-secondary transition-colors"
      >
        <Search className="h-5 w-5" />
      </button>
      <button
        aria-label="User account"
        className="p-2 rounded-full hover:bg-secondary transition-colors"
      >
        <User className="h-5 w-5" />
      </button>
      <Link to="/booking">
        <Button variant="primary" size="sm">
          Book Now
        </Button>
      </Link>
    </div>
  );
};
