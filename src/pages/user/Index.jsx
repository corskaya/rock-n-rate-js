import { useParams } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { getUser } from "./slice";
import { Button, Label, Loading, Message } from "../../components";
import defaultProfilePicture from "../../assets/default-profile-picture.png";

function User() {
  const { username } = useParams();
  const { userPending, userFulfilled, userRejected, userErrorMessage, user } =
    useSelector((state) => state.user);
  const { user: loginUser } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(username));
  }, [dispatch, username]);

  return (
    <div className={styles.container}>
      {userPending && <Loading />}
      {userRejected && <Message>{userErrorMessage}</Message>}
      {userFulfilled && (
        <div className={styles.profileContainer}>
          <div className={styles.settingsContainer}>
            <div className={styles.statisticsImageContainerMobile}>
              <img
                src={user.image || defaultProfilePicture}
                alt={`${user.username} avatar`}
                className={styles.statisticsImageMobile}
              />
            </div>
            <h1 className={styles.username}>{user.username}</h1>
            {user._id === loginUser._id && (
              <Button className={styles.settingsBtn}>Profile Settings</Button>
            )}
          </div>
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
                    {moment(user.updatedAt).format(
                      "MMMM DD, YYYY [at] hh:mm A"
                    )}
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
          <div className={styles.aboutContainer}>
            <h3 className={styles.headerText}>{`About ${user.username}`}</h3>
            <Label className={styles.data}>
              {user.about || "No information"}
            </Label>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
