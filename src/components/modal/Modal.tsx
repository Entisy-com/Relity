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
      if (e.key === "Escape") {
        if (open) {
          if (closable) setOpen(false);
        }
      }
      if (e.key === "Enter") {
        if (onSubmit) onSubmit();
      }
    });
  }, [open, setOpen]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      className={styles.wrapper}
    >
      {open && (
        <div
          // onBlur={() => setOpen(false)}
          ref={ref}
          className={`${styles.modal} ${blur && styles.blur} ${
            darken === true && styles.darken
          }`}
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.${darken})`,
          }}
        >
          <form
            onSubmit={() => {
              if (onSubmit) onSubmit();
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
        </div>
      )}
    </div>
  );
};

export default Modal;
