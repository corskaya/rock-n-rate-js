import { Label } from "../../../components";
import { StarFilled } from "@ant-design/icons";
import styles from "../styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import RateModal from "./RateModal";
import { setShowRateModal } from "../slice";
import moment from "moment/moment";

function Info() {
  const album = useSelector((state) => state.album.album);
  const showRateModal = useSelector((state) => state.album.showRateModal);
  const dispatch = useDispatch();

  return (
    <div className={styles.infoContainer}>
      <div className={styles.mainInfoContainer}>
        <h1 className={`${styles.albumName} ${styles.textShadow}`}>
          {album.name}
        </h1>
        <h3 className={`${styles.foundationYear} ${styles.textShadow}`}>
          {moment(album.releaseDate).format("YYYY")}
        </h3>
        <h3 className={`${styles.genres} ${styles.textShadow}`}>
          {album.genres.join(" / ")}
        </h3>
      </div>
      <div className={styles.ratingsContainer}>
        <div className={styles.ratingContainer}>
          <Label className={`${styles.ratingText} ${styles.textShadow}`}>
            R'NR RATING
          </Label>
          <div>
            <div className={styles.ratingPointContainer}>
              <StarFilled className={styles.ratingIcon} />
              <div className={styles.ratingPoint}>
                {album.rating !== 0 ? album.rating : "?"}
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
                {album.ratingOfRelevantUser ?? "?"}
              </div>
              <div className={styles.ratingMax}>/ 10</div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.aboutTextWeb}>{album.about}</p>
      <RateModal
        show={showRateModal}
        onClose={() => dispatch(setShowRateModal(false))}
        album={album}
      />
    </div>
  );
}

export default Info;
