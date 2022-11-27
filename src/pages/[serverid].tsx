import { Role, Server, TextChannel, User } from "@prisma/client";
import { GetServerSidePropsContext, NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Profile from "../components/Profile";
import ServerList from "../components/ServerList";
import { trpc } from "../utils/trpc";
import { isServerAThing } from "./api/v1/getServer";
import styles from "../styles/pages/[serverid].module.scss";
import UserList from "../components/UserList";
import Modal from "../components/modal/Modal";
import ModalTitle from "../components/modal/ModalTitle";
import ModalButton from "../components/modal/ModalButton";
import ChannelList from "../components/ChannelList";
import { useSession } from "next-auth/react";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import ModalText from "../components/modal/ModalText";
import ModalInput from "../components/modal/ModalInput";
import ServerInfo from "../components/ServerInfo";

type Props = {
  server: Server;
  user: User;
};

const ServerPage: NextPage<Props> = ({ server, user }) => {
  const { data: allData } = trpc.server.getServerById.useQuery({
    id: server.id,
  });

  if (!allData) return <></>;
  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        <ServerInfo server={allData} />
        <Profile />
        <ServerList user={user} />
      </div>
    </>
  );
};

export default ServerPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const server = await isServerAThing(ctx.req, ctx.res);
  const session = await getServerAuthSession(ctx);
  return server
    ? {
        props: {
          server: JSON.parse(JSON.stringify(server)),
          user: session?.user!,
        },
      }
    : { redirect: { destination: "/", persistent: false } };
}
