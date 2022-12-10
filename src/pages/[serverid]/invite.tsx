/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Server } from "@prisma/client";
import type { GetServerSidePropsContext, NextPage } from "next";
import { useSession } from "next-auth/react";
import Modal from "../../components/modal/Modal";
import ModalButton from "../../components/modal/ModalButton";
import ModalText from "../../components/modal/ModalText";
import ModalTitle from "../../components/modal/ModalTitle";
import { trpc } from "../../utils/trpc";
import { isServerAThing, isServerMember } from "../api/v1/getServer";
import styles from "../../styles/pages/invite.module.scss";
import { getServerAuthSession } from "../../server/common/get-server-auth-session";

type Props = {
  server: Server;
};

const Invite: NextPage<Props> = ({ server }) => {
  const session = useSession();
  const user = session.data?.user;
  const joinMutation = trpc.user.joinServer.useMutation();

  function joinServer() {
    const serverId = server.id;
    const userId = user?.id!;
    joinMutation.mutate({ serverId, userId });
    window.location.href = `/${serverId}`;
  }

  const { data: allData } = trpc.server.getServerById.useQuery({
    id: server.id,
  });

  const { data: allUser } = trpc.user.getUserById.useQuery({
    userId: user?.id ?? "",
  });

  if (!allData || !allUser) return <></>;

  function isUserBanned() {
    for (const u of allData?.bannedUser ?? []) {
      if (u.id === user?.id!) return true;
    }
    return false;
  }

  return (
    <div className={styles.wrapper}>
      {isUserBanned() ? (
        <Modal open={true} setOpen={() => {}} blur>
          <ModalTitle value={allData.name} />
          <ModalText value="You are Banned from this Server" />
          <ModalButton
            onClick={() => (window.location.href = document.referrer)}
            value="Bring me Back!"
          />
        </Modal>
      ) : (
        <Modal open={true} setOpen={() => {}} blur>
          <ModalTitle value={allData.name} />
          <ModalText value={`${allData.members.length} Members`} />
          <ModalButton onClick={() => joinServer()} value="Join Server!" />
        </Modal>
      )}
    </div>
  );
};

export default Invite;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const server = await isServerAThing(ctx.req, ctx.res);
  // const session = await getServerAuthSession(ctx);

  // return (
  //   !session?.user && { redirect: { destination: "/", persistent: false } }
  // );
  return server
    ? {
        props: {
          server: JSON.parse(JSON.stringify(server)),
        },
      }
    : { redirect: { destination: "/", persistent: false } };
}
