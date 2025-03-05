import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight, Map, Tag, Search, User, Clock, ChevronRight, Mail, EyeOff, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";

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
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-gray-900">Latest Articles</h2>
              <TabsList className="bg-gray-100 rounded-full p-1">
                <TabsTrigger 
                  value="all" 
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                  onClick={() => setActiveCategory("all")}
                >
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="attractions" 
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                  onClick={() => setActiveCategory("attractions")}
                >
                  Attractions
                </TabsTrigger>
                <TabsTrigger 
                  value="activities" 
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                  onClick={() => setActiveCategory("activities")}
                >
                  Activities
                </TabsTrigger>
                <TabsTrigger 
                  value="food" 
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                  onClick={() => setActiveCategory("food")}
                >
                  Food & Drinks
                </TabsTrigger>
              </TabsList>
              
              <div className="hidden md:flex items-center gap-2">
                <Button variant="outline" size="sm" className="rounded-full flex items-center gap-1">
                  <SlidersHorizontal className="h-4 w-4" /> Filters
                </Button>
              </div>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  {/* Featured Article */}
                  {filteredPosts.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="mb-12"
                    >
                      <div className="group relative overflow-hidden rounded-xl shadow-lg">
                        <div className="aspect-video overflow-hidden rounded-t-xl">
                          <img 
                            src={filteredPosts[0].image} 
                            alt={filteredPosts[0].title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6 bg-white rounded-b-xl">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                              <Tag className="mr-1 h-3 w-3" />
                              {filteredPosts[0].category}
                            </span>
                            <span className="flex items-center text-muted-foreground text-sm">
                              <Calendar className="w-3 h-3 mr-1" />
                              {filteredPosts[0].date}
                            </span>
                            <span className="flex items-center text-muted-foreground text-sm">
                              <Clock className="w-3 h-3 mr-1" />
                              {filteredPosts[0].readTime} min read
                            </span>
                          </div>
                          <h2 className="text-2xl font-display font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                            {filteredPosts[0].title}
                          </h2>
                          <p className="text-muted-foreground mb-4">{filteredPosts[0].excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                                <img 
                                  src={filteredPosts[0].authorImage} 
                                  alt={filteredPosts[0].author}
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                              <span className="text-sm text-gray-700">{filteredPosts[0].author}</span>
                            </div>
                            <Button variant="link" className="group flex items-center gap-1 p-0">
                              Read Article 
                              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  {/* Article Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPosts.slice(1).map((post, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group bg-white rounded-xl overflow-hidden shadow border border-gray-100 transition-shadow hover:shadow-md"
                      >
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                              {post.category}
                            </span>
                            <span className="flex items-center text-muted-foreground text-xs">
                              <Clock className="w-3 h-3 mr-1" />
                              {post.readTime} min
                            </span>
                          </div>
                          <h3 className="text-xl font-medium mb-2 text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                                <img 
                                  src={post.authorImage} 
                                  alt={post.author}
                                  className="w-full h-full object-cover" 
                                />
                              </div>
                              <span className="text-xs text-gray-700">{post.author}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="group p-0 h-auto">
                              Read more 
                              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-12 flex justify-center">
                    <Button size="lg" className="rounded-full px-8">
                      Load More Articles
                    </Button>
                  </div>
                </div>
                
                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-8">
                  {/* Newsletter Signup */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary/10 to-primary/30 p-6 rounded-xl"
                  >
                    <h3 className="text-xl font-display font-semibold mb-3 text-gray-900">
                      Get Madeira Travel Tips
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Subscribe to our newsletter for exclusive travel tips, special offers, and insider information about Madeira.
                    </p>
                    <form className="space-y-3">
                      <Input 
                        type="email" 
                        placeholder="Your email address" 
                        className="bg-white/80 backdrop-blur-sm"
                      />
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <EyeOff className="h-3 w-3" />
                        <span>We respect your privacy. No spam, ever.</span>
                      </div>
                      <Button className="w-full">Subscribe</Button>
                    </form>
                  </motion.div>
                  
                  {/* Popular Tags */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 p-6 rounded-xl"
                  >
                    <h3 className="text-xl font-medium mb-4 text-gray-900">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="inline-block py-1 px-3 text-xs font-medium bg-white text-gray-700 rounded-full border border-gray-200 cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Travel Planning Card */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden bg-white border border-primary/20 rounded-xl shadow-lg"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                    
                    <div className="p-6 relative z-10">
                      <h3 className="text-xl font-display font-semibold mb-3 text-gray-900">
                        Plan Your Madeira Adventure
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Need help planning your perfect Madeira trip? Our travel experts are here to assist you.
                      </p>
                      <ul className="space-y-3 mb-4">
                        <li className="flex items-center text-sm">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                            <span className="text-primary text-xs">✓</span>
                          </div>
                          Personalized itineraries
                        </li>
                        <li className="flex items-center text-sm">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                            <span className="text-primary text-xs">✓</span>
                          </div>
                          Hidden gem recommendations
                        </li>
                        <li className="flex items-center text-sm">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                            <span className="text-primary text-xs">✓</span>
                          </div>
                          Booking assistance
                        </li>
                      </ul>
                      <Button className="w-full">
                        Get Free Consultation
                      </Button>
                    </div>
                  </motion.div>
                  
                  {/* Featured Destination */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="rounded-xl overflow-hidden shadow-lg"
                  >
                    <div className="relative aspect-[4/3]">
                      <img 
                        src="https://images.unsplash.com/photo-1591971737391-cd19dae9f337?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="Porto Santo Island" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-display font-semibold mb-1">Porto Santo Island</h3>
                        <p className="text-sm text-white/80 mb-3">Golden beaches & tranquil waters</p>
                        <Button size="sm" variant="secondary" className="w-full">
                          Explore Tours
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="attractions" className="mt-0">
              {/* Content for Attractions tab */}
              <div className="min-h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">Showing attractions content</p>
              </div>
            </TabsContent>
            
            <TabsContent value="activities" className="mt-0">
              {/* Content for Activities tab */}
              <div className="min-h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">Showing activities content</p>
              </div>
            </TabsContent>
            
            <TabsContent value="food" className="mt-0">
              {/* Content for Food & Drinks tab */}
              <div className="min-h-[300px] flex items-center justify-center">
                <p className="text-muted-foreground">Showing food & drinks content</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Destinations Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Top Picks
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
              Discover Madeira's Gems
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our curated selection of must-visit destinations around Madeira Island.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Button variant="secondary" size="sm" className="w-full">
                      Explore Tours
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-display font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{destination.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1527824404775-dce343118ebc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                Ready to Explore Madeira?
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Book your unforgettable journey with SeaYou and discover all that Madeira has to offer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="rounded-full px-8">
                  Book Now
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 border-white text-white hover:bg-white/20">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const blogPosts = [
  {
    title: "10 Hidden Gems in Madeira That Most Tourists Miss",
    excerpt: "Discover the secret spots around Madeira that will take your breath away – from secluded beaches to mountain viewpoints few travelers ever find.",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    date: "May 15, 2023",
    category: "attractions",
    author: "Sofia Costa",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    readTime: 7
  },
  {
    title: "The Ultimate Guide to Levada Walks in Madeira",
    excerpt: "Everything you need to know about Madeira's famous levada walks – from beginner-friendly paths to challenging hikes with stunning views.",
    image: "https://images.unsplash.com/photo-1578894425776-0a1d1773b65d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    date: "June 2, 2023",
    category: "activities",
    author: "Miguel Silva",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    readTime: 9
  },
  {
    title: "Madeira's Traditional Foods You Must Try",
    excerpt: "From Espetada and Bolo do Caco to Poncha – discover the authentic flavors of Madeira that will delight your taste buds.",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80",
    date: "April 28, 2023",
    category: "food",
    author: "Ana Rodrigues",
    authorImage: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    readTime: 6
  },
  {
    title: "Best Spots for Whale and Dolphin Watching in Madeira",
    excerpt: "Where and when to see these magnificent marine creatures around Madeira's waters – a complete guide for wildlife enthusiasts.",
    image: "https://images.unsplash.com/photo-1516408388733-2f8363582c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    date: "March 22, 2023",
    category: "activities",
    author: "Pedro Mendes",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    readTime: 5
  },
  {
    title: "Exploring Funchal: A Walking Tour of Madeira's Capital",
    excerpt: "Discover the historic streets, colorful markets, and beautiful gardens of Funchal with our detailed walking tour itinerary.",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    date: "May 5, 2023",
    category: "attractions",
    author: "Sofia Costa",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    readTime: 8
  },
  {
    title: "The Perfect 7-Day Madeira Itinerary for First-Time Visitors",
    excerpt: "Plan your week in Madeira with this comprehensive day-by-day guide covering all the must-see attractions and experiences.",
    image: "https://images.unsplash.com/photo-1599922541651-68e24d7401c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
    date: "June 15, 2023",
    category: "activities",
    author: "Miguel Silva",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    readTime: 10
  }
];

const tags = [
  "Levada Walks", "Beaches", "Hiking", "Local Food", "Wine Tasting", "Whale Watching", 
  "Funchal", "Porto Santo", "Photography Spots", "Cabo Girão", "Botanical Gardens", 
  "Family Activities", "Viewpoints", "Mountaineering", "Sailing"
];

const destinations = [
  {
    name: "Funchal Old Town",
    description: "Explore colorful streets and historic architecture",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
  },
  {
    name: "Porto Santo Beach",
    description: "9km of golden sand and therapeutic properties",
    image: "https://images.unsplash.com/photo-1591971737391-cd19dae9f337?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Pico do Arieiro",
    description: "Breathtaking mountain views above the clouds",
    image: "https://images.unsplash.com/photo-1563042201-11db9151d96c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Laurisilva Forest",
    description: "Ancient UNESCO-protected laurel forest",
    image: "https://images.unsplash.com/photo-1579805617286-f54c1a6d8925?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default Blog;
