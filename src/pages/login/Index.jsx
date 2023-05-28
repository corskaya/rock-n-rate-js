import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Form from "../../components/Form";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Login() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Form className={styles.formContainer} onFinish={handleSubmit}>
          <h2 className={styles.formLabel}>User login</h2>
          <div className={styles.formFieldContainer}>
            <Label>Username or Email:</Label>
            <div>
              <Input
                name="usernameOrEmail"
                type="text"
                className={styles.formInput}
              />
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
        </Form>
      </div>
    </div>
  );
}

export default Login;
