import { router } from "../trpc";
import {
  textChannelRouter,
  messageRouter,
  serverRouter,
  userRouter,
  voiceChannelRouter,
  rolesRouter,
  memberRouter,
  actionlogRouter,
  friendRequestRouter,
  inviteRouter,
} from "./";
import { notificationRouter } from "./notification";

export const appRouter = router({
  server: serverRouter,
  textChannel: textChannelRouter,
  voiceChannel: voiceChannelRouter,
  message: messageRouter,
  user: userRouter,
  roles: rolesRouter,
  members: memberRouter,
  actionLog: actionlogRouter,
  friendRequest: friendRequestRouter,
  notification: notificationRouter,
  invite: inviteRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
