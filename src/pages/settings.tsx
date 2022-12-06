import type { GetServerSidePropsContext, NextPage } from "next";
import type { DefaultSession } from "next-auth";
import { signOut } from "next-auth/react";
import { useState } from "react";
import Modal from "../components/modal/Modal";
import ModalButton from "../components/modal/ModalButton";
import ModalInput from "../components/modal/ModalInput";
import ModalTitle from "../components/modal/ModalTitle";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import styles from "../styles/pages/settings.module.scss";

type Props = {
  user: DefaultSession["user"];
};

const Settings: NextPage<Props> = ({ user }) => {
  const [showChangeUsernameModalOpen, setShowChangeUsernameModalOpen] =
    useState(false);
  const [showChangeEmailModalOpen, setShowChangeEmailModalOpen] =
    useState(false);
  const [showChangePasswordModalOpen, setShowChangePasswordModalOpen] =
    useState(false);

  //TODO: change example options into components

  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        <div id="account" className={styles.option}>
          <h1 className={styles.option_title}>Account</h1>
          <div>
            <h3>Username:</h3>
            <h5>{user?.name}</h5>
            <h3>Email:</h3>
            <h5>{user?.email}</h5>
            <p
              onClick={() => setShowChangePasswordModalOpen(true)}
              className={styles.option_category}
            >
              Change Password
            </p>
          </div>
        </div>
        <div id="appearance" className={styles.option}>
          <h1 className={styles.option_title}>Appearance</h1>
        </div>
        <div id="audio" className={styles.option}>
          <h1 className={styles.option_title}>Audio</h1>
        </div>
        <div id="text" className={styles.option}>
          <h1 className={styles.option_title}>Text</h1>
        </div>
        <div id="keybinds" className={styles.option}>
          <h1 className={styles.option_title}>Keybinds</h1>
        </div>
        <div id="language" className={styles.option}>
          <h1 className={styles.option_title}>Language</h1>
        </div>
        <div id="activity" className={styles.option}>
          <h1 className={styles.option_title}>Activity</h1>
        </div>
        <div id="themes" className={styles.option}>
          <h1 className={styles.option_title}>Themes</h1>
        </div>
        <div id="plugins" className={styles.option}>
          <h1 className={styles.option_title}>Plugins</h1>
        </div>
        <div id="developer" className={styles.option}>
          <h1 className={styles.option_title}>Developer</h1>
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
        <a href="#account" className={styles.option_category}>
          Account
        </a>
        <a href="#appearance" className={styles.option_category}>
          Appearance
        </a>
        <span id={styles.separator} />
        <a href="#audio" className={styles.option_category}>
          Audio
        </a>
        <a href="#text" className={styles.option_category}>
          Text
        </a>
        <a href="#keybinds" className={styles.option_category}>
          Keybinds
        </a>
        <a href="#language" className={styles.option_category}>
          Language
        </a>
        <span id={styles.separator} />
        <a href="#activity" className={styles.option_category}>
          Activity
        </a>
        <a href="#themes" className={styles.option_category}>
          Themes
        </a>
        <a href="#plugins" className={styles.option_category}>
          Plugins
        </a>
        <span id={styles.separator} />
        <a href="#developer" className={styles.option_category}>
          Developer
        </a>
        <span id={styles.separator} />
        <p
          onClick={() => signOut()}
          style={{
            color: "firebrick",
            backgroundColor: "#fff",
          }}
          id={styles.no_hover}
          className={styles.option_category}
        >
          Log out!
        </p>
      </div>
      <Modal
        closable
        open={showChangeUsernameModalOpen}
        setOpen={setShowChangeUsernameModalOpen}
      >
        <ModalTitle value="Change Username" />
        <ModalInput placeholder="Username" type="text" />
        <ModalInput placeholder="password" type="password" />
        <ModalButton value="Done!" />
      </Modal>
      <Modal
        closable
        open={showChangeEmailModalOpen}
        setOpen={setShowChangeEmailModalOpen}
      >
        <ModalTitle value="Change Email" />
        <ModalInput placeholder="Current Email" type="email" />
        <ModalInput placeholder="New Email" type="email" />
        <ModalInput placeholder="password" type="password" />
        <ModalButton value="Done!" />
      </Modal>
      <Modal
        blur
        closable
        open={showChangePasswordModalOpen}
        setOpen={setShowChangePasswordModalOpen}
      >
        <ModalTitle value="Change Password" />
        <ModalInput
          focus
          placeholder="Current Password"
          type="password"
          password
        />
        <ModalInput placeholder="New Password" type="password" password />
        <ModalInput
          placeholder="Repeat new Password"
          type="password"
          password
        />
        <ModalButton value="Done!" />
      </Modal>
    </div>
  );
};

export default Settings;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);
  return !session
    ? { redirect: { destination: "/login", persistent: false } }
    : { props: { user: session.user } };
}
