import { Server, User, Role } from "@prisma/client";
import { GetServerSidePropsContext, NextPage } from "next";
import { useEffect } from "react";
import styles from "../../styles/pages/settings.module.scss";
import serverStyles from "../../styles/pages/serverSettings.module.scss";
import { trpc } from "../../utils/trpc";
import { isServerAThing } from "../api/v1/getServer";

type Props = {
  server: Server;
};

const ServerSettings: NextPage<Props> = ({ server }) => {
  const updateServer = trpc.server.updateServer.useMutation();

  if (!server || !server.owner || !server.users) return <></>;

  const sortMembers = (a: User, b: User) => {
    return a.name.localeCompare(b.name);
  };
  const sortRoles = (a: Role, b: Role) => {
    return a.position.toString().localeCompare(b.position.toString());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        <div id="info" className={styles.option}>
          <h1 className={styles.option_title}>Info</h1>
          <div>
            <h3>Name:</h3>
            <h5>{server.name!}</h5>
            <h3>Owner:</h3>
            <h5>{server.owner.name}</h5>
            {/* TODO: Add Transfer ownership modal  */}
          </div>
        </div>
        <div id="roles" className={styles.option}>
          <h1 className={styles.option_title}>Roles</h1>
          <p
            onClick={() => {
              // TODO: create Role Modal
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
            <h3>Member count: {server.users.length ?? 0}</h3>
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
