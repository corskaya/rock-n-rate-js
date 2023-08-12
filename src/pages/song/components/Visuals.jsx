import { useSelector } from "react-redux";
import { Button } from "../../../components";
import styles from "../styles.module.css";
import { useNavigate } from "react-router-dom";

function Visuals() {
  const { song } = useSelector((state) => state.song);
  const navigate = useNavigate();

  const handleViewArtist = (artistId) => {
    navigate(`/artist/${artistId}`);
  };

  return (
    <div className={styles.visualsContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={song.image} alt={song._id} />
      </div>
      <Button
        className={styles.visualButton}
        onClick={() => handleViewArtist(song.artistRefObjectId)}
      >
        View Artist
      </Button>
      <Button className={styles.visualButton} color="Info">
        View Album
      </Button>
    </div>
  );
}

export default Visuals;
