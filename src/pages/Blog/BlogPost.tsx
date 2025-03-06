
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Tag, Edit, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/components/auth/AuthContext";
import { MetaTags } from "@/components/SEO";

// Define blog post type
interface BlogPostType {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image_url: string;
  category: string;
  published: boolean;
  created_at: string;
  slug: string;
  author_id: string;
  profiles: {
    first_name: string;
    last_name: string;
    avatar_url: string;
  };
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select('*, profiles(first_name, last_name, avatar_url)')
          .eq('slug', slug)
          .single();

        if (error) {
          throw error;
        }

        setPost(data as BlogPostType);
      } catch (error: any) {
        console.error('Error fetching blog post:', error);
        toast({
          title: 'Error',
          description: 'Failed to load the blog post.',
          variant: 'destructive',
        });
        
        // Redirect to blog list on error
        navigate('/blog');
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug, toast, navigate]);

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Calculate read time (approx. 200 words per minute)
  const calculateReadTime = (content: string) => {
    const wordCount = content?.split(/\s+/).length || 0;
    return Math.ceil(wordCount / 200);
  };

  const canEdit = user && post && (user.id === post.author_id);

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags 
        title={post ? `${post.title} | SeaYou Blog` : 'Blog Post | SeaYou Madeira'}
        description={post?.excerpt || 'Read the latest articles about Madeira island on SeaYou blog.'}
        keywords={`${post?.category}, Madeira, SeaYou blog, ${post?.title}`}
      />
      
      <Navbar />
      
      {isLoading ? (
        <main className="flex-grow">
          <div className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Skeleton className="h-10 w-1/3 mb-6" />
              <Skeleton className="h-5 w-1/4 mb-12" />
              <Skeleton className="h-60 w-full mb-8" />
              <div className="space-y-4 mb-8">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4" />
              </div>
            </div>
          </div>
        </main>
      ) : post ? (
        <main className="flex-grow">
          <article>
            {/* Back button */}
            <div className="py-6 bg-gray-50 border-b">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/blog">
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Articles
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Article header */}
            <header className="py-16 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary mb-4">
                  <Tag className="w-3 h-3 mr-1" />
                  {post.category}
                </span>
                
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center text-muted-foreground mb-8 gap-3 md:gap-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.created_at)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {calculateReadTime(post.content)} min read
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.profiles.first_name} {post.profiles.last_name}
                  </div>
                  
                  {canEdit && (
                    <Link to={`/blog/dashboard/edit/${post.id}`}>
                      <Button variant="outline" size="sm" className="flex items-center">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Post
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </header>
            
            {/* Featured image */}
            {post.image_url && (
              <div className="py-8 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                  <div className="aspect-[16/9] rounded-xl overflow-hidden">
                    <img 
                      src={post.image_url} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Article content */}
            <div className="py-12 bg-white">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="prose prose-lg max-w-none">
                  {/* Render HTML content */}
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
              </div>
            </div>
          </article>
        </main>
      ) : (
        <main className="flex-grow flex items-center justify-center py-16">
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Post Not Found</h2>
            <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
      )}
      
      <Footer />
    </div>
  );
};

export default BlogPost;
