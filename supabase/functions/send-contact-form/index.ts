
// Using a stable version of Deno's standard library
import { serve } from "https://deno.land/std@0.167.0/http/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";

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
    const host = Deno.env.get("SMTP_HOST") || "";
    const port = 465; // Force 465 for SSL as confirmed by user
    const username = Deno.env.get("SMTP_USERNAME") || "";
    const password = Deno.env.get("SMTP_PASSWORD") || "";
    const fromEmail = Deno.env.get("SMTP_FROM") || "noreply@seayou.pt";
    
    console.log("SMTP Configuration:");
    console.log(`Host: ${host}`);
    console.log(`Port: ${port}`);
    console.log(`Username: ${username ? "Provided" : "Missing"}`);
    console.log(`Password: ${password ? "Provided" : "Missing"}`);
    console.log(`From Email: ${fromEmail}`);

    // Check that required SMTP settings are provided
    if (!host) {
      throw new Error("SMTP host is not configured");
    }
    
    if (!username || !password) {
      throw new Error("SMTP credentials are not configured");
    }
    
    // Initialize SMTP client - using a different approach to connect
    const client = new SmtpClient();
    
    try {
      console.log(`Connecting to SMTP server at ${host}:${port} with SSL`);
      
      // For SSL on port 465, just use the simple connect method
      await client.connectTLS({
        hostname: host,
        port: port,
        username: username,
        password: password,
        // No secure flag - avoiding the issue with Deno.writeAll
      });
      
      console.log("SMTP connection established successfully");
    } catch (connError) {
      console.error(`Error connecting to SMTP server at ${host}:${port}:`, connError);
      throw new Error(`Failed to connect to SMTP server: ${connError.message}`);
    }

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
      
      await client.send({
        from: fromEmail,
        to: "support@seayou.pt",
        subject: `Contact Form Submission from ${name}`,
        content: supportHtmlContent,
        html: supportHtmlContent,
      });
      
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
      
      await client.send({
        from: fromEmail,
        to: email,
        subject: "Thank you for contacting SeaYou Madeira",
        content: confirmationHtmlContent,
        html: confirmationHtmlContent,
      });
      
      console.log("Confirmation email to user sent successfully");
    } catch (sendError) {
      console.error("Error sending confirmation email to user:", sendError);
      throw new Error(`Failed to send confirmation email: ${sendError.message}`);
    }

    // Close the SMTP connection
    await client.close();

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
