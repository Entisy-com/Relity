import type { Server } from ".prisma/client";
import type { GetServerSidePropsContext, NextPage } from "next";
import { signOut } from "next-auth/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import { trpc } from "../utils/trpc";
import styles from "../styles/pages/index.module.scss";
import ServerList from "../components/ServerList";

const Index: NextPage = () => {
  const createServer = trpc.server.createServer.useMutation();
  const nameRef = useRef<HTMLInputElement>(null);
  function handleCreateServer() {
    if (!nameRef.current) return;
    if (!(nameRef.current.value.trim().length > 0)) return;
    createServer.mutate({ name: nameRef.current.value });
  }
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
        (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
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
  const [createServerModalOpen, setCreateServerModalOpen] = useState(false);
  return (
    <div
      onClick={() => {
        if (createServerModalOpen) setCreateServerModalOpen(false);
      }}
    >
      <ServerList
        createServerModalOpen={createServerModalOpen}
        setCreateServerModalOpen={setCreateServerModalOpen}
        servers={server ?? []}
      />
      <div className={styles.servers}></div>
      <form>
        <input ref={nameRef} />
        <button
          onClick={() => {
            handleCreateServer();
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            nameRef.current!.value = "";
          }}
        >
          +
        </button>
      </form>
      <p className={styles.signout} onClick={() => signOut()}>
        logout
      </p>
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
