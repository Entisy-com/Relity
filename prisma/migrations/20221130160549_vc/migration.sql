-- AlterTable
ALTER TABLE "User" ADD COLUMN     "voicechannelid" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_voicechannelid_fkey" FOREIGN KEY ("voicechannelid") REFERENCES "VoiceChannel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
