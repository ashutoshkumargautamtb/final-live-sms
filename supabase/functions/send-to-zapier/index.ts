const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface ZapierWebhookData {
  id?: string;
  customer_name: string;
  mobile_number: string;
  phone_number: string;
  email: string;
  user_type: string;
  utm_source?: string;
  utm_medium?: string;
  created_at?: string;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const webhookData: ZapierWebhookData = await req.json();

    console.log('🔄 Sending data to Zapier webhook');
    console.log('📤 Webhook payload:', webhookData);

    // Zapier webhook URL
    const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/4460305/u4wlks7/';

    // Send data to Zapier webhook
    const webhookResponse = await fetch(zapierWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    console.log('📡 Zapier webhook response status:', webhookResponse.status);

    if (webhookResponse.ok) {
      console.log('✅ Data sent to Zapier webhook successfully');
      
      return new Response(
        JSON.stringify({
          success: true,
          message: "Data sent to Zapier successfully",
          status: webhookResponse.status
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    } else {
      const errorText = await webhookResponse.text();
      console.error('❌ Zapier webhook failed:', errorText);
      
      return new Response(
        JSON.stringify({
          success: false,
          error: "Zapier webhook failed",
          status: webhookResponse.status,
          details: errorText
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

  } catch (error) {
    console.error('Error sending data to Zapier:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: "Failed to send data to Zapier", 
        details: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});