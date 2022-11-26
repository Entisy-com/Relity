import type { FC } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  open: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setOpen: Function;
  children?: JSX.Element | JSX.Element[];
  ref?: any;
  closable?: boolean;
  blur?: boolean;
  darken?: boolean | string;
};

const Modal: FC<Props> = ({
  ref,
  open,
  setOpen,
  children,
  closable,
  blur,
  darken,
}) => {
  return (
    <>
      {open && (
        <form
          ref={ref}
          method="dialog"
          className={`${styles.modal} ${blur && styles.blur} ${
            darken && styles.darken
          }`}
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.${darken})`,
          }}
        >
          {closable && (
            <img
              onClick={() => setOpen(false)}
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
    </>
  );
};

export default Modal;
