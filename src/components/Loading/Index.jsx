import { LoadingOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";

function Loading({ className, size = "M", ...rest }) {
  const getClassNameForSize = (size) => {
    switch (size) {
      case "S":
        return styles.small;
      case "M":
        return styles.medium;
      case "L":
        return styles.large;
      default:
        return styles.medium;
    }
  };

  return (
    <LoadingOutlined
      className={`${styles.loadingIcon} ${className} ${getClassNameForSize(
        size
      )}`}
      {...rest}
    />
  );
}

export default Loading;
