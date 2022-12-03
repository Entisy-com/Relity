import { FC, MouseEventHandler } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  value?: string;
  onClick?: (e: any) => void;
  onRightClick?: (e: any) => void;
  rref?: any;
  type?: string;
};

const ModalButton: FC<Props> = ({
  rref,
  value,
  type,
  onClick,
  onRightClick,
}) => {
  return (
    <p
      ref={rref}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
      onContextMenu={(e) => {
        if (onRightClick) onRightClick(e);
      }}
      className={styles.button}
      id={type === "delete" ? styles.delete : ""}
    >
      {value}
    </p>
  );
};

export default ModalButton;
