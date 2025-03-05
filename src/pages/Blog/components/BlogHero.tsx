
import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const BlogHero = ({ searchQuery, setSearchQuery }: BlogHeroProps) => {
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative h-[60vh] min-h-[500px] w-full bg-cover bg-center flex items-center">
      {/* Background Image with stronger dark gradient overlay for better white text contrast */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1473&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 text-white">
            Explore Madeira's Hidden Gems
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl">
            Discover the best attractions, activities, and local insights for your perfect Madeira adventure
          </p>
          
          <form onSubmit={handleSearchSubmit} className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
