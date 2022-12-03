/*
  Warnings:

  - Made the column `categoryid` on table `TextChannel` required. This step will fail if there are existing NULL values in that column.
  - Made the column `categoryid` on table `VoiceChannel` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "TextChannel" DROP CONSTRAINT "TextChannel_categoryid_fkey";

-- DropForeignKey
ALTER TABLE "VoiceChannel" DROP CONSTRAINT "VoiceChannel_categoryid_fkey";

-- AlterTable
ALTER TABLE "TextChannel" ALTER COLUMN "categoryid" SET NOT NULL;

-- AlterTable
ALTER TABLE "VoiceChannel" ALTER COLUMN "categoryid" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "TextChannel" ADD CONSTRAINT "TextChannel_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoiceChannel" ADD CONSTRAINT "VoiceChannel_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
