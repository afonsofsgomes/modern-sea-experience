
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
    const { 
      company_name, 
      contact_name, 
      email, 
      phone, 
      group_size, 
      event_date, 
      destination, 
      requirements 
    } = await req.json()
    
    // Validate required fields
    if (!contact_name || !email) {
      return new Response(
        JSON.stringify({ error: 'Contact name and email are required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    // Save the group booking inquiry
    const { data, error } = await supabase
      .from('group_booking_inquiries')
      .insert({
        company_name: company_name || null,
        contact_name,
        email,
        phone: phone || null,
        group_size: group_size || null,
        event_date: event_date || null,
        destination: destination || null,
        requirements: requirements || null
      })
      .select()

    if (error) {
      console.error('Error saving group booking inquiry:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to save your inquiry' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Here you could add code to send an email notification to admins

    return new Response(
      JSON.stringify({ success: true, message: 'Your group booking inquiry has been submitted successfully' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in group booking function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
