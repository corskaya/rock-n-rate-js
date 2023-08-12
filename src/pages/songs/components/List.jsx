import { Link } from "react-router-dom";
import styles from "../styles.module.css";
import { SongCard } from "../../../components";

function List({ songs }) {
  return (
    <div className={styles.cardsContainer}>
      {songs.map((song) => (
        <div key={song._id} className={styles.cardContainer}>
          <Link to={`/song/${song._id}`} className={styles.songCardLink}>
            <SongCard song={song} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default List;
