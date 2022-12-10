import { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/components/friendList.module.scss";
import { User } from "../types";
import { trpc } from "../utils/trpc";
import { Modal, ModalInput, ModalList, ModalTitle } from "./modal";

type Props = {
  user: User;
};

const FriendList: FC<Props> = ({ user }) => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchUpdated, setSearchUpdated] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);

  const utils = trpc.useContext();

  const addFriendMutation = trpc.user.addFriend.useMutation();

  const friendsQuery = trpc.user.getFriendsByUserId.useInfiniteQuery(
    { userId: user.id },
    { getPreviousPageParam: (d) => d.nextCursor }
  );

  const usersQuery = trpc.user.searchUser.useInfiniteQuery(
    {
      name: nameRef.current?.value.trim().length ? nameRef.current?.value : "",
    },
    { getPreviousPageParam: (d) => d.nextCursor }
  );

  const [users, setUsers] = useState(() => {
    const users = usersQuery.data?.pages.map((page) => page.users).flat();
    return users ?? [];
  });

  const [friends, setFriends] = useState(() => {
    const friends = friendsQuery.data?.pages.map((page) => page.friends).flat();
    return friends ?? [];
  });

  const addFriends = useCallback((incoming?: User[]) => {
    setFriends((current) => {
      const map: Record<User["id"], User> = {};
      for (const f of current ?? []) {
        map[f.id] = f;
      }
      for (const f of incoming ?? []) {
        map[f.id] = f;
      }

      return Object.values(map);
    });
  }, []);

  const addUsers = useCallback((incoming?: User[]) => {
    setUsers((current) => {
      const map: Record<User["id"], User> = {};
      for (const f of current ?? []) {
        map[f.id] = f;
      }
      for (const f of incoming ?? []) {
        map[f.id] = f;
      }

      return Object.values(map);
    });
  }, []);

  useEffect(() => {
    const f = friendsQuery.data?.pages.map((page) => page.friends).flat();
    addFriends(f);
  }, [friendsQuery.data?.pages, addFriends]);

  useEffect(() => {
    const u = usersQuery.data?.pages.map((page) => page.users).flat();
    addUsers(u);
    setSearchUpdated(false);
  }, [usersQuery.data?.pages, addUsers, searchUpdated, setSearchUpdated]);

  trpc.user.onFriendAdd.useSubscription(undefined, {
    onData(user) {
      addFriends(user);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.user.getFriendsByUserId.invalidate();
    },
  });

  trpc.user.onUserSearchUpdate.useSubscription(undefined, {
    onData(user) {
      addUsers(user);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.user.searchUser.invalidate();
    },
  });

  function searchName() {
    if (!nameRef.current) return;
    if (!(nameRef.current.value.trim().length > 0)) return;
  }

  function addFriend(id: string) {
    addFriendMutation.mutate({
      target: id,
    });
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.add_friend}>
          <p
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              height: 30,
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
            }}
            onClick={() => setSearchModalOpen(true)}
          >
            Add Friend
          </p>
        </div>
        {(user?.friends ?? []).map((friend) => (
          <div key={friend.id} className={styles.friend}>
            <p>{friend.name}</p>
          </div>
        ))}
      </div>
      <Modal
        open={searchModalOpen}
        setOpen={setSearchModalOpen}
        blur
        closable
        darken
      >
        <ModalTitle value="Find Friends" />
        <ModalInput
          clear
          focus
          placeholder="Name"
          rref={nameRef}
          onKeyUp={(key) => setSearchUpdated(true)}
        />
        {users.length ? (
          <ModalList
            undecorated
            outline
            clickable
            items={users.map((u) => {
              return { label: u.name, value: u.id };
            })}
            onClick={(button, item) => addFriend(item.value)}
          />
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
};

export default FriendList;
