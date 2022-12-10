import type { GetServerSidePropsContext, NextPage } from "next";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import { trpc } from "../utils/trpc";
import styles from "../styles/pages/index.module.scss";
import ServerList from "../components/ServerList";
import Profile from "../components/Profile";
import { User } from "../types";
import FriendList from "../components/FriendList";

type Props = {
  user: User;
};

const Index: NextPage<Props> = ({ user }) => {
  const updateUser = trpc.user.updateUser.useMutation();

  const { data: allUser } = trpc.user.getUserById.useQuery({
    userId: user.id,
  });

  if (user) {
    // setInterval(async () => {
    //   console.log("Sending Heartbeat");
    //   const res = await axios.get(HEARTBEAT_URL);
    //   if (res.status === 200) {
    //     if (user.status !== OnlineStatus.ONLINE)
    //       updateUser.mutate({
    //         id: user.id!,
    //         status: OnlineStatus.ONLINE,
    //       });
    //   } else {
    //     if (user.status !== OnlineStatus.OFFLINE)
    //       updateUser.mutate({
    //         id: user.id!,
    //         status: OnlineStatus.OFFLINE,
    //       });
    //     console.log("Failed to send Heartbeat");
    //   }
    // }, 10 * 1000);
  }

  return (
    <div className={styles.wrapper}>
      <FriendList user={user} />
      <Profile user={user} />
      <ServerList user={user} />
    </div>
  );
};

export default Index;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getServerAuthSession(ctx);
  return !session
    ? { redirect: { destination: "/login", persistent: false } }
    : { props: { user: session.user } };
}
