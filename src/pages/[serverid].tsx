import { Role, Server, TextChannel, User } from "@prisma/client";
import { GetServerSidePropsContext, NextPage } from "next";
import { useEffect, useState } from "react";
import ServerList from "../components/ServerList";
import { trpc } from "../utils/trpc";
import isServerAThing from "./api/v1/getServer";

type Props = {
  server: Server;
};

const ServerPage: NextPage<Props> = ({ server }) => {
  const { data: allData } = trpc.server.getServerById.useQuery({
    id: server.id,
  });
  if (!allData) return <></>;
  return (
    <>
      <>
        {allData.name}
        <ServerList />
      </>
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
