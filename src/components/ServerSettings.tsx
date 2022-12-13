import type { NextPage } from "next";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/pages/settings.module.scss";
import serverStyles from "../styles/pages/serverSettings.module.scss";
import { trpc } from "../utils/trpc";
import {
  Modal,
  ModalButton,
  ModalCheckbox,
  ModalColorPicker,
  ModalDropdown,
  ModalInput,
  ModalTitle,
} from "../components/modal";
import { Role, User, Permission } from "@prisma/client";
import { Action } from "@prisma/client";
import type { ActionLog, Member, Server } from "../types";
import { PermissionOptions } from "../types";
import type { ActionType } from "@prisma/client";
import Head from "next/head";
import { BASE_URL, LOGGER_URL } from "../utils/constants";
import { User as AuthUser } from "next-auth";
import axios from "axios";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { handleDeleteServer, handleUnbanUser } from "../utils/handler";
import { Role as RoleTypes } from "../types";

type Props = {
  serverid: string;
  userid: string;
  setSettingsOpen: Function;
};

const ServerSettings: NextPage<Props> = ({
  serverid,
  userid,
  setSettingsOpen,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member>();
  const [selectedBannedUser, setSelectedBannedUser] = useState<User>();
  const [selectedRole, setSelectedRole] = useState<Role>();
  const [editRoleModalOpen, setEditRoleModalOpen] = useState(false);
  const [createRoleModalOpen, setCreateRoleModalOpen] = useState(false);
  const [rolePermissions, setRolePermissions] = useState<Permission[]>([]);
  const [memberRoles, setMemberRoles] = useState<Role[]>([]);
  const [roleVisibility, setRoleVisibility] = useState(true);
  const [roleColor, setRoleColor] = useState("#ffffff");
  const [editMemberModalOpen, setEditMemberModalOpen] = useState(false);
  const [bannedUserInfoModalOpen, setBannedUserInfoModalOpen] = useState(false);
  const [transferOwnershipModalOpen, setTransferOwnershipModalOpen] =
    useState(false);
  const [deleteServerModalOpen, setDeleteServerModalOpen] = useState(false);

  const { data: server } = trpc.server.getServerById.useQuery({
    id: serverid,
  });
  const { data: user } = trpc.user.getUserById.useQuery({
    id: userid,
  });

  const deleteServerRef = useRef(null);
  const repeatDeleteServerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!server || !user) return <></>;

  const [transferOwnershipUser, setTransferOwnershipUser] = useState(
    server.members[0]?.id !== server.ownerid
      ? server.members[0]?.id
      : server.members[1]?.id
  );
  const [actionLog, setActionLog] = useState(
    server.actionLog ?? ({} as ActionLog)
  );

  const addActionToLog = trpc.actionLog.addActionToActionLog.useMutation();

  const unbanUser = trpc.server.pardonUserFromServer.useMutation();
  const updateSettings = trpc.server.updateSetting.useMutation();
  const updateServer = trpc.server.updateServer.useMutation();
  const deleteServer = trpc.server.deleteServer.useMutation();

  const updateMember = trpc.members.updateMember.useMutation();

  const createRole = trpc.roles.createRole.useMutation();
  const updateRole = trpc.roles.updateRole.useMutation();
  const deleteRole = trpc.roles.deleteRole.useMutation();

  const { data: actionLogServer } =
    trpc.actionLog.getActionLogFromServer.useQuery({
      serverId: server.id,
    });

  const roleNameRef = useRef<HTMLInputElement>(null);
  const transferOwnershipRef = useRef<HTMLInputElement>(null);

  const addLogAction = useCallback((incoming: ActionLog) => {
    setActionLog((current) => {
      const map: Record<ActionType["id"], ActionType> = {};
      for (const action of current?.actions ?? []) {
        map[action.id] = action;
      }
      for (const action of incoming?.actions ?? []) {
        map[action.id] = action;
      }

      const sorted = Object.values(map).sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      return {
        id: current?.id,
        server: current?.server,
        serverId: current?.serverId,
        actions: sorted,
      };
    });
  }, []);

  const { data: member } = trpc.members.getMemberByUserId.useQuery({
    userId: user?.id!,
    serverId: server.id,
  });

  function handleCreateRole() {
    setCreateRoleModalOpen(false);
    if (!roleNameRef.current) return;
    if (!(roleNameRef.current.value.trim().length > 0)) return;
    createRole.mutate({
      name: roleNameRef.current.value,
      permissions: rolePermissions,
      color: roleColor,
      serverId: server?.id!,
      visible: roleVisibility,
    });
    roleNameRef.current.value = "";
    setRolePermissions([]);
    addActionToLog.mutate({
      action: Action.CREATE_ROLE,
      serverid: server?.id!,
      memberId: member?.id!,
    });
  }

  function handleUpdateRole() {
    setRoleColor(selectedRole?.color!);
    setRolePermissions(selectedRole?.permissions!);
    setRoleVisibility(selectedRole?.visible!);
    setEditRoleModalOpen(false);
    updateRole.mutate({
      roleid: selectedRole?.id!,
      name:
        roleNameRef?.current?.value !== ""
          ? roleNameRef?.current?.value!
          : selectedRole?.name!,
      permissions: rolePermissions,
      color: roleColor,
      visible: roleVisibility,
    });

    axios.post(`${LOGGER_URL}`, {
      message: `Updated Role "${roleNameRef?.current?.value}", ID: ${selectedRole?.id}, `,
    });
    if (roleNameRef.current && roleNameRef.current.value.trim().length > 0)
      roleNameRef.current.value = "";
    discard(setEditRoleModalOpen);
  }

  function handleUpdateMember() {
    setMemberRoles(selectedMember?.roles!);
    setEditRoleModalOpen(false);
    updateMember.mutate({
      id: selectedMember?.id!,
      roles: memberRoles as any[],
    });
    discard(setEditMemberModalOpen);
  }

  function handleTransferOwnership() {
    if (!transferOwnershipRef.current) return;
    if (!(transferOwnershipRef.current.value.trim().length > 0)) return;
    if (transferOwnershipRef.current.value !== server?.name) return;
    updateServer.mutate({
      id: server?.id,
      ownerId: transferOwnershipUser,
    });
    setTransferOwnershipModalOpen(false);
    window.location.href = `/${server?.id}`;
  }
  //TODO: Fix redirect

  function handleDeleteRole() {
    setEditRoleModalOpen(false);
    deleteRole.mutate({
      roleid: selectedRole?.id!,
    });
  }

  function discard(callable: Function) {
    setRoleColor("#ffffff");
    setRolePermissions([]);
    setRoleVisibility(true);
    setSelectedRole(undefined);
    callable(false);
  }

  if (!server || !server.owner || !server.members) return <></>;

  const sortMembers = (a: Member, b: Member) => {
    return (a.nickname ?? a.user?.name).localeCompare(
      b.nickname ?? b.user?.name
    );
  };

  const sortUsers = (a: User, b: User) => {
    return a.name.localeCompare(b.name);
  };
  const sortRoles = (a: Role, b: Role) => {
    return a.position.toString().localeCompare(b.position.toString());
  };

  const createAt = new Date(server.createdAt);
  const dateString = `${createAt.getDate().toString().padStart(2, "0")}.${(
    createAt.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${createAt.getFullYear()} ${createAt
    .getHours()
    .toString()
    .padStart(2, "0")}:${createAt
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${createAt.getSeconds().toString().padStart(2, "0")}`;

  function currentMemberRoles() {
    let ret = [];
    for (const r of selectedMember?.roles ?? []) {
      ret.push({ label: r.name, value: r.id });
    }

    return ret;
  }

  const utils = trpc.useContext();

  const rolesQuery = trpc.roles.getRoles.useInfiniteQuery(
    { serverId: server.id },
    { getPreviousPageParam: (d) => d.nextCursor }
  );

  const [serverRoles, setServerRoles] = useState(() => {
    const roles = rolesQuery.data?.pages.map((page) => page.roles).flat();
    return roles ?? [];
  });

  const addServerRoles = useCallback((incoming?: RoleTypes[]) => {
    setServerRoles((current) => {
      const map: Record<RoleTypes["id"], RoleTypes> = {};
      for (const role of current ?? []) {
        map[role.id] = role;
      }
      for (const role of incoming ?? []) {
        map[role.id] = role;
      }

      return Object.values(map);
    });
  }, []);

  useEffect(() => {
    const roles = rolesQuery.data?.pages.map((page) => page.roles).flat();
    addServerRoles(roles);
  }, [rolesQuery.data?.pages, addServerRoles]);

  trpc.roles.onRoleUpdate.useSubscription(undefined, {
    onData(roles) {
      addServerRoles([roles]);
    },
    onError(err) {
      console.error("Subscription error:", err);
    },
  });

  return (
    <>
      <Head>
        <title>Settings - {server.name}</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.options}>
          <div id="info" className={styles.option}>
            <h1 className={styles.option_title}>Info</h1>
            <div>
              <h3>Name: {server.name!}</h3>
              <h3 title={server.owner.nickname ? user?.name : user?.id}>
                Owner: {server.owner.nickname ?? user?.name}
              </h3>
              <h3
                title={`Textchannel: ${
                  server.textchannel.length ?? 0
                }\nVoicechannel: ${server.voicechannel.length ?? 0}`}
              >
                Channel count:{" "}
                {server.textchannel.length + server.voicechannel.length ?? 0}
              </h3>
              <h3>Member count: {server.members.length ?? 0}</h3>
              <h3>Created at: {dateString}</h3>
              <p id={styles.gap} />
              <p id={styles.separator} />
              <p id={styles.gap} />
              <p
                className={styles.option_category}
                onClick={() => {
                  navigator.clipboard.writeText(
                    `${BASE_URL}/${server.id}/invite`
                  );
                }}
              >
                {" "}
                Copy Invite Link
              </p>
              <p id={styles.gap} />
              <p
                onClick={() => setTransferOwnershipModalOpen(true)}
                id={styles.delete}
                className={styles.option_category}
              >
                Transfer Ownership
              </p>
            </div>
          </div>
          <div id="moderation" className={styles.option}>
            <>
              <h1 className={styles.option_title}>Info</h1>
              <ModalCheckbox
                value="Display Badges"
                checked={server.settings?.displayBadges}
                onChange={(checked) => {
                  updateSettings.mutate({
                    serverId: server.id,
                    displayBadges: checked,
                  });
                }}
              />
              <ModalCheckbox
                value="Display Role Colors"
                checked={server.settings?.displayRoleColors}
                onChange={(checked) => {
                  updateSettings.mutate({
                    serverId: server.id,
                    displayRoleColors: checked,
                  });
                }}
              />
              <ModalCheckbox
                value="Display Offline Members"
                checked={server.settings?.displayOfflineMembers}
                onChange={(checked) => {
                  updateSettings.mutate({
                    serverId: server.id,
                    displayOfflineMembers: checked,
                  });
                }}
              />
              <ModalCheckbox
                value="Log Channel Updates"
                checked={server.settings?.logChannelUpdates}
                onChange={(checked) => {
                  updateSettings.mutate({
                    serverId: server.id,
                    logChannelUpdates: checked,
                  });
                }}
              />
              <ModalCheckbox
                value="Log Joins and Leaves"
                checked={server.settings?.logJoinLeave}
                onChange={(checked) => {
                  updateSettings.mutate({
                    serverId: server.id,
                    logJoinLeave: checked,
                  });
                }}
              />
              <ModalCheckbox
                value="Log Member Updates"
                checked={server.settings?.logMemberUpdates}
                onChange={(checked) => {
                  updateSettings.mutate({
                    serverId: server.id,
                    logMemberUpdates: checked,
                  });
                }}
              />
              <ModalCheckbox
                value="Log Message Updates"
                checked={server.settings?.logMessageUpdates}
                onChange={(checked) => {
                  updateSettings.mutate({
                    serverId: server.id,
                    logMessageUpdates: checked,
                  });
                }}
              />
              <ModalCheckbox
                value="Log Messages"
                checked={server.settings?.logMessages}
                onChange={(checked) => {
                  updateSettings.mutate({
                    serverId: server.id,
                    logMessages: checked,
                  });
                }}
              />
              <ModalCheckbox
                value="Log Role Updates"
                checked={server.settings?.logRoleUpdates}
                onChange={(checked) => {
                  updateSettings.mutate({
                    serverId: server.id,
                    logRoleUpdates: checked,
                  });
                }}
              />
              <ModalCheckbox
                value="Notify Users on Unban"
                checked={server.settings?.notifyUnban}
                onChange={(checked) => {
                  updateSettings.mutate({
                    serverId: server.id,
                    notifyUnban: checked,
                  });
                }}
              />
              <ModalCheckbox
                value="Notify Users on Ban"
                checked={server.settings?.notifyBan}
                onChange={(checked) => {
                  updateSettings.mutate({
                    serverId: server.id,
                    notifyBan: checked,
                  });
                }}
              />
              <ModalCheckbox
                value="Notify Users on Kick"
                checked={server.settings?.notifyKick}
                onChange={(checked) => {
                  updateSettings.mutate({
                    serverId: server.id,
                    notifyKick: checked,
                  });
                }}
              />
            </>
          </div>
          <div id="roles" className={styles.option}>
            <h1 className={styles.option_title}>Roles</h1>
            <p
              onClick={() => {
                setCreateRoleModalOpen(true);
              }}
              className={styles.option_category}
            >
              Create Role
            </p>
            {isLoaded ? (
              <div className={serverStyles.roles}>
                <Droppable
                  droppableId="roles"
                  direction="vertical"
                  isDropDisabled={false}
                >
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {server.roles.sort(sortRoles).map((role, index) => (
                        <Draggable
                          draggableId={`role#${role.id}#${server.id}`}
                          index={index}
                          key={role.id}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <p
                                className={serverStyles.role}
                                onClick={() => {
                                  setSelectedRole(role);
                                  setRoleColor(role.color);
                                  setRolePermissions(role.permissions);
                                  setRoleVisibility(role.visible);
                                  if (role.id !== server.everyoneRole)
                                    setEditRoleModalOpen(true);
                                }}
                                key={role.id}
                              >
                                {role.name}
                              </p>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ) : null}
          </div>
          <div id="member" className={styles.option}>
            <h1 className={styles.option_title}>Member</h1>
            <div className={serverStyles.members}>
              {server.members.sort(sortMembers).map((user) => (
                <p
                  className={serverStyles.member}
                  onClick={() => {
                    setSelectedMember(user);
                    setEditMemberModalOpen(true);
                  }}
                  key={user.id}
                >
                  {user.nickname ?? user.user?.name}
                </p>
              ))}
            </div>
          </div>
          <div id="action_log" className={styles.option}>
            <h1 className={styles.option_title}>Action Log</h1>
            <>
              {actionLogServer?.actions.map((action) => {
                const day = new Date(action.createdAt)
                  .getDate()
                  .toString()
                  .padStart(2, "0");
                const month = (new Date(action.createdAt).getMonth() + 1)
                  .toString()
                  .padStart(2, "0");
                const year = new Date(action.createdAt).getFullYear();
                const date = `${month}/${day}/${year}`;
                return (
                  <div key={action.id}>
                    <p>
                      {action.member.user.name}: {action.action} at {date}
                    </p>
                  </div>
                );
              })}
            </>
          </div>
          <div id="banned_user" className={styles.option}>
            <h1 className={styles.option_title}>Banned User</h1>
            <div className={serverStyles.member}>
              {server.bannedUser.sort(sortUsers).map((user) => (
                <p
                  className={serverStyles.member}
                  key={user.id}
                  onClick={() => {
                    setSelectedBannedUser(user);
                    setBannedUserInfoModalOpen(true);
                  }}
                >
                  {user.name}
                </p>
              ))}
            </div>
          </div>
          <div id="developer" className={styles.option}>
            <h1 className={styles.option_title}>Developer</h1>
            <div>
              <h3
                onClick={(e) => {
                  const text = document.querySelector(".copy_server");
                  navigator.clipboard.writeText(text?.textContent!);
                }}
              >
                Server ID:{" "}
                <span id={styles.click} className="copy_server">
                  {server.id}
                </span>
              </h3>
              <h3
                onClick={(e) => {
                  const text = document.querySelector(".copy_owner");
                  navigator.clipboard.writeText(text?.textContent!);
                }}
              >
                Owner ID:{" "}
                <span id={styles.click} className="copy_owner">
                  {server.owner.id}
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.option_categories}>
          <p
            onClick={() => setSettingsOpen(false)}
            style={{
              color: "black",
              backgroundColor: "#fff",
            }}
            id={styles.no_hover}
            className={styles.option_category}
          >
            Back
          </p>
          <span id={styles.separator} />
          <a href="#info" className={styles.option_category}>
            Info
          </a>
          <a href="#moderation" className={styles.option_category}>
            Moderation
          </a>
          <span id={styles.separator} />
          <a href="#roles" className={styles.option_category}>
            Roles
          </a>
          <a href="#member" className={styles.option_category}>
            Member
          </a>
          <a href="#action_log" className={styles.option_category}>
            Action Log
          </a>
          <a href="#banned_user" className={styles.option_category}>
            Banned User
          </a>
          <span id={styles.separator} />
          <a href="#developer" className={styles.option_category}>
            Developer
          </a>
          <span id={styles.separator} />
          <p
            onClick={() => setDeleteServerModalOpen(true)}
            id={styles.delete}
            className={styles.option_category}
          >
            Delete Server!
          </p>
        </div>
      </div>
      <Modal
        blur
        closable
        open={createRoleModalOpen}
        setOpen={setCreateRoleModalOpen}
      >
        <ModalInput focus placeholder="Role Name" rref={roleNameRef} />
        <ModalDropdown
          multiselect
          onSelectMultiple={(options) => {
            const rolePerms: Permission[] = [];
            options.forEach((option) => {
              if (!rolePerms.includes(option.value))
                rolePerms.push(option.value);
            });
            setRolePermissions(rolePerms);
          }}
          options={PermissionOptions}
        />
        <ModalColorPicker
          value="Role Color:"
          defaultValue={roleColor}
          onChange={(color) => {
            setRoleColor(color);
          }}
        />
        <ModalCheckbox
          checked
          value="Visible"
          onChange={(visible) => setRoleVisibility(visible)}
        />
        <ModalButton value="Create role" onClick={() => handleCreateRole()} />
      </Modal>
      <Modal blur open={editRoleModalOpen} setOpen={setEditRoleModalOpen}>
        <ModalTitle value={selectedRole?.name!} />
        <ModalInput focus placeholder="Change Name" rref={roleNameRef} />
        <ModalDropdown
          multiselect
          onSelectMultiple={(options) => {
            const rolePerms: Permission[] = [];
            options.forEach((option) => {
              if (!rolePerms.includes(option.value))
                rolePerms.push(option.value);
            });
            setRolePermissions(rolePerms);
          }}
          options={PermissionOptions}
          defaultValues={(
            selectedRole?.permissions ?? ([] as Permission[])
          ).map((permission) => {
            return selectedRole?.permissions.length
              ? { label: permission.toString(), value: permission }
              : {
                  label: null,
                  value: null,
                };
          })}
        />
        <ModalColorPicker
          value="Role Color:"
          defaultValue={selectedRole?.color}
          onChange={(color) => {
            setRoleColor(color);
          }}
        />
        <ModalCheckbox
          checked={selectedRole?.visible}
          value="Visible"
          onChange={(visible) => setRoleVisibility(visible)}
        />
        <ModalButton
          type="delete"
          value="Delete Role"
          onClick={() => handleDeleteRole()}
        />
        <ModalButton
          type="complete"
          value="Save Changes!"
          onClick={() => handleUpdateRole()}
        />
        <ModalButton
          value="Discard Changes!"
          type="delete"
          onClick={() => discard(setEditRoleModalOpen)}
        />
      </Modal>
      <Modal
        blur
        closable
        open={transferOwnershipModalOpen}
        setOpen={setTransferOwnershipModalOpen}
      >
        <ModalTitle value="Transfer Ownership" />
        <ModalDropdown
          defaultValue={
            server.members[0]?.id !== server.ownerid
              ? {
                  label:
                    server.members[0]?.nickname ??
                    server.members[0]?.user?.name!,
                  value: server.members[0]?.id!,
                }
              : {
                  label:
                    server.members[1]?.nickname ??
                    server.members[1]?.user?.name!,
                  value: server.members[1]?.id!,
                }
          }
          options={server.members.map((member) => {
            return member.id !== server.ownerid
              ? {
                  label: member.nickname ?? member.user?.name,
                  value: member.id,
                }
              : { label: null, value: null };
          })}
          onSelect={(option) => {
            setTransferOwnershipUser(option?.value);
          }}
        />
        <ModalInput placeholder="Server Name" rref={transferOwnershipRef} />
        <ModalButton
          type="delete"
          value="Transfer Ownership"
          onClick={() => {
            handleTransferOwnership();
          }}
        />
      </Modal>
      <Modal open={editMemberModalOpen} setOpen={setEditMemberModalOpen} blur>
        <ModalTitle
          value={selectedMember?.nickname ?? selectedMember?.user.name ?? ""}
        />
        <ModalDropdown
          multiselect
          onSelectMultiple={(options) => {
            const memberRoles: Role[] = [];
            options.forEach((option) => {
              if (!memberRoles.includes(option.value))
                memberRoles.push(option.value);
            });
            setMemberRoles(memberRoles);
          }}
          defaultValues={currentMemberRoles()}
          options={server.roles.map((role) => {
            return { label: role.name, value: role.id };
          })}
        />
        <ModalButton
          type="complete"
          value="Save Changes!"
          onClick={() => handleUpdateMember()}
        />
        <ModalButton
          value="Discard Changes!"
          type="delete"
          onClick={() => discard(setEditMemberModalOpen)}
        />
      </Modal>
      <Modal
        open={bannedUserInfoModalOpen}
        setOpen={setBannedUserInfoModalOpen}
        closable
        blur
        darken="4"
      >
        <ModalTitle value={selectedBannedUser?.name ?? ""} />
        <ModalButton
          onClick={() =>
            handleUnbanUser(selectedBannedUser!, server.id, unbanUser)
          }
          type="delete"
          value="Unban User!"
        />
      </Modal>
      <Modal
        open={deleteServerModalOpen}
        setOpen={setDeleteServerModalOpen}
        blur
        closable
      >
        <ModalTitle value={server.name} />
        <ModalInput focus placeholder="Server Name" rref={deleteServerRef} />
        <ModalInput
          placeholder="Repeat Server Name"
          rref={repeatDeleteServerRef}
        />
        <ModalButton
          onClick={() =>
            handleDeleteServer(
              deleteServerRef,
              repeatDeleteServerRef,
              server,
              deleteServer
            )
          }
          value="Delete!"
          type="delete"
        />
      </Modal>
    </>
  );
};

export default ServerSettings;
