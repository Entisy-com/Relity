/* eslint-disable @next/next/no-img-element */
import { FC, useCallback, useEffect } from "react";
import { useState } from "react";
import Modal from "./modal/Modal";
import ModalTitle from "./modal/ModalTitle";
import styles from "../styles/components/profile.module.scss";
import ModalButton from "./modal/ModalButton";
import ModalText from "./modal/ModalText";
import { OnlineStatus } from "@prisma/client";
import { User } from "../types";
import { trpc } from "../utils/trpc";

type Props = {
  userid: string;
  setSettingsOpen: Function;
  serverOpen: boolean;
  setServerOpen: Function;
};

const Profile: FC<Props> = ({
  userid,
  setSettingsOpen,
  serverOpen,
  setServerOpen,
}) => {
  const [open, setOpen] = useState(false);

  const utils = trpc.useContext();

  const userQuery = trpc.user.getUsers.useInfiniteQuery(
    { userid },
    { getPreviousPageParam: (d) => d.nextCursor }
  );

  const [user, setUser] = useState<User | undefined>(() => {
    return userQuery.data?.pages.map((page) => page.users).flat()[0];
  });

  useEffect(() => {
    const users = userQuery.data?.pages.map((page) => page.users).flat();
    setUser(users ? users[0] : undefined);
  }, [userQuery.data?.pages]);

  trpc.user.onUpdateUser.useSubscription(undefined, {
    onData(newUser) {
      newUser.id === userid &&
        newUser.status !== user?.status &&
        setUser(newUser);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.user.getUsers.invalidate();
    },
  });

  trpc.user.onUpdateUser.useSubscription(undefined, {
    onData(user) {
      user.id === userid && setUser(user);
    },
    onError(err) {
      console.error("Subscription error:", err);
    },
  });

  function getStatusColor() {
    return user?.status === OnlineStatus.ONLINE
      ? "#66B025"
      : user?.status === OnlineStatus.AWAY
      ? "#ffb20f"
      : user?.status === OnlineStatus.DND
      ? "#C21D3C"
      : "transparent";
  }

  if (!user) return <></>;

  return (
    <>
      <div
        className={styles.wrapper}
        onClick={() => {
          if (setServerOpen) setServerOpen(false);
          // if (window.location.href !== `${BASE_URL}/`)
          //   window.location.href = "..";
        }}
        onContextMenu={() => setOpen(true)}
      >
        {user?.image && (
          <>
            <div className={styles.image}>
              <img
                src={user.image}
                alt="Profile Picture"
                width={32}
                height={32}
              />
            </div>
            <span className={styles.status} />
            <span
              style={{
                background: getStatusColor(),
              }}
              className={styles.status_inner}
            />
          </>
        )}
      </div>
      <Modal blur closable open={open} setOpen={setOpen}>
        <ModalTitle value={`Name: ${user?.name}`} />
        <ModalText value={`Id: ${user?.id}`} />
        <ModalText value={`Email: ${user?.email}`} />
        <ModalText value={`OnlineStatus: ${user?.status}`} />
        <ModalButton
          value="Settings"
          onClick={() => {
            setSettingsOpen(true);
            // window.location.href = "/settings";
          }}
        />
      </Modal>
    </>
  );
};

export default Profile;
