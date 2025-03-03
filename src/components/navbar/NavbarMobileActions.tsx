
import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface NavbarMobileActionsProps {
  isOpen: boolean;
  toggleMenu: () => void;
  scrolled?: boolean;
}

export const NavbarMobileActions: React.FC<NavbarMobileActionsProps> = ({ 
  isOpen, 
  toggleMenu,
  scrolled = false
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    
    // For demo purposes only - you would implement actual search here
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <div className="md:hidden flex items-center space-x-4">
      {isSearchOpen ? (
        <form onSubmit={handleSearch} className="relative flex items-center">
          <input
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className={`bg-transparent border-b ${scrolled ? 'border-foreground text-foreground placeholder-foreground/70' : 'border-white text-white placeholder-white/70'} pr-8 pl-2 py-1 focus:outline-none`}
            autoFocus
          />
          <button 
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="absolute right-0 p-1" 
            aria-label="Close search"
          >
            <X className={`h-4 w-4 ${scrolled ? 'text-foreground' : 'text-white'}`} />
          </button>
        </form>
      ) : (
        <button
          aria-label="Search"
          onClick={() => setIsSearchOpen(true)}
          className={`p-2 rounded-full ${scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'} transition-colors`}
        >
          <Search className={`h-5 w-5 ${scrolled ? 'text-foreground' : 'text-white'}`} />
        </button>
      )}
      <Link to="/booking">
        <Button variant="primary" size="sm">
          Book
        </Button>
      </Link>
      <button
        onClick={toggleMenu}
        className={`p-2 rounded-full ${scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'} transition-colors`}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-white'}`} />
        ) : (
          <Menu className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-white'}`} />
        )}
      </button>
    </div>
  );
};
