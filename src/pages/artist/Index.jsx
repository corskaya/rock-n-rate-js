import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { getArtist, getSimilarArtists } from "./slice";
import { StarFilled } from "@ant-design/icons";
import { Tooltip, Button } from "../../components";

function Artist() {
  const { id } = useParams();
  const {
    // artistPending,
    // artistRejected,
    artistFulfilled,
    artist,
    // errorMessage,
    similarArtistsFulfilled,
    similarArtists,
  } = useSelector((state) => state.artist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtist(id));
    dispatch(getSimilarArtists(id));
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      {artistFulfilled && (
        <div className={styles.artistContainer}>
          <div className={styles.visualsContainer}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={artist.image}
                alt={artist._id}
              />
            </div>
            <Button className={styles.visualButton}>View Albums</Button>
            <Button className={styles.visualButton} color="Info">
              View Songs
            </Button>
          </div>
          <div className={styles.infoContainer}>
            <h1 className={`${styles.artistName} ${styles.textShadow}`}>
              {artist.name}
            </h1>
            <h3 className={`${styles.foundationYear} ${styles.textShadow}`}>
              {artist.foundationYear}
            </h3>
            <h3 className={`${styles.genres} ${styles.textShadow}`}>
              {artist.genres.join(" / ")}
            </h3>
            <div className={styles.ratingContainer}>
              <StarFilled className={styles.ratingIcon} />
              <div className={styles.ratingText}>{`${
                artist.rating !== 0 ? artist.rating : "?"
              } / 10`}</div>
            </div>
            <p className={styles.aboutText}>{artist.about}</p>
          </div>
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
        </div>
      )}
    </div>
  );
}

export default Artist;
