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
      settings: { include: { server: true } },
      actionLog: true,
      serverUserPosition: true,
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
      roles: {
        include: {
          members: true,
          mentionedIn: true,
          server: true,
        },
      },
      textchannel: true,
      voicechannel: true,
    },
  });
  return server;
};

export const isServerMember = async (
  req:
    | NextApiRequest
    | (IncomingMessage & {
        cookies: Partial<{
          [key: string]: string;
        }>;
      }),
  _res: ServerResponse<IncomingMessage>,
  userId: string
) => {
  const url = req.url?.slice(1);
  if (!(url!.toString().length > 0)) return false;
  let serverId;
  if (url?.includes("/")) {
    const params = url.split("/");
    serverId = params[0]?.toString();
  } else {
    serverId = url!.toString();
  }
  const member = await prisma?.member.findFirst({
    where: {
      serverId: serverId,
      userId: userId,
    },
  });
  if (!member) return false;
  return true;
};
