import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Form, Label, Input, Button } from "../../components";

function Register() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Form className={styles.formContainer} onFinish={handleSubmit}>
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
        </Form>
      </div>
    </div>
  );
}

export default Register;
