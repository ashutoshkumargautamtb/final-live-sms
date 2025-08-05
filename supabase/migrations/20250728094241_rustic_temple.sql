/*
  # Fix RLS policy for coaches_and_teachers_club table

  1. Security Changes
    - Update INSERT policy to allow anonymous (public) users to register
    - Keep existing SELECT policy for authenticated users
    
  This allows the registration form to work for public users while maintaining security.
*/

-- Drop the existing restrictive INSERT policy
DROP POLICY IF EXISTS "Allow public to insert registrations" ON coaches_and_teachers_club;

-- Create a new policy that allows anonymous users to insert registrations
CREATE POLICY "Allow anonymous users to register"
  ON coaches_and_teachers_club
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Also allow authenticated users to insert (in case they're logged in)
CREATE POLICY "Allow authenticated users to register"
  ON coaches_and_teachers_club
  FOR INSERT
  TO authenticated
  WITH CHECK (true);