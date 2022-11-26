import { Server, TextChannel } from "@prisma/client";
import { GetServerSidePropsContext, NextPage } from "next";
import ServerList from "../../components/ServerList";
import isChannelAThing from "../api/v1/getChannel";
import isServerAThing from "../api/v1/getServer";

type Props = {
  server: Server;
  channel: TextChannel;
};

const ChannelPage: NextPage<Props> = ({ server, channel }) => {
  return (
    <>
      <ServerList />
    </>
  );
};

export default ChannelPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const server = await isServerAThing(ctx.req, ctx.res);
  const channel = await isChannelAThing(ctx.req, ctx.res);
  if (!server) return { redirect: { destination: "/", persistent: false } };
  if (!channel)
    return { redirect: { destination: `/${server.id}`, persistent: false } };

  return {
    props: {
      server: JSON.parse(JSON.stringify(server)),
      channel: JSON.parse(JSON.stringify(channel)),
    },
  };
}
