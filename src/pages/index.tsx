import type { GetServerSidePropsContext, NextPage } from "next";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import styles from "../styles/pages/index.module.scss";
import ServerList from "../components/ServerList";
import Profile from "../components/Profile";
import { Server, TextChannel, User } from "../types";
import FriendList from "../components/FriendList";
import { useEffect, useState } from "react";
import UserSettings from "../components/UserSettings";
import ServerView from "../components/ServerView";
import axios from "axios";
import { HEARTBEAT_URL } from "../utils/constants";
import { trpc } from "../utils/trpc";
import { OnlineStatus } from "@prisma/client";

type Props = {
  user: User;
};

const Index: NextPage<Props> = ({ user }) => {
  const [userSettingsOpen, setUserSettingsOpen] = useState(false);
  const [serverSettingsOpen, setServerSettingsOpen] = useState(false);
  const [serverOpen, setServerOpen] = useState(false);
  const [textChannelOpen, setTextChannelOpen] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Server | undefined>();
  const [selectedTextChannel, setSelectedTextChannel] = useState<TextChannel>();

  const updateUser = trpc.user.updateUser.useMutation();
  const createSettings = trpc.user.createUserSettings.useMutation();

  let inactive = false;

  useEffect(() => {
    // #region UserSettings
    createSettings.mutate({
      userId: user.id,
    });
    // #endregion UserSettings

    // #region Heartbeat
    axios.post(`${HEARTBEAT_URL}`, {
      id: user.id,
      inactive: inactive,
    });

    setInterval(() => {
      axios.post(`${HEARTBEAT_URL}`, {
        id: user.id,
        inactive: inactive,
      });
    }, 5 * 1000);
    // #endregion Heartbeat
  }, []);

  onInactive(2 * 60 * 1000, function () {
    inactive = true;
    updateUser.mutate({
      id: user.id,
      status: OnlineStatus.AWAY,
    });
  });

  function onInactive(ms: any, cb: any) {
    var wait = setTimeout(cb, ms);

    useEffect(() => {
      document.onmousemove =
        document.onmousedown =
        document.onmouseup =
        document.onkeydown =
        document.onkeyup =
        document.onfocus =
          function () {
            clearTimeout(wait);
            inactive = false;
            wait = setTimeout(cb, ms);
          };
    }, []);
  }

  return (
    <div className={styles.wrapper}>
      <>
        {!userSettingsOpen && !serverSettingsOpen && (
          <>
            <Profile
              userid={user.id}
              setSettingsOpen={setUserSettingsOpen}
              serverOpen={serverOpen}
              setServerOpen={setServerOpen}
            />
            <ServerList
              userid={user.id}
              serverOpen={serverOpen}
              setServerOpen={setServerOpen}
              selectedServerId={selectedServer?.id ?? ""}
              setSelectedServer={setSelectedServer}
              setTextChannelOpen={setTextChannelOpen}
            />
          </>
        )}
        {userSettingsOpen ? (
          <UserSettings
            userid={user.id}
            setSettingsOpen={setUserSettingsOpen}
          />
        ) : serverOpen ? (
          <>
            <ServerView
              setTextChannel={setSelectedTextChannel}
              serverid={selectedServer?.id ?? ""}
              textChannelId={selectedTextChannel?.id ?? ""}
              settingsOpen={serverSettingsOpen}
              setTextChannelOpen={setTextChannelOpen}
              textChannelOpen={textChannelOpen}
              setSettingsOpen={setServerSettingsOpen}
              userid={user.id}
            />
          </>
        ) : (
          <>
            <FriendList userid={user.id} />
          </>
        )}
      </>
    </div>
  );
};

export default Index;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);

  return !session
    ? { redirect: { destination: "/login", persistent: false } }
    : { props: { user: session.user } };
}
