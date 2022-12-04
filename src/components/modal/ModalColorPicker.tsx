import { FC, useState } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  rref?: any;
  onChange?: (color: string) => void;
  defaultValue?: string;
  value?: string;
};

const ModalColorPicker: FC<Props> = ({
  value,
  defaultValue,
  onChange,
  rref,
}) => {
  return (
    <div className={styles.color_picker}>
      <label htmlFor={value}>{value}</label>
      <input
        id={value}
        defaultValue={defaultValue}
        onChange={(e) => {
          if (onChange) onChange(e.target.value);
        }}
        className={styles.color_picker_picker}
        ref={rref}
        type="color"
      />
    </div>
  );
};

export default ModalColorPicker;
