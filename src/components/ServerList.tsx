import type { Server } from "@prisma/client";
import { FC, useEffect, useRef, useState } from "react";
import styles from "../styles/components/serverList.module.scss";
import ServerListItem from "./ServerListItem";
import Image from "next/image";
import Modal from "./modal/Modal";
import ModalInput from "./modal/ModalInput";
import ModalTitle from "./modal/ModalTitle";
import ModalButton from "./modal/ModalButton";
import { trpc } from "../utils/trpc";

type Props = {
  servers: Server[];
};

const ServerList: FC<Props> = ({ servers }) => {
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
        {servers.map((server) => (
          <ServerListItem server={server} key={server.id} />
        ))}
        <div
          className={styles.add_server}
          onClick={() => setCreateServerModalOpen(true)}
        >
          <Image src="/plus.svg" alt="" width={20} height={20} />
        </div>
      </div>
      <Modal open={createServerModalOpen} setOpen={setCreateServerModalOpen}>
        <ModalTitle value="Create a Server" />
        <ModalInput type="text" placeholder="Server Name" rref={nameRef} />
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
