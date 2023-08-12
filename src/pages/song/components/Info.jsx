import { Label } from "../../../components";
import { StarFilled } from "@ant-design/icons";
import styles from "../styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import RateModal from "./RateModal";
import { setShowRateModal } from "../slice";

function Info() {
  const song = useSelector((state) => state.song.song);
  const showRateModal = useSelector((state) => state.song.showRateModal);
  const dispatch = useDispatch();

  return (
    <div className={styles.infoContainer}>
      <h1 className={`${styles.songName} ${styles.textShadow}`}>{song.name}</h1>
      <h3 className={`${styles.foundationYear} ${styles.textShadow}`}>
        {song.foundationYear}
      </h3>
      <h3 className={`${styles.genres} ${styles.textShadow}`}>
        {song.genres.join(" / ")}
      </h3>
      <div className={styles.ratingsContainer}>
        <div className={styles.ratingContainer}>
          <Label className={`${styles.ratingText} ${styles.textShadow}`}>
            R'NR RATING
          </Label>
          <div>
            <div className={styles.ratingPointContainer}>
              <StarFilled className={styles.ratingIcon} />
              <div className={styles.ratingPoint}>
                {song.rating !== 0 ? song.rating : "?"}
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
                {song.ratingOfRelevantUser ?? "?"}
              </div>
              <div className={styles.ratingMax}>/ 10</div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.aboutText}>{song.about}</p>
      <RateModal
        show={showRateModal}
        onClose={() => dispatch(setShowRateModal(false))}
        song={song}
      />
    </div>
  );
}

export default Info;
