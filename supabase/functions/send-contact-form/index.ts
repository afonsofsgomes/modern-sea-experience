
// Using a stable version of Deno's standard library
import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
// Using nodemailer instead of the problematic SMTP client
import * as nodemailer from "https://deno.land/x/nodemailer@v0.8.2/mod.ts";

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

    // Get environment variables for SMTP configuration
    let host = Deno.env.get("SMTP_HOST") || "";
    const port = parseInt(Deno.env.get("SMTP_PORT") || "587");
    const username = Deno.env.get("SMTP_USERNAME") || "";
    const password = Deno.env.get("SMTP_PASSWORD") || "";
    const fromEmail = Deno.env.get("SMTP_FROM") || "noreply@seayou.pt";
    
    // Remove http:// or https:// from host if present
    if (host.startsWith("http://")) {
      host = host.substring(7);
    } else if (host.startsWith("https://")) {
      host = host.substring(8);
    }
    
    // Remove trailing slash if present
    if (host.endsWith("/")) {
      host = host.substring(0, host.length - 1);
    }
    
    console.log("SMTP Configuration:");
    console.log(`Host: ${host}`);
    console.log(`Port: ${port}`);
    console.log(`Username: ${username}`);
    console.log(`From Email: ${fromEmail}`);

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: port === 465, // true for 465, false for other ports
      auth: {
        user: username,
        pass: password,
      },
    });

    console.log("Transporter created successfully");

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
      
      const supportMailOptions = {
        from: fromEmail,
        to: "support@seayou.pt",
        subject: `Contact Form Submission from ${name}`,
        html: supportHtmlContent,
      };
      
      await transporter.sendMail(supportMailOptions);
      console.log("Support email sent successfully");
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
      
      const userMailOptions = {
        from: fromEmail,
        to: email,
        subject: "Thank you for contacting SeaYou Madeira",
        html: confirmationHtmlContent,
      };
      
      await transporter.sendMail(userMailOptions);
      console.log("Confirmation email to user sent successfully");
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
