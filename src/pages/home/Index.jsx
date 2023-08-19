import Description from "./components/Description";
import styles from "./styles.module.css";
import PopularArtists from "./components/PopularArtists";
import PopularAlbums from "./components/PopularAlbums";
import PopularSongs from "./components/PopularSongs";

function Home() {
  return (
    <div className={styles.container}>
      <Description />
      <PopularArtists />
      <PopularAlbums />
      <PopularSongs />
    </div>
  );
}

export default Home;
