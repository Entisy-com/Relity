import type { Server } from "@prisma/client";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/components/serverList.module.scss";
import ServerListItem from "./ServerListItem";
import Image from "next/image";
import Modal from "./modal/Modal";
import ModalInput from "./modal/ModalInput";
import ModalTitle from "./modal/ModalTitle";
import ModalButton from "./modal/ModalButton";
import { trpc } from "../utils/trpc";
import Profile from "./Profile";

const ServerList: FC = () => {
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
  const [createServerModalOpen, setCreateServerModalOpen] = useState(false);

  const createServer = trpc.server.createServer.useMutation();
  const nameRef = useRef<HTMLInputElement>(null);

  function handleCreateServer() {
    if (!nameRef.current) return;
    if (!(nameRef.current.value.trim().length > 0)) return;
    createServer.mutate({ name: nameRef.current.value });
  }

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode !== 27 && e.key !== "Escape") return;
      setCreateServerModalOpen(false);
    });
  }, [createServerModalOpen, setCreateServerModalOpen]);

  return (
    <>
      <div className={styles.wrapper}>
        {(server ?? []).map((server) => (
          <ServerListItem server={server} key={server.id} />
        ))}
        <div
          className={styles.add_server}
          onClick={() => setCreateServerModalOpen(true)}
        >
          <Image src="/plus.svg" alt="" width={20} height={20} />
        </div>
      </div>
      <Modal
        blur
        darken="3"
        closable
        open={createServerModalOpen}
        setOpen={setCreateServerModalOpen}
      >
        <ModalTitle value="Create a Server" />
        <ModalInput placeholder="Server Name" rref={nameRef} />
        <ModalButton
          value="Create!"
          onClick={() => {
            setCreateServerModalOpen(false);
            handleCreateServer();
          }}
        />
      </Modal>
    </>
  );
};

export default ServerList;
