import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Label, Input, Button, Message, Loading } from "../../components";
import styles from "./styles.module.css";
import { login } from "./slice";

function Login() {
  const { loginPending, loginRejected, errorMessage } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Form className={styles.formContainer} onFinish={handleSubmit}>
          <h2 className={styles.formLabel}>User login</h2>
          <div className={styles.formFieldContainer}>
            <Label>Username or Email:</Label>
            <Input
              name="usernameOrEmail"
              type="text"
              className={styles.formInput}
            />
          </div>
          <div className={styles.formFieldContainer}>
            <Label>Password:</Label>
            <Input
              name="password"
              type="password"
              className={styles.formInput}
            />
          </div>
          {loginRejected && (
            <div className={styles.errorMessageContainer}>
              <Message>{errorMessage}</Message>
            </div>
          )}
          <div className={styles.formFooter}>
            <div className={styles.formFooterLinks}>
              <Link className={styles.formFooterLink} to="/register">
                Create an Account
              </Link>
              <Link className={styles.formFooterLink} to="/forgot-password">
                Forgot password?
              </Link>
            </div>
            <Button type="submit">
              {loginPending ? <Loading size="S" /> : "Login"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
