/*
  # Add UTM tracking fields

  1. Changes
    - Add `utm_source` column to store traffic source (e.g., google, facebook, direct)
    - Add `utm_medium` column to store traffic medium (e.g., cpc, social, email)
    - Both fields are optional text fields with default empty string

  2. Security
    - No RLS changes needed as existing policies cover new columns
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'coaches_and_teachers_club' AND column_name = 'utm_source'
  ) THEN
    ALTER TABLE coaches_and_teachers_club ADD COLUMN utm_source text DEFAULT '';
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'coaches_and_teachers_club' AND column_name = 'utm_medium'
  ) THEN
    ALTER TABLE coaches_and_teachers_club ADD COLUMN utm_medium text DEFAULT '';
  END IF;
END $$;