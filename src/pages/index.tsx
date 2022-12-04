import { OnlineStatus, Server, User } from ".prisma/client";
import type { GetServerSidePropsContext, NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import { trpc } from "../utils/trpc";
import styles from "../styles/pages/index.module.scss";
import ServerList from "../components/ServerList";
import Profile from "../components/Profile";
import ModalDropdown from "../components/modal/ModalDropdown";
import axios from "axios";
import { HEARTBEAT_URL } from "../utils/constants";

type Props = {
  user: User;
};

const Index: NextPage<Props> = ({ user }) => {
  const updateUser = trpc.user.updateUser.useMutation();

  // if (user) {
  //   setInterval(async () => {
  //     console.log("Sending Heartbeat");
  //     const res = await axios.get(HEARTBEAT_URL);
  //     if (res.status === 200) {
  //       updateUser.mutate({
  //         id: user.id!,
  //         status: OnlineStatus.ONLINE,
  //       });
  //     } else {
  //       updateUser.mutate({
  //         id: user.id!,
  //         status: OnlineStatus.OFFLINE,
  //       });
  //       console.log("Failed to send Heartbeat");
  //     }
  //   }, 10 * 1000);
  // }

  return (
    <div className={styles.wrapper}>
      <Profile user={user} />
      <ServerList user={user} />
    </div>
  );
};

export default Index;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);
  return !session
    ? { redirect: { destination: "/login", persistent: false } }
    : { props: { user: session.user } };
}
