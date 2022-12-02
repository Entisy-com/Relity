import type { Server } from "@prisma/client";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/components/serverList.module.scss";
import Image from "next/image";
import Modal from "./modal/Modal";
import ModalInput from "./modal/ModalInput";
import ModalTitle from "./modal/ModalTitle";
import ModalButton from "./modal/ModalButton";
import { trpc } from "../utils/trpc";
import { User } from "next-auth";
import ModalText from "./modal/ModalText";
import ModalFileSelect from "./modal/ModalFileSelect";
import ModalImage from "./modal/ModalImage";
import { useSession } from "next-auth/react";

type Props = {
  user: User;
};

const ServerList: FC<Props> = ({ user }) => {
  const serverQuery = trpc.server.getServers.useInfiniteQuery(
    { userid: user.id },
    { getPreviousPageParam: (d) => d.nextCursor }
  );

  const utils = trpc.useContext();
  const [serverName, setServerName] = useState("");

  const { hasPreviousPage, isFetchingPreviousPage, fetchPreviousPage } =
    serverQuery;

  const [server, setServer] = useState(() => {
    const servers = serverQuery.data?.pages.map((page) => page.servers).flat();
    return servers;
  });
  // TODO: should only add to user of server
  const addServer = useCallback((incoming?: Server[]) => {
    setServer((current) => {
      const map: Record<Server["id"], Server> = {};
      for (const serv of current ?? []) {
        map[serv.id] = serv;
      }
      for (const serv of incoming ?? []) {
        if (serv.ownerid === user.id) map[serv.id] = serv;
      }
      for (const serv of incoming ?? []) {
        for (let u of serv?.users ?? [])
          if (u.id === user.id) map[serv.id] = serv;
      }

      return Object.values(map).sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
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
  trpc.server.onServerUpdate.useSubscription(undefined, {
    onData(server) {
      setServerName(server.name);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.server.getServerById.invalidate();
    },
  });

  const createServer = trpc.server.createServer.useMutation();
  const deleteServer = trpc.server.deleteServer.useMutation();
  const nameRef = useRef<HTMLInputElement>(null);
  const deleteRef = useRef<HTMLInputElement>(null);
  const repeatDeleteRef = useRef<HTMLInputElement>(null);

  function handleCreateServer() {
    if (!nameRef.current) return;
    if (!(nameRef.current.value.trim().length > 0)) return;
    createServer.mutate({ name: nameRef.current.value });
  }

  function handleDeleteServer() {
    if (!deleteRef.current || !repeatDeleteRef.current) return;
    if (
      !(deleteRef.current.value.trim().length > 0) ||
      !(repeatDeleteRef.current.value.trim().length > 0)
    )
      return;
    if (deleteRef.current.value.trim() !== repeatDeleteRef.current.value.trim())
      return;
    if (deleteRef.current.value.trim() !== selectedServer?.name.trim()) return;
    deleteServer.mutate({ id: selectedServer?.id! });
    window.location.href = "/";
  }

  const [createServerModalOpen, setCreateServerModalOpen] = useState(false);
  const [deleteServerModalOpen, setDeleteServerModalOpen] = useState(false);
  const [serverInfoModalOpen, setServerInfoModalOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Server>();

  return (
    <>
      <div className={styles.wrapper}>
        {(server ?? []).map((server) => (
          <div
            key={server.id}
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
            <div className={styles.logo}>
              {server.pfp ? (
                <>
                  {server.pfp.endsWith(".gif") ? (
                    <>
                      <img
                        className={styles.a_pfp}
                        src={server.pfp}
                        alt=""
                        width={40}
                        height={40}
                      />
                      <img
                        className={styles.pfp}
                        src={server.pfp.replace(".gif", ".png")}
                        alt=""
                        width={40}
                        height={40}
                      />
                    </>
                  ) : (
                    <img
                      className={styles.pfp}
                      src={server.pfp}
                      alt=""
                      width={40}
                      height={40}
                    />
                  )}
                </>
              ) : (
                <p>
                  {serverName !== ""
                    ? serverName.substring(0, 2)
                    : server.name.substring(0, 2)}
                </p>
              )}
            </div>
          </div>
        ))}
        <div
          className={styles.add_server}
          onClick={() => setCreateServerModalOpen(true)}
        >
          <Image src="/plus.svg" alt="" width={20} height={20} />
        </div>
      </div>
      <Modal
        onSubmit={() => {
          setCreateServerModalOpen(false);
          handleCreateServer();
        }}
        blur
        darken="3"
        closable
        open={createServerModalOpen}
        setOpen={setCreateServerModalOpen}
      >
        <ModalTitle value="Create a Server" />
        <ModalInput focus placeholder="Server Name" rref={nameRef} />
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
        {selectedServer?.pfp ? (
          <ModalImage size={100} src={selectedServer?.pfp!} />
        ) : (
          <></>
        )}
        <ModalFileSelect
          serverId={selectedServer?.id!}
          value="Set Picture"
          fileType=".png, .jpg, .jpeg"
        />
        <ModalText value="Change Name" />
        <ModalInput focus placeholder="Server Name" rref={nameRef} />
        <ModalButton
          value="Done!"
          onClick={() => {
            setCreateServerModalOpen(false);
            handleCreateServer();
          }}
        />
        <ModalButton
          type="delete"
          value="Delete Server!"
          onClick={() => {
            setServerInfoModalOpen(false);
            setCreateServerModalOpen(false);
            setDeleteServerModalOpen(true);
          }}
        />
      </Modal>
      <Modal
        blur
        darken="3"
        closable
        open={deleteServerModalOpen}
        setOpen={setDeleteServerModalOpen}
      >
        <ModalTitle value={selectedServer?.name!} />
        <ModalInput focus placeholder="Server Name" rref={deleteRef} />
        <ModalInput placeholder="Repeat Server Name" rref={repeatDeleteRef} />
        <ModalButton
          type="delete"
          value="Delete Server!"
          onClick={() => {
            setDeleteServerModalOpen(false);
            handleDeleteServer();
          }}
        />
      </Modal>
    </>
  );
};

export default ServerList;
