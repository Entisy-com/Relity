import { FC } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  value: string;
  ref?: any;
};
const ModalText: FC<Props> = ({ ref, value, ...props }) => {
  return (
    <p ref={ref} className={styles.text} {...props}>
      {value}
    </p>
  );
};

export default ModalText;
