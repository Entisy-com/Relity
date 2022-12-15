import { useSession } from "next-auth/react";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { Member, Message, Server, TextChannel } from "../types";
import { trpc } from "../utils/trpc";
import { Modal, ModalButton, ModalText, ModalTitle } from "./modal";
import styles from "../styles/pages/[channelid].module.scss";
import MessageComp from "./Message";

type Props = {
  serverid: string;
  channelid: string;
};

const TextChannelView: FC<Props> = ({ serverid, channelid }) => {
  const [serverUserInfoModalOpen, setServerUserInfoModalOpen] = useState(false);

  const session = useSession();
  const user = session.data?.user;

  const messageRef = useRef<HTMLTextAreaElement>(null);
  const createMessage = trpc.message.createMessage.useMutation();

  const [contextMenuOpen, setContextMenuOpen] = useState(false);

  const { data: server } = trpc.server.getServerById.useQuery({
    id: serverid,
  });

  const { data: roles } = trpc.roles.getRolesByServerId.useQuery({
    id: serverid,
  });

  const { data: channel } = trpc.textChannel.getChannelById.useQuery({
    id: channelid,
  });

  const { data: messages } = trpc.message.getMessagesByChannelId.useQuery({
    channelid,
  });

  const { data: member } = trpc.members.getMemberByUserId.useQuery({
    userId: user?.id!,
    serverId: serverid,
  });

  function getHighestRoleColor(member: Member) {
    let col = [];
    for (const sr of roles ?? []) {
      for (const mr of member.roles ?? []) {
        if (sr.id === mr.id) {
          col.push(sr.color);
        }
      }
    }

    return server?.settings?.displayRoleColors ? col[0] : undefined;
  }

  function handleSendMessage(e: any) {
    e.preventDefault();
    if (!messageRef.current) return;
    if (!(messageRef.current.value.trim().length > 0)) return;
    createMessage.mutate({
      content: messageRef.current.value,
      channelId: channelid,
      authorId: member?.id!,
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

  if (!server || !user || !channel || !messages) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.chat}>
          <p className={styles.tc_name}>{channel.name}</p>
          <div className={styles.messages}>
            <>
              {messages.map((msg) => {
                return (
                  <MessageComp
                    color={
                      server.settings?.displayRoleColors
                        ? getHighestRoleColor(msg.author) ?? "#ffffff"
                        : "#ffffff"
                    }
                    content={msg.content}
                    image={msg.author?.pfp ?? msg.author?.user?.image}
                    name={msg.author?.nickname ?? msg.author?.user?.name}
                    key={msg.id}
                  />
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

export default TextChannelView;
