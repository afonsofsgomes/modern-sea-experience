
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";

// Import components
import { BlogHero } from "./components/BlogHero";
import { BlogContent } from "./components/BlogContent";
import { DestinationsShowcase } from "./components/DestinationsShowcase";
import { CallToAction } from "./components/CallToAction";

// Import data
import { blogPosts, tags, destinations } from "./data/blogData";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>SeaYou Blog - Discover Madeira's Hidden Gems</title>
        <meta name="description" content="Explore Madeira's best attractions, hidden gems, and travel tips. Plan your perfect Madeira adventure with insider advice from SeaYou's local experts." />
        <meta name="keywords" content="Madeira travel, Madeira blog, Madeira attractions, SeaYou Madeira, Madeira hidden gems, Madeira travel tips" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Banner */}
      <BlogHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* Main Content */}
      <Tabs defaultValue="all">
        <BlogContent 
          filteredPosts={filteredPosts} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
          tags={tags} 
        />
      </Tabs>
      
      {/* Destinations Showcase */}
      <DestinationsShowcase destinations={destinations} />
      
      {/* Call to Action */}
      <CallToAction />
      
      <Footer />
    </div>
  );
};

export default Blog;
