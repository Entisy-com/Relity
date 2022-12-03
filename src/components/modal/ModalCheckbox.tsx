import { FC } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  value: string;
  checked?: boolean;
  rref?: any;
  onChange?: (checked: boolean) => void;
};

const ModalCheckbox: FC<Props> = ({ onChange, rref, value, checked }) => {
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.checkbox_box}
        ref={rref}
        type="checkbox"
        defaultChecked={checked}
        id={value}
        onChange={(e) => {
          if (onChange) onChange(e.target.checked);
        }}
      />
      <label className={styles.checkbox_label} htmlFor={value}>
        {value}
      </label>
    </div>
  );
};

export default ModalCheckbox;
