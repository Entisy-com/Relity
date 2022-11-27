import { Role, User } from "@prisma/client";
import { FC, useEffect, useState } from "react";
import { string } from "zod";
import styles from "../styles/components/userList.module.scss";
import { trpc } from "../utils/trpc";
import Modal from "./modal/Modal";
import ModalButton from "./modal/ModalButton";
import ModalText from "./modal/ModalText";
import ModalTitle from "./modal/ModalTitle";

type Props = {
  setSelectedUser: Function;
  serverUserInfoModalOpen: boolean;
  setServerUserInfoModalOpen: Function;
  type?: string;
  users?: User[];
  roles?: Role[];
};

const UserList: FC<Props> = ({
  type,
  users,
  roles,
  serverUserInfoModalOpen,
  setServerUserInfoModalOpen,
  setSelectedUser,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        {(users ?? []).map((user) => {
          return (
            <p
              className={styles.user}
              onClick={() => {
                setSelectedUser(user);
                setServerUserInfoModalOpen(true);
              }}
              key={user.id}
            >
              {user.name}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default UserList;
