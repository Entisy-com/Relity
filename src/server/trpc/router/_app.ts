import { router } from "../trpc";
import {
  textChannelRouter,
  messageRouter,
  serverRouter,
  userRouter,
  voiceChannelRouter,
  rolesRouter,
} from "./";

export const appRouter = router({
  server: serverRouter,
  textChannel: textChannelRouter,
  voiceChannel: voiceChannelRouter,
  message: messageRouter,
  user: userRouter,
  roles: rolesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
