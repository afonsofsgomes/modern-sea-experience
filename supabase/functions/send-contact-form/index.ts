
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, newsletter } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Create email content
    const emailBody = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      Subscribe to newsletter: ${newsletter ? 'Yes' : 'No'}
    `;

    // Send email using Deno's built-in fetch for simplicity
    // In a production environment, you might want to use a dedicated email service
    const emailData = {
      to: "support@seayou.pt",
      from: "no-reply@seayou.pt",
      subject: `Contact Form Submission from ${name}`,
      text: emailBody,
      html: emailBody.replace(/\n/g, '<br>'),
    };

    console.log('Contact form submission:', emailData);
    
    // Here we would normally connect to an email service
    // For now, we'll just log the data and return success
    // In a real implementation, you would add the code to send the email here

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully' 
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders } 
      }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Internal server error'
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders } 
      }
    );
  }
});
