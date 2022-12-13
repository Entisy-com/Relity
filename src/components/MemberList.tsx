import { OnlineStatus, Permission } from "@prisma/client";
import { FC, useCallback, useEffect, useState } from "react";
import styles from "../styles/components/memberList.module.scss";
import { Member, Role, Server } from "../types";
import { hasPermission, isOwner } from "../utils/handler";
import { trpc } from "../utils/trpc";
import MemberComp from "./Member";

type Props = {
  setSelectedMember: Function;
  memberInfoModalOpen: boolean;
  setMemberInfoModalOpen: Function;
  serverid: string;
};

// TODO: updates on join

const MemberList: FC<Props> = ({
  serverid,
  setMemberInfoModalOpen,
  setSelectedMember,
}) => {
  let listedMembers: string[] = [];
  let offlineMembers: string[] = [];

  const { data: roles } = trpc.roles.getRolesByServerId.useQuery({
    id: serverid,
  });

  const { data: server } = trpc.server.getServerById.useQuery({
    id: serverid,
  });

  const { data: members } = trpc.members.getMembersByServerId.useQuery({
    id: serverid,
  });

  for (const m of members ?? [])
    if (m.user.status === OnlineStatus.OFFLINE) offlineMembers.push(m.id);

  function getHighestRoleColor(member: Member) {
    let col = [];
    for (const sr of roles ?? []) {
      for (const mr of member.roles ?? []) {
        if (sr.id === mr.id) {
          col.push(sr.color);
        }
      }
    }

    return server?.settings?.displayRoleColors ? col[0] : undefined;
  }

  function roleUsersOnline(role: Role) {
    let t = [];
    for (const m of role.members) {
      if (offlineMembers.includes(m.id) || listedMembers.includes(m.id))
        t.push(m);
    }
    return t.length !== role.members.length;
  }

  function usersOnline(server: Server) {
    let t = [];
    for (const m of server.members) {
      if (offlineMembers.includes(m.id) || listedMembers.includes(m.id))
        t.push(m);
    }
    return t.length !== server.members.length;
  }

  if (!server || !roles || !members) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        {roles
          ?.sort((a, b) => a.position - b.position)
          .map((role) => {
            return (
              role.visible &&
              role.members.length > 0 &&
              roleUsersOnline(role) && (
                <div key={role.id}>
                  <>
                    <p className={styles.role_name}>{role.name}</p>
                    {role.members
                      .sort((a, b) =>
                        (a.nickname ?? a.user.name).localeCompare(
                          b.nickname ?? b.user.name
                        )
                      )
                      .map((m) => {
                        if (
                          !offlineMembers.includes(m.id) &&
                          !listedMembers.includes(m.id)
                        ) {
                          listedMembers.push(m.id);
                          return (
                            <MemberComp
                              settings={server?.settings!}
                              badge={
                                isOwner(m.userId, server)
                                  ? "owner"
                                  : hasPermission(
                                      m.userId,
                                      server,
                                      Permission.MANAGE_SERVER
                                    )
                                  ? "admin"
                                  : "none"
                              }
                              color={getHighestRoleColor(m) ?? role.color}
                              image={m.pfp ?? m.user.image ?? ""}
                              onClick={() => {
                                setSelectedMember(m);
                                setMemberInfoModalOpen(true);
                              }}
                              showBadges={server.settings?.displayBadges!}
                              name={m.nickname ?? m.user.name}
                              status={m.user.status}
                              key={m.id}
                            />
                          );
                        }
                      })}
                  </>
                </div>
              )
            );
          })}
        {listedMembers.length + offlineMembers.length !==
          server.members.length && <p className={styles.role_name}>Online</p>}
        {listedMembers.length + offlineMembers.length !== members.length &&
          members
            .sort((a, b) =>
              (a.nickname ?? a.user.name).localeCompare(
                b.nickname ?? b.user.name
              )
            )
            .map((m) => {
              return (
                !listedMembers.includes(m.id) &&
                !offlineMembers.includes(m.id) &&
                usersOnline(server) && (
                  <MemberComp
                    settings={server.settings!}
                    badge={
                      isOwner(m.userId, server)
                        ? "owner"
                        : hasPermission(
                            m.userId,
                            server,
                            Permission.MANAGE_SERVER
                          )
                        ? "admin"
                        : "none"
                    }
                    color={getHighestRoleColor(m)!}
                    image={m.pfp ?? m.user.image ?? ""}
                    onClick={() => {
                      setSelectedMember(m);
                      setMemberInfoModalOpen(true);
                    }}
                    showBadges={server.settings?.displayBadges!}
                    name={m.nickname ?? m.user.name}
                    status={m.user.status}
                    key={m.id}
                  />
                )
              );
            })}
        {server.settings?.displayOfflineMembers &&
          offlineMembers.length > 0 && (
            <p className={styles.role_name}>Offline</p>
          )}
        {server.settings?.displayOfflineMembers &&
          members.length !== listedMembers.length &&
          members
            .sort((a, b) =>
              (a.nickname ?? a.user?.name ?? "").localeCompare(
                b.nickname ?? b.user?.name ?? ""
              )
            )
            .map((m) => {
              return (
                offlineMembers.includes(m.id) && (
                  <MemberComp
                    settings={server.settings!}
                    badge={
                      isOwner(m.userId, server)
                        ? "owner"
                        : hasPermission(
                            m.userId,
                            server,
                            Permission.MANAGE_SERVER
                          )
                        ? "admin"
                        : "none"
                    }
                    color={getHighestRoleColor(m) ?? "#ffffff"}
                    image={m.pfp ?? m.user.image ?? ""}
                    onClick={() => {
                      setSelectedMember(m);
                      setMemberInfoModalOpen(true);
                    }}
                    showBadges={server.settings?.displayBadges!}
                    name={m.nickname ?? m.user.name}
                    status={m.user.status}
                    key={m.id}
                  />
                )
              );
            })}
      </div>
    </>
  );
};

export default MemberList;
