import { FC } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  value: string;
  ref?: any;
};
const ModalTitle: FC<Props> = ({ ref, value }) => {
  return (
    <p ref={ref} className={styles.title}>
      {value}
    </p>
  );
};

export default ModalTitle;
