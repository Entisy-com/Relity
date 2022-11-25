import { FC, LegacyRef } from "react";
import { Ref } from "react-hook-form";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  value?: string;
  onClick?: Function;
  ref?: any;
};

const ModalButton: FC<Props> = ({ ref, value, onClick }) => {
  return (
    <p
      ref={ref}
      onClick={() => {
        if (onClick) onClick();
      }}
      className={styles.button}
    >
      {value}
    </p>
  );
};

export default ModalButton;
