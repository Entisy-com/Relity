-- CreateEnum
CREATE TYPE "Action" AS ENUM ('MESSAGE_DELETE', 'BAN_USER', 'KICK_USER', 'MESSAGE_EDIT', 'MESSAGE_SEND', 'CREATE_VOICE_CHANNEL', 'CREATE_TEXT_CHANNEL', 'DELETE_VOICE_CHANNEL', 'DELETE_TEXT_CHANNEL', 'JOIN_VOICE_CHANNEL', 'LEAVE_VOICE_CHANNEL', 'JOIN_SERVER', 'LEAVE_SERVER');

-- CreateTable
CREATE TABLE "ActionLog" (
    "id" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,

    CONSTRAINT "ActionLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionType" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "action" "Action" NOT NULL,
    "actionlogid" TEXT,

    CONSTRAINT "ActionType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ActionLog" ADD CONSTRAINT "ActionLog_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionType" ADD CONSTRAINT "ActionType_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionType" ADD CONSTRAINT "ActionType_actionlogid_fkey" FOREIGN KEY ("actionlogid") REFERENCES "ActionLog"("id") ON DELETE SET NULL ON UPDATE CASCADE;
