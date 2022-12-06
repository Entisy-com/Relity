/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { GetServerSidePropsContext, NextPage } from "next";
import { useCallback, useRef, useState } from "react";
import styles from "../../styles/pages/settings.module.scss";
import serverStyles from "../../styles/pages/serverSettings.module.scss";
import { trpc } from "../../utils/trpc";
import { isServerAThing } from "../api/v1/getServer";
import Modal from "../../components/modal/Modal";
import ModalInput from "../../components/modal/ModalInput";
import ModalButton from "../../components/modal/ModalButton";
import ModalTitle from "../../components/modal/ModalTitle";
import ModalDropdown from "../../components/modal/ModalDropdown";
import type { Role, User, Permission } from "@prisma/client";
import { Action } from "@prisma/client";
import type { ActionLog, Member, Server } from "../../types";
import { PermissionOptions } from "../../types";
import type { ActionType } from "@prisma/client";
import ModalCheckbox from "../../components/modal/ModalCheckbox";
import Head from "next/head";
import { ModalColorPicker } from "../../components/modal";
import { BASE_URL } from "../../utils/constants";
import { useSession } from "next-auth/react";

type Props = {
  server: Server;
};

const ServerSettings: NextPage<Props> = ({ server }) => {
  const { data: session } = useSession();
  const user = session?.user;

  const [selectedUser, setSelectedUser] = useState<User>();
  const [selectedRole, setSelectedRole] = useState<Role>();
  const [editRoleModalOpen, setEditRoleModalOpen] = useState(false);
  const [createRoleModalOpen, setCreateRoleModalOpen] = useState(false);
  const [rolePermissions, setRolePermissions] = useState<Permission[]>([]);
  const [roleVisibility, setRoleVisibility] = useState(true);
  const [roleColor, setRoleColor] = useState("#ffffff");
  const [editUserModalOpen, setEditUserModalOpen] = useState(false);
  const [transferOwnershipModalOpen, setTransferOwnershipModalOpen] =
    useState(false);

  const [transferOwnershipUser, setTransferOwnershipUser] = useState(
    server.members[0]?.id !== server.ownerid
      ? server.members[0]?.id
      : server.members[1]?.id
  );
  const [actionLog, setActionLog] = useState(
    server.actionLog ?? ({} as ActionLog)
  );

  const createRole = trpc.roles.createRole.useMutation();
  const updateServer = trpc.server.updateServer.useMutation();
  const addActionToLog = trpc.server.addActionToActionLog.useMutation();
  const { data: actionLogServer } = trpc.server.getActionLogFromServer.useQuery(
    {
      serverId: server.id,
    }
  );

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
      // server.actionLog!.actions = sorted;
      // return server.actionLog;
    });
  }, []);

  function handleCreateRole() {
    setCreateRoleModalOpen(false);
    if (!roleNameRef.current) return;
    if (!(roleNameRef.current.value.trim().length > 0)) return;
    createRole.mutate({
      name: roleNameRef.current.value,
      permissions: rolePermissions,
      color: roleColor,
      serverId: server.id,
      visible: roleVisibility,
    });
    roleNameRef.current.value = "";
    setRolePermissions([]);
    const { data: member } = trpc.user.getMemberByUserId.useQuery({
      userId: user?.id!,
      serverId: server.id,
    });
    addActionToLog.mutate({
      action: Action.CREATE_ROLE,
      serverid: server.id,
      memberId: member?.id!,
    });
  }

  function handleUpdateRole() {
    setRoleColor(selectedRole?.color!);
    setRolePermissions(selectedRole?.permissions!);
    setRoleVisibility(selectedRole?.visible!);
    setEditRoleModalOpen(false);
    createRole.mutate({
      name: roleNameRef?.current?.value ?? selectedRole?.name!,
      permissions: rolePermissions,
      color: roleColor,
      serverId: server.id,
      visible: roleVisibility,
    });
    if (roleNameRef.current && roleNameRef.current.value.trim().length > 0)
      roleNameRef.current.value = "";
    discard();
  }

  function handleTransferOwnership() {
    if (!transferOwnershipRef.current) return;
    if (!(transferOwnershipRef.current.value.trim().length > 0)) return;
    if (transferOwnershipRef.current.value !== server.name) return;
    updateServer.mutate({
      id: server.id,
      ownerId: transferOwnershipUser,
    });
    setTransferOwnershipModalOpen(false);
    window.location.href = `/${server.id}`;
  }

  function discard() {
    setRoleColor("#ffffff");
    setRolePermissions([]);
    setRoleVisibility(true);
    setSelectedRole(undefined);
    setEditRoleModalOpen(false);
  }

  if (!server || !server.owner || !server.members) return <></>;

  const sortMembers = (a: Member, b: Member) => {
    //Checkt ob a und b nen nicknamen haben und sortiert anhand diesem und hat auch die fälle für wenn einer oder keiner einen nickname hat
    return a.nickname
      ? b.nickname
        ? a.nickname.localeCompare(b.nickname)
        : a.nickname.localeCompare(b.user.name)
      : b.nickname
      ? a.user.name.localeCompare(b.nickname)
      : a.user.name.localeCompare(b.user.name);
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
  return (
    <>
      <Head>
        <title>Server - Settings</title>
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.options}>
          <div id="info" className={styles.option}>
            <h1 className={styles.option_title}>Info</h1>
            <div>
              <h3>Name: {server.name!}</h3>
              <h3 title={server.owner.user.name}>
                Owner: {server.owner.nickname}
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
            <div className={serverStyles.roles}>
              {server.roles.sort(sortRoles).map((role) => (
                <p
                  onClick={() => {
                    setSelectedRole(role);
                    setRoleColor(role.color);
                    setRolePermissions(role.permissions);
                    setRoleVisibility(role.visible);
                    setEditRoleModalOpen(true);
                  }}
                  key={role.id}
                >
                  {role.name}
                </p>
              ))}
            </div>
          </div>
          <div id="member" className={styles.option}>
            <h1 className={styles.option_title}>Member</h1>
            <div>
              {server.members
                .sort((a: any, b: any) => sortMembers(a, b))
                .map((user) => (
                  <p key={user.id}>{user.nickname ?? user.user.name}</p>
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
            <div>
              {server.bannedUser.sort(sortUsers).map((member) => (
                <p key={member.id}>{member.name}</p>
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
          <a
            href={server.id}
            style={{
              color: "black",
              backgroundColor: "#fff",
            }}
            id={styles.no_hover}
            className={styles.option_category}
          >
            Back
          </a>
          <span id={styles.separator} />
          <a href="#info" className={styles.option_category}>
            Info
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
            onClick={() => {}}
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
          type="complete"
          value="Save Changes!"
          onClick={() => handleUpdateRole()}
        />
        <ModalButton
          value="Discard Changes!"
          type="delete"
          onClick={() => discard()}
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
                    server.members[0]?.user.name!,
                  value: server.members[0]?.id!,
                }
              : {
                  label:
                    server.members[1]?.nickname ??
                    server.members[1]?.user.name!,
                  value: server.members[1]?.id!,
                }
          }
          options={server.members.map((member) => {
            return member.id !== server.ownerid
              ? { label: member.nickname ?? member.user.name, value: member.id }
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
      <Modal open={editUserModalOpen} setOpen={setEditRoleModalOpen} blur>
        <ModalTitle value={selectedUser?.name!} />
        <ModalDropdown
          options={server.roles.map((role) => {
            return { label: role.name, value: role.id };
          })}
        />
      </Modal>
    </>
  );
};

export default ServerSettings;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const server = await isServerAThing(ctx.req, ctx.res);
  return server
    ? {
        props: {
          server: JSON.parse(JSON.stringify(server)),
        },
      }
    : { props: {} };
}
