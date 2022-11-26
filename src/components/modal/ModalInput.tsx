import { FC, MutableRefObject, useEffect, useState } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  placeholder?: string;
  type?: string;
  rref?: MutableRefObject<any>;
  password?: boolean;
};

const ModalInput: FC<Props> = ({ rref, type, placeholder, password }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className={styles.input}>
      <input
        id="input_field"
        autoFocus
        ref={rref}
        placeholder={placeholder}
        className={styles.input_field}
        type={type ? type : "text"}
      />
      {password && hidden && (
        <img
          onClick={() => {
            const input = document.getElementById(
              "input_field"
            ) as HTMLInputElement;
            input.setAttribute("type", "text");
            setHidden(false);
          }}
          className={styles.toggle_password}
          src="/hide_password.svg"
          alt=""
          width={20}
          height={20}
        />
      )}
      {password && !hidden && (
        <img
          onClick={() => {
            const input = document.getElementById(
              "input_field"
            ) as HTMLInputElement;
            input.setAttribute("type", "password");
            setHidden(true);
          }}
          className={styles.toggle_password}
          src="/show_password.svg"
          alt=""
          width={20}
          height={20}
        />
      )}
    </div>
  );
};

export default ModalInput;
