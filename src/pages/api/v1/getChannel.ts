import { type NextApiRequest, type NextApiResponse } from "next";
import { trpc } from "../../../utils/trpc";
import { IncomingMessage, ServerResponse } from "http";

import { getServerAuthSession } from "../../../server/common/get-server-auth-session";

const isChannelAThing = async (
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

  const server = await prisma?.textChannel.findUnique({
    where: { id: channelId },
  });
  return server;
};

export default isChannelAThing;
