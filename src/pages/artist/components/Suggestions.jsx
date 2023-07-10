import { useSelector } from "react-redux";
import { Tooltip } from "../../../components";
import styles from "../styles.module.css";
import { Link } from "react-router-dom";

function Suggestions() {
  const {
    // artistPending,
    // artistRejected,
    // artistFulfilled,
    // artist,
    // errorMessage,
    similarArtistsFulfilled,
    similarArtists,
  } = useSelector((state) => state.artist);

  return (
    <div className={styles.suggestionsContainer}>
      <h4 className={`${styles.suggestionsText} ${styles.textShadow}`}>
        Similar Artists
      </h4>
      {similarArtistsFulfilled && (
        <div className={styles.suggestions}>
          {similarArtists.map((artist) => (
            <Link to={`/artist/${artist._id}`}>
              <Tooltip content={artist.name}>
                <div
                  key={artist._id}
                  className={styles.suggestionImageContainer}
                >
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className={styles.suggestionImage}
                  />
                </div>
              </Tooltip>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Suggestions;
