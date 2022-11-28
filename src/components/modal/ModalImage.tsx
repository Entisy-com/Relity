import { FC, MutableRefObject } from "react";
import styles from "../../styles/components/modal.module.scss";

type Props = {
  src: string;
  size?: number;
  width?: number;
  height?: number;
};

const ModalImage: FC<Props> = ({ size, width, height, src }) => {
  return (
    <img
      src={src}
      width={size ? size : width}
      height={size ? size : height}
      alt=""
    />
  );
};

export default ModalImage;
