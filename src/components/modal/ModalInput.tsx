import { FC, MutableRefObject } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  placeholder?: string;
  type?: string;
  rref?: MutableRefObject<any>;
};

const ModalInput: FC<Props> = ({ rref, type, placeholder }) => {
  return (
    <input
      ref={rref}
      placeholder={placeholder}
      className={styles.input}
      type={type ? type : "text"}
    />
  );
};

export default ModalInput;
