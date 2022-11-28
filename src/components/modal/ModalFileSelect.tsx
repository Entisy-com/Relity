import axios, { AxiosResponse } from "axios";
import { ChangeEvent, FC, MutableRefObject, useEffect, useState } from "react";
import styles from "../../styles/components/modal.module.scss";
import { CDN_BASE_URL } from "../../utils/constants";
import { trpc } from "../../utils/trpc";

type Props = {
  serverId?: string;
  value: string;
  fileType?: string;
  rref?: MutableRefObject<any>;
};

const ModalFileSelect: FC<Props> = ({ serverId, value, rref, fileType }) => {
  const updateServer = trpc.server.updateServer.useMutation();
  return (
    <>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          axios
            .get<String>(`${CDN_BASE_URL}/${serverId}`)
            .catch((err) => console.error(err))
            .then((res) => {
              if (!res) return;
              if (res.status === 200) {
                axios.delete(`${CDN_BASE_URL}/${serverId}`);
              }
              updateServer.mutate({ serverid: serverId!, pfp: "" });
            });
        }}
        name="test"
        ref={rref}
        className={styles.file_select}
        type="file"
        accept={fileType}
      />
      <input
        type="submit"
        className={styles.file_select_submit}
        value={value}
      />
    </>
  );
};

export default ModalFileSelect;
