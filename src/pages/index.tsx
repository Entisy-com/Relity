import type { Server, User } from ".prisma/client";
import type { GetServerSidePropsContext, NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import { trpc } from "../utils/trpc";
import styles from "../styles/pages/index.module.scss";
import ServerList from "../components/ServerList";
import Profile from "../components/Profile";

type Props = {
  user: User;
};

const Index: NextPage<Props> = ({ user }) => {
  return (
    <div className={styles.wrapper}>
      <Profile />
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
