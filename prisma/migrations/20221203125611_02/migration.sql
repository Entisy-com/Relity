/*
  Warnings:

  - Made the column `color` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `backgroundColor` on table `Message` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pfp` on table `Server` required. This step will fail if there are existing NULL values in that column.
  - Made the column `banner` on table `Server` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "color" SET NOT NULL,
ALTER COLUMN "backgroundColor" SET NOT NULL;

-- AlterTable
ALTER TABLE "Role" ALTER COLUMN "color" SET DEFAULT 'fff';

-- AlterTable
ALTER TABLE "Server" ALTER COLUMN "pfp" SET NOT NULL,
ALTER COLUMN "pfp" SET DEFAULT '',
ALTER COLUMN "banner" SET NOT NULL,
ALTER COLUMN "banner" SET DEFAULT '';
