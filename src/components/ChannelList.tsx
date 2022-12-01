import { FC, useCallback, useEffect, useState } from "react";
import { trpc } from "../utils/trpc";
import { TextChannel, User, VoiceChannel } from "@prisma/client";
import styles from "../styles/components/channelList.module.scss";
import { BASE_URL } from "../utils/constants";
import { useSession } from "next-auth/react";

type Props = {
  setSelectedTextChannel: Function;
  setSelectedVoiceChannel: Function;
  textChannelSettingsModalOpen: boolean;
  setTextChannelSettingsModalOpen: Function;
  voiceChannelSettingsModalOpen: boolean;
  setVoiceChannelSettingsModalOpen: Function;
  serverid: string;
};
const ChannelList: FC<Props> = ({
  serverid,
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

  const textChannelQuery = trpc.textChannel.getChannels.useInfiniteQuery(
    { serverid },
    { getPreviousPageParam: (d) => d.nextCursor }
  );
  const voiceChannelQuery = trpc.voiceChannel.getChannels.useInfiniteQuery(
    { serverid },
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
  const updateVoiceChannel = useCallback((incoming: VoiceChannel[]) => {
    setVoiceChannel((current) => {
      const map: Record<VoiceChannel["id"], VoiceChannel> = {};
      for (const chan of current ?? []) {
        for (const inc of incoming ?? []) {
          if (chan.id === inc.id) map[chan.id] = inc;
        }
      }

      return Object.values(map).sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
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

  const { data: server } = trpc.server.getServerById.useQuery({
    id: serverid,
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
              if (server?.ownerid !== user.id) return;
              e.preventDefault();
              setSelectedVoiceChannel(channel);
              if (!voiceChannelSettingsModalOpen)
                setVoiceChannelSettingsModalOpen(true);
            }}
            onClick={() => {
              for (let u of channel.users ?? []) {
                if (u.id === user.id) {
                  leaveVoiceChannel.mutate({
                    userId: user.id,
                    channelId: channel.id,
                  });
                  return;
                }
              }
              joinVoiceChannel.mutate({
                userId: user.id,
                channelId: channel.id,
              });
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
              {(channel.users ?? []).map((user) => (
                <p key={user.id}>{user.name}</p>
              ))}
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
              if (server?.ownerid !== user.id) return;
              e.preventDefault();
              setSelectedTextChannel(channel);
              if (!textChannelSettingsModalOpen)
                setTextChannelSettingsModalOpen(true);
            }}
            onClick={() =>
              (window.location.href = `${BASE_URL}/${serverid}/${channel.id}`)
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
