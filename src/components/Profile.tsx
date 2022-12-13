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
  const [status, setStatus] = useState<OnlineStatus>();
  const utils = trpc.useContext();

  const [user, setUser] = useState<User>();

  const { data: userr } = trpc.user.getUserById.useQuery({
    id: userid,
  });

  trpc.user.onUpdateUser.useSubscription(undefined, {
    onData(user) {
      setUser(user);
    },
    onError(err) {
      console.error("Subscription error:", err);
    },
  });

  useEffect(() => {
    setUser(userr!);
  }, [userr]);

  function getStatusColor() {
    return user?.status === OnlineStatus.ONLINE
      ? "#66B025"
      : user?.status === OnlineStatus.AWAY
      ? "#ffb20f"
      : user?.status === OnlineStatus.DND
      ? "#C21D3C"
      : "transparent";
  }

  if (!userr) return <></>;

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
