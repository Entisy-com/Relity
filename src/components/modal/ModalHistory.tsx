import { FC } from "react";
import styles from "../../styles/components/modal.module.scss";

type Item = {
  label: string | null;
  value: any;
  acceptable?: boolean;
  declinable?: boolean;
  clearable?: boolean;
};

type Props = {
  acceptable?: boolean;
  declinable?: boolean;
  clearable?: boolean;
  badges?: boolean;
  items: Item[];
  onClick?: (item: Item) => void;
  onAccept?: (item: Item) => void;
  onDecline?: (item: Item) => void;
  onClear?: (item: Item) => void;
};

const ModalHistory: FC<Props> = ({
  badges,
  items,
  acceptable,
  declinable,
  clearable,
  onClick,
  onAccept,
  onDecline,
  onClear,
}) => {
  return (
    <div
      style={badges ? { gap: "0.5em" } : {}}
      className={styles.history_container}
    >
      {items.map((item, index) =>
        badges ? (
          <div
            id={clearable || item.clearable ? styles.gap : ""}
            className={styles.history_badge}
            key={item.value}
            onClick={() => onClick && onClick(item)}
          >
            {item.label}
            {(clearable || item.clearable) && (
              <span onClick={() => onClear && onClear(item)}>&times;</span>
            )}
          </div>
        ) : (
          <div
            style={
              index % 2
                ? {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  }
                : { backgroundColor: "rgba(0, 0, 0, 0.4)" }
            }
            className={styles.history_item}
            key={item.value}
            onClick={() => onClick && onClick(item)}
          >
            {item.label}
            <div className={styles.history_extras}>
              {(acceptable || item.acceptable) && (
                <span
                  style={{ backgroundColor: "#66B025" }}
                  onClick={() => onAccept && onAccept(item)}
                  className={styles.history_extra}
                >
                  <img alt="" width={10} height={10} src="/check.svg" />
                </span>
              )}
              {(declinable || item.declinable) && (
                <span
                  style={{ backgroundColor: "#C21D3C" }}
                  onClick={() => {
                    onDecline && onDecline(item);
                  }}
                  className={styles.history_extra}
                >
                  <img alt="" width={10} height={10} src="/cross.svg" />
                </span>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ModalHistory;
