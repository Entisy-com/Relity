import { ChangeEvent, FC, MutableRefObject } from "react";
import styles from "../../styles/components/modal.module.scss";
import { trpc } from "../../utils/trpc";
import CryptoJS from "crypto-js";

type Props = {
  serverId?: string;
  value: string;
  fileType?: string;
  rref?: MutableRefObject<any>;
};

const ModalFileSelect: FC<Props> = ({ serverId, value, rref, fileType }) => {
  const updateServer = trpc.server.updateServer.useMutation();

  const sendFiles = async (files: FileList) => {
    const formData = new FormData();
    for (let i = 0; i < (files ?? []).length; i++) {
      formData.append(files!.item(i)!.name, files!.item(i)!);
    }

    const response = await fetch("http://localhost:4000/upload", {
      method: "POST",
      body: formData,
    });
    const json = await response.json();

    if (response.ok) {
      updateServer.mutate({
        id: serverId!,
        pfp: `http://localhost:4200/${json.message[files[0]?.name!].md5}.${
          json.message[files[0]?.name!].name.split(".")[1]
        }`,
      });
    }
  };

  return (
    <>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files;
          sendFiles(files!);
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
