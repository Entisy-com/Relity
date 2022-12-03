-- DropForeignKey
ALTER TABLE "TextChannel" DROP CONSTRAINT "TextChannel_categoryid_fkey";

-- DropForeignKey
ALTER TABLE "VoiceChannel" DROP CONSTRAINT "VoiceChannel_categoryid_fkey";

-- AlterTable
ALTER TABLE "TextChannel" ALTER COLUMN "categoryid" DROP NOT NULL;

-- AlterTable
ALTER TABLE "VoiceChannel" ALTER COLUMN "categoryid" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TextChannel" ADD CONSTRAINT "TextChannel_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoiceChannel" ADD CONSTRAINT "VoiceChannel_categoryid_fkey" FOREIGN KEY ("categoryid") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
