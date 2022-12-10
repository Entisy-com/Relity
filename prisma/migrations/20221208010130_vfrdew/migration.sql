-- AlterTable
ALTER TABLE "ServerSettings" ADD COLUMN     "logMessageUpdates" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "notifyBan" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "notifyKick" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "notifyUnban" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "UserSettings" ADD COLUMN     "notifyBan" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "notifyKick" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "notifyUnban" BOOLEAN NOT NULL DEFAULT true;
