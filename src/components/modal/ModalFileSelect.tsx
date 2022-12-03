import { ChangeEvent, FC, MutableRefObject } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  serverId?: string;
  value: string;
  fileType?: string;
  multiple?: boolean;
  rref?: MutableRefObject<any>;
  onChange?: (file: File) => void;
  onChangeMultiple?: (file: FileList) => void;
};

const ModalFileSelect: FC<Props> = ({
  multiple,
  onChange,
  onChangeMultiple,
  rref,
  fileType,
}) => {
  return (
    <>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files;
          multiple ? onChangeMultiple!(files!) : onChange!(files![0]!);
        }}
        ref={rref}
        className={styles.file_select}
        type="file"
        accept={fileType}
      />
    </>
  );
};

export default ModalFileSelect;
