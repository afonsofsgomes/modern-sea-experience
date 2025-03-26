
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { LoadingSpinner } from "@/components/LoadingSpinner";

// Sample product data
const products = [
  {
    id: 1,
    name: "Blue Waves Swimsuit",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1570830791465-57a11a8c04e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    tag: "New",
  },
  {
    id: 2,
    name: "Sunset Bikini Set",
    price: 75.99,
    image:
      "https://images.unsplash.com/photo-1525736164806-4c9c95f02202?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    tag: "Bestseller",
  },
  {
    id: 3,
    name: "Ocean Breeze One-Piece",
    price: 95.99,
    image:
      "https://images.unsplash.com/photo-1590156352256-39e4c6ac8e15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    tag: "",
  },
  {
    id: 4,
    name: "Coastal Waves Shorts",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1620387996745-115ded8e969a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    tag: "Sale",
  },
  {
    id: 5,
    name: "Coral Reef Bikini",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1580205315085-1f35bb35d9e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    tag: "",
  },
  {
    id: 6,
    name: "Sandy Beach Cover-up",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1509144887727-7f61cf23a987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    tag: "Bestseller",
  },
];

// Preload all product images at once
const preloadProductImages = () => {
  products.forEach(product => {
    const img = new Image();
    img.src = product.image;
  });
};

// Execute preloading immediately
preloadProductImages();

const ProductCard = ({ product, index }: { product: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="image-container aspect-[3/4] bg-gray-100 rounded-md mb-4 overflow-hidden group-hover:shadow-md transition-shadow duration-300">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner size="sm" color="blue" />
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button
            size="sm"
            className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
        {product.tag && (
          <span className="absolute top-3 left-3 py-1 px-3 text-xs font-medium bg-primary text-white rounded-full">
            {product.tag}
          </span>
        )}
      </div>
      <h3 className="font-medium text-base mb-1">{product.name}</h3>
      <p className="text-muted-foreground">${product.price}</p>
    </motion.div>
  );
};

export const ProductGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use shorter loading time for better UX
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <section className="py-24 bg-[#253D7F] flex items-center justify-center min-h-[500px]">
        <div className="flex flex-col items-center">
          <img 
            src="https://extranet.seayou.pt/logos/logowhite.png" 
            alt="SeaYou Madeira Logo" 
            className="max-w-[180px] mb-5"
          />
          <LoadingSpinner size="lg" color="white" />
          <div className="text-white text-opacity-90 mt-4">
            Loading SeaYou experience...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      id="bestsellers"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block py-1 px-3 text-xs font-medium bg-primary/10 rounded-full mb-4">
            Featured Products
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">
            Our Bestsellers
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular swimwear items, crafted with premium
            materials for comfort and style. Perfect for your beach vacation or
            pool day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg">View All Products</Button>
        </div>
      </div>
    </section>
  );
};
