
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/components/auth/AuthContext";
import { MetaTags } from "@/components/SEO";
import { ArrowLeft, Save, Trash2, Image } from "lucide-react";
import { BlogSidebar } from "./BlogSidebar";

// Define blog post type
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

const BlogDashboard = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost>({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    image_url: "",
    category: "",
    published: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isEditing = !!id;

  useEffect(() => {
    if (isEditing && id) {
      const fetchPost = async () => {
        setIsLoading(true);
        try {
          const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('id', id)
            .single();

          if (error) {
            throw error;
          }

          if (data) {
            setPost(data as BlogPost);
          }
        } catch (error: any) {
          console.error('Error fetching blog post:', error);
          toast({
            title: 'Error',
            description: 'Failed to load the blog post.',
            variant: 'destructive',
          });
          navigate('/blog/dashboard');
        } finally {
          setIsLoading(false);
        }
      };

      fetchPost();
    }
  }, [id, toast, navigate, isEditing]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setPost(prev => ({ ...prev, published: checked }));
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setPost(prev => ({ 
      ...prev, 
      title,
      slug: post.slug ? post.slug : generateSlug(title)
    }));
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let slug = e.target.value;
    // Remove special characters and replace spaces with hyphens
    slug = slug
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
    
    setPost(prev => ({ ...prev, slug }));
  };

  const handleSave = async () => {
    if (!post.title || !post.slug || !post.content) {
      toast({
        title: 'Missing information',
        description: 'Title, slug, and content are required.',
        variant: 'destructive',
      });
      return;
    }

    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'You must be logged in to save posts.',
        variant: 'destructive',
      });
      return;
    }

    setIsSaving(true);
    try {
      if (isEditing) {
        // Update existing post
        const { data, error } = await supabase
          .from('blog_posts')
          .update({
            title: post.title,
            slug: post.slug,
            content: post.content,
            excerpt: post.excerpt,
            image_url: post.image_url,
            category: post.category,
            published: post.published
          })
          .eq('id', id)
          .select()
          .single();

        if (error) {
          throw error;
        }

        toast({
          title: 'Success',
          description: 'Blog post updated successfully!',
        });
      } else {
        // Create new post
        const { data, error } = await supabase
          .from('blog_posts')
          .insert({
            title: post.title,
            slug: post.slug,
            content: post.content,
            excerpt: post.excerpt,
            image_url: post.image_url,
            category: post.category,
            published: post.published,
            author_id: user.id
          })
          .select()
          .single();

        if (error) {
          throw error;
        }

        toast({
          title: 'Success',
          description: 'Blog post created successfully!',
        });
        navigate(`/blog/dashboard/edit/${data.id}`);
      }
    } catch (error: any) {
      console.error('Error saving blog post:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to save the blog post.',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!isEditing || !id) {
      return;
    }

    if (!confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      return;
    }

    setIsDeleting(true);
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      toast({
        title: 'Success',
        description: 'Blog post deleted successfully!',
      });
      navigate('/blog/dashboard');
    } catch (error: any) {
      console.error('Error deleting blog post:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete the blog post.',
        variant: 'destructive',
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags 
        title={isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
        description="Manage your blog posts on SeaYou Madeira"
        keywords="blog management, SeaYou blog, editor"
      />
      
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/blog/dashboard')}
                className="mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <h1 className="text-2xl font-display font-bold">
                {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h1>
            </div>
            
            <div className="flex items-center gap-3">
              {isEditing && (
                <Button
                  variant="destructive"
                  onClick={handleDelete}
                  disabled={isDeleting || isLoading}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  {isDeleting ? 'Deleting...' : 'Delete'}
                </Button>
              )}
              
              <Button
                onClick={handleSave}
                disabled={isSaving || isLoading}
              >
                <Save className="h-4 w-4 mr-2" />
                {isSaving ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </div>
          
          {isLoading ? (
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p>Loading post...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="title">
                        Title <span className="text-red-500">*</span>
                      </Label>
                      <Input 
                        id="title"
                        name="title"
                        value={post.title}
                        onChange={handleTitleChange}
                        placeholder="Enter post title"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="slug">
                        Slug <span className="text-red-500">*</span>
                      </Label>
                      <Input 
                        id="slug"
                        name="slug"
                        value={post.slug}
                        onChange={handleSlugChange}
                        placeholder="enter-post-slug"
                        className="mt-1"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        The URL-friendly version of the title.
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="content">
                        Content <span className="text-red-500">*</span>
                      </Label>
                      <Textarea 
                        id="content"
                        name="content"
                        value={post.content}
                        onChange={handleInputChange}
                        placeholder="Write your blog post content here..."
                        className="mt-1 min-h-[300px]"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-lg font-medium mb-4">Featured Image</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="image_url">Image URL</Label>
                      <Input
                        id="image_url"
                        name="image_url"
                        value={post.image_url}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg"
                        className="mt-1"
                      />
                    </div>
                    
                    {post.image_url && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                        <div className="aspect-[16/9] max-w-lg rounded-md overflow-hidden border border-gray-200">
                          <img 
                            src={post.image_url} 
                            alt="Post Featured Image" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=Image+Not+Found";
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <BlogSidebar 
                post={post}
                handleInputChange={handleInputChange} 
                handleSwitchChange={handleSwitchChange}
                handleSave={handleSave}
                isSaving={isSaving}
              />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogDashboard;
