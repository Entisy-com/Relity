import { FC } from "react";
import styles from "../styles/components/settings.module.scss";

type Props = {
  options: [{ option: string; settings: {} }];
};

const Settings: FC<Props> = ({ options }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.options}>
        {options.map((option) => {
          return (
            <div className={styles.option} id={option.option}>
              <>
                <h1 className={styles.option_title}>
                  {option.option.substring(0, 1).toUpperCase() +
                    option.option.substring(1)}
                </h1>
                {Object.keys(option.settings).map((setting) => {
                  console.log(setting);
                })}
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;
