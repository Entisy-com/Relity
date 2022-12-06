/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import type { FC } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/components/serverList.module.scss";
import Image from "next/image";
import { trpc } from "../utils/trpc";
import type { User } from "next-auth";
import { CDN_API_URL, CDN_BASE_URL, LOGGER_URL } from "../utils/constants";
import axios from "axios";
import {
  Modal,
  ModalButton,
  ModalFileSelect,
  ModalImage,
  ModalInput,
  ModalText,
  ModalTitle,
} from "./modal";
import type { Server } from "../types";

type Props = {
  user: User;
};

const ServerList: FC<Props> = ({ user }) => {
  const [createServerModalOpen, setCreateServerModalOpen] = useState(false);
  const [deleteServerModalOpen, setDeleteServerModalOpen] = useState(false);
  const [serverInfoModalOpen, setServerInfoModalOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Server>();

  const serverQuery = trpc.server.getServers.useInfiniteQuery(
    { userid: user.id },
    { getPreviousPageParam: (d) => d.nextCursor }
  );

  const utils = trpc.useContext();
  const [serverName, setServerName] = useState("");
  const [serverImage, setServerImage] = useState("");

  const { hasPreviousPage, isFetchingPreviousPage, fetchPreviousPage } =
    serverQuery;

  const [contextMenuOpen, setContextMenuOpen] = useState(false);
  const [server, setServer] = useState(() => {
    const servers = serverQuery.data?.pages.map((page) => page.servers).flat();
    return servers ?? [];
  });

  const addServer = useCallback((incoming?: Server[]) => {
    setServer((current) => {
      const map: Record<Server["id"], Server> = {};
      for (const serv of current ?? []) {
        map[serv.id] = serv;
      }
      for (const serv of incoming ?? []) {
        for (const m of serv.members ?? []) {
          if (m.userId === user.id)
            if (m.id === serv.ownerid) map[serv.id] = serv;
        }
      }
      for (const serv of incoming ?? []) {
        for (const m of serv.members ?? [])
          if (m.userId === user.id) map[serv.id] = serv;
      }

      return Object.values(map).sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    });
  }, []);
  const removeServer = useCallback((incoming: Server) => {
    setServer((current) => {
      const map: Record<Server["id"], Server> = {};
      for (const serv of current ?? []) {
        if (serv.id !== incoming.id) map[serv.id] = serv;
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
      utils.server.getServers.invalidate();
    },
  });
  trpc.server.onServerUpdate.useSubscription(undefined, {
    onData(server) {
      if (server.id === selectedServer?.id) setServerName(server.name);
      setServerImage(serverImage);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.server.getServerById.invalidate();
    },
  });
  trpc.server.onServerDelete.useSubscription(undefined, {
    onData(server) {
      removeServer(server);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.server.getServerById.invalidate();
    },
  });

  const createServer = trpc.server.createServer.useMutation();
  const deleteServer = trpc.server.deleteServer.useMutation();
  const updateServer = trpc.server.updateServer.useMutation();
  const nameRef = useRef<HTMLInputElement>(null);
  const deleteRef = useRef<HTMLInputElement>(null);
  const repeatDeleteRef = useRef<HTMLInputElement>(null);

  function handleCreateServer() {
    if (!nameRef.current) return;
    if (!(nameRef.current.value.trim().length > 0)) return;
    createServer.mutate({ name: nameRef.current.value });
    axios.post(`${LOGGER_URL}`, {
      message: `Created server "${nameRef.current.value}"`,
    });
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
    axios.post(`${LOGGER_URL}`, {
      message: `Deleted server "${deleteRef.current.value}"`,
    });
    deleteServer.mutate({ id: selectedServer?.id! });

    window.location.href = "/";
  }

  async function handleChangeImage(file: File) {
    const formData = new FormData();
    formData.append(file.name, file);

    const { data, status } = await axios.post(
      `${CDN_API_URL}/upload`,
      formData
    );

    const pfp = `${CDN_BASE_URL}/${data.message[file.name].md5}.${
      data.message[file.name].name.split(".")[1]
    }`;

    if (status === 200) {
      updateServer.mutate({
        id: selectedServer?.id!,
        pfp: pfp,
      });
    }
    setServerImage(pfp);
    axios.post(`${LOGGER_URL}`, {
      message: `Updated server Icon on "${selectedServer?.name}"`,
    });
  }

  return (
    <>
      <div className={styles.wrapper}>
        {(server ?? []).map((server) => (
          <div
            key={server.id}
            className={styles.server}
            onClick={(e) => {
              window.location.href = `/${server.id}`;
              e.preventDefault();
              setSelectedServer(server);
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
              {serverImage !== "" ? (
                <>
                  {serverImage.endsWith(".gif") ? (
                    <>
                      <img
                        className={styles.a_pfp}
                        src={serverImage}
                        alt=""
                        width={40}
                        height={40}
                      />
                      <img
                        className={styles.pfp}
                        src={serverImage.replace(".gif", ".png")}
                        alt=""
                        width={40}
                        height={40}
                      />
                    </>
                  ) : (
                    <img
                      className={styles.pfp}
                      src={serverImage}
                      alt=""
                      width={40}
                      height={40}
                    />
                  )}
                </>
              ) : server.pfp ? (
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
        {serverImage !== "" ? (
          <ModalImage size={100} src={serverImage!} />
        ) : selectedServer?.pfp ? (
          <ModalImage size={100} src={selectedServer?.pfp!} />
        ) : (
          <></>
        )}

        <ModalFileSelect
          serverId={selectedServer?.id!}
          value="Set Picture"
          fileType=".png, .jpg, .jpeg"
          onChange={(file) => {
            handleChangeImage(file);
          }}
        />
        <ModalText value="Change Name" />
        <ModalInput focus placeholder="Server Name" rref={nameRef} />
        <ModalButton
          value="Done!"
          onClick={() => {
            if (!nameRef.current) return;
            if (!(nameRef.current.value.trim().length > 0)) return;
            updateServer.mutate({
              id: selectedServer?.id!,
              name: nameRef.current.value,
            });
            setServerInfoModalOpen(false);

            axios.post(`${LOGGER_URL}`, {
              message: `Changed server name from "${selectedServer?.name}" to "${nameRef.current.value}"`,
            });
          }}
        />
        <ModalButton
          type="delete"
          value="Delete Server!"
          onClick={() => {
            setServerInfoModalOpen(false);
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
