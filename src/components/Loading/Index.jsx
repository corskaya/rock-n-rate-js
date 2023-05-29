import { LoadingOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";

function Loading({ className, ...rest }) {
  return (
    <LoadingOutlined
      className={`${styles.loadingIcon} ${className}`}
      {...rest}
    />
  );
}

export default Loading;
