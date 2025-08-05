/*
  # Remove pin_code column from coaches_and_teachers_club table

  1. Changes
    - Remove `pin_code` column from `coaches_and_teachers_club` table
    - This column is no longer needed in the registration form
*/

ALTER TABLE coaches_and_teachers_club DROP COLUMN IF EXISTS pin_code;