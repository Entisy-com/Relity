import type { Server } from "@prisma/client";
import type { FC } from "react";
import styles from "../styles/components/serverItem.module.scss";

type Props = {
  server: Server;
};

const ServerListItem: FC<Props> = ({ server }) => {
  return <div className={styles.wrapper}>{server.name.substring(0, 2)}</div>;
};

export default ServerListItem;
