import { Server, TextChannel } from "@prisma/client";
import { GetServerSidePropsContext, NextPage } from "next";
import { useSession } from "next-auth/react";
import ServerInfo from "../../components/ServerInfo";
import ServerList from "../../components/ServerList";
import Profile from "../../components/Profile";
import { trpc } from "../../utils/trpc";
import { isChannelAThing } from "../api/v1/getChannel";
import { isServerAThing } from "../api/v1/getServer";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import ModalTitle from "../../components/modal/ModalTitle";
import ModalText from "../../components/modal/ModalText";
import ModalButton from "../../components/modal/ModalButton";

type Props = {
  server: Server;
  channel: TextChannel;
};

const ChannelPage: NextPage<Props> = ({ server, channel }) => {
  const [serverUserInfoModalOpen, setServerUserInfoModalOpen] = useState(false);

  const session = useSession();
  const user = session.data?.user;

  const { data: allData } = trpc.server.getServerById.useQuery({
    id: server.id,
  });

  if (!allData) return <></>;
  if (!user) return <></>;

  return (
    <>
      <ServerInfo server={allData} />
      <Profile />
      <ServerList user={user} />
      <Modal
        blur
        closable
        open={serverUserInfoModalOpen}
        setOpen={setServerUserInfoModalOpen}
      >
        <ModalTitle value={user?.name ? `Name: ${user.name}` : ""} />
        <ModalText value={`Id: ${user?.id}`} />
        <ModalText value={user?.email ? `Email: ${user.email}` : ""} />
        <ModalButton
          value="Settings"
          onClick={() => (window.location.href = "/settings")}
        />
      </Modal>
    </>
  );
};

export default ChannelPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const server = await isServerAThing(ctx.req, ctx.res);
  const channel = await isChannelAThing(ctx.req, ctx.res);

  if (!server) return { redirect: { destination: "/", persistent: false } };
  if (!channel)
    return { redirect: { destination: `/${server!.id}`, persistent: false } };

  return {
    props: {
      server: JSON.parse(JSON.stringify(server)),
      channel: JSON.parse(JSON.stringify(channel)),
    },
  };
}
