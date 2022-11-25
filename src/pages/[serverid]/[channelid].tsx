import { GetServerSidePropsContext } from "next";
import { trpc } from "../../utils/trpc";

const ChannelPage = () => {
  return <></>;
};

export default ChannelPage;

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const server = trpc.server.getServerById.useQuery({
    id: ctx.params!.serverid!.toString(),
  });
  if (!server) return { redirect: { destination: "/", persistent: false } };

  return { props: {} };
}
