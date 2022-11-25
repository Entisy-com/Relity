import { Server } from "@prisma/client";
import { GetServerSidePropsContext, NextPage } from "next";
import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";
import Router from "next/router";

type Props = {
  params: {
    serverid: string;
  };
};

const ServerPage: NextPage<Props> = ({ params }) => {
  const [server, setServer] = useState<Server>();
  useEffect(() => {
    const server = trpc.server.getServerById.useQuery({
      id: params.serverid,
    });
    if (!server.data) {
      Router.push("/");
    } else {
      setServer(server.data);
    }
  }, [params.serverid]);
  return (
    <>
      <>{server && server.name}</>
    </>
  );
};

export default ServerPage;

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  const server = trpc.server.getServerById.useQuery({
    id: ctx.params!.serverid!.toString(),
  });
  if (!server) return { redirect: { destination: "/", persistent: false } };
  return { props: { server } };
}
