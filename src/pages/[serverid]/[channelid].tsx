import { Message, Server, TextChannel } from "@prisma/client";
import { GetServerSidePropsContext, NextPage } from "next";
import { useSession } from "next-auth/react";
import ServerInfo from "../../components/ServerInfo";
import ServerList from "../../components/ServerList";
import Profile from "../../components/Profile";
import { trpc } from "../../utils/trpc";
import { isChannelAThing } from "../api/v1/getChannel";
import { isServerAThing } from "../api/v1/getServer";
import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import Modal from "../../components/modal/Modal";
import ModalTitle from "../../components/modal/ModalTitle";
import ModalText from "../../components/modal/ModalText";
import ModalButton from "../../components/modal/ModalButton";
import styles from "../../styles/pages/[channelid].module.scss";

type Props = {
  server: Server;
  channel: TextChannel;
};

const ChannelPage: NextPage<Props> = ({ server, channel }) => {
  const [serverUserInfoModalOpen, setServerUserInfoModalOpen] = useState(false);

  const session = useSession();
  const utils = trpc.useContext();
  const user = session.data?.user;

  const { data: allData } = trpc.server.getServerById.useQuery({
    id: server.id,
  });

  const messageQuery = trpc.message.getMessages.useInfiniteQuery(
    { channelId: channel.id },
    { getPreviousPageParam: (d) => d.nextCursor }
  );

  const [updated, setUpdated] = useState(false);
  const [messages, setMessages] = useState(() => {
    const messages = messageQuery.data?.pages
      .map((page) => page.messages)
      .flat();
    return messages;
  });

  const messageRef = useRef<HTMLInputElement>(null);
  const messageMutation = trpc.message.createMessage.useMutation();

  function handleSendMessage(e: any) {
    e.preventDefault();
    if (!messageRef.current) return;
    if (!(messageRef.current.value.trim().length > 0)) return;
    messageMutation.mutate({
      content: messageRef.current.value,
      channelId: channel.id,
      authorId: user?.id!,
    });
    setUpdated(true);
  }

  useEffect(() => {
    const query = trpc.message.getMessages.useInfiniteQuery({
      channelId: channel.id,
    });
    const msgs = query.data?.pages.map((page) => page.messages).flat();
    setMessages(msgs);
    setUpdated(false);
  }, [updated, setUpdated]);

  if (!allData) return <></>;
  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.chat}>
          <div className={styles.messages}>
            <>
              {(messages ?? []).map((message) => {
                <p>{message.content}</p>;
              })}
            </>
          </div>
          <div className={styles.input}>
            <form onSubmit={(e) => handleSendMessage(e)}>
              <input type="text" placeholder="Message..." ref={messageRef} />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
        <div className={styles.info}>
          <ServerInfo server={allData} />
        </div>
        <div className={styles.servers}>
          <Profile />
          <ServerList user={user} />
        </div>
      </div>
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
