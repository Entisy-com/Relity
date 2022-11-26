/*
  Warnings:

  - Added the required column `status` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OnlineStatus" AS ENUM ('ONLINE', 'AWAY', 'DND', 'OFFLINE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "status" "OnlineStatus" NOT NULL;
