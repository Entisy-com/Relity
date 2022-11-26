import { router } from "../trpc";
import { authRouter } from "./auth";
import { serverRouter } from "./server";
import { channelRouter } from "./channel";
import { messageRouter } from "./message";

export const appRouter = router({
  auth: authRouter,
  server: serverRouter,
  channel: channelRouter,
  message: messageRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
