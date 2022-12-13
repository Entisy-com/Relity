import styles from "../styles/pages/[serverid].module.scss";
import ServerInfo from "../components/ServerInfo";
import { FC } from "react";
import ServerSettings from "../components/ServerSettings";
import Head from "next/head";
import TextChannelView from "./TextChannelView";
import { trpc } from "../utils/trpc";

type Props = {
  settingsOpen: boolean;
  setSettingsOpen: Function;
  serverid: string;
  textChannelId: string;
  textChannelOpen: boolean;
  setTextChannelOpen: Function;
  setTextChannel: Function;
  userid: string;
};

const ServerView: FC<Props> = ({
  serverid,
  textChannelId,
  userid,
  settingsOpen,
  setSettingsOpen,
  textChannelOpen,
  setTextChannelOpen,
  setTextChannel,
}) => {
  const { data: server } = trpc.server.getServerById.useQuery({
    id: serverid,
  });

  const { data: user } = trpc.user.getUserById.useQuery({
    id: userid,
  });

  if (!user || !server) return <></>;

  return (
    <>
      <Head>
        <title>{server.name}</title>
      </Head>
      <div className={styles.wrapper}>
        {textChannelOpen && !settingsOpen ? (
          <TextChannelView channelid={textChannelId} serverid={serverid} />
        ) : (
          settingsOpen && (
            <ServerSettings
              serverid={serverid}
              userid={user.id}
              setSettingsOpen={setSettingsOpen}
            />
          )
        )}
        {!settingsOpen && (
          <ServerInfo
            setTextChannelOpen={setTextChannelOpen}
            selectedTextChannelId={textChannelId}
            setSelectedTextChannel={setTextChannel}
            serverid={serverid}
            setSettingsOpen={setSettingsOpen}
          />
        )}
      </div>
    </>
  );
};

export default ServerView;
