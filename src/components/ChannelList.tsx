import styles from "../styles/components/channelList.module.scss";
import { hasPermission, isOwner } from "../utils/handler";
import { useSession } from "next-auth/react";
import { Permission } from "@prisma/client";
import { trpc } from "../utils/trpc";
import { Server } from "../types";
import { FC } from "react";

type Props = {
  setTextChannelOpen: Function;
  setVoiceChannelSettingsModalOpen: Function;
  setTextChannelSettingsModalOpen: Function;
  voiceChannelSettingsModalOpen: boolean;
  textChannelSettingsModalOpen: boolean;
  setSelectedVoiceChannel: Function;
  setSelectedTextChannel: Function;
  server: Server;
};
const ChannelList: FC<Props> = ({
  setTextChannelOpen,
  setVoiceChannelSettingsModalOpen,
  setTextChannelSettingsModalOpen,
  voiceChannelSettingsModalOpen,
  textChannelSettingsModalOpen,
  setSelectedVoiceChannel,
  setSelectedTextChannel,
  server,
}) => {
  const { data: session } = useSession();
  const user = session?.user;

  const leaveVoiceChannel = trpc.voiceChannel.leaveChannel.useMutation();
  const joinVoiceChannel = trpc.voiceChannel.joinChannel.useMutation();

  const { data: member } = trpc.members.getMemberByUserId.useQuery({
    serverId: server.id,
    userId: user?.id!,
  });

  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        {server.voicechannel.map((channel) => (
          <div
            key={channel.id}
            className={`${styles.channel} ${
              window.location.href.endsWith(
                `${channel.serverid}/${channel.id}`
              ) && styles.active
            }`}
            onContextMenu={(e) => {
              if (
                !hasPermission(
                  user.id,
                  server,
                  Permission.MANAGE_SERVER || isOwner(user.id, server)
                )
              )
                return;
              e.preventDefault();
              setSelectedVoiceChannel(channel);
              if (!voiceChannelSettingsModalOpen)
                setVoiceChannelSettingsModalOpen(true);
            }}
            onClick={() => {
              if (member?.voiceChannelId) {
                leaveVoiceChannel.mutate({
                  memberId: member.id,
                  channelId: channel.id,
                });
              } else {
                joinVoiceChannel.mutate({
                  memberId: member?.id!,
                  channelId: channel.id,
                });
              }
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <div className={styles.img}>
                <img src="/voice_channel.svg" width={17} height={17} alt="" />
              </div>
              <p className={styles.channel_name}>
                {channel.name?.length > 18
                  ? channel.name.substring(0, 18).concat("...")
                  : channel.name}
              </p>
            </div>
            <div className={styles.vc_users}>
              {channel.members?.map((member) => {
                return (
                  <p key={member.id}>{member.nickname ?? member.user?.name}</p>
                );
              })}
            </div>
          </div>
        ))}
        {server.textchannel.map((channel) => (
          <div
            key={channel.id}
            className={`${styles.channel} ${
              window.location.href.endsWith(
                `${channel.serverid}/${channel.id}`
              ) && styles.active
            }`}
            onContextMenu={(e) => {
              if (
                !(
                  hasPermission(user.id, server, Permission.MANAGE_SERVER) ||
                  isOwner(user.id, server)
                )
              )
                return;
              e.preventDefault();
              setSelectedTextChannel(channel);
              setTextChannelSettingsModalOpen(true);
            }}
            onClick={() => {
              if (setTextChannelOpen) setTextChannelOpen(true);
              setSelectedTextChannel(channel);
              // (window.location.href = `${BASE_URL}/${server.id}/${channel.id}`)
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <div className={styles.img}>
                <img src="/text_channel.svg" width={17} height={17} alt="" />
              </div>
              <p className={styles.channel_name}>
                {channel.name?.length > 18
                  ? channel.name.substring(0, 18).concat("...")
                  : channel.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChannelList;
