import type { GetServerSidePropsContext, NextPage } from "next";
import Profile from "../components/Profile";
import ServerList from "../components/ServerList";
import { trpc } from "../utils/trpc";
import { isServerAThing } from "./api/v1/getServer";
import styles from "../styles/pages/[serverid].module.scss";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import ServerInfo from "../components/ServerInfo";
import type { Server, User } from "../types";

type Props = {
  server: Server;
  user: User;
};

const ServerPage: NextPage<Props> = ({ server, user }) => {
  const { data: allData } = trpc.server.getServerById.useQuery({
    id: server.id,
  });

  if (!allData) return <></>;
  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        <ServerInfo server={allData} />
        <Profile user={user} />
        <ServerList user={user} />
      </div>
    </>
  );
};

export default ServerPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const server = await isServerAThing(ctx.req, ctx.res);
  const session = await getServerAuthSession(ctx);
  return server
    ? {
        props: {
          server: JSON.parse(JSON.stringify(server)),
          user: session?.user,
        },
      }
    : { redirect: { destination: "/", persistent: false } };
}
