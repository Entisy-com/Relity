import type { GetServerSidePropsContext, NextApiRequest, NextPage } from "next";
import { useSession } from "next-auth/react";
import Modal from "../../components/modal/Modal";
import ModalButton from "../../components/modal/ModalButton";
import ModalText from "../../components/modal/ModalText";
import ModalTitle from "../../components/modal/ModalTitle";
import { trpc } from "../../utils/trpc";
import styles from "../../styles/pages/invite.module.scss";
import { getServerAuthSession } from "../../server/common/get-server-auth-session";
import { Invite } from "../../types";
import { IncomingMessage, ServerResponse } from "http";

type Props = {
  invite: Invite;
};

const Invite: NextPage<Props> = ({ invite }) => {
  const session = useSession();
  const sessionUser = session.data?.user;
  const joinMutation = trpc.members.joinServer.useMutation();
  const useInvite = trpc.invite.useInvite.useMutation();

  function joinServer() {
    const serverId = invite.serverId;
    const userId = user?.id!;
    const roleId = invite.server.everyoneRole;
    joinMutation.mutate({
      serverId,
      userId,
      roleId,
    });
    useInvite.mutate({
      id: invite.id,
    });
    window.location.href = `/`;
  }

  const { data: server } = trpc.server.getServerById.useQuery({
    id: invite.serverId,
  });

  const { data: user } = trpc.user.getUserById.useQuery({
    id: sessionUser?.id ?? "",
  });

  if (!server || !user) return <></>;

  function isUserBanned() {
    for (const u of server?.bannedUser ?? []) {
      if (u.id === user?.id!) return true;
    }
    return false;
  }

  return (
    <div className={styles.wrapper}>
      {isUserBanned() ? (
        <Modal open={true} setOpen={() => {}} blur>
          <ModalTitle value={server.name} />
          <ModalText value="You are Banned from this Server" />
          <ModalButton
            onClick={() => (window.location.href = document.referrer)}
            value="Bring me Back!"
          />
        </Modal>
      ) : (
        <Modal open={true} setOpen={() => {}} blur>
          <ModalTitle value={server.name} />
          <ModalText value={`${server.members.length} Members`} />
          <ModalButton onClick={() => joinServer()} value="Join Server!" />
        </Modal>
      )}
    </div>
  );
};

export default Invite;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);
  const invite = await getInvite(ctx.req, ctx.res);

  if (!session)
    return { redirect: { destination: "/login", persistent: false } };

  return invite
    ? { props: { invite: JSON.parse(JSON.stringify(invite)) } }
    : { redirect: { destination: "/", persistent: false } };
}

const getInvite = async (
  req:
    | NextApiRequest
    | (IncomingMessage & {
        cookies: Partial<{
          [key: string]: string;
        }>;
      }),
  _res: ServerResponse<IncomingMessage>
) => {
  const url = req.url?.slice(1);
  if (!(url!.toString().length > 0)) return undefined;
  let inviteId;
  console.debug(url);
  if (url?.includes("/")) {
    const params = url.split("/");
    inviteId = params[1]?.toString();
    console.info(inviteId);
  }
  const invite = await prisma?.invite.findUnique({
    where: {
      id: inviteId,
    },
    include: {
      server: true,
    },
  });
  return invite;
};
