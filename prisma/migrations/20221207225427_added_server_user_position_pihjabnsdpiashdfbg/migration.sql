-- CreateTable
CREATE TABLE "ServerUserPosition" (
    "id" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ServerUserPosition_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ServerUserPosition" ADD CONSTRAINT "ServerUserPosition_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServerUserPosition" ADD CONSTRAINT "ServerUserPosition_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
