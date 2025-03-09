
// Import from a more recent version of Deno standard library
import { serve } from "https://deno.land/std@0.208.0/http/server.ts";
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

    // Get the from email from environment variable
    const fromEmail = Deno.env.get("SMTP_FROM") || "noreply@seayou.pt";
    
    console.log("SMTP Configuration:");
    console.log(`Host: ${Deno.env.get("SMTP_HOST")}`);
    console.log(`Port: ${Deno.env.get("SMTP_PORT")}`);
    console.log(`Username: ${Deno.env.get("SMTP_USERNAME")}`);
    console.log(`From Email: ${fromEmail}`);

    // Create SMTP client with correct configuration
    const client = new SmtpClient();

    try {
      await client.connectTLS({
        hostname: Deno.env.get("SMTP_HOST") || "",
        port: parseInt(Deno.env.get("SMTP_PORT") || "587"),
        username: Deno.env.get("SMTP_USERNAME") || "",
        password: Deno.env.get("SMTP_PASSWORD") || "",
      });
      
      console.log("SMTP connection successful");
    } catch (connError) {
      console.error("SMTP connection error:", connError);
      throw new Error(`Failed to connect to SMTP server: ${connError.message}`);
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

    console.log(`Sending contact form submission to support@seayou.pt from ${fromEmail}`);
    
    try {
      // Send email to support
      await client.send({
        from: fromEmail,
        to: "support@seayou.pt",
        subject: `Contact Form Submission from ${name}`,
        content: "text/html",
        html: htmlContent,
      });
      
      console.log("Support email sent successfully");
    } catch (sendError) {
      console.error("Error sending email to support:", sendError);
      throw new Error(`Failed to send email to support: ${sendError.message}`);
    }

    console.log(`Sending confirmation email to user ${email} from ${fromEmail}`);

    try {
      // Send confirmation email to the user
      await client.send({
        from: fromEmail,
        to: email,
        subject: "Thank you for contacting SeaYou Madeira",
        content: "text/html",
        html: `
          <h2>Thank you for contacting us, ${name}!</h2>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>If you have an urgent matter, please call us at +351 291 123 456.</p>
          <p>
            Best regards,<br>
            The SeaYou Madeira Team
          </p>
        `,
      });
      
      console.log("Confirmation email to user sent successfully");
    } catch (sendError) {
      console.error("Error sending confirmation email to user:", sendError);
      throw new Error(`Failed to send confirmation email: ${sendError.message}`);
    }

    // Close the connection
    await client.close();
    console.log("SMTP connection closed");

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
