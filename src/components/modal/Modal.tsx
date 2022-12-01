import { FC, useEffect } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  open: any;
  setOpen: Function;
  children?: JSX.Element | JSX.Element[];
  ref?: any;
  closable?: boolean;
  blur?: boolean;
  darken?: boolean | string;
  onSubmit?: Function;
};

const Modal: FC<Props> = ({
  ref,
  open,
  setOpen,
  children,
  closable,
  blur,
  darken,
  onSubmit,
}) => {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode !== 27 && e.key !== "Escape") return;
      if (open) {
        setOpen(false);
      }
    });
  }, [open, setOpen]);

  return (
    <div
      className={styles.wrapper}
      onClick={(e) => e.stopPropagation()}
      onContextMenu={(e) => e.stopPropagation()}
    >
      {open && (
        <form
          onSubmit={() => {
            if (onSubmit) onSubmit();
          }}
          ref={ref}
          className={`${styles.modal} ${blur && styles.blur} ${
            darken && styles.darken
          }`}
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.${darken})`,
          }}
        >
          {closable && (
            <img
              onClick={() => {
                setOpen(false);
              }}
              className={styles.close_button}
              src="/cross.svg"
              alt=""
              width={20}
              height={20}
            />
          )}
          {children}
        </form>
      )}
    </div>
  );
};

export default Modal;
