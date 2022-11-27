import type { Server, Session } from "@prisma/client";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/components/serverList.module.scss";
import Image from "next/image";
import Modal from "./modal/Modal";
import ModalInput from "./modal/ModalInput";
import ModalTitle from "./modal/ModalTitle";
import ModalButton from "./modal/ModalButton";
import { trpc } from "../utils/trpc";
import { useSession } from "next-auth/react";
import { User } from "next-auth";
import ModalText from "./modal/ModalText";

type Props = {
  user: User;
};

const ServerList: FC<Props> = ({ user }) => {
  const serverQuery = trpc.server.getServers.useInfiniteQuery(
    { userid: user.id },
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
    // const { data: allData } = trpc.server.getServerById({
    //   id: incoming![incoming!.length - 1]?.id,
    // });
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
    const servers = serverQuery.data?.pages.map((page) => page.servers).flat();
    addServer(servers);
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

  const [serverInfoModalOpen, setServerInfoModalOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Server>();

  return (
    <>
      <div className={styles.wrapper}>
        {(server ?? []).map((server) => (
          <>
            <div
              className={styles.server}
              onClick={() => {
                window.location.href = `/${server.id}`;
              }}
              onContextMenu={(e) => {
                if (server.ownerid === user.id) {
                  e.preventDefault();
                  setSelectedServer(server);
                  setServerInfoModalOpen(true);
                }
              }}
            >
              {server.ownerid === user.id ? (
                <img
                  className={styles.crown}
                  src="/crown.svg"
                  alt=""
                  width={30}
                  height={30}
                />
              ) : (
                <></>
              )}
              <p className={styles.logo}>{server.name.substring(0, 2)}</p>
            </div>
          </>
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
      <Modal
        blur
        darken="3"
        closable
        open={serverInfoModalOpen}
        setOpen={setServerInfoModalOpen}
      >
        <ModalTitle value={selectedServer?.name!} />
        <ModalText value="Change Name" />
        {/*  mach das man das nur machen kann wenn man owner ist und mach mal rechtsklick auf das server icon unten */}
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
