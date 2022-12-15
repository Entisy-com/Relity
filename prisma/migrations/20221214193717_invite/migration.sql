-- CreateTable
CREATE TABLE "Invite" (
    "id" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "uses" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Invite_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
