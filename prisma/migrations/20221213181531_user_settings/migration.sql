-- AlterTable
ALTER TABLE "UserSettings" ADD COLUMN     "status" "OnlineStatus" NOT NULL DEFAULT 'ONLINE',
ADD COLUMN     "statusText" TEXT NOT NULL DEFAULT '';
