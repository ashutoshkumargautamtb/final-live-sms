/*
  # Remove full_address field from coaches_and_teachers_club table

  1. Changes
    - Remove `full_address` column from `coaches_and_teachers_club` table
    - This field is not used in the landing page form

  2. Notes
    - This is a safe operation as the field is optional and not required
*/

-- Remove the full_address column from the table
ALTER TABLE coaches_and_teachers_club 
DROP COLUMN IF EXISTS full_address;