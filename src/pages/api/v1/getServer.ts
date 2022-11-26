import { type NextApiRequest, type NextApiResponse } from "next";
import { trpc } from "../../../utils/trpc";
import { IncomingMessage, ServerResponse } from "http";

import { getServerAuthSession } from "../../../server/common/get-server-auth-session";

const isServerAThing = async (
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
  let serverId;
  if (url?.includes("/")) {
    const params = url.split("/");
    serverId = params[0]?.toString();
  }
  serverId = url!.toString();
  const server = await prisma?.server.findUnique({ where: { id: serverId } });
  return server;
};

export default isServerAThing;
