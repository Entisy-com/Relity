import { Role, User } from "@prisma/client";
import { FC } from "react";
import styles from "../styles/components/userList.module.scss";

type Props = {
  type?: string;
  users?: User[];
  roles?: Role[];
};

const UserList: FC<Props> = ({ type, users, roles }) => {
  return (
    <div className={styles.wrapper}>
      {users &&
        users.map((user) => {
          return <p>{user.name}</p>;
        })}
    </div>
  );
};

export default UserList;
