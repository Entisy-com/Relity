-- CreateTable
CREATE TABLE "ServerSettings" (
    "id" TEXT NOT NULL,
    "serverid" TEXT NOT NULL,
    "logRoleUpdates" BOOLEAN NOT NULL DEFAULT true,
    "logMemberUpdates" BOOLEAN NOT NULL DEFAULT true,
    "logChannelUpdates" BOOLEAN NOT NULL DEFAULT true,
    "logMessages" BOOLEAN NOT NULL DEFAULT false,
    "logJoinLeave" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ServerSettings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServerSettings_serverid_key" ON "ServerSettings"("serverid");

-- AddForeignKey
ALTER TABLE "ServerSettings" ADD CONSTRAINT "ServerSettings_serverid_fkey" FOREIGN KEY ("serverid") REFERENCES "Server"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
