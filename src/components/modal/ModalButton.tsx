import { FC, LegacyRef } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  value?: string;
  onClick?: Function;
  rref?: any;
  type?: string;
};

const ModalButton: FC<Props> = ({ rref, value, type, onClick }) => {
  return (
    <p
      ref={rref}
      onClick={() => {
        if (onClick) onClick();
      }}
      className={styles.button}
      id={type === "delete" ? styles.delete : ""}
    >
      {value}
    </p>
  );
};

export default ModalButton;
