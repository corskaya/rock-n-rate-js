import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../components";
import styles from "../styles.module.css";
import { setFilters } from "../../albums/slice";
import { useNavigate } from "react-router-dom";

function Visuals() {
  const { artist } = useSelector((state) => state.artist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleViewAlbums = () => {
    dispatch(setFilters({ searchTerm: artist.name }));
    navigate("/albums");
  };

  return (
    <div className={styles.visualsContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={artist.image} alt={artist._id} />
      </div>
      <Button className={styles.visualButton} onClick={handleViewAlbums}>
        View Albums
      </Button>
      <Button className={styles.visualButton} color="Info">
        View Songs
      </Button>
    </div>
  );
}

export default Visuals;
