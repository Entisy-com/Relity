import { router } from "../trpc";
import { authRouter } from "./auth";
import { serverRouter } from "./server";

export const appRouter = router({
  auth: authRouter,
  server: serverRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
