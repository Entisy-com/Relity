import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "../styles/components/serverList.module.scss";
import { User } from "next-auth";
import { Server } from "../types";

type Props = {
  server: Server;
  index: number;
  user: User;
  setSelectedServer: Function;
  setServerInfoModalOpen: Function;
  serverImage: string;
  serverName: string;
};

const ServerComp: FC<Props> = ({
  setSelectedServer,
  setServerInfoModalOpen,
  serverImage,
  serverName,
  user,
  server,
  index,
}) => {
  function isOwner(server: Server) {
    for (const member of server.members) {
      if (member.userId === user.id) {
        if (server.ownerid === member.id) return true;
      }
    }
    return false;
  }
  return (
    <Draggable
      index={index}
      draggableId={`server#${server.id}`}
      key={server.id}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            key={server.id}
            className={styles.server}
            onClick={(e) => {
              window.location.href = `/${server.id}`;
              e.preventDefault();
              setSelectedServer(server);
            }}
            onContextMenu={(e) => {
              if (isOwner(server)) {
                e.preventDefault();
                setSelectedServer(server);
                setServerInfoModalOpen(true);
              }
            }}
          >
            {isOwner(server) ? (
              <img
                className={styles.crown}
                src="/crown.svg"
                alt=""
                width={30}
                height={30}
              />
            ) : (
              <></>
            )}
            <div className={styles.logo}>
              {serverImage !== "" ? (
                <>
                  {serverImage.endsWith(".gif") ? (
                    <>
                      <img
                        className={styles.a_pfp}
                        src={serverImage}
                        alt=""
                        width={40}
                        height={40}
                      />
                      <img
                        className={styles.pfp}
                        src={serverImage.replace(".gif", ".png")}
                        alt=""
                        width={40}
                        height={40}
                      />
                    </>
                  ) : (
                    <img
                      className={styles.pfp}
                      src={serverImage}
                      alt=""
                      width={40}
                      height={40}
                    />
                  )}
                </>
              ) : server.pfp ? (
                <>
                  {server.pfp.endsWith(".gif") ? (
                    <>
                      <img
                        className={styles.a_pfp}
                        src={server.pfp}
                        alt=""
                        width={40}
                        height={40}
                      />
                      <img
                        className={styles.pfp}
                        src={server.pfp.replace(".gif", ".png")}
                        alt=""
                        width={40}
                        height={40}
                      />
                    </>
                  ) : (
                    <img
                      className={styles.pfp}
                      src={server.pfp}
                      alt=""
                      width={40}
                      height={40}
                    />
                  )}
                </>
              ) : (
                <p>
                  {serverName !== ""
                    ? serverName.substring(0, 2)
                    : server.name.substring(0, 2)}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default ServerComp;
