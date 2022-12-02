import { Server, User, Role } from "@prisma/client";
import { GetServerSidePropsContext, NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/pages/settings.module.scss";
import serverStyles from "../../styles/pages/serverSettings.module.scss";
import { trpc } from "../../utils/trpc";
import { isServerAThing } from "../api/v1/getServer";
import Modal from "../../components/modal/Modal";
import ModalInput from "../../components/modal/ModalInput";
import ModalButton from "../../components/modal/ModalButton";

type Props = {
  server: Server;
};

const ServerSettings: NextPage<Props> = ({ server }) => {
  const [createRoleModalOpen, setCreateRoleModalOpen] = useState(false);
  const createRole = trpc.roles.createRole.useMutation();
  const roleNameRef = useRef<HTMLInputElement>(null);
  function handleCreateRole() {
    setCreateRoleModalOpen(false);
    if (!roleNameRef.current) return;
    if (!(roleNameRef.current.value.trim().length > 0)) return;
    createRole.mutate({
      name: roleNameRef.current.value,
      permissions: [],
      color: "#fff",
      serverId: server.id,
      visible: true,
    });
    roleNameRef.current.value = "";
  }
  const updateServer = trpc.server.updateServer.useMutation();

  if (!server || !server.owner || !server.users) return <></>;

  const sortMembers = (a: User, b: User) => {
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
      <div className={styles.wrapper}>
        <div className={styles.options}>
          <div id="info" className={styles.option}>
            <h1 className={styles.option_title}>Info</h1>
            <div>
              <h3>Name: {server.name!}</h3>
              <h3>Owner: {server.owner.name}</h3>
              <h3
                title={`Textchannel: ${
                  server.textchannel.length ?? 0
                }\nVoicechannel: ${server.voicechannel.length ?? 0}`}
              >
                Channel count:{" "}
                {server.textchannel.length + server.voicechannel.length ?? 0}
              </h3>
              <h3>Member count: {server.users.length ?? 0}</h3>
              <h3>Created at: {dateString}</h3>
              {/* TODO: Add Transfer ownership modal  */}
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
                <p key={role.id}>{role.name}</p>
              ))}
            </div>
          </div>
          <div id="member" className={styles.option}>
            <h1 className={styles.option_title}>Member</h1>
            <div>
              {server.users.sort(sortMembers).map((user) => (
                <p key={user.id}>{user.name}</p>
              ))}
            </div>
          </div>
          <div id="action_log" className={styles.option}>
            <h1 className={styles.option_title}>Action Log</h1>
          </div>
          <div id="banned_user" className={styles.option}>
            <h1 className={styles.option_title}>Banned User</h1>
            <div>
              {server.bannedUser.sort(sortMembers).map((member) => (
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
            href=".."
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
        <ModalButton value="Create role" onClick={() => handleCreateRole()} />
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
