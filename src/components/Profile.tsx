/* eslint-disable @next/next/no-img-element */
import type { FC } from "react";
import { useState } from "react";
import Modal from "./modal/Modal";
import ModalTitle from "./modal/ModalTitle";
import styles from "../styles/components/profile.module.scss";
import ModalButton from "./modal/ModalButton";
import ModalText from "./modal/ModalText";
import { BASE_URL } from "../utils/constants";
import { OnlineStatus } from "@prisma/client";
import type { Member } from "../types";

type Props = {
  member: Member;
};

const Profile: FC<Props> = ({ member }) => {
  const [open, setOpen] = useState(false);

  if (!member) return <></>;

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
        {member.pfp ? (
          <div className={styles.image}>
            {/* user.status is undefined */}
            {member.user.status === OnlineStatus.ONLINE && <p>ONLINE</p>}
            <img
              src={member.pfp}
              alt="Profile Picture"
              width={32}
              height={32}
            />
          </div>
        ) : member.user.image ? (
          <div className={styles.image}>
            {/* user.status is undefined */}
            {member.user.status === OnlineStatus.ONLINE && <p>ONLINE</p>}
            <img
              src={member.user.image}
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
        <ModalTitle value={`Name: ${member.nickname ?? member.user.name}`} />
        <ModalText
          value={`Id: ${member.id}`}
          title={`Userid: ${member.userId}`}
        />
        <ModalText
          value={member.user.email ? `Email: ${member.user.email}` : ""}
        />
        <ModalButton
          value="Settings"
          onClick={() => (window.location.href = "/settings")}
        />
      </Modal>
    </>
  );
};

export default Profile;
