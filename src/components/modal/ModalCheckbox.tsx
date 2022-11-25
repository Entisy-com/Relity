import { FC } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  value: string;
  checked?: boolean;
  rref?: any;
};

const ModalCheckbox: FC<Props> = ({ rref, value, checked }) => {
  return (
    <>
      <input
        className={styles.checkbox}
        ref={rref}
        type="checkbox"
        checked={checked}
        id={value.split(" ")[0]}
      />
      <label htmlFor={value.split(" ")[0]}>{value}</label>
    </>
  );
};

export default ModalCheckbox;
