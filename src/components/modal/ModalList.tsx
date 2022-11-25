import { FC } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  children?: JSX.Element | JSX.Element[];
  type?: string;
  value?: string;
  ref?: any;
};

const ModalList: FC<Props> = ({ ref, value, type, children }) => {
  return (
    <>
      {value}
      {type === "ordered" && (
        <ol ref={ref} className={styles.list}>
          {children}
        </ol>
      )}
      {type === "unordered" && (
        <ul ref={ref} className={styles.list}>
          {children}
        </ul>
      )}
      {type === "" && (
        <ul ref={ref} className={styles.list}>
          {children}
        </ul>
      )}
    </>
  );
};

export default ModalList;
