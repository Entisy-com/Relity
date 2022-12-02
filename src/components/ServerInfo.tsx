import {
  Message,
  Role,
  Server,
  TextChannel,
  VoiceChannel,
  User,
  UserSettings,
  OnlineStatus,
  Category,
} from "@prisma/client";
import { useSession } from "next-auth/react";
import { FC, useRef, useState } from "react";
import styles from "../styles/components/serverInfo.module.scss";
import { trpc } from "../utils/trpc";
import ChannelList from "./ChannelList";
import Modal from "./modal/Modal";
import ModalButton from "./modal/ModalButton";
import ModalFileSelect from "./modal/ModalFileSelect";
import ModalImage from "./modal/ModalImage";
import ModalInput from "./modal/ModalInput";
import ModalText from "./modal/ModalText";
import ModalTitle from "./modal/ModalTitle";
import UserList from "./UserList";

type Props = {
  server: Server & {
    id: string;
    name: string;
    textchannel: TextChannel[];
    voicechannel: VoiceChannel[];
    owner: User;
    ownerid: string;
    createdAt: Date;
    updatedAt: Date;
    bannedUser: User[];
    pfp: string | null;
    banner: string | null;
    categories: Category[];
    users: (User & {
      id: string;
      name: string;
      email: string;
      image: string | null;
      status: OnlineStatus;
      messages: Message[];
      server: Server[];
      bannedon: Server[];
      ownerof: Server[];
      roles: Role[];
      settings: UserSettings | null;
      voicechannel: VoiceChannel | null;
      updatedAt: Date;
      createdAt: Date;
      friends: User[];
      friendswith: User[];
    })[];
    roles: (Role & {
      users: User[];
    })[];
  };
};

