const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface VerifyOtpRequest {
  mobile_number: string;
  otp_code: string;
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

    const { mobile_number, otp_code }: VerifyOtpRequest = await req.json();

    if (!mobile_number || !otp_code) {
      return new Response(
        JSON.stringify({ error: "Mobile number and OTP code are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate OTP format (6 digits)
    if (!/^\d{6}$/.test(otp_code)) {
      return new Response(
        JSON.stringify({ error: "Invalid OTP format" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase configuration");
    }

    // Fetch OTP record from database
    const fetchResponse = await fetch(
      `${supabaseUrl}/rest/v1/otp_verifications?mobile_number=eq.${mobile_number}&verified=eq.false&order=created_at.desc&limit=1`,
      {
        headers: {
          "Authorization": `Bearer ${supabaseKey}`,
          "apikey": supabaseKey,
          "Content-Type": "application/json",
        },
      }
    );

    if (!fetchResponse.ok) {
      throw new Error("Failed to fetch OTP record");
    }

    const otpRecords = await fetchResponse.json();

    if (otpRecords.length === 0) {
      return new Response(
        JSON.stringify({ error: "No valid OTP found for this mobile number" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const otpRecord = otpRecords[0];

    // Check if OTP has expired
    const now = new Date();
    const expiresAt = new Date(otpRecord.expires_at);

    if (now > expiresAt) {
      return new Response(
        JSON.stringify({ error: "OTP has expired" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Verify OTP code
    if (otpRecord.otp_code !== otp_code) {
      return new Response(
        JSON.stringify({ error: "Invalid OTP code" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Mark OTP as verified
    const updateResponse = await fetch(
      `${supabaseUrl}/rest/v1/otp_verifications?id=eq.${otpRecord.id}`,
      {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${supabaseKey}`,
          "apikey": supabaseKey,
          "Content-Type": "application/json",
          "Prefer": "return=minimal",
        },
        body: JSON.stringify({ verified: true }),
      }
    );

    if (!updateResponse.ok) {
      throw new Error("Failed to update OTP record");
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "OTP verified successfully",
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Error verifying OTP:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to verify OTP", 
        details: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});