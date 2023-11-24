import { useSelector } from "react-redux";
import styles from "../styles.module.css";

function MobileMainInfo() {
  const artist = useSelector((state) => state.artist.artist);

  return (
    <div className={styles.mobileMainInfoContainer}>
      <h1 className={`${styles.artistName} ${styles.textShadow}`}>
        {artist.name}
      </h1>
      <h3 className={`${styles.foundationYear} ${styles.textShadow}`}>
        {artist.foundationYear}
      </h3>
      <h3 className={`${styles.genres} ${styles.textShadow}`}>
        {artist.genres.join(" / ")}
      </h3>
    </div>
  );
}

export default MobileMainInfo;
