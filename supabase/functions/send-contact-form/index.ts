
// Using a stable version of Deno's standard library
import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

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

    // Get environment variable for Resend API key
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const fromEmail = Deno.env.get("SMTP_FROM") || "noreply@seayou.pt";
    
    if (!resendApiKey) {
      throw new Error("Resend API key is not configured");
    }

    console.log("Email Configuration:");
    console.log(`From Email: ${fromEmail}`);

    // Initialize Resend client
    const resend = new Resend(resendApiKey);
    console.log("Resend client initialized successfully");

    // Format HTML content for support email
    const supportHtmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Subscribe to newsletter:</strong> ${newsletter ? 'Yes' : 'No'}</p>
    `;

    // Send email to support
    try {
      console.log(`Sending contact form submission to support@seayou.pt from ${fromEmail}`);
      
      const supportEmailResponse = await resend.emails.send({
        from: fromEmail,
        to: "support@seayou.pt",
        subject: `Contact Form Submission from ${name}`,
        html: supportHtmlContent,
      });
      
      console.log("Support email sent successfully:", supportEmailResponse);
    } catch (sendError) {
      console.error("Error sending email to support:", sendError);
      throw new Error(`Failed to send email to support: ${sendError.message}`);
    }

    // Format HTML content for confirmation email
    const confirmationHtmlContent = `
      <h2>Thank you for contacting us, ${name}!</h2>
      <p>We have received your message and will get back to you as soon as possible.</p>
      <p>If you have an urgent matter, please call us at +351 291 123 456.</p>
      <p>
        Best regards,<br>
        The SeaYou Madeira Team
      </p>
    `;

    // Send confirmation email to user
    try {
      console.log(`Sending confirmation email to user ${email} from ${fromEmail}`);
      
      const userEmailResponse = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Thank you for contacting SeaYou Madeira",
        html: confirmationHtmlContent,
      });
      
      console.log("Confirmation email to user sent successfully:", userEmailResponse);
    } catch (sendError) {
      console.error("Error sending confirmation email to user:", sendError);
      throw new Error(`Failed to send confirmation email: ${sendError.message}`);
    }

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
        error: error.message || 'Internal server error'
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders } 
      }
    );
  }
});
