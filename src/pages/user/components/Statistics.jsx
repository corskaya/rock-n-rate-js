import moment from "moment";
import { useSelector } from "react-redux";
import { Label } from "../../../components";
import defaultProfilePicture from "../../../assets/default-profile-picture.png";
import styles from "../styles.module.css";

function Statistics() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className={styles.statisticsContainer}>
      <div className={styles.statisticsInfoContainer}>
        <h3 className={styles.headerText}>Statistics</h3>
        <div className={styles.statistics}>
          <div className={styles.statisticsPair}>
            <Label className={styles.label}>Joined:</Label>
            <Label className={styles.data}>
              {moment(user.createdAt).format("MMMM DD, YYYY")}
            </Label>
          </div>
          <div className={styles.statisticsPair}>
            <Label className={styles.label}>Last Seen:</Label>
            <Label className={styles.data}>
              {moment(user.updatedAt).format("MMMM DD, YYYY [at] hh:mm A")}
            </Label>
          </div>
          <div className={styles.statisticsPair}>
            <Label className={styles.label}>Role:</Label>
            <Label className={styles.data}>{user.role}</Label>
          </div>
          <div className={styles.statisticsPair}>
            <Label className={styles.label}>Ratings:</Label>
            <Label className={styles.data}>12</Label>
          </div>
          <div className={styles.statisticsPair}>
            <Label className={styles.label}>Comments:</Label>
            <Label className={styles.data}>0</Label>
          </div>
        </div>
      </div>
      <div className={styles.statisticsImageContainer}>
        <img
          src={user.image || defaultProfilePicture}
          alt={`${user.username} avatar`}
          className={styles.statisticsImage}
        />
      </div>
    </div>
  );
}

export default Statistics;
