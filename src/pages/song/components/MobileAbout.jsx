import { useSelector } from "react-redux";
import styles from "../styles.module.css";

function MobileAbout() {
  const song = useSelector((state) => state.song.song);

  return (
    <div className={styles.mobileAboutContainer}>
      <h1 className={`${styles.songName} ${styles.textShadow}`}>About</h1>
      <p className={styles.aboutTextMobile}>{song.about}</p>
    </div>
  );
}

export default MobileAbout;
