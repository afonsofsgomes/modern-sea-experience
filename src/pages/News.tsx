
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Latest Updates
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
              News & Announcements
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay informed about our latest services, schedule changes, and special offers.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {featuredNews.map((news, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
                  >
                    <div className="rounded-lg overflow-hidden shadow-md aspect-video">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {news.category}
                        </span>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {news.date}
                        </div>
                      </div>
                      <h2 className="text-2xl font-display font-bold mb-3 text-gray-900">
                        {news.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                      <Button variant="link" className="group p-0">
                        Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 my-12"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentNews.map((news, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {news.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {news.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-gray-900">{news.title}</h3>
                    <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                    <Button variant="link" className="group p-0">
                      Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <Button size="lg">Load More News</Button>
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 text-gray-900">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="flex justify-between items-center text-muted-foreground hover:text-gray-900 transition-colors">
                        {category.name}
                        <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 text-gray-900">Subscribe to Updates</h3>
                <p className="text-muted-foreground mb-4">Get the latest news and special offers delivered directly to your inbox.</p>
                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                  <Button className="w-full">Subscribe</Button>
                </form>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 text-gray-900">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <p className="font-medium text-gray-900">{event.title}</p>
                      <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const featuredNews = [
  {
    title: "New Porto Santo Route Launching Next Month",
    excerpt: "We're excited to announce our new direct route to Porto Santo island, featuring daily departures and our most comfortable vessel yet. Experience the golden beaches with our special introductory rates.",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "May 15, 2023",
    category: "New Services"
  },
  {
    title: "Summer Schedule Extended for Popular Routes",
    excerpt: "Due to high demand, we've extended our summer schedule on all major routes. Enjoy more frequent departures and later evening services until the end of September.",
    image: "https://images.unsplash.com/photo-1542318574-5e783ef99b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "June 2, 2023",
    category: "Schedule Updates"
  }
];

const recentNews = [
  {
    title: "New Luxury Vessel Joins Our Fleet",
    excerpt: "Meet the Azure Explorer, our latest addition offering premium private cruise experiences around Madeira.",
    date: "April 28, 2023",
    category: "Fleet Updates"
  },
  {
    title: "Whale Watching Season Begins",
    excerpt: "Join our special tours to witness the majestic marine life around Madeira's waters this season.",
    date: "April 12, 2023",
    category: "Special Tours"
  },
  {
    title: "Environmental Initiative Launch",
    excerpt: "SeaYou partners with local conservation groups to protect Madeira's marine ecosystems.",
    date: "March 22, 2023",
    category: "Community"
  },
  {
    title: "Mobile App Now Available",
    excerpt: "Book tickets, check schedules, and get updates on the go with our new mobile application.",
    date: "March 5, 2023",
    category: "Technology"
  }
];

const categories = [
  { name: "Service Updates", count: 12 },
  { name: "Special Offers", count: 8 },
  { name: "Fleet News", count: 5 },
  { name: "Community", count: 7 },
  { name: "Events", count: 4 },
  { name: "Company News", count: 10 }
];

const upcomingEvents = [
  {
    title: "Summer Launch Party",
    date: "June 15, 2023 | 6:00 PM",
    location: "Funchal Marina"
  },
  {
    title: "Maritime Festival Participation",
    date: "July 8-10, 2023",
    location: "Machico Bay"
  },
  {
    title: "Customer Appreciation Day",
    date: "August 20, 2023",
    location: "All Routes"
  }
];

export default News;
