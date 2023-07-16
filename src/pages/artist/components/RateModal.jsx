import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import styles from "../styles.module.css";
import { rateArtist, removeRating } from "../slice";
import { Loading } from "../../../components";

const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function RateModal({ show, onClose, artist }) {
  const rateArtistPending = useSelector(
    (state) => state.artist.rateArtistPending
  );
  const removeRatingPending = useSelector(
    (state) => state.artist.removeRatingPending
  );
  const [hoveredPoint, setHoveredPoint] = useState(
    artist.ratingOfRelevantUser || 0
  );
  const [selectedPoint, setSelectedPoint] = useState(
    artist.ratingOfRelevantUser || 0
  );
  const [starSize, setStarSize] = useState(60);
  const [starTextSize, setStarTextSize] = useState(22);
  const dispatch = useDispatch();

  const handlePointHover = (point) => {
    setHoveredPoint(point);
  };

  const handlePointLeave = () => {
    if (selectedPoint > 0) {
      setHoveredPoint(selectedPoint);
    } else {
      setHoveredPoint(0);
    }
  };

  const handleSelectPoint = (point) => {
    setSelectedPoint(point);
  };

  const handleRateArtist = () => {
    if (selectedPoint <= 0 || selectedPoint === artist.ratingOfRelevantUser) {
      return;
    }
    dispatch(rateArtist({ id: artist._id, rating: selectedPoint }));
  };

  const handleRemoveRating = () => {
    dispatch(removeRating(artist._id));
  };

  useEffect(() => {
    if (!show) {
      setSelectedPoint(artist.ratingOfRelevantUser || 0);
      setHoveredPoint(artist.ratingOfRelevantUser || 0);
    }
  }, [show, artist.ratingOfRelevantUser]);

  useEffect(() => {
    setStarSize(90 + selectedPoint * 4);
    setStarTextSize(22 + selectedPoint * 1);
  }, [selectedPoint]);

  return (
    show && (
      <div className={styles.rateModalContainer}>
        <div onClick={onClose} className={styles.rateModalOverlay}></div>
        <div
          className={styles.rateModalContent}
          style={{
            minHeight: `${artist.ratingOfRelevantUser ? "270px" : "220px"}`,
          }}
        >
          <div className={styles.rateModalBodyContainer}>
            <div className={styles.rateModalBody}>
              <div className={styles.rateModalRatingIconContainer}>
                <StarFilled
                  className={styles.rateModalRatingIcon}
                  style={{ fontSize: starSize }}
                />
              </div>
              <h3 className={styles.rateModalRateThisText}>RATE THIS</h3>
              <h3 className={styles.rateModalArtistName}>{artist.name}</h3>
              <div className={styles.rateModalStarsContainer}>
                {points.map((point) =>
                  point > hoveredPoint ? (
                    <StarOutlined
                      key={point}
                      className={`${styles.rateModalStar} ${styles.rateModalStarPassive}`}
                      onMouseEnter={() => handlePointHover(point)}
                      onMouseLeave={handlePointLeave}
                      onClick={() => handleSelectPoint(point)}
                    />
                  ) : (
                    <StarFilled
                      key={point}
                      className={`${styles.rateModalStar} ${styles.rateModalStarActive}`}
                      onMouseEnter={() => handlePointHover(point)}
                      onMouseLeave={handlePointLeave}
                      onClick={() => handleSelectPoint(point)}
                    />
                  )
                )}
              </div>

              <h3
                className={styles.rateModalRatingText}
                style={{ fontSize: starTextSize }}
              >
                {selectedPoint || "?"}
              </h3>
              <button
                className={`${styles.rateModalBtn} ${
                  selectedPoint > 0 &&
                  selectedPoint !== artist.ratingOfRelevantUser
                    ? styles.rateModalBtnActive
                    : styles.rateModalBtnPassive
                }`}
                onClick={handleRateArtist}
              >
                {rateArtistPending ? <Loading size="S" /> : "Rate"}
              </button>

              <button
                className={`${styles.rateModalRemoveBtn} ${
                  selectedPoint !== artist.ratingOfRelevantUser
                    ? styles.rateModalRemoveBtnActive
                    : styles.rateModalRemoveBtnPassive
                }`}
                style={{
                  visibility: `${
                    artist.ratingOfRelevantUser ? "visible" : "hidden"
                  }`,
                }}
                onClick={handleRemoveRating}
              >
                {removeRatingPending ? <Loading size="S" /> : "Remove rating"}
              </button>
            </div>
          </div>
          <div className={styles.rateModalCloseBtnContainer}>
            <div className={styles.rateModalCloseBtn} onClick={onClose}>
              <CloseOutlined className={styles.rateModalCloseIcon} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default RateModal;
