/*
  Warnings:

  - You are about to drop the `_members` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `serverId` to the `Member` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_members" DROP CONSTRAINT "_members_A_fkey";

-- DropForeignKey
ALTER TABLE "_members" DROP CONSTRAINT "_members_B_fkey";

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "serverId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_members";

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE CASCADE ON UPDATE CASCADE;
