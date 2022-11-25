import { FC } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  id: string;
  value: string;
  checked?: boolean;
  rref?: any;
};

const ModalCheckbox: FC<Props> = ({ id, rref, value, checked }) => {
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.checkbox_box}
        ref={rref}
        type="checkbox"
        checked={checked}
        id={id}
      />
      <label className={styles.checkbox_label} htmlFor={id}>
        {value}
      </label>
    </div>
  );
};

export default ModalCheckbox;
