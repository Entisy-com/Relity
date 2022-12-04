import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.scss";
import { useEffect } from "react";
import axios from "axios";
import { HEARTBEAT_URL } from "../utils/constants";
import { OnlineStatus } from "@prisma/client";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  });

  return (
    <SessionProvider session={session} basePath="/api/v1/auth">
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
