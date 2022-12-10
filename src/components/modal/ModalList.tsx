import { FC } from "react";
import styles from "../../styles/components/modal.module.scss";

type Item = {
  label: string;
  value: any;
};

type Props = {
  type?: string;
  value?: string;
  ordered?: boolean;
  undecorated?: boolean;
  rref?: string;
  items: Item[];
  clickable?: boolean;
  outline?: boolean;
  onClick?: (button: number, item: Item) => void;
};

const ModalList: FC<Props> = ({
  onClick,
  clickable,
  undecorated,
  items,
  rref,
  value,
  ordered,
  outline,
}) => {
  return (
    <>
      {ordered ? (
        <ol
          ref={rref}
          className={`${undecorated && styles.undecorated} ${styles.list}`}
        >
          {value && (
            <p
              style={
                outline
                  ? {}
                  : {
                      borderBottom: "1px solid gray",
                    }
              }
              className={styles.list_title}
            >
              {value}
            </p>
          )}
          {items.map((i) => (
            <li
              style={
                outline
                  ? {
                      border: "1px solid gray",
                    }
                  : {}
              }
              key={i.value}
              className={styles.list_item}
              onClick={(e) => {
                if (clickable && onClick) onClick(e.button, i);
              }}
            >
              {i.label}
            </li>
          ))}
        </ol>
      ) : (
        <ul
          ref={rref}
          className={`${undecorated && styles.undecorated} ${styles.list}`}
        >
          {value && (
            <p
              style={
                outline
                  ? {}
                  : {
                      borderBottom: "1px solid gray",
                    }
              }
              className={styles.list_title}
            >
              {value}
            </p>
          )}
          {items.map((i) => (
            <li
              style={
                outline
                  ? {
                      border: "1px solid gray",
                    }
                  : {}
              }
              key={i.value}
              className={styles.list_item}
              onClick={(e) => {
                if (clickable && onClick) onClick(e.button, i);
              }}
            >
              {i.label}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ModalList;
