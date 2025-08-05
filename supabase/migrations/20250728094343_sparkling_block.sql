/*
  # Disable RLS for coaches_and_teachers_club table

  This migration disables Row Level Security for the coaches_and_teachers_club table
  to allow public registration without authentication requirements.

  1. Changes
     - Disable RLS on coaches_and_teachers_club table
     - Remove existing policies that were blocking anonymous access

  2. Security Note
     - This allows public access for registration purposes
     - Consider re-enabling RLS with proper policies if authentication is added later
*/

-- Disable Row Level Security for the table
ALTER TABLE coaches_and_teachers_club DISABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow anonymous users to register" ON coaches_and_teachers_club;
DROP POLICY IF EXISTS "Allow authenticated users to read registrations" ON coaches_and_teachers_club;
DROP POLICY IF EXISTS "Allow authenticated users to register" ON coaches_and_teachers_club;