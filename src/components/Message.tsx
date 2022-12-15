import { FC } from "react";
import styles from "../styles/components/message.module.scss";

type Props = {
  color: string;
  image: string;
  name: string;
  content: string;
};

const MessageComp: FC<Props> = ({ color, image, name, content }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.pfp} src={image} alt="" width={30} height={30} />
      <div className={styles.body}>
        <p
          style={{
            color,
          }}
          className={styles.name}
        >
          {name}
        </p>
        <p className={styles.content}>{content}</p>
      </div>
    </div>
  );
};
export default MessageComp;
