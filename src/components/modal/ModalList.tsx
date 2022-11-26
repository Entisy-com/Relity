import { FC } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  children?: JSX.Element | JSX.Element[];
  type?: string;
  value?: string;
  ordered?: boolean;
  rref?: string;
};

const ModalList: FC<Props> = ({ rref, value, ordered, children }) => {
  return (
    <>
      {value}
      {ordered ? (
        <ol ref={rref} className={styles.list}>
          {children}
        </ol>
      ) : (
        <ul ref={rref} className={styles.list}>
          {children}
        </ul>
      )}
    </>
  );
};

export default ModalList;
