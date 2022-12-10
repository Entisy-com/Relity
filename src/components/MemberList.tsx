import { Permission } from "@prisma/client";
import { FC } from "react";
import styles from "../styles/components/memberList.module.scss";
import { Server } from "../types";
import { hasPermission, isOwner } from "../utils/handler";

type Props = {
  setSelectedMember: Function;
  memberInfoModalOpen: boolean;
  setMemberInfoModalOpen: Function;
  server: Server;
};

// TODO: updates on join

const MemberList: FC<Props> = ({
  server,
  setMemberInfoModalOpen,
  setSelectedMember,
}) => {
  let listedMembers: string[] = [];

  function wasListedPreviously(t: any[]) {
    for (const z of t) {
      if (!listedMembers.includes(z.id)) return false;
    }
    return true;
  }

  return (
    <>
      <div className={styles.wrapper}>
        {server.roles
          ?.sort((a, b) => a.position - b.position)
          .map((role) => {
            return role.visible &&
              role.members.length &&
              !wasListedPreviously(role.members) ? (
              <div key={role.id}>
                <>
                  <p className={styles.role_name}>{role.name}</p>
                  {role.members.map((m) => {
                    if (!listedMembers.includes(m.id)) {
                      listedMembers.push(m.id);
                      return (
                        <div
                          className={styles.user}
                          onClick={() => {
                            setSelectedMember(m);
                            setMemberInfoModalOpen(true);
                          }}
                          key={m.id}
                        >
                          <img
                            className={styles.image}
                            src={
                              m.pfp ? m.pfp : m.user?.image ? m.user.image : ""
                            }
                            alt=""
                            width={30}
                            height={30}
                          />
                          <p className={styles.name}>
                            {m.nickname ?? m.user?.name}
                          </p>
                          {server.settings?.showBadges &&
                            isOwner(m.userId, server) && (
                              <img
                                className={styles.owner}
                                src="/crown.svg"
                                width={15}
                                height={15}
                                alt=""
                              />
                            )}
                          {server.settings?.showBadges &&
                            !isOwner(m.userId, server) &&
                            hasPermission(
                              m.userId,
                              server,
                              Permission.MANAGE_SERVER
                            ) && (
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
                    }
                  })}
                </>
              </div>
            ) : (
              <></>
            );
          })}
      </div>
    </>
  );
};

export default MemberList;
