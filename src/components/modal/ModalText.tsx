/* eslint-disable @typescript-eslint/no-explicit-any */
import type { FC } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  value: string;
  title?: string;
  ref?: any;
};
const ModalText: FC<Props> = ({ ref, value, title, ...props }) => {
  return (
    <p ref={ref} className={styles.text} title={title} {...props}>
      {value}
    </p>
  );
};

export default ModalText;
