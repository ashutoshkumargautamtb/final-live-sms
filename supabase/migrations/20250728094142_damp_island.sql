/*
  # Create Coaches and Teachers Club table

  1. New Tables
    - `coaches_and_teachers_club`
      - `id` (uuid, primary key)
      - `customer_name` (text, required)
      - `mobile_number` (text, required)
      - `phone_number` (text, required)
      - `email` (text, required)
      - `user_type` (text, required)
      - `full_address` (text, optional)
      - `pin_code` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `coaches_and_teachers_club` table
    - Add policy for public users to insert their own data
    - Add policy for authenticated users to read data
*/

CREATE TABLE IF NOT EXISTS coaches_and_teachers_club (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  mobile_number text NOT NULL,
  phone_number text NOT NULL,
  email text NOT NULL,
  user_type text NOT NULL,
  full_address text DEFAULT '',
  pin_code text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE coaches_and_teachers_club ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert registrations"
  ON coaches_and_teachers_club
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read registrations"
  ON coaches_and_teachers_club
  FOR SELECT
  TO authenticated
  USING (true);