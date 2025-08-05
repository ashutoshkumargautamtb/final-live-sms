/*
  # Create Database Trigger for Zapier Integration

  1. Database Trigger
    - Creates a trigger that fires after INSERT on coaches_and_teachers_club table
    - Automatically calls the send-to-zapier Edge Function with new record data
    - Ensures every new registration is sent to Zapier webhook

  2. Security
    - Uses supabase_functions.http_request to call Edge Function
    - Passes the new record data as JSON payload
*/

-- Create a function that will be called by the trigger
CREATE OR REPLACE FUNCTION send_to_zapier_trigger()
RETURNS TRIGGER AS $$
BEGIN
  -- Call the Edge Function with the new record data
  PERFORM
    net.http_post(
      url := current_setting('app.settings.supabase_url') || '/functions/v1/send-to-zapier',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key')
      ),
      body := jsonb_build_object('record', row_to_json(NEW))
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
DROP TRIGGER IF EXISTS coaches_teachers_zapier_trigger ON coaches_and_teachers_club;

CREATE TRIGGER coaches_teachers_zapier_trigger
  AFTER INSERT ON coaches_and_teachers_club
  FOR EACH ROW
  EXECUTE FUNCTION send_to_zapier_trigger();