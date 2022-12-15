import { OnlineStatus, ServerSettings } from "@prisma/client";
import { FC, useEffect, useState } from "react";
import styles from "../styles/components/member.module.scss";
import { User } from "../types";
import { trpc } from "../utils/trpc";

type Props = {
  name: string;
  status: OnlineStatus;
  image: string;
  color: string;
  userid: string;
  onClick?: Function;
  onRightClick?: Function;
  badge: "owner" | "admin" | "none";
  showBadges: boolean;
  settings: ServerSettings;
};

const MemberComp: FC<Props> = ({
  onClick,
  onRightClick,
  settings,
  badge,
  name,
  userid,
  color,
  status,
  image,
}) => {
  const [user, setUser] = useState<User>();

  const { data: userr } = trpc.user.getUserById.useQuery({
    id: userid,
  });

  trpc.user.onUpdateUser.useSubscription(undefined, {
    onData(user) {
      user.id === userid && setUser(user);
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

  return (
    <div
      style={
        status === OnlineStatus.OFFLINE
          ? {
              opacity: "50%",
            }
          : {}
      }
      className={styles.wrapper}
      onClick={() => onClick && onClick()}
    >
      <img
        style={
          status === OnlineStatus.OFFLINE
            ? {
                opacity: "50%",
              }
            : {}
        }
        src={image}
        alt=""
        width={30}
        height={30}
        className={styles.pfp}
      />
      {status !== OnlineStatus.OFFLINE && (
        <>
          <span
            className={styles.status}
            style={{
              background: getStatusColor(),
            }}
          />
        </>
      )}
      <p
        style={
          settings.displayRoleColors
            ? {
                color,
              }
            : {}
        }
        className={styles.name}
      >
        {name}
      </p>
      {settings.displayBadges && badge === "owner" && (
        <img
          className={styles.owner}
          src="/crown.svg"
          width={15}
          height={15}
          alt=""
        />
      )}
      {settings.displayBadges && badge === "admin" && (
        <img
          className={styles.admin}
          src="/shield.svg"
          width={15}
          height={15}
          alt=""
        />
      )}
    </div>
  );
};

export default MemberComp;
