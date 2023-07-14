import { Label, Modal } from "../../../components";
import { StarFilled } from "@ant-design/icons";
import styles from "../styles.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

function Info() {
  const {
    // artistPending,
    // artistRejected,
    // artistFulfilled,
    artist,
    // errorMessage,
    // similarArtistsFulfilled,
    // similarArtists,
  } = useSelector((state) => state.artist);
  const [showModal, setShowModal] = useState(false);

  return (
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
      <div className={styles.ratingsContainer}>
        <div className={styles.ratingContainer}>
          <Label className={`${styles.ratingText} ${styles.textShadow}`}>
            R'NR RATING
          </Label>
          <div>
            <div className={styles.ratingPointContainer}>
              <StarFilled className={styles.ratingIcon} />
              <div className={styles.ratingPoint}>
                {artist.rating !== 0 ? artist.rating : "?"}
              </div>
              <div className={styles.ratingMax}>/ 10</div>
            </div>
          </div>
        </div>
        <div
          className={styles.ratingContainer}
          onClick={() => setShowModal(true)}
        >
          <Label className={`${styles.ratingText} ${styles.textShadow}`}>
            YOUR RATING
          </Label>
          <div>
            <div className={styles.ratingPointContainer}>
              <StarFilled className={styles.userRatingIcon} />
              <div className={styles.ratingPoint}>8</div>
              <div className={styles.ratingMax}>/ 10</div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.aboutText}>{artist.about}</p>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="My Modal"
      >
        <p>This is the content of the modal.</p>
      </Modal>
    </div>
  );
}

export default Info;
