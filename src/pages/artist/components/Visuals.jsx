import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../components";
import styles from "../styles.module.css";
import { setFilters as setAlbumsFilters } from "../../albums/slice";
import { setFilters as setSongsFilters } from "../../songs/slice";
import { useNavigate } from "react-router-dom";

function Visuals() {
  const { artist } = useSelector((state) => state.artist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleViewAlbums = () => {
    dispatch(setAlbumsFilters({ searchTerm: artist.name }));
    navigate("/albums");
  };

  const handleViewSongs = () => {
    dispatch(setSongsFilters({ searchTerm: artist.name }));
    navigate("/songs");
  };

  return (
    <div className={styles.visualsContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={artist.image} alt={artist._id} />
      </div>
      <Button className={styles.visualButton} onClick={handleViewAlbums}>
        View Albums
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
