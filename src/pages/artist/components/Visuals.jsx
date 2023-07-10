import { useSelector } from "react-redux";
import { Button } from "../../../components";
import styles from "../styles.module.css";

function Visuals() {
  const {
    // artistPending,
    // artistRejected,
    // artistFulfilled,
    artist,
    // errorMessage,
    // similarArtistsFulfilled,
    // similarArtists,
  } = useSelector((state) => state.artist);

  return (
    <div className={styles.visualsContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={artist.image} alt={artist._id} />
      </div>
      <Button className={styles.visualButton}>View Albums</Button>
      <Button className={styles.visualButton} color="Info">
        View Songs
      </Button>
    </div>
  );
}

export default Visuals;
