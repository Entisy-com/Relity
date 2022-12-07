/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { type NextApiRequest } from "next";
import type { IncomingMessage, ServerResponse } from "http";

export const isServerAThing = async (
  req:
    | NextApiRequest
    | (IncomingMessage & {
        cookies: Partial<{
          [key: string]: string;
        }>;
      }),
  _res: ServerResponse<IncomingMessage>
) => {
  const url = req.url?.slice(1);
  if (!(url!.toString().length > 0)) return undefined;
  let serverId;
  if (url?.includes("/")) {
    const params = url.split("/");
    serverId = params[0]?.toString();
  } else {
    serverId = url!.toString();
  }
  const server = await prisma?.server.findUnique({
    where: { id: serverId },
    include: {
      members: {
        include: {
          actionType: true,
          mentionedIn: true,
          messages: true,
          ownerOf: true,
          roles: true,
          server: true,
          user: true,
          voiceChannel: true,
        },
      },
      owner: true,
      bannedUser: true,
      categories: true,
      roles: true,
      textchannel: true,
      voicechannel: true,
    },
  });
  return server;
};
