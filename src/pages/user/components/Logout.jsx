import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components";
import styles from "../styles.module.css";
import { logout } from "../../login/slice";

function Logout() {
  const { user } = useSelector((state) => state.user);
  const { user: loginUser } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      {user._id === loginUser?._id && (
        <div className={styles.logoutContainer}>
          <Button
            className={styles.logoutBtn}
            onClick={() => dispatch(logout({ navigate }))}
          >
            Logout
          </Button>
        </div>
      )}
    </>
  );
}

export default Logout;
