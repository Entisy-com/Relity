import type { Server } from ".prisma/client";
import type { GetServerSidePropsContext, NextPage } from "next";
import { signOut } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import { trpc } from "../utils/trpc";
import styles from "../styles/pages/index.module.scss";
import ServerList from "../components/ServerList";

const Index: NextPage = () => {
  const serverQuery = trpc.server.getServers.useInfiniteQuery(
    {},
    { getPreviousPageParam: (d) => d.nextCursor }
  );
  const utils = trpc.useContext();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { hasPreviousPage, isFetchingPreviousPage, fetchPreviousPage } =
    serverQuery;
  const [server, setServer] = useState(() => {
    const servers = serverQuery.data?.pages.map((page) => page.servers).flat();
    return servers;
  });
  const addServer = useCallback((incoming?: Server[]) => {
    setServer((current) => {
      const map: Record<Server["id"], Server> = {};
      for (const serv of current ?? []) {
        map[serv.id] = serv;
      }
      for (const serv of incoming ?? []) {
        map[serv.id] = serv;
      }

      return Object.values(map).sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      );
    });
  }, []);
  useEffect(() => {
    const msgs = serverQuery.data?.pages.map((page) => page.servers).flat();
    addServer(msgs);
  }, [serverQuery.data?.pages, addServer]);
  trpc.server.onServerCreate.useSubscription(undefined, {
    onData(server) {
      addServer([server]);
    },
    onError(err) {
      console.error("Subscription error:", err);
      // we might have missed a message - invalidate cache
      utils.server.getServers.invalidate();
    },
  });
  return (
    <div className={styles.wrapper}>
      <ServerList servers={server ?? []} />
      <a href="/settings" className={styles.settings}>
        settings
      </a>
    </div>
  );
};

export default Index;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);
  return !session
    ? { redirect: { destination: "/login", persistent: false } }
    : { props: {} };
}
