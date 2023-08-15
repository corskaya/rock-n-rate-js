import Description from "./components/Description";
import styles from "./styles.module.css";
import PopularArtists from "./components/PopularArtists";

function Home() {
  return (
    <div className={styles.container}>
      <Description />
      <PopularArtists />
    </div>
  );
}

export default Home;
