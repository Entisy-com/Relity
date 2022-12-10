import { FC, useCallback, useEffect, useState } from "react";
import { trpc } from "../utils/trpc";
import styles from "../styles/components/channelList.module.scss";
import { BASE_URL } from "../utils/constants";
import { useSession } from "next-auth/react";
import { Server, TextChannel, VoiceChannel } from "../types";
import { Permission, User } from "@prisma/client";
import { hasPermission, isOwner } from "../utils/handler";

type Props = {
  setSelectedTextChannel: Function;
  setSelectedVoiceChannel: Function;
  textChannelSettingsModalOpen: boolean;
  setTextChannelSettingsModalOpen: Function;
  voiceChannelSettingsModalOpen: boolean;
  setVoiceChannelSettingsModalOpen: Function;
  server: Server;
};
const ChannelList: FC<Props> = ({
  server,
  textChannelSettingsModalOpen,
  setTextChannelSettingsModalOpen,
  voiceChannelSettingsModalOpen,
  setVoiceChannelSettingsModalOpen,
  setSelectedTextChannel,
  setSelectedVoiceChannel,
}) => {
  const { data: session } = useSession();
  const user = session?.user;
  const utils = trpc.useContext();

  const joinVoiceChannel = trpc.voiceChannel.joinChannel.useMutation();
  const leaveVoiceChannel = trpc.voiceChannel.leaveChannel.useMutation();

  const [userInVoiceChannel, setUserInVoiceChannel] = useState({
    vc: "",
    user: [] as User[],
  });

  const { data: member } = trpc.user.getMemberByUserId.useQuery({
    serverId: server.id,
    userId: user?.id!,
  });

  const textChannelQuery = trpc.textChannel.getChannels.useInfiniteQuery(
    { serverid: server.id },
    { getPreviousPageParam: (d) => d.nextCursor }
  );
  const voiceChannelQuery = trpc.voiceChannel.getChannels.useInfiniteQuery(
    { serverid: server.id },
    { getPreviousPageParam: (d) => d.nextCursor }
  );

  const [textChannel, setTextChannel] = useState(() => {
    const channels = textChannelQuery.data?.pages
      .map((page) => page.channel)
      .flat();
    return channels;
  });
  const [voiceChannel, setVoiceChannel] = useState(() => {
    const channels = voiceChannelQuery.data?.pages
      .map((page) => page.channel)
      .flat();
    return channels;
  });

  const addTextChannel = useCallback((incoming?: TextChannel[]) => {
    setTextChannel((current) => {
      const map: Record<TextChannel["id"], TextChannel> = {};
      for (const chan of current ?? []) {
        map[chan.id] = chan;
      }
      for (const chan of incoming ?? []) {
        map[chan.id] = chan;
      }

      return Object.values(map).sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    });
  }, []);
  const removeTextChannel = useCallback((incoming: TextChannel) => {
    setTextChannel((current) => {
      const map: Record<TextChannel["id"], TextChannel> = {};
      for (const chan of current ?? []) {
        if (chan.id !== incoming.id) map[chan.id] = chan;
      }

      return Object.values(map).sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    });
  }, []);
  const addVoiceChannel = useCallback((incoming?: VoiceChannel[]) => {
    setVoiceChannel((current) => {
      const map: Record<VoiceChannel["id"], VoiceChannel> = {};
      for (const chan of current ?? []) {
        map[chan.id] = chan;
      }
      for (const chan of incoming ?? []) {
        map[chan.id] = chan;
      }

      return Object.values(map).sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    });
  }, []);
  const removeVoiceChannel = useCallback((incoming: VoiceChannel) => {
    setVoiceChannel((current) => {
      const map: Record<VoiceChannel["id"], VoiceChannel> = {};
      for (const chan of current ?? []) {
        if (chan.id !== incoming.id) map[chan.id] = chan;
      }

      return Object.values(map).sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    });
  }, []);
  const updateVoiceChannel = useCallback((incoming?: VoiceChannel[]) => {
    setVoiceChannel((current) => {
      const map: Record<VoiceChannel["id"], VoiceChannel> = {};
      for (const chan of current ?? []) {
        map[chan.id] = chan;
      }
      for (const chan of incoming ?? []) {
        map[chan.id] = chan;
      }
      for (const chan of incoming ?? []) {
        for (const m of chan.members ?? []) {
          if (m.voiceChannelId === chan.id) map[chan.id] = chan;
        }
      }

      return Object.values(map).sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    });
  }, []);

  useEffect(() => {
    const textChannels = textChannelQuery.data?.pages
      .map((page) => page.channel)
      .flat();
    const voiceChannels = voiceChannelQuery.data?.pages
      .map((page) => page.channel)
      .flat();
    addTextChannel(textChannels);
    addVoiceChannel(voiceChannels);
  }, [
    textChannelQuery.data?.pages,
    addTextChannel,
    voiceChannelQuery.data?.pages,
    addVoiceChannel,
  ]);

  trpc.textChannel.onChannelCreate.useSubscription(undefined, {
    onData(channel) {
      addTextChannel([channel]);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.textChannel.getChannels.invalidate();
    },
  });
  trpc.textChannel.onChannelDelete.useSubscription(undefined, {
    onData(channel) {
      removeTextChannel(channel);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.textChannel.getChannels.invalidate();
    },
  });
  trpc.voiceChannel.onChannelCreate.useSubscription(undefined, {
    onData(channel) {
      addVoiceChannel([channel]);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.voiceChannel.getChannels.invalidate();
    },
  });
  trpc.voiceChannel.onChannelDelete.useSubscription(undefined, {
    onData(channel) {
      removeVoiceChannel(channel);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.voiceChannel.getChannels.invalidate();
    },
  });
  trpc.voiceChannel.onJoinChannel.useSubscription(undefined, {
    onData(channel) {
      addVoiceChannel([channel]);
      updateVoiceChannel([channel]);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.voiceChannel.getChannels.invalidate();
    },
  });
  trpc.voiceChannel.onLeaveChannel.useSubscription(undefined, {
    onData(channel) {
      addVoiceChannel([channel]);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.voiceChannel.getChannels.invalidate();
    },
  });

  const { data: allUser } = trpc.user.getUserById.useQuery({
    userId: user?.id!,
  });

  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        {(voiceChannel ?? []).map((channel) => (
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
                  <p key={member.id}>{member.nickname ?? member.user.name}</p>
                );
              })}
              {/* {vcUser.vc === channel.id &&
                (vcUser.user ?? []).map((user) => (
                  <p key={user.id}>{user.name}</p>
                ))} */}
            </div>
          </div>
        ))}
        {(textChannel ?? []).map((channel) => (
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
            onClick={() =>
              (window.location.href = `${BASE_URL}/${server.id}/${channel.id}`)
            }
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
