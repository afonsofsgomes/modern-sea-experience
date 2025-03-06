
import React, { useState } from "react";
import { Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

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
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchQuery.trim()) {
      return;
    }
    
    setIsSearching(true);
    try {
      const response = await supabase.functions.invoke('search', {
        body: { query: searchQuery }
      });
      
      if (response.error) {
        throw new Error(response.error.message);
      }
      
      setSearchResults(response.data.results.blogPosts);
      
      if (response.data.results.blogPosts.length === 0) {
        toast({
          title: "No results found",
          description: "Try different keywords or browse our categories.",
        });
      }
    } catch (error: any) {
      console.error('Search error:', error);
      toast({
        title: "Search failed",
        description: "There was an error processing your search.",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  return (
    <div className="md:hidden flex items-center space-x-2">
      {isSearchOpen ? (
        <div className="relative">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className={`bg-transparent border-b ${scrolled ? 'border-foreground text-foreground placeholder-foreground/70' : 'border-white text-white placeholder-white/70'} pr-8 pl-2 py-1 focus:outline-none w-full`}
              autoFocus
            />
            <button 
              type="button"
              onClick={closeSearch}
              className="absolute right-0 p-1" 
              aria-label="Close search"
            >
              <X className={`h-4 w-4 ${scrolled ? 'text-foreground' : 'text-white'}`} />
            </button>
          </form>
          
          {/* Search results dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-md shadow-lg z-50 overflow-hidden max-h-96 overflow-y-auto">
              <div className="p-2">
                <h3 className="text-sm font-medium px-3 py-2 text-gray-700">Search Results</h3>
                <div className="space-y-1">
                  {searchResults.map((result) => (
                    <Link 
                      key={result.id} 
                      to={`/blog/${result.slug}`}
                      onClick={closeSearch}
                      className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <div className="text-sm font-medium">{result.title}</div>
                      <div className="text-xs text-muted-foreground">{result.category}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          <button
            aria-label="Search"
            onClick={() => setIsSearchOpen(true)}
            className={`p-2 rounded-full ${scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'} transition-colors`}
          >
            <Search className={`h-5 w-5 ${scrolled ? 'text-foreground' : 'text-white'}`} />
          </button>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative rounded-full p-2">
                  <User className={`h-5 w-5 ${scrolled ? 'text-foreground' : 'text-white'}`} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/blog/dashboard">Blog Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/auth">
              <Button variant="secondary" size="sm" className="px-3 py-1 text-xs">
                Sign In
              </Button>
            </Link>
          )}
          
          <Link to="/booking">
            <Button variant="secondary" size="sm" className="px-3 py-1 text-xs">
              Book
            </Button>
          </Link>
          
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-full ${scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'} transition-colors`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </>
      )}
    </div>
  );
};
