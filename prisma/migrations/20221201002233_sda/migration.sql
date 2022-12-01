/*
  Warnings:

  - The values [READ,KICK,BAN] on the enum `Permission` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Permission_new" AS ENUM ('BAN_MEMBERS', 'KICK_MEMBERS', 'MANAGE_MEMBERS', 'MANAGE_MESSAGES', 'MANAGE_SERVER', 'READ_MESSAGES', 'SEND_MESSAGES');
ALTER TABLE "TextChannel" ALTER COLUMN "permissions" TYPE "Permission_new"[] USING ("permissions"::text::"Permission_new"[]);
ALTER TABLE "VoiceChannel" ALTER COLUMN "permissions" TYPE "Permission_new"[] USING ("permissions"::text::"Permission_new"[]);
ALTER TABLE "Category" ALTER COLUMN "permissions" TYPE "Permission_new"[] USING ("permissions"::text::"Permission_new"[]);
ALTER TABLE "Role" ALTER COLUMN "permissions" TYPE "Permission_new"[] USING ("permissions"::text::"Permission_new"[]);
ALTER TYPE "Permission" RENAME TO "Permission_old";
ALTER TYPE "Permission_new" RENAME TO "Permission";
DROP TYPE "Permission_old";
COMMIT;
