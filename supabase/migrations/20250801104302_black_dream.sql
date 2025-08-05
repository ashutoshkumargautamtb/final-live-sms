/*
  # Create OTP Verifications Table

  1. New Tables
    - `otp_verifications`
      - `id` (uuid, primary key)
      - `mobile_number` (text, not null)
      - `otp_code` (text, not null)
      - `expires_at` (timestamptz, not null)
      - `verified` (boolean, default false)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `otp_verifications` table
    - Add policy for service role access only (no public access)

  3. Indexes
    - Index on mobile_number for faster lookups
    - Index on expires_at for cleanup queries
*/

CREATE TABLE IF NOT EXISTS otp_verifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  mobile_number text NOT NULL,
  otp_code text NOT NULL,
  expires_at timestamptz NOT NULL,
  verified boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE otp_verifications ENABLE ROW LEVEL SECURITY;

-- Create policy for service role access only
CREATE POLICY "Service role can manage OTP verifications"
  ON otp_verifications
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_otp_verifications_mobile_number 
  ON otp_verifications(mobile_number);

CREATE INDEX IF NOT EXISTS idx_otp_verifications_expires_at 
  ON otp_verifications(expires_at);

CREATE INDEX IF NOT EXISTS idx_otp_verifications_verified 
  ON otp_verifications(verified);

-- Create a function to clean up expired OTPs (optional, for maintenance)
CREATE OR REPLACE FUNCTION cleanup_expired_otps()
RETURNS void AS $$
BEGIN
  DELETE FROM otp_verifications 
  WHERE expires_at < now() - interval '1 day';
END;
$$ LANGUAGE plpgsql;