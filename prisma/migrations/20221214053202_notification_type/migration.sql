/*
  Warnings:

  - Added the required column `notificationType` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('FRIEND_REQUEST_SENT', 'FRIEND_REQUEST_RECEIVED', 'FRIEND_REQUEST_ACCEPTED', 'FRIEND_REQUEST_DECLINED', 'BANNED_FROM_SERVER', 'KICKED_FROM_SERVER', 'UNBANNED_FROM_SERVER');

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "notificationType" "NotificationType" NOT NULL;
