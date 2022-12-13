import type { FC } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/components/serverList.module.scss";
import Image from "next/image";
import { trpc } from "../utils/trpc";
import { CDN_UPLOAD_URL, CDN_BASE_URL, LOGGER_URL } from "../utils/constants";
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
import { Droppable } from "react-beautiful-dnd";
import ServerComp from "./Server";
import { User } from "@prisma/client";

type Props = {
  userid: string;
  selectedServerId: string;
  setSelectedServer: Function;
  setServerOpen: Function;
  setTextChannelOpen: Function;
  serverOpen: boolean;
};

const ServerList: FC<Props> = ({
  userid,
  setServerOpen,
  serverOpen,
  selectedServerId,
  setTextChannelOpen,
  setSelectedServer,
}) => {
  const [createServerModalOpen, setCreateServerModalOpen] = useState(false);
  const [deleteServerModalOpen, setDeleteServerModalOpen] = useState(false);
  const [serverInfoModalOpen, setServerInfoModalOpen] = useState(false);

  const { data: user } = trpc.user.getUserById.useQuery({
    id: userid,
  });

  const { data: selectedServer } = trpc.server.getServerById.useQuery({
    id: selectedServerId,
  });

  const { data: servers } = trpc.server.getServersByUserId.useQuery({
    id: userid,
  });

  const utils = trpc.useContext();
  const [isLoaded, setIsLoaded] = useState(false);
  const [serverName, setServerName] = useState("");
  const [serverImage, setServerImage] = useState("");

  const [contextMenuOpen, setContextMenuOpen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

    if (window.location.pathname !== "/") window.location.href = "/";
  }

  async function handleChangeImage(file: File) {
    const formData = new FormData();
    formData.append(file.name, file);

    const { data, status } = await axios.post(
      `${CDN_UPLOAD_URL}/server/pfp`,
      formData
    );

    const pfp = `${CDN_BASE_URL}/server/pfp-${data.message[file.name].md5}.${
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

  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        {isLoaded ? (
          <Droppable
            droppableId="servers"
            type="SERVER"
            mode="standard"
            direction="horizontal"
          >
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {(servers ?? []).map((s, index) => (
                  <ServerComp
                    setTextChannelOpen={setTextChannelOpen}
                    serverOpen={serverOpen}
                    setServerOpen={setServerOpen}
                    key={s.id}
                    server={s}
                    index={index}
                    user={user}
                    setSelectedServer={setSelectedServer}
                    setServerInfoModalOpen={setServerInfoModalOpen}
                    serverImage={serverImage}
                    serverName={serverName}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ) : null}
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
          fileType=".png, .jpg, .jpeg, .gif"
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
