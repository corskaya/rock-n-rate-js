import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../components";
import styles from "../styles.module.css";
import { setFilters } from "../../songs/slice";
import { useNavigate } from "react-router-dom";

function Visuals() {
  const { album } = useSelector((state) => state.album);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleViewArtist = (artistId) => {
    navigate(`/artist/${artistId}`);
  };

  const handleViewSongs = () => {
    dispatch(setFilters({ searchTerm: album.name }));
    navigate(`/songs`);
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
      <Button
        className={styles.visualButton}
        color="Info"
        onClick={handleViewSongs}
      >
        View Songs
      </Button>
    </div>
  );
}

export default Visuals;
