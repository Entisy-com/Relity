import { Role, Server, TextChannel, User } from "@prisma/client";
import Link from "next/link";
import type { FC } from "react";
import styles from "../styles/components/serverItem.module.scss";

type Props = {
  server: Server;
};

const ServerListItem: FC<Props> = ({ server }) => {
  return (
    <a href={`/${server.id}`} className={styles.wrapper} rel="noreferrer">
      {server.name.substring(0, 2)}
    </a>
  );
};

export default ServerListItem;
