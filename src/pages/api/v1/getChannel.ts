import { type NextApiRequest, type NextApiResponse } from "next";
import { trpc } from "../../../utils/trpc";
import { IncomingMessage, ServerResponse } from "http";

import { getServerAuthSession } from "../../../server/common/get-server-auth-session";

export const isChannelAThing = async (
  req:
    | NextApiRequest
    | (IncomingMessage & {
        cookies: Partial<{
          [key: string]: string;
        }>;
      }),
  res: ServerResponse<IncomingMessage>
) => {
  const url = req.url?.slice(1);
  if (!(url!.toString().length > 0)) return undefined;
  if (!url?.includes("/")) return undefined;
  const params = url.split("/");
  const channelId = params[1]?.toString();
  const channel = await prisma?.textChannel.findUnique({
    where: { id: channelId },
  });
  return channel;
};

export const isChannelInviteAThing = async (
  req:
    | NextApiRequest
    | (IncomingMessage & {
        cookies: Partial<{
          [key: string]: string;
        }>;
      }),
  res: ServerResponse<IncomingMessage>
) => {
  const url = req.url?.slice(1);
  if (!(url!.toString().length > 0)) return undefined;
  if (!url?.includes("/")) return undefined;
  const params = url.split("/");
  const serverId = params[1]?.toString();
  const channel = await prisma?.server.findUnique({
    where: { id: serverId },
  });
  return channel;
};
