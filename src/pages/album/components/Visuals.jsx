import { useSelector } from "react-redux";
import { Button } from "../../../components";
import styles from "../styles.module.css";
import { useNavigate } from "react-router-dom";

function Visuals() {
  const { album } = useSelector((state) => state.album);
  const navigate = useNavigate();

  const handleViewArtist = (artistId) => {
    navigate(`/artist/${artistId}`);
  };

  return (
    <div className={styles.visualsContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={album.image} alt={album._id} />
      </div>
      <Button
        className={styles.visualButton}
        onClick={() => handleViewArtist(album.artistRefObjectId)}
      >
        View Artist
      </Button>
      <Button className={styles.visualButton} color="Info">
        View Songs
      </Button>
    </div>
  );
}

export default Visuals;