import {
  AdminUser,
  Message,
  Role,
  Server,
  TextChannel,
  User,
} from "@prisma/client";
import { useSession } from "next-auth/react";
import { userAgent } from "next/server";
import { FC, useEffect, useRef, useState } from "react";
import styles from "../styles/components/serverInfo.module.scss";
import { trpc } from "../utils/trpc";
import ChannelList from "./ChannelList";
import Modal from "./modal/Modal";
import ModalButton from "./modal/ModalButton";
import ModalInput from "./modal/ModalInput";
import ModalText from "./modal/ModalText";
import ModalTitle from "./modal/ModalTitle";
import UserList from "./UserList";

type Props = {
  server: Server & {
    users: (User & {
      server: Server[];
      bannedon: Server[];
      adminuser: AdminUser | null;
      messages: Message[];
      mentionedin: Message[];
      ownerof: Server[];
      roles: Role[];
    })[];
    bannedUser: User[];
    owner: User;
    textchannel: TextChannel[];
    roles: (Role & {
      users: User[];
    })[];
  };
};

const ServerInfo: FC<Props> = ({ server }) => {
  const { data: session } = useSession();
  const user = session?.user;

  const tcRef = useRef<HTMLInputElement>(null);
  const vcRef = useRef<HTMLInputElement>(null);

  const [serverOptionsModalOpen, setServerOptionsModalOpen] = useState(false);
  const [serverUserInfoModalOpen, setServerUserInfoModalOpen] = useState(false);
  const [channelSettingsModalOpen, setChannelSettingsModalOpen] =
    useState(false);

  const [selectedChannel, setSelectedChannel] = useState<TextChannel>();
  const [selectedUser, setSelectedUser] = useState<User>();

  const createChannel = trpc.channel.createChannel.useMutation();

  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        <p
          onClick={() => setServerOptionsModalOpen(true)}
          className={styles.server_name}
        >
          {server.name}
        </p>
        <ChannelList
          setSelectedChannel={setSelectedChannel}
          channelSettingsModalOpen={channelSettingsModalOpen}
          setChannelSettingsModalOpen={setChannelSettingsModalOpen}
          serverId={server.id}
        />
        <UserList
          setSelectedUser={setSelectedUser}
          serverUserInfoModalOpen={serverUserInfoModalOpen}
          setServerUserInfoModalOpen={setServerUserInfoModalOpen}
          type="server"
          roles={server.roles}
          users={server.users}
        />
      </div>
      <Modal
        open={serverOptionsModalOpen}
        setOpen={setServerOptionsModalOpen}
        blur
        darken
        closable
      >
        <ModalTitle value={server.name} />
        <ModalText value="Create TextChannel" />
        <ModalInput placeholder="TextChannel Name" rref={tcRef} />
        <ModalButton
          value="Create!"
          onClick={() => {
            if (!tcRef.current) return;
            if (!(tcRef.current.value.trim().length > 0)) return;
            createChannel.mutate({
              name: tcRef.current.value,
              serverid: server.id,
            });
            tcRef.current.value = "";
            setServerOptionsModalOpen(false);
          }}
        />
        <ModalText value="Create VoiceChannel" />
        <ModalInput placeholder="VoiceChannel Name" rref={vcRef} />
        <ModalButton
          value="Create!"
          onClick={() => {
            if (!vcRef.current) return;
            if (!(vcRef.current.value.trim().length > 0)) return;
            createChannel.mutate({
              name: vcRef.current.value,
              serverid: server.id,
            });
            vcRef.current.value = "";
            setServerOptionsModalOpen(false);
          }}
        />
        <ModalButton
          value="Settings"
          onClick={() => (window.location.href = `/${server.id}/settings`)}
        />
      </Modal>
      {/* region channel settings */}
      <Modal
        open={channelSettingsModalOpen}
        setOpen={setChannelSettingsModalOpen}
        blur
        closable
        darken
      >
        <ModalTitle value={selectedChannel?.name!} />
        <ModalText value="Change Name" />
        <ModalInput placeholder="New Name" />
        <ModalButton value="Change Name!" onClick={() => {}} />
      </Modal>
      {/* endregion channel settings */}
      {/* region user info */}
      <Modal
        blur
        closable
        open={serverUserInfoModalOpen}
        setOpen={setServerUserInfoModalOpen}
      >
        <ModalTitle
          value={selectedUser?.name ? `Name: ${selectedUser.name}` : ""}
        />
        <ModalText value={`Id: ${selectedUser?.id}`} />
        <ModalText
          value={selectedUser?.email ? `Email: ${selectedUser.email}` : ""}
        />
        {selectedUser?.id === user.id ? (
          <ModalButton
            value="Settings"
            onClick={() => (window.location.href = "/settings")}
          />
        ) : (
          <></>
        )}
      </Modal>
      {/* endregion user info */}
    </>
  );
};

export default ServerInfo;
