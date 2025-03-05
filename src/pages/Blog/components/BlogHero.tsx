
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const BlogHero = ({ searchQuery, setSearchQuery }: BlogHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pb-20 bg-gradient-to-b from-primary/10 to-transparent">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              SeaYou Voyager
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900 leading-tight">
              Madeira <span className="text-secondary">Explorer</span> Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover Madeira's hidden gems, unforgettable experiences, and insider tips to make your journey extraordinary.
            </p>
          </motion.div>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="flex items-center relative bg-white shadow-lg rounded-full overflow-hidden border border-gray-200">
              <Search className="absolute left-4 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for travel tips, attractions, or activities..."
                className="pl-12 pr-4 py-6 flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="absolute right-1 rounded-full" size="sm">
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
