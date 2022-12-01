import { router } from "../trpc";
import {
  authRouter,
  textChannelRouter,
  messageRouter,
  serverRouter,
  userRouter,
  voiceChannelRouter,
} from "./";

export const appRouter = router({
  auth: authRouter,
  server: serverRouter,
  textChannel: textChannelRouter,
  voiceChannel: voiceChannelRouter,
  message: messageRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
