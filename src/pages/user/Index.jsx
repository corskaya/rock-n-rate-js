import { useDispatch, useSelector } from "react-redux";
import { logout } from "../login/slice";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

function User() {
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const properties = user ? Object.entries(user) : [];
  const navigate = useNavigate();

  return (
    <div>
      <h2>User</h2>
      {properties.map(([key, value]) => (
        <div key={key} style={{ marginBottom: 8 }}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
      <Button
        style={{ marginTop: 16 }}
        onClick={() => dispatch(logout({ navigate }))}
      >
        Logout
      </Button>
    </div>
  );
}

export default User;
