import { FC } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  children?: JSX.Element | JSX.Element[];
  value: string;
  ref?: any;
};

const ModalListItem: FC<Props> = ({ ref, value, children }) => {
  return (
    <li ref={ref} className={styles.list_item}>
      {value}
      {children}
    </li>
  );
};

export default ModalListItem;
