import type { Server } from "@prisma/client";
import type { Dispatch, FC, SetStateAction } from "react";
import { useState } from "react";
import styles from "../styles/components/serverList.module.scss";
import ServerListItem from "./ServerListItem";
import Image from "next/image";
import Modal from "./modal/Modal";
import ModalInput from "./modal/ModalInput";

type Props = {
  servers: Server[];
  createServerModalOpen: boolean;
  setCreateServerModalOpen: Dispatch<SetStateAction<boolean>>;
};

const ServerList: FC<Props> = ({
  servers,
  createServerModalOpen,
  setCreateServerModalOpen,
}) => {
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
      {createServerModalOpen && (
        <Modal open={createServerModalOpen} setOpen={setCreateServerModalOpen}>
          <ModalInput type="text" placeholder="Server Name" />
        </Modal>
      )}
    </>
  );
};

export default ServerList;
