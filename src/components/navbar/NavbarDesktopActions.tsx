
import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const NavbarDesktopActions: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your search logic here
    console.log("Searching for:", searchQuery);
    
    // For demo purposes only - you would implement actual search here
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <div className="hidden md:flex items-center space-x-4">
      {isSearchOpen ? (
        <form onSubmit={handleSearch} className="relative flex items-center">
          <input
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="bg-transparent border-b border-white text-white placeholder-white/70 pr-8 pl-2 py-1 focus:outline-none"
            autoFocus
          />
          <button 
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="absolute right-0 p-1" 
            aria-label="Close search"
          >
            <X className="h-4 w-4 text-white" />
          </button>
        </form>
      ) : (
        <button
          aria-label="Search"
          onClick={() => setIsSearchOpen(true)}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <Search className="h-5 w-5 text-white" />
        </button>
      )}
      <Link to="/booking">
        <Button variant="primary" size="sm">
          Book Now
        </Button>
      </Link>
    </div>
  );
};
