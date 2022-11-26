import { Role, Server, TextChannel, User } from "@prisma/client";
import { GetServerSidePropsContext, NextPage } from "next";
import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import ServerList from "../components/ServerList";
import { trpc } from "../utils/trpc";
import isServerAThing from "./api/v1/getServer";
import styles from "../styles/pages/[serverid].module.scss";
import UserList from "../components/UserList";
import Modal from "../components/modal/Modal";
import ModalTitle from "../components/modal/ModalTitle";
import ModalButton from "../components/modal/ModalButton";

type Props = {
  server: Server;
};

const ServerPage: NextPage<Props> = ({ server }) => {
  const [serverOptionsModalOpen, setServerOptionsModalOpen] = useState(false);

  const { data: allData } = trpc.server.getServerById.useQuery({
    id: server.id,
  });

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode !== 27 && e.key !== "Escape") return;
      setServerOptionsModalOpen(false);
    });
  }, [serverOptionsModalOpen, setServerOptionsModalOpen]);

  if (!allData) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.server_stuff}>
          <p
            onClick={() => setServerOptionsModalOpen(true)}
            className={styles.server_name}
          >
            {allData.name}
          </p>
        </div>
        <Profile />
        <ServerList />
        <UserList type="server" users={allData.users} />
      </div>
      <Modal
        open={serverOptionsModalOpen}
        setOpen={setServerOptionsModalOpen}
        blur
        darken
        closable
      >
        <ModalTitle value={allData.name} />
        <ModalButton
          value="Settings"
          onClick={() => (window.location.href = `${allData.id}/settings`)}
        />
      </Modal>
    </>
  );
};

export default ServerPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const server = await isServerAThing(ctx.req, ctx.res);
  return server
    ? {
        props: {
          server: JSON.parse(JSON.stringify(server)),
        },
      }
    : { redirect: { destination: "/", persistent: false } };
}
