/*
  Warnings:

  - A unique constraint covering the columns `[serverId]` on the table `ActionLog` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ActionLog_serverId_key" ON "ActionLog"("serverId");
