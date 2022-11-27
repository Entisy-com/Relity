import { Server } from "@prisma/client";
import { GetServerSidePropsContext, NextPage } from "next";
import { useSession } from "next-auth/react";
import Modal from "../../components/modal/Modal";
import ModalButton from "../../components/modal/ModalButton";
import ModalText from "../../components/modal/ModalText";
import ModalTitle from "../../components/modal/ModalTitle";
import { trpc } from "../../utils/trpc";
import { isServerAThing } from "../api/v1/getServer";
import styles from "../../styles/pages/invite.module.scss";

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
  }

  console.log({ server });

  const { data: allData } = trpc.server.getServerById.useQuery({
    id: server.id,
  });

  console.log({ allData });

  if (!allData) return <></>;

  return (
    <div className={styles.wrapper}>
      <Modal open={true} setOpen={() => {}} blur>
        <ModalTitle value={allData.name} />
        <ModalText value={`${allData.users.length} Members`} />
        <ModalButton onClick={() => joinServer()} value="Join Server!" />
      </Modal>
    </div>
  );
};

export default Invite;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const server = await isServerAThing(ctx.req, ctx.res);
  console.log({ server });

  return server
    ? {
        props: {
          server: JSON.parse(JSON.stringify(server)),
        },
      }
    : { redirect: { destination: "/", persistent: false } };
}
