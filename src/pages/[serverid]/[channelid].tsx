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

  const messageRef = useRef<HTMLTextAreaElement>(null);
  const createMessage = trpc.message.createMessage.useMutation();

  const messageQuery = trpc.message.getMessages.useInfiniteQuery(
    { channelId: channel.id },
    { getPreviousPageParam: (d) => d.nextCursor }
  );

  const [message, setMessage] = useState(() => {
    const messages = messageQuery.data?.pages
      .map((page) => page.messages)
      .flat();
    return messages;
  });

  const addMessage = useCallback((incoming?: Message[]) => {
    setMessage((current) => {
      const map: Record<Message["id"], Message> = {};
      for (const mess of current ?? []) {
        map[mess.id] = mess;
      }
      for (const mess of incoming ?? []) {
        map[mess.id] = mess;
      }
      for (const mess of incoming ?? []) {
        if (mess.textChannel?.id === channel.id) map[mess.id] = mess;
      }

      return Object.values(map).sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    });
  }, []);

  useEffect(() => {
    const messages = messageQuery.data?.pages
      .map((page) => page.messages)
      .flat();
    addMessage(messages);
  }, [messageQuery.data?.pages, addMessage]);

  trpc.message.onMessageCreate.useSubscription(undefined, {
    onData(message) {
      addMessage([message]);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.message.getMessages.invalidate();
    },
  });

  function handleSendMessage(e: any) {
    e.preventDefault();
    if (!messageRef.current) return;
    if (!(messageRef.current.value.trim().length > 0)) return;
    createMessage.mutate({
      content: messageRef.current.value,
      channelId: channel.id,
      authorId: user?.id!,
    });
    messageRef.current.value = "";
    setTimeout(() => {
      const messages = document.getElementsByClassName(`${styles.message}`);
      const latestMessage = messages[messages.length - 1];
      latestMessage?.scrollIntoView();
    }, 250);
  }

  if (!allData) return <></>;
  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.chat}>
          <div className={styles.messages}>
            <>
              {(message ?? []).map((message) => (
                <div className={styles.message} key={message.id}>
                  <img
                    className={styles.pfp}
                    src={message.author?.image ?? ""}
                    alt=""
                    width={30}
                    height={30}
                  />
                  <div className={styles.content}>
                    <p className={styles.name}>{message.author?.name}</p>
                    <p className={styles.msg}>{message.content}</p>
                  </div>
                </div>
              ))}
            </>
          </div>
          <form className={styles.input} onSubmit={(e) => handleSendMessage(e)}>
            <textarea
              onKeyDown={(e) => {
                if (e.shiftKey && e.key == "Enter") return;
                if (e.key == "Enter") {
                  e.preventDefault();
                  handleSendMessage(e);
                  return;
                }
              }}
              onContextMenu={(e) => {
                // TODO: Jonas stuff
              }}
              rows={1}
              className={styles.input_field}
              placeholder="Message..."
              ref={messageRef}
            />
            <input className={styles.input_button} type="submit" value="Send" />
          </form>
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
