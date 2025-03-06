
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/OptimizedImage";

export interface BlogPostProps {
  post: {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
    author: string;
    authorImage: string;
    readTime: number;
  };
  featured?: boolean;
  index?: number;
}

export const BlogPost = ({ post, featured = false, index = 0 }: BlogPostProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (featured ? 0 : index * 0.1) }}
      viewport={{ once: true }}
      className={`group ${
        featured 
          ? "bg-white rounded-xl overflow-hidden shadow-lg mb-12" 
          : "bg-white rounded-xl overflow-hidden shadow border border-gray-100 transition-shadow hover:shadow-md"
      }`}
    >
      <div className={`${featured ? "aspect-video" : "aspect-video"} overflow-hidden`}>
        <OptimizedImage 
          src={post.image} 
          alt={post.title} 
          width={featured ? 800 : 400}
          height={featured ? 450 : 225}
          className="w-full h-full"
          loading="lazy"
          sizes={featured ? "(max-width: 768px) 100vw, 800px" : "(max-width: 768px) 100vw, 400px"}
          priority={featured}
        />
      </div>
      <div className={`${featured ? "p-6" : "p-5"}`}>
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            <Tag className={`${featured ? "mr-1 h-3 w-3" : "w-3 h-3 mr-1"}`} />
            {post.category}
          </span>
          {featured && (
            <span className="flex items-center text-muted-foreground text-sm">
              <Calendar className="w-3 h-3 mr-1" />
              {post.date}
            </span>
          )}
          <span className="flex items-center text-muted-foreground text-xs">
            <Clock className="w-3 h-3 mr-1" />
            {post.readTime} {featured ? "min read" : "min"}
          </span>
        </div>
        <h3 className={`${
          featured 
            ? "text-2xl font-display font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors" 
            : "text-xl font-medium mb-2 text-gray-900 line-clamp-2 group-hover:text-primary transition-colors"
        }`}>
          {post.title}
        </h3>
        <p className={`${
          featured 
            ? "text-muted-foreground mb-4" 
            : "text-muted-foreground text-sm mb-3 line-clamp-2"
        }`}>
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`${featured ? "w-8 h-8" : "w-6 h-6"} rounded-full overflow-hidden mr-2`}>
              <OptimizedImage 
                src={post.authorImage} 
                alt={post.author}
                width={featured ? 32 : 24}
                height={featured ? 32 : 24}
                className="w-full h-full"
              />
            </div>
            <span className={`${featured ? "text-sm" : "text-xs"} text-gray-700`}>{post.author}</span>
          </div>
          <Button variant={featured ? "link" : "ghost"} size={featured ? "md" : "sm"} className={`${featured ? "group flex items-center gap-1 p-0" : "group p-0 h-auto"}`}>
            {featured ? "Read Article" : "Read more"}
            <ArrowRight className={`${featured ? "ml-1 h-4 w-4" : "ml-1 h-4 w-4"} group-hover:translate-x-1 transition-transform`} />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
