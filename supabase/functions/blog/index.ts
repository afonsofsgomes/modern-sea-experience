
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  // Initialize Supabase client
  const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
  const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  // Get the user if they're authenticated
  const authHeader = req.headers.get('Authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return new Response(
      JSON.stringify({ error: 'Authentication required' }),
      { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  const token = authHeader.replace('Bearer ', '')
  const { data: { user }, error: authError } = await supabase.auth.getUser(token)
  
  if (authError || !user) {
    return new Response(
      JSON.stringify({ error: 'Authentication failed', details: authError }),
      { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }

  // Parse the URL to get the operation and parameters
  const url = new URL(req.url)
  const operation = url.pathname.split('/').pop()

  try {
    if (req.method === 'GET') {
      if (operation === 'posts') {
        // Get blog posts (either all posts for admins or only published ones for others)
        const { data: userProfile } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single()

        let query = supabase
          .from('blog_posts')
          .select('*, profiles(first_name, last_name, avatar_url)')
          .order('created_at', { ascending: false })

        // If not admin, only return published posts and their own drafts
        if (!userProfile || userProfile.role !== 'admin') {
          query = query.or(`published.eq.true,author_id.eq.${user.id}`)
        }

        const { data, error } = await query
        
        if (error) {
          throw error
        }

        return new Response(
          JSON.stringify({ posts: data }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      } else if (operation === 'post') {
        // Get a specific blog post by slug
        const slug = url.searchParams.get('slug')
        if (!slug) {
          return new Response(
            JSON.stringify({ error: 'Slug parameter is required' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          )
        }

        const { data, error } = await supabase
          .from('blog_posts')
          .select('*, profiles(first_name, last_name, avatar_url)')
          .eq('slug', slug)
          .single()

        if (error) {
          if (error.code === 'PGRST116') {
            return new Response(
              JSON.stringify({ error: 'Post not found' }),
              { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
          }
          throw error
        }

        // Check if the post is published or belongs to the current user
        if (!data.published && data.author_id !== user.id) {
          // Check if user is admin
          const { data: userProfile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single()

          if (!userProfile || userProfile.role !== 'admin') {
            return new Response(
              JSON.stringify({ error: 'Unauthorized to view this post' }),
              { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
          }
        }

        return new Response(
          JSON.stringify({ post: data }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      } else if (operation === 'categories') {
        // Get all blog categories
        const { data, error } = await supabase
          .from('blog_categories')
          .select('*')
          .order('name')

        if (error) {
          throw error
        }

        return new Response(
          JSON.stringify({ categories: data }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      } else if (operation === 'tags') {
        // Get all blog tags
        const { data, error } = await supabase
          .from('blog_tags')
          .select('*')
          .order('name')

        if (error) {
          throw error
        }

        return new Response(
          JSON.stringify({ tags: data }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
    } else if (req.method === 'POST') {
      const body = await req.json()

      if (operation === 'create') {
        // Create a new blog post
        const { title, content, excerpt, image_url, category, published, slug } = body
        
        // Validate required fields
        if (!title || !content || !slug) {
          return new Response(
            JSON.stringify({ error: 'Title, content, and slug are required' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          )
        }

        // Check if slug is already in use
        const { data: existingPost } = await supabase
          .from('blog_posts')
          .select('id')
          .eq('slug', slug)
          .maybeSingle()

        if (existingPost) {
          return new Response(
            JSON.stringify({ error: 'A post with this slug already exists' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          )
        }

        // Create the post
        const { data, error } = await supabase
          .from('blog_posts')
          .insert({
            title,
            slug,
            content,
            excerpt: excerpt || null,
            image_url: image_url || null,
            category: category || null,
            published: published || false,
            author_id: user.id
          })
          .select()
          .single()

        if (error) {
          throw error
        }

        return new Response(
          JSON.stringify({ success: true, post: data }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      } else if (operation === 'update') {
        // Update an existing blog post
        const { id, title, content, excerpt, image_url, category, published, slug } = body
        
        if (!id) {
          return new Response(
            JSON.stringify({ error: 'Post ID is required' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          )
        }

        // Check post ownership or admin status
        const { data: postData, error: postError } = await supabase
          .from('blog_posts')
          .select('author_id')
          .eq('id', id)
          .single()

        if (postError) {
          if (postError.code === 'PGRST116') {
            return new Response(
              JSON.stringify({ error: 'Post not found' }),
              { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
          }
          throw postError
        }

        if (postData.author_id !== user.id) {
          // Check if user is admin
          const { data: userProfile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single()

          if (!userProfile || userProfile.role !== 'admin') {
            return new Response(
              JSON.stringify({ error: 'Unauthorized to update this post' }),
              { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
          }
        }

        // Check if updated slug is already in use by another post
        if (slug) {
          const { data: existingPost } = await supabase
            .from('blog_posts')
            .select('id')
            .eq('slug', slug)
            .neq('id', id)
            .maybeSingle()

          if (existingPost) {
            return new Response(
              JSON.stringify({ error: 'A different post with this slug already exists' }),
              { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
          }
        }

        // Build update object with only the fields that are provided
        const updateData: Record<string, any> = {}
        if (title !== undefined) updateData.title = title
        if (content !== undefined) updateData.content = content
        if (excerpt !== undefined) updateData.excerpt = excerpt
        if (image_url !== undefined) updateData.image_url = image_url
        if (category !== undefined) updateData.category = category
        if (published !== undefined) updateData.published = published
        if (slug !== undefined) updateData.slug = slug
        updateData.updated_at = new Date().toISOString()

        // Update the post
        const { data, error } = await supabase
          .from('blog_posts')
          .update(updateData)
          .eq('id', id)
          .select()
          .single()

        if (error) {
          throw error
        }

        return new Response(
          JSON.stringify({ success: true, post: data }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      } else if (operation === 'delete') {
        // Delete a blog post
        const { id } = body
        
        if (!id) {
          return new Response(
            JSON.stringify({ error: 'Post ID is required' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          )
        }

        // Check post ownership or admin status
        const { data: postData, error: postError } = await supabase
          .from('blog_posts')
          .select('author_id')
          .eq('id', id)
          .single()

        if (postError) {
          if (postError.code === 'PGRST116') {
            return new Response(
              JSON.stringify({ error: 'Post not found' }),
              { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
          }
          throw postError
        }

        if (postData.author_id !== user.id) {
          // Check if user is admin
          const { data: userProfile } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', user.id)
            .single()

          if (!userProfile || userProfile.role !== 'admin') {
            return new Response(
              JSON.stringify({ error: 'Unauthorized to delete this post' }),
              { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
          }
        }

        // Delete the post
        const { error } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', id)

        if (error) {
          throw error
        }

        return new Response(
          JSON.stringify({ success: true, message: 'Post deleted successfully' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
    }

    // If no matching operation is found
    return new Response(
      JSON.stringify({ error: 'Invalid operation' }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in blog function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
