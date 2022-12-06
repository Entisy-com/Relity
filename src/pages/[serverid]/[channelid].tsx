/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import type { Server, TextChannel, Prisma } from "@prisma/client";
import type { GetServerSidePropsContext, NextPage } from "next";
import { useSession } from "next-auth/react";
import ServerInfo from "../../components/ServerInfo";
import ServerList from "../../components/ServerList";
import Profile from "../../components/Profile";
import { trpc } from "../../utils/trpc";
import { isChannelAThing } from "../api/v1/getChannel";
import { isServerAThing } from "../api/v1/getServer";
import { useCallback, useRef, useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import ModalTitle from "../../components/modal/ModalTitle";
import ModalText from "../../components/modal/ModalText";
import ModalButton from "../../components/modal/ModalButton";
import styles from "../../styles/pages/[channelid].module.scss";

type Message = Prisma.MessageGetPayload<{
  include: {
    author: true;
    mentionedRoles: true;
    mentionedUser: true;
    textChannel: true;
  };
}>;

type Props = {
  server: Server;
  channel: TextChannel;
};

const ChannelPage: NextPage<Props> = ({ server, channel }) => {
  const [serverUserInfoModalOpen, setServerUserInfoModalOpen] = useState(false);

  const session = useSession();
  const utils = trpc.useContext();
  const user = session.data?.user;

  const { data: allUser } = trpc.user.getUserById.useQuery({
    userId: user?.id!,
  });
  const { data: member } = trpc.user.getMemberByUserId.useQuery({
    userId: allUser!.id,
    serverId: server.id,
  });

  const { data: allData } = trpc.server.getServerById.useQuery({
    id: server.id,
  });

  const messageRef = useRef<HTMLTextAreaElement>(null);
  const createMessage = trpc.message.createMessage.useMutation();

  const [contextMenuOpen, setContextMenuOpen] = useState(false);

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

  const addMessage = useCallback(
    (incoming?: Message[]) => {
      setMessage((current) => {
        const map: Record<Message["id"], Message> = {};
        for (const mess of current ?? []) {
          map[mess.id] = mess;
        }
        for (const mess of incoming ?? []) {
          map[mess.id] = mess;
        }
        for (const mess of incoming ?? []) {
          if (mess.textChannelId === channel.id) map[mess.id] = mess;
        }

        return Object.values(map).sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
    },
    [channel.id]
  );

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
  useEffect(() => {
    const scope = document.querySelector("body");
    const ctxM = document.getElementById("context-menu");
    scope!.addEventListener("click", (e) => {
      if (e.target != ctxM) {
        setContextMenuOpen(false);
      }
    });
    scope!.addEventListener("contextmenu", (e) => {
      if (e.target != ctxM) {
        setContextMenuOpen(false);
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.keyCode !== 27 && e.key !== "Escape") return;
      setContextMenuOpen(false);
    });
  }, []);

  const normalizePosition = (mouseX: number, mouseY: number) => {
    const scope = document.querySelector("body");
    const ctxM = document.getElementById("context-menu");

    const { left: scopeOffsetX, top: scopeOffsetY } =
      scope!.getBoundingClientRect();
    const scopeX = mouseX - scopeOffsetX;
    const scopeY = mouseY - scopeOffsetY;

    const outOfBoundsOnX = scopeX + ctxM!.clientWidth > scope!.clientWidth;
    const outOfBoundsOnY = scopeY + ctxM!.clientHeight > scope!.clientHeight;
    let normalizedX = mouseX;
    let normalizedY = mouseY;

    if (outOfBoundsOnX) {
      normalizedX = scopeOffsetX + scope!.clientWidth - ctxM!.clientWidth;
    }
    if (outOfBoundsOnY) {
      normalizedY = scopeOffsetY + scope!.clientHeight - ctxM!.clientHeight;
    }
    return { normalizedX, normalizedY };
  };

  if (!allData) return <></>;
  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.chat}>
          <p className={styles.tc_name}>{channel.name}</p>
          <div className={styles.messages}>
            <>
              {(message ?? []).map((msg) => {
                return message![message?.length! - 2]?.authorId ===
                  msg.authorId &&
                  message![message?.length! - 2]?.id !== msg.id ? (
                  <div className={styles.message} key={msg.id}>
                    <div className={styles.content}>
                      <p className={styles.msg}>{msg.content}</p>
                    </div>
                  </div>
                ) : (
                  <div className={styles.message} key={msg.id}>
                    <img
                      className={styles.pfp}
                      src={
                        (msg.author?.pfp
                          ? msg.author?.pfp
                          : msg.author.user.image) ?? ""
                      }
                      alt=""
                      width={30}
                      height={30}
                    />
                    <div className={styles.content}>
                      <p className={styles.name}>
                        {msg.author?.nickname ?? msg.author.user}
                      </p>
                      <p className={styles.msg}>{msg.content}</p>
                    </div>
                  </div>
                );
              })}
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
                const ctxM = document.getElementById("context-menu");
                e.preventDefault();
                const { clientX: mouseX, clientY: mouseY } = e;
                const { normalizedX, normalizedY } = normalizePosition(
                  mouseX,
                  mouseY
                );

                ctxM!.style.top = `${normalizedY}px`;
                ctxM!.style.left = `${normalizedX}px`;
                setContextMenuOpen(false);
                setTimeout(() => {
                  setContextMenuOpen(true);
                });
              }}
              rows={1}
              className={styles.input_field}
              placeholder="Message..."
              ref={messageRef}
              id="textArea"
            />
            <input className={styles.input_button} type="submit" value="Send" />
          </form>
          <div
            style={
              contextMenuOpen
                ? { transform: "scale(1)" }
                : { transform: "scale(0)" }
            }
            id="context-menu"
            className={`${styles.context_menu}`}
          >
            <div
              className={styles.context_menu_item}
              onClick={() => {
                const msg = messageRef.current!.value;
                if (!msg) return;
                navigator.clipboard.writeText(msg);
                messageRef.current!.value = "";
              }}
            >
              Cut
            </div>
            <div
              className={styles.context_menu_item}
              onClick={() => {
                const msg = messageRef.current!.value;
                if (!msg) return;
                navigator.clipboard.writeText(msg);
              }}
            >
              Copy
            </div>
            <div
              className={styles.context_menu_item}
              onClick={async () => {
                let msg = messageRef.current!.value;
                msg = await navigator.clipboard.readText();
                messageRef.current!.value += msg;
              }}
            >
              Paste
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <ServerInfo server={allData} />
        </div>
        <div className={styles.servers}>
          <Profile member={member!} />
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
