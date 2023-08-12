import { useSelector } from "react-redux";
import { Loading, Message, Tooltip } from "../../../components";
import styles from "../styles.module.css";
import { Link } from "react-router-dom";

function Suggestions() {
  const {
    similarSongsPending,
    similarSongsFulfilled,
    similarSongsRejected,
    similarSongs,
    similarSongsErrorMessage,
  } = useSelector((state) => state.song);

  return (
    <div className={styles.suggestionsContainer}>
      <h4 className={`${styles.suggestionsText} ${styles.textShadow}`}>
        Similar Songs
      </h4>
      {similarSongsPending && <Loading />}
      {similarSongsFulfilled && (
        <div className={styles.suggestions}>
          {similarSongs.map((song) => (
            <Link to={`/song/${song._id}`} key={song._id}>
              <Tooltip content={song.name}>
                <div className={styles.suggestionImageContainer}>
                  <img
                    src={song.image}
                    alt={song.name}
                    className={styles.suggestionImage}
                  />
                </div>
              </Tooltip>
            </Link>
          ))}
        </div>
      )}
      {similarSongsRejected && <Message>{similarSongsErrorMessage}</Message>}
    </div>
  );
}

export default Suggestions;
