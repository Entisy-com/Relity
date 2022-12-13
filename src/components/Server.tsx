import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "../styles/components/serverList.module.scss";
import { User } from "next-auth";
import { Server } from "@prisma/client";

type Props = {
  server: Server;
  index: number;
  user: User;
  setSelectedServer: Function;
  setServerInfoModalOpen: Function;
  serverImage: string;
  serverName: string;
  serverOpen: boolean;
  setServerOpen: Function;
  setTextChannelOpen: Function;
};

const ServerComp: FC<Props> = ({
  serverOpen,
  setServerOpen,
  setSelectedServer,
  setServerInfoModalOpen,
  serverImage,
  serverName,
  user,
  server,
  index,
  setTextChannelOpen,
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
      draggableId={`server#${server?.id ?? ""}`}
      key={server?.id ?? ""}
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
              // window.location.href = `/${server.id}`;
              e.preventDefault();
              if (setTextChannelOpen) setTextChannelOpen(false);
              if (setServerOpen) setServerOpen(true);
              if (setSelectedServer) setSelectedServer(server);
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
              {server.pfp ? (
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
