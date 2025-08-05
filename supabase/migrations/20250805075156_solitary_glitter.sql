/*
  # Add UTM tracking columns to coaches_and_teachers_club table

  1. Changes
    - Add `utm_source` column (text, nullable) to track marketing source
    - Add `utm_medium` column (text, nullable) to track marketing medium
    
  2. Notes
    - These columns are optional and can be null
    - Used for tracking marketing campaign effectiveness
*/

-- Add utm_source column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'coaches_and_teachers_club' AND column_name = 'utm_source'
  ) THEN
    ALTER TABLE coaches_and_teachers_club ADD COLUMN utm_source text;
  END IF;
END $$;

-- Add utm_medium column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'coaches_and_teachers_club' AND column_name = 'utm_medium'
  ) THEN
    ALTER TABLE coaches_and_teachers_club ADD COLUMN utm_medium text;
  END IF;
END $$;