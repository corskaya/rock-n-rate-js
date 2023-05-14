import { Link } from "react-router-dom";
import FormField from "./components/FormField";
import styles from "./styles.module.css";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.formPart}>
        <div className={styles.formContainer}>
          <h2 className={styles.loginLabel}>User login</h2>
          <FormField label="Username or Email" type="text" />
          <FormField label="Password" type="password" />
          <div className={styles.formFooter}>
            <div className={styles.formFooterLinks}>
              <Link className={styles.formFooterLink} to="/register">
                Create an Account
              </Link>
              <Link className={styles.formFooterLink} to="/forgot-password">
                Forgot password?
              </Link>
            </div>
            <button className={styles.loginSubmitButton} type="submit">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
