/*
  Warnings:

  - You are about to drop the column `userId` on the `ActionType` table. All the data in the column will be lost.
  - You are about to drop the column `memberId` on the `Server` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Server` table. All the data in the column will be lost.
  - You are about to drop the column `serverId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `voicechannelid` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_RoleToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ServerToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `memberId` to the `ActionType` table without a default value. This is not possible if the table is not empty.
  - Made the column `actionlogid` on table `ActionType` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `voiceChannelId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ActionType" DROP CONSTRAINT "ActionType_actionlogid_fkey";

-- DropForeignKey
ALTER TABLE "ActionType" DROP CONSTRAINT "ActionType_userId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Server" DROP CONSTRAINT "Server_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_voicechannelid_fkey";

-- DropForeignKey
ALTER TABLE "_RoleToUser" DROP CONSTRAINT "_RoleToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoleToUser" DROP CONSTRAINT "_RoleToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_ServerToUser" DROP CONSTRAINT "_ServerToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ServerToUser" DROP CONSTRAINT "_ServerToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_mentions" DROP CONSTRAINT "_mentions_A_fkey";

-- DropForeignKey
ALTER TABLE "_mentions" DROP CONSTRAINT "_mentions_B_fkey";

-- AlterTable
ALTER TABLE "ActionType" DROP COLUMN "userId",
ADD COLUMN     "memberId" TEXT NOT NULL,
ALTER COLUMN "actionlogid" SET NOT NULL;

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "voiceChannelId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Server" DROP COLUMN "memberId",
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "serverId",
DROP COLUMN "voicechannelid";

-- DropTable
DROP TABLE "_RoleToUser";

-- DropTable
DROP TABLE "_ServerToUser";

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "pfp" TEXT NOT NULL DEFAULT '',
    "banner" TEXT NOT NULL DEFAULT '',
    "nickname" TEXT NOT NULL DEFAULT '',
    "voiceChannelId" TEXT,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MemberToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_members" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MemberToRole_AB_unique" ON "_MemberToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_MemberToRole_B_index" ON "_MemberToRole"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_members_AB_unique" ON "_members"("A", "B");

-- CreateIndex
CREATE INDEX "_members_B_index" ON "_members"("B");

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_voiceChannelId_fkey" FOREIGN KEY ("voiceChannelId") REFERENCES "VoiceChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Server" ADD CONSTRAINT "Server_ownerid_fkey" FOREIGN KEY ("ownerid") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_voiceChannelId_fkey" FOREIGN KEY ("voiceChannelId") REFERENCES "VoiceChannel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionType" ADD CONSTRAINT "ActionType_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "Member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionType" ADD CONSTRAINT "ActionType_actionlogid_fkey" FOREIGN KEY ("actionlogid") REFERENCES "ActionLog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemberToRole" ADD CONSTRAINT "_MemberToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MemberToRole" ADD CONSTRAINT "_MemberToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_members" ADD CONSTRAINT "_members_A_fkey" FOREIGN KEY ("A") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_members" ADD CONSTRAINT "_members_B_fkey" FOREIGN KEY ("B") REFERENCES "Server"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mentions" ADD CONSTRAINT "_mentions_A_fkey" FOREIGN KEY ("A") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mentions" ADD CONSTRAINT "_mentions_B_fkey" FOREIGN KEY ("B") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;
