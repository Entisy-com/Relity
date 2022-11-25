import { GetServerSidePropsContext, NextPage } from "next";
import { signOut } from "next-auth/react";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import styles from "../styles/pages/settings.module.scss";

const Settings: NextPage = () => {
  //TODO: change example options into components

  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        <div className={styles.option}>
          <h1 className={styles.option_title}>Logout</h1>
          <p className={styles.option_button}>logout!</p>
        </div>
      </div>
      <div className={styles.option_categories}>
        <p
          onClick={() => (window.location.href = "..")}
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
        <p className={styles.option_category}>Account</p>
        <p className={styles.option_category}>Appearance</p>
        <p className={styles.option_category}>Developer</p>
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
    </div>
  );
};

export default Settings;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);
  return !session
    ? { redirect: { destination: "/login", persistent: false } }
    : { props: {} };
}
