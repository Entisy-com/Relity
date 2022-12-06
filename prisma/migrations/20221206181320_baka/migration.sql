/*
  Warnings:

  - A unique constraint covering the columns `[ownerid]` on the table `Server` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Server" DROP CONSTRAINT "Server_ownerid_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Server_ownerid_key" ON "Server"("ownerid");

-- AddForeignKey
ALTER TABLE "Server" ADD CONSTRAINT "Server_ownerid_fkey" FOREIGN KEY ("ownerid") REFERENCES "Member"("id") ON DELETE CASCADE ON UPDATE CASCADE;
