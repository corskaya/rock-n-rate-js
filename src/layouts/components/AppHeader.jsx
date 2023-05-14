import { Link } from "react-router-dom";
import styles from "./AppHeader.module.css";
import logo from "../../assets/logo.PNG";
import { AiOutlineSearch } from "react-icons/ai";

function AppHeader() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftPart}>
        <Link className={styles.logoContainer} to="/">
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
        <h4 className={styles.description}>
          Rate your artist, album and song.
        </h4>
      </div>
      <div className={styles.rightPart}>
        <div className={styles.navInputContainer}>
          <AiOutlineSearch className={styles.navInputIcon} />
          <input className={styles.navInput} placeholder="Quick search" />
        </div>
        <nav className={styles.navContainer}>
          <Link
            className={`${styles.navLink} ${styles.navLinkSecondary}`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`${styles.navLink} ${styles.navLinkSecondary}`}
            to="/artists"
          >
            Artists
          </Link>
          <Link
            className={`${styles.navLink} ${styles.navLinkSecondary}`}
            to="/albums"
          >
            Albums
          </Link>
          <Link
            className={`${styles.navLink} ${styles.navLinkSecondary}`}
            to="/songs"
          >
            Songs
          </Link>
          <div>
            <Link
              className={`${styles.navLink} ${styles.navLinkPrimary}`}
              to="/login"
            >
              Login
            </Link>
            <span className={`${styles.navLink} ${styles.navLinkSecondary}`}>
              |
            </span>
            <Link
              className={`${styles.navLink} ${styles.navLinkPrimary}`}
              to="/register"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default AppHeader;