const ServerInfo: FC<Props> = ({ server }) => {
  const { data: session } = useSession();
  const user = session?.user;
  const utils = trpc.useContext();

  const [serverOptionsModalOpen, setServerOptionsModalOpen] = useState(false);
  const [serverUserInfoModalOpen, setServerUserInfoModalOpen] = useState(false);
  const [textChannelSettingsModalOpen, setTextChannelSettingsModalOpen] =
    useState(false);
  const [voiceChannelSettingsModalOpen, setVoiceChannelSettingsModalOpen] =
    useState(false);
  const [deleteTextChannelModalOpen, setDeleteTextChannelModalOpen] =
    useState(false);
  const [deleteVoiceChannelModalOpen, setDeleteVoiceChannelModalOpen] =
    useState(false);
  const [deleteServerModalOpen, setDeleteServerModalOpen] = useState(false);
  const [serverInfoModalOpen, setServerInfoModalOpen] = useState(false);
  const [serverName, setServerName] = useState("");

  const [selectedTextChannel, setSelectedTextChannel] = useState<TextChannel>();
  const [selectedVoiceChannel, setSelectedVoiceChannel] =
    useState<VoiceChannel>();
  const [selectedUser, setSelectedUser] = useState<User>();

  const createTextChannel = trpc.textChannel.createChannel.useMutation();
  const createVoiceChannel = trpc.voiceChannel.createChannel.useMutation();
  const UpdateServer = trpc.server.updateServer.useMutation();
  const deleteServer = trpc.server.deleteServer.useMutation();
  const deleteTextChannel = trpc.textChannel.deleteChannel.useMutation();
  const deleteVoiceChannel = trpc.voiceChannel.deleteChannel.useMutation();

  const tcRef = useRef<HTMLInputElement>(null);
  const vcRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const deleteRef = useRef<HTMLInputElement>(null);
  const repeatDeleteRef = useRef<HTMLInputElement>(null);

  trpc.server.onServerUpdate.useSubscription(undefined, {
    onData(server) {
      setServerName(server.name);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.server.getServerById.invalidate();
    },
  });

  function handleDeleteServer() {
    if (!deleteRef.current || !repeatDeleteRef.current) return;
    if (
      !(deleteRef.current.value.trim().length > 0) ||
      !(repeatDeleteRef.current.value.trim().length > 0)
    )
      return;
    if (deleteRef.current.value.trim() !== repeatDeleteRef.current.value.trim())
      return;
    if (deleteRef.current.value.trim() !== server?.name.trim()) return;
    deleteServer.mutate({ id: server?.id! });
  }

  function handleDeleteTextChannel() {
    if (!deleteRef.current || !repeatDeleteRef.current) return;
    if (
      !(deleteRef.current.value.trim().length > 0) ||
      !(repeatDeleteRef.current.value.trim().length > 0)
    )
      return;
    if (deleteRef.current.value.trim() !== repeatDeleteRef.current.value.trim())
      return;
    if (deleteRef.current.value.trim() !== selectedTextChannel?.name.trim())
      return;
    deleteTextChannel.mutate({ id: selectedTextChannel?.id! });
    window.location.href = `/${server.id}`;
  }

  function handleDeleteVoiceChannel() {
    if (!deleteRef.current || !repeatDeleteRef.current) return;
    if (
      !(deleteRef.current.value.trim().length > 0) ||
      !(repeatDeleteRef.current.value.trim().length > 0)
    )
      return;
    if (deleteRef.current.value.trim() !== repeatDeleteRef.current.value.trim())
      return;
    if (deleteRef.current.value.trim() !== selectedVoiceChannel?.name.trim())
      return;
    deleteVoiceChannel.mutate({ id: selectedVoiceChannel?.id! });
  }

  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        <p
          onClick={() => {
            if (server.ownerid === user.id) setServerOptionsModalOpen(true);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            if (server.ownerid === user.id) setServerInfoModalOpen(true);
          }}
          className={styles.server_name}
        >
          {serverName !== "" ? serverName : server.name}
        </p>
        <ChannelList
          setSelectedTextChannel={setSelectedTextChannel}
          setSelectedVoiceChannel={setSelectedVoiceChannel}
          textChannelSettingsModalOpen={textChannelSettingsModalOpen}
          setTextChannelSettingsModalOpen={setTextChannelSettingsModalOpen}
          voiceChannelSettingsModalOpen={voiceChannelSettingsModalOpen}
          setVoiceChannelSettingsModalOpen={setVoiceChannelSettingsModalOpen}
          serverid={server.id}
        />
        <UserList
          ownerId={server.ownerid}
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
        <ModalInput focus placeholder="TextChannel Name" rref={tcRef} />
        <ModalButton
          value="Create!"
          onClick={() => {
            setServerOptionsModalOpen(false);
            if (!tcRef.current) return;
            if (!(tcRef.current.value.trim().length > 0)) return;
            createTextChannel.mutate({
              name: tcRef.current.value,
              serverid: server.id,
            });
          }}
        />
        <ModalText value="Create VoiceChannel" />
        <ModalInput placeholder="VoiceChannel Name" rref={vcRef} />
        <ModalButton
          value="Create!"
          onClick={() => {
            if (!vcRef.current) return;
            if (!(vcRef.current.value.trim().length > 0)) return;
            createVoiceChannel.mutate({
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
        open={textChannelSettingsModalOpen}
        setOpen={setTextChannelSettingsModalOpen}
        blur
        closable
        darken
      >
        <ModalTitle value={selectedTextChannel?.name!} />
        <ModalText value="Change Name" />
        <ModalInput placeholder="New Name" />
        <ModalButton value="Change Name!" onClick={() => {}} />
        <ModalButton
          type="delete"
          value="Delete!"
          onClick={() => {
            setTextChannelSettingsModalOpen(false);
            setDeleteTextChannelModalOpen(true);
          }}
        />
      </Modal>
      <Modal
        open={voiceChannelSettingsModalOpen}
        setOpen={setVoiceChannelSettingsModalOpen}
        blur
        closable
        darken
      >
        <ModalTitle value={selectedVoiceChannel?.name!} />
        <ModalText value="Change Name" />
        <ModalInput placeholder="New Name" />
        <ModalButton value="Change Name!" onClick={() => {}} />
        <ModalButton
          type="delete"
          value="Delete!"
          onClick={() => {
            setVoiceChannelSettingsModalOpen(false);
            setDeleteVoiceChannelModalOpen(true);
          }}
        />
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
      <Modal
        blur
        darken="3"
        closable
        open={serverInfoModalOpen}
        setOpen={setServerInfoModalOpen}
      >
        <ModalTitle value={server?.name!} />
        {server?.pfp ? <ModalImage size={100} src={server?.pfp!} /> : <></>}
        <ModalFileSelect
          serverId={server?.id!}
          value="Set Picture"
          fileType=".png, .jpg, .jpeg"
        />
        <ModalText value="Change Name" />
        <ModalInput focus placeholder="Server Name" rref={nameRef} />
        <ModalButton
          value="Done!"
          onClick={() => {
            if (!nameRef.current) return;
            if (!(nameRef.current.value.trim().length > 0)) return;
            UpdateServer.mutate({
              id: server.id,
              name: nameRef.current.value,
            });
            setServerInfoModalOpen(false);
          }}
        />
        <ModalButton
          type="delete"
          value="Delete Server!"
          onClick={() => {
            setServerInfoModalOpen(false);
            setDeleteServerModalOpen(true);
          }}
        />
      </Modal>
      <Modal
        blur
        darken="3"
        closable
        open={deleteServerModalOpen}
        setOpen={setDeleteServerModalOpen}
      >
        <ModalTitle value={server?.name!} />
        <ModalInput focus placeholder="Server Name" rref={deleteRef} />
        <ModalInput placeholder="Repeat Server Name" rref={repeatDeleteRef} />
        <ModalButton
          type="delete"
          value="Delete Server!"
          onClick={() => {
            setDeleteServerModalOpen(false);
            handleDeleteServer();
          }}
        />
      </Modal>
      <Modal
        blur
        darken="3"
        closable
        open={deleteTextChannelModalOpen}
        setOpen={setDeleteTextChannelModalOpen}
      >
        <ModalTitle value={selectedTextChannel?.name!} />
        <ModalInput focus placeholder="Channel Name" rref={deleteRef} />
        <ModalInput placeholder="Repeat Channel Name" rref={repeatDeleteRef} />
        <ModalButton
          type="delete"
          value="Delete Channel!"
          onClick={() => {
            setDeleteTextChannelModalOpen(false);
            handleDeleteTextChannel();
          }}
        />
      </Modal>
      <Modal
        blur
        darken="3"
        closable
        open={deleteVoiceChannelModalOpen}
        setOpen={setDeleteVoiceChannelModalOpen}
      >
        <ModalTitle value={selectedVoiceChannel?.name!} />
        <ModalInput focus placeholder="Channel Name" rref={deleteRef} />
        <ModalInput placeholder="Repeat Channel Name" rref={repeatDeleteRef} />
        <ModalButton
          type="delete"
          value="Delete Channel!"
          onClick={() => {
            setDeleteVoiceChannelModalOpen(false);
            handleDeleteVoiceChannel();
          }}
        />
      </Modal>
    </>
  );
};

export default ServerInfo;
