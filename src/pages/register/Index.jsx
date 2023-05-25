import styles from "./styles.module.css";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    console.log(username, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <h2 className={styles.formLabel}>Register an Account</h2>
          <div className={styles.formFields}>
            <div className={styles.formFieldContainer}>
              <Label>Username:</Label>
              <div>
                <Input name="username" className={styles.formInput} />
              </div>
            </div>
            <div className={styles.formFieldContainer}>
              <Label>Email (no confirmation needed):</Label>
              <div>
                <Input name="email" className={styles.formInput} />
              </div>
            </div>
            <div className={styles.formFieldContainer}>
              <Label>Password:</Label>
              <div>
                <Input
                  name="password"
                  type="password"
                  className={styles.formInput}
                />
              </div>
            </div>
            <div className={styles.formFieldContainer}>
              <Label>Confirm Password:</Label>
              <div>
                <Input
                  name="confirmPassword"
                  type="password"
                  className={styles.formInput}
                />
              </div>
            </div>
          </div>
          <div className={styles.formFooter}>
            <Link className={styles.formFooterLink} to="/login">
              Already have an account?
            </Link>
            <Button type="submit">Register</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
