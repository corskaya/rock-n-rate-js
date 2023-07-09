import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { getArtist } from "./slice";
import { StarFilled } from "@ant-design/icons";
import Button from "../../components/Button/Index";

function Artist() {
  const { id } = useParams();
  const {
    // artistPending,
    // artistRejected,
    artistFulfilled,
    artist,
    // errorMessage,
  } = useSelector((state) => state.artist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtist(id));
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
            <h1 className={styles.artistName}>{artist.name}</h1>
            <h3 className={styles.foundationYear}>{artist.foundationYear}</h3>
            <h3 className={styles.subGenres}>{artist.subGenres.join(" / ")}</h3>
            <div className={styles.ratingContainer}>
              <StarFilled className={styles.ratingIcon} />
              <div className={styles.ratingText}>{`${
                artist.rating !== 0 ? artist.rating : "?"
              } / 10`}</div>
            </div>
            <p className={styles.aboutText}>{artist.about}</p>
          </div>
          <div className={styles.suggestionsContainer}>similar artists</div>
        </div>
      )}
    </div>
  );
}

export default Artist;
