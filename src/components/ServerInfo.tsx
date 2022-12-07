import { Permission } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import type { FC } from "react";
import { useRef, useState } from "react";
import styles from "../styles/components/serverInfo.module.scss";
import type { Member, Server, TextChannel, User, VoiceChannel } from "../types";
import { BASE_URL, CDN_API_URL, CDN_BASE_URL } from "../utils/constants";
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
  server: Server;
};

const ServerInfo: FC<Props> = ({ server }) => {
  const { data: session } = useSession();
  const user = session?.user;
  const utils = trpc.useContext();

  function isOwner(server: Server) {
    for (const member of server.members) {
      if (member.userId === user?.id) {
        if (server.ownerid === member.id) return true;
      }
    }
    return false;
  }

  function hasPermission(server: Server, permission: Permission) {
    for (const role of server.roles) {
      if (role.permissions.includes(permission)) {
        for (const member of role.members) {
          if (member.userId === user?.id) return true;
        }
      }
    }
    return false;
  }

  const [serverOptionsModalOpen, setServerOptionsModalOpen] = useState(false);
  const [serverMemberModalOpen, setServerMemberModalOpen] = useState(false);
  const [memberInfoModalOpen, setMemberInfoModalOpen] = useState(false);
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
  const [serverImage, setServerImage] = useState("");

  const [selectedTextChannel, setSelectedTextChannel] = useState<TextChannel>();
  const [selectedVoiceChannel, setSelectedVoiceChannel] =
    useState<VoiceChannel>();
  const [selectedMember, setSelectedMember] = useState<Member>();

  const createTextChannel = trpc.textChannel.createChannel.useMutation();
  const createVoiceChannel = trpc.voiceChannel.createChannel.useMutation();
  const updateServer = trpc.server.updateServer.useMutation();
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
      setServerImage(server.pfp ?? "");
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

  async function handleChangeImage(file: File) {
    const formData = new FormData();
    formData.append(file.name, file);

    const { data, status } = await axios.post(
      `${CDN_API_URL}/upload`,
      formData
    );

    const pfp = `${CDN_BASE_URL}/${data.message[file.name].md5}.${
      data.message[file.name].name.split(".")[1]
    }`;

    if (status === 200) {
      updateServer.mutate({
        id: server.id,
        pfp: pfp,
      });
    }
    setServerImage(pfp);
  }

  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        <p
          onClick={() => {
            if (
              isOwner(server) ||
              hasPermission(server, Permission.MANAGE_SERVER)
            )
              setServerOptionsModalOpen(true);
            else setServerMemberModalOpen(true);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            if (
              isOwner(server) ||
              hasPermission(server, Permission.MANAGE_SERVER)
            )
              setServerInfoModalOpen(true);
            else setServerMemberModalOpen(true);
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
          setSelectedMember={setSelectedMember}
          memberInfoModalOpen={memberInfoModalOpen}
          setMemberInfoModalOpen={setMemberInfoModalOpen}
          type="server"
          roles={server.roles}
          members={server.members}
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
      <Modal
        open={serverMemberModalOpen}
        setOpen={setServerMemberModalOpen}
        blur
        closable
        darken="3"
      >
        <ModalTitle value={server.name} />
        <ModalButton
          value="Copy Invite Link"
          onClick={() => {
            navigator.clipboard.writeText(`${BASE_URL}/${server.id}/invite`);
          }}
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
        open={memberInfoModalOpen}
        setOpen={setMemberInfoModalOpen}
      >
        <ModalTitle
          value={
            selectedMember?.nickname
              ? `Name: ${selectedMember.nickname}`
              : selectedMember?.user.name
              ? `Name: ${selectedMember.user.name}`
              : ""
          }
        />
        <ModalText value={`Id: ${selectedMember?.id}`} />
        <ModalText
          value={
            selectedMember?.user.email
              ? `Email: ${selectedMember.user.email}`
              : ""
          }
        />
        {selectedMember?.id === user.id ? (
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
        {serverImage !== "" ? (
          <ModalImage size={100} src={serverImage!} />
        ) : server?.pfp ? (
          <ModalImage size={100} src={server?.pfp!} />
        ) : (
          <></>
        )}

        <ModalFileSelect
          serverId={server?.id!}
          value="Set Picture"
          fileType=".png, .jpg, .jpeg"
          onChange={(file) => {
            handleChangeImage(file);
          }}
        />
        <ModalText value="Change Name" />
        <ModalInput focus placeholder="Server Name" rref={nameRef} />
        <ModalButton
          value="Done!"
          onClick={() => {
            if (!nameRef.current) return;
            if (!(nameRef.current.value.trim().length > 0)) return;
            updateServer.mutate({
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
