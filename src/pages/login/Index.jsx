import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameOrEmail = e.target.elements.usernameOrEmail.value;
    const password = e.target.elements.password.value;

    console.log(usernameOrEmail, password);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formPart}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <h2 className={styles.loginLabel}>User login</h2>
          <div className={styles.formFieldContainer}>
            <Label>Username or Email</Label>
            <div>
              <Input name="usernameOrEmail" type="text" />
            </div>
          </div>
          <div className={styles.formFieldContainer}>
            <Label>Password</Label>
            <div>
              <Input name="password" type="password" />
            </div>
          </div>
          <div className={styles.formFooter}>
            <div className={styles.formFooterLinks}>
              <Link className={styles.formFooterLink} to="/register">
                Create an Account
              </Link>
              <Link className={styles.formFooterLink} to="/forgot-password">
                Forgot password?
              </Link>
            </div>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
