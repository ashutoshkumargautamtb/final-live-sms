import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our 'Coaches and Teachers Club' table
export interface CoachesTeachersClub {
  id?: string
  customer_name: string
  mobile_number: string
  phone_number: string
  email: string
  user_type: string
  utm_source?: string
  utm_medium?: string
  created_at?: string
}

// Function to insert a new record into 'Coaches and Teachers Club' table
export async function insertCoachesTeachersClub(data: Omit<CoachesTeachersClub, 'id' | 'created_at'>) {
  const { data: responseData, error } = await supabase
    .schema('public')
    .from('coaches_and_teachers_club')
    .insert([data])
    .select()

  if (error) {
    console.error('Error inserting into Coaches and Teachers Club:', error)
    throw error
  }

  // Send data to Zapier webhook after successful database insert
  await sendToZapierWebhook(responseData[0], data);

  return responseData
}

// Function to capture phone number immediately (partial data)
export async function capturePhoneNumber(mobileNumber: string) {
  try {
    // Get UTM parameters
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source') || '';
    const utmMedium = urlParams.get('utm_medium') || '';

    const partialData = {
      customer_name: 'Phone Captured', // Placeholder name
      mobile_number: mobileNumber,
      phone_number: mobileNumber,
      email: 'pending@capture.com', // Placeholder email
      user_type: 'phone_capture', // Special type to identify partial records
      utm_source: utmSource,
      utm_medium: utmMedium
    };

    const { data: responseData, error } = await supabase
      .schema('public')
      .from('coaches_and_teachers_club')
      .insert([partialData])
      .select();

    if (error) {
      console.error('Error capturing phone number:', error);
      return null;
    }

    console.log('Phone number captured successfully:', responseData[0]?.id);
    return responseData[0];
  } catch (error) {
    console.error('Failed to capture phone number:', error);
    return null;
  }
}

// Helper function to send data to Zapier webhook
async function sendToZapierWebhook(dbRecord: any, formData: Omit<CoachesTeachersClub, 'id' | 'created_at'>) {
  try {
    const webhookData = {
      id: dbRecord?.id,
      customer_name: formData.customer_name,
      mobile_number: formData.mobile_number,
      phone_number: formData.phone_number,
      email: formData.email,
      user_type: formData.user_type,
      utm_source: formData.utm_source || '',
      utm_medium: formData.utm_medium || '',
      created_at: dbRecord?.created_at
    };

    console.log('🔄 Sending data to Zapier via Edge Function');
    console.log('📤 Webhook payload:', webhookData);

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    // Send data via Supabase Edge Function to bypass CORS
    const edgeFunctionUrl = `${supabaseUrl}/functions/v1/send-to-zapier`;
    const webhookResponse = await fetch(edgeFunctionUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });
    
    console.log('📡 Edge Function response status:', webhookResponse.status);
    
    if (webhookResponse.ok) {
      const result = await webhookResponse.json();
      console.log('✅ Data sent to Zapier successfully:', result);
    } else {
      const errorResult = await webhookResponse.json();
      console.error('❌ Edge Function failed:', errorResult);
    }
  } catch (webhookError) {
    console.error('Error sending data to Zapier via Edge Function:', webhookError);
    // Don't throw error here - we don't want webhook failures to break registration
  }
}

// Function to update the captured record with full registration data
export async function updateCapturedRecord(recordId: string, fullData: Omit<CoachesTeachersClub, 'id' | 'created_at'>) {
  try {
    const { data: responseData, error } = await supabase
      .schema('public')
      .from('coaches_and_teachers_club')
      .update(fullData)
      .eq('id', recordId)
      .select();

    if (error) {
      console.error('Error updating captured record:', error);
      throw error;
    }

    console.log('Captured record updated successfully:', responseData[0]?.id);
    
    // Send updated data to Zapier webhook
    await sendToZapierWebhook(responseData[0], fullData);
    
    return responseData[0];
  } catch (error) {
    console.error('Failed to update captured record:', error);
    throw error;
  }
}