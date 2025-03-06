
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

  try {
    const { query } = await req.json()
    
    if (!query || query.trim() === '') {
      return new Response(
        JSON.stringify({ results: [], error: 'Query cannot be empty' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Log the search query
    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    // Get the user if they're authenticated
    const authHeader = req.headers.get('Authorization')
    let userId = null
    
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '')
      const { data: { user }, error } = await supabase.auth.getUser(token)
      if (!error && user) {
        userId = user.id
      }
    }

    // Log the search query
    await supabase.from('search_logs').insert({
      query: query,
      user_id: userId
    })

    // Search blog posts
    const { data: blogPosts, error: blogError } = await supabase
      .from('blog_posts')
      .select('id, title, excerpt, slug, image_url, category, created_at')
      .or(`title.ilike.%${query}%,content.ilike.%${query}%,excerpt.ilike.%${query}%`)
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(5)

    if (blogError) {
      console.error('Error searching blog posts:', blogError)
    }

    // Format the results
    const results = {
      blogPosts: blogPosts || [],
      // In the future, you can add more search categories here (e.g., tours, destinations)
    }

    return new Response(
      JSON.stringify({ results, count: (blogPosts || []).length }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in search function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
