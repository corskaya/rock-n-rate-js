import { useSelector } from "react-redux";
import styles from "../styles.module.css";

function MobileAbout() {
  const album = useSelector((state) => state.album.album);

  return (
    <div className={styles.mobileAboutContainer}>
      <h1 className={`${styles.albumName} ${styles.textShadow}`}>About</h1>
      <p className={styles.aboutTextMobile}>{album.about}</p>
    </div>
  );
}

export default MobileAbout;
