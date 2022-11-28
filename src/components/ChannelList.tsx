import { FC, useCallback, useEffect, useRef, useState } from "react";
import { trpc } from "../utils/trpc";
import { TextChannel, User } from "@prisma/client";
import styles from "../styles/components/channelList.module.scss";
import { BASE_URL } from "../utils/constants";
import Modal from "./modal/Modal";
import ModalButton from "./modal/ModalButton";
import ModalTitle from "./modal/ModalTitle";
import { useSession } from "next-auth/react";
import { log } from "console";

type Props = {
  setSelectedChannel: Function;
  channelSettingsModalOpen: boolean;
  setChannelSettingsModalOpen: Function;
  serverId: string;
};
const ChannelList: FC<Props> = ({
  serverId,
  channelSettingsModalOpen,
  setChannelSettingsModalOpen,
  setSelectedChannel,
}) => {
  const { data: session } = useSession();
  const user = session?.user;

  const channelQuery = trpc.channel.getChannels.useInfiniteQuery(
    { serverid: serverId },
    { getPreviousPageParam: (d) => d.nextCursor }
  );

  const utils = trpc.useContext();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { hasPreviousPage, isFetchingPreviousPage, fetchPreviousPage } =
    channelQuery;

  const [channel, setChannel] = useState(() => {
    const channels = channelQuery.data?.pages
      .map((page) => page.channel)
      .flat();
    return channels;
  });

  const addChannel = useCallback((incoming?: TextChannel[]) => {
    // const { data: allData } = trpc.server.getServerById({
    //   id: incoming![incoming!.length - 1]?.id,
    // });
    setChannel((current) => {
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

  useEffect(() => {
    const channels = channelQuery.data?.pages
      .map((page) => page.channel)
      .flat();
    addChannel(channels);
  }, [channelQuery.data?.pages, addChannel]);

  trpc.channel.onChannelCreate.useSubscription(undefined, {
    onData(channel) {
      addChannel([channel]);
    },
    onError(err) {
      console.error("Subscription error:", err);
      // we might have missed a message - invalidate cache
      utils.server.getServers.invalidate();
    },
  });

  const { data: server } = trpc.server.getServerById.useQuery({
    id: serverId,
  });

  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        {(channel ?? []).map((channel) => (
          <a
            onContextMenu={(e) => {
              if (server?.ownerid !== user.id) return;
              e.preventDefault();
              setSelectedChannel(channel);
              if (!channelSettingsModalOpen) setChannelSettingsModalOpen(true);
            }}
            className={`${styles.channel} ${
              window.location.href.endsWith(
                `${channel.serverid}/${channel.id}`
              ) && styles.active
            }`}
            key={channel.id}
            href={`${BASE_URL}/${serverId}/${channel.id}`}
            rel="noreferrer"
          >
            <>
              {console.warn(channel.name)}
              {channel.name?.length > 18
                ? channel.name.substring(0, 18).concat("...")
                : channel.name}
            </>
          </a>
        ))}
      </div>
    </>
  );
};

export default ChannelList;
