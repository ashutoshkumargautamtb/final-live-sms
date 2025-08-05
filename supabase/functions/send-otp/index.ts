import { serve } from "https://deno.land/x/sift@0.6.0/mod.ts";

// Hard-coded Kaleyra credentials
const API_KEY     = "A7d7dfbdeba5e88a9d025e2be383619a7";
const SID         = "HXIN1732700271IN";
const TEMPLATE_ID = "1707175403711536852";
const SENDER      = "CLSPLS";
const BASE_URL    = `https://api.in.kaleyra.io/v1/${SID}/sms`;

const corsHeaders = {
  "Access-Control-Allow-Origin":  "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, api-key",
};

serve(async (req) => {
  // handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // read and parse JSON
  const raw = await req.text();
  let payload: any = {};
  try {
    payload = JSON.parse(raw);
  } catch {
    return new Response(
      JSON.stringify({ error: "Invalid JSON" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  const mobile = payload.mobile_number;
  if (!/^[6-9]\d{9}$/.test(mobile)) {
    return new Response(
      JSON.stringify({ error: "Invalid mobile number" }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // generate 6-digit OTP
  const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
  const toNumber = `+91${mobile}`;

  // build form-url-encoded body
  const params = new URLSearchParams({
    to:          toNumber,
    type:        "OTP",
    sender:      SENDER,
    body:        `${otpCode} is your one-time password (OTP) for phone verification to login. ~CLSPLS`,
    template_id: TEMPLATE_ID,
  });

  // send SMS
  let smsJson: any;
  try {
    const smsResp = await fetch(BASE_URL, {
      method:  "POST",
      headers: {
        "api-key":      API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:    params.toString(),
    });

    smsJson = await smsResp.json();
    if (!smsResp.ok) {
      return new Response(
        JSON.stringify({ success: false, error: smsJson }),
        { status: smsResp.status, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: "Failed to contact Kaleyra" }),
      { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  // respond back
  return new Response(
    JSON.stringify({
      success: true,
      otp:     otpCode,
      kaleyra: smsJson,
    }),
    { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
});
