
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CategoryTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const CategoryTabs = ({ activeCategory, setActiveCategory }: CategoryTabsProps) => {
  return (
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
  );
};
