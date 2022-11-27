import { useSession } from "next-auth/react";
import { useState } from "react";
import Modal from "./modal/Modal";
import ModalTitle from "./modal/ModalTitle";
import styles from "../styles/components/profile.module.scss";
import ModalButton from "./modal/ModalButton";
import ModalText from "./modal/ModalText";

const Profile = () => {
  const session = useSession();
  const user = session.data?.user;
  const [open, setOpen] = useState(false);

  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper} onClick={() => setOpen(true)}>
        {user.image ? (
          <div className={styles.image}>
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
