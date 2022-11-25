import { FC, useEffect } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  open: boolean;
  setOpen: Function;
  children?: JSX.Element | JSX.Element[];
  ref?: any;
};

const Modal: FC<Props> = ({ ref, open, setOpen, children }) => {
  return (
    <>
      {open && (
        <div className={styles.wrapper}>
          <form ref={ref} method="dialog" className={`${styles.modal} modal`}>
            {children}
          </form>
        </div>
      )}
    </>
  );
};

export default Modal;
