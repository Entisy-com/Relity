import { OnlineStatus, ServerSettings } from "@prisma/client";
import { FC } from "react";
import styles from "../styles/components/member.module.scss";

type Props = {
  name: string;
  status: OnlineStatus;
  image: string;
  onClick?: Function;
  onRightClick?: Function;
};

const FriendComp: FC<Props> = ({
  onClick,
  onRightClick,
  name,
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
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default FriendComp;
