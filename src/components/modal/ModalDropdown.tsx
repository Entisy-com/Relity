import { FC, useEffect, useState } from "react";
import styles from "../../styles/components/modal.module.scss";

export type Option = {
  label: string | null;
  value: any;
};

type Props = {
  options: Option[];
  onSelect?: (option: Option) => void;
  onSelectMultiple?: (options: Option[]) => void;
  defaultValue?: Option;
  defaultValues?: Option[];
  multiselect?: boolean;
  rref?: any;
  clearable?: boolean;
  placeholder?: string;
};

const ModalDropdown: FC<Props> = ({
  clearable,
  onSelect,
  onSelectMultiple,
  options,
  multiselect,
  defaultValue,
  defaultValues,
  placeholder,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Option>(
    defaultValue ?? { label: null, value: null }
  );
  const [values, setValues] = useState<Option[]>(defaultValues ?? []);
  const [highlighted, setHighlighted] = useState(options![0]);

  useEffect(() => {
    setHighlighted(options[0]);
  }, [open]);

  return multiselect ? (
    <div
      onClick={() => setOpen(!open)}
      tabIndex={0}
      className={styles.dropdown_container}
    >
      <span className={styles.dropdown_value}>
        {values.length
          ? values.map((option) => {
              return (
                option.label !== null && (
                  <button
                    className={styles.option_badge}
                    key={option.label}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      if (values.includes(option)) {
                        setValues(values.filter((o) => o !== option));
                        if (onSelectMultiple)
                          onSelectMultiple(values.filter((o) => o !== option));
                      } else {
                        setValues([...values, option]);
                        if (onSelectMultiple)
                          onSelectMultiple([...values, option]);
                      }
                    }}
                  >
                    {option.label}
                    <span className={styles.dropdown_remove_button}>
                      &times;
                    </span>
                  </button>
                )
              );
            })
          : placeholder}
      </span>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setValues([]);
        }}
        className={styles.dropdown_clear_button}
      >
        &times;
      </button>
      <div className={styles.dropdown_divider} />
      <div className={styles.dropdown_caret} />
      <ul className={`${styles.dropdown_options} ${open ? styles.show : ""}`}>
        {(options ?? []).map((option) => {
          return (
            option.label !== null && (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpen(false);
                  if (values.includes(option))
                    setValues(values.filter((o) => o !== option));
                  else setValues([...values, option]);
                  if (onSelectMultiple) onSelectMultiple([...values, option]);
                }}
                key={option.label}
                onMouseEnter={() => setHighlighted(option)}
                className={`${styles.dropdown_option} ${
                  option === value ? styles.selected : ""
                } ${highlighted === option ? styles.highlighted : ""}`}
              >
                {option.label}
              </li>
            )
          );
        })}
      </ul>
    </div>
  ) : (
    <div
      onClick={() => setOpen(!open)}
      tabIndex={0}
      className={styles.dropdown_container}
    >
      <span className={styles.dropdown_value}>
        {value?.label ?? defaultValue?.label ?? placeholder}
      </span>
      {clearable && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setValue({ label: null, value: null });
          }}
          className={styles.dropdown_clear_button}
        >
          &times;
        </button>
      )}
      <div className={styles.dropdown_divider} />
      <div className={styles.dropdown_caret} />
      <ul className={`${styles.dropdown_options} ${open ? styles.show : ""}`}>
        {(options ?? []).map((option) => {
          return (
            option.label !== null && (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setOpen(false);
                  setValue(option);
                  if (onSelect) onSelect(value!);
                }}
                key={option.label}
                onMouseEnter={() => setHighlighted(option)}
                className={`${styles.dropdown_option} ${
                  option === value ? styles.selected : ""
                } ${highlighted === option ? styles.highlighted : ""}`}
              >
                {option.label}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default ModalDropdown;
