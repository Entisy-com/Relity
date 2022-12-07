import { FC } from "react";
import styles from "../styles/components/userList.module.scss";
import { Role, User } from "@prisma/client";
import { Member } from "../types";

type Props = {
  ownerId: string;
  setSelectedMember: Function;
  memberInfoModalOpen: boolean;
  setMemberInfoModalOpen: Function;
  type?: string;
  members?: Member[];
  roles?: Role[];
};

const UserList: FC<Props> = ({
  ownerId,
  type,
  members,
  roles,
  memberInfoModalOpen,
  setMemberInfoModalOpen,
  setSelectedMember,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        {(members ?? [])
          .sort((a: Member, b: Member) =>
            (a.nickname ?? a.user.name).localeCompare(b.nickname ?? b.user.name)
          )
          .map((member) => {
            return (
              <div
                className={styles.user}
                onClick={() => {
                  setSelectedMember(member);
                  setMemberInfoModalOpen(true);
                }}
                key={member.id}
              >
                <img
                  className={styles.image}
                  src={
                    member.pfp
                      ? member.pfp
                      : member.user.image
                      ? member.user.image
                      : ""
                  }
                  alt=""
                  width={30}
                  height={30}
                />
                <p className={styles.name}>
                  {member.nickname ?? member.user.name}
                </p>
                {ownerId === member.id && (
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
