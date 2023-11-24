import { useSelector } from "react-redux";
import styles from "../styles.module.css";

function MobileAbout() {
  const artist = useSelector((state) => state.artist.artist);

  return (
    <div className={styles.mobileAboutContainer}>
      <h1 className={`${styles.artistName} ${styles.textShadow}`}>About</h1>
      <p className={styles.aboutTextMobile}>{artist.about}</p>
    </div>
  );
}

export default MobileAbout;
