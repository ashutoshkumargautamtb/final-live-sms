const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    // Google Sheets configuration
    const GOOGLE_SHEETS_ID = "YOUR_GOOGLE_SHEET_ID"; // Replace with your sheet ID
    const SHEET_NAME = "Sheet1"; // Replace with your sheet name
    
    // Service account credentials (you'll need to add these as environment variables)
    const serviceAccount = {
      type: "service_account",
      project_id: Deno.env.get("GOOGLE_PROJECT_ID"),
      private_key_id: Deno.env.get("GOOGLE_PRIVATE_KEY_ID"),
      private_key: Deno.env.get("GOOGLE_PRIVATE_KEY")?.replace(/\\n/g, '\n'),
      client_email: Deno.env.get("GOOGLE_CLIENT_EMAIL"),
      client_id: Deno.env.get("GOOGLE_CLIENT_ID"),
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    };

    // Get access token
    const getAccessToken = async () => {
      const jwt = await createJWT(serviceAccount);
      
      const response = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
          assertion: jwt,
        }),
      });

      const data = await response.json();
      return data.access_token;
    };

    // Create JWT for Google API authentication
    const createJWT = async (serviceAccount: any) => {
      const header = {
        alg: "RS256",
        typ: "JWT",
      };

      const now = Math.floor(Date.now() / 1000);
      const payload = {
        iss: serviceAccount.client_email,
        scope: "https://www.googleapis.com/spreadsheets",
        aud: "https://oauth2.googleapis.com/token",
        exp: now + 3600,
        iat: now,
      };

      const encodedHeader = btoa(JSON.stringify(header)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      const encodedPayload = btoa(JSON.stringify(payload)).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

      const signatureInput = `${encodedHeader}.${encodedPayload}`;
      
      // Import private key
      const privateKey = await crypto.subtle.importKey(
        "pkcs8",
        new TextEncoder().encode(serviceAccount.private_key),
        {
          name: "RSASSA-PKCS1-v1_5",
          hash: "SHA-256",
        },
        false,
        ["sign"]
      );

      // Sign the JWT
      const signature = await crypto.subtle.sign(
        "RSASSA-PKCS1-v1_5",
        privateKey,
        new TextEncoder().encode(signatureInput)
      );

      const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
        .replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

      return `${signatureInput}.${encodedSignature}`;
    };

    // Fetch data from Supabase
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/coaches_and_teachers_club?select=*`, {
      headers: {
        "Authorization": `Bearer ${supabaseKey}`,
        "apikey": supabaseKey,
        "Content-Type": "application/json",
      },
    });

    if (!supabaseResponse.ok) {
      throw new Error(`Failed to fetch from Supabase: ${supabaseResponse.statusText}`);
    }

    const supabaseData = await supabaseResponse.json();
    console.log(`Fetched ${supabaseData.length} records from Supabase`);

    // Get Google Sheets access token
    const accessToken = await getAccessToken();

    // Clear existing data (optional)
    const clearResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_ID}/values/${SHEET_NAME}:clear`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Prepare data for Google Sheets
    const headers = ["ID", "Customer Name", "Mobile Number", "Phone Number", "Email", "User Type", "Created At"];
    const rows = supabaseData.map((record: any) => [
      record.id,
      record.customer_name,
      record.mobile_number,
      record.phone_number,
      record.email,
      record.user_type,
      record.created_at,
    ]);

    const sheetData = [headers, ...rows];

    // Update Google Sheets
    const updateResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEETS_ID}/values/${SHEET_NAME}?valueInputOption=RAW`,
      {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: sheetData,
        }),
      }
    );

    if (!updateResponse.ok) {
      const errorText = await updateResponse.text();
      throw new Error(`Failed to update Google Sheets: ${errorText}`);
    }

    const updateResult = await updateResponse.json();

    return new Response(
      JSON.stringify({
        message: "Data successfully synced to Google Sheets",
        recordsProcessed: supabaseData.length,
        sheetsResponse: updateResult,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Error syncing to Google Sheets:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});