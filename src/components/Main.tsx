import Head from "next/head";
import { FC, useState } from "react";
import { friendRequestRouter } from "../server/trpc/router";
import styles from "../styles/components/main.module.scss";
import { FriendRequest, Notification } from "../types";
import { trpc } from "../utils/trpc";
import { Modal, ModalHistory, ModalTitle } from "./modal";

type Props = {
  userid: string;
};

const MainComp: FC<Props> = ({ userid }) => {
  const [notificationModalOpen, setNotificationModalOpen] = useState(false);
  const [friendRequestModalOpen, setFriendRequestModalOpen] = useState(false);

  const updateNotifications =
    trpc.notification.updateNotifications.useMutation();
  const acceptFriendRequestMutation =
    trpc.friendRequest.acceptFriendRequest.useMutation();
  const declineFriendRequestMutation =
    trpc.friendRequest.declineFriendRequest.useMutation();

  const { data: user } = trpc.user.getUserById.useQuery({
    id: userid,
  });

  const { data: notifications } =
    trpc.notification.getNotificationsByUserId.useQuery({
      id: userid,
    });

  const { data: receivedFriendRequests } =
    trpc.friendRequest.getReceivedFriendRequestsByUserId.useQuery({
      id: userid,
    });

  let unreadNotifications: Notification[] = [];

  for (const notification of notifications ?? []) {
    if (!notification.read) unreadNotifications.push(notification);
  }

  function acceptFriendRequest(id: string) {
    setFriendRequestModalOpen(false);
    acceptFriendRequestMutation.mutate({
      id,
    });
  }

  function declineFriendRequest(id: string) {
    setFriendRequestModalOpen(false);
    declineFriendRequestMutation.mutate({
      id,
    });
  }

  if (!user || !notifications || !receivedFriendRequests) return <></>;

  return (
    <>
      <Head>
        <title>
          {unreadNotifications.length > 0
            ? `(${unreadNotifications.length}) `
            : ""}
          Relity
        </title>
      </Head>
      <div className={styles.wrapper}>
        <div
          onClick={() => {
            setNotificationModalOpen(true);
            updateNotifications.mutate({
              userid,
            });
          }}
          className={styles.notifications}
        >
          <img alt="" src="/notifications.svg" width={30} height={30} />
          {unreadNotifications.length > 0 && (
            <span className={styles.notification_count_circle}>
              <p className={styles.notification_count}>
                {unreadNotifications.length > 99
                  ? "99+"
                  : unreadNotifications.length}
              </p>
            </span>
          )}
        </div>
        <div
          onClick={() => {
            setFriendRequestModalOpen(true);
          }}
          className={styles.notifications}
        >
          <img alt="" src="/avatar.svg" width={30} height={30} />
        </div>
      </div>
      <Modal
        open={notificationModalOpen}
        setOpen={setNotificationModalOpen}
        blur
        closable
        darken
      >
        <ModalTitle value="Notifications" />
        <ModalHistory
          items={notifications
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((notification) => {
              return { label: notification.message, value: notification.id };
            })}
        />
      </Modal>
      <Modal
        open={friendRequestModalOpen}
        setOpen={setFriendRequestModalOpen}
        blur
        closable
        darken
      >
        <ModalTitle value="Friend Requests" />
        <ModalHistory
          acceptable
          declinable
          onAccept={(item) => acceptFriendRequest(item.value)}
          onDecline={(item) => declineFriendRequest(item.value)}
          items={receivedFriendRequests
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .map((request) => {
              return {
                label: request.sender.name,
                value: request.id,
              };
            })}
        />
      </Modal>
    </>
  );
};

export default MainComp;
