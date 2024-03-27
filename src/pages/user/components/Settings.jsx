import { useSelector } from "react-redux";
import { Button } from "../../../components";
import defaultProfilePicture from "../../../assets/default-profile-picture.png";
import styles from "../styles.module.css";

function Settings() {
  const { user } = useSelector((state) => state.user);
  const { user: loginUser } = useSelector((state) => state.login);

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.statisticsImageContainerMobile}>
        <img
          src={user.avatar || defaultProfilePicture}
          alt={`${user.username} avatar`}
          className={styles.statisticsImageMobile}
        />
      </div>
      <h1 className={styles.username}>{user.username}</h1>
      {user._id === loginUser?._id && (
        <Button className={styles.settingsBtn}>Profile Settings</Button>
      )}
    </div>
  );
}

export default Settings;
