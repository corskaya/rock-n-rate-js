import { useSelector } from "react-redux";
import styles from "../styles.module.css";
import moment from "moment/moment";

function MobileMainInfo() {
  const song = useSelector((state) => state.song.song);

  return (
    <div className={styles.mobileMainInfoContainer}>
      <h1 className={`${styles.songName} ${styles.textShadow}`}>{song.name}</h1>
      <h3 className={`${styles.foundationYear} ${styles.textShadow}`}>
        {moment(song.releaseDate).format("YYYY")}
      </h3>
      <h3 className={`${styles.genres} ${styles.textShadow}`}>
        {song.genres.join(" / ")}
      </h3>
    </div>
  );
}

export default MobileMainInfo;
