import { useSelector } from "react-redux";
import styles from "../styles.module.css";
import moment from "moment/moment";

function MobileMainInfo() {
  const album = useSelector((state) => state.album.album);

  return (
    <div className={styles.mobileMainInfoContainer}>
      <h1 className={`${styles.albumName} ${styles.textShadow}`}>
        {album.name}
      </h1>
      <h3 className={`${styles.foundationYear} ${styles.textShadow}`}>
        {moment(album.releaseDate).format("YYYY")}
      </h3>
      <h3 className={`${styles.genres} ${styles.textShadow}`}>
        {album.genres.join(" / ")}
      </h3>
    </div>
  );
}

export default MobileMainInfo;
