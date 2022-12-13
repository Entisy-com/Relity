import { OnlineStatus, ServerSettings } from "@prisma/client";
import { FC } from "react";
import styles from "../styles/components/member.module.scss";

type Props = {
  name: string;
  status: OnlineStatus;
  image: string;
  color: string;
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
  color,
  status,
  image,
}) => {
  function getStatusColor() {
    return status === OnlineStatus.ONLINE
      ? "#66B025"
      : status === OnlineStatus.AWAY
      ? "#ffb20f"
      : status === OnlineStatus.DND
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
          <span className={styles.status} />
          <span
            className={styles.status_inner}
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
