import { Role, User } from "@prisma/client";
import { FC } from "react";
import styles from "../styles/components/userList.module.scss";

type Props = {
  ownerId: string;
  setSelectedUser: Function;
  serverUserInfoModalOpen: boolean;
  setServerUserInfoModalOpen: Function;
  type?: string;
  users?: User[];
  roles?: Role[];
};

const UserList: FC<Props> = ({
  ownerId,
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
        {(users ?? [])
          .sort((a: any, b: any) => a.name.localeCompare(b.name))
          .map((user) => {
            return (
              <div
                className={styles.user}
                onClick={() => {
                  setSelectedUser(user);
                  setServerUserInfoModalOpen(true);
                }}
                key={user.id}
              >
                <img
                  className={styles.image}
                  src={user.image ?? ""}
                  alt=""
                  width={30}
                  height={30}
                />
                <p className={styles.name}>{user.name}</p>
                {ownerId === user.id && (
                  <img
                    className={styles.owner}
                    src="/crown.svg"
                    width={15}
                    height={15}
                    alt=""
                  />
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default UserList;
