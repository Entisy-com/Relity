import { createWSClient } from "@trpc/client";

const wsClient = createWSClient({
  url: process.env.NEXT_PUBLIC_WS_URL_DEV || "ws://localhost:3001",
});
