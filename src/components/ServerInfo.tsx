import { Permission } from "@prisma/client";
import axios from "axios";
import { useSession } from "next-auth/react";
import type { FC } from "react";
import { useRef, useState } from "react";
import styles from "../styles/components/serverInfo.module.scss";
import type { Member, Server, TextChannel, VoiceChannel } from "../types";
import { BASE_URL, CDN_UPLOAD_URL, CDN_BASE_URL } from "../utils/constants";
import {
  handleKickMember,
  handleBanUser,
  handleDeleteVoiceChannel,
  handleDeleteTextChannel,
  hasPermission,
  handleDeleteServer,
} from "../utils/handler";
import { trpc } from "../utils/trpc";
import ChannelList from "./ChannelList";
import MemberList from "./MemberList";
import {
  Modal,
  ModalButton,
  ModalFileSelect,
  ModalImage,
  ModalInput,
  ModalText,
  ModalTitle,
} from "./modal";

type Props = {
  serverid: string;
  setSettingsOpen: Function;
  setSelectedTextChannel: Function;
  selectedTextChannelId: string;
  setTextChannelOpen: Function;
};

const ServerInfo: FC<Props> = ({
  serverid,
  setSettingsOpen,
  selectedTextChannelId,
  setSelectedTextChannel,
  setTextChannelOpen,
}) => {
  const { data: session } = useSession();
  const user = session?.user;
  const utils = trpc.useContext();

  const { data: server } = trpc.server.getServerById.useQuery({
    id: serverid,
  });

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

  const [selectedVoiceChannel, setSelectedVoiceChannel] =
    useState<VoiceChannel>();
  const [selectedMember, setSelectedMember] = useState<Member>();

  const createTextChannel = trpc.textChannel.createChannel.useMutation();
  const createVoiceChannel = trpc.voiceChannel.createChannel.useMutation();
  const updateServer = trpc.server.updateServer.useMutation();
  const deleteServer = trpc.server.deleteServer.useMutation();
  const deleteTextChannel = trpc.textChannel.deleteChannel.useMutation();
  const deleteVoiceChannel = trpc.voiceChannel.deleteChannel.useMutation();
  const leaveServer = trpc.members.leaveServer.useMutation();
  const banUser = trpc.server.banUserFromServer.useMutation();

  const tcRef = useRef<HTMLInputElement>(null);
  const vcRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const deleteRef = useRef<HTMLInputElement>(null);
  const repeatDeleteRef = useRef<HTMLInputElement>(null);

  const { data: selectedTextChannel } =
    trpc.textChannel.getChannelById.useQuery({
      id: selectedTextChannelId,
    });

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

  async function handleChangeImage(file: File) {
    const formData = new FormData();
    formData.append(file.name, file);

    const { data, status } = await axios.post(
      `${CDN_UPLOAD_URL}/server/pfp`,
      formData
    );

    const pfp = `${CDN_BASE_URL}/server/pfp-${data.message[file.name].md5}.${
      data.message[file.name].name.split(".")[1]
    }`;

    if (status === 200) {
      updateServer.mutate({
        id: server?.id ?? "",
        pfp: pfp,
      });
    }
    setServerImage(pfp);
  }

  if (!user || !server) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        <p
          onClick={() => {
            if (hasPermission(user.id, server, Permission.MANAGE_SERVER))
              setServerOptionsModalOpen(true);
            else setServerMemberModalOpen(true);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            if (hasPermission(user.id, server, Permission.MANAGE_SERVER))
              setServerInfoModalOpen(true);
            else setServerMemberModalOpen(true);
          }}
          className={styles.server_name}
        >
          {serverName !== "" ? serverName : server.name}
        </p>
        <ChannelList
          setTextChannelOpen={setTextChannelOpen}
          setSelectedTextChannel={setSelectedTextChannel}
          setSelectedVoiceChannel={setSelectedVoiceChannel}
          textChannelSettingsModalOpen={textChannelSettingsModalOpen}
          setTextChannelSettingsModalOpen={setTextChannelSettingsModalOpen}
          voiceChannelSettingsModalOpen={voiceChannelSettingsModalOpen}
          setVoiceChannelSettingsModalOpen={setVoiceChannelSettingsModalOpen}
          server={server}
        />
        <MemberList
          setSelectedMember={setSelectedMember}
          memberInfoModalOpen={memberInfoModalOpen}
          setMemberInfoModalOpen={setMemberInfoModalOpen}
          serverid={serverid}
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
          onClick={() => {
            setSettingsOpen(true);
            // window.location.href = `/${server.id}/settings`;
          }}
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
        {hasPermission(user.id, server, Permission.KICK_MEMBERS) &&
        selectedMember?.userId !== user.id &&
        selectedMember?.id !== server.ownerid ? (
          <ModalButton
            value="Kick User"
            onClick={() => {
              handleKickMember(server.id, selectedMember!, leaveServer);
              setMemberInfoModalOpen(false);
            }}
            type="delete"
          />
        ) : (
          <></>
        )}
        {hasPermission(user.id, server, Permission.BAN_MEMBERS) &&
        selectedMember?.userId !== user.id &&
        selectedMember?.id !== server.ownerid ? (
          <ModalButton
            value="Ban User"
            onClick={() => {
              handleBanUser(server.id, selectedMember!, banUser);
              setMemberInfoModalOpen(false);
            }}
            type="delete"
          />
        ) : (
          <></>
        )}
        {selectedMember?.id === user.id ? (
          <ModalButton
            value="Settings"
            onClick={() => {
              window.location.href = "/settings";
            }}
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
          fileType=".png, .jpg, .jpeg, .gif"
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
            handleDeleteServer(
              deleteRef,
              repeatDeleteRef,
              server,
              deleteServer
            );
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
            handleDeleteTextChannel(
              deleteRef,
              repeatDeleteRef,
              selectedTextChannel!,
              server.id,
              deleteTextChannel
            );
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
            handleDeleteVoiceChannel(
              deleteRef,
              repeatDeleteRef,
              selectedVoiceChannel!,
              deleteVoiceChannel
            );
          }}
        />
      </Modal>
    </>
  );
};

export default ServerInfo;
