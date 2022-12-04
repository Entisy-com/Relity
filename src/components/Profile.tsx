import { useSession } from "next-auth/react";
import { FC, useState } from "react";
import Modal from "./modal/Modal";
import ModalTitle from "./modal/ModalTitle";
import styles from "../styles/components/profile.module.scss";
import ModalButton from "./modal/ModalButton";
import ModalText from "./modal/ModalText";
import { BASE_URL } from "../utils/constants";
import { trpc } from "../utils/trpc";
import { OnlineStatus } from "@prisma/client";
import { User } from "@prisma/client";

type Props = {
  user: User;
};

const Profile: FC<Props> = ({ user }) => {
  const [open, setOpen] = useState(false);

  if (!user) return <></>;

  return (
    <>
      <div
        className={styles.wrapper}
        onClick={() => {
          if (window.location.href !== `${BASE_URL}/`)
            window.location.href = "..";
        }}
        onContextMenu={() => setOpen(true)}
      >
        {user.image ? (
          <div className={styles.image}>
            {user.status === OnlineStatus.ONLINE ? (
              <p>ONLINE</p>
            ) : (
              <p>OFFLINE</p>
            )}
            <img
              src={user.image}
              alt="Profile Picture"
              width={32}
              height={32}
            />
          </div>
        ) : (
          <div className={styles.image}>
            <img
              src="TODO: Default avatar"
              alt="Profile Picture"
              width={32}
              height={32}
            />
          </div>
        )}
      </div>
      <Modal blur closable open={open} setOpen={setOpen}>
        <ModalTitle value={user.name ? `Name: ${user.name}` : ""} />
        <ModalText value={`Id: ${user.id}`} />
        <ModalText value={user.email ? `Email: ${user.email}` : ""} />
        <ModalButton
          value="Settings"
          onClick={() => (window.location.href = "/settings")}
        />
      </Modal>
    </>
  );
};

export default Profile;
