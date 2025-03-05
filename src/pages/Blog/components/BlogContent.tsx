
import { Button } from "@/components/ui/button";
import { BlogPost } from "./BlogPost";
import { BlogSidebar } from "./BlogSidebar";
import { CategoryTabs } from "./CategoryTabs";
import { TabsContent } from "@/components/ui/tabs";

interface BlogContentProps {
  filteredPosts: Array<{
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
    author: string;
    authorImage: string;
    readTime: number;
  }>;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  tags: string[];
}

export const BlogContent = ({ 
  filteredPosts, 
  activeCategory, 
  setActiveCategory, 
  tags 
}: BlogContentProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Featured Article */}
              {filteredPosts.length > 0 && (
                <BlogPost post={filteredPosts[0]} featured={true} />
              )}
              
              {/* Article Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.slice(1).map((post, index) => (
                  <BlogPost key={index} post={post} index={index} />
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <Button size="lg" className="rounded-full px-8">
                  Load More Articles
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <BlogSidebar tags={tags} />
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
      </div>
    </section>
  );
};
