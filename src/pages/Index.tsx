
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[100]"
        style={{ scaleX, transformOrigin: "0%" }}
      />
      <Navbar />
      <Hero />
      <ProductGrid />

      {/* Collection Showcase */}
      <section id="collections" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
              Summer 2023
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Explore Our Collections
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Discover our latest collections, designed for every summer occasion. From beach days to pool parties, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-lg overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1529326902217-36d2c991866b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" 
                alt="Women's Collection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-display mb-2">Women's Collection</h3>
                <p className="text-white/80 mb-4">Elegant and comfortable designs for every woman</p>
                <a href="#" className="inline-block bg-white text-foreground font-medium py-2 px-4 rounded-md hover:bg-white/90 transition-colors max-w-max">
                  Shop Now
                </a>
              </div>
            </div>
            
            <div className="group relative rounded-lg overflow-hidden h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                alt="Men's Collection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-display mb-2">Men's Collection</h3>
                <p className="text-white/80 mb-4">Stylish and durable swimwear for the modern man</p>
                <a href="#" className="inline-block bg-white text-foreground font-medium py-2 px-4 rounded-md hover:bg-white/90 transition-colors max-w-max">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
                Crafted with care, designed for the ocean
              </h2>
              <p className="text-base text-muted-foreground mb-6">
                At Sea You, we believe in creating swimwear that not only looks good but feels good too. Our journey began on the beautiful shores of Portugal, where we were inspired by the stunning coastline and vibrant beach culture.
              </p>
              <p className="text-base text-muted-foreground mb-8">
                Every piece in our collection is crafted using sustainable materials and ethical manufacturing processes. We are committed to reducing our environmental footprint while providing you with high-quality swimwear that lasts season after season.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-50 rounded-md p-6 flex-1 min-w-[160px]">
                  <h3 className="text-3xl font-medium mb-2">100%</h3>
                  <p className="text-muted-foreground">Sustainable Materials</p>
                </div>
                <div className="bg-gray-50 rounded-md p-6 flex-1 min-w-[160px]">
                  <h3 className="text-3xl font-medium mb-2">10k+</h3>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
                <div className="bg-gray-50 rounded-md p-6 flex-1 min-w-[160px]">
                  <h3 className="text-3xl font-medium mb-2">15+</h3>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-md overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549064233-819fa069ce5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="About Sea You" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-2/3 aspect-video glass-card p-6 rounded-md">
                <h3 className="font-display text-lg mb-2">Handcrafted in Portugal</h3>
                <p className="text-sm text-muted-foreground">
                  Each piece is carefully made by skilled artisans with attention to every detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
              Join our newsletter
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new arrivals, and beach style inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
                required
              />
              <button 
                type="submit" 
                className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/60 text-sm mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
