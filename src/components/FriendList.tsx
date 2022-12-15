import { NotificationType, OnlineStatus } from "@prisma/client";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import styles from "../styles/components/friendList.module.scss";
import { FriendRequest, User } from "../types";
import { Heart } from "../utils/heart";
import { trpc } from "../utils/trpc";
import FriendComp from "./Friend";
import { Modal, ModalInput, ModalList, ModalTitle } from "./modal";

type Props = {
  userid: string;
};

const FriendList: FC<Props> = ({ userid }) => {
  const { data: user } = trpc.user.getUserById.useQuery({
    id: userid,
  });

  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);

  const utils = trpc.useContext();

  const sendFriendRequestMutation =
    trpc.friendRequest.sendFriendRequest.useMutation();
  const removeFriendMutation = trpc.user.removeFriend.useMutation();

  const friendsQuery = trpc.user.getFriendsByUserId.useInfiniteQuery(
    { userId: userid },
    { getPreviousPageParam: (d) => d.nextCursor }
  );

  const usersQuery = trpc.user.searchUser.useInfiniteQuery(
    {
      id: userid,
      name: nameRef.current?.value.trim().length ? nameRef.current?.value : "",
    },
    { getPreviousPageParam: (d) => d.nextCursor }
  );

  const [users, setUsers] = useState<User[]>(() => {
    return usersQuery.data?.pages.map((page) => page.users).flat() ?? [];
  });

  const [friends, setFriends] = useState<User[]>(() => {
    return friendsQuery.data?.pages.map((page) => page.friends).flat() ?? [];
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

  useEffect(() => {
    const f = friendsQuery.data?.pages.map((page) => page.friends).flat();
    addFriends(f);
  }, [friendsQuery.data?.pages, addFriends]);

  useEffect(() => {
    utils.user.searchUser.invalidate();
    setUsers([]);
  }, [nameRef.current?.value]);

  useEffect(() => {
    const u = usersQuery.data?.pages.map((page) => page.users).flat();
    setUsers(u ?? []);
  }, [usersQuery.data?.pages, setUsers]);

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
    onData(data) {
      if (data.id === userid) setUsers(data.users);
    },
    onError(err) {
      console.error("Subscription error:", err);
      utils.user.searchUser.invalidate();
    },
  });

  function removeFriend(id: string) {
    removeFriendMutation.mutate({
      target: id,
    });
  }

  function sendFriendRequest(targetId: string) {
    setSearchModalOpen(false);
    nameRef.current!.value = "";
    sendFriendRequestMutation.mutate({
      target: targetId,
    });
  }

  function isFriend(id: string) {
    for (const friend of friends) {
      if (friend.id === id) return true;
    }
    return false;
  }

  let onlineFriends = [];
  let offlineFriends = [];

  for (const friend of friends) {
    friend.status === OnlineStatus.OFFLINE
      ? offlineFriends.push(friend)
      : onlineFriends.push(friend);
  }

  if (!user) return <></>;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.add_friend}>
          <p
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              height: 30,
              display: "grid",
              placeItems: "center",
              cursor: "pointer",
              marginBottom: "5px",
            }}
            onClick={() => setSearchModalOpen(true)}
          >
            Add Friend
          </p>
        </div>
        {onlineFriends.length > 0 ? (
          <p className={styles.title}>Online</p>
        ) : (
          <></>
        )}
        {onlineFriends.length > 0 &&
          (onlineFriends ?? []).map((friend) => {
            return (
              <FriendComp
                key={friend.id}
                image={friend.image}
                name={friend.name}
                status={friend.status}
              />
            );
          })}
        {offlineFriends.length > 0 ? (
          <p className={styles.title}>Offline</p>
        ) : (
          <></>
        )}
        {offlineFriends.length > 0 &&
          (offlineFriends ?? []).map((friend) => {
            return (
              <FriendComp
                key={friend.id}
                image={friend.image}
                name={friend.name}
                status={friend.status}
              />
            );
          })}
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
          onClear={() => utils.user.searchUser.invalidate()}
          onKeyUp={(event) => {
            if (
              event.code === "ShiftLeft" ||
              event.code === "ShiftRight" ||
              event.code === "AltRight" ||
              event.code === "AltLeft" ||
              event.code === "ControlRight" ||
              event.code === "ControlLeft" ||
              event.key === "Enter" ||
              event.key === "Delete" ||
              event.key === "CapsLock"
            )
              return;
            utils.user.searchUser.invalidate();
            setUsers([]);
          }}
        />
        {users?.length ? (
          <ModalList
            undecorated
            outline
            clickable
            items={users.map((u) => {
              return u
                ? u.id !== userid && !isFriend(u.id)
                  ? { label: u.name, value: u.id }
                  : { label: null, value: null }
                : { label: null, value: null };
            })}
            onClick={(button, item) => sendFriendRequest(item.value)}
          />
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
};

export default FriendList;
