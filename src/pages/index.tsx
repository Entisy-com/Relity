import type { Server } from ".prisma/client";
import type { GetServerSidePropsContext, NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import { trpc } from "../utils/trpc";
import styles from "../styles/pages/index.module.scss";
import ServerList from "../components/ServerList";
import Profile from "../components/Profile";

const Index: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Profile />
      <ServerList />
    </div>
  );
};

export default Index;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);
  return !session
    ? { redirect: { destination: "/login", persistent: false } }
    : { props: {} };
}
