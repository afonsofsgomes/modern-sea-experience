
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Save, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image_url: string;
  category: string;
  published: boolean;
  author_id?: string;
}

interface BlogSidebarProps {
  post: BlogPost;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSwitchChange: (checked: boolean) => void;
  handleSave: () => void;
  isSaving: boolean;
}

export const BlogSidebar = ({ 
  post, 
  handleInputChange, 
  handleSwitchChange,
  handleSave,
  isSaving
}: BlogSidebarProps) => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium mb-4">Publish</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="published" className="cursor-pointer">
              Published
            </Label>
            <Switch 
              id="published"
              checked={post.published}
              onCheckedChange={handleSwitchChange}
            />
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>Status: <span className={post.published ? "text-green-600 font-medium" : "text-amber-600 font-medium"}>
              {post.published ? "Published" : "Draft"}
            </span></p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="flex-1"
            >
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? 'Saving...' : 'Save'}
            </Button>
            
            {post.slug && post.id && (
              <Link to={`/blog/${post.slug}`} target="_blank">
                <Button variant="outline">
                  <Eye className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium mb-4">Details</h2>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Input 
              id="category"
              name="category"
              value={post.category}
              onChange={handleInputChange}
              placeholder="Category"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea 
              id="excerpt"
              name="excerpt"
              value={post.excerpt}
              onChange={handleInputChange}
              placeholder="Write a brief description of your post..."
              className="mt-1 h-24"
            />
            <p className="text-xs text-muted-foreground mt-1">
              A short summary of your post for previews.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium mb-4">Help</h2>
        
        <div className="text-sm text-muted-foreground space-y-2">
          <p>• Use the editor to write your post content.</p>
          <p>• Add an image URL to display a featured image.</p>
          <p>• Set the published status to make your post public.</p>
          <p>• Remember to save your changes regularly.</p>
        </div>
      </div>
    </div>
  );
};
