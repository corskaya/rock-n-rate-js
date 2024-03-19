import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./slice";
import { Loading, Message } from "../../components";
import styles from "./styles.module.css";
import Settings from "./components/Settings";
import Statistics from "./components/Statistics";
import About from "./components/About";
import Logout from "./components/Logout";

function User() {
  const { username } = useParams();
  const { userPending, userFulfilled, userRejected, userErrorMessage } =
    useSelector((state) => state.user);
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
          <Settings />
          <Statistics />
          <About />
          <Logout />
        </div>
      )}
    </div>
  );
}

export default User;
