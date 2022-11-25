/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `AdminUser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Message` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Server` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Session` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `TextChannel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "AdminUser" DROP CONSTRAINT "AdminUser_userid_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_textChannelId_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_serverid_fkey";

-- DropForeignKey
ALTER TABLE "Server" DROP CONSTRAINT "Server_ownerid_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "TextChannel" DROP CONSTRAINT "TextChannel_serverid_fkey";

-- DropForeignKey
ALTER TABLE "_MessageToRole" DROP CONSTRAINT "_MessageToRole_A_fkey";

-- DropForeignKey
ALTER TABLE "_MessageToRole" DROP CONSTRAINT "_MessageToRole_B_fkey";

-- DropForeignKey
ALTER TABLE "_bannedusers" DROP CONSTRAINT "_bannedusers_A_fkey";

-- DropForeignKey
ALTER TABLE "_bannedusers" DROP CONSTRAINT "_bannedusers_B_fkey";

-- DropForeignKey
ALTER TABLE "_mentions" DROP CONSTRAINT "_mentions_A_fkey";

-- DropForeignKey
ALTER TABLE "_mentions" DROP CONSTRAINT "_mentions_B_fkey";

-- DropForeignKey
ALTER TABLE "_users" DROP CONSTRAINT "_users_A_fkey";

-- DropForeignKey
ALTER TABLE "_users" DROP CONSTRAINT "_users_B_fkey";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Account_id_seq";

-- AlterTable
ALTER TABLE "AdminUser" DROP CONSTRAINT "AdminUser_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userid" SET DATA TYPE TEXT,
ADD CONSTRAINT "AdminUser_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "AdminUser_id_seq";

-- AlterTable
ALTER TABLE "Message" DROP CONSTRAINT "Message_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "authorId" SET DATA TYPE TEXT,
ALTER COLUMN "textChannelId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Message_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Message_id_seq";

-- AlterTable
ALTER TABLE "Role" DROP CONSTRAINT "Role_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "serverid" SET DATA TYPE TEXT,
ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Role_id_seq";

-- AlterTable
ALTER TABLE "Server" DROP CONSTRAINT "Server_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "ownerid" SET DATA TYPE TEXT,
ADD CONSTRAINT "Server_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Server_id_seq";

-- AlterTable
ALTER TABLE "Session" DROP CONSTRAINT "Session_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Session_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Session_id_seq";

-- AlterTable
ALTER TABLE "TextChannel" DROP CONSTRAINT "TextChannel_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "serverid" SET DATA TYPE TEXT,
ADD CONSTRAINT "TextChannel_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "TextChannel_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "_MessageToRole" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_bannedusers" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_mentions" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_users" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "AdminUser" ADD CONSTRAINT "AdminUser_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TextChannel" ADD CONSTRAINT "TextChannel_serverid_fkey" FOREIGN KEY ("serverid") REFERENCES "Server"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_textChannelId_fkey" FOREIGN KEY ("textChannelId") REFERENCES "TextChannel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_serverid_fkey" FOREIGN KEY ("serverid") REFERENCES "Server"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Server" ADD CONSTRAINT "Server_ownerid_fkey" FOREIGN KEY ("ownerid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MessageToRole" ADD CONSTRAINT "_MessageToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MessageToRole" ADD CONSTRAINT "_MessageToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mentions" ADD CONSTRAINT "_mentions_A_fkey" FOREIGN KEY ("A") REFERENCES "Message"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_mentions" ADD CONSTRAINT "_mentions_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_users" ADD CONSTRAINT "_users_A_fkey" FOREIGN KEY ("A") REFERENCES "Server"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_users" ADD CONSTRAINT "_users_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bannedusers" ADD CONSTRAINT "_bannedusers_A_fkey" FOREIGN KEY ("A") REFERENCES "Server"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bannedusers" ADD CONSTRAINT "_bannedusers_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
