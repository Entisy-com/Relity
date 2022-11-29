import { authRouter } from "./auth";
import { textChannelRouter } from "./textChannel";
import { voiceChannelRouter } from "./voiceChannel";
import { messageRouter } from "./message";
import { serverRouter } from "./server";
import { userRouter } from "./user";

export {
  messageRouter,
  textChannelRouter,
  voiceChannelRouter,
  userRouter,
  serverRouter,
  authRouter,
};
