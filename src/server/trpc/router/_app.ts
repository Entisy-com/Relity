import { router } from "../trpc";
import {
  authRouter,
  channelRouter,
  messageRouter,
  serverRouter,
  userRouter,
} from "./";

export const appRouter = router({
  auth: authRouter,
  server: serverRouter,
  channel: channelRouter,
  message: messageRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
