/*
  # Remove problematic trigger that causes schema "net" error

  1. Changes
    - Drop the trigger that's causing the "net" schema error
    - Drop the trigger function that uses unsupported net extension
    - Clean up any references to the problematic trigger

  This will allow normal database operations to work while we use a different approach for webhooks.
*/

-- Drop the trigger first
DROP TRIGGER IF EXISTS coaches_teachers_zapier_trigger ON coaches_and_teachers_club;

-- Drop the trigger function
DROP FUNCTION IF EXISTS send_to_zapier_trigger();

-- Ensure the table exists in public schema
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'coaches_and_teachers_club'
  ) THEN
    CREATE TABLE coaches_and_teachers_club (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      customer_name text NOT NULL,
      mobile_number text NOT NULL,
      phone_number text NOT NULL,
      email text NOT NULL,
      user_type text NOT NULL,
      created_at timestamptz DEFAULT now()
    );
    
    ALTER TABLE coaches_and_teachers_club ENABLE ROW LEVEL SECURITY;
  END IF;
END $$;