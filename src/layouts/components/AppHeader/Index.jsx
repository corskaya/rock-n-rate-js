import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./styles.module.css";
import logo from "../../../assets/logo.PNG";

const primaryNavLinks = [
  {
    label: "Login",
    path: "/login",
  },
  {
    label: "Register",
    path: "/register",
  },
];

const secondaryNavLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Artists",
    path: "/artists",
  },
  {
    label: "Albums",
    path: "/albums",
  },
  {
    label: "Songs",
    path: "/songs",
  },
];

function AppHeader() {
  const location = useLocation();

  return (
    <div className={styles.headerFix}>
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
            {secondaryNavLinks.map((navLink) => (
              <Link
                key={navLink.path}
                className={`${styles.navLink} ${
                  location.pathname === navLink.path
                    ? styles.navLinkSelected
                    : styles.navLinkSecondary
                }`}
                to={navLink.path}
              >
                {navLink.label}
              </Link>
            ))}
            <div>
              {primaryNavLinks.map((navLink, index) => (
                <Fragment key={navLink.path}>
                  <Link
                    className={`${styles.navLink} ${
                      location.pathname === navLink.path
                        ? styles.navLinkSelected
                        : styles.navLinkPrimary
                    }`}
                    to={navLink.path}
                  >
                    {navLink.label}
                  </Link>
                  {index !== primaryNavLinks.length - 1 && (
                    <span
                      className={`${styles.navLink} ${styles.navLinkSecondary}`}
                    >
                      |
                    </span>
                  )}
                </Fragment>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
