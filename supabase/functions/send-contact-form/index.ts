
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    // Format email content with HTML
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Subscribe to newsletter:</strong> ${newsletter ? 'Yes' : 'No'}</p>
    `;

    // Format email content as plain text
    const textContent = `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      Message: ${message}
      Subscribe to newsletter: ${newsletter ? 'Yes' : 'No'}
    `;

    console.log('Sending contact form submission to support@seayou.pt');
    
    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: "SeaYou Contact Form <onboarding@resend.dev>",
      to: "support@seayou.pt",
      subject: `Contact Form Submission from ${name}`,
      html: htmlContent,
      text: textContent,
      reply_to: email
    });

    console.log('Email response:', emailResponse);

    // Also send confirmation email to the user
    const confirmationResponse = await resend.emails.send({
      from: "SeaYou <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting SeaYou Madeira",
      html: `
        <h2>Thank you for contacting us, ${name}!</h2>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>If you have an urgent matter, please call us at +351 291 123 456.</p>
        <p>
          Best regards,<br>
          The SeaYou Madeira Team
        </p>
      `,
      text: `
        Thank you for contacting us, ${name}!
        
        We have received your message and will get back to you as soon as possible.
        
        If you have an urgent matter, please call us at +351 291 123 456.
        
        Best regards,
        The SeaYou Madeira Team
      `
    });

    console.log('Confirmation email response:', confirmationResponse);

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
