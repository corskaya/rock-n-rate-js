import { useSelector } from "react-redux";
import { Label } from "../../../components";
import styles from "../styles.module.css";

function About() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className={styles.aboutContainer}>
      <h3 className={styles.headerText}>{`About ${user.username}`}</h3>
      <Label className={styles.data}>{user.about || "No information"}</Label>
    </div>
  );
}

export default About;
