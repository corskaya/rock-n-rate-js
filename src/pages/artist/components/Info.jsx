import { Label } from "../../../components";
import { StarFilled } from "@ant-design/icons";
import styles from "../styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import RateModal from "./RateModal";
import { getRatings, setShowRateModal, setShowRatingsModal } from "../slice";
import RatingsModal from "./RatingsModal";

function Info() {
  const artist = useSelector((state) => state.artist.artist);
  const showRateModal = useSelector((state) => state.artist.showRateModal);
  const showRatingsModal = useSelector(
    (state) => state.artist.showRatingsModal
  );
  const dispatch = useDispatch();

  const handleShowRatingsModal = () => {
    dispatch(getRatings(artist._id));
    dispatch(setShowRatingsModal(true));
  };

  return (
    <div className={styles.infoContainer}>
      <div className={styles.mainInfoContainer}>
        <h1 className={`${styles.artistName} ${styles.textShadow}`}>
          {artist.name}
        </h1>
        <h3 className={`${styles.foundationYear} ${styles.textShadow}`}>
          {artist.foundationYear}
        </h3>
        <h3 className={`${styles.genres} ${styles.textShadow}`}>
          {artist.genres.join(" / ")}
        </h3>
      </div>
      <div className={styles.ratingsContainer}>
        <div className={styles.ratingContainer}>
          <Label className={`${styles.ratingText} ${styles.textShadow}`}>
            R'NR RATING
          </Label>
          <div>
            <div
              className={styles.ratingPointContainer}
              onClick={handleShowRatingsModal}
            >
              <StarFilled className={styles.ratingIcon} />
              <div className={styles.ratingPoint}>
                {artist.rating !== 0 ? artist.rating : "?"}
              </div>
              <div className={styles.ratingMax}>/ 10</div>
            </div>
          </div>
        </div>
        <div className={styles.ratingContainer}>
          <Label className={`${styles.ratingText} ${styles.textShadow}`}>
            YOUR RATING
          </Label>
          <div>
            <div
              className={styles.ratingPointContainer}
              onClick={() => dispatch(setShowRateModal(true))}
            >
              <StarFilled className={styles.userRatingIcon} />
              <div className={styles.ratingPoint}>
                {artist.ratingOfRelevantUser ?? "?"}
              </div>
              <div className={styles.ratingMax}>/ 10</div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.aboutTextWeb}>{artist.about}</p>
      <RateModal
        show={showRateModal}
        onClose={() => dispatch(setShowRateModal(false))}
        artist={artist}
      />
      <RatingsModal
        show={showRatingsModal}
        onClose={() => dispatch(setShowRatingsModal(false))}
        artist={artist}
      />
    </div>
  );
}

export default Info;
