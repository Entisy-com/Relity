import { FC } from "react";
import styles from "../styles/components/message.module.scss";

type Props = {
  image: string;
  name: string;
  content: string;
};

const MessageComp: FC<Props> = ({ image, name, content }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.pfp} src={image} alt="" width={30} height={30} />
      <div className={styles.content}>
        <p className={styles.name}>{name}</p>
        <p className={styles.msg}>{content}</p>
      </div>
    </div>
  );
};
export default MessageComp;
